import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const StaticRoutingConfigSim6 = () => {
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
        <h1 className="text-3xl font-bold mb-4">Static Routing Configuration Sim 6</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-6">
          Refer to the topology. All physical cabling is in place. Routers R3 and R4 are fully configured and inaccessible. Configure static routes for various connectivity to the ISP and the LAN, which resides on R4.
          <br />
          1. Configure a default route on R2 to the ISP
          <br />
          2. Configure a default route on R1 to the ISP
          <br />
          3. Configure R2 with a route to the Server at 10.0.41.10
          <br />
          4. Configure R1 with a route to the LAN that prefers R3 as the primary path to the LAN
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/Static_Routing_Configuration_Sim_3/topology.jpg"
          alt="topology"
          width="394"
          height="513"
        />
      </div>

      {/* Initial Config Tables */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* R1 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">R1 Initial Config</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface Ethernet0/0<br />
              &nbsp;ip address 10.0.12.1 255.255.255.252<br />
              !<br />
              interface Ethernet0/1<br />
              &nbsp;ip address 10.0.13.1 255.255.255.224<br />
              !<br />
              (no OSPF config)
            </pre>
          </div>
          
          {/* R2 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">R2 Initial Config</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface GigabitEthernet0/0<br />
              &nbsp;ip address 10.0.12.2 255.255.255.252<br />
              &nbsp;ip ospf 1 area 0<br />
              !<br />
              interface GigabitEthernet0/1<br />
              &nbsp;ip address 10.0.24.2 255.255.255.248<br />
              &nbsp;ip ospf 1 area 0<br /><br />
              interface GigabitEthernet0/2<br />
              &nbsp;ip address 209.165.200.226 255.255.255.248<br />
              !<br />
              router ospf 1<br />
              &nbsp;log-adjacency-changes
            </pre>
          </div>
        </div>
      </div>

    

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 1</strong>. Configure a default route on R2 to the ISP</p>
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R2(config)#ip route 0.0.0.0 0.0.0.0 209.165.200.225
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 2</strong>. Configure a default route on R1 to the ISP</p>
        <p className="mb-4">
          We must find out the IP address of E0/0 of R2 so on R2 use the "show ip interface brief" command
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2#<strong>show ip interface brief</strong><br />
          Interface        IP-Address       OK? Method Status       Protocol<br />
          <strong>Ethernet0/0      10.0.12.2</strong>        YES NVRAM  up           up<br />
          Ethernet0/1      10.0.24.2        YES NVRAM  up           up<br />
          Ethernet0/2      209.165.200.226  YES NVRAM  up           up<br />
          Ethernet0/3      unassigned       YES NVRAM  up           up
        </pre>
        <p className="mb-4">
          We find out the IP address of E0/0 is <strong>10.0.12.2</strong> then we will use it as the destination IP address for the default route on R1:
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config)#ip route 0.0.0.0 0.0.0.0 10.0.12.2
        </pre>
      </div>

      {/* Task 3 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 3</strong>. Configure R2 with a route to the Server at 10.0.41.10</p>
        <p className="mb-4">
          We cannot access R4 so we can configure a static route with exit interface instead next-hop IP:
        </p>
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R2(config)#ip route 10.0.41.10 255.255.255.255 e0/1
        </pre>
      </div>

      {/* Task 4 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 4</strong>. Configure R1 with a route to the LAN that prefers R3 as the primary path to the LAN</p>
        <p className="mb-4">
          R3 is inaccessible so we use exit interface too.
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config)#ip route 10.0.41.0 255.255.255.0 e0/1
        </pre>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#, R2#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default StaticRoutingConfigSim6;