import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const BasicQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Basic Questions</h1>


 <div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which two statements about the purpose of the OSI model are accurate? (Choose two)
  <p>A. Defines the network functions that occur at each layer<br />
    B. Facilitates an understanding of how information travels throughout a network<br />
    C. Changes in one layer do not impact other layer<br />
    D. Ensures reliable data delivery through its layered approach</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A B
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  What is the default behavior of a Layer 2 switch when a frame with an unknown destination MAC address is received?
  <p>A. The Layer 2 switch drops the received frame<br />
    B. The Layer 2 switch floods packets to all ports except the receiving port in the given VLAN<br />
    C. The Layer 2 switch sends a copy of a packet to CPU for destination MAC address learning<br />
    D. The Layer 2 switch forwards the packet and adds the destination MAC address to Its MAC address table</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If the destination MAC address is not in the CAM table (unknown destination MAC address), the switch sends the frame out all other ports that are in the same VLAN as the received frame. This is called flooding. It does not flood the frame out the same port on which the frame was received.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  What is the destination MAC address of a broadcast frame?
  <p>A. 00:00:0c:07:ac:01<br />
    B. ff:ff:ff:ff:ff:ff<br />
    C. 43:2e:08:00:00:0c<br />
    D. 00:00:0c:43:2e:08<br />
    E. 00:00:0crfHfrff</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which action is taken by a switch port enabled for PoE power classification override?
  <p>A. When a powered device begins drawing power from a PoE switch port a syslog message is generated<br />
    B. As power usage on a PoE switch port is checked data flow to the connected device is temporarily paused<br />
    C. If a switch determines that a device is using less than the minimum configured power it assumes the device has failed and disconnects <br />
    D. If a monitored port exceeds the maximum administrative value for power, the port is shutdown and err-disabled</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>PoE monitoring and policing compares the power consumption on ports with the administrative maximum value (either a configured maximum value or the port’s default value). If the power consumption on a monitored port exceeds the administrative maximum value, the following actions occur:</p>
  <p>+ A syslog message is issued.<br />
    + The monitored port is shut down and error-disabled.<br />
    + The allocated power is freed.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2SX/configuration/guide/book/power_over_ethernet.pdf" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst6500/ios/12-2SX/configuration/guide/book/power_over_ethernet.pdf</a></p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  In which way does a spine and-leaf architecture allow for scalability in a network when additional access ports are required?
  <p>A. A spine switch and a leaf switch can be added with redundant connections between them<br />
    B. A spine switch can be added with at least 40 GB uplinks<br />
    C. A leaf switch can be added with a single connection to a core spine switch<br />
    D. A leaf switch can be added with connections to every spine switch</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Spine-leaf architecture is typically deployed as two layers: spines (such as an aggregation layer), and leaves (such as an access layer). Spine-leaf topologies provide high-bandwidth, low-latency, nonblocking server-to-server connectivity.</p>
  <p>Leaf (access) switches are what provide devices access to the fabric (the network of spine and leaf switches) and are typically deployed at the top of the rack. Generally, devices connect to the leaf switches. Devices can include servers, Layer 4-7 services (firewalls and load balancers), and WAN or Internet routers. Leaf switches do not connect to other leaf switches. In spine-and-leaf architecture, every leaf should connect to every spine in a full mesh.</p>
  <p>Spine (aggregation) switches are used to connect to all leaf switches and are typically deployed at the end or middle of the row. Spine switches do not connect to other spine switches.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/guide-c07-733228.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/products/collateral/switches/nexus-9000-series-switches/guide-c07-733228.html</a></p>
  <p>&nbsp;</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="./CCNA Training » Basic Questions_files/Spine_Leaf.jpg" alt="Spine_Leaf.jpg" width={556} height={315} /></p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  A frame that enters a switch fails the Frame Check Sequence. Which two interface counters are incremented? (Choose two)
  <p>A. runts<br />
    B. giants<br />
    C. frame<br />
    D. CRC<br />
    E. input errors</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Whenever the physical transmission has problems, the receiving device might receive a frame whose bits have changed values. These frames do not pass the error detection logic as implemented in the FCS field in the Ethernet trailer. The receiving device discards the frame and counts it as some kind of input error. Cisco switches list this error as a CRC error. Cyclic redundancy check (CRC) is a term related to how the FCS math detects an error.</p>
  <p>The “input errors” includes runts, giants, no buffer, CRC, frame, overrun, and ignored counts.</p>
  <p>The output below show the interface counters with the “show interface s0/0/0” command:</p>
  <pre>Router#show interface s0/0/0{"\n"}Serial0/0/0 is up, line protocol is up {"\n"}{"  "}Hardware is M4T{"\n"}{"  "}Description: Link to R2{"\n"}{"  "}Internet address is 10.1.1.1/30{"\n"}{"  "}MTU 1500 bytes, BW 1544 Kbit, DLY 20000 usec, {"\n"}{"     "}reliability 255/255, txload 1/255, rxload 1/255{"\n"}{"  "}--output omitted--{"\n"}{"  "}5 minute output rate 0 bits/sec, 0 packets/sec{"\n"}{"     "}268 packets input, 24889 bytes, 0 no buffer{"\n"}{"     "}Received 0 broadcasts, 0 runts, 0 giants, 0 throttles{"\n"}{"     "}<strong>0 input errors, 0 CRC, 0 frame, 0 overrun, 0 ignored, 0 abort</strong>{"\n"}{"     "}251 packets output, 23498 bytes, 0 underruns{"\n"}{"     "}0 output errors, 0 collisions, 0 interface resets{"\n"}{"     "}0 output buffer failures, 0 output buffers swapped out{"\n"}{"     "}0 carrier transitions{"     "}DCD=up{"  "}DSR=up{"  "}DTR=up{"  "}RTS=up{"  "}CTS=up</pre>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  What are two reasons that cause late collisions to increment on an Ethernet interface? (Choose two)
  <p>A. when the sending device waits 15 seconds before sending the frame again<br />
    B. when the cable length limits are exceeded<br />
    C. when one side of the connection is configured for half-duplex<br />
    D. when Carrier Sense Multiple Access/Collision Detection is used<br />
    E. when a collision occurs after the 32nd byte of a frame has been transmitted</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A late collision is defined as any collision that occurs after the first 512 bits (or 64th byte) of the frame have been transmitted. The usual possible causes are full-duplex/half-duplex mismatch, exceeded Ethernet cable length limits, or defective hardware such as incorrect cabling, non-compliant number of hubs in the network, or a bad NIC.</p>
  <p>Late collisions should never occur in a properly designed Ethernet network. They usually occur when Ethernet cables are too long or when there are too many repeaters in the network.</p>
  <p>Reference: <a href="https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  What is the function of a server?
  <p>A. It transmits packets between hosts in the same broadcast domain<br />
    B. It provides shared applications to end users<br />
    C. It routes traffic between Layer 3 devices<br />
    D. It creates security zones between trusted and untrusted networks</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  What is a function of TFTP in network operations?
  <p>A. transfers a configuration files from a server to a router on a congested link<br />
    B. transfers IOS images from a server to a router for firmware upgrades<br />
    C. transfers a backup configuration file from a server to a switch using a username and password<br />
    D. transfers files between file systems on a router</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  What are two functions of a server on a network? (Choose two)
  <p>A. runs applications that send and retrieve data for workstations that make requests<br />
    B. achieves redundancy by exclusively using virtual server clustering<br />
    C. housed solely in a data center that is dedicated to a single client<br />
    D. runs the same operating system in order to communicate with other servers<br />
    E. handles requests from multiple workstations at the same time</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A E
  </p><p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  What is the primary function of a Layer 3 device?
  <p>A. to analyze traffic and drop unauthorized traffic from the Internet<br />
    B. to transmit wireless traffic between hosts<br />
    C. forward traffic within the same broadcast domain<br />
    D. to pass traffic between different networks</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaquestionsnumber">Question 12</span></p>
  What is the same for both copper and fiber interfaces when using SFP modules?
  <p>A. They support an inline optical attenuator to enhance signal strength<br />
    B. They accommodate single-mode and multi-mode in a single module<br />
    C. They offer reliable bandwidth up to 100 Mbps in half duplex mode<br />
    D. They provide minimal interruption to services by being hot-swappable</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p>
</div>



      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default BasicQuestion;
