import React from "react";
import { Nav, Figure, Row, Col } from "react-bootstrap";
import "../styles/Navbar.css";
import logorojo from "../images/logo sj rojo.png";
import tienda from "../images/BtnSVG.svg";

function Navbar1() {
  return (
    <div>
      <Row className="wrapper-navbar">
        <Col>
          <Figure>
            <Figure.Image
              className="nav-logo fluid"
              src={logorojo}
              alt="logo"
            />
          </Figure>
        </Col>
        <Col>
          <Nav>
          <Nav.Link className="item-nav">
              <a href="https://tienda.sanjorge.com.pe/">
                <img className="image-tienda" src={tienda} alt="tienda"/>
              </a>
            </Nav.Link>
            <Nav.Link className="item-nav">
              <a href="https://www.facebook.com/sanjorgeperu/">
                <i class="fab fa-facebook-f"></i>
              </a>
            </Nav.Link>
            <Nav.Link className="item-nav">
              <a href="https://twitter.com/sanjorgeperu">
                <i class="fab fa-twitter"></i>
              </a>
            </Nav.Link>
            <Nav.Link className="item-nav">
              <a href="https://www.youtube.com/channel/UC-UVcL19sd0HznKJDbKrJvg">
                <i class="fab fa-youtube-square"></i>
              </a>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar1;
