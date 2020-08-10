import React from 'react';
import { Nav} from 'react-bootstrap';
import { Navbar as BootNav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component{
    render(){
        return(
            <div>
            <BootNav collapseOnSelect expand='sm'>
            <BootNav.Toggle aria-controls="responsive-navbar-nav" />
            <BootNav.Collapse id="responsive-navbar-nav">
                <Nav className="flex-column mr-auto-column">
                    <h1>Levain</h1>
                    <NavLink to="/today" className="nav-link" activeClassName="nav-link active" ><i className="icon calendar outline"></i> Today</NavLink>
                    <NavLink exact to="/" className="nav-link" activeClassName="nav-link active" ><i className="icon calendar"></i> Production</NavLink>
                    <div className="rule"></div>
                    <NavLink to="/customers" className="nav-link" activeClassName="nav-link active" ><i className="icon users"></i> Customers</NavLink>
                    <NavLink to="/orders" className="nav-link" activeClassName="nav-link active" ><i className="icon folder open"></i> Orders</NavLink>
                    <NavLink to="/products" className="nav-link" activeClassName="nav-link active" ><i className="icon align center"></i> Products</NavLink>
                </Nav>
            </BootNav.Collapse>
            </BootNav>
            </div>
        )
    }
}

export default Navbar;