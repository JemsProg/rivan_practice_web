import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const AaaQuestion = () => {
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
    <section ref={sectionRef} className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">AAA Questions</h1>
 <div>
  <p>
  </p><p>If you are not sure about AAA, please read our <a href="https://www.9tut.com/aaa-tacacs-and-radius-tutorial" target="_blank" rel="noopener noreferrer">AAA TACACS+ and RADIUS Tutorial</a>.</p>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  AAA stands for authentication, authorization, and accounting.
  <p>A. False<br />
    B. True</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which effect does the <strong>aaa new-model</strong> configuration command have?
  <p>A. It configures the device to connect to a RADIUS server for AAA.<br />
    B. It configures a local user on the device.<br />
    C. It associates to RADIUS server to an AAA group.<br />
    D. It enables AAA services on the device.</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  What is the primary difference between AAA authentication and authorization?
  <p>A. Authentication verifies a username and password, and authorization handles the communication between the authentication agent and the user database<br />
    B. Authentication identifies a user who is attempting to access a system, and authorization validates the users password<br />
    C. Authentication identifies and verifies a user who is attempting to access a system, and authorization controls the tasks the user can perform<br />
    D. Authentication controls the system processes a user can access and authorization logs the activities the user initiates</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>AAA stands for Authentication, Authorization and Accounting.</p>
  <p>+ <strong>Authentication:</strong> Specify who you are (usually via login username &amp; password)<br />
    + <strong>Authorization</strong>: Specify what actions you can do, what resource you can access<br />
    + <strong>Accounting</strong>: Monitor what you do, how long you do it (can be used for billing and auditing)</p>
  <p>An example of AAA is shown below:</p>
  <p>+ <strong>Authentication:</strong> “I am a normal user. My username/password is <strong>user_tom/learnforever</strong>“<br />
    + <strong>Authorization</strong>: “<strong>user_tom</strong> can access <strong>LearnCCNA</strong> server via <strong>HTTP</strong> and <strong>FTP</strong>“<br />
    + <strong>Accounting</strong>: “<strong>user_tom</strong> accessed <strong>LearnCCNA</strong> server for <strong>2 hours</strong>“. This user only uses “show” commands.</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Refer to the exhibit. Which password must an engineer use to enter the enable mode?
  <table border={1}>
    <tbody>
      <tr>
        <td>Atlanta#config t<br />
          Atlanta(config)#aaa new-model<br />
          Atlanta(config)#aaa authentication login default local<br />
          Atlanta(config)#line vty 0 4<br />
          Atlanta(config-line)#login authentication default<br />
          Atlanta(config-line)#exit<br />
          Atlanta(config)#username ciscoadmin password adminadmin123<br />
          Atlanta(config)#username ciscoadmin privilege 15<br />
          Atlanta(config)#enable password cisco123<br />
          Atlanta(config)#enable secret testing1234<br />
          Atlanta(config)#end</td>
      </tr>
    </tbody>
  </table>
  <p>A. adminadmin123<br />
    B. default<br />
    C. testing1234<br />
    D. cisco123</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>If neither the <strong>enable password</strong> command nor the <strong>enable secret</strong> command is configured, and if there is a line password configured for the console, the console line password serves as the enable password for all VTY sessions -&gt; The “enable secret” will be used first if available, then “enable password” and line password.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/optical/cpt/r9_3/configuration/guide/cpt93_configuration/cpt93_configuration_chapter_010000.pdf" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/optical/cpt/r9_3/configuration/guide/cpt93_configuration/cpt93_configuration_chapter_010000.pdf</a></p>
  <p className="ccnaquestionsnumber">Question 5</p>
  What is a difference between RADIUS and TACACS+?
  <p>A. RADIUS is most appropriate for dial authentication, but TACACS+ can be used for multiple types of authentication<br />
    B. TACACS+ encrypts only password information and RADIUS encrypts the entire payload<br />
    C. TACACS+ separates authentication and authorization, and RADIUS merges them<br />
    D. RADIUS logs all commands that are entered by the administrator, but TACACS+ logs only start, stop, and interim commands</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p className="ccnaquestionsnumber">Question 6</p>
  How do AAA operations compare regarding user identification, user services and access control?
  <p>A. Authorization provides access control and authentication tracks user services<br />
    B. Authentication identifies users and accounting tracks user services<br />
    C. Accounting tracks user services, and authentication provides access control<br />
    D. Authorization identifies users and authentication provides access control</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p>
</div>


      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default AaaQuestion;
