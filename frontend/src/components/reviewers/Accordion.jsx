import React, { useRef, useEffect, useState } from "react";
import { animate, inView } from "motion";
import { Link } from "react-router-dom";
import { FaNetworkWired } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

// Default sections data can live here if you want to bundle it directly
const defaultSections = [
  {
    title:
      'Lab Sims for CCNA (please learn all of them along with "New CCNA v1.1 Lab Sims" below)',
    id: "ccnaSims",
    items: [
      {
        label: "IP Services Sim",
        link: "/ccna-reviewer-course-philippines/ip-services",
      },
      {
        label: "IP Services Sim Version 2",
        link: "/ccna-reviewer-course-philippines/ip-services-2",
      },
      {
        label: "Static Routing Configuration Sim",
        link: "/ccna-reviewer-course-philippines/static_routing_configuration_sim",
      },
      {
        label: "OSPF Configuration Sim",
        link: "/ccna-reviewer-course-philippines/ospf_configuration_sim",
      },
      {
        label: "LACP Configuration Sim",
        link: "/ccna-reviewer-course-philippines/lacp-configuration-sim",
      },
      {
        label: "Voice VLAN Configuration Sim",
        link: "/ccna-reviewer-course-philippines/voice-vlan",
      },
      {
        label: "VLAN and Trunking Configuration Sim",
        link: "/ccna-reviewer-course-philippines/vlan-trunking",
      },
      {
        label: "IPv4 and IPv6 Connectivity Sim",
        link: "/ccna-reviewer-course-philippines/ip-connectivity",
      },
      {
        label: "Named Access-list & Port Security Sim",
        link: "/ccna-reviewer-course-philippines/accesslist-port-security",
      },
      {
        label: "Named Access-list & DHCP Snooping Sim",
        link: "/ccna-reviewer-course-philippines/accesslist-dhcp",
      },
      {
        label: "VLAN and CDP Sim",
        link: "/ccna-reviewer-course-philippines/vlan-cdp",
      },
      {
        label: "IPv4 and IPv6 Deployment Sim",
        link: "/ccna-reviewer-course-philippines/ip-deployment",
      },
      {
        label: "Static Routing Configuration Sim 3",
        link: "/ccna-reviewer-course-philippines/static-routing-3",
      },
      {
        label: "Static Routing Configuration Sim 4",
        link: "/ccna-reviewer-course-philippines/static-routing-4",
      },
      {
        label: "VLAN & LLDP Sim",
        link: "/ccna-reviewer-course-philippines/vlan-lldp",
      },
      {
        label: "IPv6 Static Routing Sim",
        link: "/ccna-reviewer-course-philippines/ipv6-static-routing",
      },
      {
        label: "Voice VLAN Configuration Sim 2",
        link: "/ccna-reviewer-course-philippines/voice-vlan-2",
      },
      {
        label: "Named Access-list & DHCP Snooping Sim 2",
        link: "/ccna-reviewer-course-philippines/accesslist-dhcp-2",
      },
      {
        label: "Voice VLAN & LLDP Sim",
        link: "/ccna-reviewer-course-philippines/voice-lldp",
      },
      {
        label: "Allowed, Native VLAN & LACP Sim",
        link: "/ccna-reviewer-course-philippines/native-vlan-lacp",
      },
      {
        label: "ISL Trunking and LACP Sim",
        link: "/ccna-reviewer-course-philippines/isl-lacp",
      },
    ],
  },
  {
    title: "New CCNA v1.1 Lab Sims",
    id: "ccnaV11",
    items: [
      {
        label: "VLAN & CDP Sim 2",
        link: "/ccna-reviewer-course-philippines/vlan-cdp-2",
      }, // DONE
      {
        label: "IPv4 and IPv6 Assignment Sim",
        link: "/ccna-reviewer-course-philippines/ip-assignment",
      }, // DONE
      {
        label: "VLAN CDP & LLDP Sim",
        link: "/ccna-reviewer-course-philippines/vlan-cdp-lldp",
      }, // DONE
      {
        label: "OSPF Configuration Sim 2",
        link: "/ccna-reviewer-course-philippines/ospf-2",
      }, // DONE
      {
        label: "OSPF Configuration Sim 3",
        link: "/ccna-reviewer-course-philippines/ospf-3",
      }, // DONE
      {
        label: "Trunking & LACP Sim",
        link: "/ccna-reviewer-course-philippines/trunking-lacp",
      }, // DONE
      {
        label: "VLAN Configuration Sim",
        link: "/ccna-reviewer-course-philippines/vlan-config",
      }, // DONE
      {
        label: "Allowed, Native VLAN & LACP Sim 2",
        link: "/ccna-reviewer-course-philippines/native-vlan-lacp-2",
      }, // DONE
      {
        label: "802.1Q Trunking & LACP",
        link: "/ccna-reviewer-course-philippines/8021q-lacp",
      }, // DONE
      {
        label: "IPv4 and IPv6 Assignment Sim 2",
        link: "/ccna-reviewer-course-philippines/ip-assignment-2",
      }, // DONE
      {
        label: "802.1Q Trunking, Native VLAN & LACP",
        link: "/ccna-reviewer-course-philippines/8021q-native-lacp",
      }, // DONE
      {
        label: "Static Routing Configuration Sim 5",
        link: "/ccna-reviewer-course-philippines/static-routing-5",
      }, // DONE
      {
        label: "Static Routing Configuration Sim 6",
        link: "/ccna-reviewer-course-philippines/static-routing-6",
      }, // DONE
    ],
  },
  {
    title: "Below Sims are old and retired so you do not need to learn them",
    id: "retiredSims",
    items: [
      {
        label: "Static Routing Configuration Sim 2",
        link: "/ccna-reviewer-course-philippines/static-routing-2",
      }, // DONE
    ],
  },
  {
    title: "CCNA Training",
    id: "ccnaTraining",
    items: [
      {
        label: "IP Services Sim",
        link: "/ccna-reviewer-course-philippines/ip-services",
      }, // DONE
      {
        label: "CCNA Tutorials, Practice Labs & Lab Challenges",
        link: "/ccna-reviewer-course-philippines/training/tutorials-labs",
      }, // TO BE DISABLED
      {
        label: "Spine-Leaf Architecture Tutorial",
        link: "/ccna-reviewer-course-philippines/training/spine-leaf-tutorial",
      }, // DONE
      {
        label: "Generative AI vs Predictive AI Tutorial",
        link: "/ccna-reviewer-course-philippines/training/ai-tutorial",
      }, // DONE
      {
        label: "REST API Tutorial",
        link: "/ccna-reviewer-course-philippines/training/rest-api",
      }, // DONE
      {
        label: "Network Time Protocol (NTP) Tutorial",
        link: "/ccna-reviewer-course-philippines/training/ntp-tutorial",
      }, // DONE
      {
        label: "DHCP Snooping Tutorial",
        link: "/ccna-reviewer-course-philippines/training/dhcp-snooping",
      }, // DONE
      {
        label: "What is SDN?",
        link: "/ccna-reviewer-course-philippines/training/sdn",
      }, // DONE
      {
        label: "How a router makes a forwarding decision",
        link: "/ccna-reviewer-course-philippines/training/router-decision",
      }, // DONE
      {
        label: "Configure SSH for Remote Access on Cisco Router",
        link: "/ccna-reviewer-course-philippines/training/config-ssh",
      }, // DONE
      {
        label: "Key Security Concepts Tutorial",
        link: "/ccna-reviewer-course-philippines/training/security-concepts-tutorial",
      }, // DONE
      {
        label: "Forwarding per-hop behavior (PHB) for QoS Tutorial",
        link: "/ccna-reviewer-course-philippines/training/qos-phb",
      }, // DONE
      {
        label: "Port Security Tutorial",
        link: "/ccna-reviewer-course-philippines/training/port-security",
      }, //DONE
      {
        label: "Puppet Tutorial",
        link: "/ccna-reviewer-course-philippines/training/puppet-tutorial",
      }, // DONE
      {
        label: "Chef Tutorial",
        link: "/ccna-reviewer-course-philippines/training/chef-tutorial",
      }, // DONE
      {
        label: "Ansible Tutorial",
        link: "/ccna-reviewer-course-philippines/training/ansible-tutorial",
      }, // DONE
      {
        label: "JSON Tutorial",
        link: "/ccna-reviewer-course-philippines/training/json",
      }, // DONE
      {
        label: "Layer 2 Threats and Security Features",
        link: "/ccna-reviewer-course-philippines/training/layer2",
      }, // DONE
      {
        label: "AAA TACACS+ and RADIUS Tutorial",
        link: "/ccna-reviewer-course-philippines/training/radius-tutorial",
      }, // DONE
      {
        label: "STP Root Port Election Tutorial",
        link: "/ccna-reviewer-course-philippines/training/stp-root",
      }, // DONE
      {
        label: "TCP and UDP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/tcp-udp",
      }, // DONE
      {
        label: "WAN Tutorial",
        link: "/ccna-reviewer-course-philippines/training/wan-tutorial",
      }, // DONE
      {
        label: "DHCP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/dhcp-tutorial",
      }, // DONE
      {
        label: "Simple Network Management Protocol SNMP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/snmp-tutorial",
      }, // DONE
      {
        label: "Syslog Tutorial",
        link: "/ccna-reviewer-course-philippines/training/syslog-tutorial",
      }, // DONE
      {
        label: "EtherChannel Tutorial",
        link: "/ccna-reviewer-course-philippines/training/etherchannel-tutorial",
      }, // DONE
      {
        label: "Hot Standby Router Protocol HSRP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/hsrp",
      }, // DONE - NO PAGE 2
      {
        label: "InterVLAN Routing Tutorial",
        link: "/ccna-reviewer-course-philippines/training/intervlan-routing",
      }, // DONE  - NO TAILWIND
      {
        label: "Cisco Command Line Interface CLI",
        link: "/ccna-reviewer-course-philippines/training/cli",
      }, // DONE - NO TAILWIND
      {
        label: "Cisco Router Boot Sequence Tutorial",
        link: "/ccna-reviewer-course-philippines/training/cisco-router-boot",
      }, // DONE - NO TAILWIND
      {
        label: "OSI Model Tutorial",
        link: "/ccna-reviewer-course-philippines/training/osi-model",
      }, // DONE - NO TAILWIND
      {
        label: "Subnetting Tutorial – Subnetting Made Easy",
        link: "/ccna-reviewer-course-philippines/training/subnetting",
      }, // DONE - NO TAILWIND
      {
        label: "Frame Relay Tutorial",
        link: "/ccna-reviewer-course-philippines/training/frame-relay",
      }, // PENDING - PAGE 2,3
      {
        label: "Wireless Tutorial",
        link: "/ccna-reviewer-course-philippines/training/wireless-tutorial",
      }, // PENDING - PAGE 2
      {
        label: "Virtual Local Area Network VLAN Tutorial",
        link: "/ccna-reviewer-course-philippines/training/vlan-tutorial",
      }, // PENDING - PAGE 2
      {
        label: "VLAN Trunking Protocol VTP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/vlan-trunking-tutorial",
      }, // DONE
      {
        label: "IPv6 Tutorial",
        link: "/ccna-reviewer-course-philippines/training/ipv6",
      }, // PENDING -  PAGE 2
      {
        label: "Rapid Spanning Tree Protocol RSTP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/rapid-stp",
      }, // DONE - NO TAILWIND
      {
        label: "Spanning Tree Protocol STP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/stp-tutorial#",
      }, // DONE - NO TAILWIND
      {
        label: "Network Address Translation NAT Tutorial",
        link: "/ccna-reviewer-course-philippines/training/nat-tutorial",
      }, // DONE - NO TAILWIND
      {
        label: "Access List Tutorial",
        link: "/ccna-reviewer-course-philippines/training/access-list-tutorial",
      }, // DONE - NO TAILWIND - PAGE 2
      {
        label: "RIP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/rip-tutorial",
      }, // DONE - NO TAILWIND
      {
        label: "EIGRP Tutorial",
        link: "/ccna-reviewer-course-philippines/training/eigrp-tutorial",
      }, // DONE - NO TAILWIND, PAGE 2, PAGE 3
      {
        label: "OSPF Tutorial",
        link: "/ccna-reviewer-course-philippines/training/ospf-tutorial",
      }, // DONE - NO TAILWIND, PAGE 2, PAGE 3
      {
        label: "Practice CCNA GNS3 Labs",
        link: "/ccna-reviewer-course-philippines/training/practice-ccna",
      }, // DONE
      {
        label: "CCNA Lab Challenges",
        link: "/ccna-reviewer-course-philippines/training/ccna-lab",
      }, //
    ],
  },
  {
    title: "CCNA 200-301",
    id: "ccna200301",
    items: [
      // { label: 'CCNA FAQs & Tips', link: '#' },
      {
        label: "Basic Questions",
        link: "/ccna-reviewer-course-philippines/Basic_Questions",
      }, //done
      {
        label: "Topology Architecture Questions",
        link: "/ccna-reviewer-course-philippines/topology-architecture-questions",
      }, //done
      {
        label: "Cloud & Virtualization Questions",
        link: "/ccna-reviewer-course-philippines/cloud-virtualization-questions",
      }, //done
      {
        label: "CDP & LLDP Questions",
        link: "/ccna-reviewer-course-philippines/cdp-lldp-questions-2",
      }, //done
      {
        label: "Switch Questions",
        link: "/ccna-reviewer-course-philippines/switch_questions",
      }, //done
      {
        label: "VLAN & Trunking Questions",
        link: "/ccna-reviewer-course-philippines/vlan_truncking_questions",
      }, //done
      {
        label: "VLAN & Trunking Questions 2",
        link: "/ccna-reviewer-course-philippines/vlan_truncking_questions2",
      }, //done
      {
        label: "STP & VTP Questions",
        link: "/ccna-reviewer-course-philippines/STP_&_VTP_Questions",
      }, //done
      {
        label: "EtherChannel Questions",
        link: "/ccna-reviewer-course-philippines/EtherChannel_Questions",
      }, //done
      // { label: 'TCP & UDP Questions', link: '#' },
      {
        label: "IP Address & Subnetting Questions",
        link: "/ccna-reviewer-course-philippines/IP_Address_Subnetting_Questions",
      }, //done
      {
        label: "IP Routing Questions",
        link: "/ccna-reviewer-course-philippines/IP_Routing_Questions",
      }, //done
      {
        label: "IP Routing Questions 2",
        link: "/ccna-reviewer-course-philippines/IP_Routing_Questions2",
      }, //done
      {
        label: "OSPF Questions",
        link: "/ccna-reviewer-course-philippines/OSPF_Questions",
      }, //done
      {
        label: "OSPF Questions 2",
        link: "/ccna-reviewer-course-philippines/OSPF_Questions2",
      }, //done
      {
        label: "EIGRP Questions",
        link: "/ccna-reviewer-course-philippines/EIGRP_Questions",
      }, //done
      {
        label: "NAT Questions",
        link: "/ccna-reviewer-course-philippines/NAT_Questions",
      }, //done
      {
        label: "NTP Questions",
        link: "/ccna-reviewer-course-philippines/NTP_Questions",
      }, //done
      {
        label: "Syslog Questions",
        link: "/ccna-reviewer-course-philippines/Syslog_Questions",
      }, //done
      {
        label: "HSRP Questions",
        link: "/ccna-reviewer-course-philippines/HSRP_Questions",
      }, //done
      {
        label: "Access-list Questions",
        link: "/ccna-reviewer-course-philippines/Access-list_Questions",
      }, //don
      {
        label: "AAA Questions",
        link: "/ccna-reviewer-course-philippines/AAA_Questions",
      }, //done
      {
        label: "Security Questions",
        link: "/ccna-reviewer-course-philippines/Security_Questions",
      }, //done
      {
        label: "Security Questions 2",
        link: "/ccna-reviewer-course-philippines/Security_Questions_2",
      }, //done
      {
        label: "DAI Questions",
        link: "/ccna-reviewer-course-philippines/DAI_Questions",
      }, //done
      {
        label: "IPv6 Questions",
        link: "/ccna-reviewer-course-philippines/IPv6_Questions",
      }, //done
      {
        label: "DNS Questions",
        link: "/ccna-reviewer-course-philippines/DNS_Questions",
      }, //done
      {
        label: "QoS Questions",
        link: "/ccna-reviewer-course-philippines/QoS_Questions",
      }, //done
      {
        label: "Port Security Questions",
        link: "/ccna-reviewer-course-philippines/Port_Security_Questions",
      }, //done
      {
        label: "Wireless Questions",
        link: "/ccna-reviewer-course-philippines/Wireless_Questions",
      }, //done
      {
        label: "Wireless Questions 2",
        link: "/ccna-reviewer-course-philippines/Wireless_Questions_2",
      }, //done
      {
        label: "SDN Questions",
        link: "/ccna-reviewer-course-philippines/SDN_Questions",
      }, //done
      {
        label: "DNA Center Questions",
        link: "/ccna-reviewer-course-philippines/DNA_Center_Questions",
      }, //done
      {
        label: "Drag Drop Questions",
        link: "/ccna-reviewer-course-philippines/Drag_Drop_Questions",
      }, //done
      {
        label: "Drag Drop Questions 2",
        link: "/ccna-reviewer-course-philippines/Drag_Drop_Questions_2",
      }, //done
      {
        label: "Drag Drop Questions 3",
        link: "/ccna-reviewer-course-philippines/Drag_Drop_Questions_3",
      }, //done
      {
        label: "VPN Questions",
        link: "/ccna-reviewer-course-philippines/VPN_Questions",
      }, //done
      {
        label: "DHCP Questions",
        link: "/ccna-reviewer-course-philippines/DHCP_Questions",
      }, //done
      {
        label: "Automation Questions",
        link: "/ccna-reviewer-course-philippines/Automation_Questions",
      }, //done
      {
        label: "Miscellaneous Questions",
        link: "/ccna-reviewer-course-philippines/Miscellaneous_Questions",
      }, //done
    ],
  },
  {
    title: "Network Resources",
    id: "networkResources",
    items: [
      { label: "Free Router Simulators", link: "#" },
      { label: "CCNA Website", link: "#" },
      { label: "ENCOR Website", link: "#" },
      { label: "ENSDWI Website", link: "#" },
      { label: "ENARSI Website", link: "#" },
      { label: "DevNet Website", link: "#" },
      { label: "CCIE R&S Website", link: "#" },
      { label: "Security Website", link: "#" },
      { label: "Wireless Website", link: "#" },
      { label: "Design Website", link: "#" },
      { label: "Data Center Website", link: "#" },
      { label: "Service Provider Website", link: "#" },
      { label: "Collaboration Website", link: "#" },
    ],
  },
];

