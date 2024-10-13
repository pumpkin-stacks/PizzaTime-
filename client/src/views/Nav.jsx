import React, { useState } from 'react';
import { useLocation, Link} from 'react-router-dom'


const Nav = () => {
    const location = useLocation();
    let content;



    if (location.pathname === '/home' || location.pathname === '/account' || location.pathname === '/order' || location.pathname === '/order/subtotal') {
        content = (
            <>
            <Link to='/home'><button>Home</button></Link>
            <Link to='/order'><button>Order</button></Link>
            <Link to='/account'><button>Account</button></Link>
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