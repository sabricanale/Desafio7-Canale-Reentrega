import React from 'react'
import './CartWidget.css'
import logoCarrito from '../Assets/Carrito.png'

const CartWidget = () => {
  return (
    <div>
        <img src={logoCarrito} className='LogoCarrito'/>
    </div>
  )
}

export default CartWidget