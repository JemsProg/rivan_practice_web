import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const SecurityConceptsTutorial = () => {
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
    <div
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-4">Key Security Concepts Tutorial</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-6">
        <p className="mb-6">
          In the digital world, where we use computers and the internet for many things, keeping our information safe is one of the most important tasks. This tutorial will explore some of the popular and important security concepts, making it easier for us to understand and use them to keep our online world secure and private.
        </p>
        
        <p className="mb-6">
          Let's take an example of a common house, which is typically built using bricks, stones, or concrete blocks. They are very strong materials which are considered to be secure from theft. But a house cannot be used easily without doors and windows so that the owners can enter and exit using keys. But it means anyone else can gain access as well with some hand tools. The doors and windows (and chimney) are considered <strong>vulnerabilities</strong>.
        </p>
      </div>

      {/* Vulnerabilities Section */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]-600 mb-4">Understanding Vulnerabilities</h2>
        <p className="mb-4">
          In cybersecurity, a <strong>vulnerability</strong> refers to a weakness or flaw in a system's design, implementation, or operation that could be exploited by attackers to compromise the system's security.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/Key_Security_Concepts/vulnerabilities.jpg" 
            alt="House vulnerabilities analogy" 
            width="350"
          />
        </div>
      </div>

      {/* Exploits Section */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]-600 mb-4">What Are Exploits?</h2>
        <p className="mb-4">
          An <strong>exploit</strong> is usually a <span className="underline">tool</span> (a software, sequence of commands...) that takes advantage of a vulnerability in a computer system or application to compromise its security. Exploits are typically designed to target specific vulnerabilities in software, hardware, or systems, allowing attackers to gain unauthorized access, execute malicious code, or perform other harmful actions.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/Key_Security_Concepts/Exploit_Threat.jpg" 
            alt="Exploit to Threat relationship" 
            width="350"
          />
        </div>
      </div>

      {/* Threats Section */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]-600 mb-4">Understanding Threats</h2>
        <p className="mb-6">
          Now if a bad person uses the exploit to open the locked doors or windows to enter the house without permission then it is called a <strong>threat</strong>. But remember threat is a potential, not a problem. It means threat is something that <em>can</em> violate the security. Threats always exist, regardless of any countermeasures.
        </p>
      </div>

      {/* Mitigation Techniques */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]-600 mb-4">Mitigation Techniques</h2>
        <p className="mb-4">
          The owners of the house know about the above threats but they still need the door and windows for convenience. They can use a stronger lock, steel door or window bars to mitigate the threats. They are called <strong>mitigation techniques</strong>. In other words, mitigation technique is just something that can protect against threats.
        </p>
        
        <div className="flex flex-col items-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md mb-2" 
            src="https://www.9tut.com/images/ccna_self_study/Key_Security_Concepts/mitigation_technique.jpg" 
            alt="Security mitigation example" 
            width="250"
          />
          <span className="text-sm text-gray-500">Strong window bars as mitigation</span>
        </div>
      </div>

      {/* Conclusion */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]-600 mb-4">Conclusion</h2>
        <p className="mb-4">
          In summarization:
        </p>
        
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Vulnerabilities</strong> refer to <span className="underline">weaknesses</span> in system components that can be exploited by attackers.
          </li>
          <li>
            <strong>Exploits</strong> are <span className="underline">tools or techniques</span> that take advantage of these vulnerabilities to compromise security.
          </li>
          <li>
            <strong>Threats</strong> includes <span className="underline">potential</span> dangers or malicious activities that can harm computer systems, networks, or data.
          </li>
          <li>
            <strong>Threat mitigation techniques</strong> refer to anything that is used to <span className="underline">reduce</span> the risk of a potential attack.
          </li>
        </ul>
      </div>

      {/* Real-world Examples */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153]-600 mb-4">Real-world Examples</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Software Vulnerability Example</h3>
            <p>
              A common vulnerability might be a web application that doesn't properly validate user input, allowing SQL injection attacks.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Exploit Example</h3>
            <p>
              An exploit could be a specially crafted SQL query that takes advantage of the vulnerable web application to access sensitive database information.
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Mitigation Example</h3>
            <p>
              Implementing input validation and using parameterized queries would be mitigation techniques against SQL injection attacks.
            </p>
          </div>
        </div>
      </div>

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

export default SecurityConceptsTutorial;