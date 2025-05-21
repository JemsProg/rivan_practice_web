import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const RipTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">RIP Tutorial</h1>
      </div>

     
    {/* Content */}
<div>
  <p>In this tutorial we will learn about RIP routing protocol</p>
  <p>Routing Information Protocol (RIP) is a distance-vector routing protocol which is based on Bellman-Ford algorithm. Routers using Distance Vector routing protocols do not posses the topological information about the network but instead rely on the neighbors information (so this method is known as routing by rumor). RIP sends the complete routing table out to all active interfaces every 30 seconds. RIP only uses hop count (the number of routers) to determine the best way to a remote network.</p>
  <p>Note: RIP v1 is a classful routing protocol but RIP v2 is a classless routing protocol.</p>
  <p>Classful routing protocols do not include the subnet mask with the network address in routing updates, which can cause problems with discontiguous subnets or networks that use Variable-Length Subnet Masking (VLSM). Fortunately, RIPv2 is a classless routing protocol so subnet masks are included in the routing updates, making RIPv2 more compatible with modern routing environments.</p>
  <p>Distance vector protocols advertise routing information by sending messages, called routing updates, out the interfaces on a router.</p>
  <p><span id="more-443" /></p>
  <p><span className="blueandbold">RIP Operation</span></p>
  <p>A big problem with distance vector routing protocol is routing loop. Let’s take a look at how a routing loop occurs.</p>
  <p>Here we have routers A, B and C. Notice that at the beginning (when a routing protocol is not turned on) there are only directly connected networks in the routing tables of these routers. For example, in the routing table of router A, <strong>network 1.0.0.0</strong> has already been known because it is directly connected through <strong>interface E0</strong> and the <strong>metric</strong> (of a directly connected network) is <strong>0</strong> (these 3 parameters are shown in the routing tables below).</p>
  <p style={{textAlign: 'center'}}><img fetchpriority="high" decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_Initial.jpg" alt="RIP_Distance_Vector_Protocol_Initial.jpg" width={485} height={164} /></p>
  <p>Also B knows networks <strong>2.0.0.0</strong> &amp; <strong>3.0.0.0</strong> with a <strong>metric of 0</strong>.<br />
    Also C knows networks <strong>3.0.0.0</strong> &amp; <strong>4.0.0.0</strong> with a <strong>metric of 0</strong>.</p>
  <p>Now we turn on RIP on these routers (we will discuss the configuration later. In the rest of this article, we will call network 1.0.0.0 network 1, 2.0.0.0 network 2 and so on).</p>
  <p>RIP sends update every 30 seconds so after 30 sec goes by, A sends a copy of its routing table to B, B already knew about network 2 but now B learns about network 1 as well. Notice the metric we have here for directly connected networks, since we’re using RIP, we’re using a metric of hop count. Remember a hop count (or a hop) is how many routers that these packets will have to go through to reach the destination. For example, from router A to network 1 &amp; 2 (which are directly connected) it goes to 0 hop, router B has now learned about network 1 from A via E0 interface so the metric now will be 1 hop.</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_First_Update.jpg" alt="RIP_Distance_Vector_Protocol_First_Update.jpg" width={485} height={310} /></p>
  <p>Each router receives a routing table from its direct neighbor. For example, Router B receives information from Router A about network 1 and 2. It then adds a distance vector metric (such as the number of hops), increasing the distance vector of these routes by 1.</p>
  <p>B also exchanges its routing table with A about network 2 and 3.</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_Second_Update.jpg" alt="RIP_Distance_Vector_Protocol_Second_Update.jpg" width={485} height={310} /></p>
  <p>B then passes the routing table to its other neighbor, Router C.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_Third_Update.jpg" alt="RIP_Distance_Vector_Protocol_Third_Update.jpg" width={485} height={330} /></p>
  <p style={{textAlign: 'left'}}>C also sends its update to B and B sends it to A.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_Four_Update.jpg" alt="RIP_Distance_Vector_Protocol_Four_Update.jpg" width={485} height={330} /></p>
  <p style={{textAlign: 'left'}}>Now the network is converged.</p>
  <p style={{textAlign: 'left'}}>Now let’s assume network 4 down suddenly.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_Network_Down.jpg" alt="RIP_Distance_Vector_Protocol_Network_Down.jpg" width={485} height={210} /></p>
  <p>When network 4 fails, Router C detects the failure and stops routing packets out its E1 interface. However, Routers A and B have not yet received notification of the failure. Router A still believes it can access 4.0.0.0 through Router B. The routing table of Router A still refects a path to network 10.4.0.0 with a distance of 2 and router B has a path with a distance of 1.</p>
  <p>There will be no problem if C sends an update earlier than B and inform that network is currently down but if B sends its update first, C will see B has a path to network 4 with a metric of 1 so it updates its routing table, thinking that “if B can go to network 4 by 1 hop than I can go to network 4 by 2 hops” but of course this is totally wrong.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_Network_Down_2.jpg" alt="RIP_Distance_Vector_Protocol_Network_Down_2.jpg" width={485} height={240} /></p>
  <p>The problem does not stop here. In turn, C sends an update to B and informs it can access network 4 by 2 hops. B learns this and think “if C can access network 4 by 2 hops than I can access by 3 hops”.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_Distance_Vector_Protocol_Network_Down_3.jpg" alt="RIP_Distance_Vector_Protocol_Network_Down_3.jpg" width={485} height={240} /></p>
  <p>This same process occurs when B continually sends its update to C and the metric will increase to infinity so this phenomenon is called “counting to infinity”.</p>
  <p>Below lists some methods to prevent this phenomenon:</p>
  <p><strong>SPLIT HORIZON:</strong><br />
    A router never sends information about a route back in same direction which is original information came, routers keep track of where the information about a route came from. Means when router A sends update to router B about any failure network, router B does not send any update for same network to router A in same direction.</p>
  <p><strong>ROUTE POISONING:</strong><br />
    Router consider route advertised with an infinitive metric to have failed ( metric=16) instead of marking it down. For example, when network 4 goes down, router C starts route poisoning by advertising the metric (hop count) of this network as 16, which indicates an unreachable network. When router B receives this advertising, it continue advertising this network with a metric of 16.</p>
  <p><strong>POISON REVERSE:</strong></p>
  <p>The poison reverse rule overwrites split horizon rule. For example, if router B receives a route poisoning of network 4 from router C then router B will send an update back to router C (which breaks the split horizon rule) with the same poisoned hop count of 16. This ensures all the routers in the domain receive the poisoned route update.</p>
  <p>Notice that every router performs poison reverse when learning about a downed network. In the above example, router A also performs poison reverse when learning about the downed network from B.</p>
  <p><strong>HOLD DOWN TIMERS:</strong></p>
  <p>After hearing a route poisoning, router starts a hold-down timer for that route. If it gets an update with a better metric than the originally recorded metric within the hold-down timer period, the hold-down timer is removed and data can be sent to that network. Also within the hold-down timer, if an update is received from a different router than the one who performed route poisoning with an equal or poorer metric, that update is ignored. During the hold-down timer, the “downed” route appears as “possibly down” in the routing table.</p>
  <p>For example, in the above example, when B receives a route poisoning update from C, it marks network 4 as “possibly down” in its routing table and starts the hold-down timer for network 4. In this period if it receives an update from C informing that the network 4 is recovered then B will accept that information, remove the hold-down timer and allow data to go to that network. But if B receives an update from A informing that it can reach network by 1 (or more) hop, that update will be ignored and the hold-down timer keeps counting.</p>
  <p>Note: The default hold-down timer value = 180 second.</p>
  <p><strong>TRIGGERED UPDATE :</strong><br />
    When any route failed in network ,do not wait for the next periodic update instead send an immediate update listing the poison route.</p>
  <p><strong>COUNTING TO INFINITY:</strong><br />
    Maximum count 15 hops after it will not be reachable.</p>
  <p><span className="blueandbold">RIP Timers</span></p>
  <p>RIP uses several timers to regulate its operation. These timers are described below:</p>
  <p><strong>Update timer:</strong> how often the router sends update. Default update timer is 30 seconds<br />
    <strong>Invalid</strong> <strong>timer</strong> (also called <strong>Expire timer</strong>): how much time must expire before a route becomes invalid since seeing a valid update; and place the route into holddown. Default invalid timer is 180 seconds<br />
    <strong>Holddown timer:</strong> When a route is expired, it enters “holddown”, which means the router will not believe any new updates with a hop count equal to or higher (poorer) than the hop count recording in the routing table. Hold down is intended to assist in avoiding inaccurate routing by rumor information while the network converges. Default holddown timer is 180 seconds<br />
    <strong>Flush timer</strong>: how much time since the last valid update, until RIP deletes that route in its routing table. Default Flush timer is 240 seconds</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/RIP/RIP_timer.jpg" alt="RIP_timer.jpg" width={377} height={261} /></p>
  <p>Note: From the image above, you can see that when a route expires, in fact the Holddown timer only works in its first 60 seconds (not 180 seconds), then the route is removed from the routing table when the Flush timer is expired.</p>
  <p><span className="blueandbold"><strong>Configuring RIP</strong></span></p>
  <table border={1}>
    <tbody>
      <tr>
        <td>Router(config)#router rip</td>
        <td>Enter router RIP configuration mode</td>
      </tr>
      <tr>
        <td>Router(config-router)#network <em>&lt;address&gt;</em></td>
        <td>Identify networks that will participate in the router protocol. Notice that you identify networks, and not interfaces.</td>
      </tr>
    </tbody>
  </table>
  <p>NOTE: You need to advertise only the classful network number, not a subnet:<br />
    Router(config-router)#network 172.16.0.0<br />
    not<br />
    Router(config-router)#network 172.16.10.0</p>
  <p>If you advertise a subnet, you will not receive an error message, because the router will automatically convert the subnet to the classful network address.</p>
  <p>To learn more about configuring RIP, please read my <a href="https://www.9tut.com/configuring-rip-gns3-lab" target="_blank" rel="noopener noreferrer">Configuring RIP GNS3 Lab tutorial</a></p>
  <p><span className="blueandbold">Key points:</span></p>
  <p>+ RIP uses hop counts to calculate optimal routes (a hop is a router). <br />
    + RIP routing is limited to 15 hops to any location (16 hops indicates the network is unreachable). <br />
    + RIP uses the split horizon with poison reverse method to prevent the count-to-infinity problem. <br />
    + RIP uses only classful routing, so it uses full address classes, not subnets. <br />
    + RIP broadcasts updates to the entire network. <br />
    + RIP can maintain up to six multiple paths to each network, but only if the cost is the same. <br />
    + RIP supports load balancing over same-cost paths. <br />
    + The update interval default is 30, the invalid timer default is 180, the holddown timer default is 180, and the flush timer default is 240.</p>
  <p>{/*adsense*/}</p>
</div>



      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default RipTutorial;