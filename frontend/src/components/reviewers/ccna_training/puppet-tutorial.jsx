import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const PuppetTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-6">Puppet Tutorial</h1>
      </div>
      

      {/* Content */}
      <div  data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="space-y-6">
        <p>Besides Ansible and Chef, Puppet is another automation tool in CCNA certification so in this tutorial we will learn about it.</p>
        
        <p>Puppet is built on server-client architecture which comprises a master (centralized server) and some/many nodes (clients). In each node, a Puppet Agent is installed to communicate with the Puppet Master. Puppet Master is the place where all Puppet codes are written and stored. These codes dictate the instructions for performing various tasks for the client. If the Clients need something, they simply request them.</p>
        
        <p>Puppet is based on a Pull deployment model, where the nodes check in regularly after every 1800 seconds with the Master to see if anything needs to be updated in the agent. If anything needs to be updated the agent pulls the necessary Puppet codes from the Master and performs required actions.</p>
        
        <div className="flex justify-center my-6">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Pull_Model.jpg" 
            alt="Puppet pull model diagram" 
            width="422" 
            height="226"
          />
        </div>

        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">Puppet Master Components</h2>
        
        <p><strong>Manifests</strong></p>
        
        <p>Manifest is the most important component in a Puppet Master so we will mention about it first. Manifest is just the file where the all Puppet scripts for configuring Puppet clients are written (in Ruby code). Manifest filenames use &ldquo;.pp&rdquo; (means Puppet policy) extension.</p>
        
        <p>Based on the Facts received from Factor, Master compiles manifests into catalogs (which will be discussed later), then sends them to the client.</p>
        
        <p><strong>Module</strong></p>
        
        <p>Module also plays an important part in a Puppet Master. Module is a collection of manifests and other related data files organized in a predefined way to facilitate sharing and reusing. Modules tie manifests, templates, and files into a single unit.</p>
        
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Module = Manifests + Data (Templates, Files)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>Modules have a specific directory path which is usually &ldquo;/etc/puppet/manifests/&rdquo;. They are useful for organizing our Puppet code, because they allow to split code into multiple manifests. It is considered best practice to use modules to organize all of our Puppet manifests.</p>
        
        <div className="flex justify-center my-6">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Puppet_Master.jpg" 
            alt="Puppet Master components" 
            width="134" 
            height="160"
          />
        </div>
        
        <p><strong>Templates</strong></p>
        
        <p>Templates are typically used to set up configuration files, allowing for the use of variables and other features intended to make these files more versatile and reusable.</p>
        
        <p><strong>Catalogs</strong></p>
        
        <p>The entire configuration and manifest files that are written in Puppet are changed into a compiled format. This compiled format is known as a catalog, which can be applied to the target node. All the desired states of client resources are described in the catalog.</p>
        
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Catalog = Facts + Manifests</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>Other components of Puppet Master are: Resource (a basic unit of system configuration modeling), Class (like class in programming languages, to organize the code in a better way. Puppet class is a collection of various resources that are grouped into a single unit)</p>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">Puppet Client Components</h2>
        
        <p><strong>Agent</strong></p>
        
        <p>Agent is the program installed on each client to apply the configuration catalogs that it pulls from the Puppet Master to the client.</p>
        
        <p><strong>Factor (or Facter)<br /></strong></p>
        
        <p>The factor collects <em>facts</em>, which are important information about the node and sends them to the Puppet Master. Facts are the key-value data pair which represents puppet client states such as IP address, operating system, network interface, uptime and whether the client machine is virtual or not&hellip;</p>
        
        <p>Based on the facts received, Puppet Master compiles manifests into catalogs, then sends them to the client. On the client side, Agents execute any required changes and send reports back to the Master. If a system fails, the Master has a record of all system changes for a rollback to a previous working state.</p>
        
        <p>All of the above components of Puppet Master and Client can be summarized in the figure below:</p>
        
        <div className="flex justify-center my-6">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Puppet_operation.jpg" 
            alt="Puppet operation diagram" 
            width="485" 
            height="167"
          />
        </div>
        
        <p>&nbsp;</p>
        
        <ol className="list-decimal pl-6 space-y-3">
          <li>Puppet Agent sends data about its state to the Puppet Master (includes the hostname, kernel details, IP address, file name details&hellip;)</li>
          <li>Puppet Master does analysis on the data, and if any change is needed (such as package installation, upgrades or removals, file system creation, user creation or deletion, server reboot, IP configuration changes&hellip;), it sends the required changes to the client via Catalog. For example, after analysis, Master decides to send a new software version to the Agent and asks it to install.</li>
          <li>The Agent installs the required update for the Node and reply back to the Master that it has upgraded the software successfully.</li>
        </ol>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">Puppet code</h2>
        
        <p>An example of the manifest <em>vlan.pp</em> which is for creating and enabling VLAN 10 with its name configured to &lsquo;9tut&rsquo;:</p>
        
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          class cnos::vlan {' '}
          {'  '}cnos_vlan {'{'}'10'{'}'}:{'\n'}
          {'    '}ensure      =&gt; 'present',{'\n'}
          {'    '}vlan_id     =&gt; 10,{'\n'}
          {'    '}admin_state =&gt; 'up',{'\n'}
          {'    '}vlan_name   =&gt; '9tut',{'\n'}
          {'  '}{'}'}
          {'}'}
        </pre>
        
        <p>In order to apply this manifest on the Puppet Master, we can use &ldquo;puppet apply &rdquo; command:</p>
        
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          $ <strong>puppet apply vlan.pp</strong>
          Notice: Compiled catalog for puppetmaster.9tut in environment production in 0.03 seconds
          Notice: Finished catalog run in 0.03 seconds
        </pre>
        
        <p>In summary, please remember the following important facts about Puppet:<br />
        + Use &ldquo;pull&rdquo; model<br />
        + Use TCP port 8140 to reach Puppet Master<br />
        + Use Ruby for device configuration<br />
        + Files needed for operation: Manifest, Templates&hellip;<br />
        + Puppet Master only works on Linux/Unix and Puppet Agents also works on Windows.</p>
        
        <p>We also made a comparison list of Ansible, Puppet and Chef automation tool here:</p>
        
        <div className="flex justify-center my-6">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Ansible_Puppet_Chef_compare.jpg" 
            alt="Ansible vs Puppet vs Chef comparison" 
            width="630" 
            height="305"
          />
        </div>
      </div>

       {/* Accordion */}
       <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default PuppetTutorial;