import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addItem } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addItem(data, quantity);
	};

	return (
		<div className="container">
			<div className="detail">
			<div className="content">
              <div>
                  <img src={data.image} className='detail_image' alt=''/>
              </div>

				<div className="detalle">
					<h3>{data.title}</h3>
					<h4>${data.price}</h4>
                  	<h5>{data.description}</h5>
                  	<h6>{`(${data.stock} disponibles)`}</h6>
					{goToCart ? (
						<Link to="/cart"> <button>Terminar mi compra</button> </Link>
					) : (
						<div className='contador2'> 
							<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
						</div>
					)}
				</div>
			</div>
		</div>
	</div>
	);
};

export default ItemDetail;
