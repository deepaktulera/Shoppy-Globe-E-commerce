import React from "react";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, User, X, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky px-2 w-full top-2 z-50 mb-3 flex justify-between items-center py-1 sm:px-4
backdrop-blur-xl bg-black/20 text-white shadow-2xl rounded-full"
    >
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-10 h-10 sm:w-14 sm:h-14 object-contain object-center m-auto"
      />
      <div className="w-full flex gap-2 py-1 items-center justify-center ">
        <input
          className="w-[80%] py-2 px-4 outline-none border rounded-full overflow-hidden"
          type="text"
          placeholder="Search the product..."
        />
      </div>
      <div className="hidden sm:flex sm:gap-4 sm:items-center">
        <Link to={"/"} className="hover:text-gray-300">
          Home
        </Link>
        <Link to={"/category"} className="hover:text-gray-300">
          Category
        </Link>
        <Link to={"/cart"}>
          <ShoppingCart size={20} />
        </Link>
        <Link to={"/user"}>
          <User size={20} />
        </Link>
      </div>
      <button className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.5} />
        ) : (
          <Menu className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.5} />
        )}
      </button>
      <div className="flex px-1 gap-1">
        <Link className="sm:hidden" to={"/cart"}>
          <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </Link>
        <Link className="sm:hidden" to={"/user"}>
          <User className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-12 right-2 bg-black/40 shadow-xl rounded-xl p-4 flex flex-col gap-3 w-40 z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/category" onClick={() => setIsOpen(false)}>
            Category
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
