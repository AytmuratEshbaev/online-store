import { Container, Row, Col } from "react-bootstrap";
import './Login.css';




function Login() {
    return (
        <div className="page-section">
            <Container>
                <Row className="login-register">
                    <Col sm={12} md={12} xs={12} lg={8}>
                        <form action="#" >
                            <div className="login-form">
                                <h4 className="login-title">Login</h4>
                                <Row>
                                    <Col md={12}>
                                        <label>Email Address*</label>
                                        <input type="email" placeholder="Email Address" />
                                    </Col>
                                    <Col md={12}>
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" />
                                    </Col>
                                    <Col md={8}>
                                        <div className="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                            <input type="checkbox" id="remember_me" />
                                            <label htmlFor="remember_me">Remember me</label>
                                        </div>
                                    </Col>
                                    <Col md={4} className="text-left text-md-right">
                                        <a href="#"> Forgotten pasward?</a>
                                    </Col>
                                    <Col md={12}>
                                        <button className="register-button">Login</button>
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

export default Login;