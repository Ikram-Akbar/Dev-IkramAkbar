import React,{useRef} from "react";
import emailjs from 'emailjs-com';
import {
  Col,
  Container,
  FloatingLabel,
  Button,
  Form,
  Row,
} from "react-bootstrap";
import contact from "../../Images/Background-Images/5124556.jpg";

const Contact = () => {  
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_votnbx4', 'template_jj9kbw9',e.target,'user_UgeND6L6d2zzDcgNmpBQF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();    
    };




  return (
    <Container className='fluid'>
      <h2 className="fs-1 fw-bold text-secondary">Contact</h2>
      <h2 className="fs-5 text-secondary">I’m always up for a chat.</h2>
      <Row>
        <Col sm={12} md={6}>
          <img className="img-fluid" src={contact} alt="contact us img" />
        </Col>
        <Col className="bg-success text-white my-5 p-5 shadow" sm={12} md={6}>
          <Form  ref={form} onSubmit={sendEmail}>
              <h6>Pop me an email</h6>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control  type="text" name="name"placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control  type="email" name="user_email" required placeholder="Enter email" />
            </Form.Group>
            <Form.Label>Leave Your Comments *</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                required
              />
            </FloatingLabel>
            <Button variant="outline-light" type="submit" value="Send"className="my-3 px-5">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
