import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'



const ItemList = ({data = []}) => {
  return (
    data.map(producto => <Item key={producto.id} detalle={producto} />)
  )
}

export default ItemList