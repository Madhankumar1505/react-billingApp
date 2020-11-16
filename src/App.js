import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Book from './components/Book';
import BookList from './components/BookList';
import CreateProduct from './components/CreateProduct/CreateProduct';
import ViewProduct from './components/ViewProduct/ViewProducts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  const headerArray =
  {
    heading: "Welcome to the Retail Shop",
    quote: "A Big Business Starts Small.",
    footer: "Madhan Kumar"
  };


  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
              <Route path="/" exact component={() => <Welcome headerArray={headerArray} />} />
              <Route path="/add" exact component={Book}></Route>
              <Route path="/list" exact component={BookList}></Route>
              <Route path="/createPrd" exact component={CreateProduct}></Route>
              <Route path="/edit/:productCode" exact component={CreateProduct}></Route>
              <Route path="/ViewPrd" exact component={ViewProduct}></Route>
              <Route path="*" component={() => <Welcome headerArray={headerArray} />}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}
