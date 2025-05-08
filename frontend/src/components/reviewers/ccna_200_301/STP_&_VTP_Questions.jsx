import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const StpVtpQuestions = () => {
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

<h1>STP &#038; VTP Questions</h1>
<div>
  <p>
  </p><p>Note: If you are not sure about STP or VTP, please read our <a href="https://www.9tut.com/spanning-tree-protocol-stp-tutorial" target="_blank" rel="noopener noreferrer">Spanning Tree Protocol STP Tutorial</a>, <a href="https://www.9tut.com/rapid-spanning-tree-protocol-rstp-tutorial" target="_blank" rel="noopener noreferrer">Rapid Spanning Tree Protocol RSTP Tutorial</a>, <a href="https://www.9tut.com/stp-root-port-election-tutorial" target="_blank" rel="noopener noreferrer">STP Root Port Election Tutorial</a> and <a href="https://www.9tut.com/vlan-trunk-protocol-vtp-tutorial" target="_blank" rel="noopener noreferrer">VLAN Trunking Protocol VTP Tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The purpose of Port Fast is to minimize the time interfaces must wait for spanning-tree to converge, it is effective only when used on interfaces connected to end stations.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_55_se/configuration/guide/3560_scg/swstpopt.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_55_se/configuration/guide/3560_scg/swstpopt.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Enabling the PortFast feature causes a switch or a trunk port to enter the STP forwarding-state immediately or upon a linkup event, thus bypassing the listening and learning states.</p>
  <p>Note: To enable portfast on a trunk port you need the trunk keyword “spanning-tree portfast <strong>trunk</strong>“</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The VTP mode of SW2 is transparent so it only forwards the VTP updates it receives to its trunk links without processing them.</p>
  <p className="ccnaquestionsnumber">Question 5</p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>This bridge is not the root bridge because it does not have the statement “This bridge is the root”. When the local switch is not the root bridge, the port it shows would be the root port to the root bridge. Therefore in this case FastEthernet2/1 is the root port that is connected to the root bridge.</p>
  <p><span className="ccnaquestionsnumber">Question 6</span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>As this question did not state about bridge priority so we can assume all of them are using the default priority. Therefore the switch with lowest MAC address wins the election.</p>
  <p><span className="ccnaquestionsnumber">Question 7</span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The keyword here is “always” so we should set the priority to the lowest value which is 0. If we use the “primary root” keyword then our switch is only set to the lower value compared to other switches. And new switch added in the future can be set to lower value than our switch to take over the root role.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 12</span></p>
  <p>Refer to the exhibit.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/STP/root_bridge_election.jpg" alt="root_bridge_election.jpg" width={452} height={313} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>Switch1: 0C.E0.38.57.24.22<br />
          Switch2: 0C.0E.15.22.1A.61<br />
          Switch3: 0C.0E.15.1D.3C.9A<br />
          Switch4: 0C.E0.19.A1.4D.16</td>
      </tr>
    </tbody>
  </table>
  <p>After the election process what is the root bridge in the HQ LAN?</p>
  <p>A. Switch 1<br />
    B. Switch 2<br />
    C. Switch 3<br />
    D. Switch 4</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C</p>
  <p><span className="ccnaquestionsnumber">Question 13<br />
    </span></p>
  <p />
</div>



	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default StpVtpQuestions;
