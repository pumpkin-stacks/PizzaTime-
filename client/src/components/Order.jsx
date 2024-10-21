import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Favorites from './Favorites';

const Order = (props) => {
    const navigate = useNavigate();
    const [checkedItems, setCheckedItems] = useState({
        mushrooms: false,
        pineapple: false,
        olives: false,
        jalapenos: false,
        basil: false,
        tomatoes: false,
        artichokes: false,
    })

    // const [favorites, setFavorites] = useState([]);
    const [saveToFavorites, setSaveToFavorites] = useState(false);

    //handlers

    const handleCheckboxChange = (e) => {
        const {name, checked} = e.target;
        setCheckedItems(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const orderDetails = {
            method: e.target.method.value,
            size: e.target.size.value,
            qty: e.target.qty.value,
            toppings: checkedItems,
        };
        console.log(e.target.favTitle)
        const favoriteDetails = {
            userId: localStorage.getItem('userId'),
            pizza: orderDetails
        };
        if (saveToFavorites) {
            console.log(favoriteDetails)
            axios.post('http://localhost:8000/api/favorites', favoriteDetails)
            .then((res) => {
                console.log('Favorite saved successfully', res.data); 
            })
            .catch((err) => {
                console.log(err)
            });
        } 
        navigate('/checkout', {state: {orderDetails}});
    };

    const favoritesHandler = (e) => {
        setSaveToFavorites(e.target.checked);
    }

    return (
    <>
        <h1>Make your selection</h1>
        <form onSubmit={submitHandler}>
            <label>Method: </label>
            <select name='method'>
                <option>--Select--</option>
                <option>Delivery</option>
                <option>Carry out</option>
                <option>Drone Delivery</option>
            </select>
            <label>Size</label>
            <select name='size'>
                <option>--Select--</option>
                <option>Personal Pizza (18" diameter)</option>
                <option>Large(36" diameter)</option>
                <option>Obnoxiously Large(48" diameter)</option>
                <option>WTF(97" diameter)</option>
            </select>
            <label>QTY: </label>
            <select name='qty'>
            <option>--Select--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>666</option>
                <option>9000</option>
                <option>37</option>
                <option>9</option>
            </select>
            <div className='toppings'>
                <label>Crust</label>
                    <select name='toppings'>
                        <option>--Select--</option>
                        <option>Thin</option>
                        <option>Thicc</option>
                    </select>
                <label>Base</label>
                    <select>
                        <option>--Select--</option>
                        <option>Tomato base</option>
                        <option>Roasted Red pepper hummus</option>
                        <option>Olive oil</option>
                        <option>Vegan Mozzarella</option>
                    </select>
                <label>Cheese</label>
                    <select>
                        <option>--Select--</option>
                        <option>Violife</option>
                        <option>Follow Your Heart</option>
                        <option>Daiya</option>
                        <option>Vegan Mozzarella</option>
                    </select>
                    <label>Proteins</label>
                    <select>
                        <option>--Select--</option>
                        <option>Seitan Pepperoni</option>
                        <option>Beyond Beef Crumbles</option>
                    </select>
                    <label>Veggies: </label>
                    <label>Mushrooms<input type="checkbox" name='mushrooms' checked={checkedItems.mushrooms} onChange={handleCheckboxChange}/></label>
                    <label>Pineapple<input type="checkbox" name='pineapple' checked={checkedItems.pineapple} onChange={handleCheckboxChange}/></label>
                    <label>Olives<input type="checkbox" name='olives' checked={checkedItems.olives} onChange={handleCheckboxChange}/></label>
                    <label>Jalapenos<input type="checkbox" name='jalapenos' checked={checkedItems.jalapenos} onChange={handleCheckboxChange}/></label>
                    <label>Fresh Basil Leaves<input type="checkbox" name='basil' checked={checkedItems.basil} onChange={handleCheckboxChange}/></label>
                    <label>Tomatoes<input type="checkbox" name='tomatoes' checked={checkedItems.tomatoes} onChange={handleCheckboxChange}/></label>
                    <label>Artichokes<input type="checkbox" name='artichokes' checked={checkedItems.artichokes} onChange={handleCheckboxChange}/></label>
            </div>
            <label>Save to favorites? <input type="checkbox" onChange={favoritesHandler}/></label>
            <input type="submit" value={"Add to Order"}/>
        </form>
        <div>
            <Favorites/>
        </div>
    </>
    );
};

export default Order;