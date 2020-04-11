import React, { Component } from 'react';
import { render } from 'react-dom';
import FoodOrderingForm from './foodordering';
import ReportForm from './report';
import PrivateRoute from './component/login.component/login';
import fakeAuth from './component/login.component/auth';
import LoginPage  from './component/login.component/loginpage';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            loggedUser:''
        };
        var loggedUser = localStorage.getItem("LoggedUser");
        if (loggedUser) {
            this.state.loggedUser = loggedUser;
        } else {
            this.state.loggedUser = "";
        }
        
    }

    render() {
        return (
            <Router>
                <header>
                    <nav className='navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom  mb-0 py-0 fixed-top '>
                        <div className="container-fluid">
                            <div>Allion Choon Paan</div>
                            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-lg-between ">
                                <ul className="navbar-nav flex-grow pl-5">
                                    <li className="nav-item pl-5">
                                        <Link to="/order">Order</Link>
                                    </li>
                                    <li className="nav-item pl-5">
                                        <Link to="/report">Report</Link>
                                    </li>
                                </ul>

                            </div>
                            <div className=" pr-5 text-right">{ this.state.loggedUser }</div>
                            <AuthButton />
                        </div>
                    </nav>
                </header >
                <div className="container-fluid">
                    <Switch>
                        <PrivateRoute path="/order">
                            <FoodOrderingForm />
                        </PrivateRoute>
                        <PrivateRoute path="/report">
                            <ReportForm />
                        </PrivateRoute>
                        <Route path="/login" children={<LoginPage />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


function AuthButton() {
    let history = useHistory();
    return (
        <button
            onClick={() => {
                fakeAuth.signout(() => history.push("/login"));
            }}
        >
            Sign out
      </button>
        );
}

render(<App />, document.getElementById('root'));
