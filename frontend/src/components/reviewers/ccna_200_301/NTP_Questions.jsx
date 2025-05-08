import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const NtpQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">NTP Questions</h1>
<div>
  <p />
  <p><strong>Premium Member</strong>: You can test your knowledge with these questions first via this <a href="https://www.9tut.com/ntp-quiz" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><table border={1}>
    <tbody>
      <tr>
        <td>
          <p><span className="blueandbold">Quick review of NTP</span></p>
          <p>NTP uses the concept of a stratum to describe how many NTP hops away a machine is from an authoritative time source, usually a reference clock. A reference clock is a stratum 0 device that is assumed to be accurate and has little or no delay associated with it. Stratum 0 servers cannot be used on the network but they are directly connected to computers which then operate as stratum-1 servers. A stratum 1 time server acts as a primary network time standard.</p>
          <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.digitaltut.com/images/ROUTE/NTP/ntp-stratum.jpg" alt="ntp-stratum.jpg" width={309} height={176} /></p>
          <p>A stratum 2 server is connected to the stratum 1 server; then a stratum 3 server is connected to the stratum 2 server and so on. A stratum 2 server gets its time via NTP packet requests from a stratum 1 server. A stratum 3 server gets its time via NTP packet requests from a stratum-2 server… A stratum server may also peer with other stratum servers at the same level to provide more stable and robust time for all devices in the peer group (for example a stratum 2 server can peer with other stratum 2 servers).</p>
          <p>– NTP is designed to synchronize the time on a network. NTP runs over the User Datagram Protocol (UDP), using port 123 as both the source and destination.<br />
            – To configure a Cisco device as an Authoritative NTP Server, use the <strong>ntp master</strong> [<em>stratum</em>] command. An Authoritative NTP Server can distribute time even when it is not synchronized to an existing time server. <br />
            – To configure the local device to use a remote NTP clock source, use the command <strong>ntp server</strong> &lt;<em>IP address</em>&gt;. For example: Router(config)#ntp server 192.168.1.1<br />
            – The <strong>ntp authenticate</strong> command is used to enable the NTP authentication feature (NTP authentication is disabled by default).<br />
            – The <strong>ntp trusted-key</strong> command specifies one or more keys that a time source must provide in its NTP packets in order for the device to synchronize to it. This command provides protection against accidentally synchronizing the device to a time source that is not trusted.<br />
            – The <strong>ntp authentication-key</strong> defines the authentication keys. The device does not synchronize to a time source unless the source has one of these authentication keys and the key number is specified by the <strong>ntp trusted-key <em>number</em></strong> command.<br />
            – Two most popular commands to display time sources statistics: <strong>show ntp status</strong> and <strong>show ntp associations</strong></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which command should you enter to configure a device as an NTP server?
  <p>A. ntp server<br />
    B. ntp peer<br />
    C. ntp authenticate <br />
    D. ntp master</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>To configure a Cisco device as an Authoritative NTP Server, use the <strong>ntp master</strong> [<em>stratum</em>] command.</p>
  <p>To configure a Cisco device as a NTP client, use the command <strong>ntp server</strong> &lt;<em>IP address</em>&gt;. For example: Router(config)#ntp server 192.168.1.1. This command will instruct the router to query 192.168.1.1 for the time.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which two pieces of information can you determine from the output of the <strong>show ntp status</strong> command? (Choose two)
  <p>A. whether the NTP peer is statically configured<br />
    B. the IP address of the peer to which the clock is synchronized<br />
    C. the configured NTP servers<br />
    D. whether the clock is synchronized<br />
    E. the NTP version number of the peer</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Below is the output of the “show ntp status” command. From this output we learn that R1 has a stratum of 10 and it is getting clock from 10.1.2.1.</p>
  <pre>R1#show ntp status{"\n"}Clock is synchronized, stratum 10, reference is 10.1.2.1{"\n"}nominal freq is 250.0000 Hz, actual freq is 249.9987 Hz, precision is 2**18{"\n"}reference time is D5E492E9.98ACB4CF (13:00:25.596 CST Wed Sep 18 2013){"\n"}clock offset is 15.4356 msec, root delay is 52.17 msec{"\n"}root dispersion is 67.61 msec, peer dispersion is 28.12 msec</pre>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which two tasks must be performed to configure NTP to a trusted server in client mode on a single network device? (Choose two)
  <p>A. Enable NTP authentication<br />
    B. Verify the time zone<br />
    C. Disable NTP broadcasts<br />
    D. Specify the IP address of the NTP server<br />
    E. Set the NTP server private key</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>To configure authentication, perform this task in privileged mode:</p>
  <p>Step 1: Configure an authentication key pair for NTP and specify whether the key will be trusted or untrusted.<br />
    Step 2: Set the IP address of the NTP server and the public key.<br />
    Step 3: Enable NTP client mode.<br />
    Step 4: Enable NTP authentication.<br />
    Step 5: Verify the NTP configuration.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4000/8-2glx/configuration/guide/ntp.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4000/8-2glx/configuration/guide/ntp.html</a></p>
  <p>Note: A trusted NTP server may or may not require a secret key so it is not a “must” in this question.</p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default NtpQuestion;
