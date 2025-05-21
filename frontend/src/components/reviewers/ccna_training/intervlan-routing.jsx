import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const InterVlanRouting = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-[#0D2153]">InterVLAN Routing Tutorial</h1>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <p className="mb-4">
            In the previous <a href="https://www.9tut.com/virtual-local-area-network-vlan-tutorial" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VLAN tutorial</a> we learned how to use VLAN to segment the network and create "logical" broadcast domains. In this tutorial we will learn about InterVLAN Routing.
          </p>
        </div>

        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <h2 className="text-2xl font-bold text-[#0D2153] mb-4">What is InterVLAN routing?</h2>
          
          <p className="mb-4">
            As we learned, devices within a VLAN can communicate with each other without the need of Layer 3 routing. But devices in separate VLANs require a Layer 3 routing device to communicate with one another. For example, in the topology below host A and B can communicate with each other without a router in the same VLAN 10; host C and D can communicate in the same VLAN 20. But host A can't communicate with host C or D because they are in different VLANs.
          </p>
          
          <div className="flex justify-center my-6">
            <img
              fetchPriority="high"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/InterVLAN/InterVLAN_no_router.jpg"
              alt="InterVLAN without router"
              width={420}
              height={180}
            />
          </div>
          
          <p className="mb-4">
            To allow hosts in different VLANs communicate with each other, we need a Layer 3 device (like a router) for routing:
          </p>
          
          <div className="flex justify-center my-6">
            <img
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/InterVLAN/InterVLAN_traditional_routing.jpg"
              alt="Traditional InterVLAN routing"
              width={420}
              height={290}
            />
          </div>
          
          <p className="mb-6">
            The routing traffic from one VLAN to another VLAN is called InterVLAN routing.
          </p>
        </div>

        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <p className="mb-4">
            Now host A can communicate with host C or D easily. Now let's see how the traffic is sent from host A to host D. First, host A knows the destination host is in a different VLAN so it sends traffic to its default gateway (on the router) through the switch. The switch tags the frame as originating on VLAN 10 and forwards to the router. In turn, the router makes routing decision from VLAN 10 to VLAN 20 and sends back that traffic to the switch, where it is forwarded out to host D.
          </p>
          
          <div className="flex justify-center my-6">
            <img
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/InterVLAN/InterVLAN_sticky_router_traffic_flow_2_interfaces.jpg"
              alt="InterVLAN traffic flow with 2 interfaces"
              width={420}
              height={290}
            />
          </div>
          
          <p className="mb-4">
            Notice that the routing decision to another VLAN is done by the router, not the switch. When frames leave the router (step 3 in the picture above), they are tagged with VLAN 20.
          </p>
          
          <p className="mb-4">
            Also notice that receiving ends (host A & D in this case) are unaware of any VLAN information. Switch attaches VLAN information when receiving frames from host A and removes VLAN information before forwarding to host D.
          </p>
          
          <p className="mb-4">
            But there is one disadvantage in the topology above: for each VLAN we need a physical connection from the router to the switch but in practical, the interfaces of the router are very limited. To overcome this problem, we can create many logical interfaces in one physical interface. For example from a physical interface fa0/0 we can create many sub-interfaces like fa0/0.0, fa0/0.1 ... Now this router is often called "router on a stick" (maybe because there is only one physical link connecting from router so it looks like a router on a stick ^^)
          </p>
          
          <div className="flex justify-center my-6">
            <img
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/InterVLAN/InterVLAN_sticky_router.jpg"
              alt="Router on a stick"
              width={420}
              height={290}
            />
          </div>
          
          <p className="mb-4">
            The router treats each sub-interface as a separate physical interface in routing decisions -&gt; data can be sent and received in the same physical interface (but different sub-interfaces) without being dropped by the split-horizon rule in the case you want to send routing updates through the router from one VLAN to another.
          </p>
          
          <div className="flex justify-center my-6">
            <img
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/InterVLAN/InterVLAN_sticky_router_traffic_flow.jpg"
              alt="Router on a stick traffic flow"
              width={420}
              height={290}
            />
          </div>
        </div>

        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Configuring InterVLAN routing</h2>
          
          <p className="mb-4">
            Now you understand how InterVLAN works. To accomplish InterVLAN routing, some configuration must be implemented on both router and switch. Let's see what actions need to be completed when we want to configure InterVLAN in "router on a stick" model using the above topology.
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The switch port connected to the router interface must be configured as trunk port.</li>
            <li>The router sub-interfaces must be running a trunking protocol. Two popular trunking protocols in CCNA are 802.1q (open standard) and InterSwitch Link (ISL, a Cisco propriety protocol).</li>
            <li>Set IP address on each sub-interface.</li>
          </ul>
          
          <div className="flex justify-center my-6">
            <img
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/InterVLAN/InterVLAN_configuration_topology.jpg"
              alt="InterVLAN configuration topology"
              width={420}
              height={290}
            />
          </div>
          
          <p className="mb-4">
            To help you understand more clearly about InterVLAN, the main configuration of router & switch are shown below:
          </p>
          
          <div className="mb-6">
            <p className="font-semibold mb-2">Configure trunk port on switch:</p>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
              Switch(config)#interface f0/0<br />
              Switch(config-if)#no shutdown<br />
              Switch(config-if)#switchport mode trunk
            </div>
          </div>
          
          <div className="mb-6">
            <p className="font-semibold mb-2">Create sub-interfaces, set 802.1Q trunking protocol and ip address on each sub-interface</p>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
              Router(config)#interface f0/0<br />
              Router(config-if)#no shutdown<br /><br />
              Router(config)#interface f0/0.0<br />
              Router(config-subif)#encapsulation dot1q 10<br />
              Router(config-subif)#ip address 192.168.1.1 255.255.255.0<br />
              Router(config-subif)#interface f0/0.1<br />
              Router(config-subif)#encapsulation dot1q 20<br />
              Router(config-subif)#ip address 192.168.2.1 255.255.255.0
            </div>
            <p className="mt-2 text-sm italic">(Note: The main interface f0/0 doesn't need an IP address but it must be turned on)</p>
            <p className="mt-2 text-sm italic">(Note: In the "encapsulation dot1q 10" command, 10 is the VLAN ID this interface operates in)</p>
          </div>
          
          <p className="mb-4">
            I also list the full configuration of the above topology for your reference:
          </p>
          
          <div className="mb-6">
            <p className="font-semibold mb-2">Configure VLAN</p>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
              Switch(config)#vlan 10<br />
              Switch(config-vlan)#name SALES<br />
              Switch(config-vlan)#vlan 20<br />
              Switch(config-vlan)#name TECH
            </div>
          </div>
          
          <div className="mb-6">
            <p className="font-semibold mb-2">Set ports to access mode & assign ports to VLAN</p>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
              Switch(config)#interface range fa0/1-2<br />
              Switch(config-if)#no shutdown<br />
              Switch(config-if)# switchport mode access<br />
              Switch(config-if)# switchport access vlan 10<br />
              Switch(config-if)#interface range fa0/3-4<br />
              Switch(config-if)#no shutdown<br />
              Switch(config-if)#switchport mode access<br />
              Switch(config-if)# switchport access vlan 20
            </div>
          </div>
          
          <p className="mb-4">
            In practical, we often use a Layer 3 switch instead of a switch and a "router on the stick", this helps reduce the complexity of the topology and cost.
          </p>
          
          <div className="flex justify-center my-6">
            <img
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/InterVLAN/InterVLAN_Switch_Layer3.jpg"
              alt="Layer 3 switch InterVLAN"
              width={420}
              height={200}
            />
          </div>
          
          <p className="mb-4">
            Note: With this topology, we don't need to use a trunking protocol and the "switchport mode trunk" command. The full configuration of Layer 3 switch is listed below:
          </p>
          
          <div className="mb-6">
            <p className="font-semibold mb-2">Switch configuration</p>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto">
              ip routing<br />
              !<br />
              interface FastEthernet0/1<br />
              switchport access vlan 10<br />
              switchport mode access<br />
              !<br />
              interface FastEthernet0/2<br />
              switchport access vlan 20<br />
              switchport mode access<br /><br />
              interface Vlan10<br />
              ip address 192.168.10.1 255.255.255.0<br />
              !<br />
              interface Vlan20<br />
              ip address 192.168.20.1 255.255.255.0
            </div>
          </div>
          
          <p className="mb-4">
            And on hosts just assign IP addresses and default gateways (to the corresponding interface VLANs) -&gt; hosts in different VLANs can communicate.
          </p>
          
          <p className="mb-4">
            In summary, InterVLAN routing is used to permit devices on separate VLANs to communicate. In this tutorial you need to remember these important terms:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Router-on-a-stick</strong>: single physical interface routes traffic between multiple VLANs on a network.</li>
            <li><strong>Subinterfaces</strong> are multiple virtual interfaces, associated with one physical interface. These subinterfaces are configured in software on a router that is independently configured with an IP address and VLAN assignment.</li>
          </ul>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default InterVlanRouting;