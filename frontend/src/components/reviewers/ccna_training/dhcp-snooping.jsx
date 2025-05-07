import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DhcpSnooping = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) => {
      inView(
        el,
        () => {
          animate(
            el,
            { opacity: 1, y: 0 },
            { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
          );
        },
        { margin: "-20% 0px -20% 0px" }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
      {/* Title Section */}
      <section
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
      >
        <h1 className="text-3xl font-bold mb-6 text-[#0D2153]">
          DHCP Snooping Configuration Guide
        </h1>
        <p className="text-lg mb-6">
          DHCP Snooping is a security feature that acts like a firewall between
          untrusted hosts and DHCP servers.
        </p>
      </section>

      {/* Key Features */}
      <section
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153]">
          Key Features
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Filters untrusted DHCP messages</li>
          <li>Builds and maintains a DHCP binding table</li>
          <li>Prevents DHCP spoofing attacks</li>
          <li>Simple to configure with just two main steps</li>
        </ul>
      </section>

      {/* Configuration Steps */}
      <section
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153]">
          Configuration Steps
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-medium mb-3">1. Enable DHCP Snooping</h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code>Switch(config)# ip dhcp snooping</code>
          </pre>

          <h3 className="text-xl font-medium mt-6 mb-3">
            2. Configure Trusted Interfaces
          </h3>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
            <code>
              {`Switch(config)# interface Gi0/24
Switch(config-if)# ip dhcp snooping trust`}
            </code>
          </pre>
        </div>
      </section>

      {/* Verification */}
      <section
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153]">
          Verification
        </h2>
        <p className="mb-4">Check DHCP bindings with:</p>
        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>Switch# show ip dhcp snooping binding</code>
        </pre>
        <div className="mt-4 bg-gray-100 p-4 rounded-md border-l-4 border-blue-500">
          <p className="font-medium">Sample Output:</p>
          <pre className="text-sm mt-2">
            {`MAC Address       IP Address    Lease(sec)  Type           VLAN  Interface
00:A3:D1:44:20:46 10.0.0.3     85556       DHCP-Snooping 1     Gi0/0`}
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153]">
          Best Practices
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enable on all access ports where DHCP clients connect</li>
          <li>Only trust ports connected to legitimate DHCP servers</li>
          <li>Consider enabling on a per-VLAN basis for granular control</li>
          <li>
            Combine with DA (Dynamic ARP) Inspection for complete protection
          </li>
        </ul>
      </section>

      {/* Accordion */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12"
      >
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default DhcpSnooping;
