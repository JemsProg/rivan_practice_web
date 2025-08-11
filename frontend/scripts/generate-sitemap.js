// scripts/generate-sitemap.js
const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

const domain = "https://www.rivanit.com"; // <-- keep this correct

// ---- Grouped route lists (from your App.jsx) ----

// Core pages
const core = [
  "/",
  "/top-it-training-courses-philippines-2025",
  "/training-quotation-philippines",
  "/it-products-available",
  "/cisco-training-philippines",
];

// Course detail pages
const courseDetails = [
  "/top-it-training-courses-philippines-2025/ccna-200-301",
  "/top-it-training-courses-philippines-2025/ccnp-encor-enarsi",
  "/top-it-training-courses-philippines-2025/comptia-security-plus-syo-701",
  "/top-it-training-courses-philippines-2025/itil-v4-v3",
  "/top-it-training-courses-philippines-2025/full-stack-web-development-react-django-postgresql",
  "/top-it-training-courses-philippines-2025/palo-alto-network-training",
];

// Old/new CCNA lab sims
const ccnaLabSims = [
  "/ccna-reviewer-course-philippines/ip-services",
  "/ccna-reviewer-course-philippines/ip-services-2",
  "/ccna-reviewer-course-philippines/static_routing_configuration_sim",
  "/ccna-reviewer-course-philippines/ospf_configuration_sim",
  "/ccna-reviewer-course-philippines/lacp-configuration-sim",
  "/ccna-reviewer-course-philippines/voice-vlan",
  "/ccna-reviewer-course-philippines/vlan-trunking",
  "/ccna-reviewer-course-philippines/ip-connectivity",
  "/ccna-reviewer-course-philippines/accesslist-port-security",
  "/ccna-reviewer-course-philippines/accesslist-dhcp",
  "/ccna-reviewer-course-philippines/vlan-cdp",
  // New CCNA v1.1 sims
  "/ccna-reviewer-course-philippines/vlan-cdp-2",
  "/ccna-reviewer-course-philippines/ip-assignment",
  "/ccna-reviewer-course-philippines/vlan-cdp-lldp",
  "/ccna-reviewer-course-philippines/ospf-2",
  "/ccna-reviewer-course-philippines/ospf-3",
  "/ccna-reviewer-course-philippines/trunking-lacp",
  "/ccna-reviewer-course-philippines/vlan-config",
  "/ccna-reviewer-course-philippines/native-vlan-lacp-2",
  "/ccna-reviewer-course-philippines/8021q-lacp",
  "/ccna-reviewer-course-philippines/ip-assignment-2",
  "/ccna-reviewer-course-philippines/8021q-native-lacp",
  "/ccna-reviewer-course-philippines/static-routing-5",
  "/ccna-reviewer-course-philippines/static-routing-6",
  "/ccna-reviewer-course-philippines/static-routing-2",
];

// CCNA training tutorials (long list)
const ccnaTraining = [
  "/ccna-reviewer-course-philippines/training/tutorials-labs",
  "/ccna-reviewer-course-philippines/training/spine-leaf-tutorial",
  "/ccna-reviewer-course-philippines/training/ai-tutorial",
  "/ccna-reviewer-course-philippines/training/rest-api",
  "/ccna-reviewer-course-philippines/training/ntp-tutorial",
  "/ccna-reviewer-course-philippines/training/dhcp-snooping",
  "/ccna-reviewer-course-philippines/training/sdn",
  "/ccna-reviewer-course-philippines/training/router-decision",
  "/ccna-reviewer-course-philippines/training/config-ssh",
  "/ccna-reviewer-course-philippines/training/security-concepts-tutorial",
  "/ccna-reviewer-course-philippines/training/qos-phb",
  "/ccna-reviewer-course-philippines/training/port-security",
  "/ccna-reviewer-course-philippines/training/puppet-tutorial",
  "/ccna-reviewer-course-philippines/training/chef-tutorial",
  "/ccna-reviewer-course-philippines/training/ansible-tutorial",
  "/ccna-reviewer-course-philippines/training/json",
  "/ccna-reviewer-course-philippines/training/layer2",
  "/ccna-reviewer-course-philippines/training/radius-tutorial",
  "/ccna-reviewer-course-philippines/training/stp-root",
  "/ccna-reviewer-course-philippines/training/tcp-udp",
  "/tcp-udp/page-2",
  "/ccna-reviewer-course-philippines/training/wan-tutorial",
  "/ccna-reviewer-course-philippines/training/dhcp-tutorial",
  "/ccna-reviewer-course-philippines/training/snmp-tutorial",
  "/ccna-reviewer-course-philippines/training/syslog-tutorial",
  "/ccna-reviewer-course-philippines/training/etherchannel-tutorial",
  "/ccna-reviewer-course-philippines/training/hsrp",
  "/ccna-reviewer-course-philippines/training/intervlan-routing",
  "/ccna-reviewer-course-philippines/training/cli",
  "/ccna-reviewer-course-philippines/training/cisco-router-boot",
  "/ccna-reviewer-course-philippines/training/osi-model",
  "/ccna-reviewer-course-philippines/training/subnetting",
  "/ccna-reviewer-course-philippines/training/wireless-tutorial",
  "/ccna-reviewer-course-philippines/training/vlan-tutorial",
  "/ccna-reviewer-course-philippines/training/vlan-trunking-tutorial",
  "/ccna-reviewer-course-philippines/training/ipv6",
  "/ccna-reviewer-course-philippines/training/frame-relay",
  "/ccna-reviewer-course-philippines/training/rapid-stp",
  "/ccna-reviewer-course-philippines/training/stp-tutorial",
  "/ccna-reviewer-course-philippines/training/nat-tutorial",
  "/ccna-reviewer-course-philippines/training/access-list-tutorial",
  "/ccna-reviewer-course-philippines/training/rip-tutorial",
  "/ccna-reviewer-course-philippines/training/eigrp-tutorial",
  "/ccna-reviewer-course-philippines/training/ospf-tutorial",
  "/ccna-reviewer-course-philippines/training/practice-ccna",
  "/ccna-reviewer-course-philippines/training/ccna-lab",
];

