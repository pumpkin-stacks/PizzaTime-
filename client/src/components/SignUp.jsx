import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errors, setErrors] = useState({}); // State to store validation errors

    const validateForm = () => {
        let formErrors = {};
        // Check if fields are empty
        if (!firstName.trim()) formErrors.firstName = "First name is required.";
        if (!lastName.trim()) formErrors.lastName = "Last name is required.";
        if (!email.trim()) {
            formErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = "Email is invalid.";
        }
        if (!address.trim()) formErrors.address = "Address is required.";
        if (!city.trim()) formErrors.city = "City is required.";
        if (!state.trim()) formErrors.state = "State is required.";
        if (!password) {
            formErrors.password = "Password is required.";
        } else if (password.length < 8) {
            formErrors.password = "Password must be at least 8 characters long.";
        }
        if (password !== confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match.";
        }
        return formErrors;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // If no errors, submit the form
            axios.post('http://localhost:8000/api/register', {
                firstName, lastName, email, address, city, state, password, confirmPassword
            }, { withCredentials: true })
            .then((res) => {
                navigate('/Login');
            })
            .catch((err) => {
                console.log(err);
            });
        } else {
            setErrors(formErrors); // Set errors to display
        }
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}

                <label>Last Name</label>
                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}

                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

                <label>Address</label>
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
                {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

                <label>City</label>
                <input type="text" value={city} onChange={e => setCity(e.target.value)} />
                {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}

                <label>State</label>
                <input type="text" value={state} onChange={e => setState(e.target.value)} />
                {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}

                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;
