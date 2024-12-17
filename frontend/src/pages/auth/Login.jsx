import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Login.css';  // Make sure your CSS styles are updated accordingly

import { useState } from 'react';
import CustomPasswordInput from '../../componets/cusotmePassordInput/CustomPasswordInput';
import CustomInput from '../../componets/customeInput/CustomInput';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="login-container">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h1 className="l-details">Welcome to Green Volte Traders</h1>
                        <p className="l-details">
                            Our mission is to deliver high-quality, environmentally friendly products that empower individuals
                            and businesses to lead a greener lifestyle while enhancing the aesthetics of their surroundings.
                            Our diverse range of products is designed to meet the growing needs of eco-conscious customers.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Card className="p-4 shadow-lg login-card">
                            <h1 className="login-h1">Login Here</h1>
                            <Form>
                                <CustomInput
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                />
                                <CustomPasswordInput
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                />
                                <Button type="submit" size="sm" className="w-100">Login</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
