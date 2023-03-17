import './App.css'
import Cards from './components/Cards.jsx'
import Logofinal from './components/imagen/Logofinal.png'
import Nav from './components/Nav';
import { useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import  Form  from './components/Form/Form.jsx';


const URL_BASE = "https://be-a-rym.up.railway.app/api"
const API_KEY = "1656cbb62021.21d9650ef218aa4f74f0"

function App() {
  const [oldChars, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !oldChars.find((char)=> char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
  }

  const onClose = (pj) => {
    setCharacters(oldChars.filter((obj) => obj.id !== pj.id));
  }

  
/*   Lo que esta pasando en esta funcion Search es que estoy haciendo una peticion a la api por medio de fetch y promesas y estoy cambiando mi estado de set state, poniendo un condicional que diga, si existe data.name que cambia el estado agregando esa data, de lo contrario que tire una alerta */
  


 /* aqui estoy mandando por parametro esa funcion on search a mi componente Nav.
 Lo mismo pasa con el componente Cards, manda la funcion onclose y oldchards por parametro, recordar que el parametro pasado es el nombre, es decir onSearch, onClose y characters, no su valor. */
 const {pathname} = useLocation();
  return (
    <div className='App' style={{ padding: '25px' }}>

      <img className='imagen' src={Logofinal}/>

      {pathname !== '/' && <Nav onSearch= {onSearch}/>}

      <Routes>
        <Route path='/' element = {<Form/>}/>
        <Route path="/home" element= {<Cards characters ={oldChars} onClose={onClose}/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/detail/:detailId"  element={<Detail />} />

      
      </Routes>
     
    </div>
  );
}

export default App;
