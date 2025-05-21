import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const Ipv6 = () => {
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
    <div
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-4">
        IPv6 Tutorial
        </h1>
      </div>

      {/* Content */}
<div>
  <p>Internet has been growing extremely fast so the IPv4 addresses are quickly approaching complete depletion. Although many organizations already use Network Address Translators (NATs) to map multiple private address spaces to a single public IP address but they have to face with other problems from NAT (the use of the same private address, security…). Moreover, many other devices than PC &amp; laptop are requiring an IP address to go to the Internet. To solve these problems in long-term, a new version of the IP protocol – version 6 (IPv6) was created and developed.</p>
  <p>IPv6 was created by the Internet Engineering Task Force (IETF), a standards body, as a replacement to IPv4 in 1998. So what happened with IPv5? IP Version 5 was defined for experimental reasons and never was deployed.</p>
  <p>While IPv4 uses 32 bits to address the IP (provides approximately 2<sup>32</sup> = 4,294,967,296 unique addresses – but in fact about 3.7 billion addresses are assignable because the IPv4 addressing system separates the addresses into classes and reserves addresses for multicasting, testing, and other specific uses), IPv6 uses up to 128 bits which provides 2<sup>128</sup> addresses or approximately 3.4 * 10<sup>38</sup> addresses. Well, maybe we should say it is extremely extremely extremely huge :)</p>
  <p><span id="more-681" /></p>
  <p><strong>IPv6 Address Types</strong></p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Address Type</strong></td>
        <td><strong>Description </strong></td>
      </tr>
      <tr>
        <td>Unicast</td>
        <td>One to One (Global, Link local, Site local)<br />
          + An address destined for a single interface.</td>
      </tr>
      <tr>
        <td>Multicast</td>
        <td>One to Many<br />
          + An address for a set of interfaces<br />
          + Delivered to a group of interfaces identified by that address.<br />
          + Replaces IPv4 “broadcast”</td>
      </tr>
      <tr>
        <td>Anycast</td>
        <td>One to Nearest (Allocated from Unicast)<br />
          + Delivered to the closest interface as determined by the IGP</td>
      </tr>
    </tbody>
  </table>
  <p>A single interface may be assigned multiple IPv6 addresses of any type (unicast, anycast, multicast)</p>
  <p>Note: There is no broadcast address in IPv6</p>
  <p><strong>IPv6 address format</strong></p>
  <p>Format:</p>
  <p><strong>x:x:x:x:x:x:x:x</strong> – where <strong>x</strong> is a 16 bits hexadecimal field and <strong>x</strong> represents four hexadecimal digits.<br />
    An example of IPv6: <strong><br />
      2001:0000:5723:0000:0000:D14E:DBCA:0764</strong></p>
  <p>There are:<br />
    + 8 groups of 4 hexadecimal digits. <br />
    + Each group represents 16 bits (4 hexa digits * 4 bit)<br />
    + Separator is “:” <br />
    + Hex digits are not case sensitive, so “<strong>DBCA</strong>” is same as “dbca” or “DBca”…</p>
  <p>IPv6 (128-bit) address contains two parts: <br />
    + The first 64-bits is known as the prefix. The prefix includes the network and subnet address. Because addresses are allocated based on physical location, the prefix also includes global routing information. The 64-bit prefix is often referred to as the global routing prefix. <br />
    + The last 64-bits is the interface ID. This is the unique address assigned to an interface.</p>
  <p>Note: Addresses are assigned to interfaces (network connections), not to the host. Each interface can have more than one IPv6 address.</p>
  <p><strong>Rules for abbreviating IPv6 Addresses:</strong></p>
  <p>+ Leading zeros in a field are optional</p>
  <p>2001:<strong>0DA8</strong>:E800:<strong>0000</strong>:<strong>0260</strong>:3EFF:FE47:<strong>0001</strong> can be written as</p>
  <p>2001:<strong>DA8</strong>:E800:<strong>0</strong>:<strong>260</strong>:3EFF:FE47:<strong>1</strong></p>
  <p>+ Successive fields of 0 are represented as ::, but only once in an address:</p>
  <p>2001:0DA8:E800:<strong>0000:0000:0000:0000:0001</strong> -&gt; 2001:DA8:E800<strong>::1</strong></p>
  <p>Other examples:<br />
    – FF02:0:0:0:0:0:0:1 =&gt; FF02::1<br />
    – 3FFE:0501:0008:0000:0260:97FF:FE40:EFAB = 3FFE:501:8:0:260:97FF:FE40:EFAB = 3FFE:501:8::260:97FF:FE40:EFAB<br />
    – 0:0:0:0:0:0:0:1 =&gt; ::1<br />
    – 0:0:0:0:0:0:0:0 =&gt; ::</p>
  <p><strong>IPv6 Addressing In Use</strong></p>
  <p>IPv6 uses the “/” notation to denote how many bits in the IPv6 address represent the subnet.</p>
  <p>The full syntax of IPv6 is</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>ipv6-address</strong>/<strong>prefix-length</strong></td>
      </tr>
    </tbody>
  </table>
  <p>where<br />
    + <strong>ipv6-address</strong> is the 128-bit IPv6 address<br />
    + /<strong>prefix-length</strong> is a decimal value representing how many of the left most contiguous bits of the address comprise the prefix.</p>
  <p>Let’s analyze an example: <br />
    <span className="blueandbold">2001:C:7:ABCD</span><span className="pinkandbold">::1</span>/64 is really <br />
    <span className="blueandbold">2001:000C:0007:ABCD</span>:<span className="pinkandbold">0000:0000:0000:0001</span>/64<br />
    + The first 64-bits <span className="blueandbold">2001:000C:0007:ABCD</span> is the address prefix<br />
    + The last 64-bits <span className="pinkandbold">0000:0000:0000:0001</span> is the interface ID<br />
    + /64 is the prefix length (/64 is well-known and also the prefix length in most cases)</p>
  <p>In the next part, we will understand more about each prefix of an IPv6 address.</p>
  <p>
  </p>
</div>


      {/* Accordion */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12 mb-12"
      >
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default Ipv6;
