import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const EtherChannelQuestions = () => {
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

<h1>EtherChannel Questions</h1>
<div>
  <p>
  </p><p>If you are not sure about EtherChannel, please read our <a href="https://www.9tut.com/etherchannel-tutorial" target="_blank" rel="noopener noreferrer">EtherChannel tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In fact answer B is also correct as STP considers Etherchannel links as one physical link so this question should have three correct answers. But answer B is not as obvious as the other two answers so we should choose them.</p>
  <p>Answer C is not correct as “Commonly up to 16 links can be assigned to an EtherChannel, but only 8 can be active at a time”.</p>
  <p>Reference: <a href="https://www.ciscopress.com/articles/article.asp?p=2348266&seqNum=3" rel="nofollow ugc">https://www.ciscopress.com/articles/article.asp?p=2348266&amp;seqNum=3</a></p>
  <p>So it should be 8 physical ports, not 16.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Static Persistence (or “on” mode) bundles the links unconditionally and no negotiation protocol is used. In this mode, neither PAgP nor LACP packets are sent or received.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>From the neighbor status, we notice the “Flags” are SP. “P” here means the neighbor is in Passive mode. In order to create an Etherchannel interface, the (local) SW1 ports should be in Active mode. Moreover, the “Port State” in the exhibit is “0x3c” (which equals to “0011<strong>1</strong>100″ in binary format). Bit 3 is “1” which means the ports are synchronizing -&gt; the ports are working so the local ports should be in Active mode.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3650/software/release/3se/consolidated_guide/command_reference/b_consolidated_3650_3se_cr/b_consolidated_3650_3se_cr_chapter_0100.pdf" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3650/software/release/3se/consolidated_guide/command_reference/b_consolidated_3650_3se_cr/b_consolidated_3650_3se_cr_chapter_0100.pdf</a></p>
  <p className="ccnaquestionsnumber">Question 4</p>
  <p /><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In order to configure a Layer 3 EtherChannel, we must use the “no switchport” command and set the IP address on the (logical) port-channel interface. For open-standard EtherChannel protocol we must use LACP with “passive” &amp; “active” mode.</p>
</div>


	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default EtherChannelQuestions;
