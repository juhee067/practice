import "./App.css";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";

import Product from "./components/Product";
import data from "./data/data";
function App() {
  return (
    <div className="App">
      <Navbar variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="menu" href="#Letter">
              Letter
            </Nav.Link>
            <Nav.Link className="menu" href="#Gift">
              Gift
            </Nav.Link>
            <Nav.Link className="menu" href="#Home">
              Home
            </Nav.Link>
            <Nav.Link className="menu" href="#Writing">
              Writing a Letter
            </Nav.Link>
            <Nav.Link className="menu" href="#Camera">
              Camera
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>{" "}
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <Product title={item.title} price={item.price} key={item.id} />
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
