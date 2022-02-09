import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let userData;
            if (isLogin) {
                userData = await login(email, password);
            } else {
                userData = await registration(email, password);
            }
            user.setUser(userData);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch(e) {
            alert(e.response.data.message);
        }
    }

    return (
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Enter password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                        />
                        <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                            <Button
                                variant="outline-success"
                                onClick={click}
                            >
                                {isLogin ? 'Login' : 'Sign up'}
                            </Button>
                            {isLogin ?
                                <div>
                                    Do not have account? <NavLink to={REGISTRATION_ROUTE}>Create it now</NavLink>
                                </div>
                                :
                                <div>
                                    Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                                </div>
                            }
                        </Row>
                    </Form>
                </Card>
            </Container>
    );
});

export default Auth;
