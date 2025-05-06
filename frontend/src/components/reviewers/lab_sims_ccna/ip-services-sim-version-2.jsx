import React, { useEffect, useRef, useState } from 'react';
import { animate, inView } from 'motion';
import Accordion from '../Accordion';



const IPServicesSim2 = () => {
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

  <h1>IP Services Sim Version 2</h1>
  <div className="content">
    <p><strong>Guidelines</strong></p>
    <p>This is a lab item in which tasks will be performed on virtual devices.<br />
      + Refer to the <strong>Tasks</strong> tab to view the tasks for this lab item.<br />
      + Refer to the <strong>Topology</strong> tab to access the device console(s) and perform the tasks.<br />
      + Console access is available for all required devices by clicking the device icon or using the tab(s) above the console window.<br />
      + All necessary preconfigurations have been applied.<br />
      + Do not change the enable password or hostname for any device.<br />
      + <strong>Save your configurations</strong> to NVRAM before moving to the next item.<br />
      + Click <strong>Next</strong> at the bottom of the screen to submit this lab and move to the next question.<br />
      + When <strong>Next</strong> is clicked, the lab closes and cannot be reopened.</p>
    <p><strong>Topology</strong></p>
    <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.rivanca.com/images/ccna/labsim/IP_Services_Sim_Version_2/topology.jpg" alt="topology.jpg" width={412} height={201} /></p>
    <p><strong>Tasks</strong></p>
    <p>Services must be configured in the order presented to complete the implementation.</p>
    <p>1. Configure dynamic one-to-one address mapping on R2 using a standard list named XLATE, which allows all traffic to translate the source address of R3 to a pool named test_pool using the 10.10.10.0/24 network for traffic sent from R3 to R1. Avoid using an NVI configuration. Verify reachability by sending a ping to 192.168.100.1 from R3.</p>
    <p>2. Configure R3 to dynamically receive an IP address on Ethernet0/2 from the DHCP server.</p>
    <p>3. Configure R1 as an NTP server and R2 as a client, not as a peer, using the IP address 10.1.2.1.</p>
    <p>4. Configure SSH access from R1 to R3, while excluding access via other remote connection protocols using the user <strong>root</strong> and password <strong>s3cret</strong> on router R3 using RSA. Verify connectivity from router R1 to R3 using a destination address assigned to interface E0/2 on R3.</p>
    <p><span className="ccnaexplanation">Solution</span></p>
    <table border={1}>
      <tbody>
        <tr>
          <td style={{backgroundColor: '#befac5'}}>
            <p>You can practice this sim with our online simulator or Packet Tracer at:<br />
              + <a href="https://www.rivanca.com/interactive_labs/premium/IP_Services_Sim_2" target="_blank" rel="noopener">IP Services Sim 2 Online Simulator</a><br />
              + <a href="https://www.rivanca.com/lab_files/IP_Services_Sim_Version2.zip" target="_blank" rel="noopener">IP Services Sim 2 Packet Tracer file</a>. Please open it with Packet Tracer v8.1.1.0022 or newer.</p>
            <p>Note: In Packet Tracer, there is one command that is slightly different. It is the command “crypto key generate rsa modulus 1024”. In Packet Tracer you have to type the command “crypto key generate rsa general-keys modulus 1024” instead.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Note: Please check the ACL name, username, password… carefully in your exam as they may be different!</p>
    <p><strong>Task 1. </strong>Configure dynamic one-to-one address mapping on R2 using a standard list named XLATE, which allows all traffic to translate the source address of R3 to a pool named test_pool using the 10.10.10.0/24 network for traffic sent from R3 to R1. Avoid using an NVI configuration. Verify reachability by sending a ping to 192.168.100.1 from R3.</p>
    <pre>R2(config)# ip access-list standard XLATE //Note: The name of the ACL may be different so please check carefully!{"\n"}R2(config-std-nacl)#permit 10.2.3.3{"\n"}R2(config-std-nacl)#permit 192.168.3.1{"\n"}R2(config-std-nacl)#permit 10.1.3.11{"\n"}R2(config-std-nacl)#exit{"\n"}R2(config)# interface e0/1{"\n"}R2(config-if)#ip nat inside{"\n"}R2(config-if)#exit{"\n"}R2(config)#interface e0/0{"\n"}R2(config-if)#ip nat outside{"\n"}R2(config-if)#exit{"\n"}R2(config)#ip nat pool test_pool 10.10.10.1 10.10.10.254 netmask 255.255.255.0{"\n"}R2(config)#ip nat inside source list XLATE pool test_pool</pre>
    <p>Note: This task requires to configure a dynamic one-to-one, not one-to-many so we don’t use the keyword “overload”.</p>
    <p><strong>Verification</strong></p>
    <pre>R3#ping 192.168.100.1{"\n"}.!!!! (ping should work)</pre>
    <p><strong>Task 2. </strong>Configure R3 to dynamically receive an IP address on Ethernet0/2 from the DHCP server.</p>
    <p>R1 has been configured an DHCP Server already so we just need to configure DHCP Client on R3.</p>
    <pre>R3(config)#interface e0/2{"\n"}R3(config-if)#ip address dhcp</pre>
    <p>Wait a moment and we will see E0/2 of R3 is assigned the IP address 10.1.3.11 with the following message:</p>
    <table style={{borderCollapse: 'collapse'}} border={1}>
      <tbody>
        <tr>
          <td style={{width: '100%'}}>%DHCP-6-ADDRESS_ASSIGN: Interface Ethernet0/2 assigned DHCP address 10.1.3.11, mask 255.255.255.0, hostname R3</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Verification</strong></p>
    <p>R3(config-if)#exit<br />
      R3(config)#exit</p>
    <p>We can verify with the command “show ip interface brief” on R3:</p>
    <pre>R3#show ip interface brief{"\n"}Interface{"              "}IP-Address{"      "}OK? Method Status{"                "}Protocol{"\n"}...{"\n"}Ethernet0/2{"            "}<strong>10.1.3.11</strong>{"       "}YES <strong>DHCP</strong>{"       "}up{"                      "}up</pre>
    <p>-&gt; We see E0/2 has been assigned the IP address 10.1.3.11 via DHCP.</p><strong>Task 3.</strong> Configure R1 as an NTP server and R2 as a client, not as a peer, using the IP address 10.1.2.1.<p />
    <pre>R1#config t{"\n"}R1(config)#ntp master 1 //Configure R1 as an NTP server</pre>
    <p>Note: In this version, interface E0/2 of R1 was assigned the IP address of 10.1.3.1/24.</p>
    <p>Configure R2 as the NTP client (not NTP peer):</p>
    <pre>R2#config t{"\n"}R2(config)#ntp server 10.1.2.1</pre>
    <p><strong>Verification</strong></p>
    <p>Wait a moment so that R2 can synchronize to R1:</p>
    <pre>R2(config)#exit{"\n"}R2#show ntp status{"\n"}<strong>Clock is synchronized</strong>, stratum 2, reference is 10.1.2.1{"\n"}...</pre>
    <p><strong>Task 4.</strong> Configure SSH access from R1 to R3, while excluding access via other remote connection protocols using the user <strong>root</strong> and password <strong>s3cret</strong> on router R3 using RSA. Verify connectivity from router R1 to R3 using a destination address assigned to interface E0/2 on R3.</p>
    <pre>R3(config)#line vty 0 4{"\n"}R3(config-line)#transport input ssh{"\n"}R3(config-line)#login local{"\n"}R3(config-line)#exit{"\n"}R3(config)#username root password s3cret //Note: Please check the username and password given carefully. It may not be “root” and “s3cret” as shown here{"\n"}R3(config)#crypto key generate rsa modulus 1024</pre>
    <p>Note: The command “ip domain-name xyz.com” has been configured so we don’t need to type this command again. This command must be used before the “crypto key generate rsa” command or an error will be shown. Also this version does not ask the key-size of 1024 so you can configure any key-size you want.</p>
    <p><strong>Verification</strong></p>
    <p>Come back to R1 and type:</p>
    <pre>R1# ssh -l root 10.1.3.11{"\n"}Password: {"{"}please type s3cret here{"}"}{"\n"}R3&gt;</pre>
    <p>-&gt; We could SSH to R3 successfully!</p>
    <p><strong>Save the configuration</strong></p>
    <p>As the guidelines clearly stated that we have to save the configuration to NVRAM so please save all your configurations on R1, R2 and R3:</p>
    <pre>R1#, R2#, R3#copy running-config startup-config</pre>
    <p>Note: Just for your information, this lab requires “Do not use NVI NAT configuration” so what is NVI NAT?</p>
    <p>Cisco IOS Release 12.3(14)T introduced a feature called NAT Virtual Interface (NVI), which allows you to do a NAT configuration without the need to specify an interface as being an inside or an outside interface. Specifically, instead of issuing the “ip nat inside” or “ip nat outside” command in interface configuration mode, you can issue the “ip nat enable” command. Not only does this feature make configuration easier , but it also allows traffic to flow between two interfaces that would both be considered inside interfaces, from a classic NAT perspective.</p>
    <div className="fixed" />
  </div>

	     {/* Accordion */}
		 <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>

    	</div>
	</div>

  );
};

export default IPServicesSim2;
