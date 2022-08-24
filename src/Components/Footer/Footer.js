import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white mt-5 p-5 ">
            <h2 className="fs-4 fw-bold ">Find Me</h2>
            <Row>
                <Col sm={12} md={12}>
                    <div className="d-flex mt-5 p-3 justify-content-center">
                        <a href="https://www.facebook.com/ikramakbar1997/">
                            <h1 className='me-5'><FontAwesomeIcon style={{ color: "#FFF" }} icon={faFacebook}> </FontAwesomeIcon></h1>
                        </a>
                        <a href="https://stackoverflow.com/users/14758149/ikram-akbar"><h1 className='me-5'><FontAwesomeIcon style={{ color: "#FFF" }} icon={faStackOverflow}></FontAwesomeIcon></h1></a>

                        <a href="https://twitter.com/Ikramakbar97"> <h1 className='me-5'><FontAwesomeIcon style={{ color: "#FFF" }} icon={faTwitter}></FontAwesomeIcon></h1></a>

                        <a href="https://www.linkedin.com/in/ikram-akbar-8631031b9/"> <h1 className='me-5'><FontAwesomeIcon style={{ color: "#FFF" }} icon={faLinkedin}></FontAwesomeIcon></h1></a>

                        <a href="https://github.com/Ikram-Git-Coder?tab=repositories">  <h1 className='me-5'><FontAwesomeIcon style={{ color: "#FFF" }} icon={faGithub}></FontAwesomeIcon></h1></a>
                    </div>
                    <div>
                        <small>All Right Reserved By IKRM AKBAR || 2021-22</small>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Footer;