import React from 'react';

const Products = (props) => {

    const {name, id}= props.products

    const handleProduct = (e)=> {
        console.log(e.target.value)
    }
    return (
        <div>
            <h3>{name}</h3>
            <button onClick={handleProduct}>Add to cart</button>
        </div>
    );
};

export default Products;