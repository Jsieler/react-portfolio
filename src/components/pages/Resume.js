import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Resume = () => (
  <Container>
    <Row>
      <h2>Resume</h2>
    </Row>

    <Row>
      <Col>
      <h3>Front End Proficiencies:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>The Dom</li>
          <li>APIs</li>
          <li>JSON</li>
          <li>React</li>
          <li>PWAs</li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col>
      <h3>Back End Proficiencies:</h3>
        <ul>
          <li>Node</li>
          <li>OOP</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MVC Paradigm</li>
          <li>Sequelize</li>
          <li>Testing</li>
          <li>NoSQL</li>
          <li>MERN Stack</li>
        </ul>
      </Col>
    </Row>

  </Container>
);

export default Resume;
