import React, { useState } from 'react';

const SignUp = () => {
    return (
        <>
        <div>
        <form>
            <label>First Name</label>
            <input type="text" />
            <label>Last Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Address</label>
            <input type="text" />
            <label>City</label>
            <input type="text" />
            <label>State</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <label>Confirm Password</label>
            <input type="text" />
            <input type="submit" value="Sign Up"/>
        </form>
        </div>

        </>
    );
};

export default SignUp;