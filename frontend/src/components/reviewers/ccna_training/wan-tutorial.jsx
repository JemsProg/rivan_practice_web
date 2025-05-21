import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";
import FrameRelayTutorial from "./frame-relay";


const WanTutorial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) => {
      el.classList.add('opacity-0', 'translate-y-[30px]', 'will-change-transform');
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }}>
        <h1 className="text-3xl font-bold mb-6 text-gray-900">WAN Tutorial</h1>
      </div>

      {/* Content */}
      <div 
        data-animate
        style={{ opacity: 0, transform: "translateY(30px)" }}
        className="space-y-8"
      >
        <p>Unlike LAN which is used effectively in relatively small geographic areas, WAN services help connect networks at a broad geographic distance, from a few to thousands of kilometers. Let&rsquo;s see the network below, while LANs are used inside buildings like Home, Office, Internet Service Provider (ISP)&hellip; WANs are often used to connect between them. By the way, Internet is the largest WAN nowadays.</p>
        
        <div className="flex justify-center my-6">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/WAN/WAN_connections.jpg" 
            alt="WAN connections diagram" 
            width="427" 
            height="294"
          />
        </div>
        
        <p>Because of long distance connection, individuals usually do not own WAN (unlike LAN which they often own it). They do not have the rights to bury a long cable between buildings either. Therefore they hire available network service providers, such as ISPs, cable or telephone companies&hellip; in their cities instead. This helps reduce the connection cost very much.</p>
        
        <p><span id="more-2745"></span></p>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-200 my-6">
          <p className="font-medium text-blue-800">Note:</p>
          <p>Although we often think about serial connections with copper cables when talking about WAN but nowadays fiber optical cables play an important role in connection at both LAN and WAN. Great bandwidth, great distance, very little signal loss, high speed, security, thin&hellip; are very big advantages in the transmission so they are used more and more popular in networking.</p>
        </div>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">WAN Devices & Terminologies</h2>
        
        <p>WAN includes many devices and terminologies so you should grasp them. Below are the most popular ones:</p>
        
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Router</strong>: a device provides internetworking and WAN access interfaces that connect to the provider network</li>
          <li><strong>Data Terminal Equipment</strong> (DTE): Typically, DTE is the router (at the customer side)</li>
          <li><strong>Data Communications Equipment</strong> (DCE): provides a clocking signal used to synchronize data transmission between DCE and DTE devices.</li>
          <li><strong>Customer Premise Equipment</strong> (CPE): devices located at the customer side. CPE often owned by the customer or hired from the WAN provider. In the picture below, the router, LAN switch and two computers in the house are classified as CPE</li>
          <li><strong>Demarcation Point</strong>: the physical point where the public network ends and the private network of a customer begins</li>
          <li><strong>Local loop</strong>: A cable connects the CPE to the nearest exchange or Central Office (CO) of the service provider. In other words, it is the physical link that connects from the demarcation point to the edge of the service provider&rsquo;s network</li>
        </ul>
        
        <div className="flex justify-center my-6">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/WAN/Demarcation_point_local_loop.jpg" 
            alt="Demarcation point and local loop diagram" 
            width="550" 
            height="348"
          />
        </div>
        
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>CSU/DSU</strong>: short for Channel Service Unit/Data Service Unit, used on digital lines such as T1, T3 or E1. CSU/DSU provides clocking signal to the customer equipment interface and terminates the channelized transport media to a leased line. As a result, DSU/CSU converts one form of digital format to another digital format. Therefore CSU/DSU terminates a digital local loop. But you will not see CSU/DSU nowadays because most T1 or E1 interfaces on current routers integrate CSU/DSU capabilities
          </li>
          <li>
            <strong>Modem</strong>: short for <span className="underline">Mo</span>dulator/<span className="underline">Dem</span>odulator, a Modem is a hardware device that allows a computer to send and receive information over telephone lines by converting digital data into an analog signal used on phone lines, and vice versa. Modem terminates an analog local loop
          </li>
        </ul>
        
        <div className="flex justify-center my-6">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/WAN/Modem_WAN.jpg" 
            alt="Modem in WAN diagram" 
            width="550" 
            height="131"
          />
        </div>
        
        <h2 className="text-xl font-semibold text-[#0D2153] mt-8 mb-4">WAN Layer 2 Protocols</h2>
        
        <p>Two important WAN technologies common in enterprise networks today and will be discussed in our tutorial are: Leased lines (or point-to-point link) and Packet-Switching.</p>
        
        <div className="flex justify-center my-6">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/WAN/WAN_Encapsulations.jpg" 
            alt="WAN Encapsulations diagram" 
            width="474" 
            height="192"
          />
        </div>
        
        <h3 className="text-lg font-medium text-[#0D2153] mt-6 mb-3">Leased line</h3>
        
        <p>The two most popular WAN protocols used on leased lines are High-Level Data-Link Control (HDLC) and Point-to-Point Protocol (PPP).</p>
        
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>High-Level Data-Link Control</strong> (HDLC): a point-to-point protocol and it is the default WAN protocol for Cisco routers. Although HDLC is an open standard but each vendor has a proprietary field in their HDLC implementation which makes HDLC a proprietary protocol. Therefore running HDLC between routers from different vendors is not going to work.
          </li>
          <li>
            <strong>Point-to-Point Protocol</strong> (PPP): it is an open standard and a point-to-point protocol. This is the most popular WAN protocol nowadays used in Dial, xDSL, ISDN, Serial applications. PPP supports both synchronous (like analog phone lines) and asynchronous circuits (such as ISDN or digital links). PPP consists of two subprotocols:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><em>Link Control Protocol (LCP)</em>: set up the link and take care of authentication. After finishing setting up the link, it uses NCP.</li>
              <li><em>Network Control Protocol (NCP)</em>: negotiate optional configuration parameters and facilities for the network layer. In other words, it makes sure IP and other protocols can operate correctly on PPP link</li>
            </ul>
          </li>
        </ul>
        
        <p>PPP has built-in security mechanisms which are Password Authentication Protocol (PAP) and Challenge Handshake Authentication Protocol (CHAP). While PAP sends password in clear text, CHAP uses encrypted text (called a hash of the password) with a three-way handshake for authentication so CHAP is very secure.</p>
        
        <h3 className="text-lg font-medium text-[#0D2153] mt-6 mb-3">Packet-Switching</h3>
        
        <p>A big advantage of packet-switching over leased line services is we can connect many routers to the packet-switching service using a single serial link on each router. Each router can then communicate with all other routers. A popular type of packet-switching service that you need to grasp in CCNA is Frame-Relay. Asynchronous Transfer Mode (ATM) is another type of packet-switching service but it is out of CCNA scope and we will not discuss it in this tutorial.</p>
        
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Frame-Relay:</strong> a digital packet-switched service that can run only across synchronous digital connections. Because digital connections have very few errors, it does not perform any error correction or flow control. However, Frame Relay detects errors and drops bad frames. It is up to a higher layer protocol, such as TCP, to resend the dropped information. For more information about this protocol please read our <a href={FrameRelayTutorial} target="_blank" className="text-blue-600 hover:underline">Frame Relay tutorial</a>.
          </li>
        </ul>
        
        <p>All three protocols above operate at Layer 2 (Data Link Layer) of the OSI Model.</p>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default WanTutorial;