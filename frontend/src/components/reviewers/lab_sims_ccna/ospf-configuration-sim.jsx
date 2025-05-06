import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import topology from "./assets/topology.jpg";
import Accordion from "../Accordion";

const OspfConfigurationSim = () => {
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
      <h1 className="text-2xl font-bold mb-6">OSPF Configuration Sim</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Guidelines</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>
            This is a lab item in which tasks will be performed on virtual
            devices.
          </li>
          <li>
            Refer to the <strong>Tasks</strong> tab to view the tasks for this
            lab item.
          </li>
          <li>
            Refer to the <strong>Topology</strong> tab to access the device
            console(s).
          </li>
          <li>Console access is available via device icons or console tabs.</li>
          <li>All necessary preconfigurations have been applied.</li>
          <li>Do not change the enable password or hostname.</li>
          <li>
            <strong>Save your configurations</strong> to NVRAM before moving on.
          </li>
          <li>
            Click <strong>Next</strong> to submit and proceed; labs cannot be
            reopened.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Topology</h2>
        <img
          decoding="async"
          src={topology}
          alt="OSPF Topology"
          className="w-full max-w-lg mx-auto mb-6 rounded shadow"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            Configure R1 and R2 router IDs using the shared link interface IPs.
          </li>
          <li>
            On R2, set OSPF priority to 255 on interfaces to R1 and R3 (R2 as
            DR). Keep defaults on R1 and R3 facing R2. Clear OSPF and verify.
          </li>
          <li>
            Advertise all Loopback1 networks with a host wildcard mask
            (0.0.0.0).
          </li>
          <li>
            On R1 and R3, set the R1–R3 link to point-to-point to disable
            additional routers.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Solution</h2>
        <table className="table-auto w-full bg-green-100 border border-gray-300 mb-6">
          <tbody>
            <tr>
              <td className="p-4">
                <p className="mb-2">Practice online or in Packet Tracer:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <a
                      href="https://www.9tut.com/interactive_labs/premium/OSPF_Configuration_Sim/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      OSPF Configuration Online Simulator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.9tut.com/lab_files/OSPF_Configuration_Sim.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Packet Tracer file
                    </a>
                  </li>
                </ul>
                <p className="text-sm mt-2">
                  Use Packet Tracer v8.1.1.0022+. Ethernet is simulated as
                  GigabitEthernet.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="italic">
          Note: Host wildcard mask of 0.0.0.0 matches exactly one IP.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <div>
          <h2 className="text-lg font-semibold">Task 1</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R1(config)# router ospf 1 R1(config-router)# router-id 10.10.12.1
            R2(config)# router ospf 1 R2(config-router)# router-id 10.10.12.2
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Verification</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R1# clear ip ospf process R1# show ip ospf R2# clear ip ospf process
            R2# show ip ospf
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Task 2</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R2(config)# interface e0/0 R2(config-if)# ip ospf priority 255
            R2(config-if)# interface e0/2 R2(config-if)# ip ospf priority 255
          </pre>
          <p className="mt-2">Then:</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R2# clear ip ospf process R2# show ip ospf neighbor
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Task 3</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R1(config)# router ospf 1 R1(config-router)# network 192.168.1.1
            0.0.0.0 area 0 R2(config)# router ospf 1 R2(config-router)# network
            192.168.2.2 0.0.0.0 area 0 R3(config)# router ospf 1
            R3(config-router)# network 192.168.3.3 0.0.0.0 area 0
          </pre>
          <p className="mt-2">Verify with:</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R3# show ip route ospf
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Task 4</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R1(config)# interface e0/1 R1(config-if)# ip ospf network
            point-to-point R3(config)# interface e0/1 R3(config-if)# ip ospf
            network point-to-point
          </pre>
          <p className="mt-2">Verify neighbors:</p>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            R3# show ip ospf neighbor
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

export default OspfConfigurationSim;
