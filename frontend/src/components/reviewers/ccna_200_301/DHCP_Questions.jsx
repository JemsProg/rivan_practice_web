import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DHCPQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">DHCP Questions</h1>

<div>
  <p>
  </p><p>Note: If you are not sure about DHCP, please read our <a href="https://www.9tut.com/dhcp-tutorial" target="_blank" rel="noopener noreferrer">DHCP tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which Cisco IOS command will indicate that interface GigabitEthernet 0/0 is configured via DHCP?
  <p>A. show ip interface GigabitEthernet 0/0 dhcp<br />
    B. show interface GigabitEthernet 0/0<br />
    C. show ip interface dhcp<br />
    D. show ip interface GigabitEthernet 0/0<br />
    E. show ip interface GigabitEthernet 0/0 brief</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which command enables a router to become a DHCP client?
  <p>A. ip address dhcp<br />
    B. ip helper-address<br />
    C. ip dhcp pool<br />
    D. ip dhcp client</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If we want to get an IP address from the DHCP server on a Cisco device, we can use the command “ip address dhcp”.</p>
  <p>Note: The command “ip helper-address” enables a router to become a DHCP Relay Agent.</p>
  <p className="ccnaquestionsnumber">Question 3</p>
  What are two roles of the Dynamic Host Configuration Protocol (DHCP)? (Choose two)
  <p>A. The DHCP server offers the ability to exclude specific IP addresses from a pool of IP addresses<br />
    B. The DHCP client can request up to four DNS server addresses<br />
    C. The DHCP server assigns IP addresses without requiring the client to renew them<br />
    D. The DHCP server leases client IP addresses dynamically<br />
    E. The DHCP client maintains a pool of IP addresses it can assign</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A D
  </p><p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Refer to the exhibit. An engineer deploys a topology in which R1 obtains its IP configuration from DHCP. If the switch and DHCP server configurations are complete and correct. Which two sets of commands must be configured on R1 and R2 to complete the task? (Choose two)
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/DHCP/dhcp_ip_helper.jpg" alt="dhcp_ip_helper.jpg" width={541} height={79} /></p>
  <p>A. R1 (config)# interface fa0/0<br />
    R1 (config-if)# ip helper-address 198.51.100.100</p>
  <p>B. R2(config)# interface gi0/0<br />
    R2(config-if)# ip helper-address 198.51.100.100</p>
  <p>C. R1 (config)# interface fa0/0<br />
    R1 (config-if)# ip address dhcp <br />
    R1 (config-if)# no shutdown</p>
  <p>D. R2(config)# interface gi0/0 <br />
    R2(config-if)# ip address dhcp</p>
  <p>E. R1 (config)# interface fa0/0<br />
    R1 (config-if)# ip helper-address 192.0.2.2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B C
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Refer to the exhibit. If the network environment is operating normally, which type of device must be connected to interface FastEthernet 0/1?
  <table border={1}>
    <tbody>
      <tr>
        <td>ip arp inspection vlan 2-10 <br />
          interface fastethernet 0/1 <br />
          ip arp inspection trust</td>
      </tr>
    </tbody>
  </table>
  <p>A. DHCP client<br />
    B. access point<br />
    C. router<br />
    D. PC</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>To configure DHCP snooping feature, at least three steps must be done:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Sequence and Description</strong></td>
        <td><strong>Command</strong></td>
      </tr>
      <tr>
        <td>1. Configure global DHCP snooping</td>
        <td>Switch(config)# ip dhcp snooping</td>
      </tr>
      <tr>
        <td>2. Configure trusted ports (as least on 1 port).<br />
          By default, all ports are untrusted</td>
        <td>Switch(config-if)# ip dhcp snooping trust</td>
      </tr>
      <tr>
        <td>3. Configure DHCP snooping for the selected VLANs</td>
        <td>Switch(config)# ip dhcp snooping vlan <em>{'{'}VLAN-ID | VLAN range{'}'}</em></td>
      </tr>
    </tbody>
  </table>
  <p>Note: To configure DHCP snooping with Dynamic ARP Inspection we need to add the command “ip arp inspection vlan <em>vlan-id</em>” in global configuration mode and “ip arp inspection trust” in interface mode.</p>
  <p>In a normal network environment, we should trust interfaces that are connected to routers, not end points.</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Which type of information resides on a DHCP server?
  <p>A. a list of the available IP addresses in a pool<br />
    B. a list of public IP addresses and their corresponding names<br />
    C. usernames and passwords for the end users in a domain<br />
    D. a list of statically assigned MAC addresses</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  What is a DHCP client?
  <p>A. a host that is configured to request an IP address automatically<br />
    B. a router that statically assigns IP addresses to hosts<br />
    C. a server that dynamically assigns IP addresses to hosts<br />
    D. a workstation that requests a domain name associated with its IP address</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  Where does the configuration reside when a helper address is configured to support DHCP?
  <p>A. on the switch trunk interface.<br />
    B. on the router closest to the client.<br />
    C. on the router closest to the server.<br />
    D. on every router along the path.</p>
  <p>&nbsp;</p>
  <p><b><span className="ccnacorrectanswers">Answer:</span> </b>B
  </p><p><span className="ccnaquestionsnumber">Question 9</span></p>
  When implementing a router as a DHCP server, which two features must be configured? (Choose two)
  <p>A. relay agent information<br />
    B. database agent<br />
    C. address pool<br />
    D. smart-relay<br />
    E. manual bindings</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The following example shows how to configure a DHCP Server on a Cisco router:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Configuration</strong></td>
        <td><strong>Description</strong></td>
      </tr>
      <tr>
        <td>Router(config)#ip dhcp pool CLIENTS</td>
        <td>Create a DHCP Pool named CLIENTS</td>
      </tr>
      <tr>
        <td>Router(dhcp-config)#network 10.1.1.0 /24</td>
        <td>Specifies the subnet and mask of the DHCP address pool</td>
      </tr>
      <tr>
        <td>Router(dhcp-config)#default-router 10.1.1.1</td>
        <td>Set the default gateway of the DHCP Clients</td>
      </tr>
      <tr>
        <td>Router(dhcp-config)#dns-server 10.1.1.1</td>
        <td>Configure a Domain Name Server (DNS)</td>
      </tr>
      <tr>
        <td>Router(dhcp-config)#domain-name 9tut.com</td>
        <td>Configure a domain-name</td>
      </tr>
      <tr>
        <td>Router(dhcp-config)#lease 0 12</td>
        <td>Duration of the lease (the time during which a client computer can use an assigned IP address). The syntax is “<strong>lease</strong> {'{'}days[hours] [minutes] | infinite{'}'}”. In this case the lease is 12 hours. The default is a one-day lease.<br />
          Before the lease expires, the client typically needs to renew its address lease assignment with the server</td>
      </tr>
      <tr>
        <td>Router(dhcp-config)#exit</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td>Router(config)# ip dhcp excluded-address 10.1.1.1 10.1.1.10</td>
        <td>The IP range that a DHCP Server should not assign to DHCP Clients. Notice this command is configured under global configuration mode</td>
      </tr>
    </tbody>
  </table>
  <p>Manual bindings are <strong>IP addresses that have been manually mapped to the MAC addresses of hosts</strong> that are found in the DHCP database.</p>
  <p>All DHCP clients send a client identifier (DHCP option 61) in the DHCP packet. To configure manual bindings, you must enter the <strong>client-identifier</strong> DHCP pool configuration command with the appropriate hexadecimal values identifying the DHCP client. For example:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td>ip dhcp pool SERVER<br />
          host 172.16.200.100 255.255.255.0<br />
          client-identifier 01aa.bbcc.0003.00<br />
          default-router 172.16.200.1 <br />
          !</td>
      </tr>
    </tbody>
  </table>
  <p>Therefore two requirements for DHCP binding is the IP address and the hardware address (MAC address) of the client. Notice that in the above example “aabb.cc00.0300” is the MAC address of the client while prefix “01” represents the Ethernet media type.</p>
  <p>Note: In fact, this question should ask “When implementing a router as a DHCP server, which <strong>one of these features</strong> must be configured?”. Because we only need to configure either an “address pool” or “manual binding”.</p>
  <p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  Which command must you enter to configure a DHCP relay?
  <p>A. ip helper-address<br />
    B. ip address dhcp<br />
    C. ip dhcp relay<br />
    D. ip dhcp pool</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If the DHCP Server is not on the same subnet with the DHCP Client, we need to configure the router on the DHCP client side to act as a DHCP Relay Agent so that it can forward DHCP messages between the DHCP Client &amp; DHCP Server. To make a router a DHCP Relay Agent, simply put the “ip helper-address &lt;<em>IP-address-of-DHCP-Server</em>&gt;” command under the interface that receives the DHCP messages from the DHCP Client.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Relay_Agent.jpg" alt="DHCP_Relay_Agent.jpg" width={596} height={177} /></p>
  <p>As we know, router does not forward broadcast packets (it drops them instead) so DHCP messages like DHCPDISCOVER message will be dropped. But with the “ip helper-address …” command, the router will accept that broadcast message and cover it into a unicast packet and forward it to the DHCP Server. The destination IP address of the unicast packet is taken from the “ip helper-address …” command.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  Where does a switch maintain DHCP snooping information?
  <p>A. in the CAM table<br />
    B. in the VLAN database<br />
    C. in the DHCP binding database<br />
    D. in the MAC address table</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default DHCPQuestion;
