import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const OspfConfigSim3 = () => {
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
        <h1 className="text-3xl font-bold mb-4">OSPF Configuration Sim 3</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-6">
          Refer to the topology. All physical cabling is in place. Routers 2 and 3 are
          inaccessible. Configure OSPF routing for the network and ensure R1 has
          joined Area 0 without using network statements.
        </p>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure OSPF on R1 with a process ID and router-ID only as follows:
        </p>
        <p className="mb-4">
          – use process ID 33<br />
          – use E0/1 IP as the router ID
        </p>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2</strong>
        </p>
        <p className="mb-4">
          – Configure R1 to establish neighbor adjacencies with R2 and R3. The network
          statement under the OSPF process must not be used.
          <br />– Configure R1 to always become the DR for Area 0
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/OSPF_Configuration_Sim_3/topology.jpg"
          alt="topology"
          width="299"
          height="266"
        />
      </div>


      {/* Task 1 Solution */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure OSPF on R1 with a process ID and router-ID only as follows:
          <br />
          – use process ID 33
          <br />– use E0/1 IP as the router ID
        </p>
        <p className="mb-2">
          First use the "show ip interface brief" command on R1 to get the E0/1 IP
          address:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1#<strong>show ip interface brief</strong><br />
          Interface              IP-Address      OK? Method Status                Protocol<br />
          Ethernet0/0            10.0.22.1       YES Manual     up                      up<br />
          <strong>Ethernet0/1</strong>            <strong>10.0.33.1</strong>       YES Manual     up                      up
        </pre>
        <p className="mb-4">
          -&gt; The IP address of E0/1 is 10.0.33.1 so we will use it to configure the
          OSPF router ID.
        </p>
        <p className="mb-4">
          Note: Please check the IP address of E0/1 interface carefully as the IP
          address may be different.
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config)#router ospf 33<br />
          R1(config-router)#router-id 10.0.33.1
        </pre>
      </div>

      {/* Task 2 Solution */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2</strong>
          <br />
          – Configure R1 to establish neighbor adjacencies with R2 and R3. The network
          statement under the OSPF process must not be used.
          <br />– Configure R1 to always become the DR for Area 0
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config-router)#exit<br />
          R1(config)#interface e0/0<br />
          R1(config-if)#ip ospf 33 area 0<br />
          R1(config-if)#ip ospf priority 255<br />
          R1(config-if)#interface e0/1<br />
          R1(config-if)#ip ospf 33 area 0<br />
          R1(config-if)#ip ospf priority 255
        </pre>
      </div>

      {/* Verification */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Verification</strong></p>
        <p className="mb-2">
          We should clear the current OSPF process to make sure DR is elected again.
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config-if)#exit<br />
          R1(config)#exit<br />
          R1#clear ip ospf process<br />
          Reset ALL OSPF processes? [no]: y
        </pre>
        <p className="mb-2">
          Then verify with the "show ip ospf neighbor" or "show ip ospf interface"
          command:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1#<strong>show ip ospf neighbor</strong><br />
          Neighbor ID     Pri   State           Dead Time   Address         Interface<br />
          10.2.2.2          1   FULL/BDR        00:00:35    10.0.22.2       GigabitEthernet0/0<br />
          10.3.3.3          1   FULL/BDR        00:00:35    10.0.33.3       GigabitEthernet0/1<br />
          <br />
          or<br />
          R1#<strong>show ip ospf interface</strong><br />
          <br />
          Ethernet0/0 is up, line protocol is up<br />
            Internet address is 10.0.22.1/30, Area 0<br />
            Process ID 33, Router ID 10.0.33.1, Network Type BROADCAST, Cost: 1<br />
            Transmit Delay is 1 sec, <strong>State DR</strong>, Priority 255<br />
          ...<br />
          Ethernet0/1 is up, line protocol is up<br />
            Internet address is 10.0.33.1/29, Area 0<br />
            Process ID 33, Router ID 10.0.33.1, Network Type BROADCAST, Cost: 1<br />
            Transmit Delay is 1 sec, <strong>State DR</strong>, Priority 255
        </pre>
        <p className="mb-6">
          -&gt; Interfaces E0/0 & E0/1 of R1 are DRs.
        </p>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default OspfConfigSim3;