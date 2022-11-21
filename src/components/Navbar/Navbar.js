import React from "react";
import { Link , useNavigate} from 'react-router-dom';

//redux store
import { useSelector } from "react-redux";

//styles
import styled from "./Navbar.module.scss";

//icons
import CartIcon from '../../assets/shopIcon.svg';


const Navbar = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const navigate = useNavigate();
  
  return (
    <div className={styled.navbar} >
      <Link to="/" className={styled.productLink}>
        products
      </Link>
      <div className={styled.shopCart} onClick={() => navigate('/cart')}>
          <img alt="cart-pic" src={CartIcon}></img>
        <span>{totalQuantity}</span>
      </div>
    </div>
  );
};

export default Navbar;
