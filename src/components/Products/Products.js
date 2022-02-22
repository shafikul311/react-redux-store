import React from "react";

const Products = (props) => {
   console.log(props);

   const { product, addToCart } = props;

   return (
      <div
         style={{
            border: "1px solid green",
            padding: 15,
            margin: 5,
            borderRadius: 5,
         }}
      >
         <h5>{product.name}</h5>
         <button onClick={() => addToCart(product.id, product.name)}>
            add to cart
         </button>
      </div>
   );
};

export default Products;
