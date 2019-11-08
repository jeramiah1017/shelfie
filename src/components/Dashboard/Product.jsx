import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  const { name, price, img_url } = props.product;
  const id = props.product.id;
  return (
    <div className="product-container">
      <img src={img_url} alt="product" />
      <div className="product-info-buttons">
        <div className="info-container">
          <span>{name}</span>
          <span>${price}</span>
        </div>
        <div>
          <button onClick={() => props.deleteProduct(id)}>Delete</button>
          <Link to ={`/edit/${id}`} >
          <button>Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
