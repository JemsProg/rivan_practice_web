import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const IpRoutingQuestions = () => {
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

<h1>IP Routing Questions</h1>
			
<div>
  <p />
  <p><strong>Premium Member</strong>: You can test your knowledge with these questions first via this <a href="https://www.9tut.com/ip-routing-quiz" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which statement about static and dynamic routes is true?
  <p>A. Dynamic routes are manually configured by a network administrator, while static routes are automatically learned and adjusted by a routing protocol<br />
    B. Static routes are manually configured by a network administrator, while dynamic routes are automatically learned and adjusted by a routing protocol<br />
    C. Static routes tell the router how to forward packets to networks that are not directly connected, while dynamic routes tell the router how to forward packets to networks that are directly connected<br />
    D. Dynamic routes tell the router how to forward packets to networks that are not directly connected, while static routes tell the router how to forward packets to networks that are directly connected</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Refer to the exhibit. When PC 1 sends a packet to PC2, the packet has which source and destination IP address when it arrives at interface Gi0/0 on router R2?
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="./CCNA Training » IP Routing Questions_files/packet_source_destination_IP.jpg" alt="packet_source_destination_IP.jpg" width={398} height={180} /></p>
  <p>A. source 192.168.10.10 and destination 10.10.2.2<br />
    B. source 192.168.20.10 and destination 192.168.20.1<br />
    C. source 192.168.10.10 and destination 192.168.20.10<br />
    D. source 10.10.1.1 and destination 10.10.2.2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The source and destination IP addresses of the packets are unchanged on all the way. Only source and destination MAC addresses are changed.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which of the following dynamic routing protocols are Distance Vector routing protocols? (Choose two)
  <p>A. IS-IS<br />
    B. EIGRP<br />
    C. OSPF<br />
    D. BGP<br />
    E. RIP</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B E
  </p><p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Refer to the exhibit. With which metric was the route to host 172.16.0.202 learned?
  <p><img decoding="async" src="./CCNA Training » IP Routing Questions_files/metric_best_route.jpg" alt="metric_best_route.jpg" width={646} height={216} /></p>
  <p>A. 0<br />
    B. 110<br />
    C. 38443 <br />
    D. 3184439</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Both the line “O 172.16.0.128/25” and “S 172.16.0.0/24” cover the host 172.16.0.202 but with the “longest (prefix) match” rule the router will choose the first route.</p>
  <p>Note: Network 172.16.0.192/29 does not cover host 172.16.0.202. For network 172.16.0.192/29:</p>
  <p>Increment: 8<br />
    Network address: 172.16.0.192<br />
    Broadcast address: 172.16.0.199</p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Refer to the exhibit. Which command would you use to configure a static route on Router 1 to network 192.168.202.0/24 with a nondefault administrative distance?
  <p><img decoding="async" className="aligncenter" src="./CCNA Training » IP Routing Questions_files/static_route_nondefault.jpg" alt="static_route_nondefault.jpg" width={385} height={210} /></p>
  <p>A. router1(config)#ip route 192.168.202.0 255.255.255.0 192.168.201.2 1<br />
    B. router1(config)#ip route 192.168.202.0 255.255.255.0 192.168.201.2 5<br />
    C. router1(config)#ip route 1 192.168.201.1 255.255.255.0 192.168.201.2<br />
    D. router1(config)#ip route 5 192.168.202.0 255.255.255.0 192.168.201.2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The default AD of static route is 1 so we need to configure another number for the static route.</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Refer to the exhibit. Which type of route does R1 use to reach host 10.10.13.10/32?
  <p><img loading="lazy" decoding="async" className="aligncenter" src="./CCNA Training » IP Routing Questions_files/BGP_Default_route.jpg" alt="BGP_Default_route.jpg" width={264} height={286} /></p>
  <pre>R1#show ip route{"\n"}Gateway of last resort is 10.10.10.18 to network 0.0.0.0{"\n"}{"\n"}10.0.0.0/8 is variably subnetted, 4 subnets. 3 Masks{"\n"}C 10.10.10.0/30 is directly connected. FastEthernet0/1{"\n"}O 10.10.13.0/25 [110/4576] via 10.10.10.1, 02:53:11, FastEthernet0/1{"\n"}C 10.10.10.16/30 is directly connected, FastEthernet0/24{"\n"}0 10.10.13.144/28 [110/110] via 10.10.10.1, 03:51:21, FastEthernet0/1{"\n"}B* 0.0.0.0/0 [20/0] via 10.10.10.18, 02:17:53</pre>
  <p>A. floating static route<br />
    B. host route<br />
    C. default route <br />
    D. network route</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>From the output, we see R1 will use the entry “O 10.10.13.0/25 [110/4576] via 10.10.10.1, …” to reach host 10.10.13.10. This is a network route.</p>
  <p>Note: “B* 0.0.0.0/0 …” is a default route.</p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Refer to the exhibit. If configuring a static default route on the router with the <strong>ip route 0.0.0.0 0.0.0.0 10.13.0.1 120</strong> command, how does the router respond?
  <pre>Gateway of last resort is 10.12.0.1 to network 0.0.0.0{"\n"}{"\n"}O*E2{"  "}0.0.0.0/0 [110/1] via 10.12.0.1, 00:00:01, GigabitEthernet0/0{"\n"}{"      "}10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks{"\n"}C{"     "}10.0.0.0/24 is directly connected, GigabitEthernet0/0{"\n"}L{"     "}10.0.0.2/32 is directly connected, GigabitEthernet0/0{"\n"}C{"     "}10.13.0.0/24 is directly connected, GigabitEthernet0/1{"\n"}L{"     "}10.13.0.2/32 is directly connected, GigabitEthernet0/1</pre>
  <p>A. It ignores the new static route until the existing OSPF default route is removed<br />
    B. It immediately replaces the existing OSPF route in the routing table with the newly configured static route<br />
    C. It starts load-balancing traffic between the two default routes<br />
    D. It starts sending traffic without a specific matching entry in the routing table to GigabitEthernet0/1</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Our new static default route has the Administrative Distance (AD) of 120, which is bigger than the AD of OSPF External route (O*E2) so it will not be pushed into the routing table until the current OSPF External route is removed.</p>
  <p>For your information, if you don’t type the AD of 120 (using the command “ip route 0.0.0.0 0.0.0.0 10.13.0.1”) then the new static default route would replace the OSPF default route as the default AD of static route is 1. You will see such line in the routing table:</p>
  <p>S* 0.0.0.0/0 [1/0] via 10.13.0.1</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  When a floating static route is configured, which action ensures that the backup route is used when the primary route falls?
  <p>A. The floating static route must have a higher administrative distance than the primary route so it is used as a backup<br />
    B. The administrative distance must be higher on the primary route so that the backup route becomes secondary<br />
    C. The floating static route must have a lower administrative distance than the primary route so it is used as a backup<br />
    D. The default-information originate command must be configured for the route to be installed into the routing table</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  Which attribute does a router use to select the best path when two or more different routes to the same destination exist from two different routing protocols?
  <p>A. dual algorithm<br />
    B. metric<br />
    C. administrative distance<br />
    D. hop count</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  Refer to the exhibit. Which route does R1 select for traffic that is destined to 192.168.16.2?
  <pre>R1#show ip route{"\n"}D{"    "}192.168.16.0/26 [90/2679326] via 192.168.1.1{"\n"}R{"    "}192.168.16.0/24 [120/3] via 192.168.1.2{"\n"}O{"    "}192.168.16.0/21 [110/2] via 192.168.1.3{"\n"}i L1 192.168.16.0/27 [115/30] via 192.168.1.4</pre>
  <p>A. 192.168.16.0/21<br />
    B. 192.168.16.0/24<br />
    C. 192.168.16.0/26 <br />
    D. 192.168.16.0/27</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The destination IP addresses match all four entries in the routing table but the 192.168.16.0/27 has the longest prefix so it will be chosen. This is called the “longest prefix match” rule.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  Refer to the exhibit. Which prefix does Router 1 use for traffic to Host A?
  <p><img loading="lazy" decoding="async" className="aligncenter" src="./CCNA Training » IP Routing Questions_files/Traffic_routing.jpg" alt="Traffic_routing.jpg" width={456} height={179} /></p>
  <pre>Router1#show ip route{"\n"}Gateway of last resort is 10.10.11.2 to network 0.0.0.0{"\n"}{"\n"}{"   "}209.165.200.0/27 is sudnetted, 1 subnets{"\n"}B{"    "}209.165.200.224 [20/0] via 10.10.12.2, 03:03:03{"\n"}{"   "}209.165.201.0/27 is sudnetted, 1 subnets{"\n"}B{"    "}209.165.201.0 [20/0] via 10.10.12.2, 03:03:03{"\n"}{"   "}209.165.202.0/27 is subnetted, 1 subnets{"\n"}B{"    "}209.165.202.128 [20/0] via 10.10.12.2, 03:03:03{"\n"}{"   "}10.0.0.0/8 is variably subnetted, 8 subnets, 4 masks{"\n"}C{"    "}10.10.10.0/28 is directly connected, GigabitEthernet0/0{"\n"}C{"    "}10.10.11.0/30 is directly connected, FastEthernet2/0{"\n"}C{"    "}10.10.12.0/30 is directly connected, GigabitEthernet0/1{"\n"}O{"    "}10.10.13.0/25 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0{"\n"}O{"    "}10.10.13.128/28 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0{"\n"}O{"    "}10.10.13.144/28 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0{"\n"}O{"    "}10.10.13.160/29 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0{"\n"}O{"    "}10.10.13.208/29 [110/2] via 10.10.10.1, 00:00:03, GigabitEthernet0/0{"\n"}S*{"  "}0.0.0.0/0 [1/0] via 10.10.11.2</pre>
  <p>A. 10.10.10.0/28<br />
    B. 10.10.13.0/25<br />
    C. 10.10.13.144/28 <br />
    D. 10.10.13.208/29</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The prefix with “longest prefix” will be matched first, in this case is “/29”.</p>
  <p><span className="ccnaquestionsnumber">Question 12<br />
    </span></p>
  Router A learns the same route from two different neighbors, one of the neighbor routers is an OSPF neighbor and the other is an EIGRP neighbor. What is the administrative distance of the route that will be installed in the routing table?
  <p>A. 20<br />
    B. 90<br />
    C. 110<br />
    D. 115</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Administrative distance (AD) of EIGRP is 90 while the AD of OSPF is 110 so EIGRP route will be chosen to install into the routing table.</p>
  <p><span className="ccnaquestionsnumber">Question 13<br />
    </span></p>
  Refer to the exhibit. How does router R1 handle traffic to 192.168.10.16?
  <table border={1}>
    <tbody>
      <tr>
        <td>R1# show ip route <br />
          D 192.168.10.0/24 [90/2679326] via 192.168.1.1<br />
          R 192.168.10.0/27 [120/3] via 192.168.1.2<br />
          O 192.168.10.0/28 [110/2] via 192.168.1.3<br />
          i L1 192.168.10.0/13 [115/30] via 192.168.1.4</td>
      </tr>
    </tbody>
  </table>
  <p>A. It selects the IS-IS route because it has the shortest prefix inclusive of the destination address<br />
    B. It selects the RIP route because it has the longest prefix: inclusive of the destination address<br />
    C. It selects the OSPF route because it has the lowest cost<br />
    D. It selects the EIGRP route because it has the lowest administrative distance</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Note: The “O 192.168.10.0/28” route ranges from 192.168.10.0 to 192.168.10.15 only so it does not include destination 192.168.10.16 so OSPF route is not the correct answer.</p>
  <p><span className="ccnaquestionsnumber">Question 14<br />
    </span></p>
  Refer to the exhibit. Which path is used by the router for Internet traffic?
  <p><img loading="lazy" decoding="async" className="aligncenter" src="./CCNA Training » IP Routing Questions_files/Internet_path.jpg" alt="Internet_path.jpg" width={580} height={166} /></p>
  <pre>R1#show ip route{"\n"}Gateway of last resort is 10.10.11.2 to network 0.0.0.0{"\n"}209.165.200.0/27 is subnetted, 1 subnets{"\n"}B{"\t"}209.165.200.224 [20/0] via 10.10.12.2, 00:10:34{"\n"}{"\t"}10.0.0.0/8 is variably subnetted, 4 subnets, 3 masks{"\n"}C{"\t"}{"\t"}10.10.10.0/28 is directly connected, GigabitEthernet0/0{"\n"}C{"\t"}{"\t"}10.10.11.0/30 is directly connected, FastEthernet2/0{"\n"}C{"\t"}{"\t"}10.10.13.0/30 [110/2] via 10.10.10.1, 00:03:34, GigabitEthernet0/0{"\n"}C{"\t"}{"\t"}10.10.12.0/30 is directly connected, GigabitEthernet0/1{"\n"}S*{"\t"}0.0.0.0/0 [1/0] via 10.10.11.2{"\n"}{"\n"}Switch1#show ip route{"\n"}Gateway of last resort is not set{"\n"}{"\t"}10.0.0.0/8 is variably subnetted, 2 subnets, 2 masks{"\n"}C{"\t"}{"\t"}10.10.10.0/28 is directly connected, FastEthernet0/1{"\n"}C{"\t"}{"\t"}10.10.13.0/24 is directly connected, VLAN20{"\n"}</pre>
  <p>A. 209.165.200.0/27<br />
    B. 10.10.10.0/28<br />
    C. 0.0.0.0/0<br />
    D. 10.10.13.0/24</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p>
</div>



	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default IpRoutingQuestions;
