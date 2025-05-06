import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const NamedAccessListPortSecuritySim = () => {
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
        <h1>Named Access-list &amp; Port Security Sim</h1>
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
              src="https://www.9tut.com/images/ccna/labsim/ACL_Port_Security/topology.jpg"
              alt="topology.jpg"
              width={313}
              height={410}
            />
          </p>
          <p>
            <strong>Tasks</strong>
          </p>
          <p>
            Refer to the topology. All physical cabling is in place. Configure a
            local user account, a Named ACL (NACL), and security.
          </p>
          <p>
            <strong>Task 1. </strong>Configure a local account on Sw101 with
            telnet access only on virtual ports 0-4. Use the following
            information:
          </p>
          <p>
            + Username: support
            <br />
            + Password: max2learn
            <br />+ Privilege level: Exec mode
          </p>
          <p>
            <strong>Task 2. </strong>Configure and apply a single NACL on Sw101
            using the following:
          </p>
          <p>
            + Name: ENT_ACL
            <br />
            + Restrict only PC2 on VLAN 200 from pinging PC1
            <br />
            + Allow only PC2 on VLAN 200 to telnet to Sw101
            <br />
            + Prevent all other devices from telnetting from VLAN 200
            <br />+ Allow all other network traffic from VLAN 200
          </p>
          <p>
            <strong>Task 3. </strong>Configure security on interface Ethernet
            0/0 of Sw102:
          </p>
          <p>
            + Set the maximum number of secure MAC addresses to four.
            <br />
            + Drop packets with unknown source addresses until the number of
            secure MAC addresses drops below the configured maximum value. No
            notification action is required.
            <br />+ Allow secure MAC addresses to be learned dynamically.
          </p>
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
                      href="https://www.9tut.com/lab_files/Named_Access_list_Port_Security_Sim.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    to practice. Please open it with Packet Tracer v8.1.1.0022
                    or newer.
                  </p>
                  <p>
                    Note: Packet Tracer switches do not support Ethernet
                    interfaces so we used FastEthernet interfaces instead. Also
                    E0/0 interfaces of Sw101 &amp; Sw102 were replaced by
                    FastEthernet0/10 as Packet Tracer switches do not have
                    FastEthernet0/0.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Note: Be careful that the username, password, ACL name… may be
            different.
          </p>
          <p>
            <strong>Task 1.</strong> Configure a local account on Sw101 with
            telnet access only on virtual ports 0-4
          </p>
          <p>On Sw101:</p>
          <pre>
            username support privilege 15 password max2learn{"\n"}line vty 0 4
            {"\n"} transport input telnet{"\n"} login local
          </pre>
          <p>
            Note: Privilege level 15 is known as “enable mode” or “privileged
            exec mode,” and authorizes all commands by default.
          </p>
          <p>
            <strong>Verification</strong>
          </p>
          <p>Try to telnet to Sw101 from PC1:</p>
          <p>
            On PC1:
            <br />
            PC1:\&gt; telnet 192.168.100.1
            <br />
            Trying 192.168.100.1 …Open
            <br />
            User Access Verification
            <br />
            Username: support //Type “support” here
            <br />
            Password: ***** //Type “max2learn” here
          </p>
          <p>Sw101#</p>
          <p>
            <strong>Task 2. </strong>Configure and apply a single NACL on Sw101
          </p>
          <p>
            Use the “show ip interface brief” command on Sw101, we learn the IP
            address of interface VLAN 100 is 192.168.100.1/24. We will use this
            IP address to “allow only PC2 on VLAN 200 to telnet to Sw101”.
          </p>
          <p>On Sw101:</p>
          <pre>
            ip access-list extended ENT_ACL{"\n"} deny icmp host 192.168.200.10
            host 192.168.100.10 //Restrict only PC2 on VLAN 200 from pinging PC1
            {"\n"} permit tcp host 192.168.200.10 host 192.168.100.1 eq telnet
            //Allow only PC2 on VLAN 200 to telnet to Sw101{"\n"} deny tcp
            192.168.200.0 0.0.0.255 any eq telnet //Prevent all other devices
            from telnetting from VLAN 200{"\n"} permit ip 192.168.200.0
            0.0.0.255 any //Allow all other network traffic from VLAN 200{"\n"}
            {"\n"}interface vlan 100{"\n"} ip access-group ENT_ACL out
          </pre>
          <p>
            An ACL applied outbound to a VLAN interface filters traffic going TO
            devices on that VLAN.
            <br />
            An ACL applied inbound to a VLAN interface filters traffic coming
            FROM devices on that VLAN.
          </p>
          <p>
            In this task, we need to apply the “out” direction as we want to
            block traffic going to devices on VLAN 100.
          </p>
          <p>
            Note: We cannot apply the ACL to e0/2 interface of SW101 as it is a
            Layer 2 trunk. Apply a Layer 3 ACL to the trunk link cannot filter
            the traffic.
          </p>
          <p>
            <strong>Verification</strong>
          </p>
          <p>+ Check to make sure PC2 cannot ping PC1:</p>
          <p>
            PC2:\&gt; ping 192.168.100.10
            <br />
            Pinging 192.168.100.10 with 32 bytes of data
            <br />
            Request timed out.
            <br />
            Request timed out.
            <br />
            Request timed out.
            <br />
            Request timed out.
          </p>
          <p>
            + Check if only PC2 on VLAN 200 to telnet to Sw101 and prevent all
            other devices from telnetting from VLAN 200:
          </p>
          <p>
            PC2:\&gt; telnet 192.168.100.1 //this must be successful
            <br />
            SW102# telnet 192.168.100.1 //this must fail
          </p>
          <p>
            + Check the “Allow all other network traffic from VLAN 200”
            condition by try pinging from PC2 to SW101:
          </p>
          <p>PC2:\&gt;ping 192.168.100.1 //this must be successful</p>
          <p>
            <strong>Task 3. </strong>Configure security on interface Ethernet
            0/0 of Sw102.
          </p>
          <p>
            In this task, it asked “No notification action is required” so we
            have to use “protect” for violation mode.
          </p>
          <p>On Sw102:</p>
          <pre>
            int e0/0{"\n"} switchport port-security{"\n"} switchport
            port-security maximum 4{"\n"} switchport port-security violation
            protect{"\n"} switchport port-security mac-address sticky
          </pre>
          <p>
            <strong>Save the configurations</strong>
          </p>
          <pre>Sw101+Sw102#copy running-config startup-config</pre>
          <p>======================================================</p>
          <p>
            For your information, the port security violation modes are
            described below:
          </p>
          <p>
            <strong>Protect</strong> – This mode permits traffic from known MAC
            addresses to continue to be forwarded while dropping traffic from
            unknown MAC addresses when over the allowed MAC address limit.{" "}
            <span style={{ textDecoration: "underline" }}>
              When configured with this mode, no notification action is taken
              when traffic is dropped
            </span>
            .
          </p>
          <p>
            <strong>Restrict</strong> – This mode permits traffic from known MAC
            addresses to continue to be forwarded while dropping traffic from
            unknown MAC addresses when over the allowed MAC address limit. When
            configured with this mode, a syslog message is logged, a Simple
            Network Management Protocol (SNMP) trap is sent, and a violation
            counter is incremented when traffic is dropped.
          </p>
          <p>
            <strong>Shutdown</strong> – This mode is the default violation mode;
            when in this mode, the switch will automatically force the
            switchport into an error disabled (err-disable) state when a
            violation occurs. While in this state, the switchport forwards no
            traffic. The switchport can be brought out of this error disabled
            state by issuing the errdisable recovery cause CLI command or by
            disabling and reenabling the switchport.
          </p>
          <p>
            <strong>Shutdown VLAN</strong> -This mode mimics the behavior of the
            shutdown mode but limits the error disabled state the specific
            violating VLAN.
          </p>
          <p>
            Reference:{" "}
            <a
              href="https://www.ciscopress.com/articles/article.asp?p=1722561"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.ciscopress.com/articles/article.asp?p=1722561
            </a>
          </p>
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

export default NamedAccessListPortSecuritySim;
