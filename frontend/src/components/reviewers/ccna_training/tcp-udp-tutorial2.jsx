import React from "react";
import { Link } from "react-router-dom";

const TcpUdpTutorialPart2 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">TCP & UDP - Part 2</h1>
      <p className="mb-6">This is Page 2 content.</p>
      

    {/* Content */}
<div>
  <p><span className="blueandbold pinkandbold">TCP Features</span></p>
  <p>Some popular TCP features we will learn here are: <strong>Multiplexing using port numbers</strong>, <strong>Flow control using windowing</strong> and <strong>Reliability</strong> (Error Detection and Error recovery)</p>
  <p><span className="blueandbold"><strong>Multiplexing using port numbers</strong></span></p>
  <p>Suppose you are using a laptop for web browsing, email communicating and FTP uploading at the same time. All of them require using TCP while your laptop only has one IP address (with one network card) so how your laptop knows which packets received from the Internet are dedicated for which application?</p>
  <p>Above question is solved with port numbers. Each application will use a different and available port number to communicate with outside world. For example your laptop can choose port 50000 for web browsing, port 50001 for email communicating and port 50002 for FTP uploading.</p>
  <p><img fetchPriority="high" decoding="async" className="aligncenter" title src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/TCP_Multiplexing_port_numbers.jpg" alt="TCP_Multiplexing_port_numbers.jpg" width={508} height={285} /></p>
  <p>Notice that your laptop can choose any available source port but it must use pre-defined destination ports for well-known services. Port numbers are defined in three ranges:<br />
    + Well-known port numbers (0 through 1023): assigned to key or core services that systems offer<br />
    + Registered port numbers (1024 through 49151): assigned to industry applications and processes. For example: 1433 is assigned for Microsoft SQL Server process)<br />
    + Dynamic port numbers (49152 through 65535): used as temporary ports for specific communications. Our laptop can use these ports for communication</p>
  <p>The table below lists TCP ports for well-known services:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>TCP Service</strong></td>
        <td><strong>Description</strong></td>
        <td><strong>Port</strong></td>
      </tr>
      <tr>
        <td>FTP</td>
        <td>File Transfer Protocol</td>
        <td>20, 21</td>
      </tr>
      <tr>
        <td>SSH</td>
        <td>Secure shell</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Telnet</td>
        <td>Terminal network</td>
        <td>23</td>
      </tr>
      <tr>
        <td>SMTP</td>
        <td>Simple Mail Transfer Protocol</td>
        <td>25</td>
      </tr>
      <tr>
        <td>DNS</td>
        <td>Domain Name Server</td>
        <td>53</td>
      </tr>
      <tr>
        <td>HTTP</td>
        <td>Hyper Text Transfer Protocol</td>
        <td>80</td>
      </tr>
      <tr>
        <td>HTTPS</td>
        <td>Hyper Text Transfer Protocol Secure</td>
        <td>443</td>
      </tr>
    </tbody>
  </table>
  <p>Note: There are some other well-known ports that are not listed here. The well-known ports are assigned by the Internet Assigned Numbers Authority (IANA) in the range of 0 to 1023.</p>
  <p>Multiplexing relies on a concept called a socket. A socket consists of three things:</p>
  <p>+ An IP address<br />
    + A transport protocol<br />
    + A port number</p>
  <p>So suppose the IP address on our laptop is 123.1.1.1 and use TCP to access web server with port 50000, we may write the socket (123.1.1.1, TCP, 50000). For web server application running on the Web Server with IP 200.1.1.1 the socket should be (200.1.1.1, TCP, 80) as the web server uses the well-known port 80 for HTTP.</p>
  <p>The socket on each computer is unique so the connection between two sockets on two computers identify a unique connection between them. Therefore you can use multiple applications on the same computer at the same time. Each application will use a unique source port so they cannot interfere with each other.</p>
  <p>We only mentioned about source ports but notice TCP header requires both source port and destination port. That means if our laptop wants to connect to a Web Server it must include the destination port in TCP header as well. The destination port for Web Server in this case is 80. When the Web Server replies to our laptop, it uses the laptop’s source port as its destination port (50000 in this case).</p>
  <p><img decoding="async" className="aligncenter" title src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/TCP_Source_Port_Destination_Port.jpg" alt="TCP_Source_Port_Destination_Port.jpg" width={380} height={120} /></p>
  <p>&nbsp;</p>
  <p>Note: Both TCP and UDP use multiplexing with port numbers for their services.</p>
  <p><span className="blueandbold">Flow-control using windowing</span></p>
  <p>In the TCP header there is a field called “Window” which plays an important role in the TCP transmission. A “Window” specifies the number of segments the sender can forward without receiving an acknowledgment. It is the key to transfer data and flow control efficiently. Let’s see how it works!</p>
  <p>After the TCP connection has been established, both the client and server use this Window field to tell the other how many bytes of data it is willing to receive at one time before sending an acknowledgement to the sender. The larger the window size number (in bytes), the greater the amount of data that the host can transmit. For example, with a Window size of 1 (byte), every one byte must be acknowledged before sending the next one.</p>
  <p><img decoding="async" className="aligncenter" title src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/TCP_Simple_Window_Sliding.jpg" alt="TCP_Simple_Window_Sliding.jpg" width={307} height={292} /></p>
  <p>But waiting for ACK after each segment would be very inefficient. So TCP tries to increase the Window size to 3 (bytes), which means every three bytes can be received before sending the acknowledgement.</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" title src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/TCP_Window_Sliding.jpg" alt="TCP_Window_Sliding.jpg" width={307} height={292} /></p>
  <p>As you can see, the bigger the Window size, the fewer ACKs needed to be sent and the more efficient the transmission is. So the receiver will try to increase the Window size after each successful transmission so that the sender can send more. But the Window size cannot increase forever, TCP stops increasing the Window size when the receiver does not send an ACK (within a specific time period) or when the Window size reaches its maximum value. If a congestion occurs on the link then TCP may decrease the Window size.</p>
  <p>The window size is variable during the lifetime of a connection so we often refer it as a “sliding window”.</p>
  <p>If the sender does not receive the ACK in time, it knows that the segments should be resent, and that the transmission rate should be slowed down. Suppose Host A did not receive the expecting ACK 7 then it knows segments 4, 5, 6 should be resent.</p>
  <p><img loading="lazy" decoding="async" className="aligncenter" title src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/TCP_Window_Sliding_error.jpg" alt="TCP_Window_Sliding_error.jpg" width={307} height={300} /></p>
  <p><span className="blueandbold">Reliability (Error Detection and Error recovery)</span></p>
  <p>This is the most important feature of TCP. TCP must recover from data that is damaged, lost, duplicated during the transmission. But please grasp the difference between error detection and error recovery first:<br />
    + <strong>Error detection</strong>: the detection of errors during the transmission. Error detection does not repair corrupted data, it just detects it<br />
    + <strong>Error recovery</strong>: the detection of errors and repair them</p>
  <p>To achieve error detection, TCP adds some extra bits to the data, called checksum. A TCP sender computes the checksum value based on the contents of the TCP header and data fields. This 16-bit value will be compared with the value the receiver generates using the same computation. If the values match, the receiver can believe that segment arrived intact. If the values do not match, the receiver indicates an error occurred and the segment is discarded and a notification will be sent to the receiver depending on how the TCP stack is implemented on the receiver’s operating system.</p>
  <p>To achieve error recovery, TCP uses the Sequence number (at the sender’s side) and Acknowledgement fields (at the receiver’s side) in the TCP header. These two fields are also used to find out lost, duplicated segments. Let’s see an example.</p>
  <p>In the transmission below, host A sends three segments 1, 2, 3 to host B. Segment 2 was lost while segment 3 arrived to Host B. Then Host B replied with an ACK 2, implying that it is expecting segment 2 next. Host A can re-send another segment 2 to recover the lost segment. If Host B receive that segment it will ask for the segment 4 (because it already has segment 3).</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" className="aligncenter" src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/TCP_Error_Recovery.jpg" alt="TCP_Error_Recovery.jpg" width={429} height={330} /><span style={{fontSize: '8pt'}}>Error recovery</span></p>
  <p>You may ask “what will happen if the ACK 2 sent from Host B is also lost?” In fact, after sending each segment Host A sets a retransmission timer, just in case the ACK is lost (or all the sending segments are lost; Host B would not send ACK in this case because it did not receive anything). If this timer expires, Host A will send all the segments again.</p>
  <table border={1}>
    <tbody>
      <tr>
        <td>Note: UDP does support error detection (via checksum) but it does not support error recovery. If UDP finds a corrupted segment, it just simply drop it.</td>
      </tr>
    </tbody>
  </table>
  <p>Let’s sum up all things we learned about TCP and UDP so far.</p>
  <p>Same:</p>
  <p>+ Both TCP and UDP operate at Transport Layer<br />
    + Both TCP and UDP use Multiplexing via port numbers</p>
  <p>Difference:</p>
  <table border={1}>
    <tbody>
      <tr>
        <td><strong>TCP</strong></td>
        <td><strong>UDP</strong></td>
      </tr>
      <tr>
        <td>Reliable</td>
        <td>Unreliable</td>
      </tr>
      <tr>
        <td>Connection-oriented</td>
        <td>Connectionless</td>
      </tr>
      <tr>
        <td>Segment retransmission and flow control through windowing</td>
        <td>No retransmission or windowing</td>
      </tr>
      <tr>
        <td>Segment sequence</td>
        <td>No sequencing</td>
      </tr>
      <tr>
        <td>Acknowledge segment</td>
        <td>No acknowledgement</td>
      </tr>
      <tr>
        <td>Start and end the communication by three-way handshake and four-way termination</td>
        <td>No action is required before and after sending real data</td>
      </tr>
      <tr>
        <td>Support error recovery</td>
        <td>Only support error detection</td>
      </tr>
    </tbody>
  </table>
  <p>Finally we show the TCP and UDP header in detail for your reference. There are some fields which are out of scope of this tutorial.</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" className="aligncenter" src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/tcp_header.jpg" alt="tcp_header.jpg" width={490} height={198} /><span style={{fontSize: '8pt'}}>TCP Header (20 bytes)<br />
    </span></p>
  <p style={{textAlign: 'left'}}>Notice about the FLAG fields (between the “Reserved” and “Window Size” fields). If SYN bit is turned on, it is a SYN message. If ACK bit is turned on, it is an ACK message. If both SYN and ACK bits are turned on, it is a SYN-ACK message.</p>
  <p style={{textAlign: 'left'}}>And this is the UDP header:</p>
  <p style={{textAlign: 'center'}}><img loading="lazy" decoding="async" className="aligncenter" src="./21_CCNA_Training_TCP_and_UDP_Tutorial_page2_files/UDP_header.jpg" alt="UDP_header.jpg" width={490} height={128} /><span style={{fontSize: '8pt'}}>UDP Header (8 bytes)<br />
    </span></p>
</div>



      <Link
        to="/reviewer/training/tcp-udp"
        className="text-blue-600 hover:underline font-medium"
      >
        ← Go to Page 1
      </Link>
    </div>
  );
};

export default TcpUdpTutorialPart2;
