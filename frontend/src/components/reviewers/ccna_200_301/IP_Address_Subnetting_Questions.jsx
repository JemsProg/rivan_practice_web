import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const IpAddressSubnettingQuestions = () => {
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

<h1>IP Address &#038; Subnetting Questions</h1>
<div>
  <p>
  </p><p>Note: If you are not sure about Subnetting, please read our <a href="https://www.9tut.com/subnetting-tutorial" target="_blank" rel="noopener noreferrer">Subnetting Tutorial – Subnetting Made Easy</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A /30 subnet means subnet mask of 255.255.255.252. But 10.2.1.3 255.255.255.252 is a broadcast IP address; only 209.165.201.2/30 is the usable IP address.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>This question asks about the private ranges of IPv4 addresses. The private ranges of each class of IPv4 are listed below:</p>
  <p>Class A private IP address ranges from 10.0.0.0 to 10.255.255.255<br />
    Class B private IP address ranges from 172.16.0.0 to 172.31.255.255<br />
    Class C private IP address ranges from 192.168.0.0 to 192.168.255.255</p>
  <p>Only the network 172.28.0.0/16 belongs to the private IP address (of class B).</p>
  <p className="ccnaquestionsnumber">Question 4</p>
  <p /><p className="ccnaquestionsnumber">Question 5</p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>We need a subnet with 20 users so we need 5 bits 0 in the subnet mask as 2<sup>5</sup> – 2 = 30 &gt; 20. Therefore the subnet mask should be /27 (with last octet is 1110 0000 in binary). The increment is 32 so the valid network address is 10.10.225.32.</p>
  <p className="ccnaquestionsnumber">Question 6</p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>We see the maximum number of user per floor is 29 users (Floor 2) &lt; 32 so the best subnet mask should be 111<strong>0 0000</strong> which allows 2<sup>5</sup> – 2 = 30 hosts per subnet.</p>
  <p className="ccnaquestionsnumber">Question 7</p>
  <p /><p className="ccnaexplanation">Explanation</p>
  <p>Each interface on a router must be in a different network. If two interfaces are in the same network, the router will not accept it and show error when the administrator assigns it.</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>We cannot use the subnet mask of 255.255.254.0 (/23) because it is smaller than the default subnet mask of class C (/24). If we use /23 subnet mask, in fact we are summarizing (supernet) it -&gt; Answer B is not correct.</p>
  <p>With the subnet mask of 255.255.255.128, we have 2<sup>1</sup> = 2 subnets only, not enough for 8 floors -&gt; Answer D is not correct.</p>
  <p>We need 40 users per subnet so our subnet must support at least 64 (=2<sup>6</sup>) hosts (in fact 62 hosts). So the last octet of subnet mask should be 1100 0000 (with 6 bits “0”) = 192 -&gt; The suitable subnet mask is 255.255.255.192. But this subnet mask only provides 2<sup>2</sup> = 4 subnets, which is not enough for 8 floors.</p>
  <p>For 8 floors we need 1110 0000 (2<sup>3</sup> = 8) for the last octet of subnet mask so the subnet mask should be 255.255.255.224.</p>
  <p>But with the subnet mask of 255.255.255.224, the host addresses per subnet is 2<sup>5</sup> – 2 = 30 so we cannot fulfill the host addresses for 40 users. We can only provide IPs for 30 users. This question said “approximately 30-40 users per floor” so “30 users per floor” is acceptable.</p>
  <p>With “192.168.0.0 255.255.255.224” we have 8 subnets:<br />
    + First subnet: 192.168.0.0 to 192.168.0.31<br />
    + Second subnet: 192.168.0.32 to 192.168.0.63<br />
    + Third subnet: 192.168.0.64 to 192.168.0.95<br />
    + Fourth subnet: 192.168.0.96 to 192.168.0.127<br />
    + Fifth subnet: 192.168.0.128 to 192.168.0.159<br />
    + Sixth subnet: 192.168.0.160 to 192.168.0.191<br />
    + Seventh subnet: 192.168.0.192 to 192.168.0.223<br />
    + Eighth subnet: 192.168.0.224 to 192.168.0.255</p>
</div>


	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default IpAddressSubnettingQuestions;
