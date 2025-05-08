import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const EigrpQuestions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
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
    <section ref={sectionRef} className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">EIGRP Questions</h1>
      <p className="mb-4">
        Note: If you are not sure about EIGRP, please read our{" "}
        <a
          href="https://www.9tut.com/eigrp-routing-protocol-tutorial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          EIGRP Tutorial
        </a>
        .
      </p>

      {/* Question 1 */}
      <div className="mb-8" data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h2 className="font-semibold text-lg mb-2">Question 1</h2>
        <p className="mb-2">
          A router running EIGRP has learned the same route from two different paths. Which
          parameter does the router use to select the best path?
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>A. cost</li>
          <li>B. administrative distance</li>
          <li>C. metric</li>
          <li>D. as-path</li>
        </ul>
        <p className="font-semibold text-green-600">Answer: C</p>
      </div>

      {/* Question 2 */}
      <div className="mb-8" data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h2 className="font-semibold text-lg mb-2">Question 2</h2>
        <p className="mb-2">Which two actions influence the EIGRP route selection process? (Choose two)</p>
        <ul className="list-disc list-inside mb-2">
          <li>
            A. The router calculates the reported distance by multiplying the delay on the exiting
            interface by 256
          </li>
          <li>
            B. The router calculates the best backup path to the destination route and assigns it as
            the feasible successor
          </li>
          <li>
            C. The router calculates the feasible distance of all paths to the destination route
          </li>
          <li>
            D. The advertised distance is calculated by a downstream neighbor to inform the local
            router of the bandwidth on the link
          </li>
          <li>
            E. The router must use the advertised distance as the metric for any given route
          </li>
        </ul>
        <p className="font-semibold text-green-600 mb-2">Answer: B, C</p>

        <h3 className="font-semibold mb-1">Explanation</h3>
        <p className="mb-2">
          The reported (advertised) distance is the cost from the neighbor to the destination.
          Feasible distance is the total cost from the local router to the destination.
        </p>
        <img
          src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_metric.jpg"
          alt="EIGRP Metric"
          className="mx-auto my-4"
          width={320}
          height={200}
        />
        <p className="mb-2">
          Metric formula (default K values):
        </p>
        <img
          src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_fomula.jpg"
          alt="EIGRP Formula"
          className="mx-auto my-4"
          width={649}
          height={77}
        />
        <p>- Answer A is incorrect.</p>
        <p>- Answer B is correct (feasible successor requirement).</p>
        <p>- Answer C is correct (FD is calculated to select best path).</p>
      </div>

      {/* Question 3 */}
      <div className="mb-8" data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h2 className="font-semibold text-lg mb-2">Question 3</h2>
        <p className="mb-2">
          By default, how does EIGRP determine the metric of a route for the routing table?
        </p>
        <ul className="list-disc list-inside mb-2">
          <li>A. It uses the bandwidth and delay values of the path to calculate the route metric</li>
          <li>B. It uses a default metric of 10 for all routes that are learned by the router</li>
          <li>C. It uses a reference Bandwidth and the actual bandwidth of the connected link</li>
          <li>D. It counts the number of hops between the receiving and destination routers</li>
        </ul>
        <p className="font-semibold text-green-600">Answer: A</p>
      </div>

      {/* Question 4 */}
      <div className="mb-8" data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h2 className="font-semibold text-lg mb-2">Question 4</h2>
        <p className="mb-2">Refer to the exhibit:</p>
        <img
          src="https://www.9tut.com/images/ccna/IP_Routing/code_represent.jpg"
          alt="EIGRP Routing Code"
          className="mx-auto my-4"
          width={492}
          height={71}
        />
        <p className="mb-2">Which route type does the routing protocol Code <strong>D</strong> represent?</p>
        <ul className="list-disc list-inside mb-2">
          <li>A. internal BGP route</li>
          <li>B. /24 route of a locally configured IP</li>
          <li>C. statically assigned route</li>
          <li>D. route learned through EIGRP</li>
        </ul>
        <p className="font-semibold text-green-600 mb-2">Answer: D</p>
        <h3 className="font-semibold mb-1">Explanation</h3>
        <p>
          Code “D” stands for EIGRP. “E” was used for EGP, which is the predecessor of BGP.
        </p>
      </div>

      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default EigrpQuestions;
