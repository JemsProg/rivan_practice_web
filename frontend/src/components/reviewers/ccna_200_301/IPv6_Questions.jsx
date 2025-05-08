import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const IPv6Question = () => {
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
      <h1 className="text-3xl font-bold mb-4">IPv6 Questions </h1>
 
<div>
  <p>
  </p><p>Note: If you are not sure about IPv6, please read our <a href="https://www.9tut.com/ipv6-tutorial" target="_blank" rel="noopener noreferrer">IPv6 tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which command is used to configure an IPv6 static default route?
  <p>A. ipv6 route ::/0 interface next-hop<br />
    B. ipv6 route default interface next-hop<br />
    C. ipv6 route 0.0.0.0/0 interface next-hop<br />
    D. ip route 0.0.0.0/0 interface next-hop</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which command verifies whether any IPv6 ACLs are configured on a router?
  <p>A. show ipv6 interface<br />
    B. show access-list<br />
    C. show ipv6 access-list<br />
    D. show ipv6 route</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Refer to the exhibit. The New York router is configured with static routes pointing to the Atlanta and Washington sites. Which two tasks must be performed so that the Serial0/0/0 interfaces on the Atlanta and Washington routers can reach one another? (Choose two)
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/IPv6/ipv6_static_route.jpg" alt="ipv6_static_route.jpg" width={265} height={205} /></p>
  <p>Configured interfaces:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Atlanta:</strong><br />
          S0/0/0: 2012::1/126<br />
          Loopback1: 2000::1/128</td>
        <td><strong>New York:</strong><br />
          S0/0/0: 2012::2/126<br />
          S0/0/1: 2023::2/126<br />
          Loopback2:2000::2/128</td>
        <td><strong>Washington:</strong><br />
          S0/0/0: 2023::3/126<br />
          Loopback3: 2000::3/128</td>
      </tr>
    </tbody>
  </table>
  <p>A. Configure the ipv6 route 2012::/126 2023::1 command on the Washington router<br />
    B. Configure the ipv6 route 2023::/126 2012::1 command on the Atlanta router<br />
    C. Configure the ipv6 route 2012::/126 s0/0/0 command on the Atlanta router<br />
    D. Configure the ipv6 route 2023::/126 2012::2 command on the Atlanta router<br />
    E. Configure the ipv6 route 2012::/126 2023:2 command on the Washington router</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The short syntax of static IPv6 route is:</p>
  <p>ipv6 route &lt;destination-IPv6-address&gt; {'{'}next-hop-IPv6-address | exit-interface{'}'}</p>
  <p><span className="ccnaquestionsnumber">Question 4</span></p>
  Refer to exhibit. An engineer is configuring the New York router to reach the Lo1 interface of the Atlanta router using interface S0/0/0 as the primary path. Which two commands must be configured on the New York router so that it can reach the Lo1 interface of the Atlanta router via Washington when the link between New York and Atlanta goes down? (Choose two)
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/IPv6/IPv6_routing.jpg" alt="IPv6_routing.jpg" width={384} height={167} /></p>
  <p>Configured interfaces:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Atlanta:</strong><br />
          S0/0/0: 2012::1/126<br />
          S0/0/1: 2013::1/126<br />
          Loopback1: 2000::1/128</td>
        <td><strong>New York:</strong><br />
          S0/0/0: 2012::2/126<br />
          S0/0/1: 2023::2/126<br />
          Loopback2:2000::2/128</td>
        <td><strong>Washington:</strong><br />
          S0/0/0: 2023::3/126<br />
          S0/0/1: 2013::3/126<br />
          Loopback3: 2000::3/128</td>
      </tr>
    </tbody>
  </table>
  <p>A. ipv6 route 2000::1/128 2012::1<br />
    B. ipv6 route 2000::1/128 2012::1 5<br />
    C. ipv6 route 2000::1/128 2012::2<br />
    D. ipv6 route 2000::1/128 2023::2 5<br />
    E. ipv6 route 2000::1/128 2023::3 5</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Floating static routes are static routes that have an administrative distance greater than the administrative distance (AD) of another static route or dynamic routes. By default a static route has an AD of 1 then floating static route must have the AD greater than 1. Floating static route has a manually configured administrative distance greater than that of the primary route and therefore would not be in the routing table until the primary route fails.</p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Which IPv6 address type provides communication between subnets and cannot route on the Internet?
  <p>A. global unicast<br />
    B. unique local<br />
    C. link-local<br />
    D. multicast</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A IPv6 Unique Local Address is an IPv6 address in the block FC00::/7. It is the approximate IPv6 counterpart of the IPv4 private address. It is not routable on the global Internet.</p>
  <p>Note: In the past, Site-local addresses (FEC0::/10) are equivalent to private IP addresses in IPv4 but now they are deprecated.</p>
  <p>Link-local addresses only used for communications within the local subnet. It is usually created dynamically using a link-local prefix of FE80::/10 and a 64-bit interface identifier (based on 48-bit MAC address).</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Which command automatically generates an IPv6 address from a specified IPv6 prefix and MAC address of an interface?
  <p>A. ipv6 address dhcp<br />
    B. ipv6 address 2001:068:5:112::64 eui-64<br />
    C. ipv6 address autoconfig<br />
    D. ipv6 address 2001:068:5:112:2/64 link-local</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The “<span className="ph synph"><span className="keyword kwd">ipv6</span> <span className="keyword kwd">address</span> <span className="keyword kwd">autoconfig”</span> </span> command causes the device to perform IPv6 stateless address auto-configuration to discover prefixes on the link and then to add the EUI-64 based addresses to the interface. Addresses are configured depending on the prefixes received in Router Advertisement (RA) messages. The device will listen for RA messages which are transmitted periodically from the router (DHCP Server). This RA message allows a host to create a global IPv6 address from:<br />
    + Its interface identifier (EUI-64 address)<br />
    + Link Prefix (obtained via RA)<br />
    Note: Global address is the combination of Link Prefix and EUI-64 address</p>
  <p>Although answer B seems to be correct but it is missing the prefix-length /64:</p>
  <p><img decoding="async" src="https://www.9tut.com/images/ccna/IPv6/ipv6_address_eui_64.jpg" alt="ipv6_address_eui_64.jpg" width={647} height={156} /></p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Which IPv6 address block sends packets to a group address rather than a single address?
  <p>OR</p>
  <p>Which IPv6 address block forwards packets to a multicast address rather than a unicast address?</p>
  <p>A. 2000::/3<br />
    B. FC00::/7<br />
    C. FE80::/10<br />
    D. FF00::/12</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Well-known multicast addresses have the prefix ff00::/12.</p>
  <p>FE80::/10 range is used for link-local addresses. Link-local addresses only used for communications within the local subnetwork (automatic address configuration, neighbor discovery, router discovery, and by many routing protocols). It is only valid on the current subnet. It is usually created dynamically using a link-local prefix of FE80::/10 and a 64-bit interface identifier (based on 48-bit MAC address).</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  When configuring IPv6 on an interface, which two IPv6 multicast groups are joined? (Choose two)
  <p>A. 2000::/3<br />
    B. 2002::5<br />
    C. FC00::/7<br />
    D. FF02::1<br />
    E. FF02::2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>When an interface is configured with IPv6 address, it automatically joins the all nodes (FF02::1) and solicited-node (FF02::1:FFxx:xxxx) multicast groups. The all-node group is used to communicate with all interfaces on the local link, and the solicited-nodes multicast group is required for link-layer address resolution. Routers also join a third multicast group, the all-routers group (FF02::2).</p>
  <p className="ccnaquestionsnumber">Question 9</p>
  Which action must be taken to assign a global unicast IPv6 address on an interface that is derived from the MAC address of that interface?
  <p>A. configure a stateful DHCPv6 server on the network<br />
    B. enable SLAAC on an interface<br />
    C. disable the EUI-64 bit process<br />
    D. explicitly assign a link-local address</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p className="ccnaquestionsnumber">Question 10</p>
  What is the expected outcome when an EUI-64 address is generated?
  <p>A. The seventh bit of the original MAC address of the interface is inverted<br />
    B. The interface ID is configured as a random 64-bit value<br />
    C. The characters FE80 are inserted at the beginning of the MAC address of the interface<br />
    D. The MAC address of the interface is used as the interface ID without modification</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The IPv6 EUI-64 format address is obtained through the 48-bit MAC address. The MAC address is first separated into two 24-bits, with one being OUI (Organizationally Unique Identifier) and the other being NIC specific. The 16-bit 0xFFFE is then inserted between these two 24-bits to for the 64-bit EUI address. IEEE has chosen FFFE as a reserved value which can only appear in EUI-64 generated from the an EUI-48 MAC address -&gt; Answer C and answer D are not correct.</p>
  <p>Let’s take an example of the MAC address of C601.420F.0007. This MAC address is divided into two 24-bit parts, which are “C60142” (OUI) and “0F0007” (NIC). Then “FFFE” is inserted in the middle. Therefore we have the address: C601.42FF.FE0F.0007.</p>
  <p>Then, according to the RFC 3513 we need to invert the <em><strong>Universal/Local</strong></em> bit (“U/L” bit) in the 7th position of the first octet. The “u” bit is set to 1 to indicate Universal, and it is set to zero (0) to indicate local scope. In this case we don’t need to set this bit to 1 because it is already 1 (C6 = 110001<strong>1</strong>0).</p>
  <p>Therefore with the subnet of 2001:DB8:0:1::/64, the full IPv6 address is 2001:DB8:0:1:C601:42FF:FE0F:7/64</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  Which type of IPv6 address is publicly routable in the same way as IPv4 public addresses?
  <p>A. multicast<br />
    B. unique local<br />
    C. link-local<br />
    D. global unicast</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaquestionsnumber">Question 12<br />
    </span></p>
  Refer to exhibit. The loopback1 interface of the Atlanta router must reach the loopback3 interface of the Washington router. Which two static host routes must be configured on the NEW York router? (Choose two)
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/IPv6/IPv6_static_host_routing.jpg" alt="IPv6_static_host_routing.jpg" width={384} height={167} /></p>
  <p>Configured interfaces:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Atlanta:</strong><br />
          S0/0/0: 2012::1/126<br />
          Loopback1: 2000::1/128</td>
        <td><strong>New York:</strong><br />
          S0/0/0: 2012::2/126<br />
          S0/0/1: 2023::2/126<br />
          Loopback2:2000::2/128</td>
        <td><strong>Washington:</strong><br />
          S0/0/0: 2023::3/126<br />
          Loopback3: 2000::3/128</td>
      </tr>
    </tbody>
  </table>
  <p>A. ipv6 route 2000::1/128 2012::1<br />
    B. ipv6 route 2000::3/128 2023::3<br />
    C. ipv6 route 2000::3/128 s0/0/0<br />
    D. ipv6 route 2000::1/128 2012::2<br />
    E. ipv6 route 2000::1/128 s0/0/1</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The short syntax of static IPv6 route is:</p>
  <p>ipv6 route &lt;destination-IPv6-address&gt; {'{'}next-hop-IPv6-address | exit-interface{'}'}</p>
  <p>Therefore if we use the destination-IPv6-address, we have to specify the IPv6 address of the remote (next-hop) router, not the local IPv6 address. If we use the exit-interface, we have to use the local exit-interface, not remote interface.</p>
  <p>In this question, we have to suppose that all IPv6 addresses of Atlanta ends with .1 and Washington ends with .3</p>
  <p>Please notice that this question asks about the command used on NEW York router so answer A is used to reach Atlanta router while answer B is used to reach Washington router.</p>
  <p><span className="ccnaquestionsnumber">Question 13<br />
    </span></p>
  Which IPv6 address block forwards packets to a multicast address rather than a unicast address?
  <p>A. FE80::/10<br />
    B. FC00::/7<br />
    C. 2000::/3<br />
    D. FF00::/12</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Well-known multicast addresses have the prefix ff00::/12.</p>
  <p>Reference: <a href="https://www.ciscopress.com/articles/article.asp?p=2803866&seqNum=5" target="_blank" rel="noopener noreferrer">https://www.ciscopress.com/articles/article.asp?p=2803866&amp;seqNum=5</a></p>
  <p><span className="ccnaquestionsnumber">Question 14<br />
    </span></p>
  Refer to the exhibit. An engineer configured the New York router with static routes that point to the Atlanta and Washington sites. Which command must be configured on the Atlanta and Washington routers so that both sites are able to reach the loopback2 interface on the New York router?
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/IPv6/ipv6_static_route.jpg" alt="ipv6_static_route.jpg" width={265} height={205} /></p>
  <p>Configured router IPv6 interfaces:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Atlanta:</strong><br />
          S0/0/0: 2012::1/126<br />
          Loopback1: 2000::1/128</td>
        <td><strong>New York:</strong><br />
          S0/0/0: 2012::2/126<br />
          S0/0/1: 2023::2/126<br />
          Loopback2:2000::2/128</td>
        <td><strong>Washington:</strong><br />
          S0/0/0: 2023::3/126<br />
          Loopback3: 2000::3/128</td>
      </tr>
    </tbody>
  </table>
  <p>A. ip route 0.0.0.0.0.0.0.0 Serial 0/0/0<br />
    B. ipv6 route 0/0 Serial 0/0/0<br />
    C. ipv6 route ::/0 Serial 0/0/0<br />
    D. ipv6 route ::/0 Serial 0/0/1<br />
    E. ipv6 route ::/0 2000::2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The short syntax of static IPv6 route is:</p>
  <p><strong>ipv6 route</strong> &lt;destination-IPv6-address&gt; {'{'}next-hop-IPv6-address | exit-interface{'}'}</p>
  <p>Therefore we must configure exit interfaces on Atlanta and Washington routers (their S0/0/0 interfaces) or the next hop IPv6 addresses (which are the IPv6 addresses of S0/0/0 – 2012::2 for Atlanta side and S0/0/1 2023::2 for Washington side).</p>
  <p>Note: In an access list, 0.0.0.0/0 is “all possible IPv4 addresses” while ::/0 is the IPv6 equivalent of that.</p>
</div>

      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default IPv6Question;
