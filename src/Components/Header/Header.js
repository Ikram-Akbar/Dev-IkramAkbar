import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>














        // <div>
        //     <Navbar bg="dark" variant="dark">
        //         <Container fluid>
        //             <Navbar.Brand className=" ms-4 fw-bold" href="#home">IKRAM AKBAR</Navbar.Brand>
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#About">About</Nav.Link>
        //                 <Nav.Link href="#projects">Projects</Nav.Link>
        //                 <Nav.Link href="#Contact">Contact</Nav.Link>
        //                 <Nav.Link href="#Resume"><a className="text-decoration-none text-secondary" href="https://drive.google.com/file/d/1MJaIeZoxOFYdhPHLigIfbLkA7BElBigF/view?usp=sharing" rel="noreferrer"target="_blank">My Resume</a></Nav.Link>
        //             </Nav>
        //         </Container>
        //     </Navbar>
        // </div>
    );
};

export default Header;