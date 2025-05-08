import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DragDropQuestion3 = () => {
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
      <h1 className="text-3xl font-bold mb-4">Drag Drop Questions 3</h1>

<div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Drag the IPv6 DNS record types from the left onto the description on the right.
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/IPv6_DNS_record_types.jpg" alt="IPv6_DNS_record_types.jpg" width={628} height={259} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ correlates a domain with its authoritative name servers: NS<br />
    + associates the domain serial number with its owner: SOA<br />
    + aliases one name to another: CNAME<br />
    + supports reverse name lookups: PTR<br />
    + correlates a host name with an IP address:&nbsp; AAAA
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>An AAAA record maps a domain name to the IP address (Version 6) of the computer hosting the domain. An AAAA record is used to find the IP address of a computer connected to the internet from a name. The AAAA record is conceptually similar to the A record, but it allows you to specify the IPv6 address of the server, rather than the IPv4. An example of AAAA is the ‘www’ of 9tut.com is pointed to 2001:0db8:aaaa:bbbb:cccc:dddd:eeee:ffff.</p>
  <p>NS (name server) looks like a website URL, but instead of linking to a website, they link to the domain names authoritative nameservers. An example of a NS is ‘ns1.9tut.com’.</p>
  <p>The Canonical Name record (CNAME) tells anyone visiting that subdomain to use the same DNS records as another domain / subdomain. If you are already using an A or AAAA record for a subdomain you wouldn’t use a CNAME. CNAME records must always point to another domain / subdomain, never directly to an IP address. For example, we can configure the CNAME of www.9tut.com points to 9tut.com so that they use the same IP address.</p>
  <p>As opposed to forward DNS resolution (A and AAAA DNS records), the Reverse-lookup Pointer (PTR) record is used to look up domain names based on an IP address.</p>
  <p>An SOA record or start of authority record specifies the DNS server providing authoritative information about an Internet domain, the email of the domain administrator, the domain serial number, and several timers relating to refreshing the zone.</p>
  <p>An example of a SOA record is shown below.</p>
  <pre>; name TTL class rr Nameserver email-address{"\n"}mydomain.com. 14400 IN SOA ns.mynameserver.com. root.ns.mynameserver.com. ({"\n"}2004123001 ; Serial number{"\n"}86000 ; Refresh rate in seconds{"\n"}7200 ; Update Retry in seconds{"\n"}3600000 ; Expiry in seconds{"\n"}600 ; minimum in seconds )</pre>
  <p>name – mydomain.com is the main name in this zone.</p>
  <p><strong>TTL</strong> – 14400 – TTL defines the duration in seconds that the record may be cached by client side programs. If it is set as 0, it indicates that the record should not be cached. The range is defined to be between 0 to 2147483647 (close to 68 years !) .</p>
  <p><strong>Class</strong> – IN – The class shows the type of record. IN equates to Internet. Other options are all historic. So as long as your DNS is on the Internet or Intranet, you must use IN.</p>
  <p><strong>Nameserver</strong> – ns.nameserver.com. – The nameserver is the server which holds the zone files. It can be either an external server in which case, the entire domain name must be specified followed by a dot. In case it is defined in this zone file, then it can be written as “ns” .<br />
    Email address – root.ns.nameserver.com. – This is the email of the domain name administrator. Now, this is really confusing, because people expect an @ to be in an email address. However in this case, email is sent to root@ns.nameserver.com, but written as root.ns.nameserver.com . And yes, remember to put the dot behind the domain name.</p>
  <p><strong>Serial number</strong> – 2004123001 – This is a sort of a revision numbering system to show the changes made to the DNS Zone. This number has to increment , whenever any change is made to the Zone file. The standard convention is to use the date of update YYYYMMDDnn, where nn is a revision number in case more than one updates are done in a day. So if the first update done today would be 2005301200 and second update would be 2005301201.</p>
  <p><strong>Refresh</strong> – 86000 – This is time(in seconds) when the slave DNS server will refresh from the master. This value represents how often a secondary will poll the primary server to see if the serial number for the zone has increased (so it knows to request a new copy of the data for the zone). It can be written as “23h88M” indicating 23 hours and 88 minutes. If you have a regular Internet server, you can keep it between 6 to 24 hours.</p>
  <p><strong>Retry</strong> – 7200 – Now assume that a slave tried to contact the master server and failed to contact it because it was down. The Retry value (time in seconds) will tell it when to get back. This value is not very important and can be a fraction of the refresh value.</p>
  <p><strong>Expiry</strong> – 3600000 – This is the time (in seconds) that a slave server will keep a cached zone file as valid, if it can’t contact the primary server. If this value were set to say 2 weeks ( in seconds), what it means is that a slave would still be able to give out domain information from its cached zone file for 2 weeks, without anyone knowing the difference. The recommended value is between 2 to 4 weeks.</p>
  <p><strong>Minimum</strong> – 600 – This is the default time(in seconds) that the slave servers should cache the Zone file. This is the most important time field in the SOA Record. If your DNS information keeps changing, keep it down to a day or less. Otherwise if your DNS record doesn’t change regularly, step it up between 1 to 5 days. The benefit of keeping this value high, is that your website speeds increase drastically as a result of reduced lookups. Caching servers around the globe would cache your records and this improves site performance.</p>
  <p><span className="ccnaquestionsnumber">Question 2</span></p>
  Drag and drop the SNMP components from the left onto the descriptions on the right.
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/SNMP_Components.jpg" alt="SNMP_Components.jpg" width={632} height={212} /></p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ unsolicited message: SNMP trap<br />
    + responds to status requests and requests for information about a device: SNMP agent<br />
    + collection of variables that can be monitored: MIB<br />
    + resides on an NMS: SNMP manager
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>SNMP consists of 3 items:</p>
  <p>+ <strong>SNMP Manager</strong> (sometimes called Network Management System – NMS): a software runs on the device of the network administrator (in most case, a computer) to monitor the network.<br />
    + <strong>SNMP Agent:</strong> a software runs on network devices that we want to monitor (router, switch, server…)<br />
    + <strong>Management Information Base</strong> (MIB): is the collection of managed objects. This components makes sure that the data exchange between the manager and the agent remains structured. In other words, MIB contains a set of questions that the SNMP Manager can ask the Agent (and the Agent can understand them). MIB is commonly shared between the Agent and Manager.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/SNMP/SNMP_Components.jpg" alt="SNMP_Components.jpg" width={438} height={239} /></p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Refer to the exhibit.
  <p><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna/draganddrop/ipconfig_all_2.jpg" alt="ipconfig_all_2.jpg" width={587} height={468} /></p>
  <p>An engineer is required to verify that the network parameters are valid for the users wireless LAN connectivity on a /24 subnet. Drag and drop the values from the left onto the network parameters on the right. Not all values are used.</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/network_parameters.jpg" alt="network_parameters.jpg" width={536} height={309} /></p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ host IP address: 192.168.1.20<br />
    + broadcast address: 192.168.1.255<br />
    + network address: 192.168.1.0<br />
    + default gateway: 192.168.1.1<br />
    + MAC address: B8-76-3F-7C-57-DF<br />
    + last assignable IP address in the subnet: 192.168.1.254
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Note: The “Wireless LAN adapter Local Area Connection *6” is not physical LAN connection. Those are just Virtual drivers (simulated network adapters) that are installed by Windows for something like Hyper-V. Real, physical NICs get numbered “Ethernet ###” (or “Wireless ###”, etc.)</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  An engineer is tasked to configure a switch with port security to ensure devices that forward unicasts, multicasts, and broadcasts are unable to flood the port. The port must be configured to permit only two random MAC addresses at a time. Drag and drop the required configuration commands from the left onto the sequence on the right. (Not all commands are used)
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/port_security_sticky_config.jpg" alt="port_security_sticky_config.jpg" width={472} height={303} /></p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>1: switchport mode access<br />
    2: switchport port-security<br />
    3: switchport port-security maximum 2<br />
    4: switchport port-security violation shutdown
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>This question says “permit only two random MAC addresses at a time” so we cannot use the “switchport port-security mac-address sticky” command as the switch will only learn and save the first two MAC addresses forever. Although the command “switchport port-security violation shutdown” is unnecessary because it is the default state of port-security but it is not wrong to reuse it.&nbsp;</p>
  <p>Note:</p>
  <p>The full syntax of the second command is:</p>
  <p><strong>switchport port-security mac-address sticky [MAC]</strong></p>
  <p>If we don’t specify the MAC address (like in this question) then the switch will dynamically learn the attached MAC Address and place it into your running-configuration.</p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Drag the characteristics of network architectures from the left onto the type of architecture on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/Collapsed_Core_Three_Tiers.jpg" alt="Collapsed_Core_Three_Tiers.jpg" width={668} height={284} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p><strong>Collapsed Core</strong><br />
    + most appropriate for small network designs<br />
    + single device handles the core and the distribution layer<br />
    + more cost-effective than other options</p>
  <p><strong>Three-Tier</strong><br />
    + separate devices handle the core and the distribution layer<br />
    + enhances network availability
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The three-tier hierarchical design maximizes performance, network availability, and the ability to scale the network design.<br />
    However, many small enterprise networks do not grow significantly larger over time. Therefore, a two-tier hierarchical design where the core and distribution layers are collapsed into one layer is often more practical. <strong>A “collapsed core” is when the distribution layer and core layer functions are implemented by a single device</strong>. The primary motivation for the collapsed core design is reducing network cost, while maintaining most of the benefits of the three-tier hierarchical model.</p>
  <p>Reference: <a href="https://www.ciscopress.com/articles/article.asp?p=2202410&seqNum=4" target="_blank" rel="noopener noreferrer">https://www.ciscopress.com/articles/article.asp?p=2202410&amp;seqNum=4</a></p>
  <p>A collapsed core network is shown below. The collapsed core network may be deployed with redundant core/distribution router, or consolidated core/distribution router.</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/Basic/collapsed_core.jpg" alt="collapsed_core.jpg" width={787} height={487} /></p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Drag and drop the QoS congestion management terms from the left onto the description on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/QoS_congestion_management_terms.jpg" alt="QoS_congestion_management_terms.jpg" width={630} height={281} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ services a specified number of bytes in one queue before continuing to the next queue: CQ<br />
    + provides guaranteed bandwidth to a specified class of traffic: CBWFQ<br />
    + places packets into one of four priority-based queues: PQ<br />
    + provides minimum guaranteed bandwidth to one or more flows:&nbsp; WFQ<br />
    + uses store-and-forward queuing: FIFO
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>First-in, first-out</strong> (FIFO): FIFO entails no concept of priority or classes of traffic. With FIFO, transmission of packets out the interface occurs in the order the packets arrive, which means no QoS<br />
    <strong>Priority Queuing</strong> (PQ): This type of queuing places traffic into one of four queues. Each queue has a different level of priority, and higher-priority queues must be emptied before packets are emptied from lower-priority queues. This behavior can “starve out” lower- priority traffic.<br />
    <strong>Custom Queuing</strong> (CQ): provide specific traffic guaranteed bandwidth at a potential congestion point, assuring the traffic a fixed portion of available bandwidth and leaving the remaining bandwidth to other traffic.<br />
    <strong>Weighted fair queueing</strong> (WFQ): offers dynamic, fair queuing that divides bandwidth across queues of traffic based on weights. In standard WFQ, packets are classified into flows according to one of four criteria: the source Internet Protocol address (IP address), the destination IP address, the source Transmission Control Protocol (TCP) or User Datagram Protocol (UDP) port, or the destination TCP or UDP port.<br />
    <strong>Class-based weighted fair queueing</strong> (CBWFQ) extends the standard WFQ functionality to provide support for user-defined traffic classes. For CBWFQ, you define traffic classes based on match criteria including protocols, access control lists (ACLs), and input interfaces. Packets satisfying the match criteria for a class constitute the traffic for that class. A queue is reserved for each class, and traffic belonging to a class is directed to the queue for that class.<br />
    Once a class has been defined according to its match criteria, you can assign it characteristics. To characterize a class, you assign it bandwidth, weight, and maximum packet limit. The bandwidth assigned to a class is the guaranteed bandwidth delivered to the class during congestion.</p>
  <p><span className="ccnaquestionsnumber">Question 7</span></p>
  Refer to the exhibit.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/static_NAT.jpg" alt="static_NAT.jpg" width={410} height={302} /></p>
  <p>An engineer is configuring the router to provide static NAT for the webserver. Drag and drop the configuration commands from the left onto the letters that correspond to its position in the configuration on the right.</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/static_NAT_server.jpg" alt="static_NAT_server.jpg" width={655} height={313} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ position A: ip address 172.16.1.1 255.255.255.0<br />
    + position B: ip nat inside<br />
    + position C: ip address 45.83.2.214 255.255.255.240<br />
    + position D: ip nat outside<br />
    + position E: ip nat inside source static tcp 172.16.1.2 80 45.83.2.214 80 extendable<br />
    + position F: ip nat inside source list 1 interface s0 overload
  </p><p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  Drag and drop the DHCP snooping terms from the left onto the descriptions on the right.
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/draganddrop/DHCP_terms.jpg" alt="DHCP_terms.jpg" width={650} height={266} /></p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span></p>
  <p>+ list of hosts on the network that are unknown to the administrative domain: snooping binding database<br />
    + unknown DHCP server within an administrative domain: spurious DHCP server<br />
    + network component that propagates IP addresses to hosts on the network: DHCP server<br />
    + default state of all interfaces: untrusted<br />
    + internal device under the control of the network administrator: trusted
  </p>
</div>

      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default DragDropQuestion3;
