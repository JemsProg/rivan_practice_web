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




          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
