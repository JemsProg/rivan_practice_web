import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const AccessListQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Access List Questions</h1>
<div>
  <p />
  <p><strong>Premium Member</strong>: You can test your knowledge with these questions first via this <a href="https://www.9tut.com/access-list-quiz" target="_blank" rel="noopener noreferrer">link</a> (via HTML).</p>
  <p>
  </p><p>Note: If you are not sure about Access list, please read our <a href="https://www.9tut.com/access-list-tutorial" target="_blank" rel="noopener noreferrer">Access List Tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Refer to the exhibit. A network engineer must block access for all computers on VLAN 20 to the web server via HTTP. All other computers must be able to access the web server. Which configuration when applied to switch A accomplishes this task?
  <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/accesslist/ACL_block.jpg" alt="ACL_block.jpg" width={320} height={250} /></p>
  <p>A. <br />
    config t<br />
    ip access-list extended wwwblock<br />
    deny tcp any host 10.30.0.100 eq 80<br />
    int vlan 100<br />
    ip access-group wwwblock in</p>
  <p>B. <br />
    config t<br />
    ip access-list extended wwwblock<br />
    deny tcp any host 10.30.0.100 eq 80<br />
    permit ip any any<br />
    int vlan 20<br />
    ip access-group wwwblock in</p>
  <p>C. config t<br />
    ip access-list extended wwwblock<br />
    permit ip any any<br />
    deny tcp any host 10.30.0.100 eq 80<br />
    int vlan 30<br />
    ip access-group wwwblock in</p>
  <p>D. <br />
    config t<br />
    ip access-list extended wwwblock<br />
    deny tcp any host 10.30.0.100 eq 80<br />
    int vlan 20<br />
    ip access-group wwwblock in</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The “deny tcp any host 10.30.0.100 eq 80” command means “block all (any) traffic from accessing web server at 10.30.0.100 on port 80”. And since it is applied to VLAN 20 interface so only computers on VLAN 20 are affected.</p>
  <p>In summary, just notice that 10.30.0.100 here is the destination IP address, not source address.</p>
  <p>Note: The traffic flow from hosts in VLAN 20 to the Web Server is: host in VLAN 20 -&gt; Interface VLAN 20 -&gt; Interface VLAN 30 -&gt; Web Server. If we place the ACL: host in VLAN 20 -&gt; (ACL Inbound) Interface VLAN 20 -&gt; Interface VLAN 30 -&gt; Web Server. Therefore the ACL can block traffic from VLAN 20.</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Refer to the exhibit. An extended ACL has been configured and applied to router R2. The configuration failed to work as intended. Which two changes stop outbound traffic on TCP ports 25 and 80 to 10.0.20.0/26 from the 10.0.10.0/26 subnet while still allowing all other traffic? (Choose two)
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/accesslist/ACL_deny_TCP.jpg" alt="ACL_deny_TCP.jpg" width={385} height={224} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>R2#config t<br />
          R2(config)#access-list 101 deny tcp 10.0.20.0 0.0.0.63 10.0.10.0 0.0.0.63 eq smtp<br />
          R2(config)#access-list 101 deny tcp 10.0.20.0 0.0.0.63 10.0.10.0 0.0.0.63 eq www<br />
          R2(config)#int gi0/2<br />
          R2(config-if)#ip access-group 101 in</td>
      </tr>
    </tbody>
  </table>
  <p>A. Add a “permit ip any any” statement to the beginning of ACL 101 for allowed traffic<br />
    B. Add a “permit ip any any” statement at the end of ACL 101 for allowed traffic<br />
    C. The source and destination IPs must be swapped in ACL 101<br />
    D. The ACL must be configured the Gi0/2 interface inbound on R1<br />
    E. The ACL must be moved to the Gi0/1 interface outbound on R2</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B C
  </p><p className="ccnaquestionsnumber">Question 3</p>
  While examining excessive traffic on the network, it is noted that all incoming packets on an interface appear to be allowed even though an IPv4 ACL is applied to the interface. Which two misconfigurations cause this behavior? (Choose two)
  <p>A. The packets fail to match any permit statement<br />
    B. A matching permit statement is too high in the access list<br />
    C. A matching permit statement is too broadly defined<br />
    D. The ACL is empty<br />
    E. A matching deny statement is too high in the access list</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If we have a matching permit statement too high in the access list then it will be matched first before we can deny i -&gt; Answer B is correct.</p>
  <p>The statement that an ACL always has an implicit deny any at the bottom has one exception. And that exception <strong>is when the ACL is empty</strong>. If you use ip access-group to apply an ACL and that ACL has no statements then all traffic is permitted -&gt; Answer D is correct.</p>
  <p>Reference: <a href="https://community.cisco.com/t5/routing/apply-empty-acl-what-happens/td-p/740473" target="_blank" rel="noopener noreferrer">https://community.cisco.com/t5/routing/apply-empty-acl-what-happens/td-p/740473</a></p>
  <p>Note: Answer C seems to be correct too but we only have two choices in this question and this answer is not in the best answers. If a matching permit statement is too broadly defined (for example if we only want to permit TCP traffic then we should not permit “ip” traffic, which includes both TCP and UDP).</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Refer to the exhibit. What configuration on R1 denies SSH access from PC-1 to any R1 interface and allows all other traffic?
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/accesslist/access_list_ssh.jpg" alt="access_list_ssh.jpg" width={398} height={217} />A. access-list 100 deny tcp host 172.16.1.33 any eq 22<br />
    access-list 100 permit ip any any<br />
    interface GigabitEthernet0/0 <br />
    ip access-group 100 in</p>
  <p>B. access-list 100 deny tcp host 172.16.1.33 any eq 22 <br />
    access-list 100 permit ip any any</p>
  <p>C. line vty 0 15 <br />
    access-class 100 in<br />
    access-list 100 deny tcp host 172.16.1.33 any eq 23<br />
    access-list 100 permit ip any any</p>
  <p>interface GigabitEthernet0/0<br />
    ip access-group 100 in</p>
  <p>D. access-list 100 deny tcp host 172.16.1.33 any eq 23 <br />
    access-list 100 permit ip any any<br />
    line vty 0 15<br />
    access-class 100 in</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>To deny SSH, we must block TCP port 22 and we need to apply the ACL to Gi0/0 interface (which connects to PC-1).</p>
  <p>Note: TCP port 23 is used for Telnet.</p>
  <p><span className="ccnaquestionsnumber">Question 5<br />
    </span></p>
  Refer to the exhibit. An administrator configures the following ACL in order to prevent devices on the 192.168.1.0 subnet from accessing the server at 10.1.1.5:
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/IP_Routing/ACL_placement.jpg" alt="ACL_placement.jpg" width={250} height={209} /></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>access-list 100 deny ip 192.168.1.0 0.0.0.255 host 10.1.1.5<br />
          access-list 100 permit ip any any</td>
      </tr>
    </tbody>
  </table>
  <p>Where should the administrator place this ACL for the most efficient use of network resources?</p>
  <p>A. inbound on router A Fa0/0<br />
    B. outbound on router B Fa0/0<br />
    C. outbound on router A Fa0/1<br />
    D. inbound on router B Fa0/1</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>By placing the ACL closest to the source, we can reduce unnecessary traffic passing between two routers and the processing time of the router.</p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  Refer to the exhibit. Which two configurations would be used to create and apply a standard access list on R1, so that only the 10.0.70.0/25 network devices are allowed to access the internal database server? (Choose two)
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna/accesslist/ACL_allow_database.jpg" alt="ACL_allow_database.jpg" width={329} height={205} /></p>
  <p>A. R1(config)# interface GigabitEthernet0/0<br />
    R1(config-if)# ip access-group 5 out</p>
  <p>B. R1(config)# access-list 5 permit 10.0.54.0 0.0.1.255</p>
  <p>C. R1(config)# interface Serial0/0/0<br />
    R1(config-if)# ip access-group 5 in</p>
  <p>D. R1(config)# access-list 5 permit 10.0.70.0 0.0.0.127</p>
  <p>E. R1(config)# access-list 5 permit any</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A D
  </p><p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Refer to the exhibit.
  <pre>interface GigabitEthernet0/1{"\n"} ip address 192.168.1.2 255.255.255.0{"\n"} ip access-group 2699 in{"\n"}!{"\n"}access-list 2699 deny icmp any 10.10.1.0 0.0.0.255 echo{"\n"}access-list 2699 deny ip any 10.20.1.0 0.0.0.255{"\n"}access-list 2699 permit ip any 10.10.1.0 0.0.0.255{"\n"}access-list 2699 permit tcp any 10.20.1.0 0.0.0.127 eq 22</pre>
  <p>A network administrator must permit SSH access to remotely manage routers in a network. The operations team resides on the 10.20.1.0/25 network. Which command will accomplish this task?</p>
  <p>A. access-list 2699 permit udp 10.20.1.0 0.0.0.255<br />
    B. no access-list 2699 deny tcp any 10.20.1.0 0.0.0.127 eq 22<br />
    C. access-list 2699 permit tcp any 10.20.1.0 0.0.0.255 eq 22<br />
    D. no access-list 2699 deny ip any 10.20.1.0 0.0.0.255</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The operations team resides on 10.20.1.0/25 network which is a part of 10.20.1.0/24 network so we need to remove the “deny” statement of the 10.20.1.0/25 network to allow SSH.</p>
  <p>Note: the ACL is blocking the reply traffic so 10.20.1.0/25 should be the destination.</p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default AccessListQuestion;
