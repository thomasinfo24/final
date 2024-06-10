
import './App.css';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './paginas/Inicio'
import Destacados from './paginas/Destacados'
import Pedidos from './paginas/Pedidos'
import Contactos from './paginas/Contactos'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/Destacados' element={<Destacados/>}/>
      <Route path='/Pedidos' element={<Pedidos/>}/>    
      <Route path='/Contactos' element={<Contactos/>}/>   
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
