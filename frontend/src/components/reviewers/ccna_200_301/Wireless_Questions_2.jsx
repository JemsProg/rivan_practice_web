import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const WirelessQuestion2 = () => {
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
      <h1 className="text-3xl font-bold mb-4">Wireless Questions 2 </h1>

 <div>
  <p />
  <p><strong>Premium Member:</strong> You can test your knowledge with these questions first via this <a href="https://www.9tut.com/wireless-quiz-2" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p className="ccnaquestionsnumber">Question 1</p>
  How does CAPWAP communicate between an access point in local mode and a WLC?
  <p>A. The access point must directly connect to the WLC using a copper cable<br />
    B. The access point must not be connected to the wired network, as it would create a loop<br />
    C. The access point must be connected to the same switch as the WLC<br />
    D. The access point has the ability to link to any switch in the network, assuming connectivity to the WLC</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p className="ccnaquestionsnumber">Question 2</p>
  Which WPA3 enhancement protects against hackers viewing traffic on the Wi-Fi network?
  <p>A. TKIP encryption<br />
    B. AES encryption<br />
    C. Scrambled encryption key<br />
    D. SAE encryption</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Wi-Fi Protected Access version 3 (WPA3) is a new Wi-Fi Alliance’s (WFA) security standard for personal and enterprise networks. It aims to improve overall Wi-Fi security by using modern security algorithms and stronger cipher suites. WPA3 has two parts:</p>
  <p>+ <strong>WPA3-Personal</strong>: Uses <strong>simultaneous authentication of equals (SAE)</strong> instead of pre-shared key (PSK), providing users with stronger security protections against attacks such as offline dictionary attacks, key recovery, and message forging.</p>
  <p>+ <strong>WPA3-Enterprise</strong>: Offers stronger authentication and link-layer encryption methods, and an optional 192-bit security mode for sensitive security environments.</p>
  <p className="ccnaquestionsnumber">Question 3</p>
  What is a difference between local AP mode and FlexConnet AP mode?
  <p>A. Local AP mode creates two CAPWAP tunnels per AP to the WLC<br />
    B. FlexConnect AP mode fails to function if me AP loses connectivity with the WLC<br />
    C. FlexConnect AP mode bridges the traffic from the AP to the WLC when local switching is configured<br />
    D. Local AP mode causes the AP to behave as if it were an autonomous AP</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In Central Switched (Local) mode, an AP creates two CAPWAP tunnels to the Wireless Controller. One tunnel is used for forwarding data traffic and the other is used for forwarding the management traffic.</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  When a WPA2-PSK WLAN is configured in the Wireless LAN Controller, what is the minimum number of characters that is required in ASCII format?
  <p>A. 6<br />
    B. 8<br />
    C. 12<br />
    D. 18</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>WPA/WPA2 preshared keys must contain 8 to 63 ASCII text characters or 64 hexadecimal characters.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_01010001.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/wireless/controller/7-4/configuration/guides/consolidated/b_cg74_CONSOLIDATED/b_cg74_CONSOLIDATED_chapter_01010001.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 5</span></p>
  Using direct sequence spread spectrum, which three 2.4-GHz channels are used to limit collisions?
  <p>A. 1,5,10<br />
    B. 1,2,3<br />
    C. 1,6,11<br />
    D. 5,6,7</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In the 2.4 GHz band, 1, 6, and 11 are the only non-overlapping channels.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/wireless/802_11b_overlap.png" alt="802_11b_overlap.png" width={664} height={193} /></p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  A wireless administrator has configured a WLAN; however, the clients need access to a less congested 5-GHz network for their voice quality. What action must be taken to meet the requirement?
  <p>A. enable AAA override<br />
    B. enable RX-SOP<br />
    C. enable DTIM<br />
    D. enable Band Select</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Band Select or Band Direction is a new feature that encourages dual band clients to connect to 5 G-Hz networks. Band select is disabled by default. The Band Select function provides a better wireless experience for users.</p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  What is a function of Wireless LAN Controller?
  <p>A. send LWAPP packets to access points<br />
    B. use SSIDs to distinguish between wireless clients<br />
    C. register with a single access point that controls traffic between wired and wireless endpoints<br />
    D. monitor activity on wireless and wired LANs</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p className="ccnaquestionsnumber">Question 8</p>
  Which protocol prompts the Wireless LAN Controller to generate its own local web administration SSL certificate for GUI access?
  <p>A. HTTP<br />
    B. HTTPS<br />
    C. TACACS+<br />
    D. RADIUS</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>When you enable HTTPS, the controller generates its own local web administration SSL certificate and automatically applies it to the GUI.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-0/configuration-guide/b_cg80/b_cg80_chapter_011.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-0/configuration-guide/b_cg80/b_cg80_chapter_011.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  What is a recommended approach to avoid co-channel congestion while installing access points that use the 2.4 GHz frequency?
  <p>A. different nonoverlapping channels<br />
    B. one nonoverlapping channel<br />
    C. one overlapping channel<br />
    D. different overlapping channels</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In the 2.4 GHz band, 1, 6, and 11 are the only non-overlapping channels so they should be chosen while installing APs.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/wireless/802_11b_overlap.png" alt="802_11b_overlap.png" width={664} height={193} /></p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default WirelessQuestion2;
