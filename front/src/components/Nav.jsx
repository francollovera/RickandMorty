import React from "react";
import SearchBar from "./SearchBar";
import style from './Nav.module.css';
import { Link } from "react-router-dom";




/* aqui estoy recibiendo unas props por paramentro que me envia el componente App, osea la funcion onSearch. */


const Nav = (props) => {
  return (
    <div >
      {props.location.pathname !== "/" ? (
        <nav className={style.contenedorNav}>
          
        
            <Link className={style.Link} to ={"/about"}>
                <h3>ABOUT</h3>
            </Link>
            <br></br>
            <SearchBar
        onSearch={props.onSearch}/>
        <br></br>
            <Link className={style.Link}  to ={"/home"}>
                <h3>HOME</h3>
            </Link>
            <Link className={style.Link}  to ={"/favorites"}>
                <h3>FAVORITES</h3>
            </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default Nav;