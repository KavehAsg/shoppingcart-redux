import React from 'react';

import { Link } from 'react-router-dom';

//Component
import ItemCounter from '../ItemCounter/ItemCounter';

//Styles
import styled from './CartItem.module.scss';

const CartItem = ({productData}) => {
    const { id , image , title , category , price } = productData;

    return (
        <div className={styled.container}>
            <img src={image} alt='pic' />
            <div className={styled.detailContainer}>
                <div className={styled.titles}>
                    <Link to={`/detailpage/${id}`} >{title}</Link>
                    <span>{category}</span>
                </div>
                <div className={styled.shoppingDetails}>
                    <p>Total Price: {price}$</p>
                    <ItemCounter id={id} productData={productData} /> 
                </div>
            </div>
        </div>
    );
};

export default CartItem;