import { Navbar, Nav } from "react-bootstrap";

const Nav1 = () => (
  <Navbar expand="lg" className="gap-3 px-3">
    <Navbar.Brand href="#">
      
      <h1> Dashboard</h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="flex-grow-1 justify-content-evenly">
        <Nav.Item>
          <Nav.Link href="/chart1">Chart1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/chart2">Chart2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/chart3">Chart3</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Nav1;
