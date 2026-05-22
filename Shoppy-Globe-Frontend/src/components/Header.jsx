import React from 'react';
import { Link } from 'react-router-dom';
import {Menu , ShoppingCart, User , X} from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function handleUserClick() {

    const isAuth = localStorage.getItem("isAuth");

    if (isAuth) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }

    return (
        <nav className='w-full flex justify-between items-center'>
            <h1 className='w-auto'>Shoppy-Globe</h1>
            <div className='w-full flex gap-2 justify-end sm:justify-center'>
                <input className='w-[60%] py-2 px-1 outline-none border rounded-full'
                    type="text" placeholder='search the product...' />
                <button className='border py-2 px-1 rounded-full'>Search</button>
            </div>
            <div className='hidden sm:flex'>
                <Link to={"/"}>Home</Link>
                <Link to={"/category"}>Category</Link>
                <Link to={"/cart"}><ShoppingCart size={20} /></Link>
                <Link to={"/user"}><User size={20} /></Link>
            </div>
            <button
                className="block sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen
                    ? <X />
                    : <Menu size={20} strokeWidth={1.5} />
                }
            </button>

            <Link className="px-1" to="/cart">
                <ShoppingCart size={20} strokeWidth={1.5} />
            </Link>

            <button className="px-1" onClick={handleUserClick}>
                <User size={20} strokeWidth={1.5} />
            </button>

            {
        isOpen && (
            <div className="absolute top-14 right-4 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-3 w-40 z-50">

                <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                </Link>

                <Link to="/category" onClick={() => setIsOpen(false)}>
                    Category
                </Link>

                <Link to="/product" onClick={() => setIsOpen(false)}>
                    Products
                </Link>

            </div>
        )
    }
        </nav >
    );
}

export default Header;
