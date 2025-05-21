import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const SnmpTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-[#0D2153]">Simple Network Management Protocol SNMP Tutorial</h1>
      </div>

      {/* Content */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-6">
        <p className="mb-6">
          Building a working network is important but monitoring its health is as important as building it. Luckily we have tools to make administrator's life easier and SNMP is one among of them. SNMP presents in most of the network regardless of the size of that network. And understanding how SNMP works is really important and that what we will learn in this tutorial.
        </p>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Understand SNMP</h2>
        <p className="mb-4">SNMP consists of 3 items:</p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>SNMP Manager</strong> (sometimes called Network Management System – NMS): a software runs on the device of the network administrator (in most case, a computer) to monitor the network.</li>
          <li><strong>SNMP Agent:</strong> a software runs on network devices that we want to monitor (router, switch, server...)</li>
          <li><strong>Management Information Base</strong> (MIB): is the collection of managed objects. This components makes sure that the data exchange between the manager and the agent remains structured. In other words, MIB contains a set of questions that the SNMP Manager can ask the Agent (and the Agent can understand them). MIB is commonly shared between the Agent and Manager.</li>
        </ul>

        <div className="flex justify-center my-8">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/SNMP/SNMP_Components.jpg" 
            alt="SNMP Components" 
            width={438} 
            height={239} 
          />
        </div>

        <p className="mb-6">
          For example, in the topology above you want to monitor a router, a server and a Multilayer Switch. You can run SNMP Agent on all of them. Then on a PC you install a SNMP Manager software to receive monitoring information. SNMP is the protocol running between the Manager and Agent. SNMP communication between Manager and Agent takes place in form of messages. The monitoring process must be done via a MIB which is a standardized database and it contains parameters/objects to describe these networking devices (like IP addresses, interfaces, CPU utilization, ...). Therefore the monitoring process now becomes the process of GET and SET the information from the MIB.
        </p>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">SNMP Versions</h2>
        <p className="mb-4">SNMP has multiple versions but there are three main versions:</p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>SNMP version 1</strong></li>
          <li><strong>SNMP version 2c</strong></li>
          <li><strong>SNMP version 3</strong></li>
        </ul>

        <p className="mb-4">
          SNMPv1 is the original version and is very legacy so it should not be used in our network. SNMPv2c updated the original protocol and offered some enhancements. One of the noticeable enhancement is the introduction of INFORM and GETBULK messages which will be explain later in this tutorial.
        </p>

        <p className="mb-4">
          Both SNMPv1 and v2 did not focus much on security and they provide security based on <strong>community string</strong> only. Community string is really just a clear text password (without encryption). Any data sent in clear text over a network is vulnerable to packet sniffing and interception. There are two types of community strings in SNMPv2c:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Read-only (RO):</strong> gives read-only access to the MIB objects which is safer and preferred to other method.</li>
          <li><strong>Read-write (RW):</strong> gives read and write access to the MIB objects. This method allows SNMP Manager to change the configuration of the managed router/switch so be careful with this type.</li>
        </ul>

        <p className="mb-6">
          The community string defined on the SNMP Manager must match one of the community strings on the Agents in order for the Manager to access the Agents.
        </p>

        <p className="mb-6">
          SNMPv3 provides significant enhancements to address the security weaknesses existing in the earlier versions. The concept of community string does not exist in this version. SNMPv3 provides a far more secure communication using entities, users and groups. This is achieved by implementing three new major features:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Message integrity:</strong> ensuring that a packet has not been modified in transit.</li>
          <li><strong>Authentication:</strong> by using password hashing (based on the HMAC-MD5 or HMAC-SHA algorithms) to ensure the message is from a valid source on the network.</li>
          <li><strong>Privacy (Encryption):</strong> by using encryption (56-bit DES encryption, for example) to encrypt the contents of a packet.</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="font-semibold">Note:</p>
          <p>Although SNMPv3 offers better security but SNMPv2c however is still more common. Cisco has supported SNMPv3 in their routers since IOS version 12.0.3T.</p>
        </div>

        <p className="mb-6">
          In the next part we will learn the SNMP messages used in each version.
        </p>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">SNMP Messages</h2>
        <p className="mb-4">SNMP Messages are used to communicate between the SNMP Manager and Agents. SNMPv1 supports five basic SNMP messages:</p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>SNMP GET</strong></li>
          <li><strong>SNMP GET-NEXT</strong></li>
          <li><strong>SNMP GET-RESPONSE</strong></li>
          <li><strong>SNMP SET</strong></li>
          <li><strong>SNMP TRAP</strong></li>
        </ul>

        <p className="mb-4">
          In general, the GET messages are sent by the SNMP Manager to retrieve information from the SNMP Agents while the SET messages are used by the SNMP Manager to modify or assign the value to the SNMP Agents.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p><strong>Note:</strong> GET-NEXT retrieves the value of the next object in the MIB.</p>
        </div>

        <p className="mb-4">
          The GET-RESPONSE message is used by the SNMP Agents to reply to GET and GET-NEXT messages.
        </p>

        <p className="mb-6">
          Unlike GET or SET messages, TRAP messages are initiated from the SNMP Agents to inform the SNMP Manager on the occurrence of an event. For example, suppose you want to be alarmed when the CPU usage of your server goes above 80%. But it would be very annoying if the administrator has to actively use the GET message to check the CPU usage from time to time. In this case, the TRAP message is very suitable for that purpose because the administrator would only be informed from the CPU itself when that event occurs. The figure below shows the direction of SNMP messages:
        </p>

        <div className="flex justify-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/SNMP/SNMP_Messages_Flow.jpg" 
            alt="SNMP Messages Flow" 
            width={438} 
            height={239} 
          />
        </div>

        <p className="mb-6">
          From SNMPv2c, two new messages were added: INFORM and GETBULK.
        </p>

        <p className="mb-4">
          <strong>INFORM:</strong> An disadvantage of TRAP message is unreliable. SNMP communicates via UDP so it is unreliable because when the SNMP Agents send TRAP message to the SNMP Manager it cannot know if its messages arrive to the SNMP Manager. To amend this problem, a new type of message, called INFORM, was introduced from SNMPv2. With INFORM message, the SNMP Manager can now acknowledge that the message has been received at its end with an SNMP response protocol data unit (PDU). If the sender never receives a response, the INFORM can be sent again. Thus, INFORMs are more likely to reach their intended destination.
        </p>

        <p className="mb-6">
          <strong>GETBULK:</strong> The GETBULK operation efficiently retrieve large blocks of data, such as multiple rows in a table. GETBULK fills a response message with as much of the requested data as will fit.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p><strong>Note:</strong> There is no new message types on SNMPv3 compared to SNMPv2c.</p>
        </div>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">SNMP Polling vs Trap</h2>
        <p className="mb-4">In SNMP Polling, the SNMP manager initiates the conversation asking the network devices for information:</p>

        <div className="flex justify-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/SNMP/SNMP_Polling.jpg" 
            alt="SNMP Polling" 
            width={438} 
            height={239} 
          />
        </div>

        <p className="mb-4">SNMP traps are the opposite where the network devices are sending information to the SNMP Manager right away when something happens:</p>

        <div className="flex justify-center my-8">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/SNMP/SNMP_Trap.jpg" 
            alt="SNMP Trap" 
            width={438} 
            height={239} 
          />
        </div>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">SNMP Configuration</h2>
        <p className="mb-6">
          In the last part we will go through a simple SNMP configuration so that you can have a closer look at how SNMP works. SNMPv2c is still more popular than SNMPv3 so we will configure SNMPv2c.
        </p>

        <h3 className="text-xl font-semibold mb-4">1. Configure a community string</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">Router(config)#snmp-server community 9tut ro</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6">In this case our community string named "9tut". The <strong>ro</strong> stands for read-only method.</p>

        <h3 className="text-xl font-semibold mb-4">2. Configure the IP address of a host receiver (SNMP Manager) for SNMPv2c TRAPs or INFORMs</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">Router(config)#snmp-server host 10.10.10.12 version 2c TRAPCOMM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6">"TRAPCOMM" is the community string for TRAP.</p>

        <h3 className="text-xl font-semibold mb-4">3. Enable the SNMP Traps</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">Router(config)#snmp-server enable traps</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">If we don't want to enable all trap messages we can specify which traps we want to be notified. For example, if you only want to receive traps about link up/down notification type then use this command instead:</p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">Router(config)#snmp-server enable traps link cisco</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-6">
          Of course we have to configure an SNMP Manager on a computer with these community strings so that they can communicate.
        </p>

        <p className="mb-6">
          Good resource and reference: <a href="http://docwiki.cisco.com/wiki/Simple_Network_Management_Protocol" target="_blank" rel="noopener" className="text-[#0D2153] hover:underline">http://docwiki.cisco.com/wiki/Simple_Network_Management_Protocol</a>.
        </p>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default SnmpTutorial;