import {Link} from 'react-router-dom';
import React from 'react';


function Header() {
    return (
        <div>
            <Link to="/shop">Shop</Link>|<Link to="/cart">Cart</Link>|<Link to="/add-product">Add Product</Link>
        </div>
    )
}

export default Header;