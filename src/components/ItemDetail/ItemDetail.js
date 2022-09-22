
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartProvider from '../../Context/CartProvider'
import { CartContext } from '../../Context/CartContext'
import Cart from '../Cart/Cart'

export const ItemDetail = ({data}) => {
  
  const [goToCart, setGoToCart] = useState(false)
  const {addItem} = useContext(CartContext)
  const [count, setCount] = useState(0)
  

  const onAdd = (cantidad) => {
    setGoToCart(true)
    addItem(data, cantidad)
  }  
  return (
    
    <div className='container'>
        <div className='detail'>
            <div className='content'>
              <div>
                  <img src={data.image} className='detail_image' alt=''/>
              </div>
              <div className='detalle'>
                  <h3>{data.title}</h3>
                  <h4>{data.price}</h4>
                  <h5>{data.description}</h5>
                  <h6>{`(${data.stock} disponibles)`}</h6>
                  <div className='contador2'>
                    {
                      goToCart ? <Link to='/cart'> Finalizar compra</Link> : <ItemCount setCount={setCount} count ={count} stock ={data.stock} onAdd={onAdd}/>
                    }
                  </div>
            </div>

          
                  
                
            </div>

        </div>

    </div>
  )
}

export default ItemDetail