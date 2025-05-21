import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const RapidStp = () => {
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
        <h1 className="text-3xl font-bold mb-4">Rapid Spanning Tree Protocol RSTP Tutorial6</h1>
      </div>

     {/* Content */}
<div>
  <p>Note: Before reading this article you should understand how STP works. So if you are not sure about STP, please read my article about <a href="https://www.9tut.com/spanning-tree-protocol-stp-tutorial" target="_blank" rel="noopener">Spanning Tree Protocol tutorial</a> first.</p>
  <p>Rapid Spanning Tree Protocol (RSTP)</p>
  <p>One big disadvantage of STP is the low convergence which is very important in switched network. To overcome this problem, in 2001, the IEEE with document 802.1w introduced an evolution of the Spanning Tree Protocol: Rapid Spanning Tree Protocol (RSTP), which significantly reduces the convergence time after a topology change occurs in the network. While STP can take 30 to 50 seconds to transit from a blocking state to a forwarding state, RSTP is typically able to respond less than 10 seconds of a physical link failure.</p>
  <p>RSTP works by adding an alternative port and a backup port compared to STP. These ports are allowed to immediately enter the forwarding state rather than passively wait for the network to converge.</p>
  <p>RSTP bridge port roles:</p>
  <p><strong>* Root port</strong> – A forwarding port that is the closest to the root bridge in terms of path cost<br />
    <strong>* Designated port</strong> – A forwarding port for every LAN segment<br />
    <strong>* Alternate port</strong> – A best alternate path to the root bridge. This path is different than using the root port. The alternative port moves to the forwarding state if there is a failure on the designated port for the segment.<br />
    <strong>* Backup port</strong> – A backup/redundant path to a segment where another bridge port already connects. The backup port applies only when a single switch has two links to the same segment (collision domain). To have two links to the same collision domain, the switch must be attached to a hub.<br />
    <strong>* Disabled port</strong> – Not strictly part of STP, a network administrator can manually disable a port</p>
  <p>Now let’s see an example of three switches below:</p>
  <p style={{textAlign: 'center'}}><img fetchpriority="high" decoding="async" src="https://www.9tut.com/images/ccna_self_study/RSTP/RSTP_port_roles_initial.jpg" alt="RSTP_port_roles_initial.jpg" width={350} height={330} /></p>
  <p><span id="more-623" /></p>
  <p>{/*adsense*/}</p>
  <p>Suppose all the switches have the same bridge priority so the switch with lowest MAC address will become root bridge -&gt; Sw1 is the root bridge and therefore all of its ports will be Designated ports (forwarding).</p>
  <p>Two ports fa0/0 on Sw2 &amp; Sw3 are closest to the root bridge (in terms of path cost) so they will become root ports.</p>
  <p>On the segment between Sw2 and Sw3, because Sw2 has lower MAC than Sw3 so it will advertise better BPDU on this segment -&gt; fa0/1 of Sw2 will be Designated port and fa0/1 of Sw3 will be Alternative port.</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/RSTP/RSTP_port_roles_middle.jpg" alt="RSTP_port_roles_middle.jpg" width={350} height={330} /></p>
  <p>Now for the two ports connecting to the hub, we know that there will have only one Designated port for each segment (notice that the two ports fa0/2 &amp; fa0/3 of Sw2 are on the same segment as they are connected to a hub). The other port will be Backup port according to the definition of Backup port above. But how does Sw2 select its Designated and Backup port? The decision process involves the following parameters inside the BPDU:</p>
  <p>* Lowest path cost to the Root<br />
    * Lowest Sender Bridge ID (BID)<br />
    * Lowest Port ID</p>
  Well, both fa0/2 &amp; fa0/3 of Sw2 has the same “path cost to the root” and “sender bridge ID” so the third parameter “lowest port ID” will be used. Because fa0/2 is inferior to fa0/3, Sw2 will select fa0/2 as its Designated port.
  <p>&nbsp;</p>
  <p style={{textAlign: 'center'}}><img decoding="async" src="https://www.9tut.com/images/ccna_self_study/RSTP/RSTP_port_roles.jpg" alt="RSTP_port_roles.jpg" width={350} height={330} /></p>
  <p>Note: Alternative Port and Backup Port are in discarding state.</p>
  <p>RSTP Port States:</p>
  <p>There are only three port states left in RSTP that correspond to the three possible operational states. The 802.1D disabled, blocking, and listening states are merged into the 802.1w discarding state.</p>
  <p><strong>* Discarding</strong> – the port does not forward frames, process received frames, or learn MAC addresses – but it does listen for BPDUs (like the STP blocking state)<br />
    <strong>* Learning</strong> – receives and transmits BPDUs and learns MAC addresses but does not yet forward frames (same as STP).<br />
    <strong>* Forwarding</strong> – receives and sends data, normal operation, learns MAC address, receives and transmits BPDUs (same as STP).</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>STP State (802.1d)</strong></td>
        <td><strong>RSTP State (802.1w)</strong></td>
      </tr>
      <tr>
        <td>Blocking</td>
        <td>Discarding</td>
      </tr>
      <tr>
        <td>Listening</td>
        <td>Discarding</td>
      </tr>
      <tr>
        <td>Learning</td>
        <td>Learning</td>
      </tr>
      <tr>
        <td>Forwarding</td>
        <td>Forwarding</td>
      </tr>
      <tr>
        <td>Disabled</td>
        <td>Discarding</td>
      </tr>
    </tbody>
  </table>
  <p>Although the learning state is also used in RSTP but it only takes place for a short time as compared to STP. RSTP converges with all ports either in forwarding state or discarding state.</p>
  <p><strong>RSTP Quick Summary:</strong></p>
  <p>RSTP provides faster convergence than 802.1D STP when topology changes occur.<br />
    * RSTP defines three port states: discarding, learning, and forwarding.<br />
    * RSTP defines five port roles: root, designated, alternate, backup, and disabled.</p>
  <p>Note: RSTP is backward compatible with legacy STP 802.1D. If a RSTP enabled port receives a (legacy) 802.1d BPDU, it will automatically configure itself to behave like a legacy port. It sends and receives 802.1d BPDUs only.
  </p><p>{/*adsense*/}</p>
</div>


      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default RapidStp;