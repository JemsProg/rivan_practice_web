import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const NamedAccessDhcpSnoopingSim = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
        )
      )
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
      <div>
        <h1>Named Access-list &amp; DHCP Snooping Sim</h1>
        <div className="content">
          <p>
            <strong>Guidelines</strong>
          </p>
          <p>
            This is a lab item in which tasks will be performed on virtual
            devices.
            <br />+ Refer to the <strong>Tasks</strong> tab to view the tasks
            for this lab item.
            <br />+ Refer to the <strong>Topology</strong> tab to access the
            device console(s) and perform the tasks.
            <br />
            + Console access is available for all required devices by clicking
            the device icon or using the tab(s) above the console window.
            <br />
            + All necessary preconfigurations have been applied.
            <br />
            + Do not change the enable password or hostname for any device.
            <br />+ <strong>Save your configurations</strong> to NVRAM before
            moving to the next item.
            <br />+ Click <strong>Next</strong> at the bottom of the screen to
            submit this lab and move to the next question.
            <br />+ When <strong>Next</strong> is clicked, the lab closes and
            cannot be reopened.
          </p>
          <p>
            <strong>Topology</strong>
          </p>
          <p>
            <img
              fetchpriority="high"
              decoding="async"
              className="aligncenter"
              src="https://www.9tut.com/images/ccna/labsim/NACL_DHCP_Snooping/topology.jpg"
              alt="topology.jpg"
              width={400}
              height={545}
            />
          </p>
          <p>
            <strong>Tasks</strong>
          </p>
          <p>
            Refer to the topology. All physical cabling is in place. Configure
            local users accounts, modify the Named ACL (NACL), and configure
            DHCP Snooping. The current contents of the NACL must remain intact.
          </p>
          <p>
            <strong>Task 1</strong>
          </p>
          <p>
            Configure a local account on Gw1 with telnet access only on virtual
            ports 0-4. Use the following information:
          </p>
          <p>
            + Username: wheel
            <br />
            + Password: lock3path
            <br />
            + Algorithm type: Scrypt
            <br />+ Privilege level: Exec mode
          </p>
          <p>
            <strong>Task 2</strong>
          </p>
          <p>
            Configure and apply a NACL on Gw1 to control network traffic from
            VLAN 10:
          </p>
          <p>
            + Name: CORP_ACL
            <br />
            + Allow BOOTP and HTTPS
            <br />+ Restrict all other traffic and log the ingress interface,
            source MAC address, the packet’s source and destination IP
            addresses, and ports.
          </p>
          <p>
            <strong>Task 3</strong>
          </p>
          <p>Configure Sw1:</p>
          <p>
            + Enable DHCP Snooping for VLAN 10
            <br />
            + Disable DHCP Option-82 data insertion
            <br />
            + Enable DHCP Snooping MAC address verification
            <br />+ Enable trusted interfaces.
          </p>
          <table style={{ borderCollapse: "collapse" }} border={1}>
            <tbody>
              <tr>
                <td style={{ width: "50%", verticalAlign: "top" }}>
                  <p>
                    <strong>Gw1 Initial Configuration</strong>
                  </p>
                  <pre>
                    hostname Gw1{"\n"}!{"\n"}ip dhcp excluded-address 10.10.0.1
                    {"\n"}ip dhcp excluded-address 10.20.0.1{"\n"}!{"\n"}ip dhcp
                    pool VLAN10{"\n"} network 10.10.0.0 255.255.255.0{"\n"}{" "}
                    default-router 10.10.0.1{"\n"}ip dhcp pool VLAN20{"\n"}{" "}
                    network 10.20.0.0 255.255.255.0{"\n"} default-router
                    10.20.0.1{"\n"}!{"\n"}interface Ethernet0/0.10{"\n"}{" "}
                    encapsulation dot1Q 10{"\n"} ip address 10.10.0.1
                    255.255.255.0{"\n"}!{"\n"}interface Ethernet0/0.20{"\n"}{" "}
                    encapsulation dot1Q 20{"\n"} ip address 10.20.0.1
                    255.255.255.0{"\n"}!{"\n"}interface Ethernet0/2{"\n"}{" "}
                    description Connected to Internet{"\n"} ip address
                    209.165.201.1 255.255.255.252
                  </pre>
                </td>
                <td style={{ width: "50%", verticalAlign: "top" }}>
                  <p>
                    <strong>Sw1 Initial Configuration</strong>
                  </p>
                  <pre>
                    hostname Sw1{"\n"}!{"\n"}interface Ethernet0/0{"\n"}{" "}
                    description Connected to HostA{"\n"} switchport access vlan
                    10{"\n"} switchport mode access{"\n"}!{"\n"}interface
                    Ethernet0/1{"\n"} description Connected to Sw2{"\n"}{" "}
                    switchport mode trunk{"\n"}!{"\n"}interface Ethernet0/2
                    {"\n"} description Connected to Sw3{"\n"} switchport mode
                    trunk{"\n"}
                  </pre>
                </td>
              </tr>
              <tr>
                <td style={{ width: "50%" }}>
                  <p>
                    <strong>Sw3 Initial Configuration</strong>
                  </p>
                  <pre>
                    hostname Sw3{"\n"}!{"\n"}interface Ethernet0/0{"\n"}{" "}
                    description Connected to HostC{"\n"} switchport access vlan
                    10{"\n"} switchport mode access{"\n"}!{"\n"}interface
                    Ethernet0/1{"\n"} description Connected to Sw2{"\n"}{" "}
                    switchport mode trunk{"\n"}!{"\n"}interface Ethernet0/2
                    {"\n"} description Connected to Sw1{"\n"} switchport mode
                    trunk{"\n"}!{"\n"}interface Ethernet0/3{"\n"} description
                    Connected to HostD{"\n"} switchport access vlan 20{"\n"}{" "}
                    switchport mode access{"\n"}!{"\n"}interface Ethernet1/0
                    {"\n"} description Connected to Gw1{"\n"} switchport mode
                    trunk{"\n"}!{"\n"}
                  </pre>
                </td>
                <td style={{ width: "50%" }}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
          <p>
            <span className="ccnaexplanation">Solution</span>
          </p>
          <table
            style={{ borderCollapse: "collapse", backgroundColor: "#befac5" }}
            border={1}
          >
            <tbody>
              <tr>
                <td>
                  <p>
                    You can download the Packet Tracer file of this sim{" "}
                    <a
                      href="https://www.9tut.com/lab_files/Named_Access_list_DHCP_Snooping_Sim.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    to practice. Please open it with Packet Tracer v8.1.1.0022
                    or newer.
                  </p>
                  <p>Note:</p>
                  <p>
                    + Packet Tracer switches do not support Ethernet interfaces
                    so we used GigabitEthernet interfaces instead. Also E0/0
                    interfaces of the switches were replaced by
                    GigabitEthernet1/0/10 as Packet Tracer switches do not have
                    GigabitEthernet0/0.
                    <br />+ Currently Packet Tracer router has not supported
                    “algorithm” keyword in “username …” command so please ignore
                    it. + Packet Tracer does not support “log-input” in the ACL
                    statement either.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Note: Be careful that the username, password, ACL name… may be
            different. You can only access and configure the “blue” devices, not
            “gray” ones.
          </p>
          <p>
            <strong>Task 1.</strong> Configure a local account on Gw1 with
            telnet access only on virtual ports 0-4
          </p>
          <p>On Gw1:</p>
          <pre>
            username wheel privilege 15 algorithm-type scrypt secret lock3path
            {"\n"}line vty 0 4{"\n"} transport input telnet{"\n"} login local
          </pre>
          <p>
            Note: Privilege level 15 is known as “enable mode” or “privileged
            exec mode,” and authorizes all commands by default. We cannot use
            the keyword “password” after “algorithm-type scrypt” so we need to
            use the keyword “secret” instead.
          </p>
          <p>
            <strong>Verification</strong>
          </p>
          <p>
            First we must find an IP address on Gw1 to telnet with the “show ip
            interface brief” command on Gw1.
          </p>
          <pre>
            Gw1#show ip interface brief{"\n"}Interface{"              "}
            IP-Address{"      "}OK? Method Status{"                "}Protocol{" "}
            {"\n"}Ethernet0/0{"     "}unassigned{"      "}YES NVRAM{"  "}up
            {"                    "}up {"\n"}
            <strong>Ethernet0/0.10{"  "}10.10.0.1</strong>
            {"       "}YES manual up{"                    "}up {"\n"}
            Ethernet0/0.20{"  "}10.20.0.1{"       "}YES manual up
            {"                    "}up {"\n"}Ethernet0/1{"     "}unassigned
            {"      "}YES NVRAM{"  "}administratively down down {"\n"}
            Ethernet0/2{"     "}209.165.201.1{"   "}YES manual up
            {"                    "}up {"\n"}
          </pre>
          <p>
            Host A was assigned to VLAN 10 so we will choose Ethernet0/0.10 with
            IP address of 10.10.0.1 to connect to.
          </p>
          <p>On HostA:</p>
          <pre>
            HostA:\&gt; telnet 10.10.0.1 //The IP address may be different{"\n"}
            Trying 10.10.0.1 …Open{"\n"}User Access Verification{"\n"}Username:
            wheel //Type “wheel” here{"\n"}Password: ********* //Type
            “lock3path” here{"\n"}Gw1# //telnet to Gw1 successfully
          </pre>
          <p>
            <strong>Task 2. </strong>Configure and apply a NACL on Gw1 to
            control network traffic from VLAN 10 (+ Name: CORP_ACL; + Allow
            BOOTP and HTTPS; + Restrict all other traffic and log the ingress
            interface, source MAC address, the packet’s source and destination
            IP addresses, and ports)
          </p>
          <p>
            In order to control traffic from VLAN 10 only, we first need to find
            out the IP address range of this VLAN. We can check in the IP
            Configuration of HostA and HostC to find their IP addresses and
            subnet masks. For example we find out they belong to 10.10.0.0/24 so
            we will only permit HTTPS and deny other traffic from this
            subnet.&nbsp;
          </p>
          <p>
            Note: Before getting an IP address from DHCP process, the client
            only sends broadcast messages to DHCP server so we cannot specify a
            specific subnet to filter these packets -&gt; We should use the word
            “any” for both source and destination addresses.
          </p>
          <p>On Gw1:</p>
          <pre>
            ip access-list extended CORP_ACL{"\n"} permit udp any any eq bootpc
            {"\n"} permit udp any any eq bootps{"\n"} permit tcp 10.10.0.0
            0.0.0.255 any eq 443 //there is no "https" keyword so we have to use
            the port number{"\n"} deny ip 10.10.0.0 0.0.0.255 any log-input
            {"\n"}
            {"\n"}interface e0/0.10{"\n"} ip access-group CORP_ACL in
          </pre>
          <p>
            This will permit DHCP client requests (bootpc) and server responses
            (bootps) from any source and destination address.
          </p>
          <p>
            The “log-input” logs the following information:{" "}
            <strong>
              ingress interface, source MAC address, source IP address,
              destination IP address, source port, destination port
            </strong>
            .
          </p>
          <p>
            Note: The “log” keyword simply generates a log message for a
            matching packet, without including any additional information. The
            “log-input” keyword, on the other hand, generates a log message that
            includes additional information about the packet, such as the
            interface it was received on, the source MAC address, and the source
            and destination IP addresses and ports. In summary, the “log”
            keyword generates a simple log message, while the “log-input”
            keyword provides more detailed information about the packet.
          </p>
          <p>
            <strong>Task 3.</strong> Configure DHCP Snooping on Sw1 (+ Enable
            DHCP Snooping for VLAN 10; + Disable DHCP Option-82 data insertion;
            + Enable DHCP Snooping MAC address verification; + Enable trusted
            interfaces)
          </p>
          <p>On Sw1:</p>
          <pre>
            Sw1(config)#ip dhcp snooping //Enable DHCP Snooping feature{"\n"}
            Sw1(config)#ip dhcp snooping vlan 10 //Enable DHCP Snooping for VLAN
            10 only{"\n"}Sw1(config)#no ip dhcp snooping information option
            //Disable DHCP Option-82 data insertion{"\n"}Sw1(config)#ip dhcp
            snooping verify mac-address //Globally enables MAC address
            verification for DHCP snooping on all switch interfaces.
          </pre>
          <p>
            + Configure trusted interfaces for DHCP Snooping. In this case
            “trusted” interfaces are interfaces that are connecting to the DHCP
            Server and other switches -&gt; Interfaces e0/1, e0/2 should be
            configured trusted interfaces.
          </p>
          <pre>
            Sw1(config)#interface e0/1{"\n"}Sw1(config-if)#ip dhcp snooping
            trust{"\n"}Sw1(config-if)#interface e0/2{"\n"}Sw1(config-if)#ip dhcp
            snooping trust
          </pre>
          <p>
            <strong>Verification</strong>
          </p>
          <pre>
            Sw1#show ip dhcp snooping{"\n"}Switch DHCP snooping is enabled{"\n"}
            DHCP snooping is configured on following VLANs: 10{"\n"}Insertion of
            option 82 is disabled{"\n"}Option 82 on untrusted port is not
            allowed{"\n"}Verification of hwaddr field is enabled{"\n"}Interface{" "}
            {"\t"}Trusted {"\t"}Rate limit (pps){"\n"}---------{"       "}
            -------{"         "}----------------{"\n"}Ethernet0/1 {"\t"}
            {"    "}yes {"\t"}
            {"       "}unlimited{"\n"}Ethernet0/2 {"\t"}
            {"    "}yes {"\t"}
            {"       "}unlimited
          </pre>
          <p>
            <strong>Save the configuration</strong>
          </p>
          <pre>Sw1+Gw1#copy running-config startup-config</pre>
          <div className="fixed" />
        </div>
      </div>

      {/* Accordion */}
      <div data-animate className="mt-12 transform opacity-0 translate-y-8">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default NamedAccessDhcpSnoopingSim;
