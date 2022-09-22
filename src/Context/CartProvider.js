import React,{useState} from 'react'
import {CartContext} from './CartContext'
 
export const CartProvider = ({children} ) => {
    const [cart, setCart] = useState ([]) 

    const addItem = (item, cantidad) => {
      if (isInCart(item.id)) {
        setCart(
          cart.map((producto) => {
            return producto.id === item.id
              ? { ...producto, quantity: producto.cantidad + cantidad }
              : producto;
          }),
        );
      } else {
        setCart([...cart, { ...item, cantidad }]);
      }
    };

    console.log('Carrito:', cart)

    const clear = () => setCart([]) //Borrar lo que está en el carrito
    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false  //Cómo saber si un producto está en el carrito     
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id)) 

  return (
    <CartContext.Provider value={{
        clear, 
        isInCart,
        removeItem,
        addItem
    }}>
        {children}
    
    </CartContext.Provider>
  )
}

export default CartProvider