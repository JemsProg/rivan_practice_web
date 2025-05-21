import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "../src/pages/LandingPage";
import Courses from "../src/pages/Courses";
import Quotation from "../src/pages/Quotation";
import Reviewers from "./pages/Reviewers";
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

import CCNA from './pages/courses/ccna';
import CCNP from './pages/courses/Ccnp';
import SecurityPlus from './pages/courses/SecurityPlus';
import ITIL from './pages/courses/Itil';
import FullStackDevelopment from './pages/courses/FullStack';
import PaloAlto from './pages/courses/PaloAlto'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/best-courses-it-training" element={<Courses />} />
            <Route path="/training-quotation-philippines" element={<Quotation />} />
            <Route path="/cisco-training-philippines" element={<Reviewers />} />
            <Route path="/reviewer/ip-services" element={<IPServicesSim />} />
            <Route
              path="/reviewer/ip-services-2"
              element={<IPServicesSim2 />}
            />
            <Route
              path="/reviewer/static_routing_configuration_sim"
              element={<StaticRouting />}
            />
            <Route
              path="/reviewer/ospf_configuration_sim"
              element={<OspfConfigurationSim />}
            />
            <Route
              path="/reviewer/lacp-configuration-sim"
              element={<LacpConfigurationSim />}
            />
            <Route
              path="/reviewer/voice-vlan"
              element={<VoiceVlanConfigurationSim />}
            />
            <Route
              path="/reviewer/vlan-trunking"
              element={<VlanTruckingConfigurationSim />}
            />
            <Route
              path="/reviewer/ip-connectivity"
              element={<IpConnectivitySim />}
            />
            <Route
              path="/reviewer/accesslist-port-security"
              element={<NamedAccessListPortSecuritySim />}
            />
            <Route
              path="/reviewer/accesslist-dhcp"
              element={<NamedAccessDhcpSnoopingSim />}
            />
            <Route path="/reviewer/vlan-cdp" element={<VlanCdpSim />} />

            {/* New CCNA v1.1 Lab Sims */}
            <Route path="/reviewer/vlan-cdp-2" element={<VlanCdpSim2 />} />
            <Route
              path="/reviewer/ip-assignment"
              element={<IPAssignmentSim />}
            />
            <Route
              path="/reviewer/vlan-cdp-lldp"
              element={<VlanCdpLldpSim />}
            />
            <Route path="/reviewer/ospf-2" element={<OspfConfigSim2 />} />
            <Route path="/reviewer/ospf-3" element={<OspfConfigSim3 />} />
            <Route
              path="/reviewer/trunking-lacp"
              element={<TrunkingLacpSim />}
            />
            <Route path="/reviewer/vlan-config" element={<VlanConfigSim />} />
            <Route
              path="/reviewer/native-vlan-lacp-2"
              element={<VlanAndLacpSim2 />}
            />
            <Route
              path="/reviewer/8021q-lacp"
              element={<TrunkingAndLacp8021q />}
            />
            <Route
              path="/reviewer/ip-assignment-2"
              element={<IPv4IPv6AssignmentSim2 />}
            />
            <Route
              path="/reviewer/8021q-native-lacp"
              element={<NativeLacp8021q />}
            />
            <Route
              path="/reviewer/static-routing-5"
              element={<StaticRoutingConfigSim5 />}
            />
            <Route
              path="/reviewer/static-routing-6"
              element={<StaticRoutingConfigSim6 />}
            />
            <Route
              path="/reviewer/static-routing-2"
              element={<OldStaticRoutingSim2 />}
            />

            {/* CCNA Training */}
            <Route
              path="/reviewer/training/tutorials-labs"
              element={<CcnaTrainingTutorials />}
            />
            <Route
              path="/reviewer/training/spine-leaf-tutorial"
              element={<SpineLeafTutorial />}
            />
            <Route
              path="/reviewer/training/ai-tutorial"
              element={<AiTutorial />}
            />
            <Route
              path="/reviewer/training/rest-api"
              element={<RestApiTutorial />}
            />
            <Route
              path="/reviewer/training/ntp-tutorial"
              element={<NtpTutorial />}
            />
            <Route
              path="/reviewer/training/dhcp-snooping"
              element={<DhcpSnooping />}
            />
            <Route path="/reviewer/training/sdn" element={<Sdn />} />
            <Route
              path="/reviewer/training/router-decision"
              element={<RouterForwardDecision />}
            />

            {/* CCNA 200 - 301 */}
            <Route
              path="/reviewer/Basic_Questions"
              element={<BasicQuestion />}
            />
            <Route
              path="/reviewer/topology-architecture-questions"
              element={<TopologyArchitectureQuestions />}
            />
            <Route
              path="/reviewer/cloud-virtualization-questions"
              element={<CloudVirtualizationQuestion />}
            />
            <Route
              path="/reviewer/cdp-lldp-questions-2"
              element={<Cdplldpquestions />}
            />
            <Route
              path="/reviewer/switch_questions"
              element={<Switchquestions />}
            />
            <Route
              path="/reviewer/vlan_truncking_questions"
              element={<VlanTrunkingQuesions />}
            />
            <Route
              path="/reviewer/vlan_truncking_questions2"
              element={<VlanTrunkingQuesions2 />}
            />
            <Route
              path="/reviewer/STP_&_VTP_Questions"
              element={<StpVtpQuestions />}
            />
            <Route
              path="/reviewer/EtherChannel_Questions"
              element={<EtherChannelQuestions />}
            />
            <Route
              path="/reviewer/IP_Address_Subnetting_Questions"
              element={<IpAddressSubnettingQuestions />}
            />
            <Route
              path="/reviewer/IP_Routing_Questions"
              element={<IP_Routing_Questions />}
            />
            <Route
              path="/reviewer/IP_Routing_Questions2"
              element={<IP_Routing_Questions2 />}
            />
            <Route
              path="/reviewer/OSPF_Questions"
              element={<OspfQuestions />}
            />
            <Route
              path="/reviewer/OSPF_Questions2"
              element={<OspfQuestions2 />}
            />
            <Route
              path="/reviewer/EIGRP_Questions"
              element={<EigrpQuestions />}
            />
            <Route path="/reviewer/NAT_Questions" element={<NatQuestion />} />
            <Route path="/reviewer/NTP_Questions" element={<NtpQuestion />} />
            <Route
              path="/reviewer/Syslog_Questions"
              element={<SyslogQuestion />}
            />
            <Route path="/reviewer/HSRP_Questions" element={<HsrpQuestion />} />
            <Route
              path="/reviewer/Access-list_Questions"
              element={<AccessListQuestion />}
            />
            <Route path="/reviewer/AAA_Questions" element={<AaaQuestion />} />
            <Route
              path="/reviewer/Security_Questions"
              element={<SecurityQuestion />}
            />
            <Route
              path="/reviewer/Security_Questions_2"
              element={<SecurityQuestion2 />}
            />
            <Route path="/reviewer/DAI_Questions" element={<DaiQuestion />} />
            <Route path="/reviewer/IPv6_Questions" element={<IPv6Question />} />
            <Route path="/reviewer/DNS_Questions" element={<DNSQuestion />} />
            <Route path="/reviewer/QoS_Questions" element={<QoSQuestion />} />
            <Route
              path="/reviewer/Port_Security_Questions"
              element={<PortSecurityQuestion />}
            />
            <Route
              path="/reviewer/Wireless_Questions"
              element={<WirelessQuestion />}
            />
            <Route
              path="/reviewer/Wireless_Questions_2"
              element={<WirelessQuestion2 />}
            />
            <Route path="/reviewer/SDN_Questions" element={<SDNQuestion />} />
            <Route
              path="/reviewer/DNA_Center_Questions"
              element={<DNACenterQuestion />}
            />
            <Route
              path="/reviewer/Drag_Drop_Questions"
              element={<DragDropQuestion />}
            />
            <Route
              path="/reviewer/Drag_Drop_Questions_2"
              element={<DragDropQuestion2 />}
            />
            <Route
              path="/reviewer/Drag_Drop_Questions_3"
              element={<DragDropQuestion3 />}
            />
            <Route path="/reviewer/VPN_Questions" element={<VPNQuestion />} />
            <Route path="/reviewer/DHCP_Questions" element={<DHCPQuestion />} />
            <Route
              path="/reviewer/Automation_Questions"
              element={<AutomationQuestion />}
            />
            <Route
              path="/reviewer/Miscellaneous_Questions"
              element={<MiscellaneousQuestion />}
            />


            <Route path="/courses/ccna-training" element={<CCNA />} />
            <Route path="/courses/ccnp-training" element={<CCNP />} />
            <Route path="/courses/comptia-security-plus-training" element={<SecurityPlus />} />
            <Route path="/courses/itil-training" element={<ITIL />} />
            <Route path="/courses/full-stack-web-development-training" element={<FullStackDevelopment />} />
            <Route path="/courses/palo-alto-training" element={<PaloAlto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
