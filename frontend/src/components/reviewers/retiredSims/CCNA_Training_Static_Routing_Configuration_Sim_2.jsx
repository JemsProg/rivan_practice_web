import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const StaticRoutingConfigurationSim2 = () => {
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

  <div>
  <h1>Static Routing Configuration Sim 2</h1>
  <p><strong>Tasks</strong></p>
  <p>IP connectivity and OSPF are preconfigured on all devices where necessary. Do not make any changes to the IP addressing or OSPF. The company policy uses connected interfaces and next hops when configuring static routes except for load balancing or redundancy without floating static. Connectivity must be established between subnet 172.20.20.128/25 on the Internet and the LAN at 192.168.0.0/24 connected to SW1:</p>
  <p>1. Configure reachability to the switch SW1 LAN subnet in router R2.<br />
    2. Configure default reachability to the Internet subnet in router R1.<br />
    3. Configure a single static route in router R2 to reach to the Internet subnet considering both redundant links between routers R1 and R2. A default route is NOT allowed in router R2.<br />
    4. Configure a static route in router R1 toward the switch SW1 LAN subnet where the primary link must be through Ethernet0/1, and the backup link must be through Ethernet0/2 using a floating route. Use the minimal administrative distance value when required.</p>
  <p><span className="ccnaexplanation">Solution</span></p>
  <table style={{borderCollapse: 'collapse', backgroundColor: '#befac5'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: '100%'}}>
          <p>You can download the Packet Tracer file of this sim <a href="https://www.9tut.com/lab_files/Static_Routing_Configuration_Sim_2_Initial.zip" target="_blank" rel="noopener noreferrer">here</a> (only initial config) to practice. Please open it with Packet Tracer v8.1.1.0022 or newer. We still have not had enough information about the OSPF configuration of this sim so the Packet Tracer file is still incomplete.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><strong>Task 1. </strong>Configure reachability to the switch SW1 LAN subnet in router R2.<strong><br />
    </strong></p>
  <pre>R2(config)#ip route 192.168.0.0 255.255.255.0 e0/0 10.10.31.1</pre>
  <p>Note: We have to configure both connected interface and next hop as requested (“The company policy uses connected interfaces and next hops when configuring static routes”)</p>
  <p>Maybe there is a default route to the Internet on each router so we don’t need to configure the return path.</p>
  <p><strong>Verification</strong></p>
  <pre>R3#ping 192.168.0.1{"\n"}.!!!!</pre>
  <p><strong>Task 2. </strong>Configure default reachability to the Internet subnet in router R1.</p>
  <pre>R1(config)#ip route 0.0.0.0 0.0.0.0 e0/0 10.10.13.3</pre>
  <p><strong>Task 3.</strong> Configure a single static route in router R2 to reach to the Internet subnet considering both redundant links between routers R1 and R2. A default route is NOT allowed in router R2.</p>
  <p>We don’t understand why it asks using a single static route while considering both redundant links because we will need two commands for two links:</p>
  <pre>R2(config)#ip route 172.20.20.128 255.255.255.128 10.10.12.129{"\n"}R2(config)#ip route 172.20.20.128 255.255.255.128 10.10.12.1</pre>
  <p><strong>Task 4.</strong> Configure a static route in router R1 toward the switch SW1 LAN subnet where the primary link must be through Ethernet0/1, and the backup link must be through Ethernet0/2 using a floating route. Use the minimal administrative distance value when required.</p>
  <pre>R1(config)#ip route 192.168.0.0 255.255.255.0 10.10.12.2{"\n"}R1(config)#ip route 192.168.0.0 255.255.255.0 10.10.12.130 2</pre>
  <p><strong>Save the configuration</strong></p>
  <pre>R1#, R2#, R3#copy running-config startup-config</pre>
</div>


	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default StaticRoutingConfigurationSim2;
