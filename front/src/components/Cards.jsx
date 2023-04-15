import Card from './Card';
import style from './Cards.module.css'


/* Aqui pasa exactamente lo mismo, recibo la prop que envia app.js, osea OnClose y characters */

export default function Cards(props) {
   
   return <div className = {style.contenedor}>
   
      
      {props.characters.map((character)=>{
         return( 
             <Card
             key = {character.id}
             id = {character.id}
         name = {character.name}
         species = {character.species}
         gender = {character.gender}
         image = {character.image}
         onClose = {props.onClose}/>
      );
      })}
      
   </div>;
}
