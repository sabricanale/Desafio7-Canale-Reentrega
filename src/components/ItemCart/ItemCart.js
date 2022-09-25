import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './ItemCart.css';

const ItemCart = ({ product }) => {
    const { remove } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div className='itemDescription'>
                <p>Producto: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio por unidad: {product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className="itemBoton" onClick={() => remove(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart