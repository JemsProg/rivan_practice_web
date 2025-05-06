import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanTrunkingConfigurationSim = () => {
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
        <h1>VLAN and Trunking Configuration Sim</h1>
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
              src="https://www.9tut.com/images/ccna/labsim/VLAN_Trunking_Configuration_Sim/VLAN_Trunking_Topology.jpg"
              alt="VLAN_Trunking_Topology.jpg"
              width={479}
              height={280}
            />
          </p>
          <p>
            <strong>Tasks</strong>
          </p>
          <p>
            <span className="fontstyle0">
              Three switches must be configured for Layer 2 connectivity. The
              company requires only the designated VLANs to be configured on
              their respective switches and permitted across any links between
              switches for security purposes. Do not modify or delete VTP
              configurations.
            </span>
          </p>
          <p>
            <span className="fontstyle0">
              The network needs two user-defined VLANs configured:
            </span>
          </p>
          <p>
            <span className="fontstyle0">
              VLAN 110: MARKETING
              <br />
              VLAN 210: FINANCE
            </span>
          </p>
          <p>
            <span className="fontstyle0">
              1. Configure the VLANs on the designated switches and assign them
              as access ports to the interfaces connected to the PCs.
              <br />
              2. Configure the e0/2 interfaces on Sw1 and Sw2 as 802.1q trunks
              with only the required VLANs permitted.
              <br />
              3. Configure the e0/3 interfaces on Sw2 and Sw3 as 802.1q trunks
              with only the required VLANs permitted.
            </span>
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
                      href="https://www.9tut.com/lab_files/VLAN_and_Trunking_Configuration_Sim.zip"
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
                    E0/0 interface of Sw3 was replaced by FastEthernet0/2 as
                    Packet Tracer switches do not have FastEthernet0/0.
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
            <strong>Task 1. </strong>
            <span className="fontstyle0">
              Configure the VLANs on the designated switches and assign them as
              access ports to the interfaces connected to the PCs.
            </span>
            <strong>
              <br />
            </strong>
          </p>
          <pre>
            On Sw1:{"\n"}Sw1(config)#vlan 210{"\n"}Sw1(config-vlan)#name FINANCE
            {"\n"}Sw1(config-vlan)#exit{"\n"}Sw1(config)#interface e0/1{"\n"}
            Sw1(config-if)#switchport mode access{"\n"}Sw1(config-if)#switchport
            access vlan 210
          </pre>
          <p>On Sw2:</p>
          <pre>
            Sw2(config)#vlan 110{"\n"}Sw2(config-vlan)#name MARKETING{"\n"}
            Sw2(config-vlan)#vlan 210{"\n"}Sw2(config-vlan)#name FINANCE{"\n"}
            Sw1(config-vlan)#exit{"\n"}Sw2(config)#interface e0/1{"\n"}
            Sw2(config-if)#switchport mode access{"\n"}Sw2(config-if)#switchport
            access vlan 110
          </pre>
          <p>
            Note: Although Sw2 does not use VLAN 210 but we have to configure
            this VLAN on Sw2 or PC5 and PC6 cannot communicate. Sw2 needs to
            declare this VLAN in its database to forward frames of this VLAN.
          </p>
          <p>On Sw3:</p>
          <pre>
            Sw3(config)#vlan 110{"\n"}Sw3(config-vlan)#name MARKETING{"\n"}
            Sw3(config-vlan)#vlan 210{"\n"}Sw3(config-vlan)#name FINANCE{"\n"}
            Sw3(config-vlan)#exit{"\n"}Sw3(config)#interface e0/0{"\n"}
            Sw3(config-if)#switchport mode access{"\n"}Sw3(config-if)#switchport
            access vlan 110{"\n"}Sw3(config)#interface e0/1{"\n"}
            Sw3(config-if)#switchport mode access{"\n"}Sw3(config-if)#switchport
            access vlan 210
          </pre>
          <p>
            <strong>Task 2. </strong>
            <span className="fontstyle0">
              Configure the e0/2 interfaces on Sw1 and Sw2 as 802.1q trunks with
              only the required VLANs permitted.
            </span>
            <strong>
              <br />
            </strong>
          </p>
          <p>
            Only the VLAN 210 should be permitted on e0/2 of Sw1 &amp; Sw2 so
            that PC5 can communicate with PC6. There is no traffic for VLAN 110
            on this trunk link so we should not allow VLAN 110 to go through.
          </p>
          <p>On Sw1 &amp; Sw2:</p>
          <pre>
            Sw1+Sw2(config)#interface e0/2{"\n"}Sw1+Sw2(config-if)#switchport
            trunk encapsulation dot1q{"\n"}Sw1+Sw2(config-if)#switchport mode
            trunk{"\n"}Sw1+Sw2(config-if)#switchport trunk allowed vlan 210
          </pre>
          <p>
            Note: The above command “switchport trunk encapsulation dot1q” must
            be used on switch supports both ISL and 802.1Q trunking methods. If
            this command is not valid, just ignore it (because it only supports
            802.1Q so this is the only trunking method).
          </p>
          <p>
            <strong>Task 3. </strong>
            <span className="fontstyle0">
              Configure the e0/3 interfaces on Sw2 and Sw3 as 802.1q trunks with
              only the required VLANs permitted.
            </span>
          </p>
          <p>On Sw2 &amp; Sw3:</p>
          <pre>
            Sw2+Sw3(config)#interface e0/3{"\n"}Sw2+Sw3(config-if)#switchport
            trunk encapsulation dot1q{"\n"}Sw2+Sw3(config-if)#switchport mode
            trunk{"\n"}Sw2+Sw3(config-if)#switchport trunk allowed vlan 110,210
          </pre>
          <p>
            <strong>Verification</strong>
          </p>
          <p>
            We are not sure if the three laptops can be accessible. If they can
            then we should perform ping tests from them:
          </p>
          <p>
            PC5:\&gt; ping 10.10.3.2 -&gt; Ping must be successful
            <br />
            PC3:\&gt; ping 10.10.2.2 -&gt; Ping must be successful
          </p>
          <p>Don’t forget to save the configuration on all three switches:</p>
          <pre>SW1+SW2+Sw3#copy running-config startup-config</pre>
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

export default VlanTrunkingConfigurationSim;
