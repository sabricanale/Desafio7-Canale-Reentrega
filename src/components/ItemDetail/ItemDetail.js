import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({data}) => {
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail_image' src={data.image} />
            <div className='content'>
                <h3>{data.title}</h3>
                <h4>{data.price}</h4>
                <h4>{data.description}</h4>
            </div>

        </div>

    </div>
  )
}

export default ItemDetail