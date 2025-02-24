import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './Login.css';  // Make sure your CSS styles are updated accordingly
import { useState } from 'react';
import { LogInUser } from '../../utils/service/AxiosApi';
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import CustomInput from '../../componets/common/customeInput/CustomInput';
import CustomPasswordInput from '../../componets/common/cusotmePassordInput/CustomPasswordInput';
import SubmitButton from '../../componets/common/Button/SubmitButton';

// import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Track login loading state
    const [errors, setErrors] = useState({ email: "", password: ""});
    const logIn = async (loginData) => {
        setLoading(true); // Start loading
        setErrors({ email: "", password: "" });
        try {
            const response = await LogInUser(loginData);

            console.log(response.data, "ow")
            if (response.data?.data?.isOwner) {
                console.log("owner login");
            } else {
                <Navigate to={'/'} />//this is like useNaviaget() hook
            }
        } catch (e) {
            const errorMessage = e.response?.data?.message || "Login failed! Please try again.";
            if (e.response && e.response.data) {
                const {  errors } = e.response.data;
                // Set field-specific errors
                setErrors({
                    email: errors?.email ? errors.email[0] : "",
                    password: errors?.password ? errors.password[0] : "",
                });
            }
            toast.error(errorMessage, { position: "top-right" });
        } finally {
            setLoading(false);// Stop loading
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submis   console.log(e.response.data, "error")sion behavior
        const loginData = {
            email: email,
            password: password,
        };
        logIn(loginData);
    }
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
                            <Form onSubmit={handleSubmit}>
                                <CustomInput
                                    label="Email Address"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    error={errors.email} // Pass field-specific error
                                />
                                <CustomPasswordInput
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    error={errors.password} // Pass field-specific error
                                />
                                {/* <Button type="submit" size="sm" className="w-100" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <Spinner animation="border" size="sm" className="me-2" />
                                            Logging in...
                                        </>
                                    ) : (
                                        "Login"
                                    )}
                                </Button> */}
                               <SubmitButton type='submit'  size="sm" className="w-100" loading={loading}>Login</SubmitButton>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Toast Container (must be included in your app) */}
            <ToastContainer />
        </div>
    );
}

export default Login;
