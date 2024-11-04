import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../styles/CardGrid.module.css';

const CardGrid = ({ category }) => {
  // This is just placeholder data. You would typically fetch this from an API
  const items = [
    { id: 1, title: `${category} 1`, description: 'Description 1', imageUrl: 'https://picsum.photos/300/200?random=1' },
    { id: 2, title: `${category} 2`, description: 'Description 2', imageUrl: 'https://picsum.photos/300/200?random=2' },
    { id: 3, title: `${category} 3`, description: 'Description 3', imageUrl: 'https://picsum.photos/300/200?random=3' },
    { id: 4, title: `${category} 4`, description: 'Description 4', imageUrl: 'https://picsum.photos/300/200?random=4' },
    { id: 5, title: `${category} 5`, description: 'Description 5', imageUrl: 'https://picsum.photos/300/200?random=5' },
    { id: 6, title: `${category} 6`, description: 'Description 6', imageUrl: 'https://picsum.photos/300/200?random=6' },
    { id: 7, title: `${category} 7`, description: 'Description 7', imageUrl: 'https://picsum.photos/300/200?random=7' },
    { id: 8, title: `${category} 8`, description: 'Description 8', imageUrl: 'https://picsum.photos/300/200?random=8' },
    { id: 9, title: `${category} 9`, description: 'Description 9', imageUrl: 'https://picsum.photos/300/200?random=9' },
    { id: 10, title: `${category} 10`, description: 'Description 10', imageUrl: 'https://picsum.photos/300/200?random=10' },
  ];

  return (
    <Container fluid className={styles.cardGridContainer}>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className={styles.cardGrid}>
        {items.map((item) => (
          <Col key={item.id} className={styles.cardColumn}>
            <Card className={`${styles.card} bg-dark text-white`}>
              <Card.Img src={item.imageUrl} alt={item.title} className={styles.cardImage} />
              <Card.ImgOverlay className={styles.cardOverlay}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className={styles.lastUpdated}>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;