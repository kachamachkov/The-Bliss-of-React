import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>The Bliss of React</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/posts'>Posts</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                        <Nav.Link as={Link} to='/logout'>Logout</Nav.Link>
                        <Nav.Link as={Link} to='/create'>Create</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;