import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
    return (
        // <nav>
        //     <Link className="pe-3" to="reviews">
        //         REVIEWS
        //     </Link>
        //     <Link className="pe-3" to="dashboard">
        //         DASHBOARD
        //     </Link>
        //     <Link className="pe-3" to="blogs">
        //         BLOGS
        //     </Link>
        //     <Link className="pe-3" to="about">
        //         ABOUT
        //     </Link>
        // </nav>

        <Navbar bg="dark" variant="dark" expand="sm">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>MacMart</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="nav-menu"></Navbar.Toggle>
                <Navbar.Collapse id="nav-menu">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>HOME</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reviews">
                            <Nav.Link>REVIEWS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/dashboard">
                            <Nav.Link>DASHBOARD</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blogs">
                            <Nav.Link>BLOGS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>ABOUT</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
