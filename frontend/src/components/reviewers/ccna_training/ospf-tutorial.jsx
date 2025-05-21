import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const OspfTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">OSPF Tutorial</h1>
      </div>

      {/* Content */}
      <div>
        <p>In this article we will learn about the OSPF Routing Protocol</p>
        <p>
          Open-Shortest-Path-First (OSPF) is the most widely used interior
          gateway protocol routing protocol on the world because it is a public
          (non-proprietary) routing protocol while its biggest rival, EIGRP, is
          a Cisco proprietary protocol so other vendors can’t use it (edit:
          EIGRP has become a public routing protocol since 2013). OSPF is a
          complex link-state routing protocol. Link-state routing protocols
          generate routing updates only when a change occurs in the network
          topology. When a link changes state, the device that detected the
          change creates a link-state advertisement (LSA) concerning that link
          and sends to all neighboring devices using a special multicast
          address. Each routing device takes a copy of the LSA, updates its
          link-state database (LSDB), and forwards the LSA to all neighboring
          devices.
        </p>
        <p>Note:</p>
        <p>
          + OSPF routers use LSA (Link State Advertisement)to describe its link
          state. LSDB stores all LSAs.
        </p>
        <p>
          + A router uses Router LSA to describe its interface IP addresses.
        </p>
        <p>
          + After OSPF is started on a router, it creates LSDB that contains one
          entry: this router’s Router LSA.
        </p>
        <p>There are five types of OSPF Link-State Packets (LSPs).</p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            style={{ border: "0px none currentColor" }}
            src="https://www.9tut.com/images/ccna_self_study/OSPF/OSPF_example.jpg"
            alt="OSPF_example.jpg"
            width={440}
            height={300}
          />
        </p>
        <p>
          <span id="more-374" />
        </p>
        <p>{/*adsense*/}</p>
        <p>
          + <strong>Hello</strong>: are used to establish and maintain adjacency
          with other OSPF routers. They are also used to elect the Designated
          Router (DR) and Backup Designated Router (BDR) on multiaccess networks
          (like Ethernet or Frame Relay).
        </p>
        <p>
          + <strong>Database Description</strong> (DBD or DD): contains an
          abbreviated list of the sending router’s link-state database and is
          used by receiving routers to check against the local link-state
          database
        </p>
        <p>
          + <strong>Link-State Request</strong> (LSR): used by receiving routers
          to request more information about any entry in the DBD
        </p>
        <p>
          + <strong>Link-State Update</strong> (LSU): used to reply to LSRs as
          well as to announce new information. LSUs contain seven different
          types of Link-State Advertisements (LSAs)
        </p>
        <p>
          + <strong>Link-State Acknowledgement</strong> (LSAck): sent to confirm
          receipt of an LSU message
        </p>
        <table style={{ borderCollapse: "collapse" }} border={1}>
          <tbody>
            <tr>
              <td style={{ width: "100%" }}>
                <p>Key points</p>
                <p>+ Is a public (non-proprietary) routing protocol.</p>
                <p>
                  + Is the only link-state routing protocol you learn in CCNA
                </p>
                <p>+ This works by using the Dijkstra algorithm</p>
                <p>
                  + Information about its neighbors (local connectivity) is sent
                  to the entire network using multicasting
                </p>
                <p>
                  + Routing information is shared through Link-state updates
                  (LSAs)
                </p>
                <p>
                  + HELLO messages are used to maintain adjacent neighbors. By
                  default, OSPF routers send Hello packets every 10 seconds on
                  multiaccess and point-to-point segments and every 30 seconds
                  on non-broadcast multiaccess (NBMA) segments (like Frame
                  Relay, X.25, ATM).
                </p>
                <p>
                  + Is a classless routing protocol because it does not assume
                  the default subnet masks are used. It sends the subnet mask in
                  the routing update.
                </p>
                <p>+ Supports VLSM and route summarization</p>
                <p>
                  + Uses COST as a metric which CISCO defines as the inverse of
                  the bandwidth
                </p>
                <p>
                  + Uses AREAs to subdivide large networks, providing a
                  hierarchical structure and limit the multicast LSAs within
                  routers of the same area — Area 0 is called{" "}
                  <strong>backbone area</strong> and all other areas connect
                  directly to it. All OSPF networks must have a backbone area
                </p>
                <p>
                  + Only support IP but it’s not bad as we are all using IP,
                  right? :)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Area Border Routers (ABR) are any routers that have one interface in
          one area and another interface in another area
        </p>
        <p>Let’s see an example of OSPF</p>
        <p>
          Suppose OSPF has just been enabled on R1 &amp; R2. Both R1 and R2 are
          very eager to discover if they have any neighbors nearby but before
          sending Hello messages they must first choose an OSPF router
          identifier (router-id) to tell their neighbors who they are. The
          Router ID (RID) is an IP address used to identify the router and is
          chosen using the following sequence:
        </p>
        <p>
          + The highest IP address assigned to a loopback (logical) interface.
        </p>
        <p>
          + If a loopback interface is not defined, the highest IP address of
          all active router’s physical interfaces will be chosen.
        </p>
        <p>+ The router ID can be manually assigned</p>
        <p>
          In this example, suppose R1 has 2 loopback interfaces &amp; 2 physical
          interfaces:
        </p>
        <p>+ Loopback 0: 10.0.0.1</p>
        <p>+ Loopback 1: 12.0.0.1</p>
        <p>+ Fa0/0: 192.168.1.1</p>
        <p>+ Fa0/1: 200.200.200.1</p>
        <p>
          As said above, the loopback interfaces are preferred to physical
          interfaces (because they are never down) so the highest IP address of
          the loopback interfaces is chosen as the router-id -&gt; Loopback 1 IP
          address is chosen as the router-id.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/OSPF/OSPF_choose_router_id.jpg"
            alt="OSPF_choose_router_id.jpg"
            width={340}
            height={280}
            border={0}
          />
        </p>
        <p>
          Suppose R1 doesn’t have any loopback interfaces but it has 2 physical
          interfaces:
        </p>
        <p>+ Fa0/0: 210.0.0.1 but it is shut down</p>
        <p>+ Fa0/1: 192.168.1.2 (is active)</p>
        <p>
          Although Fa0/0 has higher IP address but it is shutdown so R1 will
          choose Fa0/1 as its router-id.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/OSPF/OSPF_choose_router_id_2.jpg"
            alt="OSPF_choose_router_id_2.jpg"
            width={340}
            height={230}
            border={0}
          />
        </p>
        <p>
          Now both the routers have the router-id so they will send Hello
          packets on all OSPF-enabled interfaces to determine if there are any
          neighbors on those links. The information in the OSPF Hello includes
          the OSPF Router ID of the router sending the Hello packet.
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

export default OspfTutorial;
