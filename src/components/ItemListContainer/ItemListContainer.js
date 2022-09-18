import React from 'react'
import Title from '../Title/Title';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
    {id: 1, image: 'https://http2.mlstatic.com/D_NQ_NP_951718-MLA49975814105_052022-O.webp' , title:"Remera lisa", price:'$2500', category: "Indumentaria", description: 'Remera lisa de algódon. Variedad de colores y talles'}, {id: 2, image:'https://http2.mlstatic.com/D_NQ_NP_829809-MLA45145681623_032021-O.webp' , title:"Llavero", price:'$800', category: "Accesorios", description: 'Llavero metalizado. Variedad de colores'}, {id: 3, image:'https://http2.mlstatic.com/D_NQ_NP_823318-MLA51357923861_082022-O.webp' , title:"Gorra", category: "Accesorios", price:'$2000', description: 'Gorra lisa sin estampa. Variedad de colores'}]

const ItemListContainer = () => {

const [data, setData] = useState([])

const {categoriaId} = useParams()

useEffect(()=>{
    const getData = new Promise(resolve =>{
        setTimeout(()=>{
            resolve(productos)
        }, 1000)
    })
    if(categoriaId){
        getData.then(res => setData(res.filter(producto => producto.category === categoriaId)))
    }else{
        getData.then(res => setData(res))
    }    
}, [categoriaId])

const onAdd = (quantify) =>{
    alert(`Agregaste ${quantify} productos al carrito`)
}

return (
    <div>
        <Title greeting='Tienda de productos'/>
        {/*
        <ItemCount initial = {1} stock = {5}  onAdd = {onAdd} /   
        */}   
        <ItemList data = {data}/>     
        
    </div>
  )
}

export default ItemListContainer