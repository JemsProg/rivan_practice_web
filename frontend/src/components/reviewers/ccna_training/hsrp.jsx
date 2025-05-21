import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const Hsrp = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-[#0D2153]">Hot Standby Router Protocol HSRP Tutorial</h1>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <p className="mb-4">
            In this tutorial we will learn what is HSRP and the need of HSRP in a network.
          </p>
          
          <p className="mb-4">
            Most of the company in the world has a connection to the Internet. The picture below shows a most simple topology of such a company:
          </p>
          
          <div className="flex justify-center my-6">
            <img
              fetchPriority="high"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/HSRP/Simple_company_topology.jpg"
              alt="Simple company topology"
              width={298}
              height={293}
            />
          </div>
          
          <p className="mb-4">
            To make above topology work we need to:
          </p>
          
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Configure IP addresses on two interfaces of the Router. Suppose the IP address of Fa0/0 interface (the interface connecting to the switch) is 192.168.1.1.</li>
            <li>Assign the IP addresses, default gateways and DNS servers on all PCs. In this case we have to set the default gateways to Fa0/0 interface (with the IP address 192.168.1.1) of the router. This can be done manually or automatically via DHCP.</li>
          </ul>
        </div>

        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <p className="mb-4">
            After some time, your boss wants to implement some redundant methods so that even the Router fails, all PCs can still access the Internet without any manual configuration at that time. So we need one more router to connect to the Internet as the topology below:
          </p>
          
          <div className="flex justify-center my-6">
            <img
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/HSRP/HSRP_company_topology.jpg"
              alt="HSRP company topology"
              width={298}
              height={293}
            />
          </div>
          
          <p className="mb-4">
            But now we have a problem: There is only one default gateway on each host, so if Router1 is down and we want to access the Internet via Router2, we have to change the default gateway (to 192.168.1.2). Also, when Router1 comes back we have to manually change back to the IP address on Router1. And no one can access to the Internet in the time of changing the default gateway. HSRP can solve all these problems!
          </p>
        </div>

        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <h2 className="text-2xl font-bold text-[#0D2153] mb-4">HSRP Operation</h2>
          
          <p className="mb-4">
            With HSRP, two routers Router1 and Router2 in this case will be seen as only one router. HSRP uses a virtual MAC and IP address for the two routers to represent with hosts as a single default gateway. For example, the virtual IP address is 192.168.1.254 and the virtual MAC is 0000.0c07.AC0A. All the hosts will point their default gateway to this IP address.
          </p>
          
          <div className="flex justify-center my-6">
            <img
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/HSRP/HSRP_virtual_router.jpg"
              alt="HSRP virtual router"
              width={298}
              height={283}
            />
          </div>
          
          <p className="mb-4">
            One router, through the election process, is designated as <strong>active router</strong> while the other router is designated as <strong>standby router</strong>. Both active and standby router listen but only the active router proceeds and forwards packets. Standby router is backup when active router fails by monitoring periodic hellos sent by the active router (multicast to 224.0.0.2, UDP port 1985) to detect a failure of the active router.
          </p>
          
          <div className="flex justify-center my-6">
            <img
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/HSRP/HSRP_active_standby_router.jpg"
              alt="HSRP active standby router"
              width={298}
              height={283}
            />
          </div>
          
          <p className="mb-4">
            When a failure on the active router detected, the standby router assumes the role of the forwarding router. Because the new forwarding router uses the same (virtual) IP and MAC addresses, the hosts see no disruption in communication. A new standby router is also elected at that time (in the case of there are more than two routers in a HSRP group).
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-semibold">Note:</p>
            <p>
              All routers in a HSRP group send hello packets. By default, the hello timer is set to 3 seconds and the dead timer is set to 10 seconds. It means that a hello packet is sent between the HSRP standby group devices every 3 seconds, and the standby device becomes active when a hello packet has not been received for 10 seconds.
            </p>
          </div>
          
          <div className="flex justify-center my-6">
            <img
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/HSRP/HSRP_active_fail.jpg"
              alt="HSRP active fail"
              width={298}
              height={283}
            />
          </div>
          
          <p className="mb-6">
            Note: The virtual MAC address of HSRP version 1 is <strong>0000.0C07.ACxx</strong>, where <strong>xx</strong> is the HSRP group number in hexadecimal based on the respective interface. For example, HSRP group 10 uses the HSRP virtual MAC address of 0000.0C07.AC0A. HSRP version 2 uses a virtual MAC address of 0000.0C9F.F<strong>XXX&nbsp;</strong>(XXX: HSRP group in hexadecimal). But please notice that the virtual MAC address can be configured manually.
          </p>
          
          <p className="mb-6">
            HSRP version 1 hello packets are sent to multicast address 224.0.0.2 while HSRP version 2 hello packets are sent to multicast address 224.0.0.102. Currently HSRPv1 is the default version when running HSRP on Cisco devices.
          </p>
        </div>

        <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
          <h2 className="text-2xl font-bold text-[#0D2153] mb-4">HSRP States</h2>
          
          <p className="mb-4">
            HSRP consists of 6 states:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">State</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">Initial</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    This is the beginning state. It indicates HSRP is not running. It happens when the configuration changes or the interface is first turned on
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">Learn</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    The router has not determined the virtual IP address and has not yet seen an authenticated hello message from the active router. In this state, the router still waits to hear from the active router.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">Listen</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    The router knows both IP and MAC address of the virtual router but it is not the active or standby router. For example, if there are 3 routers in HSRP group, the router which is not in active or standby state will remain in listen state.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">Speak</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    The router sends periodic HSRP hellos and participates in the election of the active or standby router.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200">Standby</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    In this state, the router monitors hellos from the active router and it will take the active state when the current active router fails (no packets heard from active router)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Active</td>
                  <td className="px-4 py-2">
                    The router forwards packets that are sent to the HSRP group. The router also sends periodic hello messages
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4">
            Please notice that not all routers in a HSRP group go through all states above. In a HSRP group, only one router reaches active state and one router reaches standby state. Other routers will stop at listen state.
          </p>
          
          <p className="mb-4">
            Now let's take an example of a router passing through these states. Suppose there are 2 routers A and B in the network; router A is turned on first. It enters the<strong> initial state</strong>. Then it moves to <strong>listen state</strong> in which it tries to hear if there are already active or standby routers for this group. After learning no one take the active or standby state, it determines to take part in the election by moving to <strong>speak state</strong>. Now it starts sending hello messages containing its priority. These messages are sent to the multicast address 224.0.0.2 (which can be heard by all members in that group). When it does not hear a hello message with a higher priority it assumes the role of active router and moves to <strong>active state</strong>. In this state, it continues sending out periodic hello messages.
          </p>
          
          <p className="mb-4">
            Now router B is turned on. It also goes through <strong>initial </strong>and <strong>listen state</strong>. In listen state, it learns that router A has been already the active router and no other router is taking standby role so it enters <strong>speak </strong>state to compete for the standby router -&gt; it promotes itself as <strong>standby </strong>router.
          </p>
          
          <p className="mb-6">
            Suppose router A is in active state while router B is in standby state. If router B does not hear hello messages from router A within the holdtime (10 seconds by default), router B goes into speak state to announce its priority to all HSRP members and compete for the active state. But if at some time it receives a message from the active router that has a lower priority than its priority (because the administrator change the priority in either router), it can take over the active role by sending out a hello packet with parameters indicating it wants to take over the active router. This is called a coup hello message.
          </p>
          
          <p className="font-semibold mb-2">Quick summarization:</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>HSRP is Cisco proprietary which allows several routers or multilayer switches to appear as a single gateway IP address.</li>
            <li>HSRP has 6 states: Initial, learn, listen, speak, standby and active.</li>
            <li>HSRP allows multiple routers to share a virtual IP and MAC address so that the end-user hosts do not realize when a failure occurs.</li>
            <li>The active (or Master) router uses the virtual IP and MAC addresses.</li>
            <li>Standby routers listen for Hellos from the Active router. A hello packet is sent every 3 seconds by default. The hold time (dead interval) is 10 seconds.</li>
            <li>HSRP version 1 uses the MAC address range 0000.0C07.ACxx while HSRP version 2 uses the MAC address range 0000.0C9F.Fxxx , where xxx is the hexadecimal number of HSRP group.</li>
            <li>The group numbers of HSRP version 1 range from 0 to 255. HSRP does support group number of 0 (we do check it and in fact, it is the default group number if you don't enter group number in the configuration) so HSRP version 1 supports up to 256 group numbers. HSRP version 2 supports 4096 group numbers.</li>
          </ul>
          
          <p className="mb-4">
            (Reference and good resource: <a href="http://www.cisco.com/en/US/tech/tk648/tk362/technologies_tech_note09186a0080094a91.shtml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://www.cisco.com/en/US/tech/tk648/tk362/technologies_tech_note09186a0080094a91.shtml</a>)
          </p>
          
          <p>
            We wrote a GNS3 lab of HSRP and you can read it here: <a href="http://www.networktut.com/hsrp-ip-route-tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">http://www.networktut.com/hsrp-ip-route-tracking</a>.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default Hsrp;