import React from 'react'
import './ItemCount.css'
import { useState, useEffect } from 'react'
import remera from '../Assets/RemeraNegra.jpg'
import gorra from '../Assets/Gorra.webp'
import llavero from '../Assets/Llavero.webp'


export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial))

    const restar = () => {setCount(count - 1)}
    const sumar = () => {setCount(count + 1)}

    useEffect(()=> {
        setCount(parseInt(initial))
    },[initial])


    return (
    <>

<div className="cardContador">
    
    <div class="card-body">
        <div className="contador btn-group " role="group" aria-label="Basic outlined example">
            <img src={remera} className='img-fluid remera '/>
                <p className='text-center'>Remera <p>$2500</p></p>
                <button className="btn btn-outline-primary" disabled = {count <= 1} onClick={restar}>-</button>
                <button className="btn btn-outline-primary">{count}</button>
                <button className="btn btn-outline-primary" disabled = {count >= stock} onClick={sumar}>+</button>
                <div>
                    <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>    
        </div> 
    </div>

    <div class="card-body ">
        <div className="contador btn-group " role="group" aria-label="Basic outlined example">
            <img src={gorra} className='img-fluid gorra'/>
                <p className='text-center'>Gorra <p>$2000</p></p>
                <button className="btn btn-outline-primary" disabled = {count <= 1} onClick={restar}>-</button>
                <button className="btn btn-outline-primary">{count}</button>
                <button className="btn btn-outline-primary" disabled = {count >= stock} onClick={sumar}>+</button>
                <div>
                    <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>    
        </div> 
    </div>
    <div class="card-body ">
        <div className="contador btn-group " role="group" aria-label="Basic outlined example">
            <img src={llavero} className='img-fluid llavero'/>
                <p className='text-center'>Llavero <p>$800</p></p>
                <button className="btn btn-outline-primary" disabled = {count <= 1} onClick={restar}>-</button>
                <button className="btn btn-outline-primary">{count}</button>
                <button className="btn btn-outline-primary" disabled = {count >= stock} onClick={sumar}>+</button>
                <div>
                    <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>    
        </div> 
    </div>
</div>


        
    </>
  )
}

export default ItemCount