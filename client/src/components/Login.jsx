import React, { useState } from 'react';

const Login = () => {
    return (
        <>
        <p>Welcome back!</p>
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <input type="submit" value="Login"/>
        </>
    );
};

export default Login;