// CCNA 200-301 question pages
const ccna200301 = [
  "/ccna-reviewer-course-philippines/Basic_Questions",
  "/ccna-reviewer-course-philippines/topology-architecture-questions",
  "/ccna-reviewer-course-philippines/cloud-virtualization-questions",
  "/ccna-reviewer-course-philippines/cdp-lldp-questions-2",
  "/ccna-reviewer-course-philippines/switch_questions",
  "/ccna-reviewer-course-philippines/vlan_truncking_questions",
  "/ccna-reviewer-course-philippines/vlan_truncking_questions2",
  "/ccna-reviewer-course-philippines/STP_&_VTP_Questions",
  "/ccna-reviewer-course-philippines/EtherChannel_Questions",
  "/ccna-reviewer-course-philippines/IP_Address_Subnetting_Questions",
  "/ccna-reviewer-course-philippines/IP_Routing_Questions",
  "/ccna-reviewer-course-philippines/IP_Routing_Questions2",
  "/ccna-reviewer-course-philippines/OSPF_Questions",
  "/ccna-reviewer-course-philippines/OSPF_Questions2",
  "/ccna-reviewer-course-philippines/EIGRP_Questions",
  "/ccna-reviewer-course-philippines/NAT_Questions",
  "/ccna-reviewer-course-philippines/NTP_Questions",
  "/ccna-reviewer-course-philippines/Syslog_Questions",
  "/ccna-reviewer-course-philippines/HSRP_Questions",
  "/ccna-reviewer-course-philippines/Access-list_Questions",
  "/ccna-reviewer-course-philippines/AAA_Questions",
  "/ccna-reviewer-course-philippines/Security_Questions",
  "/ccna-reviewer-course-philippines/Security_Questions_2",
  "/ccna-reviewer-course-philippines/DAI_Questions",
  "/ccna-reviewer-course-philippines/IPv6_Questions",
  "/ccna-reviewer-course-philippines/DNS_Questions",
  "/ccna-reviewer-course-philippines/QoS_Questions",
  "/ccna-reviewer-course-philippines/Port_Security_Questions",
  "/ccna-reviewer-course-philippines/Wireless_Questions",
  "/ccna-reviewer-course-philippines/Wireless_Questions_2",
  "/ccna-reviewer-course-philippines/SDN_Questions",
  "/ccna-reviewer-course-philippines/DNA_Center_Questions",
  "/ccna-reviewer-course-philippines/Drag_Drop_Questions",
  "/ccna-reviewer-course-philippines/Drag_Drop_Questions_2",
  "/ccna-reviewer-course-philippines/Drag_Drop_Questions_3",
  "/ccna-reviewer-course-philippines/VPN_Questions",
  "/ccna-reviewer-course-philippines/DHCP_Questions",
  "/ccna-reviewer-course-philippines/Automation_Questions",
  "/ccna-reviewer-course-philippines/Miscellaneous_Questions",
];

// ---- Build the sitemap ----
const ALL = [
  ...core,
  ...courseDetails,
  ...ccnaLabSims,
  ...ccnaTraining,
  ...ccna200301,
];

// optional: de-duplicate just in case
const unique = Array.from(new Set(ALL));

const lastmod = new Date().toISOString().slice(0, 10);

(async () => {
  const sm = new SitemapStream({ hostname: domain });

  // Helper to write with different priorities
  const write = (paths, opts) => {
    paths.forEach((url) => sm.write({ url, lastmod, ...opts }));
  };

  // Higher priority for key landing pages & course pages
  write(core, { changefreq: "weekly", priority: 0.9 });
  write(courseDetails, { changefreq: "weekly", priority: 0.85 });

  // Medium for labs/tutorials/questions
  const rest = unique.filter(
    (p) => !core.includes(p) && !courseDetails.includes(p)
  );
  write(rest, { changefreq: "monthly", priority: 0.6 });

  sm.end();

  const xml = await streamToPromise(sm);
  fs.writeFileSync("./public/sitemap.xml", xml.toString());
  console.log(`✅ Generated /public/sitemap.xml with ${unique.length} URLs`);
})();
