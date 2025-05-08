import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DNSQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">DNS Questions </h1>
 
<div>
  <p>
  </p><p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  What are two roles of Domain Name Services (DNS)? (Choose two)
  <p>A. enables applications to identify resources by name instead of IP address<br />
    B. allows a single host name to be shared across more than one IP address<br />
    C. improves security by protecting IP addresses under Fully Qualified Domain Names (FQDNs)<br />
    D. builds a flat structure of DNS names for more efficient IP operations<br />
    E. encrypts network traffic as it travels across a WAN by default</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>An example of DNS is described below:</p>
  <p>When you attempt to go to a domain name such as 9tut.com, your browser will instruct your computer to do a DNS lookup on that domain name. This DNS lookup will query a DNS resolver (for example Google at 8.8.8.8). Once the resolver responds, the computer will usually choose the first IP in the response and use that for the connection. In the case of multiple IP addresses, the DNS server will respond with multiple IP addresses and the first IP will usually be used for the request. Due to how most DNS resolvers work, the order of IP addresses usually changes for each request.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which command must be present in a Cisco Device configuration to enable the device to resolve an FQDN?
  <p>A. ip host<br />
    B. ip name-server<br />
    C. ip domain-lookup<br />
    D. ip domain-name</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>FQDN stands for Fully Qualified Domain Name. The FQDN represents the absolute address of the internet presence. “Fully qualified” refers to the unique identification that guarantees that all of the domain levels are specified. The FQDN contains the host name and domain, including the top level domain, and can be uniquely assigned to an IP address. For example:</p>
  <p>R1.9tut.com.</p>
  <p>The command “ip domain-lookup” enables DNS-based host name-to-address translation. This command is enabled by default.</p>
  <p><span className="ccnaquestionsnumber">Question 3</span></p>
  What facilitates a Telnet connection between devices by entering the device name?
  <p>A. SNMP<br />
    B. DNS lookup<br />
    C. syslog<br />
    D. NTP</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Your router can be configured to use DNS lookups if we wish to use the ping or traceroute commands with a host name rather than an IP address. For example:</p>
  <pre>R1(config)#ip domain-lookup{"\n"}R1(config)#ip name-server 10.10.10.1</pre>
  <p>Then we can Telnet or ping to it:</p>
  <pre>Router# ping www.cisco.com{"\n"}Translating "www.cisco.com"...domain server (10.10.10.1) [OK]{"\n"}Type escape sequence to abort.{"\n"}Sending 5, 100-byte ICMP Echos to 198.133.219.25, timeout is 2 seconds:{"\n"}!!!!!</pre>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/support/docs/ip/domain-name-system-dns/24182-reversedns.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/support/docs/ip/domain-name-system-dns/24182-reversedns.html</a></p>
  <p>Note: In the above example, 10.10.10.1 is not the IP address of www.cisco.com. This IP address is just the DNS Name Server to resolve “www.cisco.com” to the public IP address “198.133.219.25”.</p>
  <p>Note:</p>
  <p>By default, any single word entered on an IOS device that is not recognized as a valid command is treated as a hostname to which you want to telnet. The device will try to translate that word to an IP address in a process that can last about a minute.<br />
    Consider the following example:</p>
  <pre>R1#test{"\n"}Translating "test"...domain server (255.255.255.255){"\n"}% Unknown command or computer name, or unable to find computer address</pre>
  <p>In the output above we typed an unrecognized command “test”. The router entered the DNS resolution process which lasted about a minute. This can be annoying and this is why this feature is often turned off, especially in the lab environments.<br />
    If you don’t need to have a DNS server configured for your router, you can use the “no ip domain-lookup” command to disable the DNS translation process:</p>
  <pre>R1(config)#no ip domain-lookup</pre>
  <p>Now, if I mistype a command, the router will not perform a DNS resolution process:</p>
  <pre>R1#test{"\n"}Translating "test"{"\n"}% Unknown command or computer name, or unable to find computer address{"\n"}R1#</pre>
  <p><span className="ccnaquestionsnumber">Question 4</span></p>
  How does a router behave when configured with the default DNS lookup settings, and a URL is entered on the CLI?
  <p>A. prompts the user to specify the desired IP address.<br />
    B. initiates a ping request to the URL.<br />
    C. continuously attempts to resolve the URL until the command is cancelled.<br />
    D. attempts to query a DNS server on the network.</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>By default, domain lookup function is enabled on the router so it treats every unrecognized command as a hostname, attempts to make a telnet connection to that which, in turn, attempts to resolve a hostname to IP address by querying the DNS server.<br />
    Here is a typical sample.<br />
    R1#xyz<br />
    Translating “xyz”…domain server (255.255.255.255)<br />
    Translating “xyz”…domain server (255.255.255.255) (255.255.255.255)<br />
    Translating “xyz”…domain server (255.255.255.255)<br />
    % Unknown command or computer name, or unable to find computer address</p>
  <p>Note: In order to save some time we can disable DNS lookup by the “no ip domain lookup” global command.</p>
</div>

      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default DNSQuestion;
