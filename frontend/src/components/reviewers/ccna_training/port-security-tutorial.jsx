import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const PortSecurityTutorial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll("[data-animate]");
    els.forEach((el, i) => {
      el.classList.add(
        "opacity-0",
        "translate-y-[30px]",
        "will-change-transform"
      );
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: "ease-in-out" }
        )
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed"
    >
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-6">Port Security Tutorial</h1>
      </div>

      {/* Content */}
      <div
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="space-y-6"
      >
        <p>
          By default, all interfaces on a Cisco switch are in an enabled state,
          meaning that anyone can potentially connect to your network through a
          wall socket, posing a security risk. Port Security is a feature that
          enhances the security of Cisco switches by controlling access to
          Ethernet ports based on the MAC addresses of connected devices.
        </p>

        <p>
          Port Security allows network administrators to associate only specific
          MAC addresses or set a maximum number of MAC addresses with each
          switch port. This association restricts access to the interface,
          ensuring that only authorized devices with recognized MAC addresses
          can use it. If an unauthorized device attempts to connect, you can
          configure the switch to take predefined actions, such as discarding
          the incoming traffic, sending a warning message or shutting down the
          port to mitigate the security threat.
        </p>

        <p>
          In the figure below, only host with MAC address of AAA (just for
          example. In fact the MAC address must be 48 bits) was configured to
          connect to the switch port while other MAC addresses are blocked:
        </p>

        <div className="flex justify-center my-6">
          <img
            fetchPriority="high"
            decoding="async"
            className="rounded-lg shadow-md border border-gray-200"
            src="https://www.9tut.com/images/ccna_self_study/Port_Security/Port_Security_Topo.jpg"
            alt="Port security topology diagram"
            width="484"
            height="379"
          />
        </div>

        <h2 className="text-xl font-semibold text-[#0D2153]-600 mt-8 mb-4">
          Configuring port security
        </h2>

        <p>
          There are three steps to configure port security on a Cisco switch:
        </p>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Configure the switch port as an access port using the &ldquo;
            <strong>switchport mode access</strong>&rdquo; command.
          </li>
          <li>
            Activate port security on the switch port with the &ldquo;
            <strong>switchport port-security</strong>&rdquo; command.
          </li>
          <li>
            Specify the permitted MAC addresses for sending frames through the
            interface. This can be done by utilizing either the &ldquo;
            <strong>switchport port-security mac-address</strong>{" "}
            {<em>MAC_Address</em>}&rdquo; command or, for dynamic MAC address
            learning, the &ldquo;
            <strong>switchport port-security mac address sticky</strong>&rdquo;
            command while the host is connected. An example of the configuration
            is shown below:
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-3 text-sm">
              Switch(config)#interface e0/1 Switch(config-if)#switchport mode
              access Switch(config-if)#switchport port-security
              Switch(config-if)#switchport port-security mac-address
              aaaa.aaaa.aaaa
            </pre>
            This is the minimum configuration to activate port-security.
          </li>
        </ol>

        <p>
          To verify the port-security configuration on an interface, we can use
          the &ldquo;show port-security interface {<em>interface</em>}&rdquo;
          command:
        </p>

        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
          Switch#<strong>show port-security interface Ethernet0/0</strong>
          Port Security : Enabled
          <strong>Port Status</strong> : <strong>Secure-up</strong>
          Violation Mode : Shutdown Aging Time : 0 mins Aging Type : Absolute
          SecureStatic Address Aging : Disabled Maximum MAC Addresses : 1 Total
          MAC Addresses : 1 Configured MAC Addresses : 0 Sticky MAC Addresses :
          1<strong>Last Source Address</strong>:Vlan : AAAA.AAAA.AAAA:1 Security
          Violation Count : 0
        </pre>

        <p>There are two optional steps for more control of this feature:</p>

        <ol className="list-decimal pl-6 space-y-3">
          <li>
            Specify the action the switch should take when it receives a frame
            from an unauthorized device using the &ldquo;
            <strong>switchport port-security violation</strong>{" "}
            {"{protect/restrict/shutdown}"}&rdquo; command.
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Protect</strong>: drops the packets with an unknown
                source MAC address. It will not make log entry for dropped
                packets. Interface will learn MAC address until it reaches the
                maximum allowed number of MAC address that was configured. Any
                additionally learned addresses would be dropped while keeping
                interface operational.
              </li>
              <li>
                <strong>Restrict</strong>: drops the packets with unknown source
                MAC addresses. It then causes the <em>SecurityViolation</em>{" "}
                counter to increase and generate a security violation alert.
              </li>
              <li>
                <strong>Shutdown</strong>: causes the interface to enter an
                error-disabled state (same as down state) immediately. It then
                sends an SNMP trap notification. The switchport will remain in
                this state until manually removed. This is the default violation
                mode.
              </li>
            </ul>
            <p className="mt-3">
              All three options result in discarding traffic from the
              unauthorized device. Both the &ldquo;restrict&rdquo; and
              &ldquo;shutdown&rdquo; options also generate log messages when a
              violation occurs, with the &ldquo;shutdown&rdquo; mode
              additionally disabling the port.
            </p>
          </li>
          <li>
            Set the maximum allowable number of MAC addresses that can be used
            on the port using the &ldquo;
            <strong>switchport port-security maximum</strong> {<em>number</em>}
            &rdquo; interface command. The default number of MAC addresses
            allowed is 1 so if we connect another host to the same port, the
            security violation will occur and the port is put into err-disabled
            state:
            <p className="mt-3">
              First we will receive an error message like this when we try to
              connect another host (with MAC 0090.ab0e.4582) to this port
              (through another switch or hub):
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
              %PM-4-ERR_DISABLE: psecure-violation error detected on Et0/0,
              putting Et0/0 in err-disable state
              %PORT_SECURITY-2-PSECURE_VIOLATION: Security violation occurred,
              caused by MAC address 0090.ab0e.4582 on port Ethernet0/0.
              %LINEPROTO-5-UPDOWN: Line protocol on Interface Ethernet0/0,
              changed state to down %LINK-3-UPDOWN: Interface Ethernet0/0,
              changed state to down
            </pre>
            <p className="mt-3">
              Then we can check this port to see it is in err-disabled state:
            </p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
              Switch#<strong>show interfaces Ethernet0/0</strong>
              Ethernet0/0 is down, line protocol is down (
              <strong>err-disabled</strong>)
            </pre>
            <p className="mt-3">
              Err-disabled state is same as &ldquo;shutdown&rdquo; state. But it
              means the security violation occurred on this port.
            </p>
            <p className="mt-3">Also the port-security on this port:</p>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2 text-sm">
              Switch#<strong>show port-security interface Et0/0</strong>
              Port Security : Enabled
              <strong>Port Status</strong> : <strong>Secure-shutdown</strong>
              Violation Mode : Shutdown Aging Time : 0 mins Aging Type :
              Absolute SecureStatic Address Aging : Disabled Maximum MAC
              Addresses : 1 Total MAC Addresses : 1 Configured MAC Addresses : 1
              Sticky MAC Addresses : 0 Last Source Address:Vlan :
              0090.ab0e.4582:1 Security Violation Count : 1
            </pre>
            <p className="mt-3">
              The line &ldquo;Port Status: Secure-shutdown&rdquo; means that
              this port has been shut down because of port-security. We can
              reactivate this port by using the &ldquo;shutdown&rdquo; and
              &ldquo;no shutdown&rdquo; commands.
            </p>
          </li>
        </ol>

        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">
          Summary
        </h2>

        <p>
          Port security is a good feature in Cisco devices for securing access
          to your network through a switch. By following the steps outlined in
          this tutorial, you can configure, manage, and troubleshoot port
          security to enhance the security of your network and prevent
          unauthorized access.
        </p>
      </div>

      {/* Accordion */}
       <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default PortSecurityTutorial;
