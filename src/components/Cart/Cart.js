import "./Cart.css"
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: 'Sabrina',
			email: 'sabricanale@gmail.com',
			phone: '3513451127',
			address: 'Ayacucho 1406'
		},	
		items:cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
		total: totalPrice()		
	}


const handleClick = () => {
	const db = getFirestore();
	const orderCollection = collection (db, 'orders');
	addDoc(orderCollection, order)
	.then(({id}) => console.log(id));
}

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
			<div className="textTotal">
				<p>Total a pagar: ${totalPrice()}</p>
				<button onClick={handleClick} >Realizar compra</button>
			</div>
			
		</>
	);
};

export default Cart;
