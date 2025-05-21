import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const SyslogTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-[#0D2153]">Syslog Tutorial</h1>
      </div>

      {/* Content */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-6">
        <p className="mb-6">
          As an administrator of a network, you have just completed all the configuration and they are working nicely. Now maybe the next thing you want to do is to set up something that can alert you when something goes wrong or down in your network. Syslog is an excellent tool for system monitoring and is almost always included in your distribution.
        </p>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Places to store and display syslog messages</h2>
        <p className="mb-4">There are some places we can send syslog messages to:</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200">Place to store syslog messages</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200">Command to use</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Internal buffer (inside a switch or router)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">logging buffered [size]</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Syslog server</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">logging</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Flash memory</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">logging file flash:filename</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Nonconsole terminal (VTY connection…)</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">terminal monitor</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Console line</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">logging console</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p><strong>Note:</strong> If sent to a syslog server, messages are sent on UDP port 514.</p>
        </div>

        <p className="mb-6">
          By default, Cisco routers and switches send log messages to the console. We should use a syslog server to contain our logging messages with the <span className="font-mono text-pink-600">logging</span> command. Syslog server is the most popular place to store logging messages and administrators can easily monitor the wealth of their networks based on the received information.
        </p>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Syslog syntax</h2>
        <p className="mb-4">A syslog message has the following format:</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">seq no:timestamp%FACILTY-SEVERITY-MNEMONIC: message text</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4">Each portion of a syslog message has a specific meaning:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Seq no</strong>: a sequence number only if the <span className="font-mono text-pink-600">service sequence-numbers</span> global configuration command is configured</li>
          <li><strong>Timestamp</strong>: Date and time of the message or event. This information appears only if the <span className="font-mono text-pink-600">service timestamps</span> global configuration command is configured.</li>
          <li><strong>FACILITY</strong>: This tells the protocol, module, or process that generated the message. Some examples are SYS for the operating system, IF for an interface…</li>
          <li><strong>SEVERITY</strong>: A number from 0 to 7 designating the importance of the action reported.</li>
        </ul>

        <p className="mb-4">The Syslog levels are:</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200">Keyword</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">emergencies</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">System is unusable</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">alerts</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Immediate action is needed</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">2</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">critical</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Critical conditions exist</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">3</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">errors</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Error conditions exist</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">4</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">warnings</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Warning conditions exist</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">5</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">notification</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Normal, but significant, conditions exist</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">6</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">informational</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Informational messages</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">7</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">debugging</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Debugging messages</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="font-semibold">Note:</p>
          <p>You can remember the order above with the sentence: "<strong>E</strong>ventually <strong>A</strong>ll <strong>Critical Errors W</strong>ill <strong>N</strong>ot <strong>I</strong>nvolve <strong>D</strong>amage".</p>
        </div>

        <p className="mb-6">
          The highest level is level 0 (emergencies). The lowest level is level 7. To change the minimum severity level that is sent to syslog, use the <span className="font-mono text-pink-600">logging trap <em>level</em></span> configuration command. If you specify a level, that level and all the higher levels will be displayed. For example, by using the <span className="font-mono text-pink-600">logging console warnings</span> command, all the logging of emergencies, alerts, critical, errors, warnings will be displayed. Levels 0 through 4 are for events that could seriously impact the device, whereas levels 5 through 7 are for less-important events. By default, syslog servers receive informational messages (level 6).
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>MNEMONIC</strong>: A code that identifies the action reported.</li>
          <li><strong>message text</strong>: A plain-text description of the event that triggered the syslog message.</li>
        </ul>

        <p className="mb-4">Let's see an example of the syslog message:</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">39345: May 22 13:56:35.811: %LINEPROTO-5-UPDOWN: Line protocol on Interface Serial0/0/1, changed state to down</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>seq no</strong>: 39345</li>
          <li><strong>Timestamp</strong>: May 22 13:56:35.811</li>
          <li><strong>FACILTY</strong>: LINEPROTO</li>
          <li><strong>SEVERITY level</strong>: 5 (notification)</li>
          <li><strong>MNEMONIC</strong>: UPDOWN</li>
          <li><strong>message text</strong>: Line protocol on Interface Serial0/0/1, changed state to down</li>
        </ul>

        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p><strong>Note:</strong> Facility levels and syslog levels are different. The facility represents the machine process that created the syslog event. Therefore the Facility value is a way of determining which process of the machine created the message. For example, is the event created by the kernel, by the mail system, by security/authorization processes, etc.</p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200">Facility</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-200">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Auth</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Authorization system</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Cron</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Cron/at facility</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Daemon</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">System daemons</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Kern</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Kernel</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">local0 to local7</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Local use</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Lpr</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Line printer system</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Mail</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Mail system</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">News</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">USENET news</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">sys9 to sys14</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">System use</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Syslog</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Syslog itself</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">User</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">User process</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Uucp</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">Unix-to-Unix copy system</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">The default syslog facility setting is local7.</p>

        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Syslog Configuration</h2>
        <p className="mb-4">The following example tells the device to store syslog messages to a server on 10.10.10.150 and limit the messages for levels 4 and higher (0 through 4):</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border border-gray-200">
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50">Router(config)#logging 10.10.10.150<br />
                Router(config)#logging trap 4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">Of course on the server 10.10.10.150 we have to use a syslog software to capture the syslog messages sent to this server.</p>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default SyslogTutorial;