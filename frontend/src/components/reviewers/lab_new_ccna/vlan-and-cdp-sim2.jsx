import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanCdpSim2 = () => {
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
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-4">VLAN & CDP Sim 2</h1>
      </div>

      {/* Guidelines */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-6">
          All physical cabling is in place and verified. Connectivity for
          PC1, PC2 and PC3 must be established to the switches. Each port
          connecting to the PCs must be configured as an end-user port and
          only allow the designated VLAN.
        </p>
      </div>

      {/* Task List */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2">
          <strong>1.</strong> Configure VLAN 99 on all three switches and label it exactly as FINANCIAL
        </p>
        <p className="mb-2">
          <strong>2.</strong> Configure the switch ports connecting to PC1, PC2 and PC3
        </p>
        <p className="mb-2">
          <strong>3.</strong> Cisco's neighbor discovery protocol has been disabled on SW-1 and must be re-enabled
        </p>
        <p className="mb-4">
          <strong>4.</strong> PC1 must not be able to discover SW-1
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/VLAN_CDP_Sim_2/topology.jpg"
          alt="topology"
          width="332"
          height="403"
        />
      </div>

     

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure VLAN 99 on all three switches and label it exactly as FINANCIAL
        </p>
        <p className="mb-2">On three switches SW-1, SW-2 and SW-3:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1#, SW-2#, SW-3#conf t<br />
          SW-1#, SW-2#, SW-3(config)#vlan 99<br />
          SW-1#, SW-2#, SW-3(config-vlan)#name FINANCIAL<br />
          SW-1#, SW-2#, SW-3(config-vlan)#exit //to apply the VLAN
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2">
          <strong>Task 2.</strong> Configure the switch ports connecting to PC1, PC2 and PC3
        </p>
        <p className="mb-2">
          From the topology, we see PC1 & PC3 belong to VLAN 99 so we assign these PCs to this VLAN first:
        </p>
        <p className="mb-2">On SW-1 and SW-3:</p>
        <pre className="bg-gray-100 p-4 rounded mb-2 whitespace-pre-wrap text-sm">
          SW-1#, SW-3(config)#interface e0/2<br />
          SW-1#, SW-3(config-if)#switchport mode access<br />
          SW-1#, SW-3(config-if)#switchport access vlan 99
        </pre>
        <p className="mb-2">
          But PC2 is assigned to VLAN "DEFAULT" so we must check the correspondent VLAN number of this VLAN with "show vlan" command on PC2.
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-2 whitespace-pre-wrap text-sm">
          SW-2#<strong>show vlan</strong><br />
          VLAN Name                             Status    Ports<br />
          ---- -------------------------------- --------- -------------------------------<br />
          <strong>1     default</strong>                          active    E0/2, E0/3
        </pre>
        <p className="mb-2">So suppose "DEFAULT" is VLAN 1. On SW-2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-2#(config)#interface e0/2<br />
          SW-2(config-if)#switchport mode access<br />
          SW-2(config-if)#switchport access vlan 1 //in fact we don't need this command
        </pre>
        <p className="mb-4">
          In fact we don't need the last command as all access ports are assigned to this VLAN initially.
        </p>
      </div>

      {/* Task 3 */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2">
          <strong>Task 3.</strong> Cisco's neighbor discovery protocol has been disabled on SW-1 and must be re-enabled
        </p>
        <p className="mb-2">On SW-1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW-1(config)#cdp run
        </pre>
        <p className="mb-2"><strong>Verification</strong></p>
        <p className="mb-2">On SW-2 we should check if it can see SW-1</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw-2#<strong>show cdp neighbors</strong><br />
          Capability Codes: R - Router, T - Trans Bridge, B - Source Route Bridge<br />
                          S - Switch, H - Host, I - IGMP, r - Repeater, P - Phone<br />
          Device ID    Local Intrfce   Holdtme    Capability   Platform    Port ID<br />
          <strong>Sw-1</strong>         Et 0/0           125                    3560        Et 0/0<br />
          Sw-3         Et 0/1           125                    3560        Et 0/1
        </pre>
      </div>

      {/* Task 4 */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2">
          <strong>Task 4.</strong> PC1 must not be able to discover SW-1
        </p>
        <p className="mb-2">Turn off CDP on E0/2 interface on SW-1 only:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW-1(config)#interface e0/2<br />
          SW-1(config)#no cdp enable
        </pre>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2"><strong>Save the configuration</strong></p>
        <p className="mb-2">On all three switches:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-1#, SW-2#, SW-3#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default VlanCdpSim2;