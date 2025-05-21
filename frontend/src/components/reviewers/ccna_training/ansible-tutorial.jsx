import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const AnsibleTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Ansible Tutorial</h1>
      </div>

      {/* Content */}
      <div 
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="space-y-6"
      >
        <p>There are several automation tools available to make configuration management easier: Ansible, Chef, Puppet&hellip; The goal of these tools is to reduce the complexity and time to configure and maintain networks (especially big ones with hundreds of devices). In this tutorial we will learn some basic knowledge of Ansible in the scope of CCNA level.</p>
        
        <p>Ansible uses an agentless architecture to manage network devices. Agentless means that the managed device does not need any code (agent) to be installed on it. Therefore Ansible uses SSH (NETCONF over SSH in particular) to &ldquo;push&rdquo; changes and extract information to managed devices.</p>
        
        <p>Once Ansible is installed, it creates several text files:</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Playbooks</strong>: These files provide actions and logic about what Ansible should do. Ansible playbooks are files that contain tasks to configure hosts. Ansible playbooks are written in YAML format. Inside Playbooks, we have:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Modules</strong> (also referred to as &ldquo;task plugins&rdquo; or &ldquo;library plugins&rdquo;) are discrete units of code that can be used from the command line or in a playbook task. Ansible executes each module, usually on the remote managed node, and collects return values.</li>
              <li><strong>Tasks</strong>: Tasks are Ansible&rsquo;s smallest unit of work. They are a series of actions on the target hosts, using modules to provide functionalities.</li>
            </ul>
            <p className="mt-2">A task defines an action that needs to be performed, while a module executes the action on a managed host.</p>
          </li>
          <li><strong>Inventory</strong>: a file contains a list of the hosts (usually their IP addresses, ports) which you want to configure or manage. Hosts in an inventory can be divided into smaller groups for easier management and configuration. Each group can run different tasks. An example of a task is to ping all hosts in group [routers].</li>
          <li><strong>Templates</strong>: Using Jinja2 language, the templates represent a device&rsquo;s configuration but with variables.</li>
          <li><strong>Variables</strong>: Using YAML, a file can list variables that Ansible will substitute into templates.</li>
        </ul>
        
        <div className="flex justify-center my-6">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Ansible_workflow.jpg" 
            alt="Ansible workflow diagram" 
            width="586" 
            height="298"
          />
        </div>
        
        <p><span id="more-5403"></span></p>
        
        <p>Templates and variables are optional so they are not discussed here to keep this tutorial simple. An inventory and playbook are enough to run our first Ansible program! (in fact, only a playbook is enough to run). For example if we have an inventory named &ldquo;hosts&rdquo; (without file extension) and a playbook named &ldquo;int_lo0.yml&rdquo; (to configure loopback 0 interface for each host) in &ldquo;playbooks&rdquo; directory then we can run them via this command:</p>
        
        <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">$ ansible-playbook -i hosts playbooks/int_lo0.yml</pre>
        </div>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">Example Inventory and Playbook</h2>
        
        <p>Another example of the &ldquo;hosts&rdquo; inventory and &ldquo;command_ios.yml&rdquo; playbook is shown below:</p>
        
        <div className="overflow-x-auto my-6 border border-gray-200 rounded-lg shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 font-medium text-gray-900 border-r border-gray-200">"hosts" Inventory</td>
                <td className="px-4 py-4">"command_ios.yml" Playbook</td>
              </tr>
              <tr>
                <td className="px-4 py-4 border-r border-gray-200">
                  <pre className="text-sm whitespace-pre-wrap">
                    [ios_devices]{'\n'}
                    R1 ansible_host=192.168.1.10{'\n'}
                    R2 ansible_host=192.168.1.11{'\n\n'}
                    [ios_devices:vars]{'\n'}
                    username=9tut{'\n'}
                    password=mySecretPassword!
                  </pre>
                </td>
                <td className="px-4 py-4">
                  <pre className="text-sm whitespace-pre-wrap">
                    ---{'\n'}
                    - name: IOS Show Commands{'\n'}
                    {'  '}hosts: "ios_devices"{'\n'}
                    {'  '}gather_facts: false{'\n'}
                    {'  '}connection: local{'\n\n'}
                    {'  '}vars:{'\n'}
                    {'    '}cli:{'\n'}
                    {'      '}host: {'"{{ ansible_host }}"'}{'\n'}
                    {'      '}username: {'"{{ username }}"'}{'\n'}
                    {'      '}password: {'"{{ password }}"'}{'\n'}
                    {'      '}transport: cli{'\n\n'}
                    {'  '}tasks:{'\n'}
                    {'    '}- name: ios show commands{'\n'}
                    {'      '}ios_command:{'\n'}
                    {'        '}commands:{'\n'}
                    {'          '}- show version | i IOS{'\n'}
                    {'          '}- show run | i hostname{'\n'}
                    {'        '}provider: {'"{{ cli }}"'}{'\n\n'}
                    {'      '}register: output{'\n\n'}
                    {'    '}- name: show output of IOS{'\n'}
                    {'      '}debug:{'\n'}
                    {'        '}var: output
                  </pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>The above playbook would display &ldquo;show version&rdquo; and &ldquo;show run&rdquo; output when we run it with command:</p>
        
        <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">$ ansible-playbook -i hosts command_ios.yml</pre>
        </div>
        
        <p>And the result is shown below:</p>
        
        <div className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <pre className="text-sm">
            PLAY [IOS Show Commands] *******{'\n'}
            TASK [ios show commands] ******************************************************{'\n'}
            ok: [ios-r1] {'\n'}
            ok: [ios-r2]{'\n\n'}
            TASK [show output of IOS]{'\n'}
            *************************** {'\n'}
            ok: [ios-r1] =&gt; {'{'}
            {'    '}"output": {'{'}
            {'        '}"changed": false,{'\n'}
            {'        '}"stdout": [{'\n'}
            {'             '}"Cisco IOS Software, IOSv Software (VIOS-ADVENTERPRISEK9-M), Version 15.6(3)M2, RELEASE SOFTWARE (fc2){'\n'}
            ROM: Bootstrap program is IOSv\nCisco IOSv (revision 1.0) with with 460033K/62464K bytes o&pound; memory.",{'\n'}
            {'               '}"hostname iosv-1"{'\n'}
            {'        '}],{'\n'}
            {'        '}"stdoutlines": [{'\n'}
            {'               '}[{'\n'}
            {'                    '}"Cisco IOS Software, IOSv Software (VIOS-ADVENTERPRISEK9-M), Version 15.6(3)M2, RELEASE SOPTWARE (fc2)",{'\n'}
            {'                    '}"ROM: Bootstrap program is IOSv", "Cisco IOSv (revision 1.0) with 460033K/62464K bytes of memory."{'\n'}
            {'               '}],{'\n'}
            {'               '}[{'\n'}
            {'                    '}"hostname iosv-1"{'\n'}
            {'               '}]{'\n'}
            {'        '}],{'\n'}
            {'        '}"warnings": []{'\n'}
            {'    '}{'}'}{'\n'}
            {'}'}{'\n'}
            ok: [ios-r2] =&gt; {'{'}
            {'    '}"output": {'{'}
            {'         '}"changed": false,{'\n'}
            {'         '}"stdout": [{'\n'}
            {'             '}"Cisco IOS Software, IOSv Software (VIOS-ADVENTERPRISEK9-M), Version 15.6(3)M2, RELEASE SOFTWARE (fc2){'\n'}
            ROM: Bootstrap program is IOSv\nCisco IOSv (revision 1.0) with 460033K/62464K bytes of memory.",{'\n'}
            {'             '}"hostname iosv-2"{'\n'}
            {'         '}],{'\n'}
            {'         '}"stdout_lines": [{'\n'}
            {'             '}[{'\n'}
            {'                  '}"Cisco IOS Software, IOSv Software (VIOS-ADVENTERPRISEK9-M), Version 15.6(3)M2, RELEASE SOFTWARE (fc2)",{'\n'}
            "ROM: Bootstrap program is IOSv&rdquo;, "Cisco IOSv (revision 1.0) with with 460033K/62464K bytes of memory."{'\n'}
            {'             '}],{'\n'}
            {'             '}[{'\n'}
            {'                  '}"hostname iosv-2"{'\n'}
            {'             '}]{'\n'}
            {'         '}],{'\n'}
            {'         '}"warnings": []{'\n'}
            {'     '}{'}'}{'\n'}
            {'}'}{'\n\n'}
            PLAY RECAP ********************************************************************{'\n'}
            ios-r1 : ok=2 changed=0 unreachable=0 failed=0 {'\n'}
            ios-r2 : ok=2 changed=0 unreachable=0 failed=0
          </pre>
        </div>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">Key Facts About Ansible</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Use &ldquo;push&rdquo; model (push configuration from a centralized server to end devices)</li>
          <li>Use SSH (TCP port 22) for remote communication</li>
          <li>Use YAML for device configuration</li>
          <li>Files needed for operation: Playbook, Inventory&hellip;</li>
          <li>Ansible requires a Linux-based system to run. Though it can run under the Windows Subsystem for Linux but it should not be used for production systems</li>
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

export default AnsibleTutorial;