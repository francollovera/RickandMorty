import style from './SearchBar.module.css'
import { useState } from 'react';
import { NavLink } from "react-router-dom";

//Al crear el setState, me interesa el id de cada tarjeta de rick and morty, que comenzara con un string vacio, la prop de este componente viene de nav que sera la funcion onSearch en este caso.
export default function SearchBar({ onSearch }) {
   const[id, setId] = useState('');

//esto cambiara el setState(setId) por el evento que este escribiendo en mi input.
   function handleChange(event){
      setId(event.target.value)
   }
   return (
      
      <div className={style.contenedor}>
         
        
         <input onChange={handleChange} 
         className={style.input} 
         type='search' />
            
         

         {/* aqui creo directamente la funcion onclick que dentro tendra la funcion on search que me pasaron por props con el respectivo id de mi useState. */}
      <button className={style.button} onClick={()=>{onSearch(id)}}>
         Agregar
         </button>
      </div>
   );
}
