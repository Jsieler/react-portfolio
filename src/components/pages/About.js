import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import image from '../../assets/images/bio-image.jpeg'

const About = () => (
  <Container>
    <Row>
      <Col>
      <img src={image} className="bio-image mx-auto d-block"  width="200px" alt="bio"></img>
      <h2>About Me</h2>
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="about-me-text">
          "My name is Joshua Sieler, and this is my portfolio I have made with React. I'm currently enrolled in the University of Utah Professional Education Coding Boot Camp, where I have discovered my new passion for coding! I'm in the process of becoming a Full-Stack Web Developer, in my portfolio you can find how to contact me, and also view my projects I have made using a variety of coding languages."
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
