import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import CardGrid from './CardGrid';
import styles from '../styles/MainContent.module.css';
import styles2 from '../App.module.css'
import SearchBar from './SearchBar';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('cities');

  const handleSelect = (selectedKey) => {
    setActiveTab(selectedKey);
  };

  return (
    <div className={styles2.content}>
    <Container fluid >
      <Row>
          <Nav 
          variant="tabs" 
          defaultActiveKey="cities" 
          onSelect={handleSelect} 
          className={styles.customNav}
          >
            <Col md={2}>
            <Nav.Item>
              <Nav.Link eventKey="cities">Cities</Nav.Link>
            </Nav.Item>
            </Col>

            <Col md={2}>
            <Nav.Item>
              <Nav.Link eventKey="clubs">Clubs</Nav.Link>
            </Nav.Item>
            </Col>

            <Col md={2}>
            <Nav.Item>
              <Nav.Link eventKey="events">Race Events</Nav.Link>
            </Nav.Item>
            </Col>

            <Col md={1}></Col>

            <Col md={4}>
              <SearchBar />
            </Col>
          </Nav>
          
          <Col md={12}>
          <CardGrid category={activeTab} />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default MainContent;