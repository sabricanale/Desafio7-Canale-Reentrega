import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({detalle}) => {
  return (
    <><Link to={`detalle/${detalle.id} `} className='producto'>
      <div >
          <img src={detalle.image} className='imagen' alt=''/>
          <h5>{detalle.title}</h5>
          <h5>{detalle.price}</h5>   
    </div>
    </Link>
            
        
    </>
  )
}

export default Item