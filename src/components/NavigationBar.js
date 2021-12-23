import React, { useContext } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
import imges from '../imgs/homeImg.png';
export default function NavigationBar() {
    const appState = useContext(AppContext);
    const { goToPage } = appState.navInfo;
    function handleNav(page) {
        goToPage(page);
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src={imges} width="25" height="25" alt="brand"
                    onClick={() => handleNav("welCome")} /> SAI DEEPAN STORE
            </Link>
            <Nav className="mr-auto" onSelect={handleNav}>
                <NavDropdown title="View Products" id="nav-dropdown">
                    <NavDropdown.Item eventKey="viewPRD">View Products</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Create Products" id="nav-dropdown">
                    <NavDropdown.Item eventKey="createPRD" >Create Products</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Bill Products" id="nav-dropdown">
                    <NavDropdown.Item eventKey="billPRD">Bill Products</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="View Reports" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">View Reports</NavDropdown.Item>
                    <NavDropdown.Item eventKey="cssplural">CSS Plural</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    );
}

{
    /*<Link to={"add"} className="nav-link">Add Book</Link>
    <Link to={"list"} className="nav-link">Book List</Link>
    <Link to={""} className="nav-link">User List</Link>*/
}