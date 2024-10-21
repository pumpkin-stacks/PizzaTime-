import React, { useState } from 'react';
import { useLocation, Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Nav = () => {
    const location = useLocation();
    let content;
    const navigate = useNavigate();


    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then(() => {
                navigate('/logout')
            })
            .catch ((err) => {
                console.log(err)
            })
    }
    


    if (location.pathname === '/home' || location.pathname === '/account' || location.pathname === '/order' || location.pathname === '/checkout' || location.pathname === '/favoritess') {
        content = (
            <>
            <Link to='/home'><button>Home</button></Link>
            <Link to='/order'><button>Order</button></Link>
            <button onClick={logout} >Account</button>
            <Link to='/logout'><button>Logout</button></Link>
            </>
        )
    }   
    else if (location.pathname === '/') {
        content = <Link to='/Login'>Already have an account? Login</Link>;
    } else if (location.pathname === '/Login') {
        content = <Link to='/'>Don't have an account? Register</Link>
    } else {
        
    }

    return (
        <div className='nav'>
            <div className='navleft'>
                <p>Pumpkin Pizza Time!</p>
            </div>
            <div className='navright'>
                {content}
            </div>
        </div>
    );
};

export default Nav;