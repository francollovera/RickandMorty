import React from "react";
import style from './About.module.css'
import caricatura from './imagen/caricatura.png'

const About = () =>{
    return( 
        <>
    <div className={style.contenedor}>
        <p className={style.parrafo} >Hola, mi nombre es Franco Llovera, tengo 29 años y soy de San<br/> Miguel de Tucumán. Diseñé esta App de Rick and Morty trabajando<br/> con Api,  usando React,agregando Hooks, Links, Routes, Formularios,<br/> Redux y estilos de todo tipo y de diversas maneras.
        Seguramente<br/>  este es elcomienzo de muchos otros proyectos en donde podemos<br/> poner en marcha nuestros conocimientos, habilidades y sobre <br/>todo nuestra creatividad. </p>
        <img className={style.imagen} src={caricatura}/>


    </div>
    </>
    )
}

export default About;