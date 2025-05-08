import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const cdplldpquestions2 = () => {
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

  <h1>CDP &#038; LLDP Questions</h1>
 <div>
  <span className="blueandbold">CDP Quick Summary</span>
  <p>Cisco Discovery Protocol (CDP) is a Layer 2 protocol that runs on Cisco devices and enables networking applications to learn about directly connected devices nearby. The information contained in Cisco Discovery Protocol advertisements varies based on the type of device and the installed version of the operating system. Some of the information that Cisco Discovery Protocol can learn includes:<br />
    + Cisco IOS version running on Cisco devices<br />
    + Hardware platform of devices<br />
    + IP addresses of interfaces on devices<br />
    + Locally connected devices advertising Cisco Discovery Protocol<br />
    + Interfaces active on Cisco devices, including encapsulation type<br />
    + Hostname<br />
    + Duplex setting<br />
    + VLAN Trunking Protocol (VTP) domain<br />
    + Native VLAN</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/cdp/configuration/15-mt/cdp-15-mt-book/nm-cdp-discover.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/cdp/configuration/15-mt/cdp-15-mt-book/nm-cdp-discover.html</a></p>
  <p>To enable the CDP, use the <strong>cdp run</strong> command in global configuration mode. To disable CDP, use the <strong>no</strong> form of this command.</p>
  <p>CDP is enabled by default at the global level and on each supported interface to send or receive CDP information. To disable CDP only on one interface, use the “no cdp enable” command under that interface. For example:</p>
  <p>Router(config)#interface e0/0<br />
    Router(config-if)#no cdp enable</p>
  <p><span className="blueandbold">LLDP Quick Summary</span></p>
  <p>Link Layer Discovery Protocol (LLDP) is a industry standard protocol that allows devices to advertise, and discover connected devices, and there capabilities (same as CDP of Cisco). To enable it on Cisco devices, we have to use this command under global configuration mode:</p>
  <p>Sw(config)# lldp run</p>
  <p>Note: LLDP is disabled by default.</p>
  <p>Other LLDP commands:</p>
  <p>+ <strong>lldp holdtime</strong> <em>seconds</em>: Specify the amount of time a receiving device should hold the information from your device before discarding it<br />
    + <strong>lldp reinit</strong> <em>delay</em>: Specify the delay time in seconds for LLDP to initialize on an interface<br />
    + <strong>lldp timer</strong> <em>rate</em>: Set the sending frequency of LLDP updates in seconds<br />
    + <strong>lldp port-description</strong>: specify the port description time length value (TLV) messages.</p>
  <p>To disable LLDP globally, use the command “no lldp run”.</p>
  <p>To disable LLDP on an interface, use these two commands under interface mode:<br />
    + no lldp transmit: disallows sending LLDP packets on the interface.<br />
    + no lldp receive: disallows receiving LLDP packets on the interface.</p>
  <p>To enable receiving and transmitting the LLDP packets on a specific interface, use “lldp transmit” and “lldp receive” commands under that interface.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If a neighbor has no IP address on an interface enabled with Cisco Discovery Protocol, the IP address of another interface will be updated as IP address for the non-IP address interface.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/cdp/configuration/15-mt/cdp-15-mt-book/nm-cdp-discover.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/ios-xml/ios/cdp/configuration/15-mt/cdp-15-mt-book/nm-cdp-discover.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>+ <strong>lldp holdtime</strong> <em>seconds</em>: Specify the amount of time a receiving device should hold the information from your device before discarding it<br />
    + <strong>lldp reinit</strong> <em>delay</em>: Specify the delay time in seconds for LLDP to initialize on an interface<br />
    + <strong>lldp timer</strong> <em>rate</em>: Set the sending frequency of LLDP updates in seconds</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_55_se/configuration/guide/3560_scg/swlldp.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_55_se/configuration/guide/3560_scg/swlldp.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Link Layer Discovery Protocol (LLDP) is a industry standard protocol that allows devices to advertise, and discover connected devices, and there capabilities (same as CDP of Cisco). To enable it on Cisco devices, we have to use this command under global configuration mode:</p>
  <p>Sw(config)# lldp run</p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>+ <strong>lldp holdtime</strong> <em>seconds</em>: Specify the amount of time a receiving device should hold the information from your device before discarding it<br />
    + <strong>lldp reinit</strong> <em>delay</em>: Specify the delay time in seconds for LLDP to initialize on an interface<br />
    + <strong>lldp timer</strong> <em>rate</em>: Set the sending frequency of LLDP updates in seconds</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_55_se/configuration/guide/3560_scg/swlldp.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst3560/software/release/12-2_55_se/configuration/guide/3560_scg/swlldp.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Use the switch(config)#<strong>lldp port-description</strong> option to specify the port description TLV messages.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus6000/sw/layer2/7x/b_6k_Layer2_Config_7x/config_lldp.pdf" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus6000/sw/layer2/7x/b_6k_Layer2_Config_7x/config_lldp.pdf</a></p>
</div>

	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default cdplldpquestions2;
