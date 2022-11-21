import React from 'react';

//Styles
import styled from './ItemCounter.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, incrementItem , decrementItem } from '../../features/Cart/CartSlice';

//Helpers
import { isInCart, quantityCounter } from "../../helper/cardsFunctions";

//icon
import TrashIcon from "../../assets/trash.svg";

const ItemCounter = ({ id, productData }) => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className={styled.counterSection}>

            {quantityCounter(cart.selectedItems, id) === 1 &&
                <button className={styled.deleteItem} onClick={() => dispatch(removeItem(productData))}>
                    <img src={TrashIcon} alt="pic"></img>
                </button>
            }

            {quantityCounter(cart.selectedItems, id) > 1 &&
                <button className={styled.decreaseItem} onClick={() => dispatch(decrementItem(productData))}>
                    -
                </button>
            }

            {quantityCounter(cart.selectedItems, id) > 0 &&
                <span>{quantityCounter(cart.selectedItems, id)}</span>
            }

            {isInCart(cart , id) ?
                <button className={styled.addItem} onClick={() => dispatch(incrementItem(productData))}>
                    +
                </button>
                :
                <button className={styled.addItem} onClick={() => dispatch(addItem(productData))}>Add Item</button>
            }
        </div>
    );
};

export default ItemCounter;