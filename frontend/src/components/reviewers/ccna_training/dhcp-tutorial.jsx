import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const DhcpTutorial = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!sectionRef.current) return;

    const els = sectionRef.current.querySelectorAll('[data-animate]');
    els.forEach((el, i) =>
      inView(el, () =>
        animate(
          el,
          { opacity: 1, y: 0 },
          { duration: 0.6, delay: i * 0.1, easing: 'ease-in-out' }
        )
      )
    );
  }, []);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      {/* Title */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }}>
        <h1 className="text-3xl font-bold mb-4">DHCP Tutorial</h1>
      </div>

      {/* Content */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="space-y-6">
        <p className="text-gray-700">
          In IP environment, before a computer can communicate to another one, they need to have their own IP addresses. There are two ways of configuring an IP address on a device:<br />
          <span className="ml-4 block">+ Statically assign an IP address. This means we manually type an IP address for this computer</span>
          <span className="ml-4 block">+ Use a protocol so that the computer can obtain its IP address automatically (dynamically). The most popular protocol nowadays to do this task is called <strong className="font-semibold text-[#0D2153]">Dynamic Host Configuration Protocol (DHCP)</strong> and we will learn about it in this tutorial.</span>
        </p>

        <p className="text-gray-700">
          A big advantage of using DHCP is the ability to join a network without knowing detail about it. For example you go to a coffee shop, with DHCP enabled on your computer, you can go online without doing anything. Next day you go online at your school and you don't have to configure anything either even though the networks of the coffee shop and your school are different (for example, the network of the coffee shop is 192.168.1.0/24 while that of your company is 10.0.0.0/8). Really nice, right? Without DHCP, you have to ask someone who knows about the networks at your location then manually choosing an IP address in that range. In bad situation, your chosen IP can be same as someone else who is also using that network and an address conflict may occur. So how can DHCP obtain an suitable IP address for you automatically? Let's find out.
        </p>

        <div className="flex justify-center my-6">
          <img 
            fetchpriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Advantages.jpg" 
            alt="DHCP Advantages" 
            width="464" 
            height="351"
          />
        </div>

        <h2 className="text-2xl font-bold text-[#0D2153] mt-8 mb-4">How DHCP works (DORA) </h2>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <p className="font-semibold mb-2">1. DHCP<strong>DISCOVER</strong></p>
          <p className="text-gray-700">
            When a client boots up for the first time (or try to join a new network), it needs to obtain an IP address to communicate. So it first transmits a <strong className="font-semibold">DHCPDISCOVER</strong> message on its local subnet. Because the client has no way of knowing the subnet to which it belongs, the DHCPDISCOVER is an all-subnets broadcast (destination IP address of 255.255.255.255, which is a layer 3 broadcast address) and a destination MAC address of FF-FF-FF-FF-FF-FF (which is a layer 2 broadcast address). The client does not have a configured IP address, so the source IP address of 0.0.0.0 is used. The purpose of DHCPDISCOVER message is to try to find out a DHCP Server (a server that can assign IP addresses).
          </p>
          <div className="flex justify-center my-4">
            <img 
              decoding="async" 
              className="rounded-lg shadow-sm border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Discover.jpg" 
              alt="DHCP Discover" 
              width="396" 
              height="177"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <p className="font-semibold mb-2">2. DHCP<strong>OFFER</strong></p>
          <p className="text-gray-700">
            After receiving the discover message, the DHCP Server will dynamically pick up an unassigned IP address from its IP pool and broadcast a <strong className="font-semibold">DHCPOFFER</strong> message to the client<sup>(*)</sup>. DHCPOFFER message could contain other information such as subnet mask, default gateway, IP address lease time, and domain name server (DNS).
          </p>
          <div className="flex justify-center my-4">
            <img 
              decoding="async" 
              className="rounded-lg shadow-sm border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Offer.jpg" 
              alt="DHCP Offer" 
              width="396" 
              height="177"
            />
          </div>
          <p className="text-sm text-gray-600 italic">
            <sup>(*)</sup><strong>Note:</strong> In fact, the DHCPOFFER is a layer 3 broadcast message (the IP destination is 255.255.255.255) but a layer 2 unicast message (the MAC destination is the MAC of the DHCP Client, not FF-FF-FF-FF-FF-FF). So in some books they may say it is a broadcast or unicast message.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <p className="font-semibold mb-2">3. DHCP<strong>REQUEST</strong></p>
          <p className="text-gray-700">
            If the client accepts the offer, it then broadcasts a <strong className="font-semibold">DHCPREQUEST</strong> message saying it will take this IP address. It is called request message because the client might deny the offer by requesting another IP address. Notice that DHCPREQUEST message is still a broadcast message because the DHCP client has still not received an acknowledged IP. Also a DHCP Client can receive DHCPOFFER messages from other DHCP Servers so sending broadcast DHCPREQUEST message is also a way to inform other offers have been rejected.
          </p>
          <div className="flex justify-center my-4">
            <img 
              loading="lazy" 
              decoding="async" 
              className="rounded-lg shadow-sm border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Request.jpg" 
              alt="DHCP Request" 
              width="396" 
              height="177"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <p className="font-semibold mb-2">4. DHCP<strong>ACKNOWLEDGEMENT</strong></p>
          <p className="text-gray-700">
            When the DHCP Server receives the DHCPREQUEST message from the client, the DHCP Server accepts the request by sending the client a unicast <strong className="font-semibold">DHCPACKNOWLEDGEMENT</strong> message (DHCPACK).
          </p>
          <div className="flex justify-center my-4">
            <img 
              loading="lazy" 
              decoding="async" 
              className="rounded-lg shadow-sm border border-gray-200" 
              src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Acknowledgement.jpg" 
              alt="DHCP Acknowledgement" 
              width="396" 
              height="177"
            />
          </div>
        </div>

        <p className="text-gray-700">
          In conclusion there are four messages sent between the DHCP Client and DHCP Server: DHCP<span className="underline"><strong>D</strong></span>ISCOVER, DHCP<span className="underline"><strong>O</strong></span>FFER, DHCP<span className="underline"><strong>R</strong></span>EQUEST and DHCP<span className="underline"><strong>A</strong></span>CKNOWLEDGEMENT. This process is often abbreviated as <strong className="font-semibold">DORA </strong>(for Discover, Offer, Request, Acknowledgement).
        </p>

        <p className="text-gray-700">
          After receiving DHCPACKNOWLEDGEMENT, the IP address is leased to the DHCP Client. A client will usually keep the same address by periodically contacting the DHCP server to renew the lease before the lease expires.
        </p>

        <p className="text-gray-700">
          If the DHCP Server is not on the same subnet with the DHCP Client, we need to configure the router on the DHCP client side to act as a DHCP Relay Agent so that it can forward DHCP messages between the DHCP Client & DHCP Server. To make a router a DHCP Relay Agent, simply put the "ip helper-address &lt;<em>IP-address-of-DHCP-Server</em>&gt;" command under the interface that receives the DHCP messages from the DHCP Client.
        </p>

        <div className="flex justify-center my-6">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg shadow-md border border-gray-200" 
            src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Relay_Agent.jpg" 
            alt="DHCP Relay Agent" 
            width="596" 
            height="177"
          />
        </div>

        <p className="text-gray-700">
          As we know, router does not forward broadcast packets (it drops them instead) so DHCP messages like DHCPDISCOVER message will be dropped. But with the "ip helper-address ..." command, the router will accept that broadcast message and cover it into a unicast packet and forward it to the DHCP Server. The destination IP address of the unicast packet is taken from the "ip helper-address ..." command.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-6">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-2">
                  <p className="text-gray-700">
                    Note: If there are other routers on the DHCP path then only the first Layer 3 interface that receives the DHCP request from the DHCP client needs the "ip helper-address ..." command. We do not need to configure this command on other routers in the path because only the first DHCP relay agent needs to convert the DHCPDISCOVER message from broadcast to unicast. Other routers between the relay agent and the DHCP server simply route the unicast packet normally.
                  </p>
                  <div className="flex justify-center my-4">
                    <img 
                      decoding="async" 
                      className="rounded-lg shadow-sm border border-gray-200" 
                      src="https://www.9tut.com/images/ccna_self_study/DHCP/DHCP_Relay_Agent_two_routers.jpg" 
                      alt="DHCP Relay Agent with two routers"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-[#0D2153] mt-8 mb-4">When a DHCP address conflict occurs</h2>

        <p className="text-gray-700">
          During the IP assignment process, the DHCP Server uses ping to test the availability of an IP before issuing it to the client. If no one replies then the DHCP Server believes that IP has not been allocated and it can safely assign that IP to a client. If someone answers the ping, the DHCP Server records a conflict, the address is then removed from the DHCP pool and it will not be assigned to a client until the administrator resolves the conflict manually.
        </p>

        <h2 className="text-2xl font-bold text-[#0D2153] mt-8 mb-4">Configure a DHCP Server on Cisco router</h2>

        <p className="text-gray-700">
          Instead of using a separate computer/server as a DHCP Server, we can save the cost and configure a Cisco router (even a Layer 3 Cisco switch) to work as a DHCP Server. The following example configuration will complete this task:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Configuration</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(config)#ip dhcp pool CLIENTS</td>
                <td className="border border-gray-300 px-4 py-2">Create a DHCP Pool named CLIENTS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(dhcp-config)#network 10.1.1.0 /24</td>
                <td className="border border-gray-300 px-4 py-2">Specifies the subnet and mask of the DHCP address pool</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(dhcp-config)#default-router 10.1.1.1</td>
                <td className="border border-gray-300 px-4 py-2">Set the default gateway of the DHCP Clients</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(dhcp-config)#dns-server 10.1.1.1</td>
                <td className="border border-gray-300 px-4 py-2">Configure a Domain Name Server (DNS)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(dhcp-config)#domain-name 9tut.com</td>
                <td className="border border-gray-300 px-4 py-2">Configure a domain-name</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(dhcp-config)#lease 0 12</td>
                <td className="border border-gray-300 px-4 py-2">
                  Duration of the lease (the time during which a client computer can use an assigned IP address). The syntax is "<strong>lease</strong> {'{days[hours] [minutes] | infinite}'}". In this case the lease is 12 hours. The default is a one-day lease.<br />
                  Before the lease expires, the client typically needs to renew its address lease assignment with the server
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(dhcp-config)#exit</td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-mono text-sm">Router(config)# ip dhcp excluded-address 10.1.1.1 10.1.1.10</td>
                <td className="border border-gray-300 px-4 py-2">The IP range that a DHCP Server should not assign to DHCP Clients. Notice this command is configured under global configuration mode</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default DhcpTutorial