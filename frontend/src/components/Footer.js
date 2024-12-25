import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Social media icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box"> {/* Footer box styling */}
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                BuildHabit helps you track and cultivate good habits with easy-to-follow plans and daily reminders.
              </p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              </Nav>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <Nav>
                <Nav.Link href="https://github.com/FarhanUsmanShaikh?tab=repositories" target="_blank" className="social-link">
                  <FaGithub className="footer-icon" /> Github
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/farhan-shaikh-a0002a2a8/" target="_blank" className="social-link">
                  <FaTwitter className="footer-icon" /> Twitter
                </Nav.Link>
                <Nav.Link href="https://github.com/FarhanUsmanShaikh?tab=repositories" target="_blank" className="social-link">
                  <FaInstagram className="footer-icon" /> Instagram
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/farhan-shaikh-a0002a2a8/" target="_blank" className="social-link">
                  <FaLinkedin className="footer-icon" /> LinkedIn
                </Nav.Link>
                
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <p>&copy; {new Date().getFullYear()} Habitbuild. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
