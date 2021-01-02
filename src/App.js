import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import { Router } from 'react-router-dom';
import Routes from './components/Routes';
import history from './services/history';

export default function App() {
  const headerArray =
  {
    heading: "Welcome to the Sai Deepan Store Shop",
    quote: "A Big Business Starts Small.",
    footer: "Madhan Kumar"
  };


  return (
    <Router history={history}>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Routes headerArray={headerArray} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}
