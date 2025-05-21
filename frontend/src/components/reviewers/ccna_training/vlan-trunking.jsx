import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const VlanTrunking = () => {
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
          VLAN Trunking Protocol VTP Tutorial
        </h1>
      </div>

      {/* Content */}
      <div>
        <p>
          This topic describes the features that VLAN Trunking Protocol (VTP)
          offers to support VLANs. To help you understand the basic concept,
          this is a summary of what VTP is:
        </p>
        <p>
          <strong>
            “VTP allows a network manager to configure a switch so that it will
            propagate VLAN configurations to other switches in the network”
          </strong>
        </p>
        <p>
          VTP minimizes misconfigurations and configuration inconsistencies that
          can cause problems, such as duplicate VLAN names or incorrect
          VLAN-type specifications. VTP helps you simplify management of the
          VLAN database across multiple switches.
        </p>
        <p>
          VTP is a Cisco-proprietary protocol and is available on most of the
          Cisco switches.
        </p>
        <p>
          <span className="blueandbold">
            <strong>Why we need VTP?</strong>
          </span>
        </p>
        <p>
          To answer this question, let’s discuss a real and popular network
          topology.
        </p>
        <p>
          Suppose you are working in a medium company in a 5-floor office. You
          assigned each floor to a switch for easy management and of course they
          can be assigned to different VLANs. For example, your bosses can sit
          in any floor and still access Manage VLAN (VLAN 7). Your technical
          colleagues can sit anywhere on the floors to access Technical VLAN
          (VLAN 4). This is the best design because each person’s permission is
          not limited by the physical location.
        </p>
        <p>&nbsp;</p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VTP/VTP_building_needed.jpg"
            alt="VTP_building_needed.jpg"
            width={550}
            height={370}
          />
        </p>
        <p>
          <span id="more-697" />
        </p>
        <p>{/*adsense*/}</p>
        <p>
          Now let’s discuss about VTP role in this topology! Suppose VTP is not
          running on these switches. One day, your boss decides to add a new
          department to your office, the Support Department, and you are tasked
          to add a new SUPPORT VLAN for this department. How will you do that?
          Well, without VTP you have to go to each switch to enable this new
          VLAN. Fortunately your office only has 5 floors so you can finish this
          task in some hours :)
        </p>
        <p>
          But just imagine if your company was bigger with 100-floor office and
          some VLANs needed to be added every month! Well, it will surely become
          a daunting task to add a new VLAN like this. Luckily, Cisco always
          “thinks big” to create a method for you to just sit at the “Main Sw”,
          adding your new VLANs and magically, other switches automatically
          learn about this VLAN, sweet, right? It is not a dream, it is what VTP
          does for you!
        </p>
        <p>
          <span className="blueandbold">
            <strong>How VTP Works</strong>
          </span>
        </p>
        <p>
          To make switches exchange their VLAN information with each other, they
          need to be configured in the same <strong>VTP domain</strong>. Only
          switches belonging to the same domain share their VLAN information.
          When a change is made to the VLAN database, it is propagated to all
          switches via <strong>VTP advertisements</strong>.
        </p>
        <p>
          To maintain domain consistency, only one switch should be allowed to
          create (or delete, modify) new VLANs. This switch is like the “master”
          of the whole VTP domain and it is operated in{" "}
          <strong>Server mode</strong>. This is also the default mode.
        </p>
        <p>
          Other switches are only allowed to receive and forward updates from
          the “server” switch. They are operated in <strong>Client mode</strong>
          . Switches in this mode cannot create, delete or modify VLANs.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VTP/VTP_modes.jpg"
            alt="VTP_modes.jpg"
            width={460}
            height={210}
          />
        </p>
        <p>
          In some cases, the network manager doesn’t want a switch to learn VTP
          information from other switches. He can set it to{" "}
          <strong>Transparent mode</strong>. In this mode, a switch maintains
          its own VLAN database and never learn any VTP information from other
          switches (even from the switch in VTP server mode). However, it still
          forwards VTP advertisements from the server to other switches (but
          doesn’t read that advertisement). A transparent switch can add, delete
          and modify VLAN database locally.
        </p>
        <p>
          <img
            decoding="async"
            className="aligncenter"
            title
            src="https://www.9tut.com/images/ccna_self_study/VTP/VTP_Transparent_Client_Modes.jpg"
            alt="VTP_Transparent_Client_Modes.jpg"
            width={534}
            height={163}
          />
        </p>
        <p>
          Now return to the example above, we can configure any switches as the
          “server” but for our convenience, the “Main Sw” should be assigned
          this function and we should place it in a safe place.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VTP/VTP_modes_assigned.jpg"
            alt="VTP_modes_assigned.jpg"
            width={380}
            height={370}
          />
        </p>
        <p style={{ textAlign: "left" }}>
          As said above, VTP advertisements bring VLAN information to all the
          switches in a VTP domain. Each VTP advertisement is sent with a{" "}
          <strong>Revision number</strong>. This number is used in order to
          determine whether the VTP advertisement is more recent than the
          current version of that switch. Because each time you make a VLAN
          change in a switch, the configuration revision is incremented by one.
          So the higher the revision number, the better your VTP advertisement.
        </p>
        <p style={{ textAlign: "left" }}>
          For example, the first time the Main Sw sends a VTP advertisement, its
          Revision number is 1. When you add a new VLAN to the Main Sw, it will
          send a VTP advertisement with the Revision number of 2. Client
          switches first receive the VTP advertisement with the Revision number
          of 1, which is bigger than its current Revision number (0) so it
          updates its VLAN database. Next it receives the VTP advertisement with
          the Revision number of 2, it continues comparing with its current
          Revision number (1) -&gt; it continues update its VLAN database.
        </p>
        <p>{/*adsense#MiddleContent*/}</p>
        <p style={{ textAlign: "left" }}>
          One important thing you must know is when a switch receives a better
          VTP advertisement, it deletes its whole VTP information and copy the
          new information from the better VTP advertisement to its VLAN
          database. A switch does not try to compare its own VLAN database with
          information from the received VTP advertisements to find out and
          update the difference!
        </p>
        <p style={{ textAlign: "left" }}>
          Note: VTP advertisements are sent as multicast frames and all
          neighbors in that domain receive the frames.
        </p>
        <p>
          <span className="blueandbold">
            <strong>The “show vtp status” command analysis</strong>
          </span>
        </p>
        <p>
          The most important command to view the status of VTP on Cisco switches
          that each CCNA learners must grasp is the “show vtp status” command.
          Let’s have a look at the output of this command:
        </p>
        <p>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VTP/show%20vtp%20status.jpg"
            alt="show vtp status.jpg "
          />
        </p>
        <p>
          + <strong>VTP Version</strong>: displays the VTP version the switch is
          running. By default, the switch runs version 1 but can be set to
          version 2. Within a domain, the two VTP versions are not interoperable
          so make sure to configure the same VTP version on every switch in a
          domain.
          <br />+ <strong>Configuration Revision</strong>: current Revision
          number on this switch.
          <br />+ <strong>Maximum VLANs Supported Locally</strong>: maximum
          number of VLANs supported locally.
          <br />+ <strong>Number of Existing VLANs</strong>: Number of existing
          VLANs.
          <br />+ <strong>VTP Operating Mode</strong>: can be server, client, or
          transparent.
          <br />+ <strong>VTP Domain Name</strong>: name that identifies the
          administrative domain for the switch.
        </p>
        <p>
          By default, a switch operates in VTP Server mode with a NULL (blank)
          domain name with no password configured (the password field is not
          listed in the output)
        </p>
        <p>
          + <strong>VTP Pruning Mode</strong>: displays whether pruning is
          enabled or disabled. We will discuss about VTP Pruning later.
          <br />+ <strong>VTP V2 Mode</strong>: displays if VTP version 2 mode
          is enabled. VTP version 2 is disabled by default.
          <br />+ <strong>VTP Traps Generation</strong>: displays whether VTP
          traps are sent to a network management station.
          <br />+ <strong>MD5 Digest</strong>: a 16-byte checksum of the VTP
          configuration.
          <br />+ <strong>Configuration Last Modified</strong>: date and time of
          the last configuration modification. Displays the IP address of the
          switch that caused the configuration change to the database.
        </p>
        <p>
          <span className="blueandbold">
            <strong>VTP Configuration</strong>
          </span>
        </p>
        <p>
          <strong>
            Main Sw(config)#vtp version 2<br />
            Main Sw(config)#vtp domain 9tut
            <br />
            Main Sw(config)#vtp mode server
            <br />
            Main Sw(config)#vtp password keepitsecret
          </strong>
        </p>
        <p>On client switches</p>
        <p>
          <strong>
            Client(config)#vtp version 2<br />
            Client(config)#vtp domain 9tut
            <br />
            Client(config)#vtp password keepitsecret
            <br />
            Client(config)#vtp mode client
          </strong>
        </p>
        <p>
          Notice: Before configuring VTP make sure the links between your
          switches are trunk links. Your trunk link can automatically be formed
          if both of your switches are not 2960 or 3560 because ports on the
          2960 and 3560 switches are set to dynamic auto by default. If both
          sides are set to dynamic auto, the link will remain in access mode. To
          configure trunk between these ports, use these commands:
        </p>
        <p>
          <strong>Client(config)#interface fa0/1</strong> (or the interface on
          the link you want to be trunk)
          <br />
          <strong>Client(config-if)#switchport mode trunk</strong>
        </p>
        <p>
          These commands only need to be used on one of two switches to form the
          trunk.
        </p>
        <p>
          <span className="blueandbold">
            <strong>VTP Pruning</strong>
          </span>
        </p>
        <p>To understand what VTP Pruning is, let’s see an example:</p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VTP/VTP_Pruning_example.jpg"
            alt="VTP_Pruning_example.jpg"
            width={500}
            height={340}
          />
        </p>
        <p>
          When PC A sends a broadcast frame on VLAN 10, it travels across all
          trunk links in the VTP domain. Switches Server, Sw2, and Sw3 all
          receive broadcast frames from PC A. But only Sw3 has user on VLAN 10
          and it is a waste of bandwidth on Sw2. Moreover, that broadcast
          traffic also consumes processor time on Sw2. The link between switches
          Server and Sw2 does not carry any VLAN 10 traffic so it can be
          “pruned”.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/VTP/VTP_Pruning_Enabled.jpg"
            alt="VTP_Pruning_Enabled.jpg"
            width={500}
            height={340}
          />
        </p>
        <p>
          VTP Pruning makes more efficient use of trunk bandwidth by forwarding
          broadcast and unknown unicast frames on a VLAN only if the switch on
          the receiving end of the trunk has ports in that VLAN. In the above
          example, Server switch doesn’t send broadcast frame to Sw2 because Sw2
          doesn’t have ports in VLAN 10.
        </p>
        <p>
          When a switch has a port associated with a VLAN, the switch sends an
          advertisement to its neighbors to inform that it has active ports on
          that VLAN. For example, Sw3 sends an advertisement to Server switch to
          inform that it has active port for VLAN 10. Sw2 has not advertised
          about VLAN 10 so Server switch will prune VLAN 10 on the trunk to Sw2.
        </p>
        <p>
          You only need to enable pruning on one VTP server switch in the
          domain. To enable VTP pruning, we only need to use one command (on the
          VTP server):
        </p>
        <p>
          <strong>Server(config)# vtp pruning</strong>
        </p>
        <p>
          <span className="blueandbold">
            <strong>Important notes about VTP</strong>
          </span>
        </p>
        <p>
          + Whenever a change occurs in the VLAN database, the VTP server
          increments its configuration revision number and then advertises the
          new revision throughout the VTP domain via VTP advertisements.
          <br />+ VTP operates in one of three modes: server, transparent, or
          client.
        </p>
        <p>VTP modes:</p>
        <p>
          * Server: The default mode. When you make a change to the VLAN
          configuration on a VTP server, the change is propagated to all
          switches in the VTP domain. VTP messages are transmitted out of all
          the trunk connections. In Server mode we can create, modify, delete
          VLANs.
        </p>
        <p>
          * Client: cannot make changes to the VLAN configuration when in this
          mode; however, a VTP client can send any VLANs currently listed in its
          database to other VTP switches. VTP client also forwards VTP
          advertisements (but cannot create VTP advertisements).
        </p>
        <p>
          * Transparent: When you make a change to the VLAN configuration in
          this mode, the change affects only the local switch and does not
          propagate to other switches in the VTP domain. VTP transparent mode
          does forward VTP advertisements that it receives within the domain.
        </p>
        <p>
          VTP Pruning makes more efficient use of trunk bandwidth by forwarding
          broadcast and unknown unicast frames on a VLAN only if the switch on
          the receiving end of the trunk has ports in that VLAN.
        </p>
        <p>
          For more information about VTP, I highly recommend you to visit the
          official tutorial about VTP published by Cisco. It is very
          comprehensive:{" "}
          <a
            href="http://www.cisco.com/warp/public/473/vtp_flash/"
            target="_blank"
            rel="noopener"
          >
            http://www.cisco.com/warp/public/473/vtp_flash/
          </a>
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

export default VlanTrunking;
