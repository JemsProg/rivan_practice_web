import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">
          Virtual Local Area Network VLAN Tutorial
        </h1>
      </div>

      {/* Content */}
      <div>
        <p>
          <strong>VLAN Introduction</strong>
        </p>
        <p>
          “A virtual LAN (VLAN) is a group of networking devices in the same
          broadcast domain”
        </p>
        <p>
          It is the concept of VLAN that most of the books are using but it
          doesn’t help us understand the benefits of VLANs. If you ask “What is
          a LAN?” you will receive the same answer: it is also a group of
          networking devices in the same broadcast domain!
        </p>
        <p>
          To make it clearer, I expanded the above statement into a bit longer
          statement :)
        </p>
        <p>
          “A virtual LAN (VLAN) is a group of networking devices in the same
          broadcast domain, logically”
        </p>
        <p>
          It means that the devices in the same VLAN may be widely separated in
          the network, both by geography and location. VLANs logically segment
          the network into different broadcast domains so that packets are only
          switched between ports that are designated for the same VLAN.
        </p>
        <p>
          Let’s take an example to understand the benefits of VLAN. Suppose you
          are working in a big company with many departments, some of them are
          SALES and TECHNICAL departments. You are tasked to separate these
          departments so that each of them can only access specific resources in
          the company.
        </p>
        <p>
          This task is really easy, you think. To complete this task, you just
          need to use different networks for these departments and use
          access-list to allow/deny that network to a specific resource. For
          example, you assign network 192.168.1.0/24 for SALES and
          192.168.2.0/24 for TECH. At the “Company router” you apply an
          access-list to filter traffic from these networks. Below is the
          topology of your network without VLANs:
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VLAN/VLAN_need.jpg"
            alt="VLAN_need.jpg"
            width={570}
            height={200}
          />
        </p>
        <p>{/*adsense*/}</p>
        <p>
          <span id="more-711" />
        </p>
        <p>
          Everything looks good and you implement this design to your company.
          But after one month you receive many complaints from both your
          colleagues and leaders.
        </p>
        <p>
          + First, your department leaders need to access to additional private
          resources which employees are not allowed. <br />+ Second, the company
          has just recruited some new SALES employees but now the SALES room is
          full so they have to sit at the 1st floor (in the TECH area). They
          want to access to SALES resources but they can only access to the TECH
          resources because they are connecting to TECH switch.
        </p>
        <p>
          To solve the first problem maybe you will create a new and more
          powerful network for your leaders. But notice that each leader sits at
          different floor so you will need to link all of them to a switch -&gt;
          what a mess!
        </p>
        <p>
          The second problem is more difficult than the first one. Maybe you
          have to create another network at the TECH area and apply the same
          policy as the SALES department for these hosts -&gt; another mess in
          management!
        </p>
        <p>
          Maybe you will be glad to know VLAN can solve all these problems. VLAN
          helps you group users together according to their function rather than
          their physical location. This means you can use the same network for
          hosts in different floors (of course they can communicate with each
          other).
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VLAN/VLAN_problem_solved.jpg"
            alt="VLAN_problem_solved.jpg"
            width={555}
            height={220}
          />
        </p>
        <p>In this design:</p>
        <p>
          + you can logically create a new network with additional permissions
          for your leaders (LEADER network) by adding another VLAN.
          <br />
          + employees can sit anywhere to access the resources in their
          departments, provided that you allow them to do so.
          <br />+ computers in the same department can communicate with each
          other although they are at different floors.
        </p>
        <p>{/*adsense#MiddleContent*/}</p>
        <p>
          If these departments expand in the future you can still use the same
          network in any other floor. For example, SALES needs to have 40 more
          employees -&gt; you can use 4th floor for this expansion without
          changing the current network.
        </p>
        <p>
          But wait… maybe you recognize something strange in the above design?
          How can 2 computers connecting to 2 different switches communicate? If
          one computer sends a broadcast packet will it be flooded to other
          departments as switch doesn’t break up broadcast domains?
          <br className="spacer_" />
        </p>
        <p>
          The answer is “Yes, they can!” and it is the beauty of VLAN. Hosts in
          the same VLAN can communicate normally even they are connecting to 2
          or more different switches. This makes the management much more
          simple.
        </p>
        <p>
          Although layer 2 switches can only break up collision domains but
          VLANs can be used to break up broadcast domains. So if a computer in
          SALES broadcasts, only computers in SALES will receive that frame.
        </p>
        <p>
          So we don’t need a router, right? The answer is “we still need a
          router” to enable different VLANs to communicate with each other.
          Without a router, the computers within each VLAN can communicate with
          each other but not with any other computers in another VLAN. For
          example, we need a router to transfer file from LEADER to TECH. This
          is called “interVLAN routing”.
        </p>
        <p>
          When using VLANs in networks that have multiple interconnected
          switches, you need to use{" "}
          <strong>VLAN trunking between the switches</strong>. With VLAN
          trunking, the switches tag each frame sent between switches so that
          the receiving switch knows which VLAN the frame belongs to. This tag
          is known as a VLAN ID. A VLAN ID is a number which is used to identify
          a VLAN.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VLAN/VLAN_ID.jpg"
            alt="VLAN_ID.jpg"
            width={420}
            height={135}
          />
        </p>
        <p>
          Notice that the tag is only added and removed by the switches when
          frames are sent out on the trunk links. Hosts don’t know about this
          tag because it is added on the first switch and removed on the last
          switch. The picture below describes the process of a frame sent from
          PC A to PC B.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VLAN/VLAN_tag_added_removed.jpg"
            alt="VLAN_tag_added_removed.jpg"
            width={550}
            height={260}
          />
        </p>
        <p>
          Note: Trunk link does not belong to a specific VLAN, rather it is a
          conduit for VLANs between switches and routers.
        </p>
        <p>
          To allow interVLAN routing you need to configure{" "}
          <strong>trunking on the link between router and switch</strong>.
        </p>
        <p>Therefore in our example we need to configure 3 links as “trunk”.</p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VLAN/VLAN_problem_trunking.jpg"
            alt="VLAN_problem_trunking.jpg"
            width={555}
            height={220}
          />
          <br className="spacer_" />
        </p>
        <p>
          Cisco switches support two different trunking protocols,{" "}
          <strong>Inter-Switch Link (ISL)</strong> and{" "}
          <strong>IEEE 802.1q</strong>. Cisco created ISL before the IEEE
          standardized trunking protocol. Because ISL is Cisco proprietary, it
          can be used only between two Cisco switches -&gt; 802.1q is usually
          used in practical.
        </p>
        <p>
          In 802.1q encapsulation, there is a concept called native VLAN that
          was created for backward compatibility with old devices that don’t
          support VLANs. Native VLAN works as follows:
        </p>
        <p>
          + Frame belonging to the native VLAN is not tagged when sent out on
          the trunk links
          <br />+ Frame received untagged on the trunk link is set to the native
          VLAN.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VLAN/VLAN_native_VLAN.jpg"
            alt="VLAN_native_VLAN.jpg"
            width={550}
            height={260}
          />
        </p>
        <p>
          So if an old switch doesn’t support VLAN it can still “understand”
          that frame and continue sending it (without dropping it).
        </p>
        <p>
          Every port belongs to at least one VLAN. If a switch receives untagged
          frames on a trunkport, they are assumed to be part of the native vlan.
          By default, VLAN 1 is the default and native VLAN but this can be
          changed on a per port basis by configuration.
        </p>
        <p>{/*adsense*/}</p>
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

export default VlanTutorial;
