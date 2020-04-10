import React, { Component } from 'react';
import { render } from 'react-dom';
import FoodOrderingForm from './foodordering';
import ReportForm from './report';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
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
                                        <Link to="/Order">Order</Link>
                                    </li>
                                    <li className="nav-item pl-5">
                                        <Link to="/Report">Report</Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="text-right">User</div>
                        </div>
                    </nav>
                </header >
                <div className="container-fluid">
            
                        <Switch>
                            <Route path="/Order" children={<FoodOrderingForm />} />
                            <Route path="/Report" children={<ReportForm />} />
                        </Switch>
          
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('root'));
