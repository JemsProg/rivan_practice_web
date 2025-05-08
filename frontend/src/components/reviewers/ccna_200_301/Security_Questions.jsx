import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const SecurityQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Security Questions</h1>
      <div>
  <table style={{width: '100%', borderCollapse: 'collapse'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: '100%'}}>
          <p><span className="blueandbold">Security Quick Summary</span></p>
          <p>Summary of Human Security Vulnerabilities:</p>
          <table style={{borderCollapse: 'collapse', width: '100%', height: 240}} border={1}>
            <tbody>
              <tr>
                <td>Social engineering</td>
                <td>Exploits human trust and social behavior</td>
              </tr>
              <tr>
                <td>Phishing</td>
                <td>Disguises a malicious invitation as something legitimate</td>
              </tr>
              <tr>
                <td>Spear phishing</td>
                <td>Targets group of similar users</td>
              </tr>
              <tr>
                <td>Whaling</td>
                <td>Targets high-profile individuals</td>
              </tr>
              <tr>
                <td>Vishing</td>
                <td>Uses voice calls</td>
              </tr>
              <tr>
                <td>Smishing</td>
                <td>Uses SMS text messages</td>
              </tr>
              <tr>
                <td>Pharming</td>
                <td>Uses legitimate services to send users to a compromised site</td>
              </tr>
              <tr>
                <td>Watering hole</td>
                <td>Targets specific victims who visit a compromised site</td>
              </tr>
            </tbody>
          </table>
          <p>Reference: CCNA 200-301 Official Cert Guide Volume 2</p>
          <p><span className="blueandbold">Rivest-Shamir-Adleman (RSA) Characteristics</span></p>
          <p>RSA is a public-key encryption algorithm that uses an <strong>asymmetric</strong> encryption algorithm to encrypt data. Asymmetric encryption uses a key pair that is mathematically linked to encrypt and decrypt data. <span style={{textDecoration: 'underline'}}>A private and public key</span> are created, with the public key being accessible to anyone and the private key being a secret known only by the key pair creator. With RSA, either the private or public key can encrypt the data, while the other key decrypts it. This is one of the reasons RSA is the most used asymmetric encryption algorithm.</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><strong>Premium Member</strong>: You can test your knowledge with these questions first via this <a href="https://www.9tut.com/security-quiz" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1</span></p>
  An email user has been lured into clicking a link in an email sent by their company’s security organization. The webpage that opens reports that it was safe but the link could have contained malicious code. Which type of security program is in place?
  <p>A. Physical access control<br />
    B. Social engineering attack<br />
    C. brute force attack<br />
    D. user awareness</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>This is a training program which simulates an attack, not a real attack (as it says “The webpage that opens reports that it was safe”) so we believed it should be called a “user awareness” program. Therefore the best answer here should be “user awareness”. This is the definition of “User awareness” from CCNA 200-301 Offical Cert Guide Book:</p>
  <p>“<strong>User awareness:</strong> All users should be made aware of the need for data confidentiality to protect corporate information, as well as their own credentials and personal information. They should also be made aware of potential threats, schemes to mislead, and proper procedures to report security incidents. “</p>
  <p>Note: Physical access control means infrastructure locations, such as network closets and data centers, should remain securely locked.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  An engineer is asked to protect unused ports that are configured in the default VLAN on a switch. Which two steps will fulfill the request? (Choose two)
  <p>A. Configure the ports in an EtherChannel<br />
    B. Administratively shut down the ports<br />
    C. Configure the port type as access and place in VLAN 99 <br />
    D. Configure the ports as trunk ports<br />
    E. Enable the Cisco Discovery Protocol</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B C
  </p><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which configuration is needed to generate an RSA key for SSH on a router?
  <p>A. Configure the version of SSH<br />
    B. Configure VTY access<br />
    C. Create a user with a password<br />
    D. Assign a DNS domain name</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>In order to generate an RSA key for SSH, we need to configure the hostname and a DNS domain name on the router (a username and password is also required). Therefore in fact both answer C and answer D are correct.</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which two conditions must be met before SSH can operate normally on a Cisco IOS switch? (Choose two)
  <p>A. The switch must be running a k9 (crypto) IOS image<br />
    B. The <strong>ip domain-name</strong> command must be configured on the switch<br />
    C. IP routing must be enabled on the switch<br />
    D. A console password must be configured on the switch<br />
    E. Telnet must be disabled on the switch</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A B
  </p><p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  When a site-to-site VPN is used, which protocol is responsible for the transport of user data?
  <p>A. IKEv2<br />
    B. IKEv1<br />
    C. IPsec <br />
    D. MD5</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A site-to-site VPN allows offices in multiple fixed locations to establish secure connections with each other over a public network such as the Internet. A site-to-site VPN means that two sites create a VPN tunnel by encrypting and sending data between two devices. One set of rules for creating a site-to-site VPN is defined by IPsec.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/VPN/Site-to-site-VPN.jpg" alt="Site-to-site-VPN.jpg" width={548} height={359} /></p>
  <p>In the topology above, Remote Campus sites can connect to the Main Campus through site-to-site VPNs.</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Which set of action satisfy the requirement for multi-factor authentication?
  <p>A. The user swipes a key fob, then clicks through an email link<br />
    B. The user enters a user name and password, and then clicks a notification in an authentication app on a mobile device<br />
    C. The user enters a PIN into an RSA token, and then enters the displayed RSA key on a login screen<br />
    D. The user enters a user name and password and then re-enters the credentials on a second screen</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>This is an example of how two-factor authentication (2FA) works:</p>
  <p>1. The user logs in to the website or service with their username and password.<br />
    2. The password is validated by an authentication server and, if correct, the user becomes eligible for the second factor.<br />
    3. The authentication server sends a unique code to the user’s second-factor method (such as a smartphone app).<br />
    4. The user confirms their identity by providing the additional authentication for their second-factor method.</p>
  <p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Which command prevents passwords from being stored in the configuration as plaintext on a router or switch?
  <p>A. enable secret<br />
    B. service password-encryption<br />
    C. username Cisco password encrypt <br />
    D. enable password</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>“enable secret” is the password that will be used to switch from User Exec mode to Priv Exec mode and it is always encrypted. It does not “prevent passwords from being stored in the configuration as plaintext” so this answer is not correct.</p>
  <p className="ccnaquestionsnumber">Question 8</p>
  Refer to the exhibit. An administrator configures four switches for local authentication using passwords that are stored in a cryptographic hash. The four switches must also support SSH access for administrators to manage the network infrastructure. Which switch is configured correctly to meet these requirements?
  <table border={1}>
    <tbody>
      <tr>
        <td>
          <p>SW1(config-line)#line vty 0 15<br />
            SW1(config-line)#no login local<br />
            SW1(config-line)#password cisco</p>
          <p>SW2(config)#username admin1 password abcd1234<br />
            SW2(config)#username admin2 password abcd1234<br />
            SW2(config-line)#line vty 0 15<br />
            SW2(config-line)#login local</p>
          <p>SW3(config)#username admin1 secret abcd1234<br />
            SW3(config)#username admin2 secret abcd1234<br />
            SW3(config-line)#line vty 0 15<br />
            SW3(config-line)#login local</p>
          <p>SW4(config)#username admin1 password abcd1234<br />
            SW4(config)#username admin2 password abcd1234<br />
            SW4(config-line)#line console 0<br />
            SW4(config-line)#login local</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>A. SW1<br />
    B. SW2<br />
    C. SW3<br />
    D. SW4</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The “login local” command instructs the device to use the username and password in its local database for authentication. The secret is encrypted when it is stored on the local router.</p>
  <p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  The service password-encryption command is entered on a router. What is the effect of this configuration?
  <p>A. restricts unauthorized users from viewing clear-text passwords in the running configuration<br />
    B. prevents network administrators from configuring clear-text passwords<br />
    C. protects the VLAN database from unauthorized PC connections on the switch<br />
    D. encrypts the password exchange when a VPN tunnel is established</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The service password-encryption command will encrypt all current and future passwords so any password existed in the configuration will be encrypted.</p>
  <p>Note: With the “service password-encryption” command, administrators can still configure clear-text passwords but they will be encrypted in the configuration file. So we cannot say “prevents network administrators from configuring clear-text passwords”.</p>
  <p><span className="ccnaquestionsnumber">Question 10<br />
    </span></p>
  In which two ways does a password manager reduce the chance of a hacker stealing a user’s password? (Choose two)
  <p>A. It automatically provides a second authentication factor that is unknown to the original user<br />
    B. It uses an internal firewall to protect the password repository from unauthorized access<br />
    C. It protects against keystroke logging on a compromised device or web site<br />
    D. It stores the password repository on the local workstation with built-in antivirus and anti-malware functionality<br />
    E. It encourages users to create stronger passwords</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>A password manager only helps you remember your chosen passwords without typing them by yourself. It automatically fills into the password textbox for you so it does not provides a second authentication factor. An example of second authentication factor is an one time password (OTP) sent to your phone after typing your password and you have to type this OTP to authenticate.</p>
  <p>By using a password manager, you are encouraged to create a complex password because you don’t need to remember it.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  What are two purposes of launching a reconnaissance attack on a network? (Choose two)
  <p>A. to prevent other users from accessing the system<br />
    B. to escalate access privileges<br />
    C. to gather information about the network and devices<br />
    D. to scan for accessibility<br />
    E. to retrieve and modify data</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C D
  </p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default SecurityQuestion;
