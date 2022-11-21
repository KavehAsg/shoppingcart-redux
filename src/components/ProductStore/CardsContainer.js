import React from 'react';
import styled from './CardsContainer.module.scss';
import ProductCard from './ProductCard';
// import CardLoading from '../LoadingComponents/CardLoading';

import { useSelector } from 'react-redux';

const CardContainer = () => {

    const products = useSelector(state => state.products);


    return (
        <div className={styled.cardsContainer}>
            {/* {products.length === 0 &&
                [...Array(3)].map((x, i) =>
                    <CardLoading key={i} />
                )
            } */}
            {!products.isLoading && products.data.map((product) => {
                return <ProductCard key={product.id} productData={product} />
            })}
        </div>
    );
};

export default CardContainer;