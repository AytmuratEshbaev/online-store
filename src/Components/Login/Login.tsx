import { Container, Row, Col } from "react-bootstrap";
import './Login.css';
import { AuthUserData } from "../../models/IAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { SubmitHandler } from "react-hook-form/dist/types";
import { setCredentials } from "../../store/reducers/AuthSlice";
import { useUserLoginMutation } from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "../../hooks/redux";

function Login() {

    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()
    const [login, { isLoading }] = useUserLoginMutation()
    const dispatch = useAppDispatch()
    useEffect(() => {
        userRef.current ? userRef.current.focus() : null;
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleUserInput = (e: React.FormEvent) => setUser((e.target as HTMLInputElement).value)

    const handlePwdInput = (e: React.FormEvent) => setPwd((e.target as HTMLInputElement).value)



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






const Login = () => {




    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            navigate('/welcome')
        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }



    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Employee Login</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePwdInput}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
        </section>
    )

    return content
}
export default Login