import { Container, Row, Col } from "react-bootstrap";
import './Login.css';
import { AuthUserData } from "../../models/IAuth";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../services/AuthService";
import { useForm } from 'react-hook-form';
import { SubmitHandler } from "react-hook-form/dist/types";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';

function Login() {
    const navigate = useNavigate();
    const [login, { isError}] = useSignInMutation();
    const { register, handleSubmit } = useForm<AuthUserData>();


    const onSubmit: SubmitHandler<AuthUserData> = async (data) => await login(data)
        .unwrap()
        .then(response => {
            toast.success(`Добро пожаловать ${data.username}`,{
                position: toast.POSITION.TOP_RIGHT
            })
            const decode: {
                access_token: string,
                sub: string,
                is_admin: number
            } = jwtDecode(response.access_token)
            if (decode.is_admin === 1) {
                navigate('/admin')
            } else {
                navigate('/', { replace: true })
            }
        })
        .catch(error => toast.error(`${error.data.detail}`,{
            position: toast.POSITION.TOP_RIGHT
        }))

    return (
        <div className="page-section">
            <Container>
                <ToastContainer />
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