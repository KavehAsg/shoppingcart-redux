import React from 'react';

//Components
import CartItem from './CartItem';
import InfoSection from './InfoSection';

//redux store
import { useSelector } from 'react-redux';

//Styles
import styled from './CartPage.module.scss';



const CartPage = () => {

  const cart = useSelector(state => state.cart);

  return (
    <div className={styled.container}>
      <div className={styled.cartContainer}>
        {cart.selectedItems.map(product => <CartItem key={product.id} productData={product} />)}
      </div>
      <InfoSection />
    </div>
  );
};

export default CartPage;