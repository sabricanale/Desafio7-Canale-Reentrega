import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";


const products = [
    {id: 1, image: 'https://http2.mlstatic.com/D_NQ_NP_951718-MLA49975814105_052022-O.webp' , title:"Remera lisa", price: 2500, category: "Indumentaria", description: 'Remera lisa de algódon. Variedad de colores y talles', stock: 5}, {id: 2, image:'https://http2.mlstatic.com/D_NQ_NP_829809-MLA45145681623_032021-O.webp' , title:"Llavero", price:800, category: "Accesorios", description: 'Llavero metalizado. Variedad de colores', stock: 10}, {id: 3, image:'https://http2.mlstatic.com/D_NQ_NP_823318-MLA51357923861_082022-O.webp' , title:"Gorra", category: "Accesorios", price: 2000,  description: 'Gorra lisa sin estampa. Variedad de colores', stock: 4}]

const ItemListContainer = () => {

const [data, setData] = useState([])

const {categoriaId} = useParams()

useEffect(()=>{
    const getData = new Promise(resolve =>{
        setTimeout(()=>{
            resolve(products)
        })
    })
    if(categoriaId){
        getData.then(res => setData(res.filter(product => product.category === categoriaId)))
    }else{
        getData.then(res => setData(res))
    }    
}, [categoriaId])

/*
const onAdd = (quantify) =>{
    console.log(`Agregaste ${quantify} productos al carrito`)
}*/

return (
    <div>
        <Title greeting='Tienda de productos'/>
        <ItemList data = {data}/>           
    </div>
  )
}

export default ItemListContainer

