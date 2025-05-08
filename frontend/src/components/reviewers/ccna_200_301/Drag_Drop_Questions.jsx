import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DragDropQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Drag Drop Questions</h1>


<div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Drag drop the descriptions from the left on to the correct configuration-management technologies on the right.
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Ansible_Chef_Puppet.jpg" alt="Ansible_Chef_Puppet.jpg" width={534} height={356} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Ansible:</strong><br />
    + uses SSH for remote device communication<br />
    + uses YAML for fundamental configuration elements</p>
  <p><strong>Chef:</strong><br />
    + uses Ruby for fundamental configuration elements<br />
    + uses TCP port 10002 for configuration push jobs</p>
  <p><strong>Puppet:</strong><br />
    + fundamental configuration elements are stored in a manifest<br />
    + uses TCP 8140 for communication
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The focus of Ansible is to be streamlined and fast, and to require no node agent installation. Thus, Ansible performs all functions over SSH. Ansible is built on Python, in contrast to the Ruby foundation of Puppet and Chef.</p>
  <p>TCP port 10002 is the command port. It may be configured in the Chef Push Jobs configuration file . This port allows Chef Push Jobs clients to communicate with the Chef Push Jobs server.</p>
  <p>Puppet is an open-source configuration management solution, which is built with Ruby and offers custom Domain Specific Language (DSL) and Embedded Ruby (ERB) templates to create custom Puppet language files, offering a declarative-paradigm programming approach.</p>
  <p>A Puppet piece of code is called a manifest, and is a file with .pp extension.</p>
  <p><span className="ccnaquestionsnumber">Question 2</span></p>
  Drag and drop the description of file-transfer protocols from the left onto the correct protocols on the right.
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/FTP_TFTP.jpg" alt="FTP_TFTP.jpg" width={530} height={329} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>FTP:</strong><br />
    + uses TCP<br />
    + uses ports 20 and 21<br />
    + provides reliability when loading an IOS image upon boot up</p>
  <p><strong>TFTP:</strong><br />
    + does not require user authentication<br />
    + uses UDP<br />
    + uses port 69
  </p><p><span className="ccnaquestionsnumber">Question 3</span></p>
  Drag and drop the WLAN components from the left onto the correct descriptions on the right.
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Wireless_LAN_Components.jpg" alt="Wireless_LAN_Components.jpg" width={628} height={259} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ device that manages access points: wireless LAN controller<br />
    + device that provides Wi-Fi devices with a connection to a wired network: access point<br />
    + used for out of band management of a WLC: service port<br />
    + used to support mobility management of the WLC: virtual interface<br />
    + applied to the WLAN for wireless client communication: dynamic interface
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The <strong>service port</strong> can be used management purposes, primarily for out-of-band management. However, AP management traffic is not possible across the service port. In most cases, the service port is used as a “last resort” means of accessing the controller GUI for management purposes. For example, in the case where the system distribution ports on the controller are down or their communication to the wired network is otherwise degraded.</p>
  <p>A <strong>dynamic interface</strong> with the Dynamic AP Management option enabled is used as the tunnel source for packets from the controller to the access point and as the destination for CAPWAP packets from the access point to the controller.</p>
  <p>The <strong>virtual interface</strong> is used to support mobility management, Dynamic Host Configuration Protocol (DHCP) relay, and embedded Layer 3 security such as guest web authentication. It also maintains the DNS gateway host name used by Layer 3 security and mobility managers to verify the source of certificates when Layer 3 web authorization is enabled.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/ports_and_interfaces.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/ports_and_interfaces.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Drag and drop the functions from the left onto the correct network components on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/DHCP_Server_DNS_Server.jpg" alt="DHCP_Server_DNS_Server.jpg" width={532} height={278} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>DHCP Server:</strong><br />
    + holds the TCP/IP settings to be distributed to the clients<br />
    + assigns a default gateway to a client<br />
    + assigns IP addresses to enabled clients</p>
  <p><strong>DNS Server:</strong><br />
    + resolves web URLs to IP addresses<br />
    + stores a list of IP addresses mapped to names
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Drag and drop the networking parameters from the left on to the correct values on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Connection_Oriented_Connectionless.jpg" alt="Connection_Oriented_Connectionless.jpg" width={532} height={325} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Connection Oriented:</strong><br />
    + SMTP<br />
    + SSH<br />
    + FTP</p>
  <p><strong>Connectionless:</strong><br />
    + SNMP<br />
    + TFTP<br />
    + VoIP
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>SSH uses TCP port 22 while SNMP uses UDP port 161 and 162.</p>
  <p><span className="ccnaquestionsnumber">Question 6</span></p>
  Drag the OSPF parameters to the correct places on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/OSPF_parameters.jpg" alt="OSPF_parameters.jpg" width={532} height={278} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>must be unique:</strong><br />
    + IP address<br />
    + router ID</p>
  <p><strong>must match:</strong><br />
    + area ID<br />
    + timers<br />
    + netmask
  </p><p><span className="ccnaquestionsnumber">Question 7</span></p>
  Drag and drop the AAA functions from the left onto the correct AAA services on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/AAA_services.jpg" alt="AAA_services.jpg" width={534} height={356} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Authentication:</strong><br />
    + identifies the user<br />
    + verifies the password associated with a user</p>
  <p><strong>Authorization:</strong><br />
    + restricts the services that are available to a user<br />
    + controls the actions that a user can perform</p>
  <p><strong>Accounting:</strong><br />
    + records user activities<br />
    + provides analytical information for the network administrator
  </p><p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  Drag and drop the application protocols from the left onto the suitable transport protocols on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/TCP_UDP_Protocols_2.jpg" alt="TCP_UDP_Protocols_2.jpg" width={424} height={327} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>TCP:</strong><br />
    + SMTP<br />
    + FTP<br />
    + SSH</p>
  <p><strong>UDP:</strong><br />
    + SNMP<br />
    + DHCP<br />
    + TFTP
  </p><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  Drag and drop the IPv4 network subnets from the left onto the correct usable host ranges on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/IPv4_subnets.jpg" alt="IPv4_subnets.jpg" width={442} height={220} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ 172.28.228.144/18: 172.28.192.1 – 172.28.255.254<br />
    + 172.28.228.144/21: 172.28.224.1 – 172.28.231.254<br />
    + 172.28.228.144/23: 172.28.228.1 – 172.28.229.254<br />
    + 172.28.228.144/25: 172.28.228.129 – 172.28.228.254<br />
    + 172.28.228.144/29: 172.28.228.145 – 172.28.228.150
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>This subnet question requires us to grasp how to subnet very well. To quickly find out the subnet range, we have to find out the increment and the network address of each subnet. Let’s take an example with the subnet 172.28.228.144/18:</p>
  <p>From the /18 (= 1100 0000 in the 3rd octet), we find out the increment is 64. Therefore the network address of this subnet must be the greatest multiple of the increment but not greater than the value in the 3rd octet (228). We can find out the 3rd octet of the network address is 192 (because 192 = 64 * 3 and 192 &lt; 228) -&gt; The network address is 172.28.192.0. So the first usable host should be 172.28.192.1 and it matches with the 5th answer on the right. In this case we don’t need to calculate the broadcast address because we found the correct answer.</p>
  <p>Let’s take another example with subnet 172.28.228.144/23 -&gt; The increment is 2 (as /23 = 1111 1110 in 3rd octet) -&gt; The 3rd octet of the network address is 228 (because 228 is the multiply of 2 and equal to the 3rd octet) -&gt; The network address is 172.28.228.0 -&gt; The first usable host is 172.28.228.1. It is not necessary but if we want to find out the broadcast address of this subnet, we can find out the next network address, which is 172.28.(228 + the increment number).0 or 172.28.230.0 then reduce 1 bit -&gt; 172.28.229.255 is the broadcast address of our subnet. Therefore the last usable host is 172.28.229.254.</p>
  <p>If you are still unclear about how to do subnetting quickly, please read part 3 of our “Subnetting Tutorial – Subnetting Made Easy” at <a href="https://www.9tut.com/subnetting-tutorial/3" target="_blank" rel="noopener noreferrer">https://www.9tut.com/subnetting-tutorial/3</a></p>
  <p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  Drag and drop the Cisco Wireless LAN Controller security settings from the left onto the correct security mechanism categories on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/WLC_Security.jpg" alt="WLC_Security.jpg" width={571} height={235} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Layer 2 Security Mechanism:</strong><br />
    + WPA+WPA2<br />
    + 802.1X</p>
  <p><strong>Layer 3 Security Mechanisms (for WLAN):</strong><br />
    + web policy<br />
    + Passthrough
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Layer 2 Security Mechanism includes WPA+WPA2, 802.1X, Static WEP, CKIP while Layer 3 Security Mechanisms (for WLAN) includes IPSec, VPN Pass-Through, Web Passthrough …</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/106082-wlc-compatibility-matrix.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/106082-wlc-compatibility-matrix.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 11</span></p>
  Drag and Drop the benefits of a Cisco Wireless LAN Controller from the left onto the correct examples on the right
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Wireless_LAN_Controller.jpg" alt="Wireless_LAN_Controller.jpg" width={533} height={176} /></p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ <strong>Dynamic RF Feature</strong>: Access points auto adjust signal strength<br />
    + <strong>Easy Deployment Process</strong>: Controller provides centralized management of users and VLANs<br />
    + <strong>Optimized user performance</strong>: Controller uses loadbalancing to maximize throughput<br />
    + <strong>Easy upgrade process</strong>: Controller image auto deployed to access Points
  </p><p><span className="ccnaquestionsnumber">Question 12</span></p>
  Drag and drop the threat-mitigation techniques from the left onto the types of threat or attack they mitigate on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Layer2_threat_mitigate.jpg" alt="Layer2_threat_mitigate.jpg" width={532} height={177} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ 802.1q double tagging: Configure a VLAN access control list<br />
    + ARP spoofing: Configure the dynamic ARP inspection feature<br />
    + unwanted superior BPDUs: Configure the root guard feature<br />
    + unwanted BPDUs on PortFast-enabled interfaces: Configure the BPDU guard feature
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>Double-Tagging attack:</strong></p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.certprepare.com/images/SWITCH/VLANHopping/Double_Tagging.jpg" alt="Double_Tagging.jpg" width={570} height={140} /></p>
  <p>In this attack, the attacking computer generates frames with two 802.1Q tags. The first tag matches the native VLAN of the trunk port (VLAN 10 in this case), and the second matches the VLAN of a host it wants to attack (VLAN 20).</p>
  <p>When the packet from the attacker reaches Switch A, Switch A only sees the first VLAN 10 and it matches with its native VLAN 10 so this VLAN tag is removed. Switch A forwards the frame out all links with the same native VLAN 10. Switch B receives the frame with an tag of VLAN 20 so it removes this tag and forwards out to the Victim computer.</p>
  <p>Note: This attack only works if the trunk (between two switches) has the same native VLAN as the attacker.</p>
  <p>To mitigate this type of attack, you can use VLAN access control lists (VACLs, which applies to all traffic within a VLAN. We can use VACL to drop attacker traffic to specific victims/servers) or implement Private VLANs.</p>
  <p><strong>ARP attack (like ARP poisoning/spoofing)</strong> is a type of attack in which a malicious actor sends falsified ARP messages over a local area network as ARP allows a gratuitous reply from a host even if an ARP request was not received. This results in the linking of an attacker’s MAC address with the IP address of a legitimate computer or server on the network. This is an attack based on ARP which is at Layer 2. Dynamic ARP inspection (DAI) is a security feature that validates ARP packets in a network which can be used to mitigate this type of attack.</p>
  <p><span className="ccnaquestionsnumber">Question 13</span></p>
  Refer to the exhibit.
  <pre>[root#HostTime=]#ip route{"\n"}default via 192.168.1.193 dev eth1 proto static{"\n"}192.168.1.0/26 dev sth1 proto kernel scope link src 192.168.1.200 metric 1{"\n"}{"\n"}[root#HostTime=]#ip addr show eth1{"\n"}eth1:mtu 1500 qdisc pfifo_fast qlan 1000{"\n"} link/ether 00:0C:22:83:79:A3 brd ff:ff:ff:ff:ff:ff{"\n"} inet 192.168.1.200/26 hrd 192.168.1.255 scope global eth1{"\n"} inet6 fe80::20c::29ff:fe89:79b3/64 scope link{"\n"} valid_lft forever preferred_lft forever</pre>
  <p>Drag and drop the networking parameters from the left onto the correct values on the right.</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/networking_parameters.jpg" alt="networking_parameters.jpg" width={531} height={219} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ 00:0C:22: NIC vendor OUI<br />
    + 00:0C:22:83:79:A3: NIC MAC address<br />
    + 192.168.1.193: default gateway<br />
    + 192.168.1.200: host IP address<br />
    + 255.255.255.192: subnet mask
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The “ip route” and “ip addr show eth1” are Linux commands.<br />
    + “ip route”: display the routing table<br />
    + “ip addr show eth1”: get depth information (only on eth1 interface) about your network interfaces like IP Address, MAC Address information</p>
  <p><span className="ccnaquestionsnumber">Question 14<br />
    </span></p>
  Drag and drop the descriptions of IP protocol transmissions from the left onto the correct IP traffic types on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/TCP_UDP.jpg" alt="TCP_UDP.jpg" width={532} height={322} /></p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>TCP:</strong><br />
    + Sends Transmission in Sequence<br />
    + Uses a lower transmission rate to ensure reliability<br />
    + Transmits packet as stream</p>
  <p><strong>UDP:</strong><br />
    + Transmits packets individually<br />
    + Uses higher transmission rate to support latency-sensitive apps<br />
    + Transmissions include an 8-byte header
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>UDP is a simpler message-based connectionless protocol. In connectionless protocols, there is no effort made to setup a dedicated end-to-end connection.</p>
  <p>…</p>
  <p>Datagrams – <strong>Packets are sent individually</strong> and are guaranteed to be whole if they arrive. Packets have definite bounds and no split or merge into data streams may exist.</p>
  <p>According to <a href="https://community.cisco.com/t5/networking-documents/udp/ta-p/3114870" target="_blank" rel="noopener noreferrer">https://community.cisco.com/t5/networking-documents/udp/ta-p/3114870</a></p>
  <p>TCP is connection-oriented and UDP is connectionless. This means that before sending TCP packets, a connection is established between the server and the client. This process of setting up a connection is called TCP handshaking. <span style={{textDecoration: 'underline'}}>The stream of packets</span> is then sent over this connection -&gt; TCP transmits packet as stream.</p>
  <p>Reference: <a href="https://www.vpnmentor.com/blog/tcp-vs-udp/" target="_blank" rel="noopener noreferrer">https://www.vpnmentor.com/blog/tcp-vs-udp/</a></p>
</div>



      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default DragDropQuestion;
