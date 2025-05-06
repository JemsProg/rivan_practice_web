import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const TrunkingLacpSim = () => {
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
        <h1 className="text-3xl font-bold mb-4">Trunking & LACP Sim</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure trunks between Sw1 and Sw2 on ports E0/0 and E0/1 using the IEEE standard frame tagging method.
        </p>
        <p className="mb-4">
          &ndash; Add VLAN 45 as untagged on the trunk ports.<br />
          &ndash; Only extend VLAN 15 and the untagged VLAN across the trunk.<br />
          &ndash; Verify that PC1 is capable of pinging PC2.
        </p>
        <p className="mb-6">
          <strong>Task 2.</strong> On Sw1 and Sw2, use IEEE 802.3ad link aggregation.
          <br />
          &ndash; Combine E0/0 and E0/1 into a single logical link while leaving the trunk configurations intact<br />
          &ndash; Assign number 15 to the link.<br />
          &ndash; Both links must negotiate aggregation.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/Trunking_LACP_Sim/topology.jpg"
          alt="topology"
          width="309"
          height="393"
        />
      </div>

      {/* Solution Note */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6 bg-green-100 p-4 rounded">
        <p>Note: The IP addresses, VLAN number, interfaces... may be different so please check them carefully.</p>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure trunks between Sw1 and Sw2 on ports E0/0 and E0/1 using the IEEE standard frame tagging method.
          <br />
          &ndash; Add VLAN 45 as untagged on the trunk ports.
          <br />
          &ndash; Only extend VLAN 15 and the untagged VLAN across the trunk.
          <br />
          &ndash; Verify that PC1 is capable of pinging PC2.
        </p>
        <p className="mb-2">On both Sw1 & Sw2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          Sw1,Sw2(config)#interface range e0/0 - 1<br />
          Sw1,Sw2(config-if-range)#switchport trunk encapsulation dot1q<br />
          Sw1,Sw2(config-if-range)#switchport mode trunk<br />
          Sw1,Sw2(config-if-range)#switchport trunk native vlan 45<br />
          Sw1,Sw2(config-if-range)#switchport trunk allowed vlan 15,45
        </pre>
        <p className="mb-2"><strong>Verification</strong></p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          PC1#ping 10.15.15.20<br />
          .!!!!
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> On Sw1 and Sw2, use IEEE 802.3ad link aggregation.
        </p>
        <p className="mb-4">
          &ndash; Combine E0/0 and E0/1 into a single logical link while leaving the trunk configurations intact<br />
          &ndash; Assign number 15 to the link.<br />
          &ndash; Both links must negotiate aggregation.
        </p>
        <p className="mb-2">//Suppose we are still under "interface range e0/0 - 1" of both switches:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw1,Sw2(config-if-range)#channel-group 15 mode active
        </pre>
      </div>

      {/* Note about Packet Tracer */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6 bg-yellow-100 p-4 rounded border border-yellow-300">
        <p className="mb-2">
          Note: If we use Packet Tracer to do task 2, we will receive an error "%EC-5-CANNOT_BUNDLE2: f0/1 is not compatible with Po15 and will be suspended (vlan mask is different)". We tested task 2 with EVE-NG and saw that right after using the command "channel-group 15 mode active", interface Po15 came up with all the configs configured under E0/0 - 1. So this is only an issue of Packet Tracer.
        </p>
        <p>
          With Packet Tracer, we must remove all the configs under physical interfaces E0/0 & E0/1 before typing the command "channel-group 15 mode active". Then we have to type commands in task 1 under "interface Po15" only to bring them up.
        </p>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          Sw1,Sw2#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default TrunkingLacpSim;