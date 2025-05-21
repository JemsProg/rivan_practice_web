import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const WirelessTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">Wireless Tutorial</h1>
      </div>

     {/* Content */}
<div>
  <p>In this article we will discuss about Wireless technologies mentioned in CCNA.</p>
  <p>Wireless LAN (WLAN) is very popular nowadays. Maybe you have ever used some wireless applications on your laptop or cellphone. Wireless LANs enable users to communicate without the need of cable. Below is an example of a simple WLAN:</p>
  <p style={{textAlign: 'center'}}><img fetchpriority="high" decoding="async" src="https://www.9tut.com/images/ccna_self_study/Wireless/Wireless_Applications.jpg" alt="Wireless_Applications.jpg" width={330} height={380} /></p>
  <p>Each WLAN network needs a wireless Access Point (AP) to transmit and receive data from users. Unlike a wired network which operates at full-duplex (send and receive at the same time), a wireless network operates at half-duplex so sometimes an AP is referred as a Wireless Hub.</p>
  <p><span id="more-787" /></p>
  <p>{/*adsense*/}</p>
  <p>The major difference between wired LAN and WLAN is WLAN transmits data by radiating energy waves, called radio waves, instead of transmitting electrical signals over a cable.</p>
  <p>Also, WLAN uses CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) instead of CSMA/CD for media access. WLAN can’t use CSMA/CD as a sending device can’t transmit and receive data at the same time. CSMA/CA operates as follows:</p>
  <p>+ Listen to ensure the media is free. If it is free, set a random time before sending data<br />
    + When the random time has passed, listen again. If the media is free, send the data. If not, set another random time again<br />
    + Wait for an acknowledgment that data has been sent successfully<br />
    + If no acknowledgment is received, resend the data</p>
  <p className="blueandbold">IEEE 802.11 standards:</p>
  <p>Nowadays there are three organizations influencing WLAN standards. They are:</p>
  <p>+ ITU-R: is responsible for allocation of the RF bands<br />
    + IEEE: specifies how RF is modulated to transfer data<br />
    + Wi-Fi Alliance: improves the interoperability of wireless products among vendors</p>
  <p>But the most popular type of wireless LAN today is based on the IEEE 802.11 standard, which is known informally as Wi-Fi.</p>
  <p><strong>* 802.11a:</strong> operates in the 5.7 GHz ISM band. Maximum transmission speed is 54Mbps and approximate wireless range is 25-75 feet indoors.<br />
    <strong>* 802.11b:</strong> operates in the 2.4 GHz ISM band. Maximum transmission speed is 11Mbps and approximate wireless range is 100-200 feet indoors.<br />
    <strong>* 802/11g:</strong> operates in the 2.4 GHz ISM band. Maximum transmission speed is 54Mbps and approximate wireless range is 100-200 feet indoors.</p>
  <p><strong>ISM Band</strong>: The ISM (Industrial, Scientific and Medical) band, which is controlled by the FCC in the US, generally requires licensing for various spectrum use. To accommodate wireless LAN’s, the FCC has set aside bandwidth for unlicensed use including the 2.4Ghz spectrum where many WLAN products operate.</p>
  <p><strong>Wi-Fi</strong>: stands for Wireless Fidelity and is used to define any of the IEEE 802.11 wireless standards. The term Wi-Fi was created by the Wireless Ethernet Compatibility Alliance (WECA). Products certified as Wi-Fi compliant are interoperable with each other even if they are made by different manufacturers.</p>
  <p>{/*adsense#MiddleContent*/}</p>
  <p>Access points can support several or all of the three most popular IEEE WLAN standards including 802.11a, 802.11b and 802.11g.</p>
  <p className="blueandbold">WLAN Modes:</p>
  <p>WLAN has two basic modes of operation:</p>
  <p><strong>* Ad-hoc mode: </strong>In this mode devices send data directly to each other without an AP.</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/Wireless/Wireless_Ad-hoc_mode.jpg" alt="Wireless_Ad-hoc_mode.jpg" width={245} height={160} /></p>
  <p><strong>* Infrastructure mode:</strong> Connect to a wired LAN, supports two modes (service sets):</p>
  <p>+ Basic Service Set (BSS): uses only a single AP to create a WLAN<br />
    + Extended Service Set (ESS): uses more than one AP to create a WLAN, allows roaming in a larger area than a single AP. Usually there is an overlapped area between two APs to support roaming. The overlapped area should be more than 10% (from 10% to 15%) to allow users moving between two APs without losing their connections (called roaming). The two adjacent APs should use non-overlapping channels to avoid interference. The most popular non-overlapping channels are channels 1, 6 and 11 (will be explained later).</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/Wireless/Wireless_Infrastructure_mode.jpg" alt="Wireless_Infrastructure_mode.jpg" width={405} height={340} /></p>
  <p>Roaming: The ability to use a wireless device and be able to move from one access point’s range to another without losing the connection.</p>
  <p>When configuring ESS, each of the APs should be configured with the same Service Set Identifier (SSID) to support roaming function. SSID is the unique name shared among all devices on the same wireless network. In public places, SSID is set on the AP and broadcasts to all the wireless devices in range. SSIDs are case sensitive text strings and have a maximum length of 32 characters. SSID is also the minimum requirement for a WLAN to operate. In most Linksys APs (a product of Cisco), the default SSID is “linksys”.</p>
  <p>In the next part we will discuss about Wireless Encoding, popular Wireless Security Standard and some sources of wireless interference.</p>
  <p>{/*adsense*/}</p>
</div>


      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default WirelessTutorial;