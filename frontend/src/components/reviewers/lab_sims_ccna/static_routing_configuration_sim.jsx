import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import topology from "./assets/topology.jpg";
import Accordion from "../Accordion";

const StaticRoutingConfigurationSim = () => {
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
      <h1 className="text-2xl font-bold mb-6">
        Static Routing Configuration Sim
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Topology</h2>
        <img
          decoding="async"
          src={topology}
          alt="Static Routing Configuration Topology"
          className="w-full max-w-md mx-auto mb-6 rounded shadow"
        />

        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <p className="mb-4">
          Connectivity between four routers has been established. IP
          connectivity must be configured in the order presented to complete the
          implementation. No dynamic routing protocols are included.
        </p>
        <ol className="list-decimal list-inside mb-6 space-y-1">
          <li>
            Configure static routing using host routes to establish connectivity
            from router R3 to the router R1 Loopback address using the source IP
            of 209.165.200.230.
          </li>
          <li>
            Configure an IPv4 default route on router R2 destined for router R4.
          </li>
          <li>
            Configure an IPv6 default route on router R2 destined for router R4.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Solution</h2>
        <table className="table-auto w-full bg-green-100 border border-gray-300 mb-6">
          <tbody>
            <tr>
              <td className="w-full p-4">
                <p>
                  You can practice this sim with our online simulator or Packet
                  Tracer at:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <a
                      href="https://www.9tut.com/interactive_labs/premium/Static_Routing_Configuration_Sim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Static Routing Configuration Online Simulator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.9tut.com/lab_files/Static_Routing_Configuration_Sim.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Packet Tracer file
                    </a>
                  </li>
                </ul>
                <p className="mt-2 text-sm">
                  Please open it with Packet Tracer v8.1.1.0022 or newer. Packet
                  Tracer routers do not support Ethernet interfaces, so we used
                  GigabitEthernet interfaces instead.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="italic mb-4">
          Note: A host route is an IPv4 address with a 32-bit mask.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Task 1</h2>
          <p>
            Configure all static routes so that R3 can ping Loopback 1 of R1:
          </p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R3(config)# ip route 192.168.1.1 255.255.255.255 209.165.200.229
            R2(config)# ip route 192.168.1.1 255.255.255.255 209.165.200.225
            R1(config)# ip route 209.165.200.230 255.255.255.255 209.165.200.226
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Verification</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R3# ping 192.168.1.1 .!!!!
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Task 2</h2>
          <p>Configure an IPv4 default route on router R2:</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R2(config)# ip route 0.0.0.0 0.0.0.0 209.165.202.130
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Task 3</h2>
          <p>Configure an IPv6 default route on router R2:</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R2(config)# ipv6 route ::/0 2001:db8:abcd::2
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Save the configuration</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R1# copy running-config startup-config R2# copy running-config
            startup-config R3# copy running-config startup-config
          </pre>
        </div>
      </section>

      {/* Accordion */}
      <div data-animate className="mt-12 transform opacity-0 translate-y-8">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default StaticRoutingConfigurationSim;
