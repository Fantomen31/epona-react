import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'



function App() {
  return (
    <Router>
      <div className={styles.app}>
        <NavBar />
        <Container>
          <h1>Home</h1>
          <h1>Login</h1>
          <h1>Sign-up</h1>
        </Container>
      </div>
    </Router>
  );
}

export default App;
