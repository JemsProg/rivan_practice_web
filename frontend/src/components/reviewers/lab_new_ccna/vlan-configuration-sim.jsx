import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanConfigSim = () => {
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
        <h1 className="text-3xl font-bold mb-4">VLAN Configuration Sim</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-6">
          All physical cabling is in place and verified. Connectivity for the Switches on ports E0/1, E0/2, and E0/3 must be configured and available for voice and data capabilities.
          <br />
          1. Configure Sw1 and Sw2 with the VLAN naming as indicated.
          <br />
          2. Assign the VLANs to the appropriate interfaces and set a non-trunking, non-tagged, single-VLAN for each interface according to the topology.
          <br />
          3. Configure both switches to use the L2 vendor-neutral discovery protocol to broadcast device information, including the native VLAN across the e0/0 interfaces.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/VLAN_Configuration_Sim/topology.jpg"
          alt="topology"
          width="420"
          height="186"
        />
      </div>


      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure Sw1 and Sw2 with the VLAN naming as indicated.
        </p>
        <p className="mb-2">On both Sw1 & Sw2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw1,Sw2(config)#vlan 77<br />
          Sw1,Sw2(config-vlan)#name IT_User_VLAN<br />
          Sw1,Sw2(config-vlan)#vlan 88<br />
          Sw1,Sw2(config-vlan)#name HR_User_VLAN<br />
          Sw1,Sw2(config-vlan)#vlan 177<br />
          Sw1,Sw2(config-vlan)#name IT_Voice_VLAN<br />
          Sw1,Sw2(config-vlan)#vlan 188<br />
          Sw1,Sw2(config-vlan)#name HR_Voice_VLAN<br />
          Sw1,Sw2(config-vlan)#exit //to apply the VLAN names above
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> Assign the VLANs to the appropriate interfaces and set a non-trunking, non-tagged, single-VLAN for each interface according to the topology.
        </p>
        <p className="mb-4">
          "non-trunking, non-tagged, single-VLAN" so we have to use access mode for these interfaces.
        </p>
        <p className="mb-2">On Sw1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          Sw1(config)#interface range e0/1 - 2<br />
          Sw1(config-if-range)#switchport mode access<br />
          Sw1(config-if-range)#switchport access vlan 77<br />
          Sw1(config-if-range)#interface e0/3<br />
          Sw1(config-if)#switchport mode access<br />
          Sw1(config-if)#switchport access vlan 88<br />
          Sw1(config-if)#switchport voice vlan 188<br />
          Sw1(config-if)#interface e0/1<br />
          Sw1(config-if)#switchport voice vlan 177
        </pre>
        <p className="mb-2">On Sw2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw1(config)#interface e0/3<br />
          Sw1(config-if)#switchport mode access<br />
          Sw1(config-if)#switchport access vlan 77<br />
          Sw1(config-if)#interface e0/1<br />
          Sw1(config-if)#switchport mode access<br />
          Sw1(config-if)#switchport access vlan 88<br />
          Sw1(config-if)#switchport voice vlan 188<br />
          Sw1(config-if)#interface e0/2<br />
          Sw1(config-if)#switchport voice vlan 177
        </pre>
      </div>

      {/* Task 3 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 3.</strong> Configure both switches to use the L2 vendor-neutral discovery protocol to broadcast device information, including the native VLAN across the e0/0 interfaces.
        </p>
        <p className="mb-2">On both Sw1 & Sw2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw1,Sw2(config)#lldp run<br />
          Sw1,Sw2(config)#int e0/0<br />
          Sw1,Sw2(config-if)#lldp transmit<br />
          Sw1,Sw2(config-if)#lldp receive
        </pre>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw1,Sw2#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default VlanConfigSim;