import React, { useEffect, useRef } from "react";
import { animate, inView } from "motion";
import Accordion from "../Accordion";

const AiTutorial = () => {
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
        <h1 className="text-3xl font-bold mb-4">Generative AI vs Predictive AI Tutorial</h1>
      </div>

      {/* Introduction */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-6">
        <p className="mb-6">
          Artificial intelligence (AI) is full of concepts that seem familiar at first glance, but often reveal much more complexity upon closer examination. One such example is the distinction between Generative AI and Predictive AI. These terms are often confused, but understanding the difference is crucial. Let's explore them in more detail.
        </p>
        
        <div className="flex justify-center my-8">
          <img 
            fetchPriority="high" 
            decoding="async" 
            className="rounded-lg shadow-md" 
            src="https://www.9tut.com/images/ccna_self_study/Generative_Predictive_AI/Generative_Predictive_AI.jpg" 
            alt="Generative vs Predictive AI" 
            width="500"
          />
        </div>
      </div>

      {/* Generative AI Section */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Generative AI</h2>
        <p className="mb-4">
          Generative AI aims to create new content, such as images, text, or music that is similar to the existing data it has been trained on. It is used widely in content creation, art generation, writing, image synthesis, and simulating data for training other AI systems. Examples are the famous ChatGPT which can write essays, articles, and stories; Midjourney which can create realistic images from prompts.
        </p>
        
        <div className="flex flex-col items-center my-6">
          <img 
            decoding="async" 
            className="rounded-lg shadow-md mb-2" 
            src="https://www.9tut.com/images/ccna_self_study/Generative_Predictive_AI/Generative_AI.jpg" 
            alt="Generative AI example" 
            width="500"
          />
          <span className="text-sm text-gray-500">A picture created by Generative AI</span>
        </div>
      </div>

      {/* Predictive AI Section */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Predictive AI</h2>
        <p className="mb-6">
          Predictive AI aims to forecast future events or trends. It does this by analyzing historical data and identifying patterns. It is mostly used in finance (stock price prediction), healthcare (disease prediction), marketing (customer behavior prediction), and supply chain management (demand forecasting).
        </p>
      </div>

      {/* Comparison Section */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-8">
        <h2 className="text-2xl font-bold text-[#0D2153] mb-4">Comparison</h2>
        <p className="mb-6">A comprehensive comparison between Generative AI & Predictive AI is shown below:</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Parameters</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Generative AI</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Predictive AI</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Objective</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Generates new, original content</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Predicts and analyzes existing patterns or outcomes</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Examples</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Text, image, video generation</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Forecasting, classification</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Learning process</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Learns patterns and relationships in data</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Learns from historical data to make predictions</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Use cases</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Creative tasks, content creation</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Business analytics, financial forecasting</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Creativity</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Produces things that have never existed before</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lacks the element of content creation</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">Algorithms</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Uses complex algorithms and deep learning to generate new content based on the data it is trained on</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Generally relies on statistical algorithms and machine learning to analyze data and make prediction</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accordion */}
      <div data-animate style={{ opacity: 0, transform: 'translateY(30px)' }} className="mt-12">
        <Accordion className="space-y-1" />
      </div>
    </div>
  );
};

export default AiTutorial;