import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUser, FaClipboardList, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token on logout
    alert("Logout successful!");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <h2>BuildHabit</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-links">
            <Nav.Link as={Link} to="/home" className="navbar-link">
              <FaHome className="nav-icon" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/habits" className="navbar-link" style={{ display: token ? 'block' : 'none' }}>
  <FaClipboardList className="nav-icon" /> Habits
</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-link">
              <FaInfoCircle className="nav-icon" /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/profile" className="navbar-link" style={{ display: token ? 'block' : 'none' }}>
  <FaUser className="nav-icon" /> Profile
</Nav.Link>
            {token ? (
              <Nav.Link onClick={handleLogout} className="navbar-link">
                <FaSignOutAlt className="nav-icon" /> Logout
              </Nav.Link>
            ) : (
              <div className="auth-buttons">
                <button className="auth-btn login-btn" onClick={() => navigate("/login")}>
                  Login
                </button>
                <button className="auth-btn signup-btn" onClick={() => navigate("/signup")}>
                  Sign Up
                </button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
