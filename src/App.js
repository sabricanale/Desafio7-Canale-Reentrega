import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
   <>    
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />   
      </Routes>    
    </BrowserRouter>
    </> 
   
  );
}

export default App;
