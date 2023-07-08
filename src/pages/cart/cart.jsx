import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import './cart.scss'
import {useNavigate} from 'react-router-dom';

export const Cart = () =>{
    
  const { cartItems, getTotalCartAmount } = useContext(ShopContext); 
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
    return(
        <div className="cart">
            <div>
                  <h1>Tus items del carrito </h1>
            </div>
          <div className="cartItems">
            {PRODUCTS.map((product) =>{
               if(cartItems[product.id] !== 0 ){
                return <CartItem data={product} />
               }
            })}
          </div>
           <div className="checkout">
           <p>Subtotal: ${totalAmount}</p>
           <button onClick={() => navigate("/")}>Continuar comprando</button>
           <button disabled={totalAmount === 0}>Ir a pagar</button>
         </div>
         {totalAmount === 0 && <h1>Tu carrito está vacío</h1>}
       </div>
    );
}