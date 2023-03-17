
import { useParams } from 'react-router-dom';
import {useState , useEffect } from 'react';
import axios from 'axios';
import style from './Detail.module.css'



const Detail = ()=>{
    const { detailId } = useParams();

    const[character, setCharacter] = useState({})

  

    useEffect(() => {
        const URL_BASE = 'https://be-a-rym.up.railway.app/api';
        const KEY = '1656cbb62021.21d9650ef218aa4f74f0' ;
      
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response)=> setCharacter(response.data));
      }, []);



    return(
        <div className={style.contenedor}>
            
            {character.name ? ( 
            <>
            <h1 className={style.titulo}>NOMBRE: {character.name}</h1>
            <h1 className={style.titulo} >STATUS: {character.status}</h1>
            <h1 className={style.titulo}>SPECIE: {character.species}</h1>
            <h1 className={style.titulo}>GENDER: {character.gender}</h1>
            <h1 className={style.titulo}>ORIGIN: {character.origin?.name}</h1>
            <img className={style.image} src={character.image} alt=''/>

            
            </>
            ) : (
            <h3>Loading...</h3>
            )}
        </div>
    );
};

export default Detail;