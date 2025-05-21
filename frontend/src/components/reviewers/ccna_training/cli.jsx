import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const Cli = () => {
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
          Cisco Command Line Interface CLI
        </h1>
      </div>

      {/* Content */}
      <div>
        <p>
          In the previous tutorial we learned about the{" "}
          <a
            href="https://www.9tut.com/cisco-router-boot-sequence-tutorial"
            target="_blank"
            rel="noopener"
          >
            boot sequence of a Cisco router/switch
          </a>
          . After that, the router will allow us to type commands but in
          different modes we can only used specific commands. So in this
          tutorial we will learn about the Command Line Interface (CLI) and
          different modes in a Cisco router/switch.
        </p>
        <p>Below lists popular modes in Cisco switch/router:</p>
        <table border={1}>
          <tbody>
            <tr>
              <td>Router&gt;</td>
              <td>User mode</td>
            </tr>
            <tr>
              <td>Router#</td>
              <td>Privileged mode (Exec mode)</td>
            </tr>
            <tr>
              <td>Router(config)#</td>
              <td>Configuration mode</td>
            </tr>
            <tr>
              <td>Router(config-if)#</td>
              <td>Interface level (within configuration mode)</td>
            </tr>
            <tr>
              <td>Router(config-router)#</td>
              <td>Routing engine level (within configuration mode)</td>
            </tr>
            <tr>
              <td>Router(config-line)#</td>
              <td>Line level (vty, tty, async) within configuration mode</td>
            </tr>
          </tbody>
        </table>
        <p>Now let’s discuss each mode in more detail</p>
        <p>{/*adsense*/}</p>
        <p>
          <span id="more-1024" />
        </p>
        <p>
          <span className="blueandbold">User mode (Unprivileged mode)</span>
          <br />
          In most case this is the mode you will see on the screen after
          connecting to it. This mode provides limited access to the router. You
          are provided with a set of nondestructive commands that allow
          examination of certain router configuration parameters (mostly to view
          statistics). You cannot, however, make any changes to the router
          configuration. The default privilege level of this mode is 1.
        </p>
        <p>
          <span className="blueandbold">Privileged mode</span>
          <br />
          Also known as the Enabled mode or Exec mode, this mode allows greater
          examination of the router and provides a more robust command set than
          the User mode. In Privileged mode, you have access to the
          configuration commands supplied in the Global Configuration mode,
          meaning you can edit the configuration for the router. The default
          privilege level of this mode is 15 (the highest privilege level).
        </p>
        <p>
          <span className="blueandbold">Configuration mode</span>
          <br />
          Also called the Global Configuration mode, this mode is entered from
          the Privileged mode and supplies the complete command set for
          configuring the router. In this mode you can access interface level,
          routing engine level, line level…
        </p>
        <p className="blueandbold">Interface level</p>
        <p>
          In some books, this level is also referred as “interface configuration
          mode” or “interface mode”. In fact, it is a level inside Configuration
          mode (or sub-mode of Configuration mode) so you can see the
          “configuration” part in its prompt (config-if). This level can be
          accessed by typing a specific interface in Configuration mode. For
          example:
        </p>
        <p>
          <strong>
            Router(config)#interface fa0/0
            <br />
            Router(config-if)#
          </strong>
        </p>
        <p>
          But notice that the prompt doesn’t give you information about which
          interface is being configured so be careful with this level while you
          are configuring! This lack of information can make you configure wrong
          interface easily!
        </p>
        <p className="blueandbold">Routing engine level</p>
        <p>
          This is the level where we configure dynamic routing protocols (RIP,
          OSPF, EIGRP…). You will learn about them later in CCNA.
        </p>
        <p className="blueandbold">Line level</p>
        <p>
          In this level we can configure Telnet, Console, AUX port parameters.
          Also notice that the prompt (config-line) is used for all “lines” on
          the router so you must be careful about which line you are
          configuring!
        </p>
        <p>
          Note: The “line” here can be a physical Console port or a virtual
          connection like Telnet.
        </p>
        <p>
          The image below shows how to access each mode and popular levels
          inside Configuration mode:
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/CLI/popular_modes.jpg"
            alt="popular_modes.jpg"
            width={410}
            height={160}
          />
        </p>
        <p>
          Learning about modes is not difficult and you will get familiar with
          them while configuring routers &amp; switches. Just pay a little
          attention to them each time you practice and surely you can grasp them
          easily.
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

export default Cli;
