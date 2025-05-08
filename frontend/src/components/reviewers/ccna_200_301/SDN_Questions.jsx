import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const SDNQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">SDN Questions</h1>

<div>
  <p>
  </p><table border={1}>
    <tbody>
      <tr>
        <td>
          <p><span className="blueandbold">SDN Quick Summary</span></p>
          <p>Everything that networking devices do can be categorized into three planes: Data Plane, Control Plane and Management Plane.<br />
            + <strong>Data Plane</strong>: responsible for the switching of packets through the router. In short, it includes any action after receiving data (processing, encapsulating/decapsulating, matching destination MAC &amp; IP addresses, forwarding, QoS, filtering with access-list)<br />
            + <strong>Control Plane</strong>: responsible for maintaining sessions and exchanging protocol information with other network devices. It consists of dynamic IP routing protocols (OSPF, EIGRP, BGP…), the RIB, routing updates, in addition to other protocols such as STP, ARP, ICMP, PIM, IGMP, LACP…<br />
            + <strong>Management Plane</strong>: is used to manage a device through its connection to the network. Examples of protocols processed in the management plane include Simple Network Management Protocol (SNMP), Telnet, File Transfer Protocol (FTP), Secure FTP, and Secure Shell (SSH). These management protocols are used for monitoring and for command-line interface (CLI) access</p>
          <p>Most traditional devices use a distributed architecture, in which each control plane is resided in a networking device. Therefore they need to communicate with each other via messages to work correctly.</p>
          <p>In contrast to distributed architecture, centralized (or controller-based) architectures centralizes the control of networking devices into one device, called <strong>SDN controller</strong>.</p>
          <p>Software-Defined Networking (SDN) is an approach to networking that centralizes the control plane into an application called a controller.</p>
          <p>As we took the control planes off networking devices but not data planes so we need a way to communicate with them. So we put a <strong>southbound interface</strong> (SBI) at the bottom of SDN controller for this task. An SBI communicates with the devices via an application programming interface (API).</p>
          <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/SDN_controller_based_architecture.jpg" alt="SDN_controller_based_architecture.jpg" width={582} height={410} /></p>
          <p>Now, in turn, the networking administrators and SDN applications want to control the controller! So the controller need a <strong>northbound interface</strong> (NBI) to communicate with us. The NBI applications included various network services, including network virtualization, dynamic virtual network provisioning, firewall monitoring, user identity management and access policy control.</p>
          <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/Southbound_Northbound_APIs.jpg" alt="Southbound_Northbound_APIs.jpg" width={171} height={216} /></p>
          <p>– <strong>REST</strong> (Representational State Transfer) describes a type of API that allows applications to sit on different hosts, using HTTP messages to transfer data over the API.<br />
            Three SDN controllers which are mentioned in CCNA:<br />
            + OpenDaylight Controller: an OpenFlow-based SDN<br />
            + Cisco Application Centric Infrastructure (ACI)<br />
            + Cisco APIC Enterprise Module (APIC-EM)</p>
          <p>SDN northbound APIs are usually RESTful APIs used to communicate between the SDN Controller and the services and applications running over the network. Another northbound API is Simple Object Access Protocol (SOAP).</p>
          <p>OpenFlow and NETCONF are Southbound APIs used for most SDN implementations. Another Southbound API is OpFlex, which is an open-standard, distributed control system. It send “summary policy” to network elements.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which statement about the Cisco ACI fabric is most accurate?
  <p>A. The APIC is able to enforce security by inserting itself into the data path.<br />
    B. The fabric header carries the EPG from the egress to the ingress leaf switch.<br />
    C. An APIC is a cluster of at least three APIC controllers, providing a single point of management without a single point of failure.<br />
    D. The spine switch rewrites the EPG from ingress to egress when it performs the forwarding proxy function</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 2</span></p>
  Which API is used in controller-based architectures to interact with edge devices?
  <p>A. overlay<br />
    B. northbound<br />
    C. underlay<br />
    D. southbound</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Southbound API is used to communicate with network devices.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/Southbound_Northbound_APIs.jpg" alt="Southbound_Northbound_APIs.jpg" width={171} height={216} /></p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  What are two characteristics of a controller-based network? (Choose two)
  <p>A. The administrator can make configuration updates from the CLI<br />
    B. It uses northbound and southbound APIs to communicate between architectural layers<br />
    C. It moves the control plane to a central point<br />
    D. It decentralizes the control plane, which allows each device to make its own forwarding decisions<br />
    E. It uses Telnet to report system issues.</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B C
  </p><p><span className="ccnaquestionsnumber">Question 4</span></p>
  What are two southbound APIs? (Choose two)
  <p>A. Thrift<br />
    B. NETCONF<br />
    C. Open Flow<br />
    D. DSC<br />
    E. CORBA</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>OpenFlow is a well-known southbound API. OpenFlow defines the way the SDN Controller should interact with the forwarding plane to make adjustments to the network, so it can better adapt to changing business requirements.</p>
  <p>The Network Configuration Protocol (NetConf) uses Extensible Markup Language (XML) to install, manipulate and delete configuration to network devices.</p>
  <p>Other southbound APIs are:<br />
    + onePK: a Cisco proprietary SBI to inspect or modify the network element configuration without hardware upgrades.<br />
    + OpFlex: an open-standard, distributed control system. It send “summary policy” to network elements.</p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Which statement correctly compares traditional networks and controller-based networks?
  <p>A. Only traditional networks offer a centralized control plane<br />
    B. Only traditional networks natively support centralized management<br />
    C. Traditional and controller-based networks abstract policies from device configurations <br />
    D. Only controller-based networks decouple the control plane and the data plane</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Most traditional devices use a distributed architecture, in which each control plane is resided in a networking device. Therefore they need to communicate with each other via messages to work correctly.</p>
  <p>In contrast to distributed architecture, centralized (or controller-based) architectures centralizes the control of networking devices into one device, called <strong>SDN controller</strong> -&gt; Answer D is correct.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/SDN_controller_based_architecture.jpg" alt="SDN_controller_based_architecture.jpg" width={582} height={410} /></p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  What software defined architecture plane assists network devices with making packet forwarding decisions by providing Layer 2 reachability and Layer 3 routing information?
  <p>A. data plane<br />
    B. control plane<br />
    C. policy plane<br />
    D. management plane</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>Control Plane Function</strong><br />
    In its simplest form, the control plane provides layer-2 MAC reachability and layer-3 routing information to network devices that require this information to make packet forwarding decisions. In the case of firewalls, the control plane would include stateful flow information for inspection. Control plane functionality can implemented as follows:</p>
  <p>+ Distributed – Conventional routers and switches operate using distributed protocols for control, i.e. where each device makes its own decisions about what to do, and communicate relevant information to other devices for input into their decision making process. For example, the Spanning Tree Protocol (STP), Fabric Path, and routing protocols such as IS-IS and BGP provide distributed control of packet forwarding functionality to networking devices.</p>
  <p>+ Centralized – In this case, a centralized controller provides the necessary information for a network element to make a decision. For example, these controller(s) instruct networking devices on where to forward packets by explicitly programming their MAC and FIBs.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Data_Center/VMDC/SDN/SDN.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Data_Center/VMDC/SDN/SDN.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  What are two benefits of controller-based networking compared to traditional networking? (Choose two)
  <p>A. controller-based increases network bandwidth usage, while traditional lightens the load on the network.<br />
    B. controller-based reduces network configuration complexity, while traditional increases the potential for errors<br />
    C. controller-based inflates software costs, while traditional decreases individual licensing costs<br />
    D. controller-based allows for fewer network failure, while traditional increases failure rates<br />
    E. controller-based provides centralization of key IT functions, while traditional requires distributes management function</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B E
  </p><p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  In software defined architectures, which plane is distributed and responsible for traffic forwarding?
  <p>A. management plane<br />
    B. control plane<br />
    C. data plane<br />
    D. policy plane</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Open Networking Foundation identifies three main parts of the Software-defined networking (SDN): Application layer; Control layer and Infrastructure layer. SDN separates a router’s control plane from the data (forwarding) plane. The control plane makes routing decisions. The data plane forwards data (packets) through the router. With SDN routing, decisions are made remotely instead of on each individual router.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/SDN/three-layer-software-defined-networking-SDN-architecture.png" alt="three-layer-software-defined-networking-SDN-architecture.png" width={347} height={341} /></p>
</div>



      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default SDNQuestion;
