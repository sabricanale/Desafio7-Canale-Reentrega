import React from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({data}) => {
  
  const [count, setCount] = useState(0)

  return (
    
    <div className='container'>
        <div className='detail'>
            <div className='content'>
              <div>
                  <img src={data.image} className='detail_image' />
              </div>
              <div className='detalle'>
                  <h3>{data.title}</h3>
                  <h4>{data.price}</h4>
                  <h5>{data.description}</h5>
                  <h6>{`(${data.stock} disponibles)`}</h6>
                  <div className='contador2'>
                    <ItemCount setCount={setCount} count ={count} stock ={data.stock}  />
                  </div>
            </div>

                
                  
                
                
            </div>

        </div>

    </div>
  )
}

export default ItemDetail