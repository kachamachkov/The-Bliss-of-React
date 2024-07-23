import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">The Bliss of React</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Posts</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                        <Nav.Link href="#pricing">Register</Nav.Link>
                        <Nav.Link href="#pricing">Logout</Nav.Link>
                        <Nav.Link href="#pricing">Create</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;