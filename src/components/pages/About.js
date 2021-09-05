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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
