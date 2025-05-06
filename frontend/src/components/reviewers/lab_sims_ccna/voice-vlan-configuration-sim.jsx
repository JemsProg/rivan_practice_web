import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VoiceVlanConfigurationSim = () => {
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
        <h1>Voice VLAN Configuration Sim</h1>
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
              src="https://www.9tut.com/images/ccna/labsim/Voice_VLAN_Sim/Voice_VLAN_Topology.jpg"
              alt="Voice_VLAN_Topology.jpg"
              width={364}
              height={295}
            />
          </p>
          <p>
            <strong>Tasks</strong>
          </p>
          <p>
            All physical cabling between the two switches is installed.
            Configure the network connectivity between the switches using the
            designated VLANs and interfaces.
          </p>
          <p>
            1. Configure VLAN 100 named <strong>Compute</strong> and VLAN 200
            named <strong>Telephony</strong> where required for each task.
            <br />
            2. Configure Ethernet0/1 on SW2 to use the existing VLAN named{" "}
            <strong>Available</strong>.<br />
            3. Configure the connection between the switches using access ports.
            <br />
            4. Configure Ethernet0/1 on SW1 using data and voice VLANs.
            <br />
            5. Configure Ethernet0/1 on SW2 so that the Cisco proprietary
            neighbor discovery protocol is turned off for the designated
            interface only.
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
                <td style={{ width: "100%" }}>
                  <p>
                    Note: You can download the Packet Tracer file of this sim{" "}
                    <a
                      href="https://www.9tut.com/lab_files/Voice_VLAN_Configuration_Sim.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    to practice. Please open it with Packet Tracer v8.1.1.0022
                    or newer.
                  </p>
                  <p>
                    Packet Tracer switches do not support Ethernet interfaces so
                    we used FastEthernet interfaces instead. Also E0/0 interface
                    of Sw1 &amp; Sw2 were replaced by FastEthernet0/24 as Packet
                    Tracer switches do not have FastEthernet0/0.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Note: The VLAN numbers may be different so please check them
            carefully.
          </p>
          <p>
            <strong>Task 1. </strong>Configure VLAN 100 named Compute and VLAN
            200 named Telephony where required for each task.
            <strong>
              <br />
            </strong>
          </p>
          <pre>
            SW1(config)#vlan 100{"\n"}SW1(config-vlan)#name Compute{"\n"}
            SW1(config-vlan)#vlan 200{"\n"}SW1(config-vlan)#name Telephony{"\n"}
            SW1(config-vlan)#exit //to apply the configured VLANs
          </pre>
          <p>
            SW2 only uses “Compute” VLAN so we only need to configure this VLAN
            on SW2:
          </p>
          <pre>
            SW2(config)#vlan 100{"\n"}SW2(config)#name Compute{"\n"}
            SW2(config)#exit
          </pre>
          <p>
            <strong>Task 2. </strong>Configure Ethernet0/1 on SW2 to use the
            existing VLAN named <strong>Available</strong>.
            <strong>
              <br />
            </strong>
          </p>
          <p>
            Check the number of VLAN named “Available” so that we can assign
            interface E0/1 to this VLAN with the “show vlan” command. Suppose we
            found VLAN 99 is the “Available” VLAN.
          </p>
          <pre>
            SW2(config)#interface e0/1{"\n"}SW2(config-if)#switchport mode
            access{"\n"}SW2(config-if)#switchport access vlan 99
          </pre>
          <p>
            <strong>Task 3.</strong> Configure the connection between the
            switches using access ports.
            <strong>
              <br />
            </strong>
          </p>
          <p>Configure on both SW1 &amp; SW2:</p>
          <pre>
            SW1+SW2(config)#interface e0/0{"\n"}SW1+SW2(config-if)#switchport
            mode access{"\n"}SW1+SW2(config-if)#switchport access vlan 100
          </pre>
          <p>
            <strong>Task 4. </strong>Configure Ethernet0/1 on SW1 using data and
            voice VLANs.
          </p>
          <pre>
            SW1(config)#interface e0/1{"\n"}SW1(config-if)#switchport mode
            access{"\n"}SW1(config-if)#switchport access vlan 100{"\n"}
            SW1(config-if)#switchport voice vlan 200
          </pre>
          <p>
            <strong>Task 5. </strong>Configure Ethernet0/1 on SW2 so that the
            Cisco proprietary neighbor discovery protocol is turned off for the
            designated interface only.
          </p>
          <pre>
            SW2(config)#interface e0/1{"\n"}SW2(config-if)#no cdp enable
          </pre>
          <p>Don’t forget to save the configuration on both switches:</p>
          <pre>SW1+SW2#copy running-config startup-config</pre>
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

export default VoiceVlanConfigurationSim;
