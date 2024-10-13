import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { userContext } from '../context/userContext';

const SignUp = () => {
    // const [user, setUser] = useContext(userContext)
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', {firstName, lastName, email, address, city, state, password, confirmPassword}, {withCredentials:true})
            .then((res) => {
                // setUser(res.data)
                navigate('/Login')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
        <div>
        <form onSubmit={submitHandler}>

            <label>First Name</label>
            <input type="text" onChange={e => setFirstName(e.target.value)}/>

            <label>Last Name</label>
            <input type="text" onChange={e => setLastName(e.target.value)}/>

            <label>Email</label>
            <input type="email" onChange={e => setEmail(e.target.value)}/>

            <label>Address</label>
            <input type="text" onChange={e => setAddress(e.target.value)}/>

            <label>City</label>
            <input type="text" onChange={e => setCity(e.target.value)}/>

            <label>State</label>
            <input type="text" onChange={e => setState(e.target.value)}/>

            <label>Password</label>
            <input type="password" onChange={e => setPassword(e.target.value)}/>

            <label>Confirm Password</label>
            <input type="password" onChange={e => setConfirmPassword(e.target.value)}/>

            <input type="submit" value="Sign Up"/>
            
        </form>
        </div>
        </>
    );
};

export default SignUp;