/**
 * A reusable accordion component. Usage:
 *  <Accordion sections={sectionsArray} />
 *
 * Or omit `sections` to use the built-in defaults:
 *  <Accordion />
 */
const Accordion = ({ sections = defaultSections, className = "" }) => {
  const sectionRef = useRef(null);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.08, easing: "ease-in-out" }
        )
      )
    );
  }, []);

  const toggleSection = (id) =>
    setOpenSection((prev) => (prev === id ? null : id));

  return (
    <div ref={sectionRef} className={className}>
      {sections.map((section, idx) => {
        const panelId = `acc-panel-${section.id || idx}`;
        const btnId = `acc-button-${section.id || idx}`;
        const isOpen = openSection === section.id;

        return (
          <div
            key={section.id || idx}
            data-animate
            style={{ opacity: 0, transform: "translateY(24px)" }}
            className="mb-3"
          >
            {/* Header */}
            <button
              id={btnId}
              onClick={() => toggleSection(section.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="
                group w-full flex items-center gap-3 text-left
                rounded-xl px-4 py-3
                bg-white/10 hover:bg-white/15
                border border-white/15
                text-white font-semibold
                transition
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
            >
              {section.icon ?? <FaNetworkWired />}
              <span className="flex-1">{section.title}</span>
              <BsChevronDown
                className={`shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                } opacity-80`}
              />
            </button>

            {/* Panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="
                mt-1 rounded-xl
                bg-white/5 border border-white/10
                backdrop-blur
                shadow-[0_12px_32px_-12px_rgba(2,6,23,.6)]
                overflow-hidden
              "
            >
              {/* Remove any fixed heights. Let it size naturally, but cap for long lists */}
              <ul className="max-h-[60vh] overflow-y-auto divide-y divide-white/10">
                {section.items.map((item) => (
                  <li key={item.link}>
                    <Link
                      to={item.link}
                      className="
                        block px-4 py-2.5
                        text-white/90 hover:text-white
                        hover:bg-white/10 transition
                      "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
