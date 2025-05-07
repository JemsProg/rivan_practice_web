import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const StaticRoutingConfigSim5 = () => {
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
        <h1 className="text-3xl font-bold mb-4">Static Routing Configuration Sim 5</h1>
      </div>

      {/* Tasks Overview */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-4"><strong>Tasks</strong></p>
        <p className="mb-4">
          <strong>Task 1</strong>
          <br />
          + Configure a host route on R5 for the destination of 10.200.220.6.
          <br />
          + Configure a static default route on R1 preferring the path through R3 towards R6.
          <br />
          + From R5, use traceroute and ping to verify the path towards and reachability of R6.
        </p>
        <p className="mb-6">
          <strong>Task 2</strong>
          <br />
          + Configure a floating static default route on R1, preferring the path through R2 towards R6 if the link to R3 should fail.
          <br />
          + Configure the administrative distance for 225.
          <br />
          + Configure a static route on R2 to forward the return traffic towards 10.100.110.0/25.
          <br />
          + After shutting interface e0/1 on R1, use traceroute and ping from R5 to verify path towards and reachability of R6.
        </p>
      </div>

      {/* Topology Image */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="flex justify-center mb-8">
        <img
          fetchPriority="high"
          decoding="async"
          className="rounded shadow"
          src="https://www.9tut.com/images/ccna/labsim/Static_Routing_Configuration_Sim_5/topology.jpg"
          alt="topology"
          width="298"
          height="411"
        />
      </div>

    

      {/* Task 1 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 1.</strong></p>
        <p className="mb-4">
          + Configure a host route on R5 for the destination of 10.200.220.6.
        </p>
        <p className="mb-4">
          A host route is an IPv4 address with a 32-bit mask (255.255.255.255). In this task, we configure R5 to route to the destination of 10.200.220.6 with the next-hop of <strong>10.100.110.1</strong> (interface E0/2 of R1).
        </p>
        <p className="mb-2">On R5:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R5(config)#ip route 10.200.220.6 255.255.255.255 10.100.110.1
        </pre>
        <p className="mb-4">
          + Configure a static default route on R1 preferring the path through R3 towards R6.
        </p>
        <p className="mb-4">
          A default static route is simply a static route with 0.0.0.0/0 as the destination IPv4 address.
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config)#ip route 0.0.0.0 0.0.0.0 10.133.13.3
        </pre>
        <p className="mb-4">
          + From R5, use traceroute and ping to verify the path towards and reachability of R6.
        </p>
        <p className="mb-2">On R5:</p>
        <p className="mb-2">Check with ping:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R5(config)#exit<br />
          R5#ping 10.200.220.6<br />
          .!!!! -&gt; successful
        </pre>
        <p className="mb-2">Check with traceroute:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R5#traceroute 10.200.220.6<br />
          Type escape sequence to abort.<br />
          Tracing the route to traceroute 10.200.220.6<br /><br />
          1   10.100.110.1    0 msec    0 msec    0 msec    //R1<br />
          2   10.133.13.3     0 msec    0 msec    0 msec    //R3<br />
          3   10.34.34.4      0 msec    0 msec    0 msec    //R4<br />
          4   10.200.220.6    0 msec    0 msec    0 msec    //R6
        </pre>
        <p className="mb-6">
          So the packets go from R5 → R1 → R3 → R4 → R6
        </p>
      </div>

      {/* Task 2 */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2"><strong>Task 2.</strong></p>
        <p className="mb-4">
          + Configure a floating static default route on R1, preferring the path through R2 towards R6 if the link to R3 should fail.
          <br />
          + Configure the administrative distance for 225.
        </p>
        <p className="mb-2">On R1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config)#ip route 0.0.0.0 0.0.0.0 10.122.12.2 225
        </pre>
        <p className="mb-4">
          + Configure a static route on R2 to forward the return traffic towards 10.100.110.0/25.
        </p>
        <p className="mb-2">On R2:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R2(config)#ip route 10.100.110.0 255.255.255.128 10.122.12.1
        </pre>
        <p className="mb-4">
          + After shutting interface e0/1 on R1, use traceroute and ping from R5 to verify path towards and reachability of R6.
        </p>
        <p className="mb-2">On R1, shut down interface E0/1:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1(config)#interface e0/1<br />
          R1(config-if)#shut<br />
          R1(config-if)#exit<br />
          R1(config)#exit
        </pre>
        <p className="mb-2">Check with ping:</p>
        <p className="mb-2">On R5:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4 whitespace-pre-wrap text-sm">
          R5(config)#exit<br />
          R5#ping 10.200.220.6<br />
          !!!!! -&gt; successful
        </pre>
        <p className="mb-2">Check with traceroute:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R5#traceroute 10.200.220.6<br />
          Type escape sequence to abort.<br />
          Tracing the route to traceroute 10.200.220.6<br /><br />
          1   10.100.110.1    0 msec    0 msec    0 msec    //R1<br />
          2   10.122.12.2     0 msec    0 msec    0 msec    //R2<br />
          3   10.240.24.4     0 msec    0 msec    0 msec    //R4<br />
          4   10.200.220.6    0 msec    0 msec    0 msec    //R6
        </pre>
        <p className="mb-6">
          So the packets go from R5 → R1 → R2 → R4 → R6
        </p>
      </div>

      {/* Save Config */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <p className="mb-2 text-blue-600 font-semibold">Save the configuration</p>
        <p className="mb-2">On R1 & R5:</p>
        <pre className="bg-gray-100 p-4 rounded mb-6 whitespace-pre-wrap text-sm">
          R1#,R2#,R5#copy running-config startup-config
        </pre>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default StaticRoutingConfigSim5;