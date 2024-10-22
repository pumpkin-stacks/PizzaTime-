import React, { useState } from 'react';
import { Link } from 'react-router-dom';


//Quick options 

const Home = (props) => {


    return (
        <>
        <div>
            <h1>
                Home Page!!
            </h1>
        </div>
        <div className='neworder'>
            <Link to='/order'><button>New Order</button></Link>
            <Link to='/favorites'><button>Order from Favorites</button></Link>
        </div>
        </>
    );
};

export default Home;