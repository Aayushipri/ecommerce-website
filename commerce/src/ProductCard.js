import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="display">
      {image.map((item) => (
        <div className="productCard">
          <img src={item} width={30} height={30} />
          <div className="sareePrice">
            <div>{name}</div>
            <div>₹{price}</div>
          </div>
          <button>Shop</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
