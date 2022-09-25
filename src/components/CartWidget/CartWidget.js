import React from 'react'
import './CartWidget.css'
import logoCarrito from '../Assets/Carrito.png'
import { useCartContext } from '../../Context/CartContext' 

const CartWidget = () => {
const { totalProducts } = useCartContext();

	return (
		<>
			<img src={logoCarrito} className='LogoCarrito'/>
			<span>{totalProducts() || ""}</span>
		</>
	);
};

export default CartWidget;
