


 

const validation = (userData,errors,setErrors) => {
    if(!userData.username)
    setErrors ({...errors, username: 'Email vacio'});
    else if (userData.username.length > 35)
    setErrors ({...errors, username: 'Alcanzaste el maximo de caracteres permitidos'});
    else if (
        /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.username)
    ) {
        setErrors ({...errors, username: 'Email invalido'});
    }
    else{
        setErrors({...errors, username: ''});
    }

    
};

export default validation;