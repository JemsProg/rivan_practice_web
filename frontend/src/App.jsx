import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import LandingPage from '../src/pages/LandingPage'
import Courses from '../src/pages/Courses'
import Quotation from '../src/pages/Quotation'
import Reviewers from './pages/Reviewers'
import IPServicesSim from '../src/components/reviewers/lab_sims_ccna/ip-services-sim';
import IPServicesSim2 from '../src/components/reviewers/lab_sims_ccna/ip-services-sim-version-2';
import StaticRouting from '../src/components/reviewers/lab_sims_ccna/static_routing_configuration_sim';
import OspfConfigurationSim from '../src/components/reviewers/lab_sims_ccna/ospf-configuration-sim';
import LacpConfigurationSim from '../src/components/reviewers/lab_sims_ccna/lacp-configuration-sim';
import VoiceVlanConfigurationSim from '../src/components/reviewers/lab_sims_ccna/voice-vlan-configuration-sim';
import VlanTruckingConfigurationSim from '../src/components/reviewers/lab_sims_ccna/vlan-and-trunking-configuration-sim';
import IpConnectivitySim from '../src/components/reviewers/lab_sims_ccna/ipv4-and-ipv6-connectivity-sim';
import NamedAccessListPortSecuritySim from '../src/components/reviewers/lab_sims_ccna/named-access-list-port-security-sim';
import NamedAccessDhcpSnoopingSim from '../src/components/reviewers/lab_sims_ccna/named-access-list-dhcp-snooping-sim';
import VlanCdpSim from '../src/components/reviewers/lab_sims_ccna/vlan-and-cdp-sim';


/* New CCNA v1.1 Lab Sims */
import VlanCdpSim2 from '../src/components/reviewers/lab_new_ccna/vlan-and-cdp-sim2';
import IPAssignmentSim from '../src/components/reviewers/lab_new_ccna/ipv4-and-ipv6-assignment-sim';
import VlanCdpLldpSim from '../src/components/reviewers/lab_new_ccna/vlan-cdp-and-lldp-sim';
import OspfConfigSim2 from '../src/components/reviewers/lab_new_ccna/ospf-configuration-sim-2';
import OspfConfigSim3 from '../src/components/reviewers/lab_new_ccna/ospf-configuration-sim3';
import TrunkingLacpSim from  '../src/components/reviewers/lab_new_ccna/trunking-and-lacp-sim';
import VlanConfigSim from '../src/components/reviewers/lab_new_ccna/vlan-configuration-sim';
import VlanAndLacpSim2 from './components/reviewers/lab_new_ccna/vlan-and-lacp-sim2';
import TrunkingAndLacp8021q from './components/reviewers/lab_new_ccna/8021q-lacp';
import IPv4IPv6AssignmentSim2 from './components/reviewers/lab_new_ccna/ipv4-and-ipv6-assignment-sim2';
import NativeLacp8021q from './components/reviewers/lab_new_ccna/8021Qq-native-lacp';
import StaticRoutingConfigSim5 from './components/reviewers/lab_new_ccna/static-routing-config-sim-5';
import StaticRoutingConfigSim6 from './components/reviewers/lab_new_ccna/static-routing-config-sim-6';
import OldStaticRoutingSim2 from './components/reviewers/lab_new_ccna/old-static-routing-sim2';


/* CCNA Training */
import CcnaTrainingTutorials from './components/reviewers/ccna_training/training-tutorials';
import SpineLeafTutorial from './components/reviewers/ccna_training/spine-leaf-architecture-tutorial';
import AiTutorial from './components/reviewers/ccna_training/ai-tutorial';
import RestApiTutorial from './components/reviewers/ccna_training/rest-api';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/reviewer" element={<Reviewers />}/>
            <Route path="/reviewer/ip-services" element={<IPServicesSim />} />
            <Route path="/reviewer/ip-services-2" element={<IPServicesSim2 />} />
            <Route path="/reviewer/static_routing_configuration_sim" element={<StaticRouting />} />
            <Route path="/reviewer/ospf_configuration_sim" element={<OspfConfigurationSim />} />
            <Route path="/reviewer/lacp-configuration-sim" element={<LacpConfigurationSim />} />
            <Route path="/reviewer/voice-vlan" element={<VoiceVlanConfigurationSim />} />
            <Route path="/reviewer/vlan-trunking" element={<VlanTruckingConfigurationSim />} />
            <Route path="/reviewer/ip-connectivity" element={<IpConnectivitySim />} />
            <Route path="/reviewer/accesslist-port-security" element={<NamedAccessListPortSecuritySim />} />
            <Route path="/reviewer/accesslist-dhcp" element={<NamedAccessDhcpSnoopingSim />} />
            <Route path="/reviewer/vlan-cdp" element={<VlanCdpSim />} />


            {/* New CCNA v1.1 Lab Sims */}
            <Route path="/reviewer/vlan-cdp-2" element={<VlanCdpSim2 />} />
            <Route path="/reviewer/ip-assignment" element={<IPAssignmentSim />} />
            <Route path="/reviewer/vlan-cdp-lldp" element={<VlanCdpLldpSim />} />
            <Route path="/reviewer/ospf-2" element={<OspfConfigSim2 />} />
            <Route path="/reviewer/ospf-3" element={<OspfConfigSim3 />} />
            <Route path="/reviewer/trunking-lacp" element={<TrunkingLacpSim />} />
            <Route path="/reviewer/vlan-config" element={<VlanConfigSim />} />
            <Route path="/reviewer/native-vlan-lacp-2" element={<VlanAndLacpSim2 />} />
            <Route path="/reviewer/8021q-lacp" element={<TrunkingAndLacp8021q />} />
            <Route path="/reviewer/ip-assignment-2" element={<IPv4IPv6AssignmentSim2 />} />
            <Route path="/reviewer/8021q-native-lacp" element={<NativeLacp8021q />} />
            <Route path="/reviewer/static-routing-5" element={<StaticRoutingConfigSim5 />} />
            <Route path="/reviewer/static-routing-6" element={<StaticRoutingConfigSim6 />} />
            <Route path="/reviewer/static-routing-2" element={<OldStaticRoutingSim2 />} />


            {/* CCNA Training */}
            <Route path="/reviewer/training/tutorials-labs" element={<CcnaTrainingTutorials />} />
            <Route path="/reviewer/training/spine-leaf-tutorial" element={<SpineLeafTutorial />} />
            <Route path="/reviewer/training/ai-tutorial" element={<AiTutorial />} />
            <Route path="/reviewer/training/rest-api" element={<RestApiTutorial />} />

          

      
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
