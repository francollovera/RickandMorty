import SearchBar from './SearchBar'

import style from './Nav.module.css';
import { Link, useNavigate } from "react-router-dom";

export default function Nav(props) {
    const navigate = useNavigate();
    const {onSearch} = props;

    const handleClick = ()=> {
        navigate('/');
    }

    return(
        
        <div className={style.container}>
            
            <div className={style.nav}>
                <Link to="/">Home</Link>
                <br />
                <Link to="/about">About</Link>
                <br />
                <Link to="/favorites" >Favorites</Link>
                <div className={style.containLetter} onClick={handleClick}>
                
            </div>
                
            </div>
            
            
            
            <SearchBar onSearch={onSearch}/>
            
        </div>
        
    )

}