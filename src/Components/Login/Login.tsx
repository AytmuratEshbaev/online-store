import { Container, Row, Col } from "react-bootstrap";
import './Login.css';
import { AuthUserData } from "../../models/IAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserLoginMutation } from "../../services/AuthService";
import { useForm } from 'react-hook-form';
import { SubmitHandler } from "react-hook-form/dist/types";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const from = ((location.state as any)?.from.pathname as string) || '/';
    const [login, { isError, isSuccess }] = useUserLoginMutation();

    useEffect(() => {
        if (isSuccess) {
            navigate(from);
        }
    }, [isSuccess])

    const { register, handleSubmit } = useForm<AuthUserData>();

    const loginData = async (data: AuthUserData) => {
        await login(data);
    };

    const onSubmit: SubmitHandler<AuthUserData> = (data) => {
        try{
            loginData(data);
        }
        catch(error){
            console.log(error);
        }
    };

    return (
        <div className="page-section">
            <Container>
                <Row className="login-register">
                    <Col sm={12} md={12} xs={12} lg={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="login-form">
                                <h4 className="login-title">Login</h4>
                                {isError
                                    ? (<div className="alert alert-danger" role="alert">
                                        Invalid username or password
                                    </div>)
                                    : null}
                                <Row>
                                    <Col md={12}>
                                        <label>Username</label>
                                        <input type="text" placeholder="Username" required {...register('username', { required: true })} />
                                    </Col>
                                    <Col md={12}>
                                        <label>Password</label>
                                        <input type="password" placeholder="Password" {...register('password', { required: true })} />
                                    </Col>
                                    <Col md={12}>
                                        <button className="register-button" type="submit" >Login</button>
                                    </Col>
                                </Row>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Login;