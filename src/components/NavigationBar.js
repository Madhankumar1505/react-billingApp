import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imges from '../imgs/homeImg.png';
export default function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src={imges} width="25" height="25" alt="brand" /> SAI DEEPAN STORE
            </Link>

            <Nav className="mr-auto">
                {
                    /*<Link to={"add"} className="nav-link">Add Book</Link>
                    <Link to={"list"} className="nav-link">Book List</Link>
                    <Link to={""} className="nav-link">User List</Link>*/
                }
                <NavDropdown title="View Products" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" href={"ViewPrd"}>View Products</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Create Products" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" href={"createPrd"}>Create Products</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Bill Products" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" href={""}>Bill Products</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="View Reports" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1" href={""}>View Reports</NavDropdown.Item>
                </NavDropdown>

            </Nav>
        </Navbar>
    );
}