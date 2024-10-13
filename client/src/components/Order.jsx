import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Order = (props) => {
    const navigate = useNavigate();
    const [checkedItems, setCheckedItems] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,
        option5: false,
        option6: false,
        option7: false,
        option8: false
    });


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
        console.log(e)
        navigate('/checkout')
    }

    const favoritesHandler = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
    <>
        <h1>Make your selection</h1>
        <form onSubmit={submitHandler}>
            <label>Method: </label>
            <select>
                <option>--Select--</option>
                <option>Delivery</option>
                <option>Carry out</option>
                <option>Drone Delivery</option>
            </select>
            <label>Size</label>
            <select>
                <option>--Select--</option>
                <option>Personal Pizza (18" diameter)</option>
                <option>Large(36" diameter)</option>
                <option>Obnoxiously Large(48" diameter)</option>
                <option>WTF(97" diameter)</option>
            </select>
            <label>QTY: </label>
            <select>
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
                <label>Toppings: </label>
                <label>Crust</label>
                    <select>
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
                    <label>Mushrooms<input type="checkbox" name='option1' checked={checkedItems.option1} onChange={handleCheckboxChange}/></label>
                    <label>Pineapple<input type="checkbox" name='option2' checked={checkedItems.option2} onChange={handleCheckboxChange}/></label>
                    <label>Olives<input type="checkbox" name='option3' checked={checkedItems.option3} onChange={handleCheckboxChange}/></label>
                    <label>Jalapenos<input type="checkbox" name='option4' checked={checkedItems.option4} onChange={handleCheckboxChange}/></label>
                    <label>Fresh Basil Leaves<input type="checkbox" name='option6' checked={checkedItems.option5} onChange={handleCheckboxChange}/></label>
                    <label>Tomatoes<input type="checkbox" name='option6' checked={checkedItems.option6} onChange={handleCheckboxChange}/></label>
                    <label>Potatoes<input type="checkbox" name='option7' checked={checkedItems.option7} onChange={handleCheckboxChange}/></label>
                    <label>Artichokes<input type="checkbox" name='option8' checked={checkedItems.option8} onChange={handleCheckboxChange}/></label>
            </div>
            <label>Save to favorites? <input type="checkbox" onChange={favoritesHandler}/></label>
            <input type="submit" value={"Add to Order"}/>
        </form>
    </>
    );
};

export default Order;