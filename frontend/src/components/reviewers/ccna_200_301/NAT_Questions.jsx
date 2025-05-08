import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const NatQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">NAT Questions</h1>
  			
<div>
  <p>
  </p><p>Note: If you are not sure about NAT PAT, please read our <a href="https://www.9tut.com/network-address-translation-nat-tutorial" target="_blank" rel="noopener noreferrer">Network Address Translation NAT Tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which statement about the nature of NAT overload is true?
  <p>A. applies a one-to-many relationship to internal IP addresses<br />
    B. applies a one-to-one relationship to internal IP addresses<br />
    C. applies a many-to-many relationship to internal IP addresses<br />
    D. can be configured only on Gigabit interface</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Refer to the exhibit. An engineer configured NAT translations and has verified that the configuration is correct. Which IP address is the source IP?
  <pre>R1#show ip nat translations{"\n"}Pro{"  "}Inside global{"      "}Inside local{"    "}Outside local{"     "}Outside global{"\n"}tcp{"  "}172.23.104.3:43268 10.4.4.4:43268{"  "}172.23.103.10:23{"  "}172.23.103.10:23{"\n"}tcp{"  "}172.23.104.4:45507 10.4.4.5:45507{"  "}172.23.103.10:80{"  "}172.23.103.10:80</pre>
  <p>A. 10.4.4.4<br />
    B. 10.4.4.5<br />
    C. 172.23.103.10<br />
    D. 172.23.104.4</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>Maybe this question wanted to ask “which IP address is the source IP at the receiving side?” as there are two correct answers for inside local IP address (10.4.4.4 &amp; 10.4.4.5) so they cannot be the correct answer.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="./CCNA Training » NAT Questions_files/NAT_terms_explained.jpg" alt="NAT_terms_explained.jpg" width={418} height={136} /></p>
  <p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which keyword in a NAT configuration enables the use of one outside IP address for multiple inside hosts?
  <p>A. source<br />
    B. static<br />
    C. pool<br />
    D. overload</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>By adding the keyword “overload” at the end of a NAT statement, NAT becomes PAT (Port Address Translation). This is also a kind of dynamic NAT that maps multiple private IP addresses to a single public IP address (many-to-one) by using different ports. Static NAT and Dynamic NAT both require a one-to-one mapping from the inside local to the inside global address. By using PAT, you can have thousands of users connect to the Internet using only one real global IP address. PAT is the technology that helps us not run out of public IP address on the Internet. This is the most popular type of NAT.</p>
  <p>An example of using “overload” keyword is shown below:</p>
  <p>R1(config)# ip nat inside source list 1 interface ethernet1 overload</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which type of address is the public IP address of a NAT device?
  <p>A. outside global<br />
    B. outside local<br />
    C. inside global<br />
    D. inside local<br />
    E. outside public<br />
    F. inside public</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>NAT use four types of addresses:</p>
  <p><strong>* Inside local address</strong> – The IP address assigned to a host on the inside network. The address is usually not an IP address assigned by the Internet Network Information Center (InterNIC) or service provider. This address is likely to be an RFC 1918 private address. <br />
    <strong>* Inside global address</strong> – A legitimate IP address assigned by the InterNIC or service provider that represents one or more inside local IP addresses to the outside world. <br />
    <strong>* Outside local address</strong> – The IP address of an outside host as it is known to the hosts on the inside network. <br />
    <strong>* Outside global address</strong> – The IP address assigned to a host on the outside network. The owner of the host assigns this address.</p>
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="./CCNA Training » NAT Questions_files/NAT_terms_explained.jpg" alt="NAT_terms_explained.jpg" width={418} height={136} /></p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Refer to the exhibit. Router R1 is configured with static NAT. Addressing on the router and the web server are correctly configured, but there is no connectivity between the web server and users on the Internet. What is a possible reason for this lack of connectivity?
  <p><img decoding="async" className="aligncenter" src="./CCNA Training » NAT Questions_files/NAT_Issue.jpg" alt="NAT_Issue.jpg" width={449} height={166} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>R1(config)# ip nat inside source static 192.168.11.254 209.165.200.1<br />
          R1(config)#interface FastEthernet0/0<br />
          R1(config-if)#ip nat inside<br />
          R1(config-if)#interface Serial0/0/1<br />
          R1(config-if)#ip nat outside</td>
      </tr>
    </tbody>
  </table>
  <p>A. The router NAT configuration has an incorrect inside local address<br />
    B. The inside global address is incorrect<br />
    C. The NAT configuration on interface S0/0/1 is incorrect.<br />
    D. Interface Fa0/0 should be configured with the command ip nat outside</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The “ip nat inside” command was wrongly configured with inside local address of 192.168.11.254 while it should be 192.168.11.11, which is the IP address of the web server.</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  An engineer is configuring NAT to translate the source subnet of 10.10.0.0/24 to any one of three addresses: 192.168.3.1, 192.168.3.2, or 192.168.3.3. Which configuration should be used?
  <table style={{width: '98.8985%'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: 422}}><strong>Option A:</strong><br />
          enable<br />
          configure terminal<br />
          ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30<br />
          route-map permit 10.10.0.0 255.255.255.0<br />
          ip nat outside destination list 1 pool mypool<br />
          interface g1/1<br />
          ip nat inside<br />
          interface g1/2<br />
          ip nat outside</td>
        <td style={{width: 422}}><strong>Option B:</strong><br />
          enable<br />
          configure terminal<br />
          ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30<br />
          access-list 1 permit 10.10.0.0 0.0.0.255<br />
          ip nat outside destination list 1 pool mypool<br />
          interface g1/1<br />
          ip nat inside<br />
          interface g1/2<br />
          ip nat outside</td>
      </tr>
      <tr>
        <td style={{width: 422}}><strong>Option C:<br />
          </strong>enable<br />
          configure terminal<br />
          ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30<br />
          access-list 1 permit 10.10.0.0 0.0.0.255<br />
          ip nat inside source list 1 pool mypool<br />
          interface g1/1<br />
          ip nat inside<br />
          interface g1/2<br />
          ip nat outside</td>
        <td style={{width: 422}}>
          <p><strong>Option D:<br />
            </strong>enable<br />
            configure terminal<br />
            ip nat pool mypool 192.168.3.1 192.168.3.3 prefix-length 30<br />
            access-list 1 permit 10.10.0.0 0.0.0.254<br />
            ip nat inside source list 1 pool mypool<br />
            interface g1/1<br />
            ip nat inside<br />
            interface g1/2<br />
            ip nat outside<strong><br />
            </strong></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p>A. Option A<br />
    B. Option B<br />
    C. Option C<br />
    D. Option D</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The command “ip nat inside source list 1 pool mypool” (notice the keyword “inside”, not “outside”).</p>
  <p>This command translates all source addresses that pass access list 1, which means a source address from 10.10.0.0/24, into an address from the pool named mypool (the pool contains addresses from 192.168.3.1 to 192.168.3.3).</p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default NatQuestion;
