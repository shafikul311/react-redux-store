import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/actions/cartActions";

const Cart = (props) => {
   console.log(props);

   const { cart, removeFromCart } = props;

   return (
      <div>
         <p>This is Cart</p>

         <ul>
            {cart.map((pd) => (
               <li key={pd.cartId}>
                  {pd.name}{" "}
                  <button onClick={() => removeFromCart(pd.cartId)}>X</button>
               </li>
            ))}
         </ul>
      </div>
   );
};

const mapStateToProps = state => {
   return {
      cart: state.cart,
   };
};

const mapDispatchToProps = {
   removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
