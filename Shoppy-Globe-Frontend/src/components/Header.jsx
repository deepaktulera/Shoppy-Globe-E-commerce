import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ShoppingCart, User, X ,Search} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/searchSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const search = useSelector((store) => store.search);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearch(value));
    if (value.trim()) {
      navigate("/category");
    }
  };

  return (
    <nav className="sticky top-2 mb-2 z-50 w-full flex items-center justify-between px-3 py-2 backdrop-blur-xl bg-black/50 text-white rounded-full shadow-2xl">
      <Link to={'/'}>
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </Link>

      <div className="flex w-[80%] gap-2 mx-2">
        <input
        onKeyDown={(e)=>{
          if(e.code == "Enter"){
            dispatch(setSearch(searchText));
            navigate("/category");
            setSearchText("")
          }
        }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full py-2 px-4 outline-none border border-white/20 bg-white/10 text-white placeholder:text-gray-300 rounded-full"
          type="text"
          placeholder="Search products..."
        />
        <button
        onClick={() => {
            dispatch(setSearch(searchText));
            navigate("/category");
            setSearchText("")
          }}
        >
          < Search size={20} />
        </button>
      </div>

      <div className="hidden sm:flex items-center gap-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/category" className="hover:text-gray-300">
          Category
        </Link>

        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>

        <Link to="/user">
          <User size={20} />
        </Link>
      </div>

      <div className="flex sm:hidden items-center gap-2">
        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>

        <Link to="/user">
          <User size={20} />
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-14 right-3 bg-black/70 backdrop-blur-xl rounded-xl p-3 flex flex-col gap-3 w-40">
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
