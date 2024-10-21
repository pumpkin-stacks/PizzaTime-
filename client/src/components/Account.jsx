import React, { useState } from 'react';

const Account = (props) => {

    const storedUserId = localStorage.getItem('userId');


    const submitHandler = (e) => {
        e.preventDefault();

    }



    return (
        <>
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

                <input type="submit" value="Update"/>
            </form>
            <div className='pastorders'>
                <h1>Order History</h1>
                <p></p>

            </div>
        </>
    );
};

export default Account;