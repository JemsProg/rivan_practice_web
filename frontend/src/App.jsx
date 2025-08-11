import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// adds lang
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "../src/pages/LandingPage";
import Courses from "../src/pages/Courses";
import Quotation from "../src/pages/Quotation";
import Reviewers from "./pages/Reviewers";
import Cisco_products from "../src/components/sections/Products";

import IPServicesSim from "../src/components/reviewers/lab_sims_ccna/ip-services-sim";
import IPServicesSim2 from "../src/components/reviewers/lab_sims_ccna/ip-services-sim-version-2";
import StaticRouting from "../src/components/reviewers/lab_sims_ccna/static_routing_configuration_sim";
import OspfConfigurationSim from "../src/components/reviewers/lab_sims_ccna/ospf-configuration-sim";
import LacpConfigurationSim from "../src/components/reviewers/lab_sims_ccna/lacp-configuration-sim";
import VoiceVlanConfigurationSim from "../src/components/reviewers/lab_sims_ccna/voice-vlan-configuration-sim";
import VlanTruckingConfigurationSim from "../src/components/reviewers/lab_sims_ccna/vlan-and-trunking-configuration-sim";
import IpConnectivitySim from "../src/components/reviewers/lab_sims_ccna/ipv4-and-ipv6-connectivity-sim";
import NamedAccessListPortSecuritySim from "../src/components/reviewers/lab_sims_ccna/named-access-list-port-security-sim";
import NamedAccessDhcpSnoopingSim from "../src/components/reviewers/lab_sims_ccna/named-access-list-dhcp-snooping-sim";
import VlanCdpSim from "../src/components/reviewers/lab_sims_ccna/vlan-and-cdp-sim";

/* New CCNA v1.1 Lab Sims */
import VlanCdpSim2 from "../src/components/reviewers/lab_new_ccna/vlan-and-cdp-sim2";
import IPAssignmentSim from "../src/components/reviewers/lab_new_ccna/ipv4-and-ipv6-assignment-sim";
import VlanCdpLldpSim from "../src/components/reviewers/lab_new_ccna/vlan-cdp-and-lldp-sim";
import OspfConfigSim2 from "../src/components/reviewers/lab_new_ccna/ospf-configuration-sim-2";
import OspfConfigSim3 from "../src/components/reviewers/lab_new_ccna/ospf-configuration-sim3";
import TrunkingLacpSim from "../src/components/reviewers/lab_new_ccna/trunking-and-lacp-sim";
import VlanConfigSim from "../src/components/reviewers/lab_new_ccna/vlan-configuration-sim";
import VlanAndLacpSim2 from "./components/reviewers/lab_new_ccna/vlan-and-lacp-sim2";
import TrunkingAndLacp8021q from "./components/reviewers/lab_new_ccna/8021q-lacp";
import IPv4IPv6AssignmentSim2 from "./components/reviewers/lab_new_ccna/ipv4-and-ipv6-assignment-sim2";
import NativeLacp8021q from "./components/reviewers/lab_new_ccna/8021Qq-native-lacp";
import StaticRoutingConfigSim5 from "./components/reviewers/lab_new_ccna/static-routing-config-sim-5";
import StaticRoutingConfigSim6 from "./components/reviewers/lab_new_ccna/static-routing-config-sim-6";
import OldStaticRoutingSim2 from "./components/reviewers/lab_new_ccna/old-static-routing-sim2";

