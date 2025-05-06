import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const NativeLacp8021q = () => {
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
        <h1 className="text-3xl font-bold mb-4">802.1Q Trunking, Native VLAN & LACP</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-6">
          All physical cabling is in place and verified. Switch SW-1 is pre-configured and inaccessible. SW-2 and SW-3 ports must be configured and operational to complete the configuration.
          <br />
          1. Configure SW-2 and SW-3 ports E0/0 to use the industry standard encapsulation method for trunking and only tag VLAN 10
          <br />
          2. Configure SW-2 and SW-3 ports E0/0 to send and receive untagged traffic over VLAN 11
          <br />
          3. Configure SW-2 and SW-3 ports E0/2 and E0/3 to use the industry standard encapsulation method for trunking and tag all VLANs
          <br />
          4. Configure SW-2 and SW-3 ports E0/2 and E0/3 for link aggregation using the industry standard protocol with the following requirements:
          <br />
          &nbsp;&nbsp;+ SW-2 ports must not initiate the negotiation for the aggregation protocol
          <br />
          &nbsp;&nbsp;+ SW-3 ports must immediately negotiate the aggregation protocol
          <br />
          &nbsp;&nbsp;+ Use the designated number assignment
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/Trunking_Native_VLAN_Sim/topology.jpg"
          alt="topology"
          width="333"
          height="244"
        />
      </div>


      {/* Native VLAN Mismatch Note */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6 bg-yellow-100 p-4 rounded border border-yellow-300">
        <p>
          Note: At the beginning of this sim, we will see below error message on both switches:
        </p>
        <p className="font-semibold mt-2">
          %CDP-4-NATIVE_VLAN_MISMATCH: Native VLAN mismatch discovered on Ethernet0/0 (1), with SW-1 Ethernet0/1(11).
        </p>
        <p className="mt-2">
          The reason is that the native VLAN of SW-1 was set to 11, while the native VLAN on SW-2 and SW-3 was VLAN 1, which caused a Native VLAN mismatch error. We will fix this issue in Task 2.
        </p>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure SW-2 and SW-3 ports E0/0 to use the industry standard encapsulation method for trunking and only tag VLAN 10
        </p>
        <p className="mb-4">
          + "use the industry standard encapsulation method for trunking" → use 802.1Q
          <br />
          + "only tag VLAN 10" → only allow VLAN 10
        </p>
        <p className="mb-2">On SW-2 & SW-3:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-2,SW-3(config)#interface e0/0<br />
          SW-2,SW-3(config-if)#switchport trunk encapsulation dot1q<br />
          SW-2,SW-3(config-if)#switchport mode trunk<br />
          SW-2,SW-3(config-if)#switchport trunk allowed vlan 10
        </pre>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> Configure SW-2 and SW-3 ports E0/0 to send and receive untagged traffic over VLAN 11
        </p>
        <p className="mb-4">
          We need to set the native VLAN on both switches to VLAN 11.
        </p>
        <p className="mb-2">On SW-2 & SW-3:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-2,SW-3(config)#interface e0/0<br />
          SW-2,SW-3(config-if)#switchport trunk native vlan 11
        </pre>
        <p className="mb-4">
          After completing this task, we can see now E0/0 interface of both switches only support VLAN 10 & VLAN 11 (untagged). That is why in task 1 it said "only tag VLAN 10". VLAN 11 has become the native VLAN so it is also allowed on E0/0 trunks.
        </p>
      </div>

      {/* Task 3 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 3.</strong> Configure SW-2 and SW-3 ports E0/2 and E0/3 to use the industry standard encapsulation method for trunking and tag all VLANs
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW-2,SW-3(config)#interface range e0/2 - 3<br />
          SW-2,SW-3(config-if)#switchport trunk encapsulation dot1q<br />
          SW-2,SW-3(config-if)#switchport mode trunk<br />
          SW-2,SW-3(config-if)#switchport trunk tag native-vlan //tag all VLANs
        </pre>
        <div className="mb-6 bg-blue-50 p-4 rounded">
          <p>
            Note: We are still not sure if the switches in the exam support the command "switchport trunk tag native-vlan" above or not. If not, you can configure the command "vlan dot1q tag native" in global configuration mode first (to request all VLANs must be tagged on all trunks) then under interface E0/0 use the command "no switchport trunk native vlan tag" for task 1.
          </p>
        </div>
      </div>

      {/* Task 4 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 4.</strong> Configure SW-2 and SW-3 ports E0/2 and E0/3 for link aggregation using the industry standard protocol with the following requirements:
          <br />
          + SW-2 ports must not initiate the negotiation for the aggregation protocol
          <br />
          + SW-3 ports must immediately negotiate the aggregation protocol
          <br />
          + Use the designated number assignment
        </p>
        <p className="mb-4">
          + "link aggregation using the industry standard protocol" → use LACP
          <br />
          + "SW-2 ports must not initiate the negotiation" → SW-2 uses passive mode
          <br />
          + "SW-3 ports must immediately negotiate" → SW-3 uses active mode
          <br />
          + "Use the designated number assignment" → uses Po23 according to the topology
        </p>
        <p className="mb-2">On SW-2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW-2(config)#interface range e0/2 - 3<br />
          SW-2(config-if)#channel-group 23 mode passive
        </pre>
        <p className="mb-2">On SW-3:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-3(config)#interface range e0/2 - 3<br />
          SW-3(config-if)#channel-group 23 mode active
        </pre>
        <p className="mb-4">
          If you did everything correctly, you will see this message:
          <br />
          %LINEPROTO-5-UPDOWN: Line protocol on Interface Port-channel23, changed state to up
          <br />
          Only when Port-channel 23 goes up, all the configs under E0/2 & E0/3 will be copied to this port-channel interface automatically
        </p>
      </div>

      {/* Verification */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Verification</strong></p>
        <p className="mb-4">
          After above command, interface Port-channel 23 will be created and all the configs under E0/2 & E0/3 will be copied to this port-channel interface automatically (except the "channel-group 23 mode passive/active" command). We can verify with "show run" command:
        </p>
        <p className="mb-2">On SW-2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW-2#<strong>show run</strong><br />
          --output omitted--<br />
          interface Port-channel23<br />
          &nbsp;<strong>switchport trunk tag native-vlan</strong> //this command was added automatically<br />
          &nbsp;<strong>switchport trunk encapsulation dot1q</strong> //this command was added automatically<br />
          &nbsp;<strong>switchport mode trunk</strong> //this command was added automatically<br />
          !<br />
          interface Ethernet0/2<br />
          &nbsp;switchport trunk allowed vlan 10<br />
          &nbsp;switchport trunk encapsulation dot1q<br />
          &nbsp;switchport mode trunk<br />
          &nbsp;channel-group 23 mode active<br />
          !<br />
          interface Ethernet0/3<br />
          &nbsp;switchport trunk allowed vlan 10<br />
          &nbsp;switchport trunk encapsulation dot1q<br />
          &nbsp;switchport mode trunk<br />
          &nbsp;channel-group 23 mode active<br />
          !
        </pre>
        <p className="mb-4">
          Also verify if LACP came up on either SW-2 or SW-3:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          SW2#<strong>show etherchannel summary</strong><br />
          --output omitted--<br />
          Number of channel-groups in use: 1<br />
          Number of aggregators:           1<br /><br />
          Group  Port-channel  Protocol    Ports<br />
          ------+-------------+-----------+-----------------------------------------------<br />
          10     <strong>Po23(SU)</strong>        LACP      Et0/2(P)    Et0/3(P)
        </pre>
        <p className="mb-6">
          "SU" here means Layer 2 LACP came up successfully.
        </p>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          SW-2#,SW-3#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default NativeLacp8021q;