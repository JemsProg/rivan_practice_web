import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const Subnetting = () => {
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
          Subnetting Tutorial – Subnetting Made Easy
        </h1>
      </div>

      {/* Content */}
      <div>
        <p>
          In this article, we will learn how to subnet and make subnetting an
          easy task.
        </p>
        <p>
          The table below summarizes the possible network numbers, the total
          number of each type, and the number of hosts in each Class A, B, and C
          network.
        </p>
        <table border={1}>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>
                <strong>Default subnet mask</strong>
              </td>
              <td>
                <strong>Range</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Class A</strong>
              </td>
              <td>255.0.0.0 (/8)</td>
              <td>1.0.0.0 – 126.255.255.255</td>
            </tr>
            <tr>
              <td>
                <strong>Class B</strong>
              </td>
              <td>255.255.0.0 (/16)</td>
              <td>128.0.0.0 – 191.255.255.255</td>
            </tr>
            <tr>
              <td>
                <strong>Class C</strong>
              </td>
              <td>255.255.255.0 (/24)</td>
              <td>192.0.0.0 – 223.255.255.255</td>
            </tr>
          </tbody>
        </table>
        <p>
          <span style={{ fontSize: "x-small" }}>
            Table 1 – Default subnet mask &amp; range of each class
          </span>
        </p>
        <p>
          Class A addresses begin with a 0 bit. Therefore, all addresses from
          1.0.0.0 to 126.255.255.255 belong to class A (1=
          <span style={{ textDecoration: "underline" }}>
            <strong>0</strong>
          </span>
          000 0001; 126 ={" "}
          <strong>
            <span style={{ textDecoration: "underline" }}>0</span>
          </strong>
          111 1110).
          <br />
          The 0.0.0.0 address is reserved for default routing and the 127.0.0.0
          address is reserved for loopback testing so they don’t belong to any
          class.
          <br />
          Class B addresses begin with a 1 bit and a 0 bit. Therefore, all
          addresses from 128.0.0.0 to 191.255.255.255 belong to class B (128=
          <span style={{ textDecoration: "underline" }}>
            <strong>10</strong>
          </span>
          00 0000; 191 ={" "}
          <span style={{ textDecoration: "underline" }}>
            <strong>10</strong>
          </span>
          11 1111). <br />
          Class C addresses begin with two 1 bits and a 0 bit. Class C addresses
          range from 192.0.0.0 to 223.255.255.255 (192 ={" "}
          <span style={{ textDecoration: "underline" }}>
            <strong>110</strong>
          </span>
          0 0000; 223 ={" "}
          <span style={{ textDecoration: "underline" }}>
            <strong>110</strong>
          </span>
          1 1111).
        </p>
        <p>
          Class D &amp; E are used for Multicast and Research purposes and we
          are not allowed to subnet them so they are not mentioned here.
        </p>
        <p>
          Note: The number behind the slash notation (/) specifies how many bits
          are turned on (bit 1). For example:
        </p>
        <p>
          + “/8” equals “1111 1111.0000 0000.0000 0000.0000 0000” -&gt; 8 bits
          are turned on (bit 1)
          <br />
          + “/12” equals “1111 1111.1111 0000.0000 0000.0000 0000” -&gt; 12 bits
          are turned on (bit 1)
          <br />
          + “/28” equals “1111 1111.1111 1111.1111 1111.1111 0000” -&gt; 28 bits
          are turned on (bit 1)
          <br />+ “/32” equals “1111 1111.1111 1111.1111 1111.1111 1111” -&gt;
          32 bits are turned on (bit 1) and this is also the maximum value
          because all bits are turned on.
        </p>
        <p>
          The slash notation (following with a number) is equivalent to a subnet
          mask. If you know the slash notation you can figure out the subnet
          mask and vice versa. For example, “/8” is equivalent to “255.0.0.0”;
          “/12” is equivalent to “255.240.0.0”; “/28” is equivalent to
          “255.255.255.240”; “/32” is equivalent to “255.255.255.255”.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            fetchpriority="high"
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Subnet/Class_A_B_C_network_host_portions.jpg"
            alt="Class_A_B_C_network_host_portions.jpg"
            width={415}
            height={205}
          />
        </p>
        <p style={{ textAlign: "center" }}>
          <span style={{ fontSize: "x-small" }}>
            The Network &amp; Host parts of each class by default
          </span>
        </p>
        <p style={{ textAlign: "left" }}>
          From the “default subnet mask” shown above, we can identify the
          network and host part of each class. Notice that in the subnet mask,
          bit 1 represents for Network part while bit 0 presents for Host part
          (255 equals to 1111 1111 and 0 equals to 0000 0000 in binary form).
        </p>
        <p>
          <span id="more-850" />
        </p>
        <p>{/*adsense*/}</p>
        <p className="blueandbold">What is “subnetting”?</p>
        <p>
          When changing a number in the Network part of an IP address we will be
          in a different network from the previous address. For example, the IP
          address 11.0.0.1 belongs to class A and has a default subnet mask of
          255.0.0.0; if we change the number in the first octet (a block of 8
          bits, the first octet is the leftmost 8 bits) we will create a
          different network. For example,{" "}
          <span style={{ textDecoration: "underline" }}>12</span>.0.0.1 is in a
          different network from{" "}
          <span style={{ textDecoration: "underline" }}>11</span>.0.0.1. But if
          we change a number in the Host part, we are still in the same Network.
          For example, 11.<span style={{ textDecoration: "underline" }}>1</span>
          .0.1 is in the same network of 11.
          <span style={{ textDecoration: "underline" }}>0</span>.0.1.
        </p>
        <p>
          The problem here is if we want to create 300 networks how can we do
          that? In the above example, we can only create different networks when
          changing the first octet so we can create a maximum of 255 networks
          because the first octet can only range from 1 to 255 (in fact it is
          much smaller because class A only range from 1 to 126). Now we have to
          use a technique called “subnetting” to achieve our purpose.
        </p>
        <p>
          “Subnetting” means we{" "}
          <strong>
            borrow some bits from the Host part to add to the Network part
          </strong>
          . This allows us to have more networks than using the default subnet
          mask. For example, we can borrow some bits in the next octet to make
          the address 11.1.0.1 belong to a different network from 11.0.0.1.
        </p>
        <p>
          <span className="blueandbold">How to subnet?</span>
        </p>
        <p>
          Do you remember that I said “in the subnet mask, bit 1 represents for
          Network part while bit 0 presents for Host part”? Well, this also
          means that we can specify how many bits we want to borrow by changing
          how many bit 0 to bit 1 in the subnet mask.
        </p>
        <p>{/*adsense#MiddleContent*/}</p>
        <p>
          Let’s come back to our example with the IP 11.0.0.1, we will write all
          numbers in binary form to reveal what a computer really sees in an IP
          address.
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Subnet/Class_A_binary_form.jpg"
            alt="Class_A_binary_form.jpg"
            width={475}
            height={160}
          />
        </p>
        <p>
          Now you can clearly see that the subnet mask will decide which is the
          Network part, which is the Host part. By borrowing 8 bits, our subnet
          mask will be like this:
        </p>
        <p style={{ textAlign: "center" }}>
          <img
            decoding="async"
            src="https://www.9tut.com/images/ccna_self_study/Subnet/Class_A_subnet_binary_form.jpg"
            alt="Class_A_subnet_binary_form.jpg"
            width={495}
            height={160}
          />
        </p>
        <p>
          After changing the second octet of the subnet mask from all “0” to all
          “1”, the Network part is now extended. Now we can create new networks
          by changing number in the first or second octet. This greatly
          increases the number of networks we can create. With this new subnet
          mask, IP 11.<span style={{ textDecoration: "underline" }}>1</span>.0.1
          is in different network from IP 11.
          <span style={{ textDecoration: "underline" }}>0</span>.0.1 because “1”
          in the second octet now belongs to the Network part.
        </p>
        <p>
          So, in conclusion we “subnet” by borrowing bit “0” in the Host portion
          and converting them to bit “1”. The number of borrowed bits is
          depended on how many networks we need.
        </p>
        <p>
          Note: A rule of borrowing bits is we can only borrow bit 0 from the
          left to the right without skipping any bit 0. For example, you can
          borrow like this: “1111 1111. 1100 0000.0000 0000.0000 0000” but not
          this: “1111 1111. 1010 0000.0000 0000.0000 0000”. In general, just
          make sure all your bit “1”s are successive on the left and all your
          bit “0”s are successive on the right.
        </p>
        <p>
          In the next part we will learn how to calculate the number of
          sub-networks and hosts-per-subnet
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

export default Subnetting;
