import React from 'react';
import beer from '../assets/beer-traveler.jpg';
import food from '../assets/foodbg.png';
import face from '../assets/dorian4346.png'


const Works = () => {
  return (
    <div id='work' className='w-full md:h-screen text-gray-300 bg-gray-900'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline '>
            My Work
          </p>
          <p className='py-6 text-2xl'></p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${beer})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Beer Traveler
              </span>
              <p className='text-center'>An application using API to find local breweries and forecast. </p>
              <div className='pt-8 text-center'>
                <a href='https://jkrieger6.github.io/beer-traveler/'
                    target="_blank"
                    rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/jkrieger6/beer-traveler'
                    target="_blank"
                    rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${food})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                The Recipe Drawer
              </span>
              <p className='text-center'>A social media application for sharing food recipes.</p>
              <div className='pt-8 text-center'>
                <a href='https://the-recipe-drawer.herokuapp.com/'
                    target="_blank"
                    rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/BigMikeNova/the-recipe-drawer'
                    target="_blank"
                    rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${face})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                React Portfolio
              </span>
              <p className='text-center'>A personal portfolio using React.</p>
              <div className='pt-8 text-center'>
                <a href='https://dorianwalker29.github.io/reactportfolio/'
                    target="_blank"
                    rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/dorianwalker29/reactportfolio.git'
                    target="_blank"
                    rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>        
</div>
  );
};
export default Works;