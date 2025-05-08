import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DragDropQuestion2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
        )
      )
    );
  }, []);

  return (
    <section ref={sectionRef} className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Drag Drop Questions 2</h1>

    <div>
  <p>
  </p><p className="ccnaquestionsnumber">Question 1</p>
  Refer to the exhibit. Drag and drop the routing table components on the left onto the corresponding letter from the exhibit on the right. Not all options are used.
  <p><img decoding="async" src="https://www.9tut.com/images/ccna/draganddrop/Routing_table_components.jpg" alt="Routing_table_components.jpg" width={500} height={83} /></p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Routing_table_components_2.jpg" alt="Routing_table_components_2.jpg" width={531} height={301} /></p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>A: route source<br />
    B: administrative distance<br />
    C: metric<br />
    D: timestamp<br />
    E: outbound interface
  </p><p className="ccnaquestionsnumber">Question 2</p>
  Drag and drop each broadcast IP address on the left to the Broadcast Address column on the right. Not all options are used.
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/broadcast_addresses.jpg" alt="broadcast_addresses.jpg" width={531} height={258} /></p>
  <p>&nbsp;</p>
  <p><span className="blueandbold ccnacorrectanswers">Answer:</span></p>
  <p>+ 10.63.255.255/10<br />
    + 172.16.255.39/29<br />
    + 172.20.255.255/16<br />
    + 192.168.255.127/25
  </p><p className="ccnaquestionsnumber">Question 3</p>
  An interface has been configured with the access list that is shown below.
  <table border={1}>
    <tbody>
      <tr>
        <td>access-list 107 deny tcp 207.16.12.0 0.0.3.255 any eq http<br />
          access-list 107 permit ip any any</td>
      </tr>
    </tbody>
  </table>
  <p>On the basis of that access list, drag each information packet on the left to the appropriate category on the right.</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/acl_permit_deny.jpg" alt="acl_permit_deny.jpg" width={532} height={281} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Permitted:</strong><br />
    + source IP: 207.16.32.14,<br />
    destination application: http<br />
    + source IP: 207.16.15.9,<br />
    destination port: 23<br />
    + source IP: 207.16.16.14,<br />
    destination port: 53</p>
  <p><strong>Denied:</strong><br />
    + source IP: 207.16.14.7,<br />
    destination port: 80<br />
    + source IP: 207.16.13.14,<br />
    destination application: http
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>From the ACL:</p>
  <p>access-list 107 deny tcp 207.16.12.0.0.0.3.255 any eq http<br />
    access-list 107 permit ip any any<br />
    We can deduce it block all source hosts in 207.16.12.0/22 range (which ranges from 207.16.12.0 to 207.16.15.255) via HTTP (port 80) while permit any other hosts.</p>
  <p className="ccnaquestionsnumber">Question 4</p>
  Order the DHCP message types as they would occur between a DHCP client and a DHCP server.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/DHCP_messages.jpg" alt="DHCP_messages.jpg" width={536} height={180} /></p>
  <p>&nbsp;</p>
  <p><span className="blueandbold ccnacorrectanswers">Answer:</span></p>
  <p>+ First: DHCPDISCOVER<br />
    + Second: DHCPOFFER<br />
    + Third: DHCPREQUEST<br />
    + Fourth: DHCPACK
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>There are four messages sent between the DHCP Client and DHCP Server: DHCP<strong>D</strong>ISCOVER, DHCP<strong>O</strong>FFER, DHCP<strong>R</strong>EQUEST and DHCP<strong>A</strong>CKNOWLEDGEMENT. This process is often abbreviated as <strong>DORA </strong>(for Discover, Offer, Request, Acknowledgement).</p>
  <p className="ccnaquestionsnumber">Question 5</p>
  Drag each route source from the left to the numbers on the right. Beginning with the lowest and ending with the highest administrative distance.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Route_Sources.jpg" alt="Route_Sources.jpg" width={531} height={267} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>1: connected<br />
    2: static<br />
    3: EBGP<br />
    4: EIGRP<br />
    5 :OSPF<br />
    6: RIP
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>1: connected (AD = 0)<br />
    2: static (AD = 1)<br />
    3: EBGP (AD = 20)<br />
    4: EIGRP (AD = 90)<br />
    5 :OSPF (AD = 110)<br />
    6: RIP (AD = 120)</p>
  <p className="ccnaquestionsnumber">Question 6</p>
  Drag and drop to the characteristics of networking from the left onto the correct networking types on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/controller_based_vs_traditional_networking.jpg" alt="controller_based_vs_traditional_networking.jpg" width={530} height={329} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Controller-Based Networking:</strong><br />
    + focused on network<br />
    + user input is a policy<br />
    + uses allow list security model</p>
  <p><strong>Traditional Networking:</strong><br />
    + focused on devices<br />
    + user input is a configuration<br />
    + uses block list security model
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Traditional Networking uses block list model because all traffic is allowed to pass through initially until we configure an ACL, prefix-list… This model is more lenient, because if no application knowledge exists, the default network configuration will let everything through. From a security perspective, it is very dangerous though – every time you allow a protocol that the application does not need, you are unnecessarily increasing your attack surface, and therefore compromising the overall application security.</p>
  <p>In Controller-Based Networking, everything is denied by default until we explicitly allow them by a white (allow) list.</p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Drag and drop the attack-mitigation techniques from the left onto the types of attack that they mitigate on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/layer_2_attack_mitigate.jpg" alt="layer_2_attack_mitigate.jpg" width={635} height={207} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ 802.1q double-tagging VLAN-hopping attack: configure the native VLAN with a nondefault VLAN ID<br />
    + MAC flooding attack: configure 802.1x authenticate<br />
    + man-in-the-middle spoofing attack: configure DHCP snooping<br />
    + switch-spoofing VLAN-hopping attack: disable DTP
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>VLAN Hopping</strong>: By altering the VLAN ID on packets encapsulated for trunking, an attacking device can send or receive packets on various VLANs, bypassing Layer 3 security measures. VLAN hopping can be accomplished by switch spoofing or double tagging.</p>
  <p><strong>a. Switch spoofing:</strong></p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.certprepare.com/images/SWITCH/VLANHopping/Switch_Spoofing.jpg" alt="Switch_Spoofing.jpg" width={470} height={130} /></p>
  <p>The attacker can connect an unauthorized Cisco switch to a Company switch port. The unauthorized switch can send DTP frames and form a trunk with the Company Switch. If the attacker can establish a trunk link to the Company switch, it receives traffic to all VLANs through the trunk because all VLANs are allowed on a trunk by default.</p>
  <p>(Instead of using a Cisco Switch, the attacker can use a software to create and send DTP frames).</p>
  <p>To mitigate this type of attack, we can disable DTP.</p>
  <p><strong>b. Double-Tagging attack:</strong></p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.certprepare.com/images/SWITCH/VLANHopping/Double_Tagging.jpg" alt="Double_Tagging.jpg" width={570} height={140} /></p>
  <p>In this attack, the attacking computer generates frames with two 802.1Q tags. The first tag matches the native VLAN of the trunk port (VLAN 10 in this case), and the second matches the VLAN of a host it wants to attack (VLAN 20).</p>
  <p>When the packet from the attacker reaches Switch A, Switch A only sees the first VLAN 10 and it matches with its native VLAN 10 so this VLAN tag is removed. Switch A forwards the frame out all links with the same native VLAN 10. Switch B receives the frame with an tag of VLAN 20 so it removes this tag and forwards out to the Victim computer.</p>
  <p>Note: This attack only works if the trunk (between two switches) has the same native VLAN as the attacker.</p>
  <p>To mitigate this type of attack, we can use VLAN access control lists (VACLs, which applies to all traffic within a VLAN. We can use VACL to drop attacker traffic to specific victims/servers) or implement Private VLANs.</p>
  <p><span className="ccnaquestionsnumber">Question 8</span></p>
  Match the functions to the corresponding layers. (Not all options are used)
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/three_layers.jpg" alt="three_layers.jpg" width={534} height={356} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Access layer:<br />
    </strong>+ provides network access to the user<br />
    + represents the network edge</p>
  <p><strong>Distribution layer:</strong><br />
    + implements network access policy<br />
    + establishes Layer 3 routing boundaries</p>
  <p><strong>Core layer:</strong><br />
    + provides high-speed backbone connectivity<br />
    + functions as an aggregator for all the campus blocks
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A typical enterprise hierarchical LAN campus network design includes the following three layers:<br />
    + Access layer: Provides workgroup/user access to the network<br />
    + Distribution layer: Provides policy-based connectivity and controls the boundary between the access and core layers<br />
    + Core layer: Provides fast transport between distribution switches within the enterprise campus</p>
  <p>Reference: <a href="https://www.ciscopress.com/articles/article.asp?p=2202410&seqNum=4" target="_blank" rel="noopener noreferrer">https://www.ciscopress.com/articles/article.asp?p=2202410&amp;seqNum=4</a></p>
  <p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  Drag the descriptions of device management from the left onto the types of device management on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/DNA_Center_vs_Traditional_Device_Management.jpg" alt="DNA_Center_vs_Traditional_Device_Management.jpg" width={554} height={328} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Cisco DNA Center Device Management:</strong><br />
    + monitors the cloud for software updates<br />
    + uses CLI templates to apply a consistent configuration to multiple devices at an individual location<br />
    + uses NetFlow to analyze potential security threats throughout the network and take appropriate action on that traffic</p>
  <p><strong>Traditional Device Management:</strong><br />
    + manages device configurations on a per-device basis<br />
    + security is managed near the perimeter of the network with firewalls, VPNs and IPS<br />
    + implements changes via an SSH terminal
  </p><p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  An engineer is tasked with verifying network configuration parameters on a client workstation to report back to the team lead. Drag and drop the node identifiers from the left onto the network parameters on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/ipconfig_all.jpg" alt="ipconfig_all.jpg" width={587} height={468} /></p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/MAC_IPs.jpg" alt="MAC_IPs.jpg" width={442} height={219} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ broadcast address: 192.168.1.255<br />
    + default gateway: 192.168.1.1<br />
    + host IP address: 192.168.1.20<br />
    + MAC address: B8-76-3F-7C-57-DF<br />
    + last assignable IP address in the subnet: 192.168.1.254
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In the output above, three lines under “Link-local IPv6 Address” line have been blacked out so we have to figure out what they are. They are the IP address of the Wireless card and the Default gateway of this computer.</p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default DragDropQuestion2;
