// src/pages/IPServicesSim.jsx
import React, { useEffect, useRef } from 'react';
import { animate, inView } from 'motion';
import topology from './assets/topology.jpg';
import Accordion from '../Accordion';

const IPServicesSim = () => {
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
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <h1 className="text-3xl font-bold mb-4">IP Services Sim</h1>
      </div>

      {/* Guidelines */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Guidelines</strong></p>
        <p className="mb-6">
          This is a lab item in which tasks will be performed on virtual devices.<br />
          + Refer to the <strong>Tasks</strong> tab to view the tasks for this lab item.<br />
          + Refer to the <strong>Topology</strong> tab to access the device console(s) and perform the tasks.<br />
          + Console access is available for all required devices by clicking the device icon or using the tab(s) above the console window.<br />
          + All necessary preconfigurations have been applied.<br />
          + Do not change the enable password or hostname for any device.<br />
          + <strong>Save your configurations</strong> to NVRAM before moving to the next item.<br />
          + Click <strong>Next</strong> at the bottom of the screen to submit this lab and move to the next question.<br />
          + When <strong>Next</strong> is clicked, the lab closes and cannot be reopened.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src={topology}
          alt="topology"
          width="412"
          height="201"
        />
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-4">
          Connectivity between three routers has been established, and IP services must be configured in the order presented to complete the implementation. Tasks assigned include configuration of NAT, NTP, DHCP, and SSH services.
        </p>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>1.</strong> All traffic sent from R3 to the R1 Loopback address must be configured for NAT on R2. All source addresses must be translated from R3 to the IP address of Ethernet0/0 on R2, while using only a standard access list named NAT. To verify, a ping must be successful to the R1 Loopback address sourced from R3. <strong>Do not use NVI NAT configuration</strong>.
        </p>
        <p className="font-semibold mb-2">Solution & Verification</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">{`
R2(config)# ip access-list standard NAT
R2(config-std-nacl)# permit 10.2.3.3
R2(config-std-nacl)# permit 192.168.3.1
R2(config-std-nacl)# permit 10.1.3.11
R2(config-std-nacl)# exit
R2(config)# interface e0/1
R2(config-if)# ip nat inside
R2(config-if)# exit
R2(config)# interface e0/0
R2(config-if)# ip nat outside
R2(config-if)# exit
R2(config)# ip nat inside source list NAT interface e0/0 overload

R3# ping 192.168.1.1
.!!!! (ping should work)
`}</pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="font-semibold mb-2"><strong>2.</strong> Configure R1 as an NTP server and R2 as a client, not as a peer, using the IP address of the R1 Ethernet0/2 interface. Set the clock on the NTP server for midnight on January 1, 2019.</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">{`
R1(config)# ntp master 1
R1(config)# ntp source E0/2
R1(config)# exit
R1# clock set 00:00:00 January 1 2019
R2# config t
R2(config)# ntp server 10.1.3.1
`}</pre>
      </div>

      {/* Task 3 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="font-semibold mb-2"><strong>3.</strong> Configure R1 as a DHCP server for the network 10.1.3.0/24 in a pool named NETPOOL. Using a single command, exclude addresses 1-10 from the range. Interface Ethernet0/2 on R3 must be issued the IP address of 10.1.3.11 via DHCP.</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">{`
R1(config)# ip dhcp pool NETPOOL
R1(dhcp-config)# network 10.1.3.0 255.255.255.0
R1(dhcp-config)# exit
R1(config)# ip dhcp excluded-address 10.1.3.1 10.1.3.10
R3(config)# interface e0/2
R3(config-if)# ip address dhcp
`}</pre>
      </div>

      {/* Task 4 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="font-semibold mb-2"><strong>4.</strong> Configure SSH connectivity from R1 to R3, while excluding access via other remote connection protocols. Access for user <strong>netadmin</strong> and password <strong>N3t4ccess</strong> must be set on router R3 using RSA and 1024 bits. Verify connectivity using an SSH session from router R1 using a destination address of 10.1.3.11. <strong>Do NOT modify console access or line numbers to accomplish this task</strong>.</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">{`
R3(config)# line vty 0 4
R3(config-line)# transport input ssh
R3(config-line)# login local
R3(config-line)# exit
R3(config)# username netadmin password N3t4ccess
R3(config)# crypto key generate rsa modulus 1024

R1# ssh -l netadmin 10.1.3.11
Password: N3t4ccess
`}</pre>
      </div>

      {/* Note */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4">
          <strong>Note:</strong> This lab requires “Do not use NVI NAT configuration”. Cisco IOS Release 12.3(14)T introduced NAT Virtual Interface (NVI), which allows NAT without specifying inside/outside interfaces. Use <code>ip nat enable</code> when needed.
        </p>
        <a
          href="https://www.oreilly.com/library/view/ccnp-routing-and/9780133149883/ch12lev3sec6.html"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reference: O'Reilly – NVI NAT Explanation
        </a>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default IPServicesSim;
