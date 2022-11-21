import React from 'react';
import { Link } from 'react-router-dom';

//Cart Context
import { useSelector , useDispatch } from 'react-redux';
import { clearAll } from '../../features/Cart/CartSlice';

//Styles
import styled from './InfoSection.module.scss';

const InfoSection = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className={styled.container}>
            <h1>Purchase?</h1>
            <div className={styled.details}>
                <p>Total Quantity: {cart.totalQuantity}</p>
                <p>Total Price: {cart.totalPrice} $</p>
            </div>
            <div className={styled.buttons}>
                <button onClick={() => dispatch(clearAll())}>Clear all</button>
                <button>Check Out</button>
            </div>
            <Link to='/'>back to store</Link>
        </div>
    );
};

export default InfoSection;