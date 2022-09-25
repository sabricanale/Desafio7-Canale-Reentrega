import React, { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	
	const restar = () => {
		setCount(count - 1);
	};

	const sumar = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="cardContador">
    		<div class="card-body">
				<div className="contador btn-group " role="group" aria-label="Basic outlined example">           
			
					<button className="btn btn-outline-primary" disabled = {count <= 1} onClick={restar}> - </button>
					<button className="btn btn-outline-primary">{count}</button>
					<button className="btn btn-outline-primary" disabled = {count >= stock} onClick={sumar}> + </button>  
					<div>
						<button className="btn2 btn2-outline-primary" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
					</div>

				</div> 
			</div>
		</div>
	);
};

export default ItemCount;
