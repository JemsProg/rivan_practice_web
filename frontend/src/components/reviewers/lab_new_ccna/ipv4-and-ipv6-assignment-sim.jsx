import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const IPv4IPv6AssignmentSim = () => {
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
        <h1 className="text-3xl font-bold mb-4">IPv4 and IPv6 Assignment Sim</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-6">
          Reference Topology Diagram and table. Configure IPv4 and IPv6 between the two routers.
        </p>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 1:</strong></p>
        <p className="mb-4">
          + Configure R1 with the <strong>first</strong> usable host IP address in the IPv4 network.
          <br />+ Configure R2 with the <strong>last</strong> usable host IP address in the IPv4 network.
          <br />+ Verify connectivity using ping.
        </p>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 2:</strong></p>
        <p className="mb-6">
          + Do not assign the subnet router anycast address to either router.
          <br />+ Configure R1 with the <strong>first</strong> usable host IP address in the IPv6 network.
          <br />+ Configure R2 with the <strong>last</strong> usable host IP address in the IPv6 network.
          <br />+ Verify connectivity using ping.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/IPv4_and_IPv6_Assignment_Sim/topology.jpg"
          alt="topology"
          width="410"
          height="129"
        />
      </div>


      {/* Task 1 Solution */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 1:</strong></p>
        <p className="mb-2">
          + Configure R1 with the <strong>first</strong> usable host IP address in the IPv4 network.
          <br />+ Configure R2 with the <strong>last</strong> usable host IP address in the IPv4 network.
        </p>
        <p className="mb-4">
          In the subnet 10.0.12.4/30 (increment: 4), the network address is 10.0.12.4 &amp; the broadcast address is 10.0.12.7. 
          Therefore the first usable host IP address is 10.0.12.5 while the last usable host IP address is 10.0.12.6.
        </p>
        
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config)#interface e0/0<br />
          R1(config-if)#ip address 10.0.12.5 255.255.255.252<br />
          R1(config-if)#no shut
        </pre>
        
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2(config)#interface e0/0<br />
          R2(config-if)#ip address 10.0.12.6 255.255.255.252<br />
          R2(config-if)#no shut
        </pre>
        
        <p className="mb-2">+ Verify connectivity using ping.</p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config-if)#exit<br />
          R1(config)#exit<br />
          R1#ping 10.0.12.6<br />
          .!!!! -&gt; ping successful
        </pre>
      </div>

      {/* Task 2 Solution */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 2:</strong></p>
        <p className="mb-2">
          + Do not assign the subnet router anycast address to either router.
          <br />+ Configure R1 with the <strong>first</strong> usable host IP address in the IPv6 network.
          <br />+ Configure R2 with the <strong>last</strong> usable host IP address in the IPv6 network.
        </p>
        <p className="mb-4">
          Note: The subnet router anycast address is the lowest address in the subnet,
          so it looks like the "network address". For example, if the prefix for the
          subnet is 2001:db8:12::/126 then the subnet router anycast address for that
          subnet is 2001:db8:12::.
        </p>
        <p className="mb-4">
          Since we are working with 2001:db8:12::/126 then the first 126 binary bits
          are the prefix and we have 2<sup>128-126</sup> = 2<sup>2</sup> = 4 host
          addresses in this subnet. 2001:db8:12::0 is the network address (or subnet
          router anycast address) while other 3 host addresses are in range from
          2001:db8:12::1 to 2001:db8:12::3.
        </p>
        <p className="mb-4">
          Since IPv6 does not reserve the last address as a broadcast address,
          2001:db8:12::3 is the last usable host address. The first usable host
          address is 2001:db8:12::1.
        </p>
        
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config)#interface e0/0<br />
          R1(config-if)#ipv6 address 2001:db8:12::1/126
        </pre>
        
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2(config)#interface e0/0<br />
          R2(config-if)#ipv6 address 2001:db8:12::3/126
        </pre>
        
        <p className="mb-2">+ Verify connectivity using ping.</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#ping 2001:db8:12::3<br />
          !!!!! -&gt; successful
        </pre>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#, R2#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default IPv4IPv6AssignmentSim;