/* CCNA Training */
import CcnaTrainingTutorials from "./components/reviewers/ccna_training/training-tutorials";
import SpineLeafTutorial from "./components/reviewers/ccna_training/spine-leaf-architecture-tutorial";
import AiTutorial from "./components/reviewers/ccna_training/ai-tutorial";
import RestApiTutorial from "./components/reviewers/ccna_training/rest-api";
import NtpTutorial from "./components/reviewers/ccna_training/ntp-tutorial";
import DhcpSnooping from "./components/reviewers/ccna_training/dhcp-snooping";
import Sdn from "./components/reviewers/ccna_training/sdn";
import RouterForwardDecision from "./components/reviewers/ccna_training/router-forward-decision";
import ConfigSsh from "./components/reviewers/ccna_training/config-ssh";
import SecurityConceptsTutorial from "./components/reviewers/ccna_training/security-concepts-tutorial";
import QosPhbTutorial from "./components/reviewers/ccna_training/qos-phb-tutorial";
import PortSecurityTutorial from "./components/reviewers/ccna_training/port-security-tutorial";
import PuppetTutorial from "./components/reviewers/ccna_training/puppet-tutorial";
import ChefTutorial from "./components/reviewers/ccna_training/chef-tutorial";
import AnsibleTutorial from "./components/reviewers/ccna_training/ansible-tutorial";
import JsonTutorial from "./components/reviewers/ccna_training/json-tutorial";
import Layer2 from "./components/reviewers/ccna_training/layer2";
import RadiusTutorial from "./components/reviewers/ccna_training/radius-tutorial";
import StpRootPort from "./components/reviewers/ccna_training/stp-root";
import TcpUdpTutorial from "./components/reviewers/ccna_training/tcp-udp-tutorial";
import TcpUdpTutorialPart2 from "./components/reviewers/ccna_training/tcp-udp-tutorial2";
import WanTutorial from "./components/reviewers/ccna_training/wan-tutorial";
import DhcpTutorial from "./components/reviewers/ccna_training/dhcp-tutorial";
import SnmpTutorial from "./components/reviewers/ccna_training/snmp-tutorial";
import SyslogTutorial from "./components/reviewers/ccna_training/syslog-tutorial";
import EtherChannel from "./components/reviewers/ccna_training/etherchannel-tutorial";
import Hsrp from "./components/reviewers/ccna_training/hsrp";
import InterVlanRouting from "./components/reviewers/ccna_training/intervlan-routing";
import Cli from "./components/reviewers/ccna_training/cli";
import CiscoRouterBootSequence from "./components/reviewers/ccna_training/cisco-router-boot";
import OsiModel from "./components/reviewers/ccna_training/osi-model";
import Subnetting from "./components/reviewers/ccna_training/subnetting";
import WirelessTutorial from "./components/reviewers/ccna_training/wireless-tutorial";
import VlanTutorial from "./components/reviewers/ccna_training/vlan-tutorial";
import VlanTrunking from "./components/reviewers/ccna_training/vlan-trunking";
import Ipv6 from "./components/reviewers/ccna_training/ipv6";
import FrameRelayTutorial from "./components/reviewers/ccna_training/frame-relay";
import RapidStp from "./components/reviewers/ccna_training/rapid-stp";
import StpTutorial from "./components/reviewers/ccna_training/stp-tutorial";
import NatTutorial from "./components/reviewers/ccna_training/nat-tutorial";
import AccessListTutorial from "./components/reviewers/ccna_training/access-list-tutorial";
import RipTutorial from "./components/reviewers/ccna_training/rip-tutorial";
import EigrpTutorial from "./components/reviewers/ccna_training/eigrp-tutorial";
import OspfTutorial from "./components/reviewers/ccna_training/ospf-tutorial";
import PracticeCcna from "./components/reviewers/ccna_training/practice-ccna";
import CcnaLabChallenges from "./components/reviewers/ccna_training/ccna-lab";

