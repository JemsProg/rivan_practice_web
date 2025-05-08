import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const PortSecurityQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Port Security Questions </h1>

  <div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  A network administrator enabled port security on a switch interface connected to a printer. What is the next configuration action in order to allow the port to learn the MAC address of the printer and insert it into the table automatically?
  <p>A. implement auto MAC address learning<br />
    B. implement static MAC addressing.<br />
    C. enable sticky MAC addressing<br />
    D. enable dynamic MAC address learning</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Refer to the exhibit. Which port security violation mode is configured on interface Fa0/1?
  <table border={1}>
    <tbody>
      <tr>
        <td>%PM-4-ERR_DISABLE: psecure-violation error detected on Fa0/1, putting Fa0/1 in err-disable state<br />
          %PORT_SECURITY-2-PSECURE_VIOLATION: Security violation occurred, caused by MAC address 00AA.1AB9.D22F on port FastEthernet0/1 <br />
          %LINKPROTO-5-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to down <br />
          %LINK-3-UPDOWN: Interface FastEthernet0/1, changed state to down</td>
      </tr>
    </tbody>
  </table>
  <p>A. protect<br />
    B. shutdown VLAN<br />
    C. shutdown<br />
    D. restrict</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>After the port security violation occurs, the Fa0/1 interface was shutdown so the port security is using “shutdown” mode.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  A port security violation has occurred on a switch port due to the maximum MAC address count being exceeded. Which command must be configured to increment the security-violation count and forward an SNMP trap?
  <p>A. switchport port-security violation access<br />
    B. switchport port-security violation restrict<br />
    C. switchport port-security violation protect<br />
    D. switchport port-security violation shutdown</p>
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

export default PortSecurityQuestion;
