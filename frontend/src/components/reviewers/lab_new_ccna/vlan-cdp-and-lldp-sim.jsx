import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanCdpLldpSim = () => {
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
        <h1 className="text-3xl font-bold mb-4">VLAN, CDP & LLDP Sim</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-6">
          R1 and R2 are pre-configured with all the necessary commands. All physical
          cabling is in place and verified. Connectivity for PC1 and PC2 must be
          established to the switches; each port must only allow one VLAN and be
          operational.
        </p>
      </div>

      {/* Task List */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>1.</strong> Configure SW-1 with VLAN 15 and label it exactly as OPS
        </p>
        <p className="mb-2">
          <strong>2.</strong> Configure SW-2 with VLAN 66 and label it exactly as ENGINEERING
        </p>
        <p className="mb-2">
          <strong>3.</strong> Configure the switch port connecting to PC1
        </p>
        <p className="mb-2">
          <strong>4.</strong> Configure the switch port connecting to PC2
        </p>
        <p className="mb-6">
          <strong>5.</strong> Configure the E0/2 connections on SW-1 and SW-2 for neighbor discovery
          using the vendor-neutral standard protocol and ensure that e0/0 on both
          switches uses the Cisco proprietary protocol
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/VLAN_CDP_LLDP_Sim/topology.jpg"
          alt="topology"
          width="486"
          height="544"
        />
      </div>

   

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure SW-1 with VLAN 15 and label it exactly as OPS
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1(config)#vlan 15<br />
          SW-1(config-vlan)#name OPS<br />
          SW-1(config-vlan)#exit //To apply the VLAN configured
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> Configure SW-2 with VLAN 66 and label it exactly as ENGINEERING
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-2(config)#vlan 66<br />
          SW-2(config-vlan)#name ENGINEERING<br />
          SW-2(config-vlan)#exit //To apply the VLAN configured
        </pre>
      </div>

      {/* Task 3 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 3.</strong> Configure the switch port connecting to PC1
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1(config)#int e0/1<br />
          SW-1(config-if)#switchport mode access<br />
          SW-1(config-if)#switchport access vlan 15
        </pre>
      </div>

      {/* Task 4 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 4.</strong> Configure the switch port connecting to PC2
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-2(config)#int e0/1<br />
          SW-2(config-if)#switchport mode access<br />
          SW-2(config-if)#switchport access vlan 66
        </pre>
      </div>

      {/* Task 5 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 5.</strong> Configure the E0/2 connections on SW-1 and SW-2 for
          neighbor discovery using the vendor-neutral standard protocol and ensure
          that e0/0 on both switches uses the Cisco proprietary protocol
        </p>
        <p className="mb-4">
          "neighbor discovery using the vendor-neutral standard protocol" means LLDP
          while "Cisco proprietary protocol" means CDP.
        </p>
        <p className="mb-2">
          First we will enable both LLDP and CDP global and enable LLDP on interface
          e0/2. We also disable CDP on this interface.
        </p>
        <p className="mb-2">On both SW-1 and SW-2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW-1,SW-2(config)#lldp run<br />
          SW-1,SW-2(config)#cdp run<br />
          SW-1,SW-2(config)#int e0/2<br />
          SW-1,SW-2(config-if)#lldp transmit<br />
          SW-1,SW-2(config-if)#lldp receive<br />
          SW-1,SW-2(config-if)#no cdp enable //we need this command as CDP is enabled by default
        </pre>
        <p className="mb-2">
          Then we will configure CDP on interface e0/0 of both switches while
          disabling LLDP on this interface. Although CDP is enabled by default but we
          turn it on E0/0 to be on the safe side:
        </p>
        <p className="mb-2">On both SW-1 and SW-2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1,SW-2(config)#int e0/0<br />
          SW-1,SW-2(config-if)#no lldp transmit<br />
          SW-1,SW-2(config-if)#no lldp receive<br />
          SW-1,SW-2(config-if)#cdp enable
        </pre>
      </div>

      {/* Verification */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Verification</strong></p>
        <p className="mb-4">
          We will see Sw-2 is the CDP neighbor of Sw-1 with the "show cdp neighbors" command:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          Sw-1#<strong>show cdp neighbors</strong><br />
          Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge<br />
                          S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone<br />
          Device ID    Local Intrfce   Holdtme    Capability   Platform    Port ID<br />
          <strong>Sw-2</strong>         Et 0/0           125                    3560        Et 0/0
        </pre>
        <p className="mb-4">-&gt; Sw-1 only sees Sw-2 as the CDP neighbor.</p>
        <p className="mb-4">
          Maybe R1 and R2 have been configured with LLDP so we will see R1 is the LLDP
          neighbor of Sw-1 with the "show lldp neighbors" command:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw-1#<strong>show lldp neighbors</strong><br />
          Capability codes:<br />
              (R) Router, (B) Bridge, (T) Telephone, (C) DOCSIS Cable Device<br />
              (W) WLAN Access Point, (P) Repeater, (S) Station, (O) Other<br />
          Device ID           Local Intf     Hold-time  Capability      Port ID<br />
          <strong>R1</strong>                  Et0/2          120        R               Et0/0
        </pre>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw-1#copy running-config startup-config<br />
          Sw-2#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default VlanCdpLldpSim;