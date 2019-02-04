import React from 'react';

import './SignUp.css';
import Delivery from './Delivery';

const SignUp = () => {
    return (
        <div className="signUpMaster">
            <h1>SIGN UP</h1>
            <p>Recieve weekly issues for $5 a month.<br/>Free during our inaugural month.</p>
            {/* <p>...or learn more about our Founding Subscriber Program</p> */}
            <div className="form-group">
                <label><strong>First Name</strong></label>
                <input className="form-control" placeholder="Enter first name"></input>
            </div>
            <div className="form-group">
                <label><strong>Last Name</strong></label>
                <input className="form-control" placeholder="Enter first name"></input>
            </div>
            <Delivery/>
        </div>
    )
}

export default SignUp