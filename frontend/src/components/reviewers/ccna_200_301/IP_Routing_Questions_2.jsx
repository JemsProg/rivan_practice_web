import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const IpRoutingQuestions2 = () => {
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
<div>
<div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

<h1>IP Routing Questions 2</h1>
<div>
  <p />
  <p><strong>Premium Member:</strong> You can test your knowledge with these questions first via this <a href="https://www.9tut.com/ip-routing-quiz-2" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p className="ccnaquestionsnumber">Question 1</p>
  Refer to the exhibit. A router reserved these five routes from different routing information sources. Which two routes does the router install in its routing table? (Choose two)
  <table border={1}>
    <tbody>
      <tr>
        <td>IBGP route 10.0.0.0/30<br />
          RIP route 10.0.0.0/30<br />
          OSPF route 10.0.0.0/16<br />
          OSPF route 10.0.0.0/30<br />
          EIGRP route 10.0.0.1/32</td>
      </tr>
    </tbody>
  </table>
  <p>A. RIP route 10.0.0.0/30<br />
    B. iBGP route 10.0.0.0/30<br />
    C. OSPF route 10.0.0.0/30<br />
    D. EIGRP route 10.0.0.1/32<br />
    E. OSPF route 10.0.0.0/16</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In the five above routes, there are only three different routes which are 10.0.0.0/30 and 10.0.0.0/16 and 10.0.0.1/32. Since each of these routes has a different prefix length (subnet mask), they’re considered different destinations, and they will all be installed in the routing table.</p>
  <p>The prefix 10.0.0.0/30 was learned from three different routing protocols IBGP, RIP and OSPF so the route with lowest AD would be chosen. The AD of IBGP is 200 and the AD of RIP is 120 so for the prefix 10.0.0.0/30, only the OSPF route has the lowest AD (110) and it would be chosen to install into the routing table.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/8651-21.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/support/docs/ip/enhanced-interior-gateway-routing-protocol-eigrp/8651-21.html</a></p>
  <p>In fact this question should have three answers (including answer E), not sure why it only allows to choose two.</p>
  <p className="ccnaquestionsnumber">Question 2</p>
  A packet is destined for 10.10.1.22. Which static route does the router choose to forward the packet?
  <p>A. ip route 10.10.1.0 255.255.255.240 10.10.255.1<br />
    B. ip route 10.10.1.16 255.255.255.252 10.10.255.1<br />
    C. ip route 10.10.1.20 255.255.255.252 10.10.255.1<br />
    D. ip route 10.10.1.20 255.255.255.254 10.10.255.1</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The subnet 10.10.1.20/30 covers the destination 10.10.1.22 as this subnet ranges from 10.10.1.20 to 10.10.1.23 so it is the correct answer.</p>
  <p className="ccnaquestionsnumber">Question 3</p>
  Refer to the exhibit. Router R1 Fa0/0 cannot ping router R3 Fa0/1. Which action must be taken in router R1 to help resolve the configuration issue?
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/IP_Routing/destination_unreachable.jpg" alt="destination_unreachable.jpg" width={443} height={70} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>
          <p>R1#<strong>show ip route</strong><br />
            &lt;output omitted&gt;<br />
            Gateway of last resort is not set</p>
          <p>10.0.0.0/24 is subnetted, 1 subnets<br />
            C 10.10.10.0 is directly connected, FastEthernet0/0</p>
        </td>
        <td>
          <p>R2#<strong>show ip route</strong><br />
            &lt;output omitted&gt;<br />
            Gateway of last resort is not set</p>
          <p>20.0.0.0/24 is subnetted, 1 subnets<br />
            C 20.20.20.0 is directly connected, FastEthernet0/1<br />
            10.0.0.0/24 is subnetted, 1 subnets<br />
            C 10.10.10.0 is directly connected, FastEthernet0/0</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>R3#<strong>show ip route</strong><br />
            &lt;output omitted&gt;<br />
            Gateway of last resort is not set</p>
          <p>20.0.0.0/24 is subnetted, 1 subnets<br />
            C 20.20.20.0 is directly connected, FastEthernet0/1<br />
            10.0.0.0/24 is subnetted, 1 subnets<br />
            S 10.10.10.0 [1/0] via 20.20.20.1</p>
        </td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>
  <p>A. set the default network as 20.20.20.0/24<br />
    B. set the default gateway as 20.20.20.2<br />
    C. configure a static route with Fa0/1 as the egress interface to reach the 20.20.20.0/24 network<br />
    D. configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0/24 network</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p className="ccnaquestionsnumber">Question 4</p>
  Refer to the exhibit. Router R1 is running three different routing protocols. Which route characteristic is used by the router to forward the packet that it receives for destination IP 172.16.32.1?
  <p><img decoding="async" src="https://www.9tut.com/images/ccna/IP_Routing/three_different_routing_protocols.jpg" alt="three_different_routing_protocols.jpg" width={296} height={65} /></p>
  <p>A. longest prefix<br />
    B. metric<br />
    C. cost<br />
    D. administrative distance</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A router evaluates routes in the following order.<br />
    1. Prefix Length – The longest-matching route is preferred first. Prefix length trumps all other route attributes.<br />
    2. Administrative Distance – In the event there are multiple routes to a destination with the same prefix length, the route learned by the protocol with the lowest administrative distance is preferred.<br />
    3. Metric – In the event there are multiple routes learned by the same protocol with same prefix length, the route with the lowest metric is preferred. (If two or more of these routes have equal metrics, load balancing across them may occur.)</p>
  <p className="ccnaquestionsnumber">Question 5</p>
  Router R1 must send all traffic without a matching routing-table entry to 192.168.1.1. Which configuration accomplishes this task?
  <p>A. <br />
    R1#config t<br />
    R1(config)#ip routing<br />
    R1(config)#ip route default-route 192.168.1.1</p>
  <p>B. <br />
    R1#config t<br />
    R1(config)#ip routing<br />
    R1(config)#ip route 192.168.1.1 0.0.0.0 0.0.0.0</p>
  <p>C. <br />
    R1#config t<br />
    R1(config)#ip routing<br />
    R1(config)#ip route 0.0.0.0 0.0.0.0 192.168.1.1</p>
  <p>D. <br />
    R1#config t<br />
    R1(config)#ip routing<br />
    R1(config)#ip default-gateway 192.168.1.1</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p className="ccnaquestionsnumber">Question 6</p>
  Refer to the exhibit. How does router R1 handle traffic to 192.168.12.16?
  <table border={1}>
    <tbody>
      <tr>
        <td>EIGRP: 192.168.12.0/24<br />
          RIP: 192.168.12.0/27<br />
          OSPF: 192.168.12.0/26</td>
      </tr>
    </tbody>
  </table>
  <p>A. It selects the IS-IS route because it has the shortest prefix inclusive of the destination address<br />
    B. It selects the EIGRP route because it has the lowest administrative distance<br />
    C. It selects the OSPF route because it has the lowest cost<br />
    D. It selects the RIP route because it has the longest prefix inclusive of the destination address</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p className="ccnaquestionsnumber">Question 7</p>
  R1 has learned route 10.10.10.0/24 via numerous routing protocols. Which route is installed?
  <p>A. route with the lowest cost<br />
    B. route with the next hop that has the highest IP<br />
    C. route with the shortest prefix length<br />
    D. route with the lowest administrative distance</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p className="ccnaquestionsnumber">Question 8</p>
  What are two reasons for an engineer to configure a floating static route? (Choose two)
  <p>A. to automatically route traffic on a secondary path when the primary path goes down<br />
    B. to route traffic differently based on the source IP of the packet<br />
    C. to enable fallback static routing when the dynamic routing protocol fails<br />
    D. to support load balancing via static routing<br />
    E. to control the return path of traffic that is sent from the router</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Floating static routes are static routes that have an administrative distance greater than the administrative distance (AD) of another static route or dynamic routes. By default a static route has an AD of 1 then floating static route must have the AD greater than 1. Floating static route has a manually configured administrative distance greater than that of the primary route and therefore would not be in the routing table until the primary route fails.</p>
  <p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  Refer to the exhibit. A packet is being sent across router R1 to host 172.16.3.14. To which destination does the router send the packet?
  <p><img fetchpriority="high" decoding="async" src="https://www.9tut.com/images/ccna/IP_Routing/packet_destination.jpg" alt="packet_destination.jpg" width={498} height={238} /></p>
  <p>A. 207.165.200.246 via Serial0/1/0<br />
    B. 207.165.200.254 via Serial0/0/0<br />
    C. 207.165.200.254 via Serial0/0/1<br />
    D. 207.165.200.250 via Serial0/0/0</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 10</span></p>
  Refer to the exhibit. Which route type is configured to reach the internet?
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/BGP/BGP_Default_route.jpg" alt="BGP_Default_route.jpg" width={264} height={286} /></p>
  <pre>R1#show ip route{"\n"}Gateway of last resort is 10.10.10.18 to network 0.0.0.0{"\n"}{"\n"}10.0.0.0/8 is variably subnetted, 4 subnets. 3 Masks{"\n"}C 10.10.10.0/30 is directly connected. FastEthernet0/1{"\n"}O 10.10.13.0/25 [110/4576] via 10.10.10.1, 02:53:11, FastEthernet0/1{"\n"}C 10.10.10.16/30 is directly connected, FastEthernet0/24{"\n"}0 10.10.13.144/28 [110/110] via 10.10.10.1, 03:51:21, FastEthernet0/1{"\n"}B* 0.0.0.0/0 [20/0] via 10.10.10.18, 02:17:53</pre>
  <p>&nbsp;</p>
  <p>A. host route<br />
    B. default route<br />
    C. floating static route<br />
    D. network route</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>R1 uses the last entry (B* 0.0.0.0/0 …) to reach the Internet. The symbol * means this is a default route.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  Refer to the exhibit. Router R2 is configured with multiple routes to reach network 10 1.1 0/24 from router R1. What protocol is chosen by router R2 to reach the destination network 10.1 1 0/24?
  <p><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna/IP_Routing/multiple_routes.jpg" alt="multiple_routes.jpg" width={364} height={346} /></p>
  <p>A. OSPF<br />
    B. static<br />
    C. EIGRP<br />
    D. eBGP</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The static route has the Administrative Distance of 1 so it is preferred over other popular routing protocols.</p>
  <p><span className="ccnaquestionsnumber">Question 12<br />
    </span></p>
  Refer to the exhibit.
  <p><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna/IP_Routing/floating_route.jpg" alt="floating_route.jpg" width={391} height={288} /></p>
  <p>Which command configures a floating static route to provide a backup to the primary link?</p>
  <p>A. ip route 0.0.0.0 0.0.0.0 209.165.202.131<br />
    B. ip route 209.165.201.0 255.255.255.224 209.165.202.130<br />
    C. ip route 0.0.0.0 0.0.0.0 209.165.200.224<br />
    D. ip route 209.165.200.224 255.255.255.224 209.165.202.129 254</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Floating static routes are static routes that have an administrative distance greater than the administrative distance (AD) of another static route or dynamic routes. By default a static route has an AD of 1 then floating static route must have the AD greater than 1. Floating static route has a manually configured administrative distance greater than that of the primary route and therefore would not be in the routing table until the primary route fails.</p>
  <p>In this question, the floating static route to subnet 209.165.200.224/27 is manually assigned the AD of 254.</p>
</div>



	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default IpRoutingQuestions2;
