import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-800" id="contact">
      <div className="max-w-3xl mx-auto">
      <h2 className="text-white text-3xl font-bold mb-8">Contact</h2>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="nick">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="nick"
                type="text"
              />
              <p className="text-gray-600 text-xs italic"></p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
              <p className="text-gray-600 text-xs italic"></p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
              <p className="text-gray-600 text-xs italic"></p>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
