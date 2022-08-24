import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faReact, faJs, faBootstrap, faNodeJs, faGit, faNpm, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./About.css";
import Slide from 'react-reveal/Slide';
import img1 from '../../Images/Protfolio-Images/rsz_transparent-bg-ikram-2.png';
const About = () => {
    return (
        <Container fluid className='bg-dark my-5 py-5'>
            <Row>
                <Col xs={12} md={4}>
                    <div className="custom-pic">
                        <img className="img-fluid" src={img1} alt="ikram'bg" />
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <div>
                        <Slide right>
                            <div className="text-light text-start">
                                <div className="fs-1 text-start py-3 custom-about">
                                    <h2 className="fs-1">About Me </h2>
                                </div>
                                <p className=" text-start">I'm Ikram Akbar . Full Stack MERN Web Developer.

                                    I have more than two years work experience in front-end and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.
                                </p>
                                <p>
                                    On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.
                                </p>
                                <p>
                                    In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting.I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                                    <br />
                                    Below is a list of my current technical skills: </p>
                            </div>
                        </Slide>
                    </div>

                    <Slide bottom>
                        <div className="d-flex d-sm-none col-md-12 col-sm-6 ">

                            <h1 className='me-5'><FontAwesomeIcon style={{ color: "#FFF" }} icon={faHtml5}></FontAwesomeIcon></h1>

                            <h1 className='me-5'><FontAwesomeIcon style={{ color: "#FFF" }} icon={faCss3Alt}></FontAwesomeIcon></h1>

                            <h1 className='me-5'> <FontAwesomeIcon style={{ color: "#FFF" }} icon={faJs}></FontAwesomeIcon></h1>


                            <h1 className='me-5'> <FontAwesomeIcon style={{ color: "#FFF" }} icon={faBootstrap}></FontAwesomeIcon></h1>

                            <h1 className='me-5'> <FontAwesomeIcon style={{ color: "#FFF" }} icon={faReact}></FontAwesomeIcon></h1>

                            <h1 className='me-5'> <FontAwesomeIcon style={{ color: "#FFF" }} icon={faNodeJs}></FontAwesomeIcon></h1>

                            <h1 className='me-5'> <FontAwesomeIcon style={{ color: "#FFF" }} icon={faGit}></FontAwesomeIcon></h1>
                            <h1 className='me-5'> <FontAwesomeIcon style={{ color: "#FFF" }} icon={faGithub}></FontAwesomeIcon></h1>


                            <h1 className='me-5'> <FontAwesomeIcon style={{ color: "#FFF" }} icon={faNpm}></FontAwesomeIcon></h1>

                        </div>
                    </Slide>

                </Col>
            </Row>
        </Container>
    );
};

export default About;