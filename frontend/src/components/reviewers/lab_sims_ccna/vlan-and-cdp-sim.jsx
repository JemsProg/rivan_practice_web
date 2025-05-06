import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanCdpSim = () => {
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
        <h1>VLAN and CDP Sim</h1>
        <div className="content">
          <p>
            <strong>Tasks</strong>
          </p>
          <p>
            R1 has been pre-configured with all the necessary commands. All
            physical cabling is in place and verified. Connectivity from PC1,
            PC3, and the Server must be established to the switches, and each
            port must only allow one VLAN.
          </p>
          <p>
            1. Configure the VLAN connecting to the switch port for PC3 with the
            name “SALES”
            <br />
            2. Configure the switch port connecting to Server1
            <br />
            3. Configure the switch port connecting to PC3
            <br />
            4. Ensure R1 discovers SW-1 via the Cisco proprietary neighbor
            discovery protocol and all other devices on the network are unable
            to discover SW-1
          </p>
          <p>
            <strong>Topology</strong>
          </p>
          <p>
            <img
              fetchpriority="high"
              decoding="async"
              className="aligncenter"
              src="https://www.9tut.com/images/ccna/labsim/VLAN_CDP_Sim/topology.jpg"
              alt="topology.jpg"
              width={389}
              height={413}
            />
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
                    You can practice this sim with our online simulator or
                    Packet Tracer at:
                    <br />+{" "}
                    <a
                      href="https://www.9tut.com/interactive_labs/premium/VLAN_and_CDP_Sim/"
                      target="_blank"
                      rel="noopener"
                    >
                      VLAN and CDP Online Simulator
                    </a>
                    <br />+{" "}
                    <a
                      href="https://www.9tut.com/lab_files/VLAN_CDP_Sim.zip"
                      target="_blank"
                      rel="noopener"
                    >
                      Packet Tracer file
                    </a>
                    . Please open it with Packet Tracer v8.1.1.0022 or newer.
                  </p>
                  <p>
                    Note: Packet Tracer switches do not support Ethernet
                    interfaces so we used FastEthernet interfaces instead. Also
                    E0/0 interfaces of Sw-1 &amp; Sw-2 were replaced by
                    FastEthernet0/10 as Packet Tracer switches do not have
                    FastEthernet0/0.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Task 1.</strong> Configure the VLAN connecting to the switch
            port for PC3 with the name “SALES”
          </p>
          <p>
            According to the information in the table, we learn that the switch
            port connected to PC3 (interface e0/3) belongs to VLAN 30 so we must
            name VLAN 30 “SALES”:
          </p>
          <pre>
            SW-2(config)#vlan 30{"\n"}SW-2(config-vlan)#name SALES{"\n"}
            SW-2(config-vlan)#exit //to apply the VLAN config
          </pre>
          <p>
            <strong>Task 2.</strong> Configure the switch port connecting to
            Server1
          </p>
          <p>
            Server1 is connected via VLAN 20 on e0/2 so we need to put this
            interface in access mode and assign VLAN 20 to this interface:
          </p>
          <pre>
            SW-2(config)#int e0/2{"\n"}SW-2(config-if)#switchport mode access
            {"\n"}SW-2(config-if)#switchport access vlan 20
          </pre>
          <p>
            <strong>Task 3.</strong> Configure the switch port connecting to PC3
          </p>
          <pre>
            SW-2(config-if)#int e0/3{"\n"}SW-2(config-if)#switchport mode access
            {"\n"}SW-2(config-if)#switchport access vlan 30{"\n"}
          </pre>
          <p>
            <strong>Task 4.</strong> Ensure R1 discovers SW-1 via the Cisco
            proprietary neighbor discovery protocol and all other devices on the
            network are unable to discover SW-1
          </p>
          <p>
            Some documents say that “If CDP is disabled globally, you cannot
            enable it on each interface using the “cdp enable” interface
            configuration mode command” so it is better to turn on CDP globally
            and on e0/0 then turning off CDP on e0/1 &amp; e0/2 -&gt; CDP only
            runs on e0/0:
          </p>
          <pre>
            SW-1(config)#cdp run{"\n"}SW-1(config)#int e0/0{"\n"}
            SW-1(config-if)#cdp enable{"\n"}SW-1(config-if)#exit{"\n"}
            SW-1(config)#int range e0/1 - 2{"\n"}SW-1(config-if)#no cdp enable
          </pre>
          <p>
            <strong>Save the configuration</strong>
          </p>
          <p>On both SW-1 and SW-2:</p>
          <pre>
            SW-1#copy running-config startup-config{"\n"}SW-2#copy
            running-config startup-config
          </pre>
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

export default VlanCdpSim;
