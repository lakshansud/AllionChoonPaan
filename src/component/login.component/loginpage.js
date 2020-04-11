import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
import fakeAuth from './test';
import Background from '../../assert/images/login_cover.jpg';

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let nameInput = React.createRef();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = (event) => {
        localStorage.setItem("LoggedUser", nameInput.current.value);
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form validate-form">
                        <span className="login100-form-title p-b-43">
                            Login to continue
					</span>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" ref={nameInput} name="name"  />
                            <span className="focus-input100"></span>
                            <span className="label-input100">Name</span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" onClick={login}>
                                Login
						</button>
                        </div>
                    </div>
                    <div className="login100-more" style={{ backgroundImage: `url(${Background})`}}>
                    </div>
                </div>
            </div>
        </div>
                );
}



export default LoginPage;
