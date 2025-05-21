import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const AccessListTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">Access List Tutorial</h1>
      </div>

      {/* Content */}
      <div>
        <p>In this tutorial we will learn about access list.</p>
        <p>
          Access control lists (ACLs) provide a means to filter packets by
          allowing a user to permit or deny IP packets from crossing specified
          interfaces. Just imagine you come to a fair and see the guardian
          checking tickets. He only allows people with suitable tickets to
          enter. Well, an access list’s function is same as that guardian.
        </p>
        <p>
          Access lists filter network traffic by controlling whether packets are
          forwarded or blocked at the router’s interfaces based on the criteria
          you specified within the access list.
        </p>
        <p>
          To use ACLs, the system administrator must first configure ACLs and
          then apply them to specific interfaces. There are 3 popular types of
          ACL: Standard, Extended and Named ACLs.
        </p>
        <p>
          <span id="more-458" />
        </p>
        <p>{/*adsense*/}</p>
        <p className="blueandbold">Standard IP Access List</p>
        <p>
          Standard IP lists (1-99) only check source addresses of all IP
          packets.
        </p>
        <p>
          <strong>Configuration Syntax</strong>
        </p>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <strong>access-list</strong> <em>access-list-number</em> {"{"}
                permit | deny{"}"} <em>source</em> {"{"}source-mask{"}"}
              </td>
            </tr>
          </tbody>
        </table>
        <p>Apply ACL to an interface</p>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <strong>ip access-group</strong> <em>access-list-number</em>{" "}
                {"{"}in | out{"}"}
              </td>
            </tr>
          </tbody>
        </table>
        <p>Example of Standard IP Access List</p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Access_list/Standard_ACL_Example1.jpg"
            alt="Standard_ACL_Example1.jpg"
            width={370}
            height={230}
          />
        </p>
        <p>Configuration:</p>
        <p>
          In this example we will define a standard access list that will only
          allow network 10.0.0.0/8 to access the server (located on the Fa0/1
          interface)
        </p>
        <p className="codesnippet">
          <strong>Define which source is allowed to pass:</strong>
        </p>
        <p>
          Router(config)#
          <span className="pinkandbold">
            access-list 1 permit 10.0.0.0 0.255.255.255
          </span>
        </p>
        <p>
          (there is always an implicit deny all other traffic at the end of each
          ACL so we don’t need to define forbidden traffic)
        </p>
        <p className="codesnippet">
          <strong>Apply this ACL to an interface:</strong>
        </p>
        <p>
          Router(config)#
          <span className="pinkandbold">
            interface Fa0/1
            <br />
          </span>
          Router(config-if)#
          <span className="pinkandbold">ip access-group 1 out</span>
        </p>
        <p>
          The ACL 1 is applied to permit only packets from 10.0.0.0/8 to go out
          of Fa0/1 interface while deny all other traffic. So can we apply this
          ACL to other interface, Fa0/2 for example? Well we can but shouldn’t
          do it because users can access to the server from other interface (s0
          interface, for example). So we can understand why an standard access
          list should be applied close to the destination.
        </p>
        <p>
          Note: The “0.255.255.255” is the wildcard mask part of network
          “10.0.0.0”. We will learn how to use wildcard mask later.
        </p>
        <p className="blueandbold">Extended IP Access List</p>
        <p>
          Extended IP lists (100-199) check both source and destination
          addresses, specific UDP/TCP/IP protocols, and destination ports.
        </p>
        <p>
          <strong>Configuration Syntax</strong>
        </p>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <strong>access-list</strong> <em>access-list-number</em> {"{"}
                permit | deny{"}"} <em>protocol</em> source {"{"}source-mask
                {"}"} destination {"{"}destination-mask{"}"} [eq
                destination-port]
              </td>
            </tr>
          </tbody>
        </table>
        <p>Example of Extended IP Access List</p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Access_list/Extended_ACL_Example1.jpg"
            alt="Extended_ACL_Example1.jpg"
            width={370}
            height={230}
          />
        </p>
        <p>
          In this example we will create an extended ACL that will deny FTP
          traffic from network 10.0.0.0/8 but allow other traffic to go through.
        </p>
        <p>Note: FTP uses TCP on port 20 &amp; 21.</p>
        <p className="codesnippet">
          <strong>
            Define which protocol, source, destination and port are denied:
          </strong>
        </p>
        <p>
          Router(config)#
          <span className="pinkandbold">
            access-list 101 deny tcp 10.0.0.0 0.255.255.255 187.100.1.6 0.0.0.0
            eq 21
          </span>
        </p>
        <p>
          Router(config)#
          <span className="pinkandbold">
            access-list 101 deny tcp 10.0.0.0 0.255.255.255 187.100.1.6 0.0.0.0
            eq 20
          </span>
        </p>
        <p>
          Router(config)#
          <span className="pinkandbold">access-list 101 permit ip any any</span>
        </p>
        <p className="codesnippet">
          <strong>Apply this ACL to an interface:</strong>
        </p>
        <p>
          Router(config)#
          <span className="pinkandbold">
            interface Fa0/1
            <br />
          </span>
          Router(config-if)#
          <span className="pinkandbold">ip access-group 101 out</span>
        </p>
        <p>
          Notice that we have to explicit allow other traffic (access-list 101
          permit ip any any) as there is an “deny all” command at the end of
          each ACL.
        </p>
        <p>
          As we can see, the destination of above access list is “187.100.1.6
          0.0.0.0” which specifies a host. We can use “host 187.100.1.6”
          instead. We will discuss wildcard mask later.
        </p>
        <p>
          In summary, below is the range of standard and extended access list
        </p>
        <table border={1}>
          <tbody>
            <tr>
              <td>
                <strong>Access list type</strong>
              </td>
              <td>
                <strong>Range</strong>
              </td>
            </tr>
            <tr>
              <td>Standard</td>
              <td>1-99, 1300-1999</td>
            </tr>
            <tr>
              <td>Extended</td>
              <td>100-199, 2000-2699</td>
            </tr>
          </tbody>
        </table>
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

export default AccessListTutorial;
