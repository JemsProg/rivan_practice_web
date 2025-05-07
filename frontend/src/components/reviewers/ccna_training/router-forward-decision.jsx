import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const RouterForwardDecision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      )
    );
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <h1 className="text-3xl font-bold mb-4">How Routers Make Forwarding Decisions</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-6">
        <p className="mb-4">
          We all know when a packet reaches a router interface, the router will send the packet to the destination. But how can a router determine which route is the best to use to send the packet? In this tutorial we will learn more about how a router makes the forwarding decision.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/How_router_routes/introduction.jpg" 
            alt="Router forwarding decision" 
            width="400"
          />
        </div>
        
        <p className="mb-6">
          To make the routing decision, the router must first build a table which contains all the <strong>best routes</strong>. When the packets arrive, the router just needs to check this table to choose the best match. This is called the routing table.
        </p>
      </div>

      {/* Routing Table Example */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]mb-4">Understanding the Routing Table</h2>
        
        <p className="mb-4">
          So what are stored in the routing table of a router? Let's have a look with the "show ip route" command which will display the routing table of the local router.
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>
            R1# show ip route<br />
            --output omitted--<br />
            D	192.168.20.0/26 [90/24513456] via 10.10.10.1<br />
            R	192.168.20.0/24 [120/5] via 10.10.10.2<br />
            O	192.168.0.0/19 [110/219414] via 10.10.10.13<br />
            D	192.168.20.0/27 [90/4123710] via 10.10.10.12<br />
            D	192.168.20.0/25 [90/14464211] via 10.10.10.11<br />
            S*	0.0.0.0/0 [1/0] via 10.10.10.14
          </code>
        </pre>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="font-semibold">Notes about this routing table:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>We see many routes of 192.168.20.0 with different prefix lengths (subnet masks) in this routing table. For example "/26", "/24", "/19"... This is normal because <strong>routes with different prefix lengths are considered different routes</strong>.</li>
            <li>The routes of 192.168.20.0 were learned via different routing protocols, which are symbolized by different letters at the beginning of each entry. For example, letter "D" means "EIGRP"; letter "O" means "OSPF", letter "R" means "RIP".</li>
            <li>The next hop of each entry is the IP address after the word "via". For example we have next hops of 10.10.10.1, 10.10.10.2, 10.10.10.13...</li>
          </ol>
        </div>
      </div>

      {/* Longest Prefix Matching */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]mb-4">Longest Prefix Matching Rule</h2>
        
        <p className="mb-4">
          Suppose R1 received a packet destined to 192.168.20.57. Which next hop will the router choose for the packet?
        </p>
        
        <p className="mb-4 font-semibold">
          The router chooses the best path in the routing table based on this single rule:
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="font-bold">Longest Prefix Matching Rule:</p>
          <p>The longest prefix that matches the route is preferred.</p>
        </div>
        
        <p className="mb-4">
          Let's check from longest prefix down to shortest prefix:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong>192.168.20.0/27</strong> ranges from 192.168.20.0 – 192.168.20.31 so the IP address 192.168.20.57 does not belong to this prefix → ignore.
          </li>
          <li>
            <strong>192.168.20.0/26</strong> ranges from 192.168.20.0 – 192.168.20.63 so the IP address 192.168.20.57 belongs to this prefix → router will choose this route to forward packets. We don't need to check other shorter prefixes like /25 or /19.
          </li>
        </ul>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="font-semibold">Note:</p>
          <p>
            To find out the range of each prefix you need to do subnetting well. If you still cannot do subnetting in your head then please read our <a href="https://www.9tut.com/subnetting-tutorial" className="text-[#0D2153]hover:underline">Subnetting Tutorial – Subnetting Made Easy</a>.
          </p>
        </div>
      </div>

      {/* Administrative Distance and Metric */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]mb-4">Administrative Distance and Metric Values</h2>
        
        <p className="mb-4">
          Maybe you will be surprised when we say "longest prefix match" is the only rule that the router uses to choose the path. Yes, in fact it is correct <strong>for routes that were installed into the routing table</strong>. The Administrative Distance (AD) and Metric values are only used to choose which prefixes <strong>will be installed</strong> into the routing table.
        </p>
        
        <p className="mb-6">
          Let's learn more about how these two values are used before a route is chosen to install into the routing table:
        </p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Lowest AD value:</h3>
            <p className="mb-2">
              Same prefixes (which means same routes with same prefix lengths) use the Administrative Distance to choose the route to install into the routing table. For example, our router learns of the following networks via different routing protocols as follows:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>192.168.1.0/24 using OSPF (AD = 110) with next hop IP of 10.1.1.1</li>
              <li>192.168.1.0/24 using RIP (AD = 120) with next hop IP of 10.1.2.1</li>
              <li>192.168.1.0/24 using EIGRP (AD = 90) with next hop IP of 10.1.3.1</li>
            </ul>
            
            <p>
              Then the third route with EIGRP will be installed into the routing table as the AD of EIGRP is smallest.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Lowest Metric value:</h3>
            <p className="mb-2">
              This value is used as a tie-break when same prefixes have same AD. The route with the lowest metric is preferred. Use the same example above but with metric values:
            </p>
            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>192.168.1.0/24 using OSPF (AD = 110) with next hop IP of 10.1.1.1</li>
              <li>192.168.1.0/24 using RIP (AD = 120) with next hop IP of 10.1.2.1</li>
              <li>192.168.1.0/24 using EIGRP (AD = 90) with metric of 30000 and next hop IP of 10.1.3.1</li>
              <li>192.168.1.0/24 using EIGRP (AD = 90) with metric of 25000 and next hop IP of 10.1.4.1</li>
            </ul>
            
            <p>
              Then the fourth route (EIGRP with metric of 25000) will be chosen to install into the routing table because of lowest AD and lowest metric.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6 mb-6">
          <p className="font-semibold">Note:</p>
          <p>
            With additional configuration then load balancing may take place as EIGRP supports this feature. But load balancing is out of scope in this tutorial.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]mb-4">Conclusion</h2>
        
        <p className="mb-4">
          In summary, before a prefix is installed into the routing table, two values are compared in this order:
        </p>
        
        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Administrative Distance</li>
          <li>Metric</li>
        </ol>
        
        <p className="mb-6">
          After a prefix is installed into the routing table then only the longest prefix match rule is used to choose the best route as the routing table is already filtered of all but the best routes, regardless of AD or metric.
        </p>
        
        <p>
          A prefix is a network address with a subnet mask. For example 192.68.20.0/26 is a prefix.
        </p>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default RouterForwardDecision;