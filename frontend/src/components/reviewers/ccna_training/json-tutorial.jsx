import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const JsonTutorial = () => {
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
      <div data-animate>
        <h1 className="text-3xl font-bold mb-6 text-gray-900">JSON Tutorial</h1>
        
      </div>

      {/* Introduction */}
      <div data-animate className="mb-10">
        <p className="mb-6 text-lg">
          JavaScript Object Notation (JSON) is a human-readable and very popular format used by web services, programming languages (including Python) and APIs to read/write data. JSON is also a subject of the CCNA 200-301, so in this article we'll learn JSON fundamentals and how to process JSON with Python.
        </p>
      </div>

      {/* JSON Syntax */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 ">JSON Syntax Structure</h2>

        <div className="bg-blue-50 p-5 rounded-lg mb-6">
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses curly braces <code className="bg-gray-100 px-1 rounded">{ }</code> to hold objects and square brackets <code className="bg-gray-100 px-1 rounded">[]</code> to hold arrays</li>
            <li>JSON data is written as key/value pairs</li>
            <li>Key must be a string in double quotes <code className="bg-gray-100 px-1 rounded">""</code>, followed by a colon <code className="bg-gray-100 px-1 rounded">:</code>, then the value.  For example:  <code className="bg-gray-100 px-1 rounded">“name”: ”John”  </code></li>
            <li>Each key must be unique</li>
            <li>Values can be: string, number, object, array, boolean, or null</li>
            <li>Multiple key/value pairs are separated by commas <code className="bg-gray-100 px-1 rounded">,</code></li>
          </ul>
        </div>
      </div>

      {/* JSON Arrays */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800  pb-2">Working with JSON Arrays</h2>

        <p className="mb-4">JSON can use arrays to store multiple values in a single variable:</p>

        <div className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
          <pre className="font-mono text-sm">
            <code>
              {`{
  "name": "John",
  "age": 30,
  "cars": ["Ford", "BMW", "Fiat"]
}`}
            </code>
          </pre>
        </div>

        <p>In this example, <code className="bg-gray-100 px-1 rounded">"cars"</code> is the key which is assigned a JSON array containing three string values: “Ford”, “BMW” and “Fiat”.</p>
      </div>

      {/* Python JSON Parsing */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800  pb-2">Processing JSON with Python</h2>

        <p className="mb-4">If we have a JSON string, we can convert (parse) it into Python by using the <strong>json.loads() method</strong>, which returns a Python dictionary:<code className="bg-gray-100 px-1 rounded">json.loads()</code>:</p>

        <div className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
          <pre className="font-mono text-sm">
            <code>
              {`import json

myvar = '{"name":"John","age":30,"cars":["Ford", "BMW", "Fiat"]}'
parse_myvar = json.loads(myvar)
print(parse_myvar["cars"][0])`}
            </code>
          </pre>
        </div>

        <p className="mb-4">Output:</p>

        <div className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
          <pre className="font-mono text-sm">
            <code>Ford</code>
          </pre>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
          <h3 className="font-semibold mb-2">Important Notes:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Python comes with a built-in package called json for encoding and decoding JSON data so we need to “import json” first</li>
            <li>For multi-line strings or special characters, use triple quotes <code className="bg-gray-100 px-1 rounded">"""</code></li>
          </ul>
        </div>
      </div>

      {/* Multi-line Example */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800  pb-2">Multi-line JSON Strings</h2>

        <p className="mb-4">Example using triple quotes for better readability:</p>

        <div className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="font-mono text-sm">
            <code>
              {`myvar = """
{
  "name": "John",
  "age": 30,
  "cars": [
    "Ford", 
    "BMW", 
    "Fiat"
  ]
}
"""`}
            </code>
          </pre>
        </div>
      </div>

      {/* Practical Applications */}
      <div data-animate className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800  pb-2">Practical Applications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">API Communication</h3>
            <p>Most web APIs use JSON for sending and receiving data between clients and servers.</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">Configuration Files</h3>
            <p>JSON is commonly used for configuration files due to its readability and structure.</p>
          </div>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate className="mt-12 mb-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default JsonTutorial;