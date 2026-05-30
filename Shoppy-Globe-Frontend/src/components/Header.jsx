import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User, X, Search } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='sticky w-full top-0 shadow-2xl rounded-full z-100 bg-gray-50 flex justify-between gap-2 items-center sm:px-4'>
            <img src="/logo.svg" alt="Logo" className="w-10 h-10 sm:w-14 sm:h-14 object-contain object-center m-auto" />
            <div className='w-full flex gap-3 items-center justify-center'>
                <label className='relative w-full flex items-center'>
                    <input className='w-full py-2 px-4 outline-none border rounded-full overflow-hidden'
                        type="text" placeholder='Search the product...'
                    />
                    <Search className='border-l absolute bg-white p-1 right-2 active:scale-95' />
                </label>
            </div>
            <div className='hidden sm:flex sm:gap-2 sm:items-center'>
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
                    ? <X size={20} strokeWidth={1.5}/>
                    : <Menu size={20} strokeWidth={1.5} />
                }
            </button>

            {isOpen && (
                <div className="absolute top-12 right-2 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-3 w-40 z-50">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/category" onClick={() => setIsOpen(false)}>
                        Category
                    </Link>
                    <Link to="/category" onClick={() => setIsOpen(false)}>
                        Cart
                    </Link>
                </div>
            )
            }
        </nav >
    );
}

export default Header;
