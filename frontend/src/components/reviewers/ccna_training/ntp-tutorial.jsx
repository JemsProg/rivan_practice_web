import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const NtpTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">Network Time Protocol (NTP) Tutorial</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-6">
        <p className="mb-4">
          The Network Time Protocol (NTP) is a crucial service not only for Cisco devices but for most network devices. Any device needs to be accurately synchronized with a reliable time source such as an NTP server.
        </p>
        <p className="mb-6">
          For networking devices, precise timekeeping is very important because many services depend on it. A common and frequently used example is logging and SNMP.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/NTP/NTP.jpg" 
            alt="NTP Architecture" 
            width="300"
          />
        </div>
      </div>

      {/* How NTP Works */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">How NTP Works</h2>
        <p className="mb-4">
          NTP uses Client/Server model:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>NTP Client</strong>: periodically contacts an NTP server to request time information</li>
          <li><strong>NTP Server</strong>: responds with its current time, and the client uses this information to adjust its clock.</li>
        </ul>
        
        <p className="mb-6">
          An NTP server usually queries its time from an authoritative time source, usually a reference clock (for example: radio clock, atomic clock...) and then distributes this time across the network.
        </p>
        
        <p className="mb-4">
          NTP uses the concept of a stratum to describe how many NTP hops away a device is from an authoritative time source. A reference clock is a <strong>stratum 0</strong> device that is assumed to be accurate and has little or no delay associated with it. Stratum 0 servers cannot be used on the network but they are directly connected to computers which then operate as <strong>stratum 1</strong> servers. A stratum 1 time server acts as a primary network time standard.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/NTP/NTP_stratum.jpg" 
            alt="NTP Stratum Levels" 
            width="600"
          />
        </div>
        
        <p className="mb-6">
          A <strong>stratum 2</strong> server is connected to the stratum 1 server; then a <strong>stratum 3</strong> server is connected to the stratum 2 server and so on. A stratum 2 server gets its time via NTP packet requests from a stratum 1 server. A stratum 3 server gets its time via NTP packet requests from a stratum-2 server... A stratum server may also peer with other stratum servers at the same level to provide more stable and robust time for all devices in the peer group (for example a stratum 2 server can peer with other stratum 2 servers).
        </p>
        
        <p className="mb-6">
          NTP uses the Multicast address 224.0.1.1 and UDP port 123 as both the source and destination.
        </p>
      </div>

      {/* Configuration */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Configuration</h2>
        
        <p className="mb-4">
          To configure a Cisco device as an Authoritative NTP Server, which uses its own clock to offer time to others, use the <code className="bg-gray-100 px-2 py-1 rounded">ntp master</code> [<em>stratum</em>] command. An Authoritative NTP Server can distribute time even when it is not synchronized to an existing time server.
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>Device(config)#ntp master</code>
        </pre>
        
        <p className="mb-4">
          To configure the local device as a NTP client and use a remote NTP clock source, use the command <code className="bg-gray-100 px-2 py-1 rounded">ntp server</code> {<em>IP address</em>}. For example:
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>Device(config)#ntp server 192.168.1.1 //get time from a NTP server at 192.168.1.1</code>
        </pre>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="font-semibold">Note:</p>
          <p>The "ntp server" command configures the local device as an NTP client, not an NTP server.</p>
        </div>
        
        <p className="mb-6">
          Two above commands ("ntp master" and "ntp server") can be used simultaneously for redundancy. In this case the device will act as an NTP client (with the "ntp server" command) and fall back to its own clock (with the "ntp master" command) if the connection fails. Therefore it always offers time no matter which source it uses.
        </p>
        {'{{'}host{'}'}
        <p className="mb-4">
          Finally, if we want our device act as both NTP server and NTP client, we can use the <code className="bg-gray-100 px-2 py-1 rounded">ntp peer</code> {'{{'}address| hostname{'}'} command. This mode is called "symmetric active mode". For example:
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>Device(config)#ntp peer 192.168.10.1</code>
        </pre>
        
        <p className="mb-4">
          Let's take an example to understand about this command. Suppose:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>R1 is an NTP client and get time from NTP Server 1</li>
          <li>R2 is an NTP client and get time from NTP Server 2</li>
        </ul>
        
        <div className="flex justify-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/NTP/NTP_peer.jpg" 
            alt="NTP Peer Configuration" 
            width="400"
          />
        </div>
        
        <p className="mb-6">
          R1 and R2 can communicate to each other so R1 & R2 may want to receive time from each other as backup when their primary NTP server fails. In this case, the best solution is to configure R1 & R2 the NTP peer of each other.
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>
            On R1:<br />
            R1(config)#ntp server 192.168.1.1 //use NTP Server 1 as its main NTP source<br />
            R1(config)#ntp peer 192.168.2.2 //use R2 as its NTP peer (synchronize)<br /><br />
            On R2:<br />
            R2(config)#ntp server 192.168.2.1 //use NTP Server 2 as its main NTP source<br />
            R2(config)#ntp peer 192.168.1.2 //use R1 as its NTP peer (synchronize)
          </code>
        </pre>
        
        <p className="mb-6">
          With this configuration, R1 prefers using NTP Server 1 and use R2 as its backup source. R2 prefers using NTP Server 2 and use R2 as its backup source as well. Therefore we can see an NTP peer can be both source and client of each other.
        </p>
      </div>

      {/* Verification */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Time & NTP Verification</h2>
        
        <p className="mb-4">
          Two most popular commands to display time sources statistics: <code className="bg-gray-100 px-2 py-1 rounded">show ntp status</code> and <code className="bg-gray-100 px-2 py-1 rounded">show ntp associations</code>
        </p>
        
        <p className="mb-2">
          <strong>show ntp status</strong>: display the current NTP status of the local device
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>
            R1#show ntp status<br />
            <strong>Clock is synchronized</strong>, stratum 10, reference is 10.1.2.1<br />
            nominal freq is 250.0000 Hz, actual freq is 249.9987 Hz, precision is 2**18<br />
            reference time is D5E492E9.98ACB4CF (13:00:25.596 CST Wed Jul 17 2024)<br />
            clock offset is 15.4356 msec, root delay is 52.17 msec<br />
            root dispersion is 67.61 msec, peer dispersion is 28.12 msec
          </code>
        </pre>
        
        <p className="mb-6">
          The router tells us that we are synchronized with stratum 10 and the reference clock is at 10.1.2.1.
        </p>
        
        <p className="mb-2">Another example:</p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>
            R1# show ntp status<br />
            Clock is <strong>unsynchronized</strong>, stratum 16, no reference clock<br />
            nominal freq is 250.0000 Hz, actual freq is 250.0006 Hz, precision is 2**24<br />
            reference time is 00000000.00000000 (02:00:00.000 Greece Mon Jan 1 1900)<br />
            clock offset is 0.0000 msec, root delay is 0.00 msec<br />
            root dispersion is 0.00 msec, peer dispersion is 0.00 msec<br />
            loopfilter state is 'FSET' (Drift set from file), drift is -0.000002405 s/s<br />
            system poll interval is 64, never updated.
          </code>
        </pre>
        
        <p className="mb-6">
          This output tells us our router is not synchronized so the stratum is 16 (the upper limit for stratum is 15)
        </p>
        
        <p className="mb-2">
          <strong>show ntp associations</strong>: show NTP servers to which the client is connected
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>
            CoreRouter#show ntp associations<br />
            address            ref clock      st  when  poll  reach   delay  offset    disp<br />
            *~146.185.130.223  193.79.237.14   2  26      64      1  10.857  -5.595  7937.5<br />
            * sys.peer, # selected, + candidate, - outlyer, x falseticker, ~ configured
          </code>
        </pre>
        
        <p className="mb-6">
          The output of this command shows that our device is configured (~) to synchronized with our selected NTP server 146.185.130.223, however, it is synchronized with the star (*) symbol in front of the tilde (~). The 'ref. clock' column shows the IP address of the NTP server from which our device is synchronized.
        </p>
        
        <p className="mb-6">
          The * in front of the IP address tells us that we have synchronized and the stratum (st) is 2. That means the NTP server is pretty close to a reliable time source. The "poll" field tells us we will try synchronizing the time every 64 seconds.
        </p>
        
        <p className="mb-2">Another example:</p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>
            Router# show ntp associations<br />
            address         ref clock   st   when poll reach  delay  offset  disp<br />
            ~129.6.15.28      .INIT.    16      -   64     0  0.000  0.000   16000.<br />
            ~206.246.122.250  .INIT.    16      -   64     0  0.000  0.000   16000.<br />
            * sys.peer, # selected, + candidate, - outlyer, x falseticker, ~ configured
          </code>
        </pre>
        
        <p className="mb-6">
          From the output above, we can see both of our NTP servers are in the "INIT" state. NTP is very slow compared to other protocols. It can take upwards of five minutes to synchronize with an upstream server.
        </p>
        
        <p className="mb-4">
          Finally, if we want to check the current date and time on our device, use the "show clock" command:
        </p>
        
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          <code>
            Router# show clock<br />
            *06:58:34.345 UTC Wed Jul 24 2024
          </code>
        </pre>
      </div>

      {/* NTP Authentication */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">NTP Authentication</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The <code className="bg-gray-100 px-2 py-1 rounded">ntp authenticate</code> command is used to enable the NTP authentication feature (NTP authentication is disabled by default).
          </li>
          <li>
            The <code className="bg-gray-100 px-2 py-1 rounded">ntp trusted-key</code> command specifies one or more keys that a time source must provide in its NTP packets in order for the device to synchronize to it. This command provides protection against accidentally synchronizing the device to a time source that is not trusted.
          </li>
          <li>
            The <code className="bg-gray-100 px-2 py-1 rounded">ntp authentication-key</code> defines the authentication keys. The device does not synchronize to a time source unless the source has one of these authentication keys and the key number is specified by the <code className="bg-gray-100 px-2 py-1 rounded">ntp trusted-key <em>number</em></code> command.
          </li>
        </ul>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default NtpTutorial;