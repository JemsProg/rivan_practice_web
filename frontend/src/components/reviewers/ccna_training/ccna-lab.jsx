import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const CcnaLabChallenges = () => {
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

  const challenges = [
    {
      id: "post-2777",
      title: "Checking Lab Challenge 4 (Basic Network Analysis)",
      content: (
        <>
          <p className="font-semibold text-blue-600 mb-2">Introduction</p>
          <p className="mb-4">You are tasked to check the network configuration of a new company and answer some related questions. This company has four switches and four routers connected as shown in the topology. Because of security reasons, the traceroute commands are disabled on all devices.</p>
          <p className="mb-4 italic text-gray-600">Note: You are not allowed to configure anything by company policy. The network is operating correctly so just use various "show" commands to learn how this network works.</p>
          <p className="mb-4">This lab is good to help you understand how a simple network with routers and switches work together. But it includes many CCNA topics so you should grasp the concept well before taking this lab challenge.</p>
          <img 
            src="https://www.9tut.com/lab_challenges/Checking_Configs_CCNA/Topology.jpg" 
            alt="Network Topology" 
            className="mx-auto mb-4 rounded-lg border border-gray-200 shadow-md"
          />
        </>
      ),
      link: "https://www.9tut.com/checking-lab-challenge-4#more-2777"
    },
    {
      id: "post-2755",
      title: "Checking Lab Challenge 3 (VTP, STP, EtherChannel)",
      content: (
        <>
          <p className="mb-4">You are tasked to check the network configuration of a new company and answer some related questions. This company has four switches connected as shown in the topology below.</p>
          <img 
            src="https://www.9tut.com/lab_challenges/Checking_Configs_Switch/Switch_Topology.jpg" 
            alt="Switch Topology" 
            className="mx-auto mb-4 rounded-lg border border-gray-200 shadow-md"
          />
        </>
      ),
      link: "https://www.9tut.com/checking-lab-challenge-3#more-2755"
    },
    {
      id: "post-2712",
      title: "Config Lab Challenge 2 (VTP)",
      content: (
        <>
          <p className="mb-4">Your company decided to implement four new switches as shown in the topology. Your task is to configure VTP on these switches. Please follow the instructions below to complete this task. Suppose trunking has been configured correctly.</p>
          <img 
            src="https://www.9tut.com/lab_challenges/Config_Lab_Challenge_2/Topology.jpg" 
            alt="VTP Configuration Topology" 
            className="mx-auto mb-4 rounded-lg border border-gray-200 shadow-md"
          />
        </>
      ),
      link: "https://www.9tut.com/config-lab-challenge-2#more-2712"
    },
    // Add more challenges following the same pattern
  ];

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">CCNA Lab Challenges</h1>
        <p className="text-lg text-gray-600">Test your networking knowledge with these practical CCNA challenges</p>
      </div>

      {/* Challenges List */}
      <div className="space-y-8">
        {challenges.map((challenge, index) => (
          <div 
            key={challenge.id}
            data-animate 
            style={{ opacity: 0, transform: 'translateY(30px)' }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-700 hover:text-blue-800 transition-colors duration-300">
                <a href={challenge.link} className="hover:underline">
                  {challenge.title}
                </a>
              </h2>
              <div className="prose max-w-none text-gray-700 mb-6">
                {challenge.content}
              </div>
              <div className="flex justify-end">
                <a 
                  href={challenge.link} 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  View Challenge Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion FAQ Section */}
      <div 
        data-animate 
        style={{ opacity: 0, transform: 'translateY(30px)' }} 
        className="mt-16 mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Lab Challenge FAQs</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Accordion className="divide-y divide-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default CcnaLabChallenges;