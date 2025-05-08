import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DaiQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">DAI Questions </h1>
 
<div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Refer to the exhibit. What is the effect of this configuration?
  <pre>ip arp inspection vlan 2{"\n"}interface fastethernet 0/1{"\n"} switchport mode access{"\n"} switchport access vlan 2</pre>
  <p>A. All ARP packets are dropped by the switch<br />
    B. Egress traffic is passed only if the destination is a DHCP server.<br />
    C. All ingress and egress traffic is dropped because the interface is untrusted<br />
    D. The switch discard all ingress ARP traffic with invalid MAC-to-IP address bindings</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Dynamic ARP inspection is an ingress security feature; it does not perform any egress checking.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Refer to the exhibit. What is the effect of this configuration?
  <pre>ip arp inspection vlan 2{"\n"}interface fastethernet 0/1{"\n"} switchport mode access{"\n"} switchport access vlan 2</pre>
  <p>A. The switch port interface trust state becomes untrusted<br />
    B. The switch port remains administratively down until the interface is connected to another switch<br />
    C. Dynamic ARP inspection is disabled because the ARP ACL is missing<br />
    D. The switch port remains down until it is configured to trust or untrust incoming packets</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Dynamic ARP inspection (DAI) is a security feature that validates ARP packets in a network. It intercepts, logs, and discards ARP packets with invalid IP-to-MAC address bindings. This capability protects the network from certain man-in-the-middle attacks. After enabling DAI, all ports become untrusted ports.</p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default DaiQuestion;
