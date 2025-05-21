import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const ChefTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Chef Tutorial</h1>
      </div>

      {/* Content */}
      <div 
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="space-y-6"
      >
        <p>Chef is an automation platform that configures and manages your network infrastructure. Chef transforms infrastructure into code. &ldquo;Infrastructure into code&rdquo; here means &ldquo;deploy your code/application/configuration and policy&rdquo; on many machines or instances automatically via your code.</p>
        
        <p>As shown in the diagram below, there are three major Chef components:</p>
        
        <div className="flex justify-center my-6">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Chef_workflow.jpg" 
            alt="Chef workflow diagram" 
            width="862" 
            height="374"
          />
        </div>

        <p><span id="more-5415"></span></p>
        
        <p>+ <strong>Workstations</strong>: simply personal computers where all development configuration code is created, tested, and changed before uploading to the Chef Server. Each Chef workstation also has a command line tool called &ldquo;Knife&rdquo;, which will be used to upload configuration changes to the Chef Server.</p>
        
        <p>Workstations are the place to write Recipes and Cookbooks:</p>
        
        <p>++ Recipes: A Recipe is a collection of resources that describes a particular configuration or policy. It describes everything that is required to configure part of a system and in which order it is to be used. The user writes Recipes that describe how Chef manages applications and utilities (such as Apache HTTP Server, MySQL, or Hadoop) and how they are to be configured.</p>
        
        <p>++ Cookbooks: Multiple Recipes can be grouped together to form a Cookbook. A Cookbook defines a scenario and contains everything that is required to support that scenario. A Cookbook also includes attributes, libraries, metadata, and other files that are necessary for supporting each configuration. Cookbooks are created using Ruby language and Domain Specific languages are used for specific resources.</p>
        
        <p>+ <strong>Chef Server</strong>: The centralized store of our infrastructure&rsquo;s configuration. The Chef server stores, manages and provides configuration to all nodes that make up the infrastructure.</p>
        
        <p>+ <strong>Nodes</strong>: are the servers where your code needs to run. Chef server manages Nodes by <strong>Chef client</strong>, which is a software installed on each Node. Chef client retrieving configuration information from the Chef Server. Nodes can be a cloud-based/virtual/physical server in your own data center.</p>
        
        <p>Any changes made to your infrastructure code must pass through the Chef server in order to be applied to nodes. Prior to accepting or pushing changes, the Chef server authenticates all communication via its REST API using public key encryption.</p>
        
        <p>Chef client periodically pulls Chef server to see if there are any changes in cookbooks or settings. If there are changes then Chef server sends the latest configuration information to Chef client. Chef client applies these changes to nodes.</p>
        
        <div className="flex justify-center my-6">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Chef_operation.jpg" 
            alt="Chef operation diagram" 
            width="669" 
            height="126"
          />
        </div>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">Sample Cookbook</h2>
        
        <p>Showing configuration of switch interface as Layer 3:</p>
        
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          cisco_interface 'Ethernet1/1' do{'\n'}
          {'  '}action :create{'\n'}
          {'  '}ipv4_address '1.1.1.1'{'\n'}
          {'  '}ipv4_netmask_length 24{'\n'}
          {'  '}ipv4_proxy_arp true{'\n'}
          {'  '}ipv4_redirects true{'\n'}
          {'  '}shutdown true{'\n'}
          {'  '}switchport_mode 'disabled'{'\n'}
          end
        </pre>
        
        <p>Or configure interface as Layer 2:</p>
        
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          cisco_interface 'Ethernet1/2' do{'\n'}
          {'  '}action :create{'\n'}
          {'  '}access_vlan 20{'\n'}
          {'  '}shutdown false{'\n'}
          {'  '}switchport_mode 'access'{'\n'}
          {'  '}switchport_vtp true{'\n'}
          end
        </pre>
        
        <p>In summary, please remember the following important facts about Chef:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Use &ldquo;pull&rdquo; model (nodes are dynamically updated with the configurations that are present in the server)</li>
          <li>Use TCP port 10002 (default command port) for configuration push jobs</li>
          <li>Use Ruby for device configuration</li>
          <li>Files needed for operation: Recipe, Cookbook&hellip;</li>
          <li>Chef server works only in Linux/Unix but Chef client and Workstation can work in Windows as well.</li>
        </ul>
        
        <p>We also made a comparison list of Ansible, Puppet and Chef automation tool here:</p>
        
        <div className="flex justify-center my-6">
          <img 
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

export default ChefTutorial;