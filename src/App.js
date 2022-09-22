import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import ItemDetail from './components/ItemDetail/ItemDetail'
import Cart from './components/Cart/Cart';
import CartProvider from './Context/CartProvider'


function App() {
  return (
   <>  
   <CartProvider>
   <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />  
          <Route path='/cart' element={<Cart/>}/>
      </Routes>        
    </BrowserRouter>
    </CartProvider>





    </> 
   
  );
}

export default App;
