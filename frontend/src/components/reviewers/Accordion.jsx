// src/components/Accordion.jsx
import React, { useRef, useEffect, useState } from 'react';
import { animate, inView } from 'motion';
import { Link } from 'react-router-dom';
import { FaNetworkWired } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';

// Default sections data can live here if you want to bundle it directly
const defaultSections =  [
    {
      title: 'Lab Sims for CCNA (please learn all of them along with "New CCNA v1.1 Lab Sims" below)',
      id: 'ccnaSims',
      items: [
        { label: 'IP Services Sim', link: '/reviewer/ip-services' },
        { label: 'IP Services Sim Version 2', link: '/reviewer/ip-services-2' },
        { label: 'Static Routing Configuration Sim', link: '/reviewer/static_routing_configuration_sim' },
        { label: 'OSPF Configuration Sim', link: '/reviewer/ospf_configuration_sim' },
        { label: 'LACP Configuration Sim', link: '/reviewer/lacp-configuration-sim' },
        { label: 'Voice VLAN Configuration Sim', link: '/reviewer/voice-vlan' },
        { label: 'VLAN and Trunking Configuration Sim', link: '/reviewer/vlan-trunking' },
        { label: 'IPv4 and IPv6 Connectivity Sim', link: '/reviewer/ip-connectivity' },
        { label: 'Named Access-list & Port Security Sim', link: '/reviewer/accesslist-port-security' },
        { label: 'Named Access-list & DHCP Snooping Sim', link: '/reviewer/accesslist-dhcp' },
        { label: 'VLAN and CDP Sim', link: '/reviewer/vlan-cdp' },
        { label: 'IPv4 and IPv6 Deployment Sim', link: '/reviewer/ip-deployment' },
        { label: 'Static Routing Configuration Sim 3', link: '/reviewer/static-routing-3' },
        { label: 'Static Routing Configuration Sim 4', link: '/reviewer/static-routing-4' },
        { label: 'VLAN & LLDP Sim', link: '/reviewer/vlan-lldp' },
        { label: 'IPv6 Static Routing Sim', link: '/reviewer/ipv6-static-routing' },
        { label: 'Voice VLAN Configuration Sim 2', link: '/reviewer/voice-vlan-2' },
        { label: 'Named Access-list & DHCP Snooping Sim 2', link: '/reviewer/accesslist-dhcp-2' },
        { label: 'Voice VLAN & LLDP Sim', link: '/reviewer/voice-lldp' },
        { label: 'Allowed, Native VLAN & LACP Sim', link: '/reviewer/native-vlan-lacp' },
        { label: 'ISL Trunking and LACP Sim', link: '/reviewer/isl-lacp' }
      ]
    },
    {
      title: 'New CCNA v1.1 Lab Sims',
      id: 'ccnaV11',
      items: [
        { label: 'VLAN & CDP Sim 2', link: '/reviewer/vlan-cdp-2' }, // DONE 
        { label: 'IPv4 and IPv6 Assignment Sim', link: '/reviewer/ip-assignment' },  // DONE 
        { label: 'VLAN CDP & LLDP Sim', link: '/reviewer/vlan-cdp-lldp' },  // DONE 
        { label: 'OSPF Configuration Sim 2', link: '/reviewer/ospf-2' }, // DONE 
        { label: 'OSPF Configuration Sim 3', link: '/reviewer/ospf-3' }, // DONE 
        { label: 'Trunking & LACP Sim', link: '/reviewer/trunking-lacp' }, // DONE 
        { label: 'VLAN Configuration Sim', link: '/reviewer/vlan-config' }, // DONE 
        { label: 'Allowed, Native VLAN & LACP Sim 2', link: '/reviewer/native-vlan-lacp-2' }, // DONE 
        { label: '802.1Q Trunking & LACP', link: '/reviewer/8021q-lacp' },  // DONE 
        { label: 'IPv4 and IPv6 Assignment Sim 2', link: '/reviewer/ip-assignment-2' }, // DONE 
        { label: '802.1Q Trunking, Native VLAN & LACP', link: '/reviewer/8021q-native-lacp' },
        { label: 'Static Routing Configuration Sim 5', link: '/reviewer/static-routing-5' },
        { label: 'Static Routing Configuration Sim 6', link: '/reviewer/static-routing-6' }
      ]
    },
    {
      title: 'Below Sims are old and retired so you do not need to learn them',
      id: 'retiredSims',
      items: [
        { label: 'Static Routing Configuration Sim 2', link: '/reviewer/static-routing-2' }
      ]
    },
    {
      title: 'CCNA Training',
      id: 'ccnaTraining',
      items: [
        { label: 'IP Services Sim', link: '/reviewer/ip-services' },
        { label: 'CCNA Tutorials, Practice Labs & Lab Challenges', link: '/reviewer/training/tutorials-labs' },
        { label: 'Spine-Leaf Architecture Tutorial', link: '#' },
        { label: 'Generative AI vs Predictive AI Tutorial', link: '#' },
        { label: 'REST API Tutorial', link: '#' },
        { label: 'Network Time Protocol (NTP) Tutorial', link: '#' },
        { label: 'DHCP Snooping Tutorial', link: '#' },
        { label: 'What is SDN?', link: '#' },
        { label: 'How a router makes a forwarding decision', link: '#' },
        { label: 'Configure SSH for Remote Access on Cisco Router', link: '#' },
        { label: 'Key Security Concepts Tutorial', link: '#' },
        { label: 'Forwarding per-hop behavior (PHB) for QoS Tutorial', link: '#' },
        { label: 'Port Security Tutorial', link: '#' },
        { label: 'Puppet Tutorial', link: '#' },
        { label: 'Chef Tutorial', link: '#' },
        { label: 'Ansible Tutorial', link: '#' },
        { label: 'JSON Tutorial', link: '#' },
        { label: 'Layer 2 Threats and Security Features', link: '#' },
        { label: 'AAA TACACS+ and RADIUS Tutorial', link: '#' },
        { label: 'STP Root Port Election Tutorial', link: '#' },
        { label: 'TCP and UDP Tutorial', link: '#' },
        { label: 'WAN Tutorial', link: '#' },
        { label: 'DHCP Tutorial', link: '#' },
        { label: 'Simple Network Management Protocol SNMP Tutorial', link: '#' },
        { label: 'Syslog Tutorial', link: '#' },
        { label: 'EtherChannel Tutorial', link: '#' },
        { label: 'Hot Standby Router Protocol HSRP Tutorial', link: '#' },
        { label: 'InterVLAN Routing Tutorial', link: '#' },
        { label: 'Cisco Command Line Interface CLI', link: '#' },
        { label: 'Cisco Router Boot Sequence Tutorial', link: '#' },
        { label: 'OSI Model Tutorial', link: '#' },
        { label: 'Subnetting Tutorial – Subnetting Made Easy', link: '#' },
        { label: 'Frame Relay Tutorial', link: '#' },
        { label: 'Wireless Tutorial', link: '#' },
        { label: 'Virtual Local Area Network VLAN Tutorial', link: '#' },
        { label: 'VLAN Trunking Protocol VTP Tutorial', link: '#' },
        { label: 'IPv6 Tutorial', link: '#' },
        { label: 'Rapid Spanning Tree Protocol RSTP Tutorial', link: '#' },
        { label: 'Spanning Tree Protocol STP Tutorial', link: '#' },
        { label: 'Network Address Translation NAT Tutorial', link: '#' },
        { label: 'Access List Tutorial', link: '#' },
        { label: 'RIP Tutorial', link: '#' },
        { label: 'EIGRP Tutorial', link: '#' },
        { label: 'OSPF Tutorial', link: '#' },
        { label: 'Practice CCNA GNS3 Labs', link: '#' },
        { label: 'CCNA Lab Challenges', link: '#' }
      ]
    },
    {
      title: 'CCNA 200-301',
      id: 'ccna200301',
      items: [
        { label: 'CCNA FAQs & Tips', link: '#' },
        { label: 'Basic Questions', link: '#' },
        { label: 'Topology Architecture Questions', link: '#' },
        { label: 'Cloud & Virtualization Questions', link: '#' },
        { label: 'CDP & LLDP Questions', link: '#' },
        { label: 'Switch Questions', link: '#' },
        { label: 'VLAN & Trunking Questions', link: '#' },
        { label: 'VLAN & Trunking Questions 2', link: '#' },
        { label: 'STP & VTP Questions', link: '#' },
        { label: 'EtherChannel Questions', link: '#' },
        { label: 'TCP & UDP Questions', link: '#' },
        { label: 'IP Address & Subnetting Questions', link: '#' },
        { label: 'IP Routing Questions', link: '#' },
        { label: 'IP Routing Questions 2', link: '#' },
        { label: 'OSPF Questions', link: '#' },
        { label: 'OSPF Questions 2', link: '#' },
        { label: 'EIGRP Questions', link: '#' },
        { label: 'NAT Questions', link: '#' },
        { label: 'NTP Questions', link: '#' },
        { label: 'Syslog Questions', link: '#' },
        { label: 'HSRP Questions', link: '#' },
        { label: 'Access-list Questions', link: '#' },
        { label: 'AAA Questions', link: '#' },
        { label: 'Security Questions', link: '#' },
        { label: 'Security Questions 2', link: '#' },
        { label: 'DAI Questions', link: '#' },
        { label: 'IPv6 Questions', link: '#' },
        { label: 'DNS Questions', link: '#' },
        { label: 'QoS Questions', link: '#' },
        { label: 'Port Security Questions', link: '#' },
        { label: 'Wireless Questions', link: '#' },
        { label: 'Wireless Questions 2', link: '#' },
        { label: 'SDN Questions', link: '#' },
        { label: 'DNA Center Questions', link: '#' },
        { label: 'Drag Drop Questions', link: '#' },
        { label: 'Drag Drop Questions 2', link: '#' },
        { label: 'Drag Drop Questions 3', link: '#' },
        { label: 'VPN Questions', link: '#' },
        { label: 'DHCP Questions', link: '#' },
        { label: 'Automation Questions', link: '#' },
        { label: 'Miscellaneous Questions', link: '#' },
        { label: 'Share your CCNA Experience', link: '#' }
      ]
    },
    {
      title: 'Network Resources',
      id: 'networkResources',
      items: [
        { label: 'Free Router Simulators', link: '#' },
        { label: 'CCNA Website', link: '#' },
        { label: 'ENCOR Website', link: '#' },
        { label: 'ENSDWI Website', link: '#' },
        { label: 'ENARSI Website', link: '#' },
        { label: 'DevNet Website', link: '#' },
        { label: 'CCIE R&S Website', link: '#' },
        { label: 'Security Website', link: '#' },
        { label: 'Wireless Website', link: '#' },
        { label: 'Design Website', link: '#' },
        { label: 'Data Center Website', link: '#' },
        { label: 'Service Provider Website', link: '#' },
        { label: 'Collaboration Website', link: '#' }
      ]
      }
  ];

/**
 * A reusable accordion component. Usage:
 *  <Accordion sections={sectionsArray} />
 *
 * Or omit `sections` to use the built-in defaults:
 *  <Accordion />
 */
const Accordion = ({ sections = defaultSections, className = '' }) => {
  const sectionRef = useRef(null);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
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

  const toggleSection = id => setOpenSection(prev => (prev === id ? null : id));

  return (
    <div ref={sectionRef} className={className}>
      {sections.map(section => (
        <div
          key={section.id}
          data-animate
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <button
            onClick={() => toggleSection(section.id)}
            className="flex items-center w-full bg-[#1F305E] text-white px-4 py-3 rounded-md font-semibold text-left"
          >
            {section.icon || <FaNetworkWired className="mr-2" />}
            <span className="ml-2">{section.title}</span>
            <BsChevronDown
              className={`ml-auto transform transition-transform ${
                openSection === section.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openSection === section.id && (
            <ul className="bg-white border border-t-0 rounded-b-md shadow max-h-80 overflow-y-auto">
              {section.items.map(item => (
                <li key={item.link} className="border-b last:border-b-0">
                  <Link to={item.link} className="block px-4 py-2 hover:bg-gray-100 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
