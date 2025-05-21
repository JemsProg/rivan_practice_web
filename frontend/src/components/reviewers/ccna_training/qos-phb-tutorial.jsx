import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const QosPhbTutorial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) => {
      el.classList.add('opacity-0', 'translate-y-[30px]', 'will-change-transform');
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Forwarding per-hop behavior (PHB) for QoS Tutorial</h1>
      </div>

      {/* Content */}
      <div className="space-y-6 mt-8 text-gray-700">
        <p>Quality of Service (QoS) is a tool that allows our network to prioritize certain types of traffic. QoS defines the actions that <span className="italic">a device can apply to a message between the time it enters the device until it exits the device. </span>These actions are called per-hop behaviors (PHBs). With PHBs, we can discard, delay, or even change the header field of each packet. The goal of a PHB is to provide a specified amount of network resources to a class of traffic on a contiguous network.</p>
        
        <p>PHB uses a set of codepoints to mark packets with different levels of priority. These codepoints are embedded in the Differentiated Services Code Point (DSCP) field of the Type Of Service (ToS) field of the IP header.</p>
        
        <div className="flex justify-center my-6">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/PHB/DSCP.jpg" 
            alt="DSCP field in IP header" 
            width="386" 
            height="221"
          />
        </div>
        
        <p>The key components of PHB are listed below:</p>
        
        <ul className="space-y-4 list-disc pl-5">
          <li>
            <strong>Classification</strong>: When receiving a packet, the first thing a networking device does is to examine the packet&rsquo;s header to determine what kind of data is inside. This is called <strong>classification</strong> and involves categorizing network traffic into different groups based on specific criteria like IP address, protocol, port, or application type. An example of classification is shown below:
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
              class-map match-all CLASSIFICATION_HTTP
               match access-group 100
              !
              access-list 100 permit tcp any any eq 80
            </pre>
            In this example, we have created a class map named &ldquo;CLASSIFICATION_HTTP&rdquo; that matches all traffic matching access-group 100. Access-group 100 permits TCP traffic with destination port 80.
          </li>
          
          <li>
            <strong>Marking</strong>: A packet can be classified when entering or leaving a device but there may be many other devices on its journey to the destination and this repeated process is time-consuming. A more efficient way is to classify the packets once as close to the source as possible and mark them to a QoS standard. This is called <strong>marking</strong>, which is the process of changing the packet&rsquo;s header so that other devices know which level (quality) of service should be applied to the packets by just reading the marking. With IP packets, we can mark with either a precedence or DSCP value.
            <p>An example of marking is shown below:</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
              policy-map MARKING_HTTP
               class CLASSIFICATION_HTTP
                set dscp af21
              !
            </pre>
            <p>In this example, we have created a policy map named &ldquo;MARKING_HTTP&rdquo; that marks all traffic matching the &ldquo;CLASSIFICATION_HTTP&rdquo; class with DSCP value of &ldquo;af21&rdquo;.</p>
            <p>Apply (activate) the policy-map to an interface:</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
              interface FastEthernet0/1
               service-policy output MARKING_HTTP
              !
            </pre>
            <p>In this example, we have applied the &ldquo;MARKING_HTTP&rdquo; policy map to FastEthernet0/1 interface for outbound traffic.</p>
          </li>
          
          <li>
            <strong>Queuing</strong>: the process of holding packets in a queue and scheduling their transmission based on priority. Utilizing algorithms such as Weighted Fair Queuing (WFQ), this process ensures high-priority packets are transmitted before their low-priority counterparts.
            <p>An example of configuring queuing is shown below:</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
              interface FastEthernet0/1
               priority-queue out
            </pre>
          </li>
          
          <li>
            <strong>Congestion</strong>: occurs when network bandwidth is insufficient to accommodate all traffic. PHB includes mechanisms like Random Early Detection (RED) to manage congestion by discarding low-priority packets before higher-priority ones.
          </li>
          
          <li>
            <strong>Policing</strong>: involves monitoring network traffic and enforcing predetermined traffic rate limits. Packets exceeding specified rate limits may be discarded or marked with a lower priority.
          </li>
          
          <li>
            <strong>Shaping</strong>: Shaping is the control of the rate at which packets enter the network, preventing congestion and ensuring timely transmission of all packets. Excess traffic is stored in a buffer and released at a controlled rate, shaping the traffic to conform to the desired profile. Shaping is a more gentle approach that attempts to smooth out bursts of traffic. Traffic shaping is applicable only on outbound interfaces as buffering and queuing happens only on outbound interfaces
            <div className="flex justify-center my-6">
              <img 
                decoding="async" 
                className="rounded-lg shadow-md" 
                src="https://www.9tut.com/images/ccna/Traffic_Policing_Shaping/traffic_policing_vs_shaping.jpg" 
                alt="Comparison of traffic policing vs shaping" 
                width="500" 
                height="296"
              />
            </div>
            <p>The figure above shows the difference between Policing and Shaping. With traffic policing, excess traffic is usually dropped while with traffic shaping, excess traffic is buffered and sent again with a little delay.</p>
          </li>
        </ul>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default QosPhbTutorial;