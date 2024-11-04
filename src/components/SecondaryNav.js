import React from 'react';
import { Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';

const SecondaryNav = () => {
  return (
    <div className="secondary-nav">
      <Container className="d-flex align-items-center justify-content-between py-3">
        <div className="nav-links">
          <Link to="/cities" className="nav-item">Cities</Link>
          <Link to="/clubs" className="nav-item">Clubs</Link>
          <Link to="/events" className="nav-item">Events</Link>
        </div>
        <InputGroup className="search-bar">
          <Form.Control
            placeholder="Search for cities, clubs, or events..."
            aria-label="Search"
          />
          <InputGroup.Text>
            <Search />
          </InputGroup.Text>
        </InputGroup>
      </Container>
    </div>
  );
};

export default SecondaryNav;