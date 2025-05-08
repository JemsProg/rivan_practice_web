import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const WirelessQuestion = () => {
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
    <section ref={sectionRef} className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Wireless Questions </h1>

<div>
  <p>
  </p><p>Note: If you are not sure about Wireless, please read our <a href="https://www.9tut.com/wireless-tutorial" target="_blank" rel="noopener noreferrer">Wireless tutorial</a>.</p>
  <table style={{borderCollapse: 'collapse', width: '100%'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: '100%'}}>
          <p><span className="blueandbold">Quick Wireless Summary</span></p>
          <p className="blueandbold">WLAN Modes:</p>
          <p>WLAN has two basic modes of operation:</p>
          <p><strong>* Ad-hoc mode: </strong>In this mode devices send data directly to each other without an AP.</p>
          <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/Wireless/Wireless_Ad-hoc_mode.jpg" alt="Wireless_Ad-hoc_mode.jpg" width={245} height={160} /></p>
          <p><strong>* Infrastructure mode:</strong> Connect to a wired LAN, supports two modes (service sets):</p>
          <p>+ Basic Service Set (BSS): uses only a single AP to create a WLAN<br />
            + Extended Service Set (ESS): uses more than one AP to create a WLAN, allows roaming in a larger area than a single AP. Usually there is an overlapped area between two APs to support roaming. The overlapped area should be more than 10% (from 10% to 15%) to allow users moving between two APs without losing their connections (called roaming). The two adjacent APs should use non-overlapping channels to avoid interference. The most popular non-overlapping channels are channels 1, 6 and 11 (will be explained later).</p>
          <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/Wireless/Wireless_Infrastructure_mode.jpg" alt="Wireless_Infrastructure_mode.jpg" width={405} height={340} /></p>
          <p>Roaming: The ability to use a wireless device and be able to move from one access point’s range to another without losing the connection.</p>
          <p>Cisco Access Points (APs) can operate in one of two modes: autonomous or lightweight<br />
            + <strong>Autonomous</strong>: self-sufficient and standalone. Used for small wireless networks. Each autonomous AP must be configured with a management IP address so that it can be remotely accessed using Telnet, SSH, or a web interface. Each AP must be individually managed and maintained unless you use a management platform such as Cisco DNA Center.<br />
            + <strong>Lightweight</strong>: The term ‘lightweight’ refers to the fact that these devices cannot work independently. A Cisco lightweight AP (LAP) has to join a Wireless LAN Controller (WLC) to function. LAP and WLC communicate with each other via a logical pair of CAPWAP tunnels.</p>
          <p>An LAP operates in one of six different modes:<br />
            + <strong>Local mode</strong> (default mode): It offers one or more basic service sets (BBS) on a specific channel. AP maintains a tunnel towards its Wireless Controller. When the AP is not transmitting wireless client frames, it measures noise floor and interference, and scans for intrusion detection (IDS) events every 180 seconds.<br />
            + <strong>FlexConnect</strong>, formerly known as <strong>Hybrid Remote Edge AP (H-REAP)</strong>, mode: allows data traffic to be switched locally and not go back to the controller if the CAPWAP to the WLC is down. The FlexConnect AP can perform standalone client authentication and switch VLAN traffic locally even when it’s disconnected to the WLC (Local Switched). FlexConnect AP can also tunnel (via CAPWAP) both user wireless data and control traffic to a centralized WLC (Central Switched). The AP can locally switch traffic between a VLAN and SSID when the CAPWAP tunnel to the WLC is down.</p>
          <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/wireless/Local_Switching_Central_Switching.jpg" alt="Local_Switching_Central_Switching.jpg" width={400} height={509} /></p>
          <p>FlexConnect addresses the wireless connectivity needs in branch locations by permitting wireless user traffic to terminate locally rather than tunneled across the WAN to a central WLC.<br />
            + <strong>Monitor mode</strong>: does not transmit at all. It acts like a dedicated sensor for location-based services (LBS), rogue AP detection, and Checks Intrusion Detection System (IDS). In this mode, AP will not broadcast an SSID so clients are unable to connect to it. When Cisco CleanAir is enabled in monitor mode, the access point provides air quality and interference detection reports for all monitored channels.<br />
            + <strong>Rogue detector mode</strong>: monitor for rogue APs. It does not handle data at all.<br />
            + <strong>Sniffer mode</strong>: run as a sniffer and captures and forwards all the packets on a particular channel to a remote machine where you can use protocol analysis tool (Wireshark, Airopeek, etc) to review the packets and diagnose issues. Strictly used for troubleshooting purposes. <br />
            + <strong>Bridge mode:</strong> bridge together the WLAN and the wired infrastructure together.<br />
            + <strong>Sensor mode</strong>: this is a special mode which is not listed in the books but you need to know. In this mode, the device can actually function much like a WLAN client would associating and identifying client connectivity issues within the network in real time without requiring an IT or technician to be on site. The advantage of sensor mode is to allow the AP to use its own radio (as a client) to test the quality and performance of the network at any time.</p>
          <p>– <strong>Control and Provisioning for Wireless Access Point (CAPWAP)</strong> is an IETF standard protocol which enables a WLC to manage multiple APs. CAPWAP is similar to LWAPP except the following differences:</p>
          <p>+ <strong>CAPWAP</strong> uses Datagram Transport Layer Security (DTLS) for authentication and encryption to protect traffic between APs and controllers. LWAPP uses AES.<br />
            + CAPWAP has a dynamic maximum transmission unit (MTU) discovery mechanism.<br />
            + CAPWAP runs on UDP ports 5246 (control messages) and 5247 (data messages)</p>
          <p><strong>Signal to Noise Ratio</strong> (SNR) is defined as the ratio of the transmitted power from the AP to the ambient (noise floor) energy present. To calculate the SNR value, we add the Signal Value to the Noise Value to get the SNR ratio. A positive value of the SNR ratio is always better.</p>
          <p>The 2.4 GHz band is subdivided into multiple channels each allotted 22 MHz bandwidth and separated from the next channel by 5 MHz.<br />
            -&gt; A best practice for 802.11b/g/n WLANs requiring multiple APs is to use non-overlapping channels such as 1, 6, and 11.</p>
          <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/Wireless/wireless_2_4_GHz_band.png" alt="wireless_2_4_GHz_band.png" width={664} height={193} /></p>
          <p>Types of external antennas:<br />
            + <strong>Omnidirectional</strong>: Provide 360-degree coverage. Ideal in houses and office areas<br />
            + <strong>Directional</strong>: Focus the radio signal in a specific direction. Examples are the Yagi and parabolic dish<br />
            + <strong>Multiple Input Multiple Output</strong> (MIMO) – Uses multiple antennas (up to eight) to increase bandwidth</p>
          <p><span className="blueandbold">WPA2 and WPA3</span></p>
          <p><strong>WPA2</strong> is classified into two versions to encrypt Wi-Fi networks:<br />
            + WPA2-Personal uses pre-shared key (PSK)<br />
            + WPA2-Enterprise uses advanced encryption standard (AES)</p>
          <p>Similar to WPA2, <strong>WPA3</strong> includes:<br />
            + WPA3-Personal: applies to small-scale networks (individual and home networks). For WPA3-Personal, we can only use CCMP128(AES) for Encryption; CCMP256, GCMP128 and GCMP256 encryption ciphers are not available for WPA3-Personal.<br />
            + WPA3-Enterprise: applies to medium- and large-sized networks with higher requirements on network management, access control, and security, and uses more advanced security protocols to protect sensitive data of users.</p>
          <p>WPA3 uses AES encryption and SAE for authentication methods.</p>
          <p>WPA3 provides improvements to the general Wi-Fi encryption, thanks to Simultaneous Authentication of Equals (<strong>SAE</strong>) replacing the Pre-Shared Key (PSK) authentication method used in prior WPA versions. With SAE, the user experience is the same (choose a passphrase to connect), but SAE automatically adds a step to the handshake, which makes brute force attacks ineffective. SAE enables individuals or home users to set Wi-Fi passwords that are easier to remember and provide the same security protection even if the passwords are not complex enough.</p>
          <p>WPA3 requires the use of <strong>Protected Management Frames</strong>. These frames help protect against forging and eavesdropping.</p>
          <p>WPA3 networks include perfect <span style={{textDecoration: 'underline'}}>forward secrecy</span>. With this protection, even if an adversary successfully guesses the correct network password, they cannot observe a user’s earlier interactions on the network, determine the session keys for that interaction, or decrypt wireless traffic from other users on the network</p>
          <p><span className="blueandbold"><strong>Wireless Standards</strong></span></p>
          <table style={{width: '98.4763%'}} border={1}>
            <thead>
              <tr>
                <td style={{width: '15.0538%'}} valign="top">
                  <p><strong>IEEE Standard</strong></p>
                </td>
                <td style={{width: '22.7001%'}} valign="top">
                  <p><strong>Frequency/Medium</strong></p>
                </td>
                <td style={{width: '13.7395%'}} valign="top">
                  <p><strong>Speed</strong></p>
                </td>
                <td style={{width: '47.0729%'}} valign="top">
                  <p><strong>Transmission Range</strong></p>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{width: '15.0538%'}} valign="top">
                  <p>802.11</p>
                </td>
                <td style={{width: '22.7001%'}} valign="top">
                  <p>2.4GHz RF</p>
                </td>
                <td style={{width: '13.7395%'}} valign="top">
                  <p>1 to 2Mbps</p>
                </td>
                <td style={{width: '47.0729%'}} valign="top">
                  <p>20 feet indoors.</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '15.0538%'}} valign="top">
                  <p>802.11a</p>
                </td>
                <td style={{width: '22.7001%'}} valign="top">
                  <p>5GHz</p>
                </td>
                <td style={{width: '13.7395%'}} valign="top">
                  <p>Up to 54Mbps</p>
                </td>
                <td style={{width: '47.0729%'}} valign="top">
                  <p>25 to 75 feet indoors; range can be affected by building materials.</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '15.0538%'}} valign="top">
                  <p>802.11b</p>
                </td>
                <td style={{width: '22.7001%'}} valign="top">
                  <p>2.4GHz</p>
                </td>
                <td style={{width: '13.7395%'}} valign="top">
                  <p>Up to 11Mbps</p>
                </td>
                <td style={{width: '47.0729%'}} valign="top">
                  <p>Up to 150 feet indoors; range can be affected by building materials.</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '15.0538%'}} valign="top">
                  <p>802.11g</p>
                </td>
                <td style={{width: '22.7001%'}} valign="top">
                  <p>2.4GHz</p>
                </td>
                <td style={{width: '13.7395%'}} valign="top">
                  <p>Up to 54Mbps</p>
                </td>
                <td style={{width: '47.0729%'}} valign="top">
                  <p>Up to 150 feet indoors; range can be affected by building materials.</p>
                </td>
              </tr>
              <tr>
                <td style={{width: '15.0538%'}} valign="top">
                  <p>802.11n</p>
                </td>
                <td style={{width: '22.7001%'}} valign="top">
                  <p>2.4GHz/5GHz</p>
                </td>
                <td style={{width: '13.7395%'}} valign="top">
                  <p>Up to 600Mbps</p>
                </td>
                <td style={{width: '47.0729%'}} valign="top">
                  <p>175+ feet indoors; range can be affected by building materials.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <p><span className="blueandbold">WLC terms</span></p>
          <p>A dynamic interface is an interface that maps a WLAN to a wired VLAN or subnet. Dynamic interfaces are used to control and secure the traffic on the WLAN just like we use VLANs and subnets on the LAN for that purpose.</p>
          <p>Interface groups are logical groups of interfaces. An interface can be part of multiple interface groups.</p>
          <p>When many APs support the same WLAN, all users of that WLAN, on all APs connected to the same controller, are sent to the same dynamic interface.</p>
          <p>By default there is a AP Group called “default-group” created on your WLC and all the WLANs where WLAN ID is between 1-16 map to this group.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  An engineer must configure a WLAN using the strongest encryption type for WPA2-PSK. Which cipher fulfills the configuration requirement?
  <p>A. WEP<br />
    B. RC4<br />
    C. AES<br />
    D. TKIP</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Many routers provide WPA2-PSK (TKIP), WPA2-PSK (AES), and WPA2-PSK (TKIP/AES) as options. TKIP is actually an older encryption protocol introduced with WPA to replace the very-insecure WEP encryption at the time. TKIP is actually quite similar to WEP encryption. TKIP is no longer considered secure, and is now deprecated. In other words, you shouldn’t be using it.</p>
  <p>AES is a more secure encryption protocol introduced with WPA2 and it is currently the strongest encryption type for WPA2-PSK.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which unified access point mode continues to serve wireless clients after losing connectivity to the Cisco Wireless LAN Controller?
  <p>A. sniffer<br />
    B. mesh<br />
    C. flex connect<br />
    D. local</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In previous releases, whenever a FlexConnect access point disassociates from a controller, it moves to the standalone mode. The clients that are centrally switched are disassociated. However, the FlexConnect access point continues to serve locally switched clients. When the FlexConnect access point rejoins the controller (or a standby controller), all clients are disconnected and are authenticated again. This functionality has been enhanced and the connection between the clients and the FlexConnect access points are maintained intact and the clients experience seamless connectivity. When both the access point and the controller have the same configuration, the connection between the clients and APs is maintained.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_010001101.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_010001101.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which QoS Profile is selected in the GUI when configuring a voice over WLAN deployment?
  <p>A. Bronze<br />
    B. Platinum<br />
    C. Silver<br />
    D. Gold</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Cisco Unified Wireless Network solution WLANs support four levels of QoS: Platinum/Voice, Gold/Video, Silver/Best Effort (default), and Bronze/Background.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_01010111.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_01010111.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  What is a design element when deploying an 802.11b wireless infrastructure?
  <p>A. disabling TPC so that access points can negotiate signal levels with their attached wireless devices.<br />
    B. setting the maximum data rate to 54 Mbps on the Cisco Wireless LAN Controller<br />
    C. allocating non overlapping channels to access points that are in close physical proximity to one another<br />
    D. configuring access points to provide clients with a maximum of 5 Mbps</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Which statement about Link Aggregation when implemented on a Cisco Wireless LAN Controller is true?
  <p>A. To pass client traffic two or more ports must be configured<br />
    B. The EtherChannel must be configured in “mode active”<br />
    C. When enabled the WLC bandwidth drops to 500 Mbps<br />
    D. One functional physical port is needed to pass client traffic</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Link aggregation (LAG) is a partial implementation of the 802.3ad port aggregation standard. It bundles all of the controller’s distribution system ports into a single 802.3ad port channel.</p>
  <p>Restriction for Link aggregation:</p>
  <p>+ LAG requires the EtherChannel to be configured for ‘mode on’ on both the controller and the Catalyst switch -&gt; Answer B is not correct.<br />
    + If the recommended load-balancing method cannot be configured on the Catalyst switch, <strong>then configure the LAG connection as a single member link</strong> or disable LAG on the controller -&gt; Answer A is not correct while answer D is correct.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-5/configuration-guide/b_cg75/b_cg75_chapter_0100010.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-5/configuration-guide/b_cg75/b_cg75_chapter_0100010.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Which mode allows access points to be managed by Cisco Wireless LAN Controllers?
  <p>A. autonomous<br />
    B. lightweight<br />
    C. bridge<br />
    D. mobility express</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A Lightweight Access Point (LAP) is an AP that is designed to be connected to a wireless LAN (WLAN) controller (WLC). APs are “lightweight,” which means that they cannot act independently of a wireless LAN controller (WLC). The WLC manages the AP configurations and firmware. The APs are “zero touch” deployed, and individual configuration of APs is not necessary.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/support/docs/wireless/aironet-1200-series/70278-lap-faq.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/support/docs/wireless/aironet-1200-series/70278-lap-faq.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Which type of wireless encryption is used for WPA2 in pre-shared key mode?
  <p>A. TKIP with RC4<br />
    B. RC4<br />
    C. AES-128<br />
    D. AES-256</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p><strong>WPA2</strong><br />
    Pros:<br />
    + Addresses many security flaws of its predecessors<br />
    + Uses the strongest encryption method: AES<br />
    + Required by the Wi-Fi Alliance for use on all Wi-Fi certified products<br />
    + 256-bit key for encryption</p>
  <p>Reference: <a href="https://www.avast.com/c-wep-vs-wpa-or-wpa2" target="_blank" rel="noopener">https://www.avast.com/c-wep-vs-wpa-or-wpa2</a></p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  Which two values or settings must be entered when configuring a new WLAN in the Cisco Wireless LAN Controller GUI? (Choose two)
  <p>A. management interface settings<br />
    B. QoS settings<br />
    C. ip address of one or more access points<br />
    D. SSID<br />
    E. Profile name</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D E
  </p><p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  Which feature on the Cisco Wireless LAN Controller when enabled restricts management access from specific networks?
  <p>A. CPU ACL<br />
    B. TACACS<br />
    C. Flex ACL <br />
    D. RADIUS</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Whenever you want to control which devices can talk to the main CPU, a CPU ACL is used.</p>
  <p>Note: CPU ACLs only filter traffic towards the CPU, and not any traffic exiting or generated by the CPU.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/109669-secure-wlc.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/support/docs/wireless/4400-series-wireless-lan-controllers/109669-secure-wlc.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  Which 802.11 frame type is association response?
  <p>A. management<br />
    B. protected frame<br />
    C. control<br />
    D. action</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>There are three main types of 802.11 frames: the Data Frame, the Management Frame and the Control Frame. Association Response belongs to Management Frame. Association response is sent in response to an association request.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  When configuring a WLAN with WPA2 PSK in the Cisco Wireless LAN Controller GUI, which two formats are available to select? (Choose two)
  <p>A. ASCII<br />
    B. base64<br />
    C. binary<br />
    D. decimal<br />
    E. hexadecimal</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>When configuring a WLAN with WPA2 Preshared Key (PSK), we can choose the encryption key format as either ASCII or HEX.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/config-guide/b_wl_16_10_cg/multi-preshared-key.pdf" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/config-guide/b_wl_16_10_cg/multi-preshared-key.pdf</a></p>
  <p><span className="ccnaquestionsnumber">Question 12<br />
    </span></p>
  What is a benefit of using a Cisco Wireless LAN Controller?
  <p>A. Central AP management requires more complex configurations<br />
    B. Unique SSIDs cannot use the same authentication method<br />
    C. It supports autonomous and lightweight APs<br />
    D. It eliminates the need to configure each access point individually</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaquestionsnumber">Question 13<br />
    </span></p>
  Several new coverage cells are required to improve the Wi-Fi network of an organization. Which two standard designs are recommended? (Choose two)
  <p>A. 5GHz provides increased network capacity with up to 23 nonoverlapping channels,<br />
    B. 5GHz channel selection requires an autonomous access point.<br />
    C. Cells that overlap one another are configured to use nonoverlapping channels.<br />
    D. Adjacent cells with overlapping channels use a repeater access point.<br />
    E. For maximum throughput, the WLC is configured to dynamically set adjacent access points to the same channel.</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The 802.11 standard defines 23 20MHz wide channels in the 5 GHz spectrum. Each channel is spaced 20MHz apart and separated into three Unlicensed National Information Infrastructure (UNII) bands.</p>
  <p>Reference: <a href="https://documentation.meraki.com/MR/WiFi_Basics_and_Best_Practices/Channel_Planning_Best_Practices" target="_blank" rel="noopener noreferrer">https://documentation.meraki.com/MR/WiFi_Basics_and_Best_Practices/Channel_Planning_Best_Practices</a></p>
</div>

      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default WirelessQuestion;
