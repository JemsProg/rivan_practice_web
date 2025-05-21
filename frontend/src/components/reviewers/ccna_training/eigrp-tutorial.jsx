import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const EigrpTutorial = () => {
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
    <div
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-4">EIGRP Tutorial</h1>
      </div>

      {/* Content */}
      <div>
        <p>In this article we will mention about the EIGRP protocol.</p>
        <p>
          In the past, Enhanced Interior Gateway Routing Protocol (EIGRP) is a
          Cisco-proprietary routing protocol but from March-2013 Cisco opens up
          EIGRP as an open standard in order to help companies operate in a
          multi-vendor environment. EIGRP is a classless routing protocol,
          meaning that it sends the subnet mask of its interfaces in routing
          updates, which use a complex metric based on bandwidth and delay.
        </p>
        <p>
          EIGRP is referred to as a <strong>hybrid routing protocol</strong>{" "}
          because it has the characteristics of both distance-vector and
          link-state protocols but now Cisco refers it as an advanced distance
          vector protocol.
        </p>
        <p>
          Notice: the term “hybrid” is misleading because EIGRP is not a hybrid
          between distance vector and link-state routing protocols. It is a
          distance vector routing protocol with enhanced features.
        </p>
        <p>
          EIGRP is a powerful routing protocol and it is really standout from
          its ancestor IGRP. The main features are listed below:
        </p>
        <p>
          + Support <strong>VLSM and discontiguous networks</strong>
          <br />+ <strong>Use Reliable Transport Protocol</strong> (RTP) to
          delivery and reception of EIGRP packets
          <br />+ Use the best path selection{" "}
          <strong>Diffusing Update Algorithm (DUAL)</strong>, guaranteeing
          loop-free paths and backup paths throughout the routing domain
          <br />+{" "}
          <strong>
            Discover neighboring devices using periodic Hello messages
          </strong>{" "}
          to discover and monitor connection status with its neighbors
          <br />+ Exchange the full routing table at startup and send{" "}
          <strong>partial* triggered updates</strong> thereafter (not full
          updates like distance-vector protocols) and the triggered updates are
          only sent to routers that need the information. This behavior is
          different from the link-state protocol in which an update will be sent
          to all the link-state routers within that area. For example, EIGRP
          will send updates when a new link comes up or a link becoming
          unavailable
          <br />+ <strong>Supports multiple protocols</strong>: EIGRP can
          exchange routes for IPv4, IPv6, AppleTalk and IPX/SPX networks
          <br />+ <strong>Load balancing</strong>: EIGRP supports unequal metric
          load balancing, which allows administrators to better distribute
          traffic flow in their networks.
        </p>
        <p>
          * Notice: The term “partial” means that the update only includes
          information about the route changes.
        </p>
        <p>
          <span id="more-380" />
        </p>
        <p>{/*adsense*/}</p>
        <p>
          EIGRP use metrics composed of bandwidth, delay, reliability, and load.
          By default, EIGRP uses only bandwidth and delay.
        </p>
        <p>EIGRP use five types of packets to communicate:</p>
        <p>
          + <strong>Hello:</strong> used to identify neighbors. They are sent as
          periodic multicasts
          <br />+ <strong>Update:</strong> used to advertise routes, only sent
          as multicasts when something is changed
          <br />+ <strong>Ack:</strong> acknowledges receipt of an update. In
          fact, Ack is Hello packet without data. It is always unicast and uses
          UDP.
          <br />+ <strong>Query:</strong> used to find alternate paths when all
          paths to a destination have failed
          <br />+ <strong>Reply:</strong> is sent in response to query packets
          to instruct the originator not to recompute the route because feasible
          successors exist. Reply packets are always unicast to the originator
          of the query
        </p>
        <p>
          EIGRP sends every Query and Reply message using RTP, so every message
          is acknowledged using an EIGRP ACK message.
        </p>
        <p>
          <strong>EIGRP Route Discovery</strong>
        </p>
        <p>
          Suppose that our network has 2 routers and they are configured to use
          EIGRP. Let’s see what will happen when they are turned on.
        </p>
        <p>
          Firstly, the router will try to establish a neighboring relationships
          by sending “Hello” packets to others running EIGRP. The destination IP
          address is 224.0.0.10 which is the multicast address of EIGRP. By this
          way, other routers running EIGRP will receive and proceed these
          multicast packets. These packets are sent over TCP.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_initial_route_discovery.jpg"
            alt="EIGRP_initial_route_discovery.jpg"
            width={340}
            height={230}
            border={0}
          />
        </p>
        <p>
          After hearing “Hello” from R1, R2 will respond with another “Hello”
          packet.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_initial_route_discovery_2.jpg"
            alt="EIGRP_initial_route_discovery_2.jpg"
            width={340}
            height={230}
            border={0}
          />
        </p>
        <p style={{ textAlign: "left" }}>
          R2 will also send its routing table to R1 by “Update” packets.
          Remember that R2 will send its complete routing table for the first
          time.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_initial_route_discovery_3.jpg"
            alt="EIGRP_initial_route_discovery_3.jpg"
            width={340}
            height={230}
            border={0}
          />
        </p>
        <p>
          R1 confirms it has received the Update packet by an “ACK” message.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_initial_route_discovery_4.jpg"
            alt="EIGRP_initial_route_discovery_4.jpg"
            width={340}
            height={230}
            border={0}
          />
        </p>
        <p>
          R1 will also send to R2 all of its routing table for the first time
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_initial_route_discovery_5.jpg"
            alt="EIGRP_initial_route_discovery_5.jpg"
            width={340}
            height={230}
            border={0}
          />
        </p>
        <p style={{ textAlign: "left" }}>
          R2 sends a message saying it has received R1’s routing table.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/EIGRP/EIGRP_initial_route_discovery_6.jpg"
            alt="EIGRP_initial_route_discovery_6.jpg"
            width={340}
            height={230}
            border={0}
          />
        </p>
        <p>
          Now both R1 &amp; R2 learn all the paths of the neighbor and the{" "}
          <strong>network is converged</strong>. But there are some notices you
          should know:
          <br />
          + After the network converged, “Hello” messages will still be sent to
          indicate that the it is still alive.
          <br />
          + When something in the network changes, routers will only send
          partial updates to routers which need that information.
          <br />
          + Hellos are sent as periodic multicasts and are not acknowledged
          directly.
          <br />+ The first hellos are used to build a list of neighbors;
          thereafter, hellos indicate that the neighbor is still alive
        </p>
        <p>
          To become a neighbor, the following conditions must be met:
          <br />
          + The router must hear a Hello packet from a neighbor. <br />
          + The EIGRP autonomous system must be the same.
          <br />+ K-values must be the same.
        </p>
        <p>
          EIGRP builds and maintains three tables: <br />
          + Neighbor table: lists directly connected routers running EIGRP with
          which this router has an adjacency
          <br />
          + Topology table: lists all routes learned from each EIGRP neighbor
          <br />+ Routing table: lists all best routes from the EIGRP topology
          table and other routing processes
        </p>
        <p>
          <strong>Configuring EIGRP </strong>
        </p>
        <table border={1}>
          <tbody>
            <tr>
              <td valign="top">
                Router(config)#<strong>router eigrp 1</strong>
              </td>
              <td>
                <p>
                  Syntax:{" "}
                  <strong>
                    router eigrp &lt;AS number&gt;
                    <br />
                  </strong>
                </p>
                <p>Turn on the EIGRP process</p>
                <p>
                  1 is the Autonomous System (AS) number. It can be from 1 to
                  65535.
                </p>
                <p>
                  All routers in the same network must use the same AS number.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                Router(config-router)#<strong>network 192.168.1.0 </strong>
              </td>
              <td>
                <p>
                  Router will turn on EIGRP 1 process on all the interfaces
                  belonging to 192.168.1.0/24 network.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          In the next part we will learn about the Feasible Distance &amp;
          Administrative Distance of EIGRP
        </p>
        <p>{/*adsense*/}</p>
        <p></p>
      </div>

      {/* Accordion */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12 mb-12"
      >
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default EigrpTutorial;
