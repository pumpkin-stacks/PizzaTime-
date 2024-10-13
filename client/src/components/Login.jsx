import React, { useState } from 'react';
import axios from 'axios'
// import { userContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const [user, setUser] = useContext(userContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {email, password}, {withCredentials:true})
            .then((res) => {
                // setUser(res.data);
                navigate('/home')
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <form onSubmit={submitHandler}>
            <p>Welcome back!</p>
            <h1>Login</h1>
            <label>Email</label>
            <input type="email" onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            <input type="submit" value="Login"/>
        </form>
    );
};

export default Login;