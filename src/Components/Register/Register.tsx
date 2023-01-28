import { Container, Row, Col } from "react-bootstrap";
import './Register.css';




function Register() {
    return (
        <div className="page-section">
            <Container>
                <Row className="login-register">
                    <Col sm={12} md={12} xs={12} lg={8}>
                        <form action="#">
                            <div className="login-form">
                                <h4 className="login-title">Register</h4>
                                <Row>
                                    <Col md={6}>
                                        <label>First Name</label>
                                        <input type="text" placeholder="First Name" />
                                    </Col>
                                    <Col md={6}>
                                        <label>Last Name</label>
                                        <input type="text" placeholder="Last Name" />
                                    </Col>
                                    <Col md={12}>
                                        <label>Email Address*</label>
                                        <input type="email" placeholder="Email Address" />
                                    </Col>
                                    <Col md={6}>
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" />
                                    </Col>
                                    <Col md={6}>
                                        <label>Confirm Password</label>
                                        <input type="password" placeholder="Confirm Password" />
                                    </Col>
                                    <Col>
                                        <button className="register-button">Register</button>
                                    </Col>
                                </Row>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register;