// CCNA 200 - 301
import TopologyArchitectureQuestions from "./components/reviewers/ccna_200_301/topology_architecture_questions";
import CloudVirtualizationQuestion from "./components/reviewers/ccna_200_301/cloud_virtualization_question";
import Cdplldpquestions from "./components/reviewers/ccna_200_301/cdp-lldp-questions-2";
import Switchquestions from "./components/reviewers/ccna_200_301/switch_questions";
import VlanTrunkingQuesions2 from "./components/reviewers/ccna_200_301/vlan_trunking_qeustions2";
import VlanTrunkingQuesions from "./components/reviewers/ccna_200_301/vlan_trunking_qeustions";
import StpVtpQuestions from "./components/reviewers/ccna_200_301/STP_&_VTP_Questions";
import EtherChannelQuestions from "./components/reviewers/ccna_200_301/EtherChannel_Questions";
import IpAddressSubnettingQuestions from "./components/reviewers/ccna_200_301/IP_Address_Subnetting_Questions";
import IP_Routing_Questions from "./components/reviewers/ccna_200_301/IP_Routing_Questions";
import IP_Routing_Questions2 from "./components/reviewers/ccna_200_301/IP_Routing_Questions_2";
import OspfQuestions from "./components/reviewers/ccna_200_301/OSPF_Questions";
import OspfQuestions2 from "./components/reviewers/ccna_200_301/OSPF_Questions2";
import EigrpQuestions from "./components/reviewers/ccna_200_301/EIGRP_Questions";
import NatQuestion from "./components/reviewers/ccna_200_301/NAT_Questions";
import NtpQuestion from "./components/reviewers/ccna_200_301/NTP_Questions";
import SyslogQuestion from "./components/reviewers/ccna_200_301/Syslog_Questions";
import HsrpQuestion from "./components/reviewers/ccna_200_301/HSRP_Questions";
import AccessListQuestion from "./components/reviewers/ccna_200_301/Access-list_Questions";
import AaaQuestion from "./components/reviewers/ccna_200_301/AAA_Questions";
import SecurityQuestion from "./components/reviewers/ccna_200_301/Security_Questions";
import SecurityQuestion2 from "./components/reviewers/ccna_200_301/Security_Questions_2";
import DaiQuestion from "./components/reviewers/ccna_200_301/DAI_Questions";
import IPv6Question from "./components/reviewers/ccna_200_301/IPv6_Questions";
import DNSQuestion from "./components/reviewers/ccna_200_301/DNS_Questions";
import QoSQuestion from "./components/reviewers/ccna_200_301/QoS_Questions";
import PortSecurityQuestion from "./components/reviewers/ccna_200_301/Port_Security_Questions";
import WirelessQuestion from "./components/reviewers/ccna_200_301/Wireless_Questions";
import WirelessQuestion2 from "./components/reviewers/ccna_200_301/Wireless_Questions_2";
import SDNQuestion from "./components/reviewers/ccna_200_301/SDN_Questions";
import DNACenterQuestion from "./components/reviewers/ccna_200_301/DNA_Center_Questions";
import DragDropQuestion from "./components/reviewers/ccna_200_301/Drag_Drop_Questions";
import DragDropQuestion2 from "./components/reviewers/ccna_200_301/Drag_Drop_Questions_2";
import DragDropQuestion3 from "./components/reviewers/ccna_200_301/Drag_Drop_Questions_3";
import VPNQuestion from "./components/reviewers/ccna_200_301/VPN_Questions";
import DHCPQuestion from "./components/reviewers/ccna_200_301/DHCP_Questions";
import AutomationQuestion from "./components/reviewers/ccna_200_301/Automation_Questions";
import MiscellaneousQuestion from "./components/reviewers/ccna_200_301/Miscellaneous_Questions";
import BasicQuestion from "./components/reviewers/ccna_200_301/Basic_Questions";

