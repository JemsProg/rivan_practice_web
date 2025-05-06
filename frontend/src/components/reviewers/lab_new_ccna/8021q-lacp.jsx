import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const TrunkingAndLacp8021q = () => {
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
        <h1 className="text-3xl font-bold mb-4">802.1Q Trunking & LACP</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-4">
          <strong>Task 1.</strong> Configure the trunks between SW1 and Sw2 on ports E0/0 and E0/1 using the IEEE standard frame tagging method.
          <br />
          + Only the VLANs for the PCs should be permitted across the trunks.
          <br />
          + Routers are simulated as PCs and are preconfigured with IP Addresses.
          <br />
          + PC configurations must remain unchanged.
        </p>
        <p className="mb-6">
          <strong>Task 2.</strong> On SW1 and SW2, use IEEE 802.3ad link aggregation.
          <br />
          + Assign number 10 to the link.
          <br />
          + Combine E0/0 and E0/1 into a single logical link.
          <br />
          + Both links must negotiate aggregation.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/802.1Q_Trunking_LACP/topology.jpg"
          alt="topology"
          width="337"
          height="421"
        />
      </div>

      {/* Initial Config Tables */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* SW1 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">SW1 Initial Config</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface Ethernet0/0<br />
              !<br />
              interface Ethernet0/1<br />
              !<br />
              interface Ethernet0/2<br />
              &nbsp;switchport access vlan 10<br />
              &nbsp;switchport mode access<br />
              !<br />
              interface Ethernet0/3<br />
              &nbsp;switchport access vlan 30<br />
              &nbsp;switchport mode access
            </pre>
          </div>
          
          {/* SW2 Config */}
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-semibold mb-2">SW2 Initial Config</p>
            <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap text-sm">
              interface Ethernet0/0<br />
              !<br />
              interface Ethernet0/1<br />
              !<br />
              interface Ethernet0/2<br />
              &nbsp;switchport access vlan 10<br />
              &nbsp;switchport mode access<br />
              !<br />
              interface Ethernet0/3<br />
              &nbsp;switchport access vlan 30<br />
              &nbsp;switchport mode access
            </pre>
          </div>
        </div>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure the trunks between SW1 and Sw2 on ports E0/0 and E0/1 using the IEEE standard frame tagging method.
        </p>
        <p className="mb-2">According to the requirements:</p>
        <p className="mb-4">
          + IEEE standard frame tagging method → use 802.1Q trunking<br />
          + Only the VLANs for the PCs should be permitted across the trunks → Only allow VLANs 10 & 30 across the trunks
        </p>
        <p className="mb-2">On both SW1 & SW2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW1,SW2(config)#interface range e0/0 - 1<br />
          SW1,SW2(config-if-range)#switchport trunk encapsulation dot1q<br />
          SW1,SW2(config-if-range)#switchport mode trunk<br />
          SW1,SW2(config-if-range)#switchport trunk allowed vlan 10,30
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> On SW1 and SW2, use IEEE 802.3ad link aggregation.
        </p>
        <p className="mb-4">
          According to the requirements:<br />
          + use IEEE 802.3ad link aggregation → use LACP<br />
          + Both links must negotiate aggregation → both use "active" mode
        </p>
        <p className="mb-2">On both SW1 & SW2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW1,SW2(config)#interface range e0/0 - 1<br />
          SW1,SW2(config-if-range)#channel-group 10 mode active
        </pre>
      </div>

      {/* Verification */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Verification</strong></p>
        <p className="mb-4">
          After above command, interface Port-channel 10 will be created and all the configs under E0/0 & E0/1 will be copied to this port-channel interface automatically (except the "channel-group 10 mode active" command). We can verify with "show run" command:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW1#<strong>show run</strong><br />
          --output omitted--<br />
          interface Port-channel10<br />
          &nbsp;<strong>switchport trunk allowed vlan 10,30</strong> //this command was added automatically<br />
          &nbsp;<strong>switchport trunk encapsulation dot1q</strong> //this command was added automatically<br />
          &nbsp;<strong>switchport mode trunk</strong> //this command was added automatically<br />
          !<br />
          interface Ethernet0/0<br />
          &nbsp;switchport trunk allowed vlan 10,30<br />
          &nbsp;switchport trunk encapsulation dot1q<br />
          &nbsp;switchport mode trunk<br />
          &nbsp;channel-group 10 mode active<br />
          !<br />
          interface Ethernet0/1<br />
          &nbsp;switchport trunk allowed vlan 10,30<br />
          &nbsp;switchport trunk encapsulation dot1q<br />
          &nbsp;switchport mode trunk<br />
          &nbsp;channel-group 10 mode active<br />
          !
        </pre>
        <p className="mb-4">
          Also verify if LACP came up on either SW1 or SW2:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW2#<strong>show etherchannel summary</strong><br />
          --output omitted--<br />
          Number of channel-groups in use: 1<br />
          Number of aggregators:           1<br /><br />
          Group  Port-channel  Protocol    Ports<br />
          ------+-------------+-----------+-----------------------------------------------<br />
          10     <strong>Po10(SU)</strong>        LACP      Et0/0(P)    Et0/1(P)
        </pre>
        <p className="mb-4">
          "SU" here means Layer 2 LACP came up successfully.
        </p>
        <p className="mb-4">
          Also the ping between PCs across the trunks must work:
        </p>
        <p className="mb-2">On PC1</p>
        <pre className="bg-gray-100 p-4 rounded mb-2 whitespace-pre-wrap text-sm">
          PC1#ping 10.2.2.20<br />
          .!!!!
        </pre>
        <p className="mb-2">On PC3</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          PC3#ping 10.3.3.20<br />
          .!!!!
        </pre>
      </div>

      {/* Packet Tracer Note */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6 bg-yellow-100 p-4 rounded border border-yellow-300">
        <p className="mb-2">
          Note: If we use Packet Tracer to do task 2, we will receive an error "%EC-5-CANNOT_BUNDLE2: f0/10 is not compatible with Po10 and will be suspended (vlan mask is different)". We tested task 2 with EVE-NG and saw that right after using the command "channel-group 10 mode active", interface Po10 came up with all the configs configured under E0/0 - 1. So this is only an issue of Packet Tracer.
        </p>
        <p>
          With Packet Tracer, we must remove all the configs under physical interfaces f0/10 & f0/11 before typing the command "channel-group 10 mode active". Then we have to type commands in task 1 under "interface Po10" only to bring them up.
        </p>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW1,SW2#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default TrunkingAndLacp8021q;