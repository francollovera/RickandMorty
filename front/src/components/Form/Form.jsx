
import style from './Form.module.css';
import { useState } from "react";
import validation from './Validation';


const Form = ({login}) =>{

    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' });

        const[errors, setErrors] = useState({ 
            username: '', 
            password: '' });




            /* traigo el name del input de lo que se escribio, y dsp traigo el valor de lo qque se escribio */
        const handleInputChange = (event)=> {
             const property = event.target.name;
             const value = event.target.value;


            /* me guardo todo lo que tiene el estado, y username va a tomar el valor del a que acbao de escribir */
             setUserData({...userData, [property]: value}); /* cambio userData; */validation({...userData, [property]: value}, setErrors, errors);
        }

        const submitHandler = (event)=>{
            event.preventDefault();
            login(userData)
        }
        
return(
   /*  aqui no hace falta el div al comienzo */
        <form onSubmit={submitHandler} className={style.contenedor}>
            <div>
                <label className={style.label} htmlFor="username">Username :</label>
                <input type='text'
                 name="username" 
                 value={userData.username} 
                 onChange={handleInputChange}  />
                <br></br>
                <span className={style.span}>{errors.username}</span>
            </div>

            <div>
                <label className={style.label}
                 htmlFor="password"> 
                 Password : </label>
                <input type='text' 
                name="password" 
                value={userData.password}  
                onChange={handleInputChange}/>
                <br></br>
                
            </div>

          
            <button className={style.button} 
            type="submit">LOGIN</button>
        </form>

   


)
}

export default Form;