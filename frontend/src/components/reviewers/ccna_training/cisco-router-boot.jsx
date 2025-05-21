import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const CiscoRouterBootSequence = () => {
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
          Cisco Router Boot Sequence Tutorial
        </h1>
      </div>

      {/* Content */}
      <div>
        <p>
          In this article we will learn about the main components of a Cisco
          router and how the boot process takes place.
        </p>
        <p>
          <span className="blueandbold">Types of memory</span>
        </p>
        <p>
          Generally Cisco routers (and switches) contain four types of memory:
        </p>
        <p>
          <strong>Read-Only Memory</strong> (ROM): ROM stores the router’s
          bootstrap startup program, operating system software, and power-on
          diagnostic test programs (POST).
        </p>
        <p>
          <strong>Flash Memory</strong>: Generally referred to simply as
          “flash”, the IOS images are held here. Flash is erasable and
          reprogrammable ROM. Flash memory content is retained by the router on
          reload.
        </p>
        <p>
          <strong>Random-Access Memory </strong>(RAM): Stores operational
          information such as routing tables and the running configuration file.
          RAM contents are lost when the router is powered down or reloaded.
        </p>
        <p>
          <strong>Non-volatile RAM</strong> (NVRAM): NVRAM holds the router’s
          startup configuration file. NVRAM contents are not lost when the
          router is powered down or reloaded.
        </p>
        <p>{/*adsense*/}</p>
        <p>
          <span id="more-1013" />
        </p>
        <p>Some comparisons to help you remember easier:</p>
        <p>
          + RAM is a volatile memory so contents are lost on reload, where NVRAM
          and Flash contents are not.
          <br /> + NVRAM holds the startup configuration file, where RAM holds
          the running configuration file.
          <br /> + ROM contains a bootstrap program called ROM Monitor (or
          ROMmon). When a router is powered on, the bootstrap runs a hardware
          diagnostic called POST (Power-On Self Test).
        </p>
        <p>
          <span className="blueandbold">Router boot process</span>
        </p>
        <p>
          <strong>The following details the router boot process:</strong>
          <br /> 1. The router is powered on.
          <br /> 2. The router first runs Power-On Self Test (POST)
          <br /> 3. The bootstrap checks the Configuration Register value to
          specify where to load the IOS. By default (the default value of
          Configuration Register is 2102, in hexadecimal), the router first
          looks for “boot system” commands in startup-config file. If it finds
          these commands, it will run boot system commands in order they appear
          in startup-config to locate the IOS. If not, the IOS image is loaded
          from Flash . If the IOS is not found in Flash, the bootstrap can try
          to load the IOS from TFTP server or from ROM (mini-IOS).
          <br /> 4. After the IOS is found, it is loaded into RAM.
          <br /> 5. The IOS attempts to load the configuration file
          (startup-config) from NVRAM to RAM. If the startup-config is not found
          in NVRAM, the IOS attempts to load a configuration file from TFTP. If
          no TFTP server responds, the router enters Setup Mode (Initial
          Configuration Mode).
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Boot_Sequence/Cisco_Boot_Sequence.jpg"
            alt="Cisco_Boot_Sequence.jpg"
            width={446}
            height={520}
          />
        </p>
        <p>
          And this is the process we can see on our screen when the router is
          turned on:
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Boot_Sequence/Cisco_router_boot_process.jpg"
            alt="Cisco_router_boot_process.jpg"
            width={580}
            height={902}
          />
        </p>
        <p>In short, when powered on the router needs to do:</p>
        <p>
          1. Run <span style={{ textDecoration: "underline" }}>POST</span> to
          check hardware
          <br /> 2. Search for a{" "}
          <span style={{ textDecoration: "underline" }}>valid IOS</span> (the
          Operating System of the router)
          <br /> 3. Search for a{" "}
          <span style={{ textDecoration: "underline" }}>
            configuration file
          </span>{" "}
          (all the configurations applied to this router)
        </p>
        <p>
          <span className="blueandbold">
            Specify how much RAM, NVRAM and Flash of a router
            <br />{" "}
          </span>
        </p>
        <p>
          Also, from the information shown above, we can learn some information
          about router’s model, RAM, Flash, NVRAM memories as shown below:
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Boot_Sequence/RAM_ROM_Flash_memory.jpg"
            alt="RAM_ROM_Flash_memory.jpg"
            width={565}
            height={189}
          />
        </p>
        <p>Note: The “show version” command also gives us this information.</p>
        <p>
          All the above information is straight-forwarding except the
          information of RAM. In some series of routers, the RAM information is
          displayed by 2 parameters (in this case 60416K/5120K). The first
          parameter indicates how much RAM is in the router while the second
          parameter (5120K) indicates how much DRAM is being used for Packet
          memory. Packet memory is used for buffering packets.
        </p>
        <p>So, from the output above we can learn:</p>
        <p>
          Amount of RAM: 60416 + 5120 = 65536KB / 1024 = 64MB
          <br /> Amount of NVRAM: 239KB
          <br /> Amount of Flash: 62720KB
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

export default CiscoRouterBootSequence;
