import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";

const SpineLeafTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-6">Spine-Leaf Architecture Tutorial</h1>
      </div>

      {/* Content */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="space-y-6">
        <p>
          Spine-leaf architecture is a modern network topology widely used in data centers and cloud environments. 
          It's designed to offer improved scalability, high availability, and consistent low-latency communication. 
          Unlike traditional three-tiered hierarchical networks (core, distribution, access layers), the spine-leaf 
          architecture consists of only two layers of switches: spine and leaf switches.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  <img 
                    src="https://www.9tut.com/images/ccna/Topology_Architecture/three_tier_architecture.jpg" 
                    alt="Traditional three-tier architecture" 
                    className="mx-auto"
                    width="370"
                    height="279"
                  />
                  <p className="text-center text-sm mt-2">Traditional three-tier architecture</p>
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <img 
                    src="https://www.9tut.com/images/ccna/ACI/Spine_Leaf.jpg" 
                    alt="Spine-Leaf Architecture" 
                    className="mx-auto"
                    width="556"
                    height="315"
                  />
                  <p className="text-sm mt-2">Spine-Leaf Architecture</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The spine layer consists of switches that perform routing and work as the core of the network. 
          The leaf layer involves access switches that connect to servers, storage devices, and other end-users. 
          This structure helps data center networks reduce hop count, reduce network latency and prevent bottlenecks, 
          which are main issues of three-tier architecture.
        </p>

        {/* Components Section */}
        <div>
          <h2 className="text-[#0D2153] font-bold text-xl mb-4">Components of Spine-Leaf Architecture</h2>
          <p>
            As said above, the spine-leaf architecture consists of only two layers of switches: spine and leaf switches.
          </p>
          
          <p className="mt-4">
            <strong>+ Spine Switches</strong>: These are high-speed switches that form the backbone of the architecture. 
            Each spine switch is connected to every leaf switch in the network. The main function of spine switches 
            is to interconnect the leaf switches and ensure data can travel between any two leaf switches with low latency.
          </p>
          
          <p className="mt-4">
            <strong>+ Leaf Switches</strong>: Leaf switches connect directly to the endpoints (servers, storage devices, routers...) 
            and to every spine switch. Endpoints communicate with each other via leaf switches, and traffic between 
            endpoints on different leaf switches passes through one or more spine switches. Leaf switches are typically 
            deployed at the top of the rack (TOR).
          </p>
          
          <p className="mt-4">
            The following rules must be applied to spine-leaf architecture of each site:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Each leaf switch must connect to every spine switch.</li>
            <li>Each spine switch must connect to every leaf switch.</li>
            <li>Leaf switches cannot connect to each other.</li>
            <li>Spine switches cannot connect to each other.</li>
            <li>Endpoints connect only to the leaf switches.</li>
          </ul>
        </div>

        {/* How It Works Section */}
        <div className="mt-8">
          <h2 className="text-[#0D2153] font-bold text-xl mb-4">How Spine-Leaf Architecture Works</h2>
          <p>
            In a spine-leaf architecture, each leaf switch is connected to all spine switches, creating a full mesh 
            between the leaf and spine layers. There are no direct connections between spine switches or between 
            leaf switches. The key idea is that any traffic between endpoints connected to different leaf switches 
            must pass through the spine layer. There are two types of traffic for this architecture:
          </p>
          
          <p className="mt-4">
            <strong>+ East-West Traffic</strong>: When a server connected to one leaf switch needs to communicate 
            with a server connected to another leaf switch, traffic flows up to a spine switch and then down to 
            the destination leaf switch.
          </p>
          
          <p className="mt-4">
            <strong>+ North-South Traffic</strong>: When a server needs to communicate with an external network 
            (internet or WAN), the traffic typically flows through the leaf switches, which connect to the spine 
            switches, and then to a gateway router.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mt-8">
          <h2 className="text-[#0D2153] font-bold text-xl mb-4">Benefits of Spine-Leaf Architecture</h2>
          
          <div className="space-y-4">
            <p>
              <strong>+ Scalability</strong>: Since each leaf switch connects to every spine switch, adding more 
              leaf switches (and thus more endpoints) doesn't affect the performance. More spine switches can be 
              added to increase bandwidth and support higher loads.
            </p>
            
            <p>
              <strong>+ Predictable Latency</strong>: The architecture is non-blocking, meaning that every packet 
              between any two endpoints takes the same number of hops (usually two hops: from leaf to spine, and 
              back to leaf), so latency is lower and predictable.
            </p>
            
            <img 
              src="https://www.9tut.com/images/ccna_self_study/Spine_Leaf_Architecture/Spine_Leaf_West_East_Traffic.jpg" 
              alt="Spine-Leaf East-West Traffic" 
              className="mx-auto my-4"
              width="556"
              height="315"
            />
            
            <p>
              <strong>+ High Availability</strong>: The full mesh connectivity between leaf and spine ensures 
              redundancy. If one spine switch fails, traffic can still be routed through other spine switches.
            </p>
            
            <p>
              <strong>+ Efficient Use of Bandwidth</strong>: The architecture uses Layer 3 routing such as 
              equal-cost multipath (ECMP) routing so <span className="underline">STP is no longer required</span>, 
              allowing multiple paths for traffic to be used simultaneously, balancing the load and preventing bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpineLeafTutorial;