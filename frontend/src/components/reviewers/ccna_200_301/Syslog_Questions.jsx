import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const SyslogQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Syslog Questions</h1>
<div>
  <p>
  </p><p>Note: If you are not sure about Syslog, please read our <a href="https://www.9tut.com/syslog-tutorial" target="_blank" rel="noopener noreferrer">Syslog tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  What will happen if you configure the logging trap debug command on a router?
  <p>A. It causes the router to send messages with lower severity levels to the syslog server<br />
    B. It causes the router to send all messages with the severity levels Warning, Error, Critical, and Emergency to the syslog server<br />
    C. It causes the router to send all messages to the syslog server<br />
    D. It causes the router to stop sending all messages to the syslog server</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  If a notice-level messaging is sent to a syslog server, which event has occurred?
  <p>A. A network device has restarted<br />
    B. An ARP Inspection has failed<br />
    C. A routing instance has flapped<br />
    D. A debug operation is running</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Usually no action is required when a route flaps so it generates the notification syslog level message (level 5).</p>
  <p className="ccnaquestionsnumber">Question 3</p>
  What event has occurred if a router sends a notice level message to a syslog server?
  <p>A. A TCP connection has been torn down<br />
    B. An ICMP connection has been built<br />
    C. An interface line has changed status<br />
    D. A certificate has expired</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If you used to configure a Cisco device then maybe you saw this notice level message:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td>%LINEPROTO-<strong>5</strong>-UPDOWN: Line protocol on Interface FastEthernet0/1, changed state to down</td>
      </tr>
    </tbody>
  </table>
  <p>Number 5 in the above message represents for the Notification Level (Normal, but significant, conditions exist).</p>
</div>

      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default SyslogQuestion;
