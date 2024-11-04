import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.webp';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" className={styles.navbar}>
      <Container className={styles.container}>
        <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
          <img 
            src={logo}
            alt="Epona logo"
            height="45"
          />
          <span className={styles.brandText}>Epona: The Runners Hub</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navbarCollapse}>
          <Nav>
            <Nav.Link as={Link} to="/" className={styles.navLink}>
              <FontAwesomeIcon icon={faHome} className={styles.faIcon} />
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className={styles.navLink}>
              <FontAwesomeIcon icon={faSignInAlt} className={styles.faIcon} />
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className={styles.navLink}>
              <FontAwesomeIcon icon={faUserPlus} className={styles.faIcon} />
              Sign-up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;