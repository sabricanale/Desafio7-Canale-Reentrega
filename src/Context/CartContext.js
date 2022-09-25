
import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	//AGREGAR PRODUCTO AL CARRITO (NO ACEPTARA DUPLICADOS Y ACUMULA PRODUCTOS DEL MISMO PRODUCTO)
	const addItem = (item, quantity) => {
		if (isInCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};
    
    // PRECIO TOTAL DEL CARRITO
	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
	};

    //CANTIDAD DE PRODUCTOS EN TOTAL
	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

    //LIMPIAR EL CARRITO
	const clear = () => setCart([]);

    //SABER SI HAY UN PRODUCTO O NO EN EL CARRITO(DEVUELVE TRUE O FALSE)
	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

    //REMOVER UN PRODUCTO DEL CARRITO
	const remove = (id) =>
		setCart(cart.filter((product) => product.id !== id));

	return (
		<CartContext.Provider
			value={{
				clear,
				isInCart,
				remove,
				addItem,
				totalPrice,
				totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
