import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const Layer2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) => {
      el.classList.add('opacity-0', 'translate-y-[30px]', 'will-change-transform');
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Layer 2 Threats and Security Features</h1>
      </div>

      {/* Content */}
      <div 
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="space-y-8"
      >
        <p>In this tutorial, we will learn about Layer 2 threats include DHCP Spoofing, VLAN Hopping and ARP Attack and how to use security features (DHCP snooping, VACL, Dynamic ARP Inspection) to mitigate them.</p>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#0D2153]">1. DHCP Spoofing:</h2>
          
          <div className="flex justify-center">
            <img 
              fetchPriority="high" 
              decoding="async" 
              className="rounded-lg shadow-md border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/Layer_2_Threats/DHCP_Spoofing_Attack.jpg" 
              alt="DHCP Spoofing Attack diagram" 
              width="400" 
              height="170"
            />
          </div>
          
          <p>DHCP spoofing is a type of attack in that the attacker listens for DHCP Requests from clients and answers them with fake DHCP Response before the authorized DHCP Response comes to the clients. The fake DHCP Response often gives its IP address as the client default gateway -&gt; all the traffic sent from the client will go through the attacker computer, the attacker becomes a &ldquo;man-in-the-middle&rdquo;.</p>
          
          <p><span id="more-4818"></span></p>
          
          <p>The attacker can have some ways to make sure its fake DHCP Response arrives first. In fact, if the attacker is &ldquo;closer&rdquo; than the DHCP Server then he doesn&rsquo;t need to do anything. Or he can DoS the DHCP Server so that it can&rsquo;t send the DHCP Response.</p>
          
          <p><strong>DHCP snooping</strong> is a security feature that can prevent DHCP spoofing attacks. DHCP snooping is a Cisco Catalyst feature that determines which switch ports can respond to DHCP requests. Ports are identified as trusted and untrusted.</p>
          
          <div className="flex justify-center">
            <img 
              decoding="async" 
              className="rounded-lg shadow-md border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/Layer_2_Threats/DHCP_Spoofing_Attack_Trust_Untrust_Ports.jpg" 
              alt="DHCP Trusted and Untrusted Ports" 
              width="400" 
              height="170"
            />
          </div>
          
          <p>Only ports that connect to an authorized DHCP server are trusted, and allowed to send all types of DHCP messages. All other ports on the switch are untrusted and can send only DHCP requests. If a DHCP response is seen on an untrusted port, the port is shut down.</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#0D2153]">2. VLAN Hopping</h2>
          
          <p>By altering the VLAN ID on packets encapsulated for trunking, an attacking device can send or receive packets on various VLANs, bypassing Layer 3 security measures. VLAN hopping can be accomplished by switch spoofing or double tagging.</p>
          
          <h3 className="text-lg font-medium text-[#0D2153] mt-4">a. Switch spoofing:</h3>
          
          <div className="flex justify-center">
            <img 
              decoding="async" 
              className="rounded-lg shadow-md border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/Layer_2_Threats/Switch_Spoofing.jpg" 
              alt="Switch Spoofing diagram" 
              width="470" 
              height="130"
            />
          </div>
          
          <p>The attacker can connect an unauthorized Cisco switch to a Company switch port. The unauthorized switch can send DTP frames and form a trunk with the Company Switch. If the attacker can establish a trunk link to the Company switch, it receives traffic to all VLANs through the trunk because all VLANs are allowed on a trunk by default.</p>
          
          <p>(Instead of using a Cisco Switch, the attacker can use a software to create and send DTP frames).</p>
          
          <p>To mitigate this type of attack, we can disable DTP.</p>
          
          <h3 className="text-lg font-medium text-[#0D2153] mt-4">b. Double-Tagging attack:</h3>
          
          <div className="flex justify-center">
            <img 
              loading="lazy" 
              decoding="async" 
              className="rounded-lg shadow-md border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/Layer_2_Threats/Double_Tagging.jpg" 
              alt="Double Tagging attack diagram" 
              width="570" 
              height="140"
            />
          </div>
          
          <p>In this attack, the attacking computer generates frames with two 802.1Q tags. The first tag matches the native VLAN of the trunk port (VLAN 10 in this case), and the second matches the VLAN of a host it wants to attack (VLAN 20).</p>
          
          <p>When the packet from the attacker reaches Switch A, Switch A only sees the first VLAN 10 and it matches with its native VLAN 10 so this VLAN tag is removed. Switch A forwards the frame out all links with the same native VLAN 10. Switch B receives the frame with an tag of VLAN 20 so it removes this tag and forwards out to the Victim computer.</p>
          
          <p className="bg-blue-50 p-4 rounded-md border border-blue-200">Note: This attack only works if the trunk (between two switches) has the same native VLAN as the attacker. In other words, this attack is only successful if the attacker belongs to the native VLAN of the trunk link. Another important point is, this attack is strictly one way as it is impossible to encapsulate the return packet.</p>
          
          <p>To mitigate this type of attack, we can use VLAN access control lists (VACLs, which applies to all traffic within a VLAN. We can use VACL to drop attacker traffic to specific victims/servers); or implement Private VLANs; or keep the native VLAN of all trunk ports different from user VLANs.</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#0D2153]">3. ARP attack</h2>
          
          <p>ARP attack (like ARP poisoning/spoofing) is a type of attack in which a malicious actor sends falsified ARP messages over a local area network as ARP allows a gratuitous reply from a host even if an ARP request was not received. This results in the linking of an attacker&rsquo;s MAC address with the IP address of a legitimate computer or server on the network. This is an attack based on ARP which is at Layer 2.</p>
          
          <p><strong>Dynamic ARP inspection (DAI)</strong> is a security feature that validates ARP packets in a network which can be used to mitigate this type of attack.</p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-[#0D2153]">4. MAC flooding attack</h2>
          
          <p>In this attack, the hacker first connects to a switch port and floods it with frames (packets), each containing different source MAC addresses. As we know, the switch must record these source MAC addresses to CAM table for later use. The problem is the size of the CAM table is limited. Once there is no space to store the fake MAC addresses, the switch enter a state called failopen mode. In this state, all incoming packets are broadcast out on all ports (like a hub), instead of just down the correct port as per normal operation.</p>
          
          <p>The hacker finally uses a packet sniffer to capture sensitive data from other computers, which would not be accessible were the switch operating normally.</p>
          
          <p>In order to prevent this type of attack, the administrator can configure port-security feature, which limits the number of MAC addresses on each switch port. Or configure 802.1x authentication, which checks a user&rsquo;s credentials to see if the users are an active member of the organization and grants users varying levels of access to the network.</p>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default Layer2;