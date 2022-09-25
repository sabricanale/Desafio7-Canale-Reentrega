import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ info }) => {
	return (
		<Link to={`/detalle/${info.id}`} className="producto">
			<img src={info.image} className="imagen" alt="" />
			<h5>{info.title}</h5>
          	<h5>{info.price}</h5>   
		</Link>
	);
};

export default Item;
