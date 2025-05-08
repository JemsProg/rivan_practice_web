import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const VlanTrunkingQuesions = () => {
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

<h1>VLAN &#038; Trunking Questions</h1>
<div>
  <p /><p>Note: If you are not sure about Virtual Local Area Network (VLAN), please read our <a href="https://www.9tut.com/virtual-local-area-network-vlan-tutorial" target="_blank" rel="noopener noreferrer">Virtual Local Area Network VLAN Tutorial</a>.</p>
  <table border={1}>
    <tbody>
      <tr>
        <td>
          <p><strong>Quick summary about VLAN:</strong></p>
          <p>Be default all access ports belong to VLAN 1. If we want to assign a new VLAN, we have to use the command “switchport access vlan &lt;vlan-id&gt;” under interface mode.</p>
          <p>VLAN Benefits:</p>
          <p>– Logically group devices by department/function, not location so it provides more efficient use of bandwidth<br />
            – Separate broadcast domains, thus reducing their sizes and help mitigate broadcast storms<br />
            – Provide additional security because it separates sensitive data traffic from other traffic</p>
          <p>The following commands are used to a create a VLAN (for example VLAN 10) and assign it to an interface (for example fa0/1) on a switch:</p>
          <p>Switch(config)#vlan 10 //Create VLAN 10 first<br />
            Switch(config)#interface fa0/1<br />
            Switch(config-if)#switchport access vlan 10 //assign Fa0/1 interface to VLAN 10</p>
          <p>To verify a VLAN or check which ports belong to which VLAN, use the “show vlan” command (or “show vlan id &lt;vlan-id&gt;” for a specific VLAN)</p>
          <p><span className="blueandbold">DTP Trunking modes</span></p>
          <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.digitaltut.com/images/ENCOR/Trunking/DTP_modes.jpg" alt="DTP_modes.jpg" width={503} height={287} /></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>From the output we see the native VLAN of Switch1 on Gi0/1 interface is VLAN 1 while that of Switch2 is VLAN 99 so there would be a native VLAN mismatch.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Maybe this question is missing the “SW2 is set to Dynamic Auto” part so we assume this part to find out the best answer. Dynamic Desirable + Dynamic Desirable/Dynamic Auto/Trunk will form a trunk link.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The trunk still forms with mismatched native VLANs and the traffic can actually flow between mismatched switches. But it is absolutely necessary that the native VLANs on both ends of a trunk link match; otherwise a native VLAN mismatch occurs, causing the two VLANs to effectively merge. For example with the above configuration, SW1 would send untagged frames for VLAN 999. SW2 receives them but would think they are for VLAN 99 so we can say these two VLANs are merged.</p>
  <p className="ccnaquestionsnumber">Question 4</p>
  <p /><p className="ccnaquestionsnumber">Question 5</p>
  <p /><p className="ccnaexplanation">Explanation</p>
  <p>For 802.1q encapsulation, the native VLAN must matched at both side; otherwise the link will not work. In this case the native VLAN of S1 is 1 while the native VLAN of S2 is 2. Therefore when a frame from VLAN 1 is sent from S1 to S2, it will be untagged before leaving S1. When S2 receives this untagged frame, it&nbsp; believes this frame was sent from the native VLAN. But the native VLAN on S2 is VLAN 2, not VLAN 1. Therefore only hosts on VLAN2 of S2 will receive this frame.</p>
  <p className="ccnaquestionsnumber">Question 6</p>
  <p /><p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>From the configuration of SW1, we see it is using Port Aggregation Protocol (PAgP) with “auto” mode so the other end (SW2) must also runs PAgP with “desirable” mode to actively sending request to form an Etherchannel.</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 10<br />
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

export default VlanTrunkingQuesions;
