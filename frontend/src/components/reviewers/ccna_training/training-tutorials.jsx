import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const CcnaTrainingTutorials = () => {
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

  const ccnaTutorialsSections = [
    {
      title: "1.0 Network Fundamentals",
      id: "networkFundamentals",
      items: [
        {
          label: "OSI Model Tutorial",
          link: "/reviewer/training/ccna/osi-model",
        },
        {
          label: "TCP and UDP Tutorial",
          link: "/reviewer/training/ccna/tcp-udp",
        },
        { label: "WAN Tutorial", link: "/reviewer/training/ccna/wan-tutorial" },
        {
          label: "Cisco Command Line Interface (CLI)",
          link: "/reviewer/training/ccna/cli",
        },
        {
          label: "Cisco Router Boot Aequence Tutorial",
          link: "/reviewer/training/ccna/cisco-router-boot",
        },
        {
          label: "Spine-Leaf Architecture Tutorial",
          link: "/reviewer/training/ccna/spine-leaf-architecture",
        },
        {
          label: "Subnetting Tutorial - Subnetting Made Easy",
          link: "/reviewer/training/ccna/subnetting",
        },
        {
          label: "Wireless Tutorial",
          link: "/reviewer/training/ccna/wireless-tutorial",
        },
        {
          label: "IPv6 Tutorial",
          link: "/reviewer/training/ccna/ipv6-tutorial",
        },
      ],
    },
    {
      title: "2.0 Network Access Layer (Layer 2 technologies related)",
      id: "networkAccessLayer",
      items: [
        {
          label: "Virtual Local Area Network VLAN Tutorial",
          link: "/reviewer/training/ccna/lan-tutorial",
        },
        {
          label: "InterVLAN Routing Tutorial",
          link: "/reviewer/training/ccna/intervlan-tutorial",
        },
        { label: "Spanning Tree Protocol STP Tutorial", link: "stp-tutorial" },
        {
          label: "STP Root Port Election Tutorial",
          link: "/reviewer/training/ccna/stp-root-tutorial",
        },
        {
          label: "Rapid Spanning Tree Protocol RSTP Tutorial",
          link: "/reviewer/training/ccna/rapid-stp-tutorial",
        },
        { label: "VLAN Trunking Protocol VTP Tutorial", link: "vlan-trunking" },
        {
          label: "EtherChannel Tutorial",
          link: "/reviewer/training/ccna/etherchannel-tutorial",
        },
      ],
    },
    {
      title: "3.0 IP Connectivity",
      id: "ipConnectivity",
      items: [
        {
          label: "How a router makes a forwarding decision",
          link: "/reviewer/training/ccna/router-forwarding",
        },
        { label: "OSPF Tutorial", link: "ospf-tutorial" },
        {
          label: "/reviewer/training/ccna/EIGRP Tutorial",
          link: "eigrp-tutorial",
        },
        {
          label: "Hot Standby Router Protocol HSRP Tutorial",
          link: "/reviewer/training/ccna/hrsp-tutorial",
        },
        {
          label: "Gateway Load Balancing Protocol GLBP Tutoriall",
          link: "/reviewer/training/ccna/glbp-tutorial",
        },
      ],
    },
    {
      title: "4.0 IP Services",
      id: "ipServices",
      items: [
        {
          label: "Network Address Translation NAT Tutorial",
          link: "/reviewer/training/ccna/nat-tutorial",
        },
        {
          label: "Network Time Protocol (NTP) Tutorial",
          link: "/reviewer/training/ccna/ntp-tutorial",
        },
        {
          label: "DHCP Tutorial",
          link: "/reviewer/training/ccna/dhcp-tutorial",
        },
        {
          label: "Simple Network Management Protocol SNMP Tutorial",
          link: "/reviewer/training/ccna/snmp-tutorial",
        },
        {
          label: "Syslog Tutorial",
          link: "/reviewer/training/ccna/syslog-tutorial",
        },
        {
          label: "Forwarding per-hop behavior (PHB) for QoS Tutorial",
          link: "/reviewer/training/ccna/phb-tutorial",
        },
        {
          label: "Configure SSH for Remote Access on Cisco Router",
          link: "/reviewer/training/ccna/ssh",
        },
      ],
    },
    {
      title: "5.0 Security Fundamentals",
      id: "securityFundamentals",
      items: [
        {
          label: "Key Security Concepts Tutorial",
          link: "/reviewer/training/ccna/key-security-tutorial",
        },
        {
          label: "Access List Tutorial",
          link: "/reviewer/training/ccna/access-list-tutorial",
        },
        {
          label: "Layer 2 Threats and Security Features",
          link: "/reviewer/training/ccna/layer2-features",
        },
        {
          label: "AAA TACACS+ and RADIUS Tutorial",
          link: "/reviewer/training/ccna/radius-tutorial",
        },
        {
          label: "Port-Security Tutorial",
          link: "/reviewer/training/ccna/port-security-tutorial",
        },
        {
          label: "DHCP Snooping Tutorial",
          link: "/reviewer/training/ccna/dhcp-snooping-tutorial",
        },
      ],
    },
    {
      title: "6.0 Automation and Programmability",
      id: "automation",
      items: [
        { label: "What is SDN?", link: "/reviewer/training/ccna/sdn" },
        {
          label: "Puppet Tutorial",
          link: "/reviewer/training/ccna/puppet-tutorial",
        },
        {
          label: "Chef Tutorial",
          link: "/reviewer/training/ccna/chef-tutorial",
        },
        {
          label: "Ansible Tutorial",
          link: "/reviewer/training/ccna/ansible-tutorial",
        },
        {
          label:
            "Generative AI vs Predictive AI Tutorial (new CCNA v1.1 topic)",
          link: "/reviewer/training/ccna/ai-generative-predictive-tutorial",
        },
        {
          label: "REST API Tutorial",
          link: "/reviewer/training/ccna/rest-api-tutorial",
        },
      ],
    },
  ];

  const ccnaPracticeSections = [
    {
      title: "CCNA Practice Labs",
      id: "practiceLabs",
      items: [
        {
          label: "Configure NAT – GNS3 Lab",
          link: "/reviewer/training/ccna/gns3-lab-nat",
        },
        {
          label: "Configure Static Route – GNS3 Lab",
          link: "/reviewer/training/ccna/config-gns3-lab-nat",
        },
        {
          label: "Configure Cisco Router Passwords – GNS3 Lab",
          link: "/reviewer/training/ccna/config-gns3-lab-passwords",
        },
        {
            label: "EIGRP - GNS3 Lab",
            link: "/reviewer/training/ccna/gns3-eigrp",
          },
          {
            label: "Configure DHCP - Packet Tracer Lab",
            link: "/reviewer/training/ccna/config-dhcp",
          },
      ],
    },
  ];

  const ccnaLabChallengeSections = [
    {
        title: "CCNA Lab Challenges",
        id: "labChallenges",
        items: [
            {
                label: "Troubleshooting Access-list (Simple)",
                link: "/reviewer/training/ccna/troubleshooting-access-list",
            },
            {
                label: "Troubleshooting DHCP (Simple)",
                link: "/reviewer/training/ccna/troubleshooting-dhcp",
            },
            {
                label: "Config Lab Challenge 1 (NAT)",
                link: "/reviewer/training/ccna/lab-nat",
            },
            {
                label: "Config Lab Challenge 2 (VTP)",
                link: "/reviewer/training/ccna/lab-vtp",
            },
            {
                label: "Checking Lab Challenge 1 (OSPF)",
                link: "/reviewer/training/ccna/lab-ospf",
            },
            {
                label: "Checking Lab Challenge 2 (Basic)",
                link: "/reviewer/training/ccna/lab-basic",
            },
            {
                label: "Checking Lab Challenge 3 (VTP, STP, EtherChannel)",
                link: "/reviewer/training/ccna/lab-vtp",
            },
            {
                label: "Checking Lab Challenge 4 (VTP, STP, EtherChannel, NAT, OSPF, HSRP)",
                link: "/reviewer/training/ccna/lav-hsrp",
            },
            {
                label: "Troubleshooting Lab Challenge 1 (OSPF)",
                link: "/reviewer/training/ccna/troubleshooting-ospf",
            },
            {
                label: "TroubleShooting Lab Challenge 2 (EIGRP)",
                link: "/reviewer/training/ccna/troubleshooting-eigrp",
            },
            {
                label: "TroubleShooting Lab Challenge 3 (Switch Basic)",
                link: "/reviewer/training/ccna/switch-basic",
            },

        ],

    },
  ];



  return (
    <div
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
        

      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-6">
          CCNA Tutorials, Practice Labs & Lab Challenges
        </h1>

        <p className="mb-4">We have many tutorials and practice labs on our site to help you understand the concepts of the CCNA exam. We have summarized them here in one place and categorized them into specific topics to make your learning easier.</p>
      </div>



      {/* Category: CCNA Tutorials */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12"
      >
        <h1 data-animate className="text-2xl text-center font-bold mb-6">
          CCNA Tutorials
        </h1>
        <Accordion className="space-y-1" sections={ccnaTutorialsSections} />
      </div>

      {/* Category: CCNA Practice Labs */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12"
      >
        <h1 data-animate className="text-2xl text-center font-bold mb-6">
          CCNA Practice Labs
        </h1>
        <p className="mb-4">Practice labs help individuals and professionals gain practical experience with networking technologies by configuring routers & switches on the emulators</p>
        <Accordion className="space-y-1" sections={ccnaPracticeSections} />
      </div>


      {/* Category: CCNA Lab Challenges */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12"
      >
        <h1 data-animate className="text-2xl text-center font-bold mb-6">
        CCNA Lab Challenges
        </h1>
        <p className="mb-4">Lab Challenges require you to configure or troubleshooting preconfigured labs</p>
        <Accordion className="space-y-1" sections={ccnaLabChallengeSections} />
      </div>
    </div>
  );
};

export default CcnaTrainingTutorials;
