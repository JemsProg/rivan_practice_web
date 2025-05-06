import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanAndLacpSim2 = () => {
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
        <h1 className="text-3xl font-bold mb-4">Allowed, Native VLAN & LACP Sim 2</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-6">
          All physical cabling is in place and verified. Connectivity between all four switches must be established and operational. All ports are pre-configured as 802.1q trunks.
          <br />
          1. Configure both SW-1 and SW-2 ports e0/1 and e0/2 to permit only the allowed VLANs
          <br />
          2. Configure both SW-3 and SW-4 ports e0/2 to permit only the allowed VLANs
          <br />
          3. Configure both SW-1 and SW-2 e0/1 ports to send and receive untagged traffic over VLAN 99
          <br />
          4. Configure both SW-3 and SW-4 ports e0/0 and e0/1 for link aggregation using the industry standard protocol. All ports must immediately negotiate the link aggregation
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/Allowed_Native_VLAN_LACP_Sim_2/topology.jpg"
          alt="topology"
          width="266"
          height="308"
        />
      </div>

      {/* Initial Config Tables */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* SW1 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">SW1 Initial Config (use "show run" to get the config)</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface Ethernet0/1<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk<br />
              !<br />
              interface Ethernet0/2<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk
            </pre>
          </div>
          
          {/* SW2 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">SW2 Initial Config</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface Ethernet0/1<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk<br />
              !<br />
              interface Ethernet0/2<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk
            </pre>
          </div>
          
          {/* SW3 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">SW3 Initial Config</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface Ethernet0/0<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk<br />
              !<br />
              interface Ethernet0/1<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk<br />
              !<br />
              interface Ethernet0/2<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk
            </pre>
          </div>
          
          {/* SW4 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">SW4 Initial Config</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface Ethernet0/0<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk<br />
              !<br />
              interface Ethernet0/1<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk<br />
              !<br />
              interface Ethernet0/2<br />
              &nbsp;switchport trunk encapsulation dot1q<br />
              &nbsp;switchport mode trunk
            </pre>
          </div>
        </div>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure both SW-1 and SW-2 ports e0/1 and e0/2 to permit only the allowed VLANs
        </p>
        <p className="mb-2">On both SW-1 and SW-2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1,SW-2(config)#int range e0/1 - 2<br />
          SW-1,SW-2(config-if-range)#switchport trunk allowed vlan 56,77
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> Configure both SW-3 and SW-4 ports e0/2 to permit only the allowed VLANs
        </p>
        <p className="mb-2">On both SW-3 and SW-4:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-3,SW-4(config)#int e0/2<br />
          SW-3,SW-4(config-if)#switchport trunk allowed vlan 56,77
        </pre>
      </div>

      {/* Task 3 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 3.</strong> Configure both SW-1 and SW-2 e0/1 ports to send and receive untagged traffic over VLAN 99
        </p>
        <p className="mb-2">On both SW-1 and SW-2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1,SW-2(config)#int e0/1<br />
          SW-1,SW-2(config-if)#switchport trunk native vlan 99
        </pre>
      </div>

      {/* Task 4 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 4.</strong> Configure both SW-3 and SW-4 ports e0/0 and e0/1 for link aggregation using the industry standard protocol. All ports must immediately negotiate the link aggregation.
        </p>
        <p className="mb-4">
          "using the industry standard protocol" → use LACP.
          <br />
          "All ports must immediately negotiate the link aggregation" → so we use "active" mode on both sides.
        </p>
        <p className="mb-2">On both SW-3 and SW-4:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-3,SW-4(config)#int range e0/0 - 1<br />
          SW-3,SW-4(config-if)#channel-group 34 mode active
        </pre>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1#, SW-2#, SW3#, SW-4#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default VlanAndLacpSim2;