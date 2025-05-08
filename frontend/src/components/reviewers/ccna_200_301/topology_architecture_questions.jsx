import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const TopologyArchitectureQuestions = () => {
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

  <h1>Topology Architecture Questions</h1>
<div>
  <p><span className="blueandbold">Quick Summary</span></p>
  <p><span className="blueandbold">Three tier Architecture</span></p>
  <p>The key layers are access, distribution, and core.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/Topology_Architecture/three_tier_architecture.jpg" alt="three_tier_architecture.jpg" width={370} height={279} /></p>
  <p>The access layer highlighted grants end devices access to the network. In the WAN environment, it may provide teleworkers or remote sites access to the corporate network across WAN connections.</p>
  <p>The distribution layer aggregates the data received from the access layer switches before it is transmitted to the core layer for routing to its final destination.</p>
  <p>The core layer is the network backbone that hierarchically connects several layers of the network design, providing for connectivity between end devices, computing and data storage services located within the data center and other areas, and services within the network.</p>
  <p>Considerations at the core layer include<br />
    + Providing high-speed switching (i.e., fast transport)<br />
    + Providing reliability and fault tolerance<br />
    + Scaling by using faster, and not more, equipment<br />
    + Avoiding CPU-intensive packet manipulation caused by security, inspection, quality of service (QoS) classification, or other processes</p>
  <p><span className="blueandbold">Spine-leaf Architecture</span></p>
  <p>Spine-leaf architecture is typically deployed as two layers: spines (such as an aggregation layer), and leaves (such as an access layer). Spine-leaf topologies provide high-bandwidth, <strong>low-latency</strong>, nonblocking server-to-server connectivity.</p>
  <p>With a spine-and-leaf architecture, no matter which leaf switch to which a server is connected, <strong>its traffic always has to cross the same number of devices to get to another server</strong> (unless the other server is located on the same leaf). This approach keeps latency at a predictable level because a payload only has to hop to a spine switch and another leaf switch to reach its destination.</p>
  <p>With Leaf-Spine, the network uses Layer 3 routing so <strong>STP is no longer required</strong>. Spine-leaf architectures rely on protocols such as Equal-Cost Multipath (ECPM) routing to load balance traffic across all available paths while still preventing network loops. This allows all connections to be utilized at the same time while still remaining stable and avoiding loops within the network.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/ACI/Spine_Leaf.jpg" alt="Spine_Leaf.jpg" width={556} height={315} /></p>
  <p /><p className="ccnaquestionsnumber">Question 1</p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Spine-leaf architecture is typically deployed as two layers: spines (such as an aggregation layer), and leaves (such as an access layer). Spine-leaf topologies provide high-bandwidth, <strong>low-latency</strong> (-&gt; Answer B is not correct), nonblocking server-to-server connectivity.</p>
  <p>With a spine-and-leaf architecture, no matter which leaf switch to which a server is connected, <strong>its traffic always has to cross the same number of devices to get to another server</strong> (unless the other server is located on the same leaf) (-&gt; Answer A is correct) . This approach keeps latency at a predictable level because a payload only has to hop to a spine switch and another leaf switch to reach its destination.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/products/collateral/switches/nexus-7000-series-switches/white-paper-c11-737022.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/products/collateral/switches/nexus-7000-series-switches/white-paper-c11-737022.html</a></p>
  <p>With Leaf-Spine, the network uses Layer 3 routing so <strong>STP is no longer required</strong>. (-&gt; Answer C is not correct). Spine-leaf architectures rely on protocols such as Equal-Cost Multipath (ECPM) routing to load balance traffic across all available paths while still preventing network loops. This allows all connections to be utilized at the same time while still remaining stable and avoiding loops within the network.</p>
  <p>&nbsp;</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/ACI/Spine_Leaf.jpg" alt="Spine_Leaf.jpg" width={556} height={315} /></p>
  <p className="ccnaquestionsnumber">Question 2</p>
  <p /><p><span className="ccnaquestionsnumber">Question 3</span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The key layers are access, distribution, and core. The core layer is the network backbone that hierarchically connects several layers of the network design, providing for connectivity between end devices, computing and data storage services located within the data center and other areas, and services within the network.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/Topology_Architecture/three_tier_architecture.jpg" alt="three_tier_architecture.jpg" width={370} height={279} /></p>
  <p><span className="ccnaquestionsnumber">Question 6</span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Ethernet WAN offer the ability of using Ethernet over long-distance links.</p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Dual-homed branches (branches connects to two ISPs or one ISP with two connections) increases reliability for the network.</p>
  <p>Dynamic routing automatically use backup routes in the case of main routes fail which increases reliability. The configuration is remain unchanged or change a little when we expand the network thus increasing the scalability.</p>
  <p>Note: A scalable network can expand quickly to support new users and applications without impacting the performance of the service being delivered to existing users</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  <p /><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Considerations at the core layer include<br />
    + Providing high-speed switching (i.e., fast transport)<br />
    + Providing reliability and fault tolerance<br />
    + Scaling by using faster, and not more, equipment<br />
    + Avoiding CPU-intensive packet manipulation caused by security, inspection, quality of service (QoS) classification, or other processes</p>
  <p>Reference: <a href="https://www.ciscopress.com/articles/article.asp?p=2202410&seqNum=4" target="_blank" rel="noopener noreferrer">https://www.ciscopress.com/articles/article.asp?p=2202410&amp;seqNum=4</a></p>
  <p><span className="ccnaquestionsnumber">Question 10</span></p>
  <p /><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The three-tier hierarchical design maximizes performance, network availability, and the ability to scale the network design.<br />
    However, many small enterprise networks do not grow significantly larger over time. Therefore, a two-tier hierarchical design where the core and distribution layers are collapsed into one layer is often more practical. <strong>A “collapsed core” is when the distribution layer and core layer functions are implemented by a single device</strong>. The primary motivation for the collapsed core design is reducing network cost, while maintaining most of the benefits of the three-tier hierarchical model.</p>
  <p>Reference: <a href="https://www.ciscopress.com/articles/article.asp?p=2202410&seqNum=4" target="_blank" rel="noopener noreferrer">https://www.ciscopress.com/articles/article.asp?p=2202410&amp;seqNum=4</a></p>
  <p>A collapsed core network is shown below. The collapsed core network may be deployed with redundant core/distribution router, or consolidated core/distribution router.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/Basic/collapsed_core.jpg" alt="collapsed_core.jpg" width={787} height={487} /></p>
  <p>Deploying a collapsed core network results in the distribution layer and core layer functions being implemented in a single device. The collapsed core/distribution device must provide the following:<br />
    + High speed physical and logical paths connecting to the network<br />
    + Layer-2 aggregation and demarcation point<br />
    + Define <strong>routing</strong> and network access <strong>policies</strong> -&gt; Answer C is correct<br />
    + Intelligent network services—QoS, Network virtualization, etc.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Small_Enterprise_Design_Profile/SEDP/chap2.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/solutions/Enterprise/Small_Enterprise_Design_Profile/SEDP/chap2.html</a></p>
</div>

	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default TopologyArchitectureQuestions;
