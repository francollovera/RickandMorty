import style from './Card.module.css'
import { Link } from 'react-router-dom';

/* Cards recibe las 5 props que me manda el Cards.js, son  y no le hago ningun tipo de destructuring. */

export default function Card(props) {
   return (
      <div className= {style.contenedor} >

         {/* mi card tiene un boton que crea una funcion onClick, al que le pasan por parametro la funcion onClose, que viene de app.js, pasa por cards.js hasta llegar finalmente a card.js */}


     
        
       
            <Link to={`/detail/${props.id}`} >
    <h2 className="card-title">{props.name}</h2>
       </Link>
       <button className={style.button} onClick={()=>{props.onClose(props)}}>X</button>
       <br></br>
       <img className={style.image} src={props.image} alt= ''/>
       <h2>Species : {props.species}</h2>
       <h2>Gender : {props.gender}</h2>
      </div>
   );
}
