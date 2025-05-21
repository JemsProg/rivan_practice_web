import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const EtherChannel = () => {
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
        <h1 className="text-3xl font-bold mb-6 text-[#0D2153]">
          EtherChannel Tutorial
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
          <p className="mb-4">
            EtherChannel is the technology which is used to combine several
            physical links between switches or routers into one logical connection
            and treat them as a single link. Let's take an example to see the
            benefits of this technology:
          </p>
          
          <p className="mb-4">
            Suppose your company has two switches connecting with each other via a FastEthernet link (100Mbps):
          </p>
          
          <div className="flex justify-center my-6">
            <img
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/EtherChannel/Switch_single_link.jpg"
              alt="Switch single link"
              width={324}
              height={42}
            />
          </div>
          
          <p className="mb-4">
            Your company is growing and you need to transfer more than 100 Mbps
            between these switches. If you only connect other links between the
            two switches it will not work because Spanning-tree protocol (STP)
            will block redundant links to prevent a loop:
          </p>
          
          <div className="flex justify-center my-6">
            <img
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/EtherChannel/Switch_STP_block.jpg"
              alt="Switch STP block"
              width={337}
              height={53}
            />
          </div>
          
          <p className="mb-4">
            To extend the capacity of the link you have two ways:
          </p>
          
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Buy two 1000Mbps (1Gbps) interfaces</li>
            <li>Use EtherChannel technology to bundle them into a bigger link</li>
          </ul>
          
          <p className="mb-4">
            The first solution is expensive with the new hardware installed on the two
            switches. By using EtherChannel you only need some more unused ports
            on your switches:
          </p>
          
          <div className="flex justify-center my-6">
            <img
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/EtherChannel/EtherChannel_Switch.jpg"
              alt="EtherChannel Switch"
              width={330}
              height={75}
            />
          </div>
          
          <p className="mb-4">
            EtherChannel bundles the physical links into one logical link with the
            combined bandwidth and it is awesome! STP sees this link as a single
            link so STP will not block any links! EtherChannel also does load
            balancing among the links in the channel automatically. If a link
            within the EtherChannel bundle fails, traffic previously carried over
            the failed link is carried over the remaining links within the
            EtherChannel. If one of the links in the channel fails but at least
            one of the links is up, the logical link (EtherChannel link) remains
            up.
          </p>
          
          <p className="mb-4">
            EtherChannel also works well for router connections:
          </p>
          
          <div className="flex justify-center my-6">
            <img
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-md"
              src="https://www.9tut.com/images/ccna_self_study/EtherChannel/EtherChannel_router.jpg"
              alt="EtherChannel router"
              width={286}
              height={76}
            />
          </div>
          
          <p className="mb-4">
            When an EtherChannel is created, a logical interface will be created
            on the switches or routers representing for that EtherChannel. You can
            configure this logical interface in the way you want. For example,
            assign access/trunk mode on switches or assign IP address for the
            logical interface on routers…
          </p>
        </div>

        <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
          <p className="mb-4">
            Note: A maximum of 8 Fast Ethernet or 8 Gigabit Ethernet ports can be
            grouped together when forming an EtherChannel. There are three
            mechanisms you can choose to configure EtherChannel:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Port Aggregation Protocol (PAgP)</li>
            <li>Link Aggregation Control Protocol (LACP)</li>
            <li>Static ("On")</li>
          </ul>
        </div>

        <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
          <p className="mb-4">
            <strong>LACP is the IEEE Standard</strong> (IEEE 802.3ad) and is the
            most common dynamic ether-channel protocol, whereas{" "}
            <strong>PAgP is a Cisco proprietary</strong> protocol and works only
            between supported vendors and Cisco devices. All ports in an
            EtherChannel must use the same protocol; you cannot run two protocols
            on two ends. In other words, PAgP and LACP are not compatible so both
            ends of a channel must use the same protocol.
          </p>
          
          <p className="mb-6">
            The Static Persistence (or "on" mode) bundles the links
            unconditionally and no negotiation protocol is used. In this mode,
            neither PAgP nor LACP packets are sent or received. (Reference:
            http://www.cisco.com/en/US/tech/tk389/tk213/technologies_tech_note09186a0080094714.shtml)
          </p>
          
          <p className="mb-6">
            Next we will learn more about the three EtherChannel mechanisms above.
          </p>
        </div>

        <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
          <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Port Aggregation Protocol (PAgP)</h2>
          <p className="mb-4">
            PAgP dynamically negotiates the formation of a channel. There are two
            PAgP modes:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Mode</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 font-medium">Auto</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    Responds to PAgP messages but does not aggressively negotiate a
                    PAgP EtherChannel. A channel is formed only if the port on the
                    other end is set to Desirable. This is the default mode.
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Desirable</td>
                  <td className="px-4 py-2">
                    Port actively negotiates channeling status with the interface on
                    the other end of the link. A channel is formed if the other side
                    is Auto or Desirable.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4">
            The table below lists if an EtherChannel will be formed or not for
            PAgP:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">PAgP</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Desirable</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Auto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 font-medium">Desirable</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-center">Yes</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Auto</td>
                  <td className="px-4 py-2 text-center">Yes</td>
                  <td className="px-4 py-2 text-center text-red-500">No</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
          <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Link Aggregation Protocol (LACP)</h2>
          <p className="mb-4">
            LACP also dynamically negotiates the formation of a channel. There are
            two LACP modes:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Mode</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 font-medium">Passive</td>
                  <td className="px-4 py-2 border-b border-gray-200">
                    Responds to LACP messages but does not aggressively negotiate a
                    LACP EtherChannel. A channel is forms only if the other end is
                    set to Active
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Active</td>
                  <td className="px-4 py-2">
                    Port actively negotiates channeling with the interface on the
                    other end of the link. A channel is formed if the other side is
                    Passive or Active
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4">
            The table below lists if an EtherChannel will be formed or not for
            LACP:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">LACP</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Active</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Passive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-gray-200 font-medium">Active</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-center">Yes</td>
                  <td className="px-4 py-2 border-b border-gray-200 text-center">Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Passive</td>
                  <td className="px-4 py-2 text-center">Yes</td>
                  <td className="px-4 py-2 text-center text-red-500">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-6">
            In general, <strong>Auto</strong> mode in PAgP is the same as{" "}
            <strong>Passive</strong> mode in LACP and <strong>Desirable</strong>{" "}
            mode is same as <strong>Active</strong> mode. Auto = Passive Desirable
            = Active
          </p>
        </div>

        <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
          <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Static ("On")</h2>
          <p className="mb-4">
            In this mode, no negotiation is needed. The interfaces become members
            of the EtherChannel immediately. When using this mode make sure the
            other end must use this mode too because they will not check if port
            parameters match. Otherwise the EtherChannel would not come up and may
            cause some troubles (like loop…).
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="font-semibold">Note:</p>
            <p>
              All interfaces in an EtherChannel must be configured identically to form an EtherChannel. Specific settings that must be identical include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Speed settings</li>
              <li>Duplex settings</li>
              <li>STP settings</li>
              <li>VLAN membership (for access ports)</li>
              <li>Native VLAN (for trunk ports)</li>
              <li>Allowed VLANs (for trunk ports)</li>
              <li>Trunking Encapsulation (ISL or 802.1Q, for trunk ports)</li>
            </ul>
          </div>
          
          <p className="mb-6">
            Note: EtherChannels will not form if either dynamic VLANs or port
            security are enabled on the participating EtherChannel interfaces. In
            the next part we will learn how to configure EtherChannel on
            switch/router interfaces.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="mt-12"
      >
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default EtherChannel;