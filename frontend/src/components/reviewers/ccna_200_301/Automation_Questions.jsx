import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const AutomationQuestion = () => {
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
      <h1 className="text-3xl font-bold mb-4">Automation Questions</h1>


<div>
  <p>
  </p><p>Note: If you are not sure about Automation tools or JSON, please read our <a href="https://www.9tut.com/ansible-tutorial" target="_blank" rel="noopener noreferrer">Ansible Tutorial</a>, <a href="https://www.9tut.com/chef-tutorial" target="_blank" rel="noopener noreferrer">Chef Tutorial</a>, <a href="https://www.9tut.com/puppet-tutorial" target="_blank" rel="noopener noreferrer">Puppet Tutorial</a> and <a href="https://www.9tut.com/json-tutorial" target="_blank" rel="noopener noreferrer">JSON Tutorial</a>.</p>
  <table style={{borderCollapse: 'collapse'}} border={1}>
    <tbody>
      <tr>
        <td style={{width: '100%'}}>
          <p><span className="blueandbold">Quick Summary</span></p>
          <p>HTTP defines these standard status codes that can be used to convey the results of a client’s request. The REST API status-code classes are divided into five categories.<br />
            1xx: Informational – Communicates transfer protocol-level information.<br />
            2xx: Success – Indicates that the client’s request was accepted successfully.<br />
            3xx: Redirection – Indicates that the client must take some additional action in order to complete their request.<br />
            4xx: Client Error – This category of error status codes points the finger at clients.<br />
            5xx: Server Error – The server takes responsibility for these error status codes.</p>
          <p>A comparison list of Ansible, Puppet and Chef automation tool:</p>
          <p><img fetchpriority="high" decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Ansible_Puppet_Chef_compare.jpg" alt="Ansible_Puppet_Chef_compare.jpg" width={630} height={305} /></p>
        </td>
      </tr>
    </tbody>
  </table>
  <p><span className="ccnaquestionsnumber">Question 1<br />
    </span></p>
  Which output displays a JSON data representation?
  <p>A.<br />
    {'{'}<br />
    “response”,{'{'}<br />
    “taskId”,{'{'}{'}'};<br />
    “url”,”string”<br />
    {'}'};<br />
    “version”, “string”<br />
    {'}'}</p>
  <p>B.<br />
    {'{'}<br />
    “response”:{'{'}<br />
    “taskId”,{'{'}{'}'};<br />
    “url”,”string”<br />
    {'}'};<br />
    “version”; “string”<br />
    {'}'}</p>
  <p>C.<br />
    {'{'}<br />
    “response”- {'{'}<br />
    “taskId”- {'{'}{'}'};<br />
    “url”-“string”<br />
    {'}'},<br />
    “version”-“string”<br />
    {'}'}</p>
  <p>D.<br />
    {'{'}<br />
    “response”:{'{'}<br />
    “taskId”:{'{'}{'}'},<br />
    “url”:”string”<br />
    {'}'},<br />
    “version”: “string”<br />
    {'}'}</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>JSON data is written as name/value pairs.<br />
    A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:<br />
    “name”:”Mark”</p>
  <p>JSON can use arrays. Array values must be of type string, number, object, array, boolean or null. For example:<br />
    {'{'}<br />
    “name”:”John”,<br />
    “age”:30,<br />
    “cars”:[ “Ford”, “BMW”, “Fiat” ]<br />
    {'}'}</p>
  <p>JSON can have empty object like “taskId”:{'{'}{'}'}</p>
  <p><span className="ccnaquestionsnumber">Question 2<br />
    </span></p>
  Which option best describes an API?
  <p>A. communication often uses either Java scripting, Python, XML, or simple HTTP<br />
    B. an architectural style (versus a protocol) for designing applications<br />
    C. a stateless client-server model<br />
    D. request a certain type of data by specifying the URL path that models the data</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> C
  </p><p><span className="ccnaquestionsnumber">Question 3<br />
    </span></p>
  Which option about JSON is true?
  <p>A. uses predefined tags or angle brackets (&lt;&gt;) to delimit markup text<br />
    B. used to describe structured data that includes arrays<br />
    C. used for storing information<br />
    D. similar to HTML, it is more verbose than XML</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>JSON data is written as name/value pairs.<br />
    A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:<br />
    “name”:”Mark”</p>
  <p>JSON can use arrays. Array values must be of type string, number, object, array, boolean or null.. For example:<br />
    {'{'}<br />
    “name”:”John”,<br />
    “age”:30,<br />
    “cars”:[ “Ford”, “BMW”, “Fiat” ]<br />
    {'}'}</p>
  <p><span className="ccnaquestionsnumber">Question 4<br />
    </span></p>
  Which of the following is the JSON encoding of a dictionary or hash?
  <p>A. {'{'}“key”: “value”{'}'}<br />
    B. [“key”, “value”]<br />
    C. {'{'}“key”, “value”{'}'}<br />
    D. (“key”: “value”)</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 5</span></p>
  Which two encoding methods are supported by REST APIs? (Choose two)
  <p>A. YAML<br />
    B. JSON<br />
    C. EBCDIC<br />
    D. SGML<br />
    E. XML</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> B E
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>The Application Policy Infrastructure Controller (APIC) REST API is a programmatic interface that uses REST architecture. The API accepts and returns HTTP (not enabled by default) or HTTPS messages that contain JavaScript Object Notation (JSON) or Extensible Markup Language (XML) documents.</p>
  <p>Reference: <a href="https://www.cisco.com/c/en/us/td/docs/switches/datacenter/aci/apic/sw/2-x/rest_cfg/2_1_x/b_Cisco_APIC_REST_API_Configuration_Guide/b_Cisco_APIC_REST_API_Configuration_Guide_chapter_01.html" target="_blank" rel="noopener noreferrer">https://www.cisco.com/c/en/us/td/docs/switches/datacenter/aci/apic/sw/2-x/rest_cfg/2_1_x/b_Cisco_APIC_REST_API_Configuration_Guide/b_Cisco_APIC_REST_API_Configuration_Guide_chapter_01.html</a></p>
  <p><span className="ccnaquestionsnumber">Question 6<br />
    </span></p>
  What are two benefits of network automation? (Choose two)
  <p>A. reduced operational costs<br />
    B. reduced hardware footprint<br />
    C. faster changes with more reliable results<br />
    D. fewer network failures<br />
    E. increased network security</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A C
  </p><p><span className="ccnaquestionsnumber">Question 7<br />
    </span></p>
  Which type of API would be used to allow authorized salespeople of an organization access to internal sales data from their mobile devices?
  <p>A. partner<br />
    B. open<br />
    C. public<br />
    D. private</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>There are three types of API:<br />
    + <strong>Open APIs (Public APIs)</strong> – These APIs are publicly available and can be used with no restrictions. Because these APIs are public, many API providers require the user to get a free key, or token, prior to using the API. This is to help control the number of API requests they receive and process.<br />
    + <strong>Internal (Private APIs)</strong> – These are APIs that are used by an organization or company to access data and services for internal use only. An example of an internal API is allowing authorized salespeople access to internal sales data on their mobile devices.<br />
    + <strong>Partner APIs</strong> – These are APIs that are used between a company and its business partners or contractors to facilitate business between them. The business partner must have a license or other form of permission to use the API. A travel service using an airline’s API is an example of a partner API.</p>
  <p><span className="ccnaquestionsnumber">Question 8<br />
    </span></p>
  What is a characteristic of the REST API?
  <p>A. evolved into what became SOAP<br />
    B. used for exchanging XML structured information over HTTP or SMTP<br />
    C. considered slow, complex, and rigid<br />
    D. most widely used API for web services</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>REST API is an API that works on top of the HTTP protocol. It defines a set of functions developers can use to perform requests and receive responses via<br />
    HTTP protocol such as GET and POST. REST APIs are the most popular API used for web services nowadays.</p>
  <p><span className="ccnaquestionsnumber">Question 9<br />
    </span></p>
  Refer to the exhibit.
  <pre>cisco_ospf_vrf {"{"}"R1 default":{"\n"}{"  "}ensure =&gt; 'present',{"\n"}{"  "}auto_cost =&gt; '100',{"\n"}{"}"}</pre>
  <p>Which type of configuration is represented in the output?</p>
  <p>A. Puppet<br />
    B. JSON<br />
    C. Chef<br />
    D. Ansible</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaquestionsnumber">Question 10</span></p>
  Which CRUD operation modifies an existing table or view?
  <p>A. read<br />
    B. replace<br />
    C. create<br />
    D. update</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> D
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>CRUD is short for CREATE, READ, UPDATE and DELETE operations. Only UPDATE operation modifies an existing table or view.</p>
  <p><span className="ccnaquestionsnumber">Question 11<br />
    </span></p>
  Which configuration management mechanism uses TCP port 22 by default when communicating with managed nodes?
  <p>A. Ansible<br />
    B. Python<br />
    C. Puppet<br />
    D. Chef</p>
  <p>&nbsp;</p>
  <p><span className="ccnacorrectanswers">Answer:</span> A
  </p><p><span className="ccnaexplanation">Explanation</span></p>
  <p>TCP port 22 is SSH, which is used by Ansible when communicating with the managed nodes.</p>
  <p><img decoding="async" className="aligncenter" src="https://www.9tut.com/images/ccna_self_study/Ansible_Puppet_Chef/Ansible_workflow.jpg" alt="Ansible_workflow.jpg" width={586} height={298} /></p>
</div>



      {/* Accordion Component */}
      <div data-animate style={{ opacity: 0, transform: "translateY(30px)" }} className="mt-16">
        <Accordion className="space-y-1" />
      </div>
    </section>
  );
};

export default AutomationQuestion;
