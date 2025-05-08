import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const switchquestions = () => {
 const sectionRef = useRef(null);

  useEffect(() => {
	window.scrollTo(0, 0);
	if (!sectionRef.current) return;

	const els = sectionRef.current.querySelectorAll('[data-animate]');
	els.forEach((el, i) =>
	  inView(el, () =>
		animate(
		  el,
		  { opacity: 1, y: 0 },
		  { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
		)
	  )
	);
  }, []);
  
  return (
<div>
<div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

  <h1>Switch Questions</h1>
<div>
  <p><span className="blueandbold">Quick review of switch function:</span></p>
  <p>In brief, the basic switching function at Layer 2 adheres to these rules for determining forwarding responsibility:<br />
    + If the destination MAC address is found in the CAM table, the switch sends the frame out the port that is associated with that destination MAC address in the CAM table. This process is called <em>forwarding</em>.<br />
    + If the associated port to send the frame out is the same port that the frame originally came in on, there is no need to send the frame back out that same port, and the frame is ignored. This process is called <em>filtering</em>.<br />
    + If the destination MAC address is not in the CAM table (that is, unknown unicast), the switch sends the frame out all other ports that are in the same VLAN as the received frame. This is called <em>flooding</em>. It does not flood the frame out the same port on which the frame was received.<br />
    + If the destination MAC address of the received frame is the broadcast address (FFFF.FFFF.FFFF), the frame is sent out all ports that are in the same VLAN as the received frame. This is also called <em>flooding</em>. The only exception is the frame is not sent out the same port on which the frame was received.</p>
  <p>Reference: <a href="http://www.ciscopress.com/articles/article.asp?p=2348264" target="_blank" rel="noopener noreferrer">http://www.ciscopress.com/articles/article.asp?p=2348264</a></p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The down/down state indicates a Layer 1 problem -&gt; “Protocol mismatch” answer is a Layer 2 problem so it is not correct.</p>
  <p>Duplex should be matched on both side but it is not a must -&gt; Therefore “duplex mismatch” is not a correct answer.</p>
  <p>The most common Layer 1 problems are faulty or incorrect cabling or hardware failure but none of them is in the answer choices.</p>
  <p>If the port is error-disabled, we will see it in down/down state so this answer is correct.</p>
  <table border={1}>
    <tbody>
      <tr>
        <td>SW#sh int f1/0/1<br />
          FastEthernet1/0/1 is down, line protocol is down (err-disabled)</td>
      </tr>
    </tbody>
  </table>
  <p>There are only two answers left, which are “speed mismatch” and “interface is shut down”. According to the table below (from the old and retired ICND1 100-101 Official Cert Guide), speed mismatch is also a cause of down/down state.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/Switch/interface_status.jpg" alt="interface_status.jpg" width={661} height={378} /></p>
  <p>Note: <br />
    + Speed must match between two ends. We tested speed mismatch on real device but we only received “up/down” state.<br />
    + If “interface is shut down” then we will see the “administratively down/down”, not “down/down” state. But the “down/down” state would be seen on the far end interface.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The MAC addresses in the CAM table are the source MAC addresses only. Therefore it only learns MAC address from ingress traffic.</p>
</div>

	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default switchquestions;
