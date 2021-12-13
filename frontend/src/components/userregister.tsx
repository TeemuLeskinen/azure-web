import React, {useState} from 'react';
import axios from 'axios';
import configData from "../config/configData.json";

export function RegisterUser(){
    const [user,setUser] = useState({
        username:'',
        password:'',
        ytunnus:'',
        email:'',
        tilinumero:'',
        usernameError: "",
        passwordError: "",
        ytunnusError: "",
        emailError: "",
        tilinumeroError: ""
    })
    const handleChange = (e: { target: { name: any; value: any; }; }) =>{
        const {name, value} = e.target 
        setUser({...user,
        [name]:value
    })
    }


    const validate = () => {
        let usernameError = "";
        let passwordError = "";
        let ytunnusError = "";
        let emailError = "";
        let tilinumeroError = "";
        if (!user.username) {
            usernameError = "Tunnus ei voi olla tyhjä";         
        }
        if (!user.password) {
            passwordError = "Salasana ei voi olla tyhjä";
        }
        if (!user.ytunnus) {
            ytunnusError = "Y-tunnus ei voi olla tyhjä";
        }
        if (!user.email) {
            emailError = "Email ei voi olla tyhjä";
        }
        if (!user.tilinumero) {
            tilinumeroError = "Tilinumero ei voi olla tyhjä";
        }
        if (usernameError || passwordError || ytunnusError || emailError || tilinumeroError) {
            setUser({...user, usernameError, passwordError, ytunnusError, emailError, tilinumeroError})
            return false;
        }
        return true;
    };

    const Register = () =>{
        const isValid = validate();
        if(isValid){
            axios.post(`${configData.API_URL}:${configData.API_PORT}/user/register`, user)
            .then(res=>console.log(res));
            setUser({
                username:'',
                password:'',
                ytunnus:'',
                email:'',
                tilinumero:'',
                usernameError: "",
                passwordError: "",
                ytunnusError: "",
                emailError: "",
                tilinumeroError: ""
            })
        }
    }

    return(
        <div className="AddCustomer">
        <h1>Rekisteröidy</h1>
        Käyttäjätunnus: <input type="text" value={user.username} name="username" onChange={handleChange} className="AddCustomer-input"></input>
        <div className="errorMessage">{user.usernameError}</div>
        Salasana: <input type="password" value={user.password} name="password" onChange={handleChange} className="AddCustomer-input"></input>
        <div className="errorMessage">{user.passwordError}</div>
        Y-tunnus: <input type="text" value={user.ytunnus} name="ytunnus" onChange={handleChange} className="AddCustomer-input"></input>
        <div className="errorMessage">{user.ytunnusError}</div>
        E-mail: <input type="text" value={user.email} name="email" onChange={handleChange} className="AddCustomer-input"></input>
        <div className="errorMessage">{user.emailError}</div>
        Tilinumero: <input type="text" value={user.tilinumero} name="tilinumero" onChange={handleChange} className="AddCustomer-input"></input>
        <div className="errorMessage">{user.tilinumeroError}</div>
        <input type="submit" onClick={Register} className="AddCustomer-btn"></input>
        </div>
    )
}

export default RegisterUser;
