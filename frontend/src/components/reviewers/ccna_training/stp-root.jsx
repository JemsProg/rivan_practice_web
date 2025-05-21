import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const StpRootPort = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) => {
      el.classList.add('opacity-0', 'translate-y-[30px]', 'will-change-transform');
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate>
        <h1 className="text-3xl font-bold mb-6 text-gray-900">STP Root Port Election Tutorial</h1>
      </div>

      {/* Introduction */}
      <div data-animate className="mb-10">
        <p className="mb-6 text-lg">
          In this tutorial we will learn in detail how Spanning Tree Protocol (STP) elects root port after choosing a root bridge.
        </p>
        <p className="mb-6">
          Root port is the port that is closest to the root bridge, which means it is the port that receiving the lowest-cost BPDU from the root. Every non-root bridge must have a root port. All root ports are placed in forwarding state.
        </p>
      </div>

      {/* Election Process */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Spanning Tree Root Port Election Process</h2>
        
        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <p className="font-semibold mb-4">Root Port election process in a Non-Root Switch includes the following steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Lowest accumulated cost on interfaces towards Root Bridge</li>
            <li>Lowest Sender Bridge ID</li>
            <li>Lowest Sender Port ID (= Port Priority + Port Number) (so port priority is compared first then to Port number)</li>
          </ol>
        </div>

        <p className="mb-6">Let's see an example below:</p>
        
        <div className="flex justify-center mb-6">
          <img 
            fetchpriority="high" 
            decoding="async" 
            className="rounded-lg border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/STP/Root_port_election_topology.jpg" 
            alt="Root Port Election Topology" 
            width="397" 
            height="307"
          />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r mb-6">
          <p><strong>Note:</strong> In fact the MAC address should be something like "00:00:00:00:00:01" but we write "01" in short. Same for "02", "03" and "04" MAC addresses.</p>
        </div>
      </div>

      {/* Explanation */}
      <div data-animate className="mb-10">
        <p className="mb-4">According to the topology, SW1 has the lowest MAC address "01" (hence lowest bridge ID because of same default Bridge Priority 32768) so it will become the Root Bridge. Now we will see which port will become Root Port in each non-root bridge (SW2, SW3, SW4 and SW5).</p>
        
        <p className="mb-4">Root Port election is based on the port having lowest accumulated cost to the Root Bridge SW1 (step 1 above). Here is how to calculate the path cost: SW1 (root bridge) sends BPDU with cost of 0 to other directly connected switches. When a switch receives this BPDU, it adds its own port cost to this value. For example, SW2 has two ways to reach SW1:</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <ul className="list-disc pl-6 space-y-1">
            <li>SW2 – SW1: path cost is 0 + 4 = 4</li>
            <li>SW2 – SW4 – SW3 – SW1: path cost is 0 + 4 + 4 + 19 = 27</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Path Cost Reference:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>10 Mbps = 100</li>
            <li>100 Mbps = 19</li>
            <li>1 Gbps = 4</li>
            <li>10 Gbps = 2</li>
          </ul>
        </div>

        <p className="mb-6">Therefore SW2 will choose the first path so the port that is directly connected to SW1 on SW2 will become root port.</p>
        <p className="mb-6">Same on SW3, the port that is directly connected to SW1 will be chosen root port.</p>
        
        <p className="mb-4">On SW4, there are two ways to reach SW1:</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <ul className="list-disc pl-6 space-y-1">
            <li>SW4 – SW2 – SW1: path cost is 0 + 4 + 19 = 23</li>
            <li>SW4 – SW3 – SW1: path cost is 0 + 4 + 4 = 8</li>
          </ul>
        </div>

        <p className="mb-6">Therefore SW4 will choose the port connects to SW3 root port. Now all the root ports have been elected:</p>
        
        <div className="flex justify-center mb-6">
          <img 
            decoding="async" 
            className="rounded-lg border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/STP/Root_port_election_topology_RP_elected.jpg" 
            alt="Root Ports Elected" 
            width="397" 
            height="307"
          />
        </div>

        <p className="mb-6">We found all the root ports on each switch with only step 1 in the three steps above so it is easy. In the next example we will change the topology a bit with all 1Gbps connections and add SW5 to make the election harder:</p>
        
        <div className="flex justify-center mb-6">
          <img 
            decoding="async" 
            className="rounded-lg border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/STP/Root_port_election_topology2.jpg" 
            alt="Modified Topology" 
            width="397" 
            height="406"
          />
        </div>

        <p className="mb-4">The root ports on SW2 and SW3 are unchanged. But on SW4 both path costs to SW1 are now equal so we need to use step 2 "Lowest Sender Bridge ID". SW4 will compare BPDU sent from SW2 & SW3 and choose the lower Bridge ID.</p>
        
        <p className="mb-6">In this case SW2 MAC address of 02 is smaller than SW3 MAC address of 03 (while the switch priorities are equal) so SW4 chooses the port connected to SW2 the root port.</p>
        
        <p className="mb-4">How about SW5 root port? SW5 has two paths to reach SW1 but they have same path cost. Also both ports connected to SW4 so the Switch ID value is the same too. Therefore we have to use step 3: the lowest Sender Port ID wins. In this case SW4 has two ports fa0/1 and fa0/2 so fa0/1 wins and SW5 will choose the port connected to fa0/1 of SW4 the root port.</p>
        
        <div className="flex justify-center mb-6">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/STP/Root_port_election_topology3.jpg" 
            alt="Final Root Ports" 
            width="397" 
            height="406"
          />
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="font-semibold">In this topology we have to use up to step 3 as the tie-breaker.</p>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default StpRootPort;