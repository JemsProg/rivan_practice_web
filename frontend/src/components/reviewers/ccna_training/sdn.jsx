import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const Sdn = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) => {
      inView(
        el,
        () => {
          animate(
            el,
            { opacity: 1, y: 0 },
            { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
          );
        },
        { margin: "-15% 0px -15% 0px" }
      );
    });
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
      {/* Title Section */}
      <section data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <h1 className="text-3xl font-bold mb-6 text-[#0D2153]">Software-Defined Networking (SDN) Fundamentals</h1>
        <p className="text-lg mb-6">
          SDN revolutionizes network architecture by separating the control plane from the data plane.
        </p>
      </section>

      {/* Architecture Comparison */}
      <section data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153]">Traditional vs. SDN Architecture</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-medium mb-3">Traditional (Distributed)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Control plane resides in each device</li>
              <li>Devices make independent decisions</li>
              <li>Requires inter-device communication</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-medium mb-3">SDN (Centralized)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Centralized control in SDN controller</li>
              <li>"King" controlling the network "kingdom"</li>
              <li>Automated configuration of all devices</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <img 
            src="https://www.9tut.com/images/ccna_self_study/SDN/king_chess.jpg" 
            alt="SDN controller as king in chess" 
            className="rounded-lg shadow-md"
            width="78"
            height="200"
          />
        </div>
      </section>

      {/* SDN Interfaces */}
      <section data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153]">SDN Interfaces</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3 text-[#0D2153]">Southbound Interface (SBI)</h3>
          <p className="mb-4">Communicates between SDN controller and network devices using APIs like:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>OpenFlow</li>
            <li>NETCONF</li>
            <li>OpFlex</li>
          </ul>
          <div className="flex justify-center">
            <img 
              src="https://www.9tut.com/images/ccna/SDN/SDN_controller_based_architecture.jpg" 
              alt="SDN controller architecture" 
              className="rounded-lg shadow-md max-w-full h-auto"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-3 text-[#0D2153]">Northbound Interface (NBI)</h3>
          <p className="mb-4">Communicates between administrators and SDN controller using APIs like:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>RESTful APIs (most common)</li>
            <li>SOAP</li>
          </ul>
          <div className="flex justify-center">
            <img 
              src="https://www.9tut.com/images/ccna_self_study/SDN/Northbound_Interface.jpg" 
              alt="Northbound Interface" 
              className="rounded-lg shadow-md"
              width="188"
              height="220"
            />
          </div>
        </div>
      </section>

      {/* API Communication */}
      <section data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153]">API Communication</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
          <p className="mb-4">APIs use client/server architecture where:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Server sends data</li>
            <li>Client receives data</li>
          </ul>
          <div className="flex justify-center">
            <img 
              src="https://www.9tut.com/images/ccna/SDN/Southbound_Northbound_APIs.jpg" 
              alt="Southbound and Northbound APIs" 
              className="rounded-lg shadow-md"
              width="171"
              height="216"
            />
          </div>
        </div>
      </section>

      {/* SDN Benefits */}
      <section data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#0D2153] ">Key Benefits of SDN</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Simplified Network Management",
            "Programmability and Automation",
            "Improved Network Visibility",
            "Enhanced Scalability",
            "Vendor-Neutral Environment",
            "Security Enhancements"
          ].map((benefit, index) => (
            <div key={index} className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h3 className="font-medium text-[#0D2153] ">{benefit}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-[#0D2153] ">SDN Frequently Asked Questions</h2>
        <Accordion className="space-y-4" />
      </section>
    </div>
  );
};

export default Sdn;