import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const CloudVirtualizationQuestion = () => {
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

  <h1>Cloud Virtualization Questions</h1>
<div>
  <p><span className="blueandbold">Cloud Summary<br />
    </span></p>
  <p>Three cloud supporting services cloud providers provide to customer:</p>
  <p>+ <strong>SaaS</strong> (Software as a Service): SaaS uses the web to deliver applications that are managed by a third-party vendor and whose interface is accessed on the clients’ side. Most SaaS applications can be run directly from a web browser without any downloads or installations required, although some require plugins.<br />
    + <strong>PaaS</strong> (Platform as a Service): are used for applications, and other development, while providing cloud components to software. What developers gain with PaaS is a framework they can build upon to develop or customize applications. PaaS makes the development, testing, and deployment of applications quick, simple, and cost-effective. With this technology, enterprise operations, or a third-party provider, can manage OSes, virtualization, servers, storage, networking, and the PaaS software itself. Developers, however, manage the applications. <span style={{textDecoration: 'underline'}}>PaaS provides everything except applications</span>.<br />
    + <strong>IaaS</strong> (Infrastructure as a Service): self-service models for accessing, monitoring, and managing remote datacenter infrastructures, such as compute (virtualized or bare metal), storage, networking, and networking services (e.g. firewalls). Instead of having to purchase hardware outright, users can purchase IaaS based on consumption, similar to electricity or other utility billing.</p>
  <p>
    <img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.net/images/ICND2/Cloud_Virtual_Services/Cloud_Computing_SaaS_PaaS_IaaS.jpg" alt="Cloud_Computing_SaaS_PaaS_IaaS.jpg" width={536} height={139} /></p>
  <p><span className="blueandbold">Virtualization Summary</span></p>
  <p>A major advantage of virtualization is overall reduced cost (less equipment is required, less energy is consumed, less space is required).</p>
  <p>There are two types of hypervisors: type 1 and type 2.</p>
  <p>In type 1 hypervisor (or native hypervisor), the hypervisor is installed directly on the physical server (so it is called “bare metal” approach). Then instances of an operating system (OS) are installed on the hypervisor. Type 1 hypervisor has direct access to the hardware resources. Therefore it is more efficient than hosted architectures. Some examples of type 1 hypervisor are VMware vSphere/ESXi, Oracle VM Server, KVM and Microsoft Hyper-V. Type 1 hypervior is usually used on enterprise servers and data center networking devices.</p>
  <p>In contrast to type 1 hypervisor, a type 2 hypervisor (or hosted hypervisor) runs on top of an operating system and not the physical hardware directly. A big advantage of Type 2 hypervisors is that management console software is not required. Examples of type 2 hypervisors are VMware Workstation (which can run on Windows, Mac and Linux) or Microsoft Virtual PC (only runs on Windows).</p>
  <p><img decoding="async" className="aligncenter" src="https://www.digitaltut.com/images/ENCOR/Virtualization/Type1_Type2_Hypervisors.jpg" alt="Type1_Type2_Hypervisors.jpg" width={327} height={196} /></p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Below are the 3 cloud supporting services cloud providers provide to customer:</p>
  <p>+ <strong>SaaS</strong> (Software as a Service): SaaS uses the web to deliver applications that are managed by a third-party vendor and whose interface is accessed on the clients’ side. Most SaaS applications can be run directly from a web browser without any downloads or installations required, although some require plugins.<br />
    + <strong>PaaS</strong> (Platform as a Service): are used for applications, and other development, while providing cloud components to software. What developers gain with PaaS is a framework they can build upon to develop or customize applications. PaaS makes the development, testing, and deployment of applications quick, simple, and cost-effective. With this technology, enterprise operations, or a third-party provider, can manage OSes, virtualization, servers, storage, networking, and the PaaS software itself. Developers, however, manage the applications.<br />
    + <strong>IaaS</strong> (Infrastructure as a Service): self-service models for accessing, monitoring, and managing remote datacenter infrastructures, such as compute (virtualized or bare metal), storage, networking, and networking services (e.g. firewalls). Instead of having to purchase hardware outright, users can purchase IaaS based on consumption, similar to electricity or other utility billing.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.net/images/ICND2/Cloud_Virtual_Services/Cloud_Computing_SaaS_PaaS_IaaS.jpg" alt="Cloud_Computing_SaaS_PaaS_IaaS.jpg" width={536} height={139} />In general, IaaS provides hardware so that an organization can install their own operating system.</p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  <p /><p className="ccnaquestionsnumber">Question 4</p>
  <p /><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Each virtual machine has its own set of virtual hardware (RAM, CPU, NIC) upon which an operating system and fully configured applications are loaded. The operating system sees a consistent, normalized set of hardware regardless of the actual physical hardware components.</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Software-as-a-service (SaaS) helps save a lot of time to install OS, softwares for running a business.</p>
</div>


	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default CloudVirtualizationQuestion;
