import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const IpConnectivitySim = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll("[data-animate]");
    elements.forEach((el, i) =>
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
      <div>
        <h1>IPv4 and IPv6 Connectivity Sim</h1>
        <div className="content">
          <p>
            <strong>Guidelines</strong>
          </p>
          <p>
            This is a lab item in which tasks will be performed on virtual
            devices.
            <br />+ Refer to the <strong>Tasks</strong> tab to view the tasks
            for this lab item.
            <br />+ Refer to the <strong>Topology</strong> tab to access the
            device console(s) and perform the tasks.
            <br />
            + Console access is available for all required devices by clicking
            the device icon or using the tab(s) above the console window.
            <br />
            + All necessary preconfigurations have been applied.
            <br />
            + Do not change the enable password or hostname for any device.
            <br />+ <strong>Save your configurations</strong> to NVRAM before
            moving to the next item.
            <br />+ Click <strong>Next</strong> at the bottom of the screen to
            submit this lab and move to the next question.
            <br />+ When <strong>Next</strong> is clicked, the lab closes and
            cannot be reopened.
          </p>
          <p>
            <strong>Topology</strong>
          </p>
          <p>
            <img
              decoding="async"
              className="aligncenter"
              src="https://www.9tut.com/images/ccna/labsim/IPv4_IPv6_Connectivity_Sim/IPv4_IPv6_topology.jpg"
              alt="IPv4_IPv6_topology.jpg"
              width={320}
              height={108}
            />
          </p>
          <p>
            <strong>Tasks</strong>
          </p>
          <p>
            Configure IPv4 and IPv6 connectivity between two routers. For IPv4,
            use a /28 network from the 192.168.180.0/24 private range. For IPv6,
            use the first /64 subnet from the 2001:0db8:acca::/48 subnet.
          </p>
          <p>
            1. Using Ethernet0/1 on routers R1 and R2, configure the next usable
            /28 from the 192.168.180.0/24 range. The network 192.168.180.0/28 is
            unavailable.
            <br />
            2. For the IPv4 /28 subnet, router R1 must be configured with the{" "}
            <strong>first</strong> usable host address.
            <br />
            3. For the IPv4 /28 subnet, router R2 must be configured with the{" "}
            <strong>last</strong> usable host address.
            <br />
            4. For the IPv6 /64 subnet, configure the routers with the IP
            addressing provided from the topology.
            <br />
            5. A ping must work between the routers on the IPv4 and IPv6 address
            ranges.
          </p>
          <p>
            <span className="ccnaexplanation">Solution</span>
          </p>
          <table
            style={{ borderCollapse: "collapse", backgroundColor: "#befac5" }}
            border={1}
          >
            <tbody>
              <tr>
                <td style={{ width: "100%" }}>
                  <p>
                    You can practice this sim with our own online simulator or
                    Packet Tracer file at:
                    <br />+{" "}
                    <a
                      href="https://www.9tut.com/interactive_labs/premium/IPv4_and_IPv6_Connectivity_Sim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IPv4 and IPv6 Connectivity Online Simulator
                    </a>
                    <br />+{" "}
                    <a
                      href="https://www.9tut.com/lab_files/IPv4_and_IPv6_Connectivity_Sim.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Packet Tracer file
                    </a>
                    . Please open it with Packet Tracer v8.1.1.0022 or newer.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Task 1 + Task 2 + Task 3</strong>
          </p>
          <p>
            The network 192.168.180.0/28 is unavailable so the next subnet is
            192.168.180.16/28 (increment: 16). This subnet ranges from
            192.168.180.16 to 192.168.180.31.
          </p>
          <p>
            Therefore the <strong>first</strong> usable host address is
            192.168.180.<strong>17</strong>/28 and the <strong>last</strong>{" "}
            usable host address is 192.168.180.<strong>30</strong>/28. We will
            them for two E0/1 interfaces:
          </p>
          <pre>
            R1(config)#interface e0/1{"\n"}R1(config-if)#ip address
            192.168.180.17 255.255.255.240{"\n"}R1(config-if)#no shut{"\n"}
            {"\n"}R2(config)#interface e0/1{"\n"}R2(config-if)#ip address
            192.168.180.30 255.255.255.240{"\n"}R2(config-if)#no shut
          </pre>
          <p>
            <strong>Task 4. </strong>For the IPv6 /64 subnet, configure the
            routers with the IP addressing provided from the topology.
            <strong>
              <br />
            </strong>
          </p>
          <p>
            Note: IPv6 routing has been configured so we don’t need to do it.
          </p>
          <p>On R1:</p>
          <pre>
            R1(config)#interface e0/1{"\n"}R1(config-if)#ipv6 address
            2001:db8:acca::1/64
          </pre>
          <p>On R2:</p>
          <pre>
            R2(config)#interface e0/1{"\n"}R2(config-if)#ipv6 address
            2001:db8:acca::2/64
          </pre>
          <p>
            <strong>Task 5. </strong>A ping must work between the routers on the
            IPv4 and IPv6 address ranges.
            <strong>
              <br />
            </strong>
          </p>
          <pre>
            R1#ping 192.168.180.30{"\n"}.!!!!{"\n"}R1#ping ipv6 2001:db8:acca::2
            {"\n"}!!!!!
          </pre>
          <p>
            <strong>Save the configuration</strong>
          </p>
          <pre>R1,R2#copy running-config startup-config</pre>
          <div className="fixed" />
        </div>
      </div>

      {/* Accordion */}
      <div data-animate className="mt-12 transform opacity-0 translate-y-8">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default IpConnectivitySim;
