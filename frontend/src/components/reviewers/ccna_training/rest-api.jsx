import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const RestApiTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">REST API Tutorial</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-6">
        <p className="mb-4">
          An API (Application Programming Interface) allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange data.
        </p>
        <p className="mb-6">
          REST (REpresentational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communications protocol – the HTTP. RESTful applications use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations on resources and return data in various formats, often JSON or XML.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/REST/REST.jpg" 
            alt="REST Architecture" 
            width="500"
          />
        </div>
        
        <p className="mb-6">
          An API that follows the REST standard is called a RESTful API or REST API. A REST implementation should be stateless. It means the two parties don't need to store any information about each other, and every request and response (cycle) is independent from all others. It uses standard HTTP methods and can return data in various formats, often JSON or XML.
        </p>
      </div>

      {/* HTTP Methods Section */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">HTTP Methods in REST</h2>
        <p className="mb-4">
          HTTP methods in RESTful API development to specify the type of action being performed on a resource. There are five essential HTTP methods:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>POST</strong>: Create a new resource. (<strong>C</strong>REATE)</li>
          <li><strong>GET</strong>: Retrieve information about a resource. GET requests do not change the resource's state, so it is said to be a safe method (<strong>R</strong>EAD)</li>
          <li><strong>PUT</strong>: Update an existing resource by replacing its content entirely. (<strong>U</strong>PDATE)</li>
          <li><strong>DELETE</strong>: Delete a resource. (<strong>D</strong>ELETE)</li>
          <li><strong>PATCH</strong>: Apply partial modifications to a resource.</li>
        </ul>
        
        <p className="mb-6">
          The first four methods' functions are called <strong>CRUD</strong> (Create, Read, Update, Delete).
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="font-semibold">Remember:</p>
          <p>PUT for update, POST for create.</p>
        </div>
        
        <p className="mb-4">
          Although POST and PUT can be used to create new resources but there are some differences between them. You can find out the difference in the table below:
        </p>
        
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Criteria</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">POST</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">PUT</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Usage</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Create a new record</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Update a record</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Idempotent*</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">non-idempotent</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">idempotent</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Request Body</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">only need to send the part to be updated in the request</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">needs to send the entire resource as payload</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Status Code</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  + 201 is sent in response if new record is created successfully<br />
                  + 409 if duplicates are not allowed
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  + 200 when record gets updated<br />
                  + 201 if this record is new
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mb-6 text-sm italic">
          *Note: PUT is an idempotent method, while POST isn't. For instance, calling the PUT method multiple times will either create or update the same resource. In contrast, multiple POST requests will lead to the creation of the same resource multiple times.
        </p>
        
        <p className="mb-6">
          In the body of these requests, there could be an optional HTTP request body that contains a custom payload of data, usually encoded in JSON. The server receives a request, processes it
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/REST/REST_HTTP_body.jpg" 
            alt="REST HTTP Body" 
            width="500"
          />
        </div>
        
        <p className="mb-6">
          When a response is replied from the server, a status code is also attached to tell the result.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/REST/REST_Response.jpg" 
            alt="REST Response" 
            width="500"
          />
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <p><strong>2xx</strong>: The request was successful</p>
          <p><strong>4xx</strong>: Something wrong with the request</p>
          <p><strong>5xx</strong>: Something wrong at the server</p>
        </div>
      </div>

      {/* Examples Section */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Examples of HTTP methods</h2>
        <p className="mb-6">
          We wrote a tutorial which uses Postman to send REST API to a CSR1000v router <a href="https://www.digitaltut.com/use-postman-to-configure-csr1000v-router-on-cisco-sandbox-with-restconf" target="_blank" rel="noopener noreferrer" className="text-[#0D2153] hover:underline">here</a>. You will find many examples of how to use HTTP methods. Below is an example of using GET method:
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.digitaltut.com/images/Knowledge/Postman_RESTCONF/request_sent_success.jpg" 
            alt="GET Method Example" 
            width="800"
          />
        </div>
        
        <p className="mb-4">POST method example. The body of POST method contains the configuration of the Loopback101 interface:</p>
        <div className="flex justify-center my-8">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.digitaltut.com/images/Knowledge/Postman_RESTCONF/Postman_add_Loopback.jpg" 
            alt="POST Method Example" 
            width="700"
          />
        </div>
        
        <p className="mb-4">DELETE method:</p>
        <div className="flex justify-center my-8">
          <img 
            loading="lazy" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.digitaltut.com/images/Knowledge/Postman_RESTCONF/Postman_delete_loopback101.jpg" 
            alt="DELETE Method Example" 
            width="800"
          />
        </div>
        
        <p className="mb-6 text-sm italic">
          Note:  {'{{'}host{'}'}  and {'{{'}port{'}'} are two variables which we defined before using.
        </p>
      </div>

      {/* Principles Section */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Principles of REST</h2>
        
        <div className="space-y-6 mt-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. <strong>Stateless</strong>:</h3>
            <p className="mb-4">
              Each request from a client to the server must contain all the information needed to understand and process the request. The server cannot store any client context between requests.
            </p>
            <div className="flex justify-center">
              <img 
                loading="lazy" 
                decoding="async" 
                className="rounded-lg shadow-md" 
                src="https://www.9tut.com/images/ccna_self_study/REST/REST_stateless.jpg" 
                alt="REST Stateless" 
                width="500"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">2. <strong>Client-Server Architecture</strong>:</h3>
            <p>
              The client is the front-end and the server is the back-end of the service. It is important to note that both of these entities are independent of each other. The server-side code (the API) and the client-side code can each be changed without affecting the other, as long as both continue to communicate in the same format.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">3. <strong>Cacheable</strong>:</h3>
            <p>
              The client should have the ability to store responses in a cache. This greatly improves the performance of the API.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">4. <strong>Uniform Interface</strong>:</h3>
            <p>
              This constraint indicates a generic interface to manage all the interactions between the client and server in a unified way, which simplifies and decouples the architecture.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">5. <strong>Layered System</strong>:</h3>
            <p>
              The server can have multiple layers for implementation. This layered architecture helps to improve scalability by enabling load balancing.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">6. <strong>Code on Demand</strong> (optional):</h3>
            <p>
              This constraint indicates that the functionality of the client applications can be extended at runtime by allowing a code download from the server and executing the code.
            </p>
          </div>
        </div>
        
        <p className="mt-6">
          REST APIs may not be the best solution for everyone, but it is simple and good enough. That is why it is used so popularly nowadays.
        </p>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default RestApiTutorial;