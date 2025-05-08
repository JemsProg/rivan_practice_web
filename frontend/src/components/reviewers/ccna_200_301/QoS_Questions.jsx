import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const QoSQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">QoS Questions </h1>

<div>
  <table style={{borderCollapse: 'collapse'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: '100%'}}>
          <p><span className="blueandbold"><strong>QoS quick summary</strong></span></p>
          <p>Quality of Service (QoS) allows you to define what is the treatment a specific packet will have during congestion. You can define which packets to drop, which should be stored and sent later, and which must be sent immediately.</p>
          <p><span className="blueandbold"><strong>1. Network factors:</strong></span><br />
            + <strong>Bandwidth</strong>: the speed of the link (or the capacity available on the link), usually measured in bits per second (bps)<br />
            + <strong>Delay</strong> (or <strong>latency</strong>): how long a packet takes to get from the sender to the receiver. The more the delay, the slower the network. Delay is usually measured in milliseconds (ms)<br />
            + <strong>Jitter</strong>: A measure of the variation in delay between packets. For example, one packet need 50ms to reach B from A while another packet takes 40ms then the jitter is 10ms<br />
            + <strong>Loss</strong>: When packets travels to the destination, some of them may get lost.</p>
          <p><span className="blueandbold"><strong>2. QoS Markings:</strong></span><br />
            + <strong>IP Precedence</strong>: The first three bits of the IP ToS field (8 traffic classes)<br />
            + <strong>Differentiated Service Code Point</strong> (DSCP): The first six bits of the IP ToS are used to provide granular classification</p>
          <p><span className="blueandbold"><strong>3. QoS Models:</strong></span> <br />
            + <strong>Best Effort</strong>: No QoS policies applied<br />
            + <strong>Differentiated Services</strong> (DiffServ): Packets are classified and marked individually; policy decisions are made independently by each node in a path.<br />
            + <strong>Integrated Services</strong> (IntServ): Resource Reservation Protocol (RSVP) is used to reserve bandwidth</p>
          <p><span className="blueandbold"><strong>4. QoS terms:</strong></span><br />
            + <strong>Classification</strong>: This involves categorizing network traffic into different groups based on specific criteria like IP address, protocol, port, or application type.<br />
            + <strong>Marking</strong>: allows you to mark (set or change) a value (attribute) for the traffic belonging to a specific class<br />
            + <strong>Queuing</strong>: entails holding packets in a queue and scheduling their transmission based on priority.<br />
            + <strong>Policing</strong>: is used to control the rate of traffic flowing across an interface. During a bandwidth exceed (crossed the maximum configured rate), the excess traffic is generally dropped or remarked. The result of traffic policing is an output rate that appears as a saw-tooth with crests and troughs. Traffic policing can be applied to inbound and outbound interfaces. Unlike traffic shaping, QoS policing avoids delays due to queuing. Policing is configured in bytes.<br />
            + <strong>Congestion</strong>: occurs when network bandwidth is insufficient to accommodate all traffic.<br />
            + <strong>Shaping</strong>: retains excess packets in a queue and then schedules the excess for later transmission over increments of time. When traffic reaches the maximum configured rate, additional packets are queued instead of being dropped to proceed later. Traffic shaping is applicable only on outbound interfaces as buffering and queuing happens only on outbound interfaces. Shaping is configured in bits per second.</p>
          <p>The primary reasons you would use traffic shaping are to control access to available bandwidth, to ensure that traffic conforms to the policies established for it, and to regulate the flow of traffic in order to avoid congestion that can occur when the sent traffic exceeds the access speed of its remote, target interface.</p>
          <p><img fetchpriority="high" decoding="async" className="aligncenter" title src="https://www.9tut.com/images/ccna/Traffic_Policing_Shaping/traffic_policing_vs_shaping.jpg" alt="traffic_policing_vs_shaping.jpg" width={500} height={296} /></p>
          <p>+ <strong>Tail drop:</strong> When the queue is full, the packet is dropped. This is the default behavior.</p>
          <p><span className="blueandbold">5. Congestion Management (types of queuing): </span>uses the marking on each packet to determine which queue to place packets in<span className="blueandbold"><br />
            </span></p>
          <p><strong>First-in, first-out</strong> (FIFO): FIFO entails no concept of priority or classes of traffic. With FIFO, transmission of packets out the interface occurs in the order the packets arrive, which means no QoS.</p>
          <p><strong>Custom Queuing</strong> (CQ): provide specific traffic guaranteed bandwidth at a potential congestion point, assuring the traffic a fixed portion of available bandwidth and leaving the remaining bandwidth to other traffic.</p>
          <p><strong>Weighted fair queueing</strong> (WFQ): allocates bandwidths to flows based on the weight. In addition, to allocate bandwidths fairly to flows, WFQ schedules packets in bits (not bytes). This prevents long packets from preempting bandwidths of short packets and reduces the delay and jitter when both short and long packets wait to be forwarded.</p>
          <p><strong>Class-based weighted fair queueing</strong> (CBWFQ) extends the standard WFQ functionality to provide support for user-defined traffic classes. For CBWFQ, you define traffic classes based on match criteria including protocols, access control lists (ACLs), and input interfaces. Packets satisfying the match criteria for a class constitute the traffic for that class. A queue is reserved for each class, and traffic belonging to a class is directed to the queue for that class.</p>
          <p>Once a class has been defined according to its match criteria, you can assign it characteristics. To characterize a class, you assign it bandwidth, weight, and maximum packet limit. The bandwidth assigned to a class is the guaranteed bandwidth delivered to the class during congestion.</p>
          <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/QoS/CBWFQ.jpg" alt="CBWFQ.jpg" width={748} height={237} /></p>
          <p><strong>Low latency queueing</strong> (LLQ) or also known as <strong>Priority Queuing</strong> (PQ): brings strict priority queuing (PQ) to CBWFQ. Strict PQ allows delay-sensitive packets such as voice to be sent before packets in other queues. LLQ reduces jitter in voice conversations.</p>
          <p>This type of queuing places traffic into one of four queues. Each queue has a different level of priority, and higher-priority queues must be emptied before packets are emptied from lower-priority queues. This behavior can “starve out” lower- priority traffic.</p>
          <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/QoS/Low_Latency_Queuing.jpg" alt="Low_Latency_Queuing.jpg" width={928} height={297} /></p>
          <p>The <strong>Resource Reservation Protocol</strong> (RSVP) protocol allows applications to reserve bandwidth for their data flows. It is used by a host, on the behalf of an application data flow, to request a specific amount of bandwidth from the network. RSVP is also used by the routers to forward bandwidth reservation requests.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><strong>Premium Member:</strong> You can test your knowledge with these questions first via this <a href="https://www.9tut.com/qos-quiz" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which feature or protocol determines whether the QoS on the network is sufficient to support IP services?
  <p>A. LLDP<br />
    B. CDP<br />
    C. IP SLA<br />
    D. EEM</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>IP SLA allows an IT professional to collect information about network performance in real time. Therefore it helps determine whether the QoS on the network is sufficient for IP services or not.</p>
  <p>Cisco IOS Embedded Event Manager (EEM) is a powerful and flexible subsystem that provides real-time network event detection and onboard automation. It gives you the ability to adapt the behavior of your network devices to align with your business needs.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which two actions are performed by the Weighted Random Early Detection mechanism? (Choose two)
  <p>A. It drops lower-priority packets before it drops higher-priority packets<br />
    B. It can identify different flows with a high level of granularity<br />
    C. It guarantees the delivery of high-priority packets<br />
    D. It can mitigate congestion by preventing the queue from filling up<br />
    E. It supports protocol discovery</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Weighted Random Early Detection (WRED) is just a congestion avoidance mechanism. WRED drops packets selectively based on IP precedence. Edge routers assign IP precedences to packets as they enter the network. When a packet arrives, the following events occur:</p>
  <p>1. The average queue size is calculated.<br />
    2. If the average is less than the minimum queue threshold, the arriving packet is queued.<br />
    3. If the average is between the minimum queue threshold for that type of traffic and the maximum threshold for the interface, the packet is either dropped or queued, depending on the packet drop probability for that type of traffic.<br />
    4. If the average queue size is greater than the maximum threshold, the packet is dropped.</p>
  <p>WRED reduces the chances of tail drop (when the queue is full, the packet is dropped) by selectively dropping packets when the output interface begins to show signs of congestion (thus it can mitigate congestion by preventing the queue from filling up). By dropping some packets early rather than waiting until the queue is full, WRED avoids dropping large numbers of packets at once and minimizes the chances of global synchronization. Thus, WRED allows the transmission line to be used fully at all times.</p>
  <p>WRED generally drops packets selectively based on IP precedence. Packets with a higher IP precedence are less likely to be dropped than packets with a lower precedence. Thus, the higher the priority of a packet, the higher the probability that the packet will be delivered (-&gt; answer A is correct).</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_conavd/configuration/15-mt/qos-conavd-15-mt-book/qos-conavd-cfg-wred.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_conavd/configuration/15-mt/qos-conavd-15-mt-book/qos-conavd-cfg-wred.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which two QoS tools can provide congestion management? (Choose two)
  <p>A. CBWFQ <br />
    B. FRTS <br />
    C. CAR <br />
    D. PQ <br />
    E. PBR</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>This module discusses the types of queueing and queueing-related features (such as bandwidth management) which constitute the congestion management QoS features:</p>
  <p><strong>Class-based WFQ</strong> (CBWFQ): extends the standard WFQ functionality to provide support for user-defined traffic classes. For CBWFQ, you define traffic classes based on match criteria including protocols, access control lists (ACLs), and input interfaces. Packets satisfying the match criteria for a class constitute the traffic for that class.</p>
  <p><strong>Priority queueing</strong> (PQ): With PQ, packets belonging to one priority class of traffic are sent before all lower priority traffic to ensure timely delivery of those packets.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_conmgt/configuration/xe-3s/qos-conmgt-xe-3s-book/qos-conmgt-oview.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/qos_conmgt/configuration/xe-3s/qos-conmgt-xe-3s-book/qos-conmgt-oview.html</a></p>
  <p>Note: Committed Access Rate (CAR) is only used for bandwidth limitation by dropping excessive traffic.</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which option is the main function of congestion management?
  <p>A. discarding excess traffic<br />
    B. queuing traffic based on priority<br />
    C. classifying traffic<br />
    D. providing long-term storage of buffered data</p>
  <p>&nbsp;</p>
  <p><b><span className="ccnacorrectanswers">Answer:</span> </b>B
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  What does traffic shaping do to reduce congestion in a network?
  <p>A. buffers and queues packets<br />
    B. buffers without queuing packets<br />
    C. queues without buffering packets<br />
    D. drops packets</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The following diagram illustrates the key difference between traffic policing and traffic shaping. Traffic policing propagates bursts. When the traffic rate reaches the configured maximum rate (or committed information rate), excess traffic is dropped (or remarked). The result is an output rate that appears as a saw-tooth with crests and troughs. In contrast to policing, <strong>traffic shaping retains excess packets in a queue and then schedules the excess for later transmission</strong> over increments of time. The result of traffic shaping is a smoothed packet output rate.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" title src="https://www.9tut.com/images/ccna/Traffic_Policing_Shaping/traffic_policing_vs_shaping.jpg" alt="traffic_policing_vs_shaping.jpg" width={500} height={296} /></p>
  <p>Note: Committed information rate (CIR): The minimum guaranteed data transfer rate agreed to by the routing device.</p>
  <p className="ccnaquestionsnumber">Question 6</p>
  Which feature can you implement to reserve bandwidth for VoIP calls across the call path?
  <p>A. round robin<br />
    B. CBWFQ<br />
    C. PQ<br />
    D. RSVP</p>
  <p>&nbsp;</p>
  <p><span className="blueandbold">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Resource Reservation Protocol (RSVP) protocol allows applications to reserve bandwidth for their data flows. It is used by a host, on the behalf of an application data flow, to request a specific amount of bandwidth from the network. RSVP is also used by the routers to forward bandwidth reservation requests.</p>
  <p><span className="ccnaquestionsnumber">Question 7</span></p>
  What is the purpose of traffic shaping?
  <p>A. be a marking mechanism that identifies different flows<br />
    B. to limit the bandwidth that a flow can use<br />
    C. to provide fair queuing for buffered flows<br />
    D. to mitigate delays over slow links</p>
  <p>&nbsp;</p>
  <p><b><span className="ccnacorrectanswers">Answer:</span></b> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>The primary reasons you would use traffic shaping are to control access to available bandwidth</strong>, to ensure that traffic conforms to the policies established for it, and to regulate the flow of traffic in order to avoid congestion that can occur when the sent traffic exceeds the access speed of its remote, target interface.</p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default QoSQuestion;
