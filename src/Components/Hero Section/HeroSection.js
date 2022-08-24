import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import newImg from "../../Images/Protfolio-Images/Transparent-bg-ikram-2.png";

import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
const HeroSection = () => {
    return (
        <Container fluid className="bg-dark text-white fw-6">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8}>
                    <div className="text-start py-5 m-4">
                        <span className="text-secondary fw-bold">Welcome To My World</span>
                        <br />
                        <p   className="fs-1 fw-bolder">Hi, I'm Ikram Akbar</p>
                        <Jump>
                            <p className="fs-1 fw-bolder custom-color">
                                <h1> MERN Stack Web Developer</h1>
                            </p>
                        </Jump>
                        <p className="fs-1 fw-bolder">Based on BANGLADESH </p>
                        <Button variant="outline-secondary text-light">Learn More</Button>{' '}
                        <Button variant="outline-secondary"><a className="text-decoration-none text-light  " href="https://drive.google.com/file/d/1MJaIeZoxOFYdhPHLigIfbLkA7BElBigF/view?usp=sharing" rel="noreferrer" target="_blank">My Resume</a></Button>{' '}
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <Zoom right>
                        <div className="new-div">
                            <img className="img-fluid" src={newImg} alt="ikram's images" />
                        </div>
                    </Zoom>

                </Col>
            </Row>
        </Container>
    );
};

export default HeroSection;
