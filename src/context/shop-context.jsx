import {React, useState, createContext} from 'react'
import { PRODUCTS } from '../products';

//objeto de contexto, valor inicial del contexto se establece en null.
export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={}
    //Itera sobre los elementos de PRODUCTS y asigna un valor de cero a cada producto en el carrito.

    for(let i=1 ; i < PRODUCTS.length + 1; i++){
        cart[i] = 0;
    }
    return cart; //Devuelve el carrito creado.
}
/*ShopContextProvider = componente de función que se utiliza como proveedor de contexto para sus componentes hijos.
Utiliza el gancho useState para agregar el estado cartItems y la función setCartItems a este componente. 
El estado inicial se establece llamando a getDefaultCart(), que crea un carrito vacío. */
export const ShopContextProvider= (props) => {

     const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems) {
            if(cartItems[item] > 0){
               let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
               totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    };
    // agregar elementos al carrito.
     const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId] + 1})); //aumenta la cantidad del elemento seleccionado en uno.
     };
    //quitar elementos del carrito.
     const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId] - 1})); //aumenta la cantidad del elemento seleccionado en uno.
     };

     const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev)=> ({...prev, [itemId] : newAmount}))
     }

     const contextValue = {
        cartItems, 
        addToCart, 
        removeFromCart,
         updateCartItemCount,
         getTotalCartAmount
        }

  return ( <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
  );
};