import React, { useState } from 'react';
import { useLocation, Link} from 'react-router-dom'


const Nav = () => {
    const location = useLocation();
    let link;




    if (location.pathname === '/') {
        link = <Link to='/Login'>Already have an account? Login</Link>;
    } else if (location.pathname === '/Login') {
        link = <Link to='/'>Don't have an account? Register</Link>
    } else {
        
    }



    return (
        <div className='nav'>
            <div className='navleft'>
                <p>Pumpkin Pizza Time!</p>
            </div>
            <div className='navright'>
                {link}
            </div>
        </div>
    );
};

export default Nav;