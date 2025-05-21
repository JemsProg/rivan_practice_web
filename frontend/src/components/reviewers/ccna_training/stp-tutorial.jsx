import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const StpTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">Spanning Tree Protocol STP Tutorial</h1>
      </div>

     
     {/* Content */}
<div>
  <p>To provide for fault tolerance, many networks implement redundant paths between devices using multiple switches. However, providing redundant paths between segments causes packets to be passed between the redundant paths endlessly. This condition is known as a bridging loop.</p>
  <p>(Note: the terms bridge, switch are used interchangeably when discussing STP)</p>
  <p>To prevent bridging loops, the IEEE 802.1d committee defined a standard called the spanning tree algorithm (STA), or spanning tree protocol (STP). Spanning-Tree Protocol is a link management protocol that provides path redundancy while preventing undesirable loops in the network. For an Ethernet network to function properly, only one active path can exist between two stations.</p>
  <p>Let’s see a situation when there is no loop-avoidance process in operation. Suppose you have two switches connected with redundant links. One switch connected to PC A and the other switch connected to PC B.</p>
  <p>Now PC A wants to talk to PC B. It then sends a broadcast, say an Address Resolution Protocol (ARP) to find out where the location of PC B, the green arrow shows a broadcast frame sent by PC A.</p>
  <p>When the switch A receives a broadcast frame, it forwards that frame to all ports except the port where it receives the request -&gt; SwA forwards that ARP frame out of fa0/0 and fa0/1 ports.</p>
  <p style={{textAlign: 'center'}}><img fetchpriority="high" decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_broadcast_storm.jpg" alt="STP_broadcast_storm.jpg" width={460} height={110} /></p>
  <p><span id="more-611" /></p>
  <p>Suppose SwB receives the broadcast frame from fa0/0 first then it will forward that frame to the two other links ( fa0/1 and fa0/5 of SwB).</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_broadcast_storm_receive_broadcast_frame.jpg" alt="STP_broadcast_storm_receive_broadcast_frame.jpg" width={460} height={110} /></p>
  <p>The other broadcast frame from SwA comes to fa0/1 of SwB so SwB forwards it to fa0/0 and fa0/5.</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_broadcast_storm_receive_broadcast_frame_second.jpg" alt="STP_broadcast_storm_receive_broadcast_frame_second.jpg" width={460} height={110} /></p>
  <p>As you can see, SwA has sent 2 broadcast frames out of its fa0/0 and fa0/1, SwB receives each of them, creates 2 copies and sends one of them back to SwA (the other is sent to PC B).</p>
  <p>When SwA receives these broadcast frames it continues broadcasting them again to its other interfaces, this will keep going on forever until you shutdown the network. This phenomenon is called a <strong>broadcast storm.</strong></p>
  <p>Broadcast storm consumes entire bandwidth and denies bandwidth for normal network traffic. Broadcast storm is a serious network problem and can shut down entire network in seconds.</p>
  <p>Other problems:</p>
  <p><strong>Multiple frame transmission: </strong>Multiple copies of unicast frames may be delivered to destination stations. Many protocols expect to receive only a single copy of each transmission. Multiple copies of the same frame can cause unrecoverable errors. In the above example, if the first frame is not a ARP broadcast but a unicast and SwA and SwB haven’t learned about the destination in that frame yet then they flood the frame on all ports except the originating port. The same phenomenon occurs and PC B will receive more than one copy of that frame.</p>
  <p><strong>MAC Database Instability:</strong> MAC database instability results when multiple copies of a frame arrive on different ports of a switch. We can see it in the above example too when the two ports on SwB (fa0/0 and fa0/1) receive the same frame.</p>
  <p>Now you learned about problems when there is no looping-avoidance mechanism running on the network. All of these problems can be solved with the Spanning Tree Protocol (STP)</p>
  <p>STP prevents loop by blocking one of switch’s port. For example, by blocking port fa0/0 of SwA, no data traffic is sent on this link and the loop in the network is eliminated.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_blocking_port.jpg" alt="STP_blocking_port.jpg" width={460} height={110} /></p>
  <p>But how STP decides which port should be blocked. The whole process is more complex than what is shown above. We will learn it in the next part.</p>
  <p className="blueandbold">How Spanning Tree Protocol (STP) works</p>
  <p>STP must perform three steps to provide a loop-free network topology:</p>
  <p>1. Elects one root bridge<br />
    2. Select one root port per nonroot bridge<br />
    3. Select one designated port on each network segment</p>
  <p>Now let’s have a closer look from the beginning, when you have just turned on the switches…</p>
  <p className="blueandbold">1. Elects one root bridge</p>
  <p>A fun thing is that when turned on, each switch claims itself as the root bridge immediately and starts sending out multicast frames called Bridge Protocol Data Units (BPDUs), which are used to exchange STP information between switches.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_send_BPDU.jpg" alt="STP_send_BPDU.jpg" width={460} height={215} /></p>
  <p>A BPDU contains many fields but there are 4 most important fields for STP to operate correctly:</p>
  <p><span style={{textDecoration: 'underline'}}><strong>* The Bridge IDs of the Root Bridge and the Bridge ID of the Transmitting Bridge:</strong></span></p>
  <p>In the initial stage, each switch claims itself as a root bridge so the bridge ID of the root bridge and the bridge ID of the transmitting bridge are the same.</p>
  <p>The Bridge ID is composed of the <strong>bridge priority</strong> value (0-65535, 2 bytes) and the <strong>bridge MAC address</strong> (6 bytes).</p>
  <p style={{textAlign: 'center'}}><strong>Bridge ID = Bridge Priority + MAC Address</strong></p>
  <p>For example:</p>
  <p>+ The bridge priority of SwA is 32768 and its MAC address is 0000.0000.9999 -&gt; the bridge ID of SwA is 32768:0000.0000.9999</p>
  <p>+ The bridge priority of SwB is 32768 and its MAC address is 0000.0000.1111 -&gt; the bridge ID of SwB is 32768:0000.0000.1111</p>
  <p><strong>The root bridge is the bridge with the lowest bridge ID</strong>.</p>
  <p>To compare two bridge IDs, the priority is compared first. If two bridges have equal priority, then the MAC addresses are compared. In the above example, both SwA and SwB have the same bridge ID (32768) so they will compare their MAC addresses. Because SwB has lower MAC address it will become root bridge.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_elect_root_bridge.jpg" alt="STP_elect_root_bridge.jpg" width={460} height={215} /></p>
  <p>On the root bridge, all ports are designated ports. Designated ports are in the forwarding state and can send and receive traffic.</p>
  <p>Note: The default bridge priority value is 32768. An administrator can decide which bridge will become the root bridge by lowering the priority value (thus lowering Bridge ID). For example, we can lower SwA’s bridge priority to 28672(smaller than 32768) to make it root bridge. But notice that the bridge priority number can be incremented only in step of 4096.</p>
  <p>In conclusion, STP decides which switch will become root bridge by comparing the Bridge ID in the BPDUs. The bridge priorities are compare first; if they are equal then the MAC addresses will be used. Because each switch has a unique MAC address so surely one root bridge will be elected.</p>
  <p><span style={{textDecoration: 'underline'}}><strong>* The cost to reach the root from this bridge (Root Path Cost):</strong></span> This value is set to 0 at the beginning of STP root bridge election process since all bridges claim to be the root. The cost range is 0-61440.</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>Link Speed</strong></td>
        <td><strong>Cost (Revised IEEE Specification)</strong></td>
        <td><strong>Cost (Previous IEEE Specification)</strong></td>
      </tr>
      <tr>
        <td>10 Gbps</td>
        <td>2</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1 Gbps</td>
        <td>4</td>
        <td>1</td>
      </tr>
      <tr>
        <td>100 Mbps</td>
        <td>19</td>
        <td>10</td>
      </tr>
      <tr>
        <td>10 Mbps</td>
        <td>100</td>
        <td>100</td>
      </tr>
    </tbody>
  </table>
  <p>The root path cost is used to elect root port and we will discuss in the next part.</p>
  <p><span style={{textDecoration: 'underline'}}><strong>* The Port ID</strong></span>: The transmitting switch port ID, will be discussed later.</p>
  <p className="blueandbold">2. Select one root port per nonroot bridge</p>
  <p><strong>Root port is the port that is closest to the root bridge</strong>, which means it is the port that receiving the lowest-cost BPDU from the root.</p>
  <p>Every non-root bridge must have a root port. All root ports are placed in forwarding state.</p>
  <p>In the above example, if we suppose the upper link (between two fa0/0 interfaces) are 10Mbps and the lower link (between two fa0/1 interfaces) is 100Mbps link then fa0/1 of SwA will become root port as it has lower cost than fa0/0 (cost 19 &lt; cost 100).</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_elect_root_port.jpg" alt="STP_elect_root_port.jpg" width={460} height={135} /></p>
  <p>The root port election is much more complex when there are many switches so we wrote a separate tutorial. If you want to find out please read our <a href="https://www.9tut.com/stp-root-port-election-tutorial" target="_blank" rel="noopener noreferrer">STP Root Port Election Tutorial</a>.</p>
  <p className="blueandbold">3. Select one designated port on each network segment</p>
  <p>STP selects one designated port per segment to forward traffic. Other switch ports on the segment typically become nondesignated ports and are blocked. Therefore interface fa0/0 of SwA will become nondesignated port (blocking state). In blocking state, although switches cannot send data traffic but can still receive BPDUs.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_elect_nondesignated_port.jpg" alt="STP_elect_nondesignated_port.jpg" width={460} height={135} /></p>
  <p className="blueandbold">&nbsp;</p>
  <p>Now the network reaches a state called <strong>convergence</strong>. Convergence in STP occurs when all ports on bridges and switches have transitioned to either forwarding or blocking states. No data is forwarded until convergence is complete so the time for convergence when network topology changes is very important. Fast convergence is very desirable in large networks. The normal convergence time is 50 seconds for 802.1D STP (which is rather slow) but the timers can be adjusted.</p>
  <p className="blueandbold">STP switch port states</p>
  <p>When STP is enabled, every switch in the network goes through the blocking state and the transitory states of listening and learning. The ports then stabilize to the forwarding or blocking state.</p>
  <p>* Blocking – no user data is sent or received but it may go into forwarding mode if the other links in use fail and the spanning tree algorithm determines the port may transition to the forwarding state. BPDU data is still received in blocking state but discards frames, does not learn MAC address.</p>
  <p>* Listening – The switch processes BPDUs and awaits possible new information that would cause it to return to the blocking state, discards frames and MAC address.</p>
  <p>* Learning – receives and transmits BPDUs and learns MAC addresses but does not yet forward frames.</p>
  <p>* Forwarding – receives and sends data, normal operation, learns MAC address, receives and transmits BPDUs.</p>
  <p>Below is a quick summary of STP states:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>State</strong></td>
        <td><strong>Can forward data?</strong></td>
        <td><strong>Learn MAC?</strong></td>
        <td><strong>Timer</strong></td>
        <td><strong>Transitory or Stable State?</strong></td>
      </tr>
      <tr>
        <td>Blocking</td>
        <td>No</td>
        <td>No</td>
        <td>Max Age (20 sec)</td>
        <td>Stable</td>
      </tr>
      <tr>
        <td>Listening</td>
        <td>No</td>
        <td>No</td>
        <td>Forward Delay (15 sec)</td>
        <td>Transitory</td>
      </tr>
      <tr>
        <td>Learning</td>
        <td>No</td>
        <td>Yes</td>
        <td>Forward Delay</td>
        <td>Transitory</td>
      </tr>
      <tr>
        <td>Forwarding</td>
        <td>Yes</td>
        <td>Yes</td>
        <td>&nbsp;</td>
        <td>Stable</td>
      </tr>
    </tbody>
  </table>
  <p><strong>* MaxAge </strong>– How long any bridge should wait, after beginning to not hear hellos, before trying to change the STP topology. Usually this is a multiple of the hello time; the default is 20 seconds.</p>
  <p><strong>* Forward Delay</strong> – Delay that affects the time involved when an interface changes from blocking state to forwarding state. A port stays in listening state and then learning state for the number of seconds deﬁned by the forward delay. This timer is covered in more depth shortly.</p>
  <p>The spanning tree algorithm provides the following benefits:</p>
  <p>* Eliminates bridging loops</p>
  <p>* Provides redundant paths between devices</p>
  <p>* Enables dynamic role configuration</p>
  <p>* Recovers automatically from a topology change or device failure</p>
  <p>* Identifies the optimal path between any two network devices</p>
  <p>Now let’s take an example using the same network as above but we suppose that the bottom 100Mbps connection is broken.</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/STP/STP_port_states.jpg" alt="STP_port_states.jpg" /></p>
  <p>When the lower link is broken, SwA must wait for Max Age seconds before it begins to transition fa0/0 interface from blocking to listening state. In listening state it must wait for the Forward Delay seconds to move to the Learning state. Next it continues waiting for more Forward Delay seconds. If no BPDU is received, it is then placed in forwarding state. These three waiting periods of (by default) 20, 15, and 15 seconds create STP’s relatively slow convergence.</p>
  <p className="blueandbold">How STP performs when a link fails</p>
  <p>Suppose we have a topology with three switches as shown below:<br />
    <img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/STP/STP_Convergence.jpg" alt="STP_Convergence.jpg" width={310} height={200} /></p>
  <p>In which SwA is elected the root bridge, the link between SwB and SwC is being blocked. When STP is converged, the port roles are shown above.</p>
  <p>Now suppose the link between SwA and SwB goes down, let us see what and how STP will perform</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/STP/STP_Link_failure.jpg" alt="STP_Link_failure.jpg" width={310} height={200} /></p>
  <p>1. First, P1 on SwB immediately goes down and SwB declares its link to SwA as down.<br />
    2. SwB considers its link to SwC (which is being blocked) as an alternate link to root port. SwB starts to transition P2 from the blocking state to listening state -&gt; learning state -&gt; forwarding state. Each of these stages lasts 15 seconds by default. Therefore port P2 on SwB will be hold blocking for 30 seconds before the network converges again. This downtime of the network is rather long (although we can tune the timers to 14 second downtime) and the users can feel it.</p>
</div>


      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default StpTutorial;