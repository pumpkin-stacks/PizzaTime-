import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();
    

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const loginData = {email, password};


        axios.post('http://localhost:8000/api/login', loginData, {withCredentials:true})
            .then((res) => {
                const userId = res.data.userId;
                if (userId) {
                    localStorage.setItem('userId', userId);
                    console.log('UserId stored:', userId);
                } else {
                    console.log('No user ID found in response');
                }
                navigate('/home');
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            });
    }


    return (
        <form onSubmit={submitHandler}>
            <p>Welcome back!</p>
            <h1>Login</h1>

            <label>Email</label>
            <input 
            type="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
            />

            <label>Password</label>
            <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
            />
            <input type="submit" value={loading ? "Logging in..." : "Login"} disabled={loading}/>
        </form>
    );
};

export default Login;