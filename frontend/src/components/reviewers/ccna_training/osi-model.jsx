import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const OsiModel = () => {
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
        OSI Model Tutorial
        </h1>
      </div>

      {/* Content */}
      <div>
        <p>
          Welcome to the most basic tutorial for networker! Understanding about
          OSI model is one of the most important tools to help you grasp how
          networking devices like router, switch, PC… work.
        </p>
        <p>
          Let’s take an example in our real life to demonstrate the OSI model.
          Maybe you have ever sent a mail to your friend, right? To do it, you
          have to follow these steps:
        </p>
        <p>
          1. Write your letter
          <br /> 2. Insert it into an envelope
          <br /> 3. Write information about sender and receiver on that envelope
          <br /> 4. Stamp it
          <br /> 5. Go to the post office and drop it into a mail inbox
        </p>
        <p>
          From the example above, I want to imply we have to go through some
          steps in a specific order to complete a task. It is also applied for
          two PCs to communicate with each other. They have to use a predefined
          model, named OSI, to complete each step. There are 7 steps in this
          model as listed below:
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/OSI/OSI_Model.jpg"
            alt="OSI_Model.jpg"
            width={190}
            height={290}
          />
        </p>
        <p>
          This is also the well-known table of the OSI model so you must take
          time to learn by heart. A popular way to remember this table is to
          create a fun sentence with the first letters of each layer. For
          example: <strong>A</strong>ll <strong>P</strong>eople{" "}
          <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed{" "}
          <strong>D</strong>ata <strong>P</strong>rocessing or a more funny
          sentence sorted from layer 1 to layer 7: <strong>P</strong>lease{" "}
          <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow{" "}
          <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way.
        </p>
        <p>
          <span id="more-912" />
        </p>
        <p>{/*adsense*/}</p>
        <p>There are two notices about this table:</p>
        <p>
          1. First, the table is arranged from top to bottom (numbering from 7
          to 1). Each step is called a “layer” so we have 7 layers (maybe we
          usually call them “layers” to make them more… technical ^^).
        </p>
        <p>
          When a device wants to send information to another one, its data must
          go from top to bottom layer. But when a device receives this
          information, it must go from bottom to top to “decapsulate” it. In
          fact, the reverse action at the other end is very natural in our life.
          It is very similar when two people communicate via mail. First, the
          writer must write the letter, insert it into an envelope while the
          receiver must first open the envelope and then read the mail. The
          picture below shows the whole process of sending and receiving
          information.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/OSI/OSI_Model_sending_receiving.jpg"
            alt="OSI_Model_sending_receiving.jpg"
            width={470}
            height={470}
          />
        </p>
        <p>
          Note: The OSI model layers are often referred to by number than by
          name (for example, we refer saying “layer 3” to “network layer”) so
          you should learn the number of each layer as well.
        </p>
        <p>
          2. When the information goes down through layers (from top to bottom),
          a header is added to it. This is called “encapsulation” because it is
          like wrapping an object in a capsule. Each header can be understood
          only by the corresponding layer at the receiving side. Other layers
          only see that layer’s header as a part of data.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/OSI/OSI_Model_headers_added.jpg"
            alt="OSI_Model_headers_added.jpg"
            width={340}
            height={390}
          />
        </p>
        <p>
          At the receiving side, corresponding header is stripped off in the
          same layer it was attached. This process is called “decapsulation”.
        </p>
        <p className="blueandbold">Understand each layer</p>
        <p>
          <strong>
            Layer 7 – Application layer
            <br />{" "}
          </strong>
        </p>
        <p>
          This is the closest layer to the end user. It provides the interface
          between the applications we use and the underlying layers. But notice
          that the programs you are using (like a web browser – IE, Firefox or
          Opera…) do not belong to Application layer. Telnet, FTP, email client
          (SMTP), HyperText Transfer Protocol (HTTP) are examples of Application
          layer.
        </p>
        <p>
          <strong>Layer 6 – Presentation layer</strong>
        </p>
        <p>
          This layer ensures the presentation of data, that the communications
          passing through are in the appropriate form for the recipient. In
          general, it acts as a translator of the network. For example, you want
          to send an email and the Presentation will format your data into email
          format. Or you want to send photos to your friend, the Presentation
          layer will format your data into GIF, JPG or PNG… format.
        </p>
        <p>
          <strong>Layer 5 – Session layer</strong>
        </p>
        <p>
          Layer 5 establishes, maintains and ends communication with the
          receiving device.
        </p>
        <p>
          <strong>Layer 4 – Transport layer</strong>
        </p>
        <p>
          This layer maintains flow control of data and provides for error
          checking and recovery of data between the devices. The most common
          example of Transport layer is Transmission Control Protocol (TCP) and
          User Datagram Protocol (UDP).
        </p>
        <p>
          <strong>Layer 3 – Network layer</strong>
        </p>
        <p>
          This layer provides logical addresses which routers will use to
          determine the path to the destination. In most cases, the logic
          addresses here means the IP addresses (including source &amp;
          destination IP addresses).
        </p>
        <p>
          <strong>Layer 2 – Data Link Layer</strong>
        </p>
        <p>
          The Data Link layer formats the message into a <em>data frame</em>,
          and adds a header containing the hardware destination and source
          address to it. This header is responsible for finding the next
          destination device on a local network.
        </p>
        <p>
          Notice that layer 3 is responsible for finding the path to the last
          destination (network) but it doesn’t care about who will be the next
          receiver. It is the Layer 2 that helps data to reach the next
          destination.
        </p>
        <p>
          This layer is subdivide into 2 sub-layers: logical link control (LLC)
          and media access control (MAC).
        </p>
        <p>
          The LLC functions include:
          <br /> + Managing frames to upper and lower layers
          <br /> + Error Control
          <br /> + Flow control
        </p>
        <p>
          The MAC sublayer carries the physical address of each device on the
          network. This address is more commonly called a device’s MAC address.
          MAC address is a 48 bits address which is burned into the NIC card on
          the device by its manufacturer.
        </p>
        <p>
          <strong>Layer 1 – Physical layer</strong>
        </p>
        <p>
          The Physical Layer defines the physical characteristics of the network
          such as connections, voltage levels and timing.
        </p>
        <p>{/*adsense#MiddleContent*/}</p>
        <p>
          To help you remember the functions of each layer more easily, I
          created a fun story in which Henry (English) wants to send a document
          to Charles (French) to demonstrate how the OSI model works.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            loading="lazy"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/OSI/OSI_7_layers_fun.jpg"
            alt="OSI_7_layers_fun.jpg"
            width={750}
            height={1055}
          />
        </p>
        <p>&nbsp;</p>
        <p>
          Lastly, I summarize all the important functions of each layer in the
          table below (please remember them, they are very important knowledge
          you need to know about OSI model):
        </p>
        <table border={1}>
          <tbody>
            <tr style={{ backgroundColor: "#33ff66" }}>
              <td>
                <strong>Layer</strong>
              </td>
              <td>
                <strong>Description</strong>
              </td>
              <td>
                <strong>Popular Protocols</strong>
              </td>
              <td>
                <strong>Protocol Data Unit</strong>
              </td>
              <td>
                <strong>Devices operate in this layer</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Application</strong>
              </td>
              <td>+ User interface</td>
              <td>HTTP, FTP, TFTP, Telnet, SNMP, DNS…</td>
              <td>Data</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <strong>Presentation</strong>
              </td>
              <td>+ Data representation, encryption &amp; decryption</td>
              <td>
                <p>
                  + Video (WMV, AVI…)
                  <br /> + Bitmap (JPG, BMP, PNG…)
                  <br /> + Audio (WAV, MP3, WMA…)
                  <br /> ….
                </p>
              </td>
              <td>Data</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <strong>Session</strong>
              </td>
              <td>+ Set up, monitor &amp; terminate the connection session</td>
              <td>+ SQL, RPC, NETBIOS names…</td>
              <td>Data</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <strong>Transport</strong>
              </td>
              <td>
                + Flow control (Buffering, Windowing, Congestion Avoidance)
                helps prevent the loss of segments on the network and the need
                for retransmission
              </td>
              <td>
                + TCP (Connection-Oriented, reliable)
                <br /> + UDP (Connectionless, unreliable)
              </td>
              <td>Segment</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>
                <strong>Network</strong>
              </td>
              <td>
                + Path determination
                <br /> + Source &amp; Destination logical addresses
              </td>
              <td>
                + IP
                <br /> + IPX
                <br /> + AppleTalk
              </td>
              <td>Packet/Datagram</td>
              <td>Router</td>
            </tr>
            <tr>
              <td>
                <strong>Data Link</strong>
              </td>
              <td>
                <p>+ Physical addresses</p>
                <p>
                  Includes 2 layers:
                  <br /> + Upper layer: Logical Link Control (LLC)
                  <br /> + Lower layer: Media Access Control (MAC)
                </p>
              </td>
              <td>
                + LAN
                <br /> + WAN (HDLC, PPP, Frame Relay…)
              </td>
              <td>Frame</td>
              <td>Switch, Bridge</td>
            </tr>
            <tr>
              <td>
                <strong>Physical</strong>
              </td>
              <td>
                <p>Encodes and transmits data bits</p>
                <p>
                  + Electric signals
                  <br /> + Radio signals
                </p>
              </td>
              <td>+ FDDI, Ethernet</td>
              <td>Bit (0, 1)</td>
              <td>Hub, Repeater…</td>
            </tr>
          </tbody>
        </table>
        <p>
          Note: In fact, OSI is just a theoretical model of networking. The
          practical model used in modern networks is the TCP/IP model. You may
          think “Hm, it’s just theoretic and has no use in real life! I don’t
          care!” but believe me, you will use this model more often than the
          TCP/IP model so take time to grasp it, you will not regret – I promise
          :)
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

export default OsiModel;
