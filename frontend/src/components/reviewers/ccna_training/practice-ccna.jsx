import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const PracticeCCna = () => {
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

  const labs = [
    {
      title: "Static Routing Configuration Sim 6",
      content: (
        <>
          <p className="mb-4">In this real world scenario, we will configure R1 as a DHCP server while Client 1 will be DHCP client with the topology shown below:</p>
          <img 
            src="https://www.9tut.com/images/Practice_Labs/Configure_DHCP/DHCP_Assignment_topology.jpg" 
            alt="DHCP Assignment topology" 
            className="mx-auto mb-4 rounded-lg shadow-md"
          />
        </>
      ),
      link: "https://www.9tut.com/configure-dhcp-packet-tracer-lab#more-7668"
    },
    {
      title: "GRE Tunnel Lab",
      content: (
        <>
          <p className="mb-4">In this lab we will configure GRE Tunnel between R1 & R2. Notice that in the topology below, R1 & R2 are not directly connect to each other. They are connected through R3 only.</p>
          <img 
            src="https://www.9tut.com/images/GNS3Labs/GRE_Tunnel/GRE_Configuration.jpg" 
            alt="GRE Configuration" 
            className="mx-auto mb-4 rounded-lg shadow-md"
          />
        </>
      ),
      link: "https://www.9tut.com/gre-tunnel-lab#more-4091"
    },
    {
      title: "Basic BGP Configuration",
      content: (
        <>
          <p className="mb-4">In this lab we will learn a simple eBGP (two BGP routers with different Autonomous System numbers) configuration between two routers with the topology below:</p>
          <img 
            src="https://www.9tut.com/images/GNS3Labs/BGP/BGP_Config.jpg" 
            alt="BGP Config" 
            className="mx-auto mb-4 rounded-lg shadow-md"
          />
          <p className="mb-4">First we need to configure some interfaces on two routers as follows:</p>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-200">
                    R1(config)#interface fastethernet0/0<br />
                    R1(config-if)#ip address 11.0.0.1 255.255.255.0<br />
                    R1(config-if)#no shutdown<br />
                    R1(config-if)#interface loopback 0<br />
                    R1(config-if)#ip address 1.1.1.1 255.255.255.0
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    R2(config)#interface fastethernet0/0<br />
                    R2(config-if)#ip address 11.0.0.2 255.255.255.0<br />
                    R2(config-if)#no shutdown<br />
                    R2(config-if)#interface loopback 0<br />
                    R2(config-if)#ip address 2.2.2.2 255.255.255.0
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
      link: "https://www.9tut.com/basic-bgp-configuration#more-2818"
    },
    // Add more labs here following the same structure
  ];

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Practice CCNA GNS3 Labs</h1>
        <p className="text-lg text-gray-600">A collection of hands-on labs to practice your CCNA networking skills using GNS3.</p>
      </div>

      {/* Labs List */}
      <div className="space-y-12">
        {labs.map((lab, index) => (
          <div 
            key={index}
            data-animate 
            style={{ opacity: 0, transform: 'translateY(30px)' }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{lab.title}</h2>
              <div className="prose max-w-none text-gray-700 mb-6">
                {lab.content}
              </div>
              <a 
                href={lab.link} 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Read More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion */}
      <div 
        data-animate 
        style={{ opacity: 0, transform: 'translateY(30px)' }} 
        className="mt-16 mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <Accordion className="space-y-2 bg-white rounded-xl shadow-md overflow-hidden" />
      </div>
    </div>
  );
};

export default PracticeCCna;