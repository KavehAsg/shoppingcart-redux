import React from "react";
// import { Link } from "react-router-dom";

// import ItemCounter from "../ItemCounter/ItemCounter";

//style
import styled from "./ProductCard.module.scss";


const ProductCard = ({ productData }) => {
  const { title, image, price, category, id } = productData;

  return (
    <div className={styled.card}>
      <div className={styled.imgContainer}>
        <img alt="img" src={image}></img>
      </div>

      <div className={styled.textContainer}>
        <p className={styled.title}>{title}</p>
        <span className={styled.category}>{category}</span>
        <span className={styled.price}>{price}$</span>
      </div>

      <div className={styled.btnContainers}>
        {/* <Link to={`/detailpage/${id}`}>details</Link> */}
        {/* <ItemCounter id={id} productData={productData} /> */}
      </div>
    </div>
  );
};

export default ProductCard;