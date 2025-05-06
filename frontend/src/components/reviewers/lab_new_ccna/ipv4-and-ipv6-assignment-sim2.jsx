import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const IPv4IPv6AssignmentSim2 = () => {
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
        <h1 className="text-3xl font-bold mb-4">IPv4 and IPv6 Assignment Sim 2</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-6">Configure IPv4 and IPv6 between two routers.</p>
      </div>

      {/* Subnet Table */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">IPv4 Subnet</th>
              <th className="border border-gray-300 p-2">IPv6 Subnet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">192.168.168.192/28</td>
              <td className="border border-gray-300 p-2">2001:db8:12::60/125</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 1:</strong></p>
        <p className="mb-4">
          + Configure R1 with the <strong>first</strong> usable host IP address in the IPv4 network.<br />
          + Configure R2 with the <strong>last</strong> usable host IP address in the IPv4 network.<br />
          + Verify connectivity using ping.
        </p>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 2:</strong></p>
        <p className="mb-6">
          + Do not assign the subnet router anycast address to either router.<br />
          + Configure R1 with the <strong>first</strong> usable host IP address in the IPv6 network.<br />
          + Configure R2 with the <strong>last</strong> usable host IP address in the IPv6 network.<br />
          + Verify connectivity using ping.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/IPv4_and_IPv6_Assignment_Sim_2/topology.jpg"
          alt="topology"
          width="410"
          height="62"
        />
      </div>

      {/* Task 1 Solution */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 1.</strong> Configure R1 with the <strong>first</strong> usable host IP address in the IPv4 network. Configure R2 with the <strong>last</strong> usable host IP address in the IPv4 network. Verify connectivity using ping.
        </p>
        <p className="mb-4">
          In the subnet 192.168.168.192/28 (increment: 16), the network address is 192.168.168.192 & the broadcast address is 192.168.168.207. Therefore the <strong>first</strong> usable host IP address is <strong>192.168.168.193</strong> while the last usable host IP address is <strong>192.168.168.206</strong>.
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config)#interface e0/1<br />
          R1(config-if)#ip address 192.168.168.193 255.255.255.240<br />
          R1(config-if)#no shut
        </pre>
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2(config)#interface e0/1<br />
          R2(config-if)#ip address 192.168.168.206 255.255.255.240<br />
          R2(config-if)#no shut
        </pre>
        <p className="mb-2">+ Verify connectivity using ping.</p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config-if)#exit<br />
          R1(config)#exit<br />
          R1#ping 192.168.168.206<br />
          .!!!! -&gt; ping successful
        </pre>
      </div>

      {/* Task 2 Solution */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2">
          <strong>Task 2.</strong> Do not assign the subnet router anycast address to either router. Configure R1 with the <strong>first</strong> usable host IP address in the IPv6 network. Configure R2 with the <strong>last</strong> usable host IP address in the IPv6 network. Verify connectivity using ping.
        </p>
        <div className="mb-4 bg-blue-50 p-4 rounded">
          <p className="mb-2">
            Note: The subnet router anycast address is the lowest address in the subnet, so it looks like the "network address". For example, if the prefix for the subnet is 2001:db8:12::60/125 then the subnet router anycast address for that subnet is 2001:db8:12::60.
          </p>
          <p className="mb-2">
            Since we are working with 2001:db8:12::60/125 then the first 125 binary bits are the prefix and we have 2<sup>128-125</sup> = 2<sup>3</sup> = 8 host addresses in this subnet. 2001:db8:12::60 is the network address (or subnet router anycast address) while other 7 host addresses are in range from 2001:db8:12::61 to 2001:db8:12::67.
          </p>
          <p>
            Since IPv6 does not reserve the last address as a broadcast address, 2001:db8:12::67 is the last usable host address. The first usable host address is 2001:db8:12::61.
          </p>
        </div>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R1(config)#interface e0/1<br />
          R1(config-if)#ipv6 address 2001:db8:12::61/125
        </pre>
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R2(config)#interface e0/1<br />
          R2(config-if)#ipv6 address 2001:db8:12::67/125
        </pre>
        <p className="mb-2">+ Verify connectivity using ping.</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#ping 2001:db8:12::67<br />
          !!!!! -&gt; successful
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

export default IPv4IPv6AssignmentSim2;