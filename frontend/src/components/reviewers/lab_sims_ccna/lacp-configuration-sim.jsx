import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const LacpConfigurationSim = () => {
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
      <h1 className="text-2xl font-bold mb-6">LACP Configuration Sim</h1>

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
          src="https://www.9tut.com/images/ccna/labsim/LACP_Configuration_Sim/LACP_topology.jpg"
          alt="LACP Topology"
          className="w-full max-w-md mx-auto mb-6 rounded shadow"
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tasks</h2>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>
            Configure an LACP EtherChannel number 44 between SW1 and SW2 using
            interfaces Ethernet0/0 and Ethernet0/1 on both switches with
            matching modes.
          </li>
          <li>Set the EtherChannel to trunk mode.</li>
          <li>Enable 802.1q encapsulation on the trunk link.</li>
          <li>
            Configure VLAN 'MONITORING' as the native (untagged) VLAN on the
            EtherChannel.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Solution</h2>
        <div className="bg-green-100 border border-gray-300 p-4 rounded mb-6">
          <p className="mb-2">
            Download the Packet Tracer file{" "}
            <a
              href="https://www.9tut.com/lab_files/LACP_Configuration_Sim.zip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              here
            </a>{" "}
            and open in Packet Tracer v8.1.1.0022+.
          </p>
          <p className="text-sm">
            Packet Tracer uses FastEthernet instead of Ethernet. E0/0 was
            replaced by FastEthernet0/2.
          </p>
        </div>
      </section>

      <section className="space-y-6 mb-8">
        <div>
          <h2 className="text-lg font-semibold">Tasks 1–3</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            SW1, SW2: interface range FastEthernet0/0 - 1 channel-group 44 mode
            active no shutdown interface Port-channel44 switchport mode trunk
            switchport trunk encapsulation dot1q
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Task 4</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            SW1, SW2: interface Port-channel44 switchport trunk native vlan 746
          </pre>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Save Configuration</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            SW1# copy running-config startup-config SW2# copy running-config
            startup-config
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

export default LacpConfigurationSim;
