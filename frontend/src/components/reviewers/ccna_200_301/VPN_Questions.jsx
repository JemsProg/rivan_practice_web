import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VPNQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">VPN Questions</h1>

<div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which type of VPN uses a hub-and-spoke configuration to establish a full mesh topology?
  <p>A. GRE over IPsec<br />
    B. dynamic multipoint VPN<br />
    C. MPLS VPN<br />
    D. IPsec virtual tunnel interface</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Dynamic Multipoint VPN (DMVPN) is a solution of Cisco. DMVPN provides the following advantages:</p>
  <p>+ Provides full meshed connectivity with simple Hub-and-Spoke topology. The spokes can communicate between each other without going through Hub<br />
    + Only one static public IP address is required on Hub. Spokes can use dynamic (unknown) public IP addresses<br />
    + The configuration is simple even in large network. No additional configuration is required on Hub when new Spokes are added.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.digitaltut.com/images/Knowledge/DMVPN/DMVPN_Topo_Spoke-To_Spoke.jpg" alt="DMVPN_Topo_Spoke-To_Spoke.jpg" width={269} height={225} /></p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  What mechanism carries multicast traffic between remote sites and supports encryption?
  <p>A. ISATAP<br />
    B. GRE over IPsec<br />
    C. IPsec over ISATAP<br />
    D. GRE</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  What is a function of a remote access VPN?
  <p>A. used cryptographic tunneling to protect the privacy of data for multiple users simultaneously<br />
    B. allows the users to access company internal network resources through a secure tunnel<br />
    C. used exclusively when a user is connected to a company’s internal network<br />
    D. establishes a secure tunnel between two branch sites</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p>
</div>

      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default VPNQuestion;
