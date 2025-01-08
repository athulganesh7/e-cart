import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-600 w-full p-5 text-white fixed">
      <div className="flex flex-wrap justify-between">
        {/* Intro */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4 ">
          <h5 className="text-lg font-semibold flex items-center">
          <i class="fa-solid fa-cart-shopping"></i> E-Cart
          </h5>
          <p className="mt-2 ">Designed and built with all the love in the world by <br/> the Boot team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>

        {/* Links */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
          <h5 className="text-lg font-semibold">Links</h5>
          <Link to="/" className="block mt-2 text-gray-300 hover:text-white">Landing Page</Link>
          <Link to="/Home" className="block mt-2 text-gray-300 hover:text-white">Home Page</Link>
          <Link to="/Cart" className="block mt-2 text-gray-300 hover:text-white">Cart Page</Link>
        </div>

        {/* Guides */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
          <h5 className="text-lg font-semibold">Guides</h5>
          <a
            href="https://react.dev/"
            target="_blank"
            className="block mt-2 text-gray-300 hover:text-white"
          >
            React
          </a>
          <a
            href="https://react-bootstrap.netlify.app/"
            target="_blank"
            className="block mt-2 text-gray-300 hover:text-white"
          >
            React Bootstrap
          </a>
          <a
            href="https://reactrouter.com/"
            target="_blank"
            className="block mt-2 text-gray-300 hover:text-white"
          >
            React Router
          </a>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-4">
          <h5 className="text-lg font-semibold">Contact Us</h5>
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Enter your email here ..."
              className="flex-grow p-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400"
            />
            <button className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="flex justify-between mt-3">
            <a
              href="https://x.com/?lang=en"
              className="text-gray-300 hover:text-white"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-gray-300 hover:text-white"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              className="text-gray-300 hover:text-white"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://api.linkedin.com/login"
              className="text-gray-300 hover:text-white"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/explore"
              className="text-gray-300 hover:text-white"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.microsoft.com/en-in/windows/sync-across-your-devices?r=1"
              className="text-gray-300 hover:text-white"
              target="_blank"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 mt-4">Copyright &#169;2024. Built with Docusaurus.</p>
    </div>
  );
};

export default Footer;
