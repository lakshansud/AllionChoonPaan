import React, { Component } from 'react';
import {
    useHistory
} from "react-router-dom";
import fakeAuth from './auth';

function SignOutButton() {
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

export default SignOutButton;
