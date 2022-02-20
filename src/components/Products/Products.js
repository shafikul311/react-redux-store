import React from 'react';

const Products = (props) => {

    const {name, id}= props.products

    const handleProduct = (e)=> {
        console.log(e.target.value)
    }
    return (
        <div style={{border: '1px solid green', margin: 5, padding: 10, justifyContent: 'center', textAlign: 'center'}}>
            <h3>{name}</h3>
            <button onClick={handleProduct}>Add to cart</button>
        </div>
    );
};

export default Products;