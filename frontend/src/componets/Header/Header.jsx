import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import './Header.css';


function Header() {
    return (
        <Container>
            <Row>
                <Col>{/* navBar take full col 12  */}
                    <Navbar  fixed='top' id='navBar' expand='md'>
                        {/* nav baar me ek or container hotata ha bootstrap me */}
                        <Container>
                            {/* nav bar logo */}
                            <Navbar.Brand href="/">
                                <img src="" alt="logo image" />
                                {/* give space for this */}
                                &nbsp;
                                my website
                            </Navbar.Brand>
                             {/* create nav bar toggle */}
                            <Navbar.Toggle aria-controls="my-nav"/>
                            <Navbar.Collapse id='my-nav'>
                            {/* create naviagtion link  */}
                            <Nav className="me-auto fw-bold">
                                <Nav.Link href="/" className="header-link"> Home</Nav.Link>
                                <Nav.Link href="/"  className="header-link"> About Us</Nav.Link>
                                <Nav.Link href="/"  className="header-link"> Testomonial</Nav.Link>
                                <Nav.Link href="/product"  className="header-link"> product</Nav.Link>
                                <Nav.Link href="/"  className="header-link"> contact</Nav.Link>
                            </Nav>
                            {/* right side me kuch show karane ke liye */}
                            <Navbar.Text>this is singUp button</Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}
export default Header;