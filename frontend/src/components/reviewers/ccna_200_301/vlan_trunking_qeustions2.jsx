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

  <h1>VLAN &#038; Trunking Questions 2</h1>
 <div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Layer 2 switches do not change MAC address so PC_A will put PC_B MAC address into its destination address before sending it to the switch. PC_B will receive the frames with the source and destination MAC address intact.</p>
  <p>Note: Only with routers, including layer-3 switches where the packets need to cross to other VLANs, will the frames be stripped and rewritten for the new network or VLAN.</p>
  <p><span className="ccnaquestionsnumber">Question 2</span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In fact we only need to add (allow) VLAN 13 to the trunk link of Switch A. Switch B allows all VLANs by default so we don’t need to do any further configuration.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If the neighboring switch is set to trunk then we need to set our switch to desirable mode so that it can start the negotiation. In fact answer C is also correct according to the table below:</p>
  <p>&nbsp;</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.digitaltut.com/images/ENCOR/Trunking/DTP_modes.jpg" alt="DTP_modes.jpg" width={503} height={287} /></p>
  <p>But “desirable” mode is a safer answer so we should choose it.</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  <p>An engineer requires a switch interface to actively attempt to establish a trunk link with a neighbor switch. What command must be configured?</p>
  <p>A. switchport mode trunk<br />
    B. switchport mode dynamic desirable<br />
    C. switchport mode dynamic auto<br />
    D. switchport nonegotiate</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B</p>
  <p><span className="ccnaquestionsnumber">Question 5</span></p>
  <p>An engineer must configure interswitch VLAN communication between a Cisco switch and a third-party switch. Which action should be taken?</p>
  <p>A. configure IEEE 802.1p<br />
    B. configure IEEE 802.1q<br />
    C. configure ISL<br />
    D. configure DSCP</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B</p>
  <p><span className="ccnaexplanation">Explanation</span></p>
  <p>IEEE 802.1Q is the networking standard that supports virtual LANs (VLANs) on an Ethernet network. When a frame enters the VLAN-aware portion of the network (a trunk link, for example), a VLAN ID tag is added to represent the VLAN membership of that frame. The picture below shows how VLAN tag is added and removed while going through the network.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/VLAN/VLAN_tag_added_removed.jpg" alt="VLAN_tag_added_removed.jpg" width={550} height={260} /></p>
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
