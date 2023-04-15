import './App.css'
import Cards from './components/Cards.jsx'
import Logofinal from './components/imagen/Logofinal.png'
import Nav from './components/Nav';
import { useState, useEffect} from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import  Form  from './components/Form/Form';
import Favorites from './components/Favorites';



function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [ access, setAccess] = useState(false);
  const navigate = useNavigate();

  const onSearch = (id)=> {
    const URL_BASE = 'http://localhost:3001';

    if(characters.find((char) => char.id === id)){
      return alert('Personaje repetido')
    };

    fetch(`${URL_BASE}/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.name){
        setCharacters((oldChards)=> [...oldChards, data])
      } else {
        alert('Algo salio mal');
      }
    });
  }

  const onClose = (id) => {
    setCharacters(oldChars.filter((char) => char.id !== id));
  }

  const login = (userData) => {
    if(userData.username === username & userData.password === password){
      setAccess(true);
      navigate("/home");
    } else{
      alert ('Credenciales Incorrectas')
    }
  }

  
/*   Lo que esta pasando en esta funcion Search es que estoy haciendo una peticion a la api por medio de fetch y promesas y estoy cambiando mi estado de set state, poniendo un condicional que diga, si existe data.name que cambia el estado agregando esa data, de lo contrario que tire una alerta */
  


 /* aqui estoy mandando por parametro esa funcion on search a mi componente Nav.
 Lo mismo pasa con el componente Cards, manda la funcion onclose y oldchards por parametro, recordar que el parametro pasado es el nombre, es decir onSearch, onClose y characters, no su valor. */
 
  return (
    <div className='App' style={{ padding: '25px' }}>
    {pathname !== '/' && <Nav onSearch= {onSearch}/>}
      <img className='imagen' src={Logofinal}/>

      

      <Routes>
        <Route 
        path='/' 
        element = {<Form login={login}/>}/>
        <Route 
        path="/home" 
        element= {<Cards characters ={characters} 
        onClose={onClose}/>}/>
      <Route 
      path="/about" 
      element={<About />} />
      <Route 
      path="/favorites" 
      element={<Favorites />} />
      <Route 
      path="/detail/:detailId"  
      element={<Detail />} />

      
      </Routes>
     
    </div>
  );
}

export default App;
