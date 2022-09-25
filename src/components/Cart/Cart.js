import "./Cart.css"
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();
	

	if (cart.length === 0) {
		return (
			<div className='infoCart'>
				<p>Aún no agregaste productos</p>
				<div className="cartButton">
					<Link to="/"><button>Ir a la tienda</button></Link>
				</div>
				
			</div>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p className="text-center">Total a pagar: {totalPrice()}</p>
			
		</>
	);
};

export default Cart;
