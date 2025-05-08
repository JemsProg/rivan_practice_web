import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const MiscellaneousQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Miscellaneous Questions</h1>


<div>
  <p>
  </p><table style={{borderCollapse: 'collapse'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: '100%'}}>
          <p><span className="blueandbold">Quick Summary</span></p>
          <p><strong>Login vs Login Local command</strong></p>
          <p>We usually see the “login” or “login local” command under line VTY or line console but what are they different? Remember this rule of thumb:<br />
            + “login”: 1 word, requires 1 piece of information (requires password only)<br />
            + “login local”: 2 words, requires 2 pieces of information (requires both username and password)</p>
          <p>With “login” command, we have to configure a password on the local router (with the “password …” command) or we will get the warning: “% Login disbled on line …, until ‘password’ is set”.</p>
          <p>With “login local” command, we have to configure both username and password with the command “username {'{'}<em>username</em>{'}'} secret {'{'}<em>password</em>{'}'}” or the command “username {'{'}<em>username</em>{'}'} password {'{'}<em>password</em>{'}'}”. But if we forget to configure username and password, no warning message is shown.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which command can you enter to allow Telnet to be supported in addition to SSH?
  <p>A. transport input telnet ssh<br />
    B. transport input telnet<br />
    C. no transport input telnet<br />
    D. privilege level 15</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  A network engineer must back up 20 network router configurations globally within a customer environment. Which protocol allows the engineer to perform this function using the copy function?
  <p>A. COP<br />
    B. SNMP<br />
    C. SMTP<br />
    D. ARP</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>SNMP is an application-layer protocol that provides a message format for communication between SNMP managers and agents. SNMP provides a standardized framework and a common language used for the monitoring and management of devices in a network.<br />
    The SNMP framework has three parts:<br />
    + An SNMP manager<br />
    + An SNMP agent<br />
    + A Management Information Base (MIB)</p>
  <p>The Management Information Base (MIB) is a virtual information storage area for network management information, which consists of collections of managed objects.</p>
  <p>With SNMP, the network administrator can send commands to multiple routers to do the backup.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  A Cisco IP phone receive untagged data traffic from an attached PC. Which action is taken by the phone?
  <p>A. It allows the traffic to pass through unchanged<br />
    B. It drops the traffic<br />
    C. It tags the traffic with the default VLAN<br />
    D. It tags the traffic with the native VLAN</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Untagged traffic from the device attached to the Cisco IP Phone passes through the phone unchanged, regardless of the trust state of the access port on the phone.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_40_se/configuration/guide/scg/swvoip.pdf" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst2960/software/release/12-2_40_se/configuration/guide/scg/swvoip.pdf</a></p>
  <p className="ccnaquestionsnumber">Question 4</p>
  Which function does an SNMP agent perform?
  <p>A. It sends information about MIB variables in response to requests from the NMS<br />
    B. It coordinates user authentication between a network device and a TACACS+ or RADIUS server<br />
    C. It requests information from remote network nodes about catastrophic system events.<br />
    D. It manages routing between Layer 3 devices in a network</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p className="ccnaquestionsnumber">Question 5</p>
  What are two differences between optical-fiber cabling and copper cabling? (Choose two)
  <p>A. Light is transmitted through the core of the fiber<br />
    B. A BNC connector is used for fiber connections<br />
    C. The glass core component is encased in a cladding<br />
    D. Fiber connects to physical interfaces using RJ-45 connections<br />
    E. The data can pass through the cladding</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The two main elements of an optical fiber are its core and cladding. The “core”, or the axial part of the optical fiber made of silica glass, is the light transmission area of the fiber. It may sometimes be treated with a “doping” element to change its refractive index and therefore the velocity of light down the fiber.</p>
  <p>The “cladding” is the layer completely surrounding the core.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/Basic/optical_fiber_cabling.jpg" alt="optical_fiber_cabling.jpg" width={479} height={148} /></p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/white_paper_c11-463661.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/products/collateral/interfaces-modules/transceiver-modules/white_paper_c11-463661.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  A device detects two stations transmitting frames at the same time. This condition occurs after the first 64 bytes of the frame is received interface counter increments?
  <p>A. collision<br />
    B. runt<br />
    C. CRC<br />
    D. late collision</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A late collision is defined as any collision that occurs after the first 512 bits (or 64th byte) of the frame have been transmitted. The usual possible causes are full-duplex/half-duplex mismatch, exceeded Ethernet cable length limits, or defective hardware such as incorrect cabling, non-compliant number of hubs in the network, or a bad NIC.</p>
  <p>Late collisions should never occur in a properly designed Ethernet network. They usually occur when Ethernet cables are too long or when there are too many repeaters in the network.</p>
  <p>Reference: <a href="https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Which technology must be implemented to configure network device monitoring with the highest security?
  <p>A. SNMPv3<br />
    B. IP SLA<br />
    C. NetFlow<br />
    D. syslog</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>SNMPv3—The most up-to-date protocol focuses on security. SNMPv3 defines a security model, user-based security model (USM), and a view-based access control model (VACM). SNMPv3 USM provides data integrity, data origin authentication, message replay protection, and protection against disclosure of the message payload.</p>
  <p>Reference: <a href="https://www.juniper.net/documentation/us/en/software/junos/network-mgmt/topics/topic-map/network-monitoring-by-using-snmp.html" target="_blank" rel="noopener noreferrer">https://www.juniper.net/documentation/us/en/software/junos/network-mgmt/topics/topic-map/network-monitoring-by-using-snmp.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  A network analyst is tasked with configuring the date and time on a router using EXEC mode. The date must be set to January 1,2020 and the time must be set to 12:00 am. Which command should be used?
  <p>A. clock summer-time date<br />
    B. clock set<br />
    C. clock timezone<br />
    D. clock summer-time recurring</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In this example, the clock time is set to 12:00 am with the clock date of January 1,2020.</p>
  <p>R1#clock set 12:00:00 jan 1 2020</p>
</div>




      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default MiscellaneousQuestion;
