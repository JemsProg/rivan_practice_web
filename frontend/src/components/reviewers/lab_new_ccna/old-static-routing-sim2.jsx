import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const OldStaticRoutingSim2 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
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
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-4">
          Static Routing Configuration Sim 2
        </h1>
      </div>

      {/* Topology Overview */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-4">
          <strong>Topology</strong>
        </p>
        <p className="mb-6">
          IP connectivity and OSPF are preconfigured on all devices where
          necessary. Do not make any changes to the IP addressing or OSPF. The
          company policy uses connected interfaces and next hops when
          configuring static routes except for load balancing or redundancy
          without floating static. Connectivity must be established between
          subnet 172.20.20.128/25 on the Internet and the LAN at 192.168.0.0/24
          connected to SW1:
          <br />
          <br />
          1. Configure reachability to the switch SW1 LAN subnet in router R2.
          <br />
          2. Configure default reachability to the Internet subnet in router R1.
          <br />
          3. Configure a single static route in router R2 to reach to the
          Internet subnet considering both redundant links between routers R1
          and R2. A default route is NOT allowed in router R2.
          <br />
          4. Configure a static route in router R1 toward the switch SW1 LAN
          subnet where the primary link must be through Ethernet0/1, and the
          backup link must be through Ethernet0/2 using a floating route. Use
          the minimal administrative distance value when required.
        </p>
      </div>

      {/* Topology Image */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="flex justify-center mb-8"
      >
        <img
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/Static_Routing_Configuration_Sim_2/topology.jpg"
          alt="topology"
          width="410"
          height="62"
        />
      </div>

      {/* Task 1 Solution */}
      <div data-animate style={{ opacity: 0, transform: "trabslateY(30px)" }}>
        <p className="mb-2">
          <strong>Task 1. </strong>Configure reachability to the switch SW1 LAN
          subnet in router R2.<strong></strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2(config)#ip route 192.168.0.0 255.255.255.0 e0/0 10.10.31.1
        </pre>

        <p className="mb-2">
          Note: We have to configure both connected interface and next hop as
          requested (&ldquo;The company policy uses connected interfaces and
          next hops when configuring static routes&rdquo;):
        </p>
        <p className="mb-2">
          Maybe there is a default route to the Internet on each router so we
          don&rsquo;t need to configure the return path.
        </p>
        <p className="mb-2">
          <strong>Verification</strong>
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R3#ping 192.168.0.1 .!!!!
        </pre>
      </div>

      {/* Task 2 Solution */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2">
          <strong>Task 2. </strong>Configure default reachability to the
          Internet subnet in router R1.
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config)#ip route 0.0.0.0 0.0.0.0 e0/0 10.10.13.3
        </pre>
      </div>

      {/* Task 3 Solution */}
      <p className="mb-2">
        <strong>Task 3.</strong> Configure a single static route in router R2 to
        reach to the Internet subnet considering both redundant links between
        routers R1 and R2. A default route is NOT allowed in router R2.
      </p>
      <p className="mb-2">
        We don&rsquo;t understand why it asks using a single static route while
        considering both redundant links because we will need two commands for
        two links:
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
        R2(config)#ip route 172.20.20.128 255.255.255.128 10.10.12.129
        R2(config)#ip route 172.20.20.128 255.255.255.128 10.10.12.1
      </pre>

      {/* Task 4 Solution */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2">
          <strong>Task 4.</strong> Configure a static route in router R1 toward
          the switch SW1 LAN subnet where the primary link must be through
          Ethernet0/1, and the backup link must be through Ethernet0/2 using a
          floating route. Use the minimal administrative distance value when
          required.
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config)#ip route 192.168.0.0 255.255.255.0 10.10.12.2 <br />
          R1(config)#ip <br />
          route 192.168.0.0 255.255.255.0 10.10.12.130 2
        </pre>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <p className="mb-2 text-blue-600 font-semibold">
          Save the configuration
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#, R2#, R3#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12"
      >
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default OldStaticRoutingSim2;
