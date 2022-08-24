import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import './Projects.css';
import project_01 from "../../Images/Projects/akbar-store.netlify.app_ (1).png";
import project_02 from "../../Images/Projects/bikes-cbr.netlify.app_ (1).png";
import project_03 from "../../Images/Projects/pcommerce-project.netlify.app_.png";
import project_04 from "../../Images/Projects/programming-hero-react.netlify.app_ (1).png";
import project_05 from "../../Images/Projects/cars-zone-b1414.web.app_ (1).png";
import project_06 from "../../Images/Projects/tourandtravel-6aff5.web.app_.png";

const Projects = () => {
  return (
    <Container>
        <p className="fs-1 fw-bold p-5 text-secondary m-2">My Latest Projects</p>
        <p className="fs-5 text-center text-secondary py-2">There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration.</p>
      <Row>
        <Col xs={6} md={4}>
          <div className="card custom-css shadow ">
            <img src={project_01} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start">Akbar Store </h5>
              <p className="card-text text-start">
                This is an E-Commerce Website , where user can buy product.
              </p>
              <p className="text-start text-bold">Uses Technology</p>
              <small>
                <Button variant="success">bootstrap</Button>{" "}
                <Button variant="info">JavaScript</Button>{" "}
                <Button variant="secondary">HTML</Button>
              </small>
            </div>
            <div className="card-footer">
              <Button variant="outline-secondary">
                <a
                 className="text-decoration-none text-dark" href="https://akbar-store.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Link
                </a>
              </Button>
              <Button variant="outline-secondary">Code Link</Button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="card custom-css shadow">
            <img src={project_03} className="card-img-top " alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start">Panda Commerce </h5>
              <p className="card-text text-start">
                This is an E-Commerce Website , where user can buy product.
              </p>
              <p className="text-start text-bold">Uses Technology</p>
              <small>
                <Button variant="success">bootstrap</Button>{" "}
                <Button variant="danger">Css</Button>{" "}
                <Button variant="secondary">HTML</Button>
              </small>
            </div>
            <div className="card-footer">
              <Button variant="outline-secondary">
                <a
                 className="text-decoration-none text-dark" href="https://pcommerce-project.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Link
                </a>
              </Button>
              <Button variant="outline-secondary">Code Link</Button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <div className="card custom-css shadow">
            <img src={project_02} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start">Honda CRB </h5>
              <p className="card-text text-start">
                 This is Honda Related website where people can visit the website.
              </p>
              <p className="text-start text-bold">Uses Technology</p>
              <small>
                <Button variant="danger">Css</Button>{" "}
                <Button variant="secondary">HTML</Button>
              </small>
            </div>
            <div className="card-footer">
              <Button variant="outline-secondary">
                <a
                 className="text-decoration-none text-dark" href="https://bikes-cbr.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Link
                </a>
              </Button>
              <Button variant="outline-secondary">Code Link</Button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4} className="my-5">
          <div className="card custom-css shadow">
            <img src={project_04} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start">Programmer Team </h5>
              <p className="card-text text-start">
                This is a React Application , Any One Can Select and Add programmer on her list 
              </p>
              <p className="text-start text-bold">Uses Technology</p>
              <small>
                <Button variant="danger">React</Button>{" "}
                <Button variant="secondary">Bootstrap</Button>
              </small>
            </div>
            <div className="card-footer">
              <Button variant="outline-secondary">
                <a
                 className="text-decoration-none text-dark" href="https://programming-hero-react.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Link
                </a>
              </Button>
              <Button variant="outline-secondary">Code Link</Button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4} className="my-5">
          <div className="card custom-css shadow">
            <img src={project_05} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start">Cars-Zone</h5>
              <p className="card-text text-start">
                This is Full Stack Project. Admin Panel , Admin can use or remove the product.
              </p>
              <p className="text-start text-bold">Uses Technology</p>
              <small>
                <Button variant="danger">React</Button>{" "}
                <Button variant="secondary">Express</Button>
                <Button variant="success">Node</Button>
              </small>
            </div>
            <div className="card-footer">
              <Button variant="outline-secondary">
                <a
                 className="text-decoration-none text-dark" href="https://cars-zone-b1414.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Link
                </a>
              </Button>
              <Button variant="outline-secondary">Code Link</Button>
            </div>
          </div>
        </Col>
        <Col xs={6} md={4} className="my-5">
          <div className="card custom-css shadow">
            <img src={project_06} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-start ">Tour and Travel</h5>
              <p className="card-text text-start">
                 Full stack Application, Any One Can Select location and booking the place.
              </p>
              <p className="text-start">Uses Technology</p>
              <small>
                <Button variant="danger">React</Button>{" "}
                <Button variant="secondary">Express</Button>
                <Button variant="success">Node</Button>
              </small>
            </div>
            <div className="card-footer">
              <Button variant="outline-secondary">
                <a
                 className="text-decoration-none text-dark" href="https://tourandtravel-6aff5.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Link
                </a>
              </Button>
              <Button variant="outline-secondary">Code Link</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
