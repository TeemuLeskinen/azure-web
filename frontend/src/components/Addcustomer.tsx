import React, { useState, useEffect } from 'react';
import Customer from '../models/customer';
import configData from "../config/configData.json"

const Addcustomer = () => {
    const [boolean, setBoolean] = useState<boolean>();
    const [message, setMessage] = useState('');

    const [input, setInput] = useState<Customer>({
        YTunnus: "",
        asiakkaanNimi: "",
        Postitusosoite: "",
        Postinumero: "",
        Toimipaikka: "",
        YTunnusError: "",
        NimiError: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        let YTunnusError = "";
        let NimiError = "";

        if (!input.YTunnus) {
            YTunnusError = "Y-tunnus ei voi olla tyhjä";         
        }

        if (!input.asiakkaanNimi) {
            NimiError = "Yrityksen nimi ei voi olla tyhjä";
        }

        if (YTunnusError || NimiError) {
            setInput({...input, YTunnusError, NimiError})
            return false;
        }

        return true;
    };
    //https://3dwebtesti.azurewebsites.net/api/HttpTrigger1
    //const response = await fetch('https://3dwebtesti.azurewebsites.net/api/AddCustomer?', {
    //            method: 'POST',
    //            mode: 'no-cors'
    //        });
    //https://3dwebtesti.azurewebsites.net/api/AddCustomer?
    const handleClick = () =>{
        fetch(`/api/add-customer`, {
            method: 'POST',
            mode:'no-cors',
            headers: { 'Content-type': 'application/json',
            },
            body: JSON.stringify({
                YTunnus: input.YTunnus,
                asiakkaanNimi: input.asiakkaanNimi,
                Postitusosoite: input.Postitusosoite,
                Postinumero: input.Postinumero,
                Toimipaikka: input.Toimipaikka
            })
        })
        .then(function(data){
            console.log("Request succeeded with response ", data);
            setMessage('Asiakas lisätty onnistuneesti');
            setBoolean(true);          
        })
        .catch(function(error){
            console.log("Request failed ", error);
            setBoolean(false)
            setMessage('Laskun tallentaminen epäonnistui');
        })                
    };

    

    return(
        <div className="AddCustomer">
            <h3>Lisää asiakas</h3>
                <input 
                    type="text"
                    placeholder="Y-Tunnus"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="YTunnus"
                    value={input.YTunnus}
                />
                <div className="errorMessage">
                    {input.YTunnusError}
                </div>
                <input 
                    type="text"
                    placeholder="Yrityksen nimi"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="asiakkaanNimi"
                    value={input.asiakkaanNimi}
                />
                <div className="errorMessage">
                    {input.NimiError}
                </div>
                <input 
                    type="text"
                    placeholder="Osoite"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="Postitusosoite"
                    value={input.Postitusosoite}
                />
                <input 
                    type="text"
                    placeholder="Postinumero"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="Postinumero"
                    value={input.Postinumero}
                />
                
                <input 
                    type="string"
                    placeholder="Kaupunki"
                    className="AddCustomer-input"
                    onChange={handleChange}
                    name="Toimipaikka"
                    value={input.Toimipaikka}
                />            
            <button 
                className = "AddCustomer-btn"
                onClick={handleClick}>
                Lisää asiakas
            </button>
            <div className={boolean ? "responseMessage":"responseErrorMessage"}>
                    { boolean ? message : message}
            </div>
        </div>
    )
}

export default Addcustomer