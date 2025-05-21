import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";
import { Link } from "react-router-dom";

const TcpUdpTutorial = () => {
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
      <div data-animate>
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          TCP and UDP Tutorial
        </h1>
      </div>

      {/* Introduction */}
      <div data-animate className="mb-10">
        <p className="mb-6 text-lg">
          The Transmission Control Protocol (TCP) and User Datagram Protocol
          (UDP) are the two most popular protocols in the transport layer. They
          ensure that messages are delivered error-free, in sequence, and with
          no losses or duplication.
        </p>
        <p className="mb-6">
          The key difference between TCP and UDP is that TCP provides a wide
          variety of services to applications, whereas UDP does not. As a result
          of this, TCP is much more complex than UDP so this tutorial is
          dedicated to explore TCP in detail but we still compare them.
        </p>

        <div className="flex justify-center mb-6">
          <img
            fetchPriority="high"
            decoding="async"
            className="rounded-lg border border-gray-200"
            src="https://www.9tut.com/images/ccna_self_study/TCP_UDP/TCP_UDP.jpg"
            alt="TCP vs UDP Comparison"
            width="432"
            height="320"
          />
        </div>
      </div>

      {/* Protocol Comparison */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Both TCP and UDP?
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-2 text-blue-800">TCP</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Slower but reliable</li>
              <li>Ensures accurate delivery</li>
              <li>Resends corrupted packets</li>
              <li>Adds tracking bits</li>
            </ul>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-800">UDP</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Faster but unreliable</li>
              <li>No packet resending</li>
              <li>Minimal overhead</li>
              <li>Ideal for real-time</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r mb-6">
          <p>
            <strong>Note:</strong> Segment is the name of the data packet at
            Transport layer
          </p>
        </div>

        <p className="mb-4">
          In most cases we will want to be reliable in web accessing, email
          communicating, file uploading... as we don't expect a few corrupted
          packets would destroy our whole work. With TCP, these corrupted
          packets will be resent or repaired to make sure everything is correct.
        </p>
        <p className="mb-6">
          But with a price... To guarantee the sending segments is free of
          error, TCP adds some bits for tracking and checking purpose so that
          the other end can verify and ask for missing pieces of segments. As a
          result of this, the segments become larger, consume more bandwidth and
          CPU resources to proceed.
        </p>

        <p className="mb-4">
          Although UDP cannot guarantee everything is accurate like TCP but UDP
          is faster than TCP because it does not require additional bits for
          tracking and checking purpose. So which tasks need speed? Video
          (streaming) and audio are ideal for this task because they are
          considered real-time applications.
        </p>
        <p className="mb-6">
          Losing a few packets for voice or video is acceptable. Moreover,
          re-transmission the missing packets is not useful as voice and video
          are real-time applications and the receiving end cannot wait for the
          missing segments to be resent.
        </p>
      </div>

      {/* TCP Three-Way Handshake */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          TCP Three-Way Handshake
        </h2>
        <p className="mb-4">
          Before hosts can send real data using TCP, a three-way handshake must
          be established first:
        </p>

        <div className="flex justify-center mb-6">
          <img
            decoding="async"
            className="rounded-lg border border-gray-200"
            src="https://www.9tut.com/images/ccna_self_study/TCP_UDP/TCP_Three_way_handshake.jpg"
            alt="TCP Three-Way Handshake"
            width="338"
            height="200"
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-lg mb-6">
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>SYN message:</strong> Host A sends a TCP segment with SYN
              flag set to 1 (SYNchronize) with a sequence number (x).
            </li>
            <li>
              <strong>SYN-ACK message:</strong> Host B replies with SYN-ACK
              message containing:
              <ul className="list-disc pl-6 mt-2">
                <li>Its own SYN sequence number (y)</li>
                <li>ACK number (x+1) acknowledging Host A's SYN</li>
              </ul>
            </li>
            <li>
              <strong>ACK message:</strong> Host A sends ACK with number (y+1)
              to confirm the connection.
            </li>
          </ol>
        </div>

        <div className="flex justify-center mb-6">
          <img
            decoding="async"
            className="rounded-lg border border-gray-200"
            src="https://www.9tut.com/images/ccna_self_study/TCP_UDP/TCP_Three_way_handshake_number_assigned.jpg"
            alt="TCP Handshake with Numbers"
            width="655"
            height="200"
          />
        </div>
      </div>

      {/* TCP Four-Way Termination */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          TCP Four-Way Termination
        </h2>
        <p className="mb-4">
          TCP uses a similar process to gracefully terminate connections:
        </p>

        <div className="flex justify-center mb-6">
          <img
            loading="lazy"
            decoding="async"
            className="rounded-lg border border-gray-200"
            src="https://www.9tut.com/images/ccna_self_study/TCP_UDP/TCP_Four_way_Termination.jpg"
            alt="TCP Four-Way Termination"
            width="313"
            height="234"
          />
        </div>

        <div className="bg-gray-100 p-5 rounded-lg mb-6">
          <ol className="list-decimal pl-6 space-y-4">
            <li>Host A sends FIN message to initiate termination</li>
            <li>Host B acknowledges with ACK (x+1)</li>
            <li>Host B sends its own FIN when ready</li>
            <li>Host A acknowledges with ACK (y+1)</li>
          </ol>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-2 text-blue-800">
              Connection-Oriented (TCP)
            </h3>
            <p>
              Requires logical connection to be established before data exchange
              (three-way handshake) and terminated properly (four-way
              termination).
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-800">
              Connectionless (UDP)
            </h3>
            <p>
              Allows data to be exchanged without setting up a link between
              processes. No handshake or termination process.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p>
            In conclusion, TCP requires the establishment (via three-way
            handshake) and termination (via four-way termination) of a
            connection. In the next part we will learn about popular TCP
            features.
          </p>
        </div>
      </div>

      <Link
        to="/tcp-udp/page-2"
        className="text-blue-600 hover:underline font-medium"
      >
        Go to Page 2 →
      </Link>

      {/* Accordion */}
      <div data-animate className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default TcpUdpTutorial;
