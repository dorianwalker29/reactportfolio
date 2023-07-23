// src/components/Work.js
import React from 'react';

const Work = () => {
  return (
    <section className="py-16 bg-gray-800" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <h2 className="text-2xl font-extrabold text-white">My Work</h2>
        <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {/* First Work */}
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img src="https://cdn.pixabay.com/photo/2021/07/24/01/42/zebra-dove-6488440_960_720.jpg"
                alt="Work 1"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                  <span className="absolute inset-0"></span>
                  Basic Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </article>

          {/* Second Work */}
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img src="https://cdn.pixabay.com/photo/2021/09/08/20/45/bird-6607863_960_720.jpg.jpg"
                alt="Work 2"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                  <span className="absolute inset-0"></span>
                  Basic Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </article>

          {/* Third Work */}
          <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
            <div className="relative w-full h-80 md:h-64 lg:h-44">
              <img src="https://cdn.pixabay.com/photo/2021/08/03/11/01/stairs-6519085_960_720.jpg"
                alt="Work 3"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="px-3 py-4">
              <h3 className="text-sm text-gray-500 pb-2">
                <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                  <span className="absolute inset-0"></span>
                  Intermediate Level
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Work;
