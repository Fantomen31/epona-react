import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form onSubmit={handleSubmit} className={styles.searchForm}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search for cities, clubs, or events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        <Button type="submit" variant="outline-secondary" className={styles.searchButton}>
          <Search />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;