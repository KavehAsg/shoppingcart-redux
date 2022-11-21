import React from 'react';
import styled from './CardsContainer.module.scss';
import ProductCard from './ProductCard';

import Loading from '../Loading/Loading';

import { useSelector } from 'react-redux';

const CardContainer = () => {

    const products = useSelector(state => state.products);


    return (
        <div className={styled.cardsContainer}>
            {products.isLoading && <Loading />}
            {!products.isLoading && products.data.map((product) => {
                return <ProductCard key={product.id} productData={product} />
            })}
        </div>
    );
};

export default CardContainer;