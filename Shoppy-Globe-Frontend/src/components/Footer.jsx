import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../assets/footer_bg.png";

const Footer = () => {
  return (
    <footer
      className="relative mt-10 text-white bg-cover bg-center rounded-lg"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="bg-black/50 backdrop-blur-md rounded-lg">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6 py-10">

          <div>
            <h2 className="text-lg font-semibold mb-3">Shoppy-Globe</h2>
            <p className="text-sm text-gray-200">
              Your one-stop destination for the best products at unbeatable prices.
              Shop smart, shop easy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <div className="flex flex-col gap-2 text-gray-300">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/category" className="hover:text-white">Category</Link>
              <Link to="/cart" className="hover:text-white">Cart</Link>
              <Link to="/user" className="hover:text-white">Account</Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-sm text-gray-200">Email: support@shoppyglobe.com</p>
            <p className="text-sm text-gray-200">Phone: +91 99999 99999</p>
            <p className="text-sm text-gray-200">Gurgaon, India</p>
          </div>

        </div>

        <div className="border-t border-white/20 text-center py-4 text-sm text-gray-300">
          © {new Date().getFullYear()} Shoppy-Globe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;