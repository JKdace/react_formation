import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import {Container, Nav, Navbar as NavBar} from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/jquery/dist/jquery.js'
import '/node_modules/bootstrap/dist/js/bootstrap.js'
import { LinkContainer } from 'react-router-bootstrap';

const Navbar = () => (
  
  <div className={styles.Navbar} data-testid="Navbar">
    <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/"><Nav.Link></Nav.Link></LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/thumbnail"><Nav.Link>Thumbnail</Nav.Link></LinkContainer>
            <LinkContainer to="/editor"><Nav.Link>New</Nav.Link></LinkContainer>
            <LinkContainer to="/editor/1"><Nav.Link>Edit id 1</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </NavBar>
  </div>

);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
