import logo from './logo.svg';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Jumbotron,
  Tab,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Tabs,
} from 'react-bootstrap';

import './App.css';
import response from './response.js';

import { useState } from 'react';

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="justify-content-between"
      bg="primary"
      variant="dark"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand>YASN (Yet Another News Source)</Navbar.Brand>
      <Form inline className="mr-sm-2">
        <Navbar.Collapse id="responsive-navbar-nav">
          <FormControl type="text" placeholder="Terms" />
          <Button>Search</Button>
        </Navbar.Collapse>
      </Form>
    </Navbar>
  );
}

function Heading() {
  return (
    <div>
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </Jumbotron>
    </div>
  );
}

function Content() {
  return (
    <div>
      <ControlledTabs> </ControlledTabs>
    </div>
  );
}

function ControlledTabs() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="justify-content-center"
    >
      <Tab eventKey="home" title="Trending ">
        <Container
          style={{
            display: 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'space-around',
          }}
        >
          {response['articles'].map((article) => {
            return (
              <Article
                title={article.title}
                publisher={article.publisher}
                date={article.date}
                author={article.author}
                key_words={article.key_words}
              />
            );
          })}
        </Container>
      </Tab>
      <Tab eventKey="profile" title="Fresh">
        <Container
          style={{
            display: 'flex',
            'flex-wrap': 'wrap',
            'justify-content': 'space-around',
          }}
        >
          {response['articles'].map((article) => {
            return (
              <Article
                title={article.title}
                publisher={article.publisher}
                date={article.date}
                author={article.author}
                key_words={article.key_words}
              />
            );
          })}
        </Container>
      </Tab>
    </Tabs>
  );
}

function TabToggle() {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Popular News</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Freshs</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div style={{ display: 'flex', 'flex-wrap': 'wrap' }}>
                  <Article /> <Article /> <Article /> <Article /> <Article />{' '}
                  <Article /> <Article /> <Article /> <Article />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">Bye</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function Article(props) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Text>
          {' '}
          <strong> {props.title} </strong>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Publisher : {props.publisher}</ListGroupItem>
        <ListGroupItem>Writer : {props.author} </ListGroupItem>
        <ListGroupItem>Date : {props.date} </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">View More</Card.Link>
        <Card.Link href="#">Similar Articles</Card.Link>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <div>
      <Navigation />
      <Heading></Heading>
      <Content></Content>
    </div>
  );
}

export default App;
