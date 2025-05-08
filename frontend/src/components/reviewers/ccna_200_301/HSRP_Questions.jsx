import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const HsrpQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">HSRP Questions</h1>
<div>
  <p>
  </p><p>Note: If you are not sure about HSRP, please read our <a href="https://www.9tut.com/hot-standby-router-protocol-hsrp-tutorial" target="_blank" rel="noopener noreferrer">HSRP tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which command must you enter to guarantee that an HSRP router with higher priority becomes the HSRP primary router after it is reloaded?
  <p>A. standby 10 preempt<br />
    B. standby 10 version 1<br />
    C. standby 10 priority 150<br />
    D. standby 10 version 2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The “preempt” command enables the HSRP router with the highest priority to immediately become the active router.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which command should you enter to verify the priority of a router in an HSRP group?
  <p>A. show hsrp<br />
    B. show sessions<br />
    C. show interfaces<br />
    D. show standby</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Below is an example of the “show standby” command:</p>
  <p><img fetchpriority="high" decoding="async" src="https://www.certprepare.com/images/SWITCHv2/HSRP/show_standby.jpg" alt="show_standby.jpg" width={500} height={274} /></p>
  <p>We can see the current HSRP priority of this device, which is 90 and the configured HSRP priority too (which is 90, too).</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which MAC address is recognized as a VRRP virtual address?
  <p>A. 0000.5E00.010a<br />
    B. 0005.3711.0975<br />
    C. 0000.0C07.AC99 <br />
    D. 0007.C070.AB01</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>With VRRP, the virtual router’s MAC address is 0000.5E00.01xx , in which xx is the VRRP group</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which two outcomes are predictable behaviors for HSRP? (Choose two)
  <p>A. The two routers share a virtual IP address that is used as the default gateway for devices on the LAN<br />
    B. The two routers negotiate one router as the active router and the other as the standby router<br />
    C. Each router has a different IP address both routers act as the default gateway on the LAN, and traffic is load balanced between them<br />
    D. The two routers synchronize configurations to provide consistent packet forwarding<br />
    E. The two routed share the same IP address, and default gateway traffic is load-balanced between them</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A B
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  How does HSRP provide first hop redundancy?
  <p>A. It load-balances traffic by assigning the same metric value to more than one route to the same destination in the IP routing table<br />
    B. It load-balances Layer 2 traffic along the path by flooding traffic out all interfaces configured with the same VLAN<br />
    C. It forwards multiple packets to the same destination over different routed links and data path<br />
    D. It uses a shared virtual MAC and a virtual IP address to a group of routers that serve as the default gateway for hosts on a LAN</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaquestionsnumber">Question 6</span></p>
  What is the primary purpose of a First Hop Redundancy Protocol?
  <p>A. It allows directly connected neighbors to share configuration information<br />
    B. It allows a router to use bridge priorities to create multiple loop-free paths to a single destination<br />
    C. It reduces routing failures by allowing Layer 3 load balancing between OSPF neighbors that have the same link metric<br />
    D. It reduces routing failures by allowing more than one router to represent itself, as the default gateway of a network</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  When the active router in an HSRP group fails, what router assumes the role and forwards packets?
  <p>A. listening<br />
    B. backup<br />
    C. forwarding<br />
    D. standby</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Standby router is backup when active router fails by monitoring periodic hellos sent by the active router (multicast to 224.0.0.2, UDP port 1985) to detect a failure of the active router.</p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default HsrpQuestion;
