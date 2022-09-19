import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
  return (
   <>  
   <BrowserRouter>
        <NavBar/>

      <Routes>
        
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />  
          <Route path='/cart' element={<ItemDetail/>} />
      </Routes>    
    </BrowserRouter>
    
    </> 
   
  );
}

export default App;
