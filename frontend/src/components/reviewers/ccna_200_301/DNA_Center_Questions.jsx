import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DNACenterQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">DNA Center Questions</h1>
<div>
  <table style={{borderCollapse: 'collapse'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: '100%'}}>
          <p><span className="blueandbold">DNA Center Quick Summary</span></p>
          <p>Software-Defined Access (SDA) uses the software-defined architectural model, with a controller and various APIs. At the center sits the Digital Network Architecture (DNA) Center controller.</p>
          <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/DNA_Center.jpg" alt="DNA_Center.jpg" width={177} height={321} /></p>
          <p>DNA Center is the controller for SDA networks. DNA Center uses REST APIs on Northbound interface. On Southbound interface, DNA Center uses various protocols like RESTCONF, NETCONF etc.</p>
          <p>The southbound side of the controller contains the fabric, underlay, and overlay:</p>
          <p><strong>Overlay</strong>: The mechanisms to create VXLAN tunnels between SDA switches, which are then used to transport traffic from one fabric endpoint to another over the fabric.</p>
          <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/Overlay.jpg" alt="Overlay.jpg" width={384} height={105} /></p>
          <p><strong>Underlay</strong>: The network of devices and connections (cables and wireless) to provide IP connectivity to all nodes in the fabric, with a goal to support the dynamic discovery of all SDA devices and endpoints as a part of the process to create overlay VXLAN tunnels.</p>
          <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/Underlay.jpg" alt="Underlay.jpg" width={395} height={141} /></p>
          <p>The relationship between Overlay and Underlay is shown below:</p>
          <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/VXLAN_VTEP.jpg" alt="VXLAN_VTEP.jpg" width={599} height={299} /></p>
          <p><strong>Fabric</strong>: The combination of overlay and underlay, which together provide all features to deliver data across the network with the desired features and attributes</p>
          <p>Reference: CCNA 200-301 Official Cert Guide</p>
          <p>Cisco DNA Center is a software solution that resides on the Cisco DNA Center appliance. The solution receives data in the form of streaming telemetry from every device (switch, router, access point, and wireless access controller) on the network. This data provides Cisco DNA Center with the real-time information it needs for the many functions it performs.</p>
          <p>Cisco DNA Center collects data from several different sources and protocols on the local network, including the following: traceroute; syslog; NetFlow; Authentication, Authorization, and Accounting (AAA); routers; Dynamic Host Configuration Protocol (DHCP); Telnet; wireless devices; Command-Line Interface (CLI); Object IDs (OIDs); IP SLA; DNS; ping; Simple Network Management Protocol (SNMP); IP Address Management (IPAM); MIB; Cisco Connected Mobile Experiences (CMX); and AppDynamics.</p>
          <p>Cisco DNA Center offers 360-degree extensibility through four distinct types of platform capabilities:</p>
          <p>+ <strong>Intent-based APIs</strong> leverage the controller and enable business and IT applications to deliver intent to the network and to reap network analytics and insights for IT and business innovation. The Intent API provides policy-based abstraction of business intent, allowing focus on an outcome rather than struggling with individual mechanisms steps.</p>
          <p>For example, the administrator configures the intent or outcome desired of a set of security polices. The DNA Center then communicates with the devices to determine exactly the required configuration to achieve that intent. Then the complete configuration is sent down to the devices.<br />
            + <strong>Process adapters</strong>, built on integration APIs, allow integration with other IT and network systems to streamline IT operations and processes.<br />
            + <strong>Domain adapters</strong>, built on integration APIs, allow integration with other infrastructure domains such as data center, WAN, and security to deliver a consistent intent-based infrastructure across the entire IT environment.<br />
            + <strong>SDKs</strong> allow management to be extended to third-party vendor’s network devices to offer support for diverse environments.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><strong>Premium Member</strong>: You can test your knowledge with these questions first via this <a href="https://www.9tut.com/dna-center-quiz" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which two capacities of Cisco DNA Center make it more extensible as compared to traditional campus device management? (Choose two)
  <p>A. adapters that support all families of Cisco IOS software<br />
    B. SDKs that support interaction with third-party network equipment<br />
    C. customized versions for small, medium, and large enterprises<br />
    D. REST APIs that allow for external applications to interact natively<br />
    E. modular design that is upgradable as needed</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Cisco DNA Center offers 360-degree extensibility through four distinct types of platform capabilities:</p>
  <p>+ <strong>Intent-based APIs</strong> leverage the controller and enable business and IT applications to deliver intent to the network and to reap network analytics and insights for IT and business innovation.<br />
    + <strong>Process adapters</strong>, built on integration APIs, allow integration with other IT and network systems to streamline IT operations and processes.<br />
    + <strong>Domain adapters</strong>, built on integration APIs, allow integration with other infrastructure domains such as data center, WAN, and security to deliver a consistent intent-based infrastructure across the entire IT environment.<br />
    + <strong>SDKs</strong> allow management to be extended to third-party vendor’s network devices to offer support for diverse environments.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/products/collateral/cloud-systems-management/dna-center/nb-06-dna-cent-platf-aag-cte-en.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/products/collateral/cloud-systems-management/dna-center/nb-06-dna-cent-platf-aag-cte-en.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  What makes Cisco DNA Center different from traditional network management applications and their management of networks?
  <p>A. It only supports auto-discovery of network elements in a green field deployment.<br />
    B. It modular design allows someone to implement different versions to meet the specific needs of an organization<br />
    C. It abstracts policy from the actual device configuration<br />
    D. It does not support high availability of management functions when operating in cluster mode</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p className="ccnaquestionsnumber">Question 3</p>
  How does Cisco DNA Center gather data from the network?
  <p>A. Network devices use different services like SNMP, syslog, and streaming telemetry to send data to the controller<br />
    B. Devices establish an iPsec tunnel to exchange data with the controller<br />
    C. Devices use the call-home protocol to periodically send data to the controller<br />
    D. The Cisco CU Analyzer tool gathers data from each licensed network device and streams it to the controller</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Cisco DNA Center is a software solution that resides on the Cisco DNA Center appliance. <span style={{textDecoration: 'underline'}}>The solution receives data in the form of streaming telemetry</span> from every device (switch, router, access point, and wireless access controller) on the network. This data provides Cisco DNA Center with the real-time information it needs for the many functions it performs.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/products/collateral/cloud-systems-management/dna-center/nb-06-dna-center-data-sheet-cte-en.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/products/collateral/cloud-systems-management/dna-center/nb-06-dna-center-data-sheet-cte-en.html</a></p>
  <p>Cisco DNA Center collects data from several different sources and protocols on the local network, including the following: traceroute; syslog; NetFlow; Authentication, Authorization, and Accounting (AAA); routers; Dynamic Host Configuration Protocol (DHCP); Telnet; wireless devices; Command-Line Interface (CLI); Object IDs (OIDs); IP SLA; DNS; ping; Simple Network Management Protocol (SNMP); IP Address Management (IPAM); MIB; Cisco Connected Mobile Experiences (CMX); and AppDynamics.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/products/collateral/cloud-systems-management/dna-center/nb-06-dna-center-faq-cte-en.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/products/collateral/cloud-systems-management/dna-center/nb-06-dna-center-faq-cte-en.html</a></p>
  <p className="ccnaquestionsnumber">Question 4</p>
  How do traditional campus device management and Cisco DNA Center device management differ in regards to deployment?
  <p>A. Cisco DNA Center device management can deploy a network more quickly than traditional campus device management<br />
    B. Traditional campus device management allows a network to scale more quickly than with Cisco DNA Center device management<br />
    C. Cisco DNA Center device management can be implemented at a lower cost than most traditional campus device management options<br />
    D. Traditional campus device management schemes can typically deploy patches and updates more quickly than Cisco DNA Center device management</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>With Intent-based APIs, the administrator configures the intent or outcome desired of a set of security polices. The DNA Center then communicates with the devices to determine exactly the required configuration to achieve that intent. Then the complete configuration is sent down to the devices -&gt; This helps reduce time to deploy a network compare to the traditional networks.</p>
  <p className="ccnaquestionsnumber">Question 5</p>
  What is an advantage of Cisco DNA Center versus traditional campus device management?
  <p>A. It supports numerous extensibility options including cross-domain adapters and third-party SDKs<br />
    B. It supports high availability for management functions when operating in cluster mode<br />
    C. It enables easy autodiscovery of network elements m a brownfield deployment<br />
    D. It is designed primarily to provide network assurance</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p>
</div>



      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default DNACenterQuestion;
