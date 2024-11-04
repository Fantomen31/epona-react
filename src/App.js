import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import { Route, Routes } from 'react-router-dom';
import './api/axiosDefaults';
import MainContent from './components/MainContent';



function App() {
  return (
  <div className={styles.appBackground}>
      <NavBar />
        <Container className={styles.app}>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/login" element={<h1>Login</h1>} />
            <Route path="/signup" element={<h1>Sign-up</h1>} />
          </Routes>
      </Container>
       <MainContent />
  </div>
  );
}

export default App;