import CCNA from "./pages/courses/Ccna";
import CCNP from "./pages/courses/Ccnp";
import SecurityPlus from "./pages/courses/SecurityPlus";
import ITIL from "./pages/courses/Itil";
import FullStackDevelopment from "./pages/courses/FullStack";
import PaloAlto from "./pages/courses/PaloAlto";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/top-it-training-courses-philippines-2025"
              element={<Courses />}
            />
            <Route
              path="/training-quotation-philippines"
              element={<Quotation />}
            />

            <Route path="/it-products-available" element={<Cisco_products />} />

            <Route path="/cisco-training-philippines" element={<Reviewers />} />
            <Route
              path="/ccna-reviewer-course-philippines/ip-services"
              element={<IPServicesSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/ip-services-2"
              element={<IPServicesSim2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/static_routing_configuration_sim"
              element={<StaticRouting />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/ospf_configuration_sim"
              element={<OspfConfigurationSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/lacp-configuration-sim"
              element={<LacpConfigurationSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/voice-vlan"
              element={<VoiceVlanConfigurationSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/vlan-trunking"
              element={<VlanTruckingConfigurationSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/ip-connectivity"
              element={<IpConnectivitySim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/accesslist-port-security"
              element={<NamedAccessListPortSecuritySim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/accesslist-dhcp"
              element={<NamedAccessDhcpSnoopingSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/vlan-cdp"
              element={<VlanCdpSim />}
            />

            {/* New CCNA v1.1 Lab Sims */}
            <Route
              path="/ccna-reviewer-course-philippines/vlan-cdp-2"
              element={<VlanCdpSim2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/ip-assignment"
              element={<IPAssignmentSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/vlan-cdp-lldp"
              element={<VlanCdpLldpSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/ospf-2"
              element={<OspfConfigSim2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/ospf-3"
              element={<OspfConfigSim3 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/trunking-lacp"
              element={<TrunkingLacpSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/vlan-config"
              element={<VlanConfigSim />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/native-vlan-lacp-2"
              element={<VlanAndLacpSim2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/8021q-lacp"
              element={<TrunkingAndLacp8021q />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/ip-assignment-2"
              element={<IPv4IPv6AssignmentSim2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/8021q-native-lacp"
              element={<NativeLacp8021q />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/static-routing-5"
              element={<StaticRoutingConfigSim5 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/static-routing-6"
              element={<StaticRoutingConfigSim6 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/static-routing-2"
              element={<OldStaticRoutingSim2 />}
            />

            {/* CCNA Training */}
            <Route
              path="/ccna-reviewer-course-philippines/training/tutorials-labs"
              element={<CcnaTrainingTutorials />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/spine-leaf-tutorial"
              element={<SpineLeafTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/ai-tutorial"
              element={<AiTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/rest-api"
              element={<RestApiTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/ntp-tutorial"
              element={<NtpTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/dhcp-snooping"
              element={<DhcpSnooping />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/sdn"
              element={<Sdn />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/router-decision"
              element={<RouterForwardDecision />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/config-ssh"
              element={<ConfigSsh />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/security-concepts-tutorial"
              element={<SecurityConceptsTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/qos-phb"
              element={<QosPhbTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/port-security"
              element={<PortSecurityTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/puppet-tutorial"
              element={<PuppetTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/chef-tutorial"
              element={<ChefTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/ansible-tutorial"
              element={<AnsibleTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/json"
              element={<JsonTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/layer2"
              element={<Layer2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/radius-tutorial"
              element={<RadiusTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/stp-root"
              element={<StpRootPort />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/tcp-udp"
              element={<TcpUdpTutorial />}
            />
            <Route path="/tcp-udp/page-2" element={<TcpUdpTutorialPart2 />} />
            <Route
              path="/ccna-reviewer-course-philippines/training/wan-tutorial"
              element={<WanTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/dhcp-tutorial"
              element={<DhcpTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/snmp-tutorial"
              element={<SnmpTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/syslog-tutorial"
              element={<SyslogTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/etherchannel-tutorial"
              element={<EtherChannel />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/hsrp"
              element={<Hsrp />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/intervlan-routing"
              element={<InterVlanRouting />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/cli"
              element={<Cli />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/cisco-router-boot"
              element={<CiscoRouterBootSequence />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/osi-model"
              element={<OsiModel />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/subnetting"
              element={<Subnetting />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/wireless-tutorial"
              element={<WirelessTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/vlan-tutorial"
              element={<VlanTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/vlan-trunking-tutorial"
              element={<VlanTrunking />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/ipv6"
              element={<Ipv6 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/frame-relay"
              element={<FrameRelayTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/rapid-stp"
              element={<RapidStp />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/stp-tutorial"
              element={<StpTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/nat-tutorial"
              element={<NatTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/access-list-tutorial"
              element={<AccessListTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/rip-tutorial"
              element={<RipTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/eigrp-tutorial"
              element={<EigrpTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/ospf-tutorial"
              element={<OspfTutorial />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/practice-ccna"
              element={<PracticeCcna />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/training/ccna-lab"
              element={<CcnaLabChallenges />}
            />

            {/* CCNA 200 - 301 */}
            <Route
              path="/ccna-reviewer-course-philippines/Basic_Questions"
              element={<BasicQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/topology-architecture-questions"
              element={<TopologyArchitectureQuestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/cloud-virtualization-questions"
              element={<CloudVirtualizationQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/cdp-lldp-questions-2"
              element={<Cdplldpquestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/switch_questions"
              element={<Switchquestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/vlan_truncking_questions"
              element={<VlanTrunkingQuesions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/vlan_truncking_questions2"
              element={<VlanTrunkingQuesions2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/STP_&_VTP_Questions"
              element={<StpVtpQuestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/EtherChannel_Questions"
              element={<EtherChannelQuestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/IP_Address_Subnetting_Questions"
              element={<IpAddressSubnettingQuestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/IP_Routing_Questions"
              element={<IP_Routing_Questions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/IP_Routing_Questions2"
              element={<IP_Routing_Questions2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/OSPF_Questions"
              element={<OspfQuestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/OSPF_Questions2"
              element={<OspfQuestions2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/EIGRP_Questions"
              element={<EigrpQuestions />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/NAT_Questions"
              element={<NatQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/NTP_Questions"
              element={<NtpQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Syslog_Questions"
              element={<SyslogQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/HSRP_Questions"
              element={<HsrpQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Access-list_Questions"
              element={<AccessListQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/AAA_Questions"
              element={<AaaQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Security_Questions"
              element={<SecurityQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Security_Questions_2"
              element={<SecurityQuestion2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/DAI_Questions"
              element={<DaiQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/IPv6_Questions"
              element={<IPv6Question />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/DNS_Questions"
              element={<DNSQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/QoS_Questions"
              element={<QoSQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Port_Security_Questions"
              element={<PortSecurityQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Wireless_Questions"
              element={<WirelessQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Wireless_Questions_2"
              element={<WirelessQuestion2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/SDN_Questions"
              element={<SDNQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/DNA_Center_Questions"
              element={<DNACenterQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Drag_Drop_Questions"
              element={<DragDropQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Drag_Drop_Questions_2"
              element={<DragDropQuestion2 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Drag_Drop_Questions_3"
              element={<DragDropQuestion3 />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/VPN_Questions"
              element={<VPNQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/DHCP_Questions"
              element={<DHCPQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Automation_Questions"
              element={<AutomationQuestion />}
            />
            <Route
              path="/ccna-reviewer-course-philippines/Miscellaneous_Questions"
              element={<MiscellaneousQuestion />}
            />

            <Route
              path="/top-it-training-courses-philippines-2025/ccna-200-301"
              element={<CCNA />}
            />
            <Route
              path="/top-it-training-courses-philippines-2025/ccnp-encor-enarsi"
              element={<CCNP />}
            />
            <Route
              path="/top-it-training-courses-philippines-2025/comptia-security-plus-syo-701"
              element={<SecurityPlus />}
            />
            <Route
              path="/top-it-training-courses-philippines-2025/itil-v4-v3"
              element={<ITIL />}
            />
            <Route
              path="/top-it-training-courses-philippines-2025/full-stack-web-development-react-django-postgresql"
              element={<FullStackDevelopment />}
            />
            <Route
              path="/top-it-training-courses-philippines-2025/palo-alto-network-training"
              element={<PaloAlto />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
