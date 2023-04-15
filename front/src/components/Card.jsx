import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from '../redux/actions';
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";



function Card({ id, name, species, gender, image, onClose, myFavorites  }){
   const [ esFavo, setEsFavo ]= useState(false);
   const dispatch = useDispatch();


const addFavorite = (character) =>{
   axios
   .post("http://localhost3001/rickandmorty/fav", character)
   .then((res) =>console.log('ok'));
}

const removeFavorite = async(id) =>{
   await axios.delete(`http://localhost3001/rickandmorty/fav/${id}`);
   dispatch(getFavorites());
   alert('Ha sido eliminado correctamente')
}

const HandleFavorite = () =>{
   if(esFavo){
      setEsFavo(false);
      removeFavorite(id); 
   }else{
      setEsFavo(true);
   

   addFavorite({
      id,
      name,
      species,
      gender,
      image
   });
   
} 
};

useEffect (() =>{
   myFavorites.forEach((fav) =>{
      if(fav.id === id){
         setEsFavo(true)
      }
   });
}, [myFavorites])

return (
   <div className = { style.contenedor }>
      { esFav ? (
         <button onClick={handleFavorite}></button>
        ) : ( 
         <button onClick={handleFavorite}></button>
        )}
        <button onClick={() => onClose(id)} className={style.button}>X</button>

        <Link to={`/detail/${id}`}>
         <h2>{name}</h2>

        </Link>
        <img src= {image} alt="" />

        <h2>Species : {species}</h2>
        <h2>Gender : {gender}</h2>

   </div>


)}
const mapDispatchToProps = (dispatch) =>{
   return {
      removeFavorite :(id) =>{
         dispatch(removeFavorite(id));

      },
   };
};

const mapStatetoProps = (state) =>{
   return {
      myFavorite : state.myFavorites,

      };
   };

   export default connect(mapStatetoProps, mapDispatchToProps)(card);