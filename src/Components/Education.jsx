import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative px-6 md:px-12 py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
           Education
        </h2>
        <span className="block w-20 h-1 bg-blue-600 mx-auto mt-3 rounded"></span>
      </div>

      {/* Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-blue-500"></div>

        {/* Masters */}
        <div className="relative mb-12 flex items-start" data-aos="fade-right">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg">
            
          </div>
          <div className="ml-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
              Masters in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              University of Central Missouri | Dec 2024
            </p>
          </div>
        </div>

        {/* Bachelor */}
        <div className="relative mb-12 flex items-start" data-aos="fade-left">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg">
            📡
          </div>
          <div className="ml-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
              Bachelor of Engineering in Electronics and Communication
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Osmania University | Apr 2021
            </p>
          </div>
        </div>

        {/* Diploma */}
        <div className="relative mb-12 flex items-start" data-aos="fade-right">
          <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg">
            💻
          </div>
          <div className="ml-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-600">
              Diploma in Communication Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Government Institute of Electronics | May 2017
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
