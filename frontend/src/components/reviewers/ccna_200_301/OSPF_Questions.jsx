import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const OspfQuestions = () => {
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

<h1>OSPF Questions</h1>

<div>
  <p />
  <p><strong>Premium Member</strong>: You can test your knowledge with these questions first via this <a href="https://www.9tut.com/ospf-quiz" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p>Note: If you are not sure about OSPF, please read our <a href="https://www.9tut.com/ospf-routing-protocol-tutorial" target="_blank" rel="noopener noreferrer">OSPF Tutorial</a>.</p>
  <table border={1}>
    <tbody>
      <tr>
        <td>
          <p><span className="blueandbold">Quick OSPF review</span></p>
          <p>– OSPF is a link-state routing protocol, which runs Dijkstra algorithm to calculate the shortest path.<br />
            – Link-state routing protocol like OSPF has a common view of entire topology<br />
            – OSPF only uses bandwidth to calculate metric.<br />
            – Area 0 is called the backbone area<br />
            In order to become OSPF neighbor, the following values must be matched on both routers:</p>
          <p>+ Area ID<br />
            + Authentication<br />
            + Hello and Dead Intervals<br />
            + Stub area Flag<br />
            + MTU Size</p>
          <p>– Two options for OSPF authentication:<br />
            + Plain text authentication<br />
            + MD5 authentication</p>
          <p>– Hello packets of OSPF are multicast to 224.0.0.5<br />
            – “Broadcast” is the default network type for an OSPF enabled Ethernet interface (while Point-to-Point is the default OSPF network type for Serial interface with HDLC and PPP encapsulation). By default, the timers on a broadcast network (Ethernet, point-to-point and point-to-multipoint) are 10 seconds hello and 40 seconds dead. The timers on a non-broadcast network are 30 seconds hello 120 seconds dead.</p>
          <p>OSPF uses the following criteria to select the router ID:<br />
            1. Manual configuration of the router ID (via the “router-id x.x.x.x” command under OSPF router configuration mode).<br />
            2. Highest IP address on a loopback interface.<br />
            3. Highest IP address on a non-loopback and active (no shutdown) interface.</p>
          <p>The formula to calculate OSPF cost is:</p>
          <p>Cost = 10<sup>8</sup> / Bandwidth</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  What is the purpose of the show ip ospf interface command?
  <p>A. displaying OSPF-related interface information<br />
    B. displaying general information about OSPF routing processes<br />
    C. displaying OSPF neighbor information on a per-interface basis<br />
    D. displaying OSPF neighbor information on a per-interface-type basis</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  When OSPF learns multiple paths to a network, how does it select a route?
  <p>A. It multiple the active K value by 256 to calculate the route with the lowest metric.<br />
    B. For each existing interface, it adds the metric from the source router to the destination to calculate the route with the lowest bandwidth.<br />
    C. It divides a reference bandwidth of 100 Mbps by the actual bandwidth of the existing interface to calculate the router with the lowest cost.<br />
    D. It count the number of hops between the source router and the destination to determine the router with the lowest metric</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  A user configured OSPF and advertised the Gigabit Ethernet interface in OSPF. By default, which type of OSPF network does this interface belong to?
  <p>A. point-to-multipoint<br />
    B. point-to-point<br />
    C. broadcast<br />
    D. nonbroadcast</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Broadcast network type is the default for an OSPF enabled ethernet interface (while Point-to-Point is the default OSPF network type for Serial interface with HDLC and PPP encapsulation).</p>
  <p>Reference: <a href="https://www.oreilly.com/library/view/cisco-ios-cookbook/0596527225/ch08s15.html" target="_blank" rel="noopener noreferrer">https://www.oreilly.com/library/view/cisco-ios-cookbook/0596527225/ch08s15.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  You have configured a router with an OSPF router ID, but its IP address still reflects the physical interface. Which action can you take to correct the problem in the least disruptive way?
  <p>A. Reload the OSPF process<br />
    B. Reload the router<br />
    C. Save the router configuration<br />
    D. Specify a loopback address</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  An engineer configured an OSPF neighbor as a designated router. Which state verifies the designated router is in the proper mode?
  <p>A. Exchange<br />
    B. 2-way<br />
    C. Full <br />
    D. Init</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Refer to the exhibit. If OSPF is running on this network, how does Router 2 handle traffic from Site B to 10.10.13.128/25 at Site A?
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/OSPF/OSPF_load_balance.jpg" alt="OSPF_load_balance.jpg" width={437} height={80} /></p>
  <pre>Router2#<strong>show ip route</strong>{"\n"}Gateway of last resort is not set{"\n"}{"\n"}{"  "}10.0.0.0/8 is variably subnetted, 4 subnets, 2 masks{"\n"}C{"   "}10.10.10.8/30 is directly connected, FastEthernet0/2{"\n"}C{"   "}10.10.10.12/30 is directly connected, FastEthernet0/1{"\n"}O{"   "}10.10.13.0/25 [110/11] via 10.10.10.9, 00:00:02, FastEthernet0/2{"\n"}{"                  "}[110/11] via 10.10.10.13, 00:00:02, FastEthernet0/1{"\n"}C{"   "}10.10.10.4/30 is directly connected, FastEthernet0/2</pre>
  <p>A. It sends packets out of interface Fa0/2 only<br />
    B. It sends packets out of interface Fa0/1 only<br />
    C. It is unreachable and discards the traffic<br />
    D. It load-balances traffic out of Fa0/1 and Fa0/2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Router2 does not have an entry for the subnet 10.10.13.128/25. It only has an entry for 10.10.13.0/25, which ranges from 10.10.13.0 to 10.10.13.127.</p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  A user configured OSPF in a single area between two routers. A serial interface connecting R1 and R2 is running encapsulation PPP. By default which OSPF network type is seen on this interface when the user types show ip ospf interface on R1 or R2?
  <p>A. point-to-multipoint<br />
    B. broadcast<br />
    C. point-to-point<br />
    D. non-broadcast</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The default OSPF network type for HDLC and PPP on Serial link is point-to-point (while the default OSPF network type for Ethernet link is Broadcast).</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  Refer to the exhibit. What does router R1 use as its OSPF router-ID?
  <p><img fetchpriority="high" decoding="async" src="https://www.9tut.com/images/ccna/OSPF/OSPF_router_id_show_ip_interface_brief.jpg" alt="OSPF_router_id_show_ip_interface_brief.jpg" width={622} height={133} /></p>
  <p>A. 10.10.1.10<br />
    B. 10.10.10.20<br />
    C. 172.16.15.10<br />
    D. 192.168.0.1</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>OSPF uses the following criteria to select the router ID:<br />
    1. Manual configuration of the router ID (via the “router-id x.x.x.x” command under OSPF router configuration mode).<br />
    2. Highest IP address on a loopback interface.<br />
    3. Highest IP address on a non-loopback and active (no shutdown) interface.</p>
  <p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  Refer to the exhibit. The “show ip ospf interface” command has been executed on R1. How is OSPF configured?
  <table border={1}>
    <tbody>
      <tr>
        <td>Designated Router (ID) 10.11.11.11, Interface address 10.10.10.1<br />
          Backup Designated router (ID) 10.3.3.3, Interface address 10.10.10.3<br />
          Timer intervals configured, Hello 10, Dead 40, Wait 40, Retransmit 5<br />
          oob-resync timeout 40<br />
          Hello due in 00:00:08<br />
          Supports Link-local Signaling (LLS)<br />
          Cisco NSF helper support enabled <br />
          IETF NSF helper support enabled <br />
          Index 1/1/1, flood queue length 0 <br />
          Next 0x0(0)/0x0(0)/0x0(0)<br />
          Last flood scan length is 1, maximum is 6 <br />
          Last flood scan time is 0 msec, maximum is 1 msec <br />
          Neighbor Count is 3, Adjacent neighbor count is 3 <br />
          Adjacent with neighbor 10.1.1.4 <br />
          Adjacent with neighbor 10.2.2.2<br />
          Adjacent with neighbor 10.3.3.3 (Backup Designated Router)<br />
          Suppress hello for 0 neighbor(s)</td>
      </tr>
    </tbody>
  </table>
  <p>A. The interface is not participating in OSPF<br />
    B. A point-to-point network type is configured<br />
    C. The default Hello and Dead timers are in use<br />
    D. There are six OSPF neighbors on this interface</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>From the output we can see there are Designated Router &amp; Backup Designated Router for this OSPF domain so this is a broadcast network (point-to-point and point-to-multipoint networks do not elect DR &amp; BDR) -&gt; Answer B is not correct.</p>
  <p>By default, the timers on a broadcast network (Ethernet, point-to-point and point-to-multipoint) are 10 seconds hello and 40 seconds dead (therefore answer C is correct). The timers on a non-broadcast network are 30 seconds hello 120 seconds dead.</p>
  <p>From the line “Neighbor Count is 3”, we learn there are four OSPF routers in this OSPF domain -&gt; Answer D is not correct.</p>
  <p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  R1 has learned route 192.168.12.0/24 via IS-IS, OSPF, RIP and Internal EIGRP. Under normal operating conditions, which routing protocol is installed in the routing table?
  <p>A. IS-IS<br />
    B. RIP<br />
    C. Internal EIGRP<br />
    D. OSPF</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>With the same route (prefix), the router will choose the routing protocol with lowest Administrative Distance (AD) to install into the routing table. The AD of Internal EIGRP (90) is lowest so it would be chosen. The table below lists the ADs of popular routing protocols.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/EIGRP/EIGRP_Administrative%20Distances_popular_routing_protocols.jpg" alt="EIGRP_Administrative Distances_popular_routing_protocols.jpg" width={365} height={178} /></p>
  <p>Note: The AD of IS-IS is 115. The “EIGRP” in the table above is “Internal EIGRP”. The AD of “External EIGRP” is 170. An EIGRP external route is a route that was redistributed into EIGRP.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  Refer to the exhibit. The <strong>default-information originate</strong> command is configured under the R1 OSPF configuration. After testing, workstations on VLAN 20 at Site B cannot reach a DNS server on the Internet.
  <p>Which action corrects the configuration issue?</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/OSPF/OSPF_new_path.jpg" alt="OSPF_new_path.jpg" width={450} height={100} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>
          <p>R2#show run | b router ospf<br />
            router ospf 1<br />
            router-id 2.2.2.2<br />
            log-adjacency-changes<br />
            auto-cost reference-bandwidth 10000<br />
            network 10.10.10.1 0.0.0.0 area 0<br />
            network 10.10.13.1 0.0.0.0 area 0</p>
          <p>====================================</p>
          <p>R2#show ip route<br />
            Gateway of last resort is not set<br />
            10.0.0.0/8 is variably subnetted, 3 subnets, 3 masks<br />
            C 10.10.10.0/30 is directly connected<br />
            C 10.10.13.0/25 is directly connected, Vlan20<br />
            C 10.10.13.144/28 is directly connected, Vlan40</p>
        </td>
        <td>
          <p>R1#show run | b router ospf<br />
            router ospf 1<br />
            router-id 1.1.1.1<br />
            log-adjacency-changes<br />
            auto-cost reference-bandwidth 10000 <br />
            network 10.10.10.2 0.0.0.0 area 0<br />
            default-information originate</p>
          <p>======================================</p>
          <p>R1#show ip route<br />
            Gateway of last resort is not set<br />
            10.0.0.0/8 is variably subnetted, 4 subnets, 3 masks<br />
            C 10.10.10.0/30 is directly connected, FastEthernet0/1<br />
            O 10.10.13.0/25 [110/5766] via 10.10.10.1,00:33:22<br />
            C 10.10.10.16/30 is directly connected, FastEthernet0/24<br />
            O 10.10.13.144/28 [110/110] via 10.10.10.1, 01:33:33</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>A. Add the <strong>default-information originate</strong> command on R2<br />
    B. Add the always keyword to the default-information originate command on R1<br />
    C. Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.18 command on R1<br />
    D. Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.2 command on R2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p className="ccnaexplanation">Explanation</p>
  <p>The <strong>default-information originate</strong> command advertises a default route into a normal area, provided the advertising router already has a default route. But in the routing table of R1 we don’t see such a default route. Therefore we have to configure one.</p>
  <p>We cannot only add the “always” keyword to the command “default-information originate” on R1 because R2 still does not know how to forward traffic received from R1.</p>
  <p><span className="ccnaquestionsnumber">Question 12</span></p>
  Refer to the exhibit. An engineer is bringing up a new circuit to the MPLS provider on the Gi0/1 interface of Router1. The new circuit uses eBGP and learns the route to VLAN25 from the BGP path.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/OSPF/OSPF_eBGP.jpg" alt="OSPF_eBGP.jpg" width={424} height={289} /></p>
  <pre>Router1#show ip route{"\n"}Gateway of last resort is 10.10.11.2 to network 0.0.0.0{"\n"}{"   "}10.0.0.0/8 is variably subnetted, 8 subnets, 4 masks{"\n"}C{"\t"}10.10.10.0/28 is directly connected, GigabitEthernet0/0{"\n"}C{"\t"}10.10.11.0/30 is directly connected, FastEthernet2/0{"\n"}O{"\t"}10.10.13.0/25 [110/2] via 10.10.10.1,00:00:32, GigabitEthernet0/0{"\n"}O{"\t"}10.10.13.128/28 [110/2] via 10.10.10.1,00:00:32, GigabitEthernet0/0{"\n"}O{"\t"}10.10.13.144/28 [110/2] via 10.10.10.1,00:00:32, GigabitEthernet0/0{"\n"}O{"\t"}10.10.13.160/29 [110/2] via 10.10.10.1,00:00:32, GigabitEthernet0/0{"\n"}O{"\t"}10.10.13.208/30 [110/2] via 10.10.10.1,00:00:32, GigabitEthernet0/0{"\n"}O{"\t"}10.10.13.252/30 [110/2] via 10.10.10.1,00:00:32, GigabitEthernet0/0{"\n"}S* 0.0.0.0/0 [1/0] via 10.10.11.2{"\n"}</pre>
  <p>What is the expected behavior for the traffic flow for route 10.10.13.0/25?</p>
  <p>A. Traffic to 10.10.13.0.25 is load balanced out of multiple interfaces<br />
    B. Route 10.10.13.0/25 is updated in the routing table as being learned from interface Gi0/1<br />
    C. Traffic to 10.10.13.0/25 is symmetrical<br />
    D. Route 10.10.13.0/25 learned via the Gi0/0 interface remains in the routing table</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>From the output we can deduce interface Gi0/0 on R1 is the interface connecting to Router2 so interface Gi0/1 is the interface connecting to the new MPLS AS 1000.</p>
  <p>The AD of eBGP (20) is smaller than that of OSPF (110) so the route to 10.10.13.0/25 will be updated as being learned from the new BGP path.</p>
  <p><span className="ccnaquestionsnumber">Question 13<br />
    </span></p>
  Refer to the exhibit. To which device does Router1 send packets that are destined to host 10.10.13.165?
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/IP_Routing/show_ip_route_understanding.jpg" alt="show_ip_route_understanding.jpg" width={433} height={239} /></p>
  <pre>Router1#show ip route{"\n"}Gateway of last resort is 10.10.11.2 to network 0.0.0.0{"\n"}{"    "}209.165.200.0/27 is subnetted, 1 subnets {"\n"}B{"     "}209.165.200.224 [20/0] via 10.10.12.2,03:32:14{"\n"}{"    "}209.165.201.0/27 is subnetted, 1 subnets {"\n"}B{"     "}209.165.201.0 [20/0] via 10.10.12.2,02:26:53{"\n"}{"    "}209.165.202.0/27 is subnetted, 1 subnets {"\n"}B{"     "}209.165.202.128 [20/0] via 10.10.12.2,02:46:03{"\n"}{"    "}10.0.0.0/8 is variably subneted, 10 subnets, 4 masks {"\n"}O{"     "}10.10.13.0/25 [110/2] via 10.10.10.1,00:00:04, GigabitEthernet0/0{"\n"}O{"     "}10.10.13.128/28 [110/2] via 10.10.10.5,00:00:12, GigabitEthernet0/1{"\n"}O{"     "}10.10.13.144/28 [110/2] via 10.10.10.9,00:01:57, GigabitEthernet0/2{"\n"}O{"     "}10.10.13.160/29 [110/2] via 10.10.10.5,00:00:12, GigabitEthernet0/1{"\n"}O{"     "}10.10.13.208/29 [110/2] via 10.10.10.13,00:01:57, GigabitEthernet0/3{"\n"}S*{"  "}0.0.0.0/0 [1/0] via 10.10.11.2</pre>
  <p>A. Router2<br />
    B. Router3<br />
    C. Router4<br />
    D. Router5</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The destination of 10.10.13.165 matches the entry “O 10.10.13.160/29 [110/2]…” because of the longest prefix length rule so the packet will be forwarded to 10.10.10.5, which is Router3.</p>
</div>


	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default OspfQuestions;
