import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const OspfQuestions2 = () => {
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

<h1>OSPF Questions 2</h1>

<div>
  <p />
  <p>
  </p><p className="ccnaquestionsnumber">Question 1</p>
  Refer to the exhibit. Which configuration issue is preventing the OSPF neighbor relationship from being established between the two routers?
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/OSPF/OSPF_neighbor_relationship_fails_2.jpg" alt="OSPF_neighbor_relationship_fails_2.jpg" width={256} height={46} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>R1#show running-config<br />
          Building configuration…<br />
          !<br />
          interface GigabitEthernet1/0<br />
          mtu 1600<br />
          ip address 192.168.0.1 255.255.255.252<br />
          negotiation auto<br />
          !<br />
          router ospf 1<br />
          router-id 1.1.1.1<br />
          passive-interface default<br />
          no passive-interface GigabitEthernet1/0<br />
          network 192.168.0.1 0.0.0.0 area 0<br />
          !</td>
        <td>R2#show running-config<br />
          Building configuration…<br />
          !<br />
          interface GigabitEthernet2/0<br />
          ip address 192.168.0.2 255.255.255.252<br />
          negotiation auto<br />
          !<br />
          router ospf 1<br />
          router-id 2.2.2.2<br />
          passive-interface default<br />
          no passive-interface GigabitEthernet2/0<br />
          network 192.168.0.2 0.0.0.0 area 0<br />
          !</td>
      </tr>
    </tbody>
  </table>
  <p>A. R2 is using the passive-interface default command<br />
    B. R1 has an incorrect network command for interface Gi1/0<br />
    C. R2 should have its network command in area 1<br />
    D. R1 interface Gi1/0 has a larger MTU size</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p className="ccnaquestionsnumber">Question 2</p>
  Which two minimum parameters must be configured on an active interface to enable OSPFv2 to operate? (Choose two)
  <p>A. OSPF area<br />
    B. OSPF MD5 authentication key<br />
    C. IPv6 address<br />
    D. OSPF process ID<br />
    E. OSPF stub flag</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>To configure OSPFv2 under interface mode we must use the command “ip ospf {'{'}process-id{'}'} area {'{'}area-id{'}'}”. For example: <br />
    <strong>R1(config-if)#ip ospf 1 area 2</strong></p>
  <p className="ccnaquestionsnumber">Question 3</p>
  Refer to the exhibit. Refer to the exhibit. After the configuration is applied, the two routers fail to establish an OSPF neighbor relationship. what is the reason for the problem?
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/OSPF/OSPF_neighbor_relationship_fails.jpg" alt="OSPF_neighbor_relationship_fails.jpg" width={256} height={46} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>Router1(config)#interface GigabitEthernet1/1<br />
          Router1(config-if)#description ***Connection to Router2***<br />
          Router1(config-if)#ip address 10.10.10.1 255.255.255.252<br />
          Router1(config-if)#ip ospf hello-interval 5<br />
          Router1(config)#router ospf 1000<br />
          Router1(config-router)#router-id 1.1.1.1<br />
          Router1(config-router)#network 10.10.10.0 0.0.0.3 area 0</td>
        <td>
          <p>Router2(config)#interface GigabitEthernet1/1<br />
            Router2(config-if)#description ***Connection to Router1***<br />
            Router2(config-if)#ip address 10.10.10.2 255.255.255.252<br />
            Router2(config)#router ospf 1001<br />
            Router2(config-router)#router-id 2.2.2.2<br />
            Router2(config-router)#network 10.10.10.0 0.0.0.3 area 0<br />
            Router2(config-router)#passive-interface default<br />
            Router2(config-router)#no passive-interface GigabitEthernet1/1</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>A. The OSPF router IDs are mismatched<br />
    B. Router2 is using the default hello timer<br />
    C. The network statement on Router1 is misconfigured<br />
    D. The OSPF process IDs are mismatched</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which step in the link-state routing process is described by a router sending Hello packets out all of the OSPF-enabled interfaces?
  <p>A. electing the designated router<br />
    B. establishing neighbor adjacencies<br />
    C. injecting the default route<br />
    D. exchanging link-state advertisements</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Refer to the exhibit. If the switch reboots and all routers have to re-establish OSPF adjacencies, which routers will become the new DR and BDR?
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/OSPF/OSPF_new_DR.jpg" alt="OSPF_new_DR.jpg" width={429} height={251} /></p>
  <p>A. Router R3 will become the DR and router R1 will become the BDR.<br />
    B. Router R4 will become the DR and router R3 will become the BDR.<br />
    C. Router R1 will become the DR and router R2 will become the BDR.<br />
    D. Router R3 will become the DR and router R2 will become the BDR.</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>After the new election, R3 and R1 have highest priority (of 2) so they will be elected DR and BDR. R3 will be elected DR because its has higher router ID (of 3.3.3.3).</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Refer to the exhibit. What action establishes the OSPF neighbor relationship without forming an adjacency?
  <p><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna/OSPF/OSPF_neighbor_without_adjacency.jpg" alt="OSPF_neighbor_without_adjacency.jpg" width={488} height={421} /></p>
  <p>A. modify priority<br />
    B. modify process ID<br />
    C. modify hello interval<br />
    D. modify network type</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C (?)
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In this question, R1 &amp; R2 will not establish OSPF neighbor relationship because the hello &amp; dead intervals are not the same.<br />
    If we modify the hello &amp; dead intervals to the same values then R1 &amp; R2 will become OSPF neighbors. But they will establish OSPF adjacency too.</p>
  <p>Answer B is not correct as the process ID is only locally significant.</p>
  <p>Answer C is partially correct as we need to change both “hello and dead” interval, not “hello” interval only.</p>
  <p>Answer A is a good answer because if we change both the priorities to 0 then they cannot elect DR/BDR so the adjacency cannot be complete.</p>
  <p>Answer D is a good answer too because if we change one of the network type to “point to point” then OSPF neighbor relationship can still come up but adjacency cannot (no routes are getting exchanged).</p>
  <p>But two good answers are only correct after fixing the hello &amp; dead intervals to the same value (so that OSPF neighbor relationship can come up) so answer C should be the best choice here.</p>
  <p>Note:</p>
  <p><strong>Neighbors</strong><br />
    Routers that share a common segment become neighbors on that segment. Neighbors are elected via the Hello protocol. Hello packets are sent periodically out of each interface using IP multicast (Appendix B). Routers become neighbors as soon as they see themselves listed in the neighbor’s Hello packet.</p>
  <p>Two routers will become neighbors if they agree on the following: <strong>Same Area ID, same authentication (if used), same hello &amp; dead intervals, same subnet mask and same stub area flag</strong>.</p>
  <p><strong>Adjacencies</strong><br />
    Adjacency is the next step after the neighboring process. Adjacent routers are routers that go beyond the simple Hello exchange and proceed into the database exchange process.</p>
  <p>The adjacency building process takes effect after multiple stages have been fulfilled. Routers that become adjacent will have the exact link-state database. The states an interface passes through before becoming adjacent to another router are: <strong>Down -&gt; Attempt (optional) -&gt; Init -&gt; 2-Way -&gt; Exstart -&gt; Exchange -&gt; Loading -&gt; Full</strong>.</p>
  <p>At Full state the adjacency is complete.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html#t22" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html#t22</a></p>
  <p>-&gt; Two OSPF neighbors do not exchange any routing information – the only packets they exchange is Hello packets.</p>
  <p><strong>Adjacencies on Point-to-Point Interfaces</strong><br />
    OSPF will always form an adjacency with the neighbor on the other side of a point-to-point interface such as point-to-point serial lines. There is no concept of DR or BDR. The state of the serial interfaces is point to point.</p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  <p>Refer to the exhibit. What is the next hop address for traffic that is destined to host 10.0.1.5?</p>
  <p><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna/OSPF/next_hop_address.jpg" alt="next_hop_address.jpg" width={452} height={301} /></p>
  <p>A. Loopback 0<br />
    B. 10.0.1.4<br />
    C. 10.0.1.50<br />
    D. 10.0.1.3</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C</p>
  <p><span className="ccnaexplanation">Explanation</span></p>
  <p>Traffic destined to host 10.0.1.5 will match the entry “O 10.0.1.5/32 …” so the next-hop address will be 10.0.1.50.</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  An engineer must configure an OSPF neighbor relationship between router R1 and R3. The authentication configuration has been configured and the connecting interfaces are in the same 192.168.1.0/30 subnet. What are the next two steps to complete the configuration? (Choose two)
  <p>A. configure the hello and dead timers to match on both sides<br />
    B. configure the same process ID for the router OSPF process<br />
    C. configure the same router ID on both routing processes<br />
    D. configure the interfaces as OSPF active on both sides<br />
    E. configure both interfaces with the same area ID</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>We don’t need to configure hello and dead timers for OSPF neighbor as OSPF can auto negotiate the network type (with the same hello and dead timers on both sides). We just have to make sure both interfaces are running OSPF and they are in the same area ID.</p>
</div>


	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default OspfQuestions2;
