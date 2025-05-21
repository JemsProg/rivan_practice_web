import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const RadiusTutorial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) => {
      el.classList.add('opacity-0', 'translate-y-[30px]', 'will-change-transform');
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-6 text-gray-900">AAA TACACS+ and RADIUS Tutorial</h1>
      </div>

      {/* Content */}
      <div 
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="space-y-8"
      >
        <p>Nowadays, security plays an important role in a company. Without any security solution implementation on our network, a user can simply &ldquo;plug and play&rdquo; into our network. The user may simple pick up a valid IP address or be assigned one automatically via DHCP. It is convenient, but not a good way if your network contains sensitive data. Worse, this user may have all the rights to your network so he can do dangerous things.</p>
        
        <p>When your company grows bigger and bigger, there is a moment that you need to consider implementing security to your network. There are many ways to secure a network but AAA offers a complete solution. In this tutorial let&rsquo;s find out about this security feature.</p>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">AAA Overview</h2>
        
        <p>Before diving into AAA, let&rsquo;s take an example of a user who wants to connect to our network.</p>
        
        <div className="flex justify-center my-6">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/AAA/AAA_initial_without_AAA.jpg" 
            alt="Network without AAA" 
            width="335" 
            height="227"
          />
        </div>
        
        <p><span id="more-4228"></span></p>
        
        <p>This process uses a login and password on the access line. Although it is very easy to implement, but there are many disadvantages of using this method:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Insecure login method</li>
          <li>Vulnerable to brute-force attacks</li>
          <li>No accountability</li>
          <li>Must be configured on each device manually</li>
          <li>Store usernames &amp; passwords locally on each device</li>
          <li>Cannot limit which specific commands are not used</li>
        </ul>
        
        <p>With AAA, now the process of a user connecting to our network is shown below:</p>
        
        <div className="flex justify-center my-6">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/AAA/AAA_initial_with_AAA.jpg" 
            alt="Network with AAA" 
            width="430" 
            height="355"
          />
        </div>
        
        <p>Every action the users do must be submitted to the AAA server to determine if they are allowed or not. This process has many advantages:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Secure login (AAA server is not exposed to users and only some protocols are allowed to be sent initially)</li>
          <li>Easy management at one or some centralized servers</li>
          <li>Firewalls or other security devices can be placed before AAA servers to protect them</li>
          <li>Can accept or reject specific commands</li>
          <li>Every command typed by users can be logged for later analysis</li>
        </ul>
        
        <p>Disadvantages:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Require powerful server (to handle all the traffic and requests)</li>
        </ul>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">AAA Components</h2>
        
        <p>AAA stands for Authentication, Authorization and Accounting.</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Authentication:</strong> Specify who you are (usually via login username &amp; password)</li>
          <li><strong>Authorization:</strong> Specify what actions you can do, what resource you can access</li>
          <li><strong>Accounting:</strong> Monitor what you do, how long you do it (can be used for billing and auditing)</li>
        </ul>
        
        <p>An example of AAA is shown below:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Authentication:</strong> &ldquo;I am a normal user. My username/password is <strong>user_tom/learnforever</strong>&rdquo;</li>
          <li><strong>Authorization:</strong> &ldquo;<strong>user_tom</strong> can access <strong>LearnCCNA</strong> server via <strong>HTTP</strong> and <strong>FTP</strong>&rdquo;</li>
          <li><strong>Accounting:</strong> &ldquo;<strong>user_tom</strong> accessed <strong>LearnCCNA</strong> server for <strong>2 hours</strong>&rdquo;. This user only uses &ldquo;show&rdquo; commands.</li>
        </ul>
        
        <p>With AAA, users must authenticate before getting an IP address to access the network. Otherwise, they can only use specific protocols to continue authenticating</p>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">AAA Protocols</h2>
        
        <p>For authentication we can do via local database, 802.1x standard (which was developed to provide a method to authenticate devices attempting to access a switchport/LAN) or via remote AAA servers. There are two popular client/server AAA protocols to communicate between remote AAA servers and authenticating devices:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>RADIUS</strong> (Remote Authentication Dial In User Service)</li>
          <li><strong>TACACS+</strong> (Terminal Access Controller Access-Control System)</li>
        </ul>
        
        <p>The comparison of two protocols is listed below:</p>
        
        <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RADIUS</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TACACS+</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 font-medium text-gray-900">Transportation & Ports</td>
                <td className="px-4 py-4">
                  <strong>UDP</strong> port 1812/1645 (Authentication)<br />
                  1813/1646 (Accounting)
                </td>
                <td className="px-4 py-4"><strong>TCP</strong> port 49</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-medium text-gray-900">Encryption</td>
                <td className="px-4 py-4">only passwords</td>
                <td className="px-4 py-4">entire payload of each packet (leaving only the TACACS+ header in cleartext)</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-medium text-gray-900">Standards</td>
                <td className="px-4 py-4">Open standard</td>
                <td className="px-4 py-4">Cisco proprietary (but actually now it is an open standard defined by <a href="https://tools.ietf.org/html/rfc1492" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RFC1492</a>)</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-medium text-gray-900">Operation</td>
                <td className="px-4 py-4"><strong>Authentication and authorization are combined</strong> in one function (packet)</td>
                <td className="px-4 py-4"><strong>authentication, authorization and accounting are separated</strong></td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-medium text-gray-900">Logging</td>
                <td className="px-4 py-4">No command logging</td>
                <td className="px-4 py-4">Full command logging (commands typed by users can be recorded on the servers)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
          <p className="font-medium text-blue-800">Note:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>RADIUS is very old protocol (created around the early 1990s) and it was originally designed for dial-in modem connections. In these old days, security is not a strong concern so RADIUS encrypts only the authentication information (passwords) along the traffic path.</li>
            <li>TACACS+ is a newer version of TACAS and XTACAS. It is the answer of Cisco to RADIUS.</li>
            <li>Both RADIUS and TACACS+ support Extensible Authentication Protocol (EAP), which is an authentication framework frequently used in wireless networks and point-to-point connections</li>
            <li>Both TACACS+ and RADIUS can run on either Windows or Unix/Linux servers</li>
            <li>TACACS+ separates the authentication, authorization, and accounting steps. This architecture allows for separate authentication solutions while still using TACACS+ for authorization and accounting.</li>
            <li>Authentication and authorization are not separated in a RADIUS transaction. When the authentication request is sent to a AAA server, the AAA client expects to have the authorization result sent back in reply.</li>
            <li>TACACS+ supports access-level authorization for commands. That means you can assign privilege levels when a user logins successfully.</li>
          </ul>
        </div>
        
        <p>In the next part we will learn how to configure AAA.</p>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default RadiusTutorial;