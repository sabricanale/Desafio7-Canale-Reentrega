import React,{useState, useContext}  from 'react'
const CartContext  = React.createContext([])

export const useCartContext = () => useContext(CartContext)



const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])


//LIMPIAR EL CARRITO

const clear = () => setCart([])

//SABER SI HAY UN PRODUCTO O NO EN EL CARRITO(DEVUELVE TRUE O FALSE)

const isInCart = (id) => cart.find(product => product.id === id) ? true : false

//REMOVER UN PRODUCTO DEL CARRITO

const removeProduct = (id) => setCart(cart.filter (product => product.id !== id ))

//AGREGAR PRODUCTO AL CARRITO (NO ACEPTARA DUPLICADOS Y ACUMULA PRODUCTOS DEL MISMO PRODUCTO)

const addItem = (item, quantity) => {
    if(isInCart(item.id)) {
        setCart(cart.map(product =>{
            return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
        }))
    }else {
        setCart([...cart,{...item, quantity}])
    }
}

console.log('Carrito:', cart)



  return (
    <CartContext.Provider value ={{
        clear,
        isInCart,
        removeProduct,
        addItem
    }}  >
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider