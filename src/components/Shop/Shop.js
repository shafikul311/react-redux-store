import React from 'react';
import Products from '../Products/Products';

const Shop = () => {

    const products = [
        {name: 'Lenevo', id: 1},
        {name:'apple', id: 2},
        {name: 'HP', id: 3},
        {name: 'Dell', id: 4},
        {name: 'Ascus', id: 5}
    ]
    return (
        <div>
            <p>This is Shop</p>

            { products.map(product => <Products key={product.id} products={product}></Products>)}
            
        </div>
    );
};

export default Shop;