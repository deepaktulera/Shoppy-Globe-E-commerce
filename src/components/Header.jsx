import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart , User } from 'lucide-react';

const Header = () => {
    return (
        <nav>
            <h1>Shoppy-Globe</h1>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/category"}>Category</Link>
                <Link to={"/cart"}><ShoppingCart size={20}/></Link>
                <Link to={"/user"}><User size={20}/></Link>
            </div>
        </nav>
    );
}

export default Header;
