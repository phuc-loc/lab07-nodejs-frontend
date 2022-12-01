import { Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        // <div className="container">
        //     <div className="row" >
        //     <Link to="/shop">Shop</Link>|<Link to="/cart">Cart</Link>|<Link to="/add-product">Add Product</Link>
        //     </div>
        // </div>
        <div className="container">
            <Navbar dark expand="md">
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/shop">Shop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/cart">Cart</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/orders">Orders</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/add-product">Add Product</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;