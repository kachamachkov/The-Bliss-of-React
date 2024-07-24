import Form from 'react-bootstrap/Form';

function Login() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
        </Form>
    );
}

export default Login;