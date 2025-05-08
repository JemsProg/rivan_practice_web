import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const SecurityQuestion2 = () => {
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
      <h1 className="text-3xl font-bold mb-4">Security Questions 2</h1>
 
<div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Refer to the exhibit. An engineer booted a new switch and applied this configuration via the console port. Which additional configuration must be applied to allow administrators to authenticate directly to enable privilege mode via Telnet using local username and password?
  <table border={1}>
    <tbody>
      <tr>
        <td>Switch(config)#hostname R1<br />
          R1(config)#interface FastEthernet0/1<br />
          R1(config-if)#no switchport<br />
          R1(config-if)#ip address 10.100.20.42 255.255.255.0<br />
          R1(config-if)#line vty 0 4<br />
          R1(config-line)#login</td>
      </tr>
    </tbody>
  </table>
  <p>A.<br />
    R1(config)#username admin<br />
    R1(config-if)#line vty 0 4<br />
    R1(config-line)#password p@ss1234</p>
  <p>B.<br />
    R1(config)#username admin<br />
    R1(config-if)#line vty 0 4<br />
    R1(config-line)#password p@ss1234<br />
    R1(config-line)#transport input telnet</p>
  <p>C.<br />
    R1(config)#username admin secret p@ss1234<br />
    R1(config-if)#line vty 0 4<br />
    R1(config-line)#login local<br />
    R1(config)#enable secret p@ss1234</p>
  <p>D.<br />
    R1(config)#username admin privilege 15 secret p@ss1234<br />
    R1(config-if)#line vty 0 4<br />
    R1(config-line)#login local</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>With “login local” command, the router will use the local username and password for authentication. And we assigned the highest privilege level of 15 for this user so we are put into privilege mode automatically (R1#).</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  An organization secures its network with multi-factor authentication using an authenticator app on employee smartphones. How is the application secured in the case of a user’s smartphone being lost or stolen?
  <p>A. The application requires an administrator password to reactivated after a configured interval.<br />
    B. The application verifies that the user is in a specific location before it provides the second factor.<br />
    C. The application requires the user to enter a PIN before it provides the second factor.<br />
    D. The application challenges a user by requiring an administrator password to reactivate when the smartphone is rebooted.</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which type of attack can be mitigated by dynamic ARP inspection?
  <p>A. malware<br />
    B. DDoS<br />
    C. worm<br />
    D. man-in-the-middle</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>ARP attack (like ARP poisoning/spoofing, man-in-the-middle)</strong> is a type of attack in which a malicious actor sends falsified ARP messages over a local area network as ARP allows a gratuitous reply from a host even if an ARP request was not received. This results in the linking of an attacker’s MAC address with the IP address of a legitimate computer or server on the network. This is an attack based on ARP which is at Layer 2. Dynamic ARP inspection (DAI) is a security feature that validates ARP packets in a network which can be used to mitigate this type of attack.</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which technology is used to improve web traffic performance by proxy caching?
  <p>A. Firepower<br />
    B. FireSIGHT<br />
    C. ASA<br />
    D. WSA</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Web Security appliance (WSA) intercepts requests that are forwarded to it by clients or other devices over the network. Proxy caching is a setting in WSA that caches data to increase performance.</p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Which device performs stateful inspection of traffic?
  <p>A. access point<br />
    B. switch<br />
    C. wireless controller<br />
    D. firewall</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In stateful inspection, the firewall not only inspects packets up through the application layer/layer7 determining a packet’s header information and data content, but also monitors and keeps track of the connection’s state. For all active connections traversing the firewall, the state information, which may include IP addresses and ports involved, the sequence numbers and acknowledgement numbers of the packets traversing the connection, TCP packet flags, etc. is maintained in a state table.</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  What are two recommendations for protecting network ports from being exploited when located in an office space outside of an IT closet? (Choose two)
  <p>A. shut down unused ports<br />
    B. enable the PortFast feature on ports<br />
    C. implement port-based authentication<br />
    D. configure ports to a fixed speed<br />
    E. configure static ARP entries</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A C
  </p><p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  What is a practice that protects a network from VLAN hopping attacks?
  <p>A. Change native VLAN to an unused VLAN ID<br />
    B. Enable dynamic ARP inspection<br />
    C. Configure an ACL to prevent traffic from changing VLANs<br />
    D. Implement port security on internet-facing VLANs</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>VLAN Hopping</strong>: By altering the VLAN ID on packets encapsulated for trunking, an attacking device can send or receive packets on various VLANs, bypassing Layer 3 security measures. VLAN hopping can be accomplished by switch spoofing or double tagging. One of a popular type of VLAN Hopping is</p>
  <p><strong>Double-Tagging attack:</strong></p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/Layer_2_Threats/Double_Tagging.jpg" alt="Double_Tagging.jpg" width={570} height={140} /></p>
  <p>In this attack, the attacking computer generates frames with two 802.1Q tags. The first tag matches the native VLAN of the trunk port (VLAN 10 in this case), and the second matches the VLAN of a host it wants to attack (VLAN 20).</p>
  <p>When the packet from the attacker reaches Switch A, Switch A only sees the first VLAN 10 and it matches with its native VLAN 10 so this VLAN tag is removed. Switch A forwards the frame out all links with the same native VLAN 10. Switch B receives the frame with an tag of VLAN 20 so it removes this tag and forwards out to the Victim computer.</p>
  <p>Note: This attack only works if the trunk (between two switches) has the same native VLAN as the attacker. In other words, this attack is only successful if the attacker belongs to the native VLAN of the trunk link. Another important point is, this attack is strictly one way as it is impossible to encapsulate the return packet.</p>
  <p>To mitigate this type of attack, we can use VLAN access control lists (VACLs, which applies to all traffic within a VLAN. We can use VACL to drop attacker traffic to specific victims/servers); or implement Private VLANs; or keep the native VLAN of all trunk ports different from user VLANs.</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  Which technology can prevent client devices from arbitrarily connecting to the network without state remediation?
  <p>A. MAC Authentication Bypass<br />
    B. IP Source Guard<br />
    C. 802.1x<br />
    D. 802.11n</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The IEEE 802.1x standard defines a client-server-based access control and authentication protocol that prevents unauthorized clients from connecting to a LAN through publicly accessible ports unless they are properly authenticated. The authentication server authenticates each client connected to a switch port before making available any services offered by the switch or the LAN. Until the client is authenticated, 802.1x access control allows only Extensible Authentication Protocol over LAN (EAPOL), Cisco Discovery Protocol (CDP), and Spanning Tree Protocol (STP) traffic through the port to which the client is connected. After authentication is successful, normal traffic can pass through the port.</p>
</div>



      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default SecurityQuestion2;
