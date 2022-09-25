import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const products = [
    {id: 1, image: 'https://http2.mlstatic.com/D_NQ_NP_951718-MLA49975814105_052022-O.webp' , title:"Remera lisa", price:'$2500', category: "Indumentaria", description: 'Remera lisa de algódon. Variedad de colores y talles', stock: 5}, {id: 2, image:'https://http2.mlstatic.com/D_NQ_NP_829809-MLA45145681623_032021-O.webp' , title:"Llavero", price:'$800', category: "Accesorios", description: 'Llavero metalizado. Variedad de colores', stock: 10}, {id: 3, image:'https://http2.mlstatic.com/D_NQ_NP_823318-MLA51357923861_082022-O.webp' , title:"Gorra", category: "Accesorios", price:'$2000', description: 'Gorra lisa sin estampa. Variedad de colores', stock: 4}]
    
const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const { detalleId } = useParams()

    useEffect(() =>{
        const getData = new Promise(resolve =>{
            setTimeout(()=>{
                resolve(products)
            }, 1000)
        })
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))))
    }, [detalleId])
    
    return (
        <ItemDetail data = {data}/>      
    )
}

export default ItemDetailContainer