import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const ConfigSsh = () => {
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
        <h1 className="text-3xl font-bold mb-4">Configure SSH for Remote Access on Cisco Router</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-6">
        <p className="mb-6">
          Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. SSH provides a secure alternative to Telnet for remote access to Cisco devices.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/SSH_Configuration/SSH_topology.jpg" 
            alt="SSH Remote Access Diagram" 
            width="500"
          />
        </div>
      </div>

      {/* Prerequisites */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Prerequisites</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Router must have an IOS image that supports cryptographic (encrypted) features</li>
          <li>Router must have a hostname configured</li>
          <li>Router must have a domain name configured</li>
          <li>Router must have a username and password configured</li>
        </ul>
      </div>

      {/* Configuration Steps */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">SSH Configuration Steps</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Configure Hostname and Domain Name</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>
                Router(config)# hostname R1<br />
                R1(config)# ip domain-name example.com
              </code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Generate RSA Keys</h3>
            <p className="mb-2">SSH requires RSA keys for encryption:</p>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>
                R1(config)# crypto key generate rsa<br />
                The name for the keys will be: R1.example.com<br />
                Choose the size of the key modulus in the range of 360 to 4096:<br />
                <strong>1024</strong> (or higher for better security)<br />
                % Generating 1024 bit RSA keys ...[OK]
              </code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Create Local User Credentials</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>
                R1(config)# username admin secret StrongPassword123<br />
                R1(config)# line vty 0 4<br />
                R1(config-line)# transport input ssh<br />
                R1(config-line)# login local
              </code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">4. Configure SSH Version and Timeout</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>
                R1(config)# ip ssh version 2<br />
                R1(config)# ip ssh time-out 60<br />
                R1(config)# ip ssh authentication-retries 3
              </code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">5. Enable SSH on VTY Lines</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>
                R1(config)# line vty 0 15<br />
                R1(config-line)# transport input ssh<br />
                R1(config-line)# exit
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Verification */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Verification Commands</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Show SSH Status</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>
                R1# show ip ssh<br />
                SSH Enabled - version 2.0<br />
                Authentication timeout: 60 secs; Authentication retries: 3
              </code>
            </pre>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Show Active SSH Sessions</h3>
            <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>
                R1# show ssh<br />
                Connection Version Mode Encryption  Hmac State            Username<br />
                0        2.0     IN   aes256-cbc  hmac-sha1  Session started       admin<br />
                0        2.0     OUT  aes256-cbc  hmac-sha1  Session started       admin
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Troubleshooting Tips</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
            <h3 className="font-semibold text-red-700 mb-2">SSH Connection Fails</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verify RSA keys exist: <code className="bg-gray-100 px-1 rounded">show crypto key mypubkey rsa</code></li>
              <li>Check SSH is enabled: <code className="bg-gray-100 px-1 rounded">show ip ssh</code></li>
              <li>Verify VTY lines configured for SSH: <code className="bg-gray-100 px-1 rounded">show running-config | section line vty</code></li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
            <h3 className="font-semibold text-yellow-700 mb-2">Slow SSH Connections</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Check DNS configuration: <code className="bg-gray-100 px-1 rounded">no ip domain-lookup</code> to disable DNS queries</li>
              <li>Increase SSH timeout: <code className="bg-gray-100 px-1 rounded">ip ssh time-out 120</code></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">SSH Security Best Practices</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Always use SSH version 2 (more secure than version 1)</li>
          <li>Use strong passwords or implement certificate-based authentication</li>
          <li>Restrict SSH access to specific networks using access lists</li>
          <li>Change default RSA key modulus to 2048 bits or higher</li>
          <li>Disable Telnet after SSH is configured and verified</li>
          <li>Regularly rotate SSH keys and passwords</li>
        </ul>
        
        <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-r">
          <h3 className="font-semibold text-green-700 mb-2">Example: Restricting SSH Access</h3>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>
              R1(config)# access-list 10 permit 192.168.1.0 0.0.0.255<br />
              R1(config)# line vty 0 15<br />
              R1(config-line)# access-class 10 in
            </code>
          </pre>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default ConfigSsh;