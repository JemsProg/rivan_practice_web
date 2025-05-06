import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const OspfConfigSim2 = () => {
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
        <h1 className="text-3xl font-bold mb-4">OSPF Configuration Sim 2</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure OSPF Area 0 with Process ID 110 on all devices under their respective interfaces connected to VLAN101.
        </p>
        <p className="mb-4">
          To accomplish this, do not use the network command under the OSPF process.
        </p>
        <p className="mb-6">
          <strong>Task 2.</strong> Configure R1 to always be the DR and Sw101 always to be the BDR.
          <br />R2 and R3 should be configured not to participate in the DR/BDR election.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/OSPF_Configuration_Sim_2/topology.jpg"
          alt="topology"
          width="311"
          height="473"
        />
      </div>

      {/* Note */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6">
        <p className="mb-4">
          Note: There is a mistake in this sim: interface E0/2 of R1 and interface VLAN101 of Sw101 have the same IP address of 10.101.101.1/24.
        </p>
      </div>

      

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure OSPF Area 0 with Process ID 110 on all devices under their respective interfaces connected to VLAN101. To accomplish this, do not use the network command under the OSPF process.
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config)#interface e0/2<br />
          R1(config-if)#ip ospf 110 area 0
        </pre>
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2(config)#interface e0/1<br />
          R2(config-if)#ip ospf 110 area 0
        </pre>
        <p className="mb-2">On R3:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R3(config)#interface e0/0<br />
          R3(config-if)#ip ospf 110 area 0
        </pre>
        <p className="mb-2">On Sw101:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw101(config)#interface vlan101<br />
          Sw101(config-if)#ip ospf 110 area 0
        </pre>
      </div>

      {/* Verification 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Verification</strong></p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW101#sh ip ospf neighbor<br />
          Neighbor ID     Pri   State           Dead Time   Address         Interface<br />
          10.3.3.3          1   FULL/BDR        00:00:36    10.101.101.3    Vlan101<br />
          10.1.1.1          1   FULL/DROTHER    00:00:30    10.101.101.1    Vlan101<br />
          10.2.2.2          1   FULL/DROTHER    00:00:32    10.101.101.2    Vlan101
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> Configure R1 to always be the DR and Sw101 always to be the BDR. R2 and R3 should be configured not to participate in the DR/BDR election.
        </p>
        <p className="mb-4">
          On R1, we need to set the OSPF priority of 255 (highest) so that R1 is always the DR. On Sw101, we set the OSPF priority of 254 or any lower value which is different from 0 so that Sw101 is always the BDR.
        </p>
        <p className="mb-2">On R1 (Suppose we are still under interface E0/2):</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config-if)#ip ospf priority 255
        </pre>
        <p className="mb-2">On Sw101 (Suppose we are still under interface Vlan101):</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          Sw101(config-if)#ip ospf priority 254
        </pre>
        <p className="mb-4">
          R2 & R3 do not participate in DR/BDR election so we set their OSPF priority to 0:
        </p>
        <p className="mb-2">On R2 (Suppose we are still under interface E0/1):</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2(config-if)#ip ospf priority 0
        </pre>
        <p className="mb-2">On R3 (Suppose we are still under interface E0/0):</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R3(config-if)#ip ospf priority 0
        </pre>
        <p className="mb-2">We should clear the OSPF process on Sw101 to see the result:</p>
        <p className="mb-2">On Sw101</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw101(config-if)#exit<br />
          Sw101(config)#exit<br />
          Sw101#clear ip ospf process<br />
          Reset ALL OSPF processes? [no]: y
        </pre>
        <p className="mb-4">
          Note: We can use the "do clear ip ospf process" command instead using two "exit" commands above.
        </p>
      </div>

      {/* Verification 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Verification</strong></p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1#show ip ospf neighbor<br />
          Neighbor ID     Pri   State           Dead Time   Address         Interface<br />
          10.2.2.2          0   FULL/DROTHER    00:00:36    10.101.101.2    Vlan101<br />
          10.3.3.3          0   FULL/DROTHER    00:00:30    10.101.101.3    Vlan101<br />
          10.1.1.1        255   FULL/DR         00:00:35    10.101.101.1    Vlan101
        </pre>
        <p className="mb-6">
          -&gt; R1 (10.1.1.1) is now the DR. R2 (10.2.2.2) & R3 (10.3.3.3) are DOTHERs so we can deduce Sw101 is BDR.
        </p>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#, R2#, R3#, Sw101#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default OspfConfigSim2;