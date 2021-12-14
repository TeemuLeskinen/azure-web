import * as React from 'react';
import { useContext, Component } from "react";
import Customer from '../models/customer';
import CustomerDiv from './customerDiv';
import configData from "../config/configData.json"


function Customerlist() {
    let emptyCustomer:Customer = {
        YTunnus: "",
        asiakkaanNimi: "",
        Postitusosoite: "",
        Postinumero: "",
        Toimipaikka: ""
    }
    const [total, setTotal] = React.useState(0);
    const [counter, setCounter]:any = React.useState(0);
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [input, setinput] = React.useState(""); 
    //const [token, setToken] = React.useState('');

    //let currentUser = localStorage.getItem('currentUser');


    const getData = async () => {
        try {
            const response = await fetch('https://apifunktiot.azurewebsites.net/api/getCustomers?', {
                method: 'GET',
                headers: { 'Content-type': 'application/json' }
            });

            const data = await response.json();
            if(response.ok){
                setTotal(data.length);
                setCustomers(data)
            }
            else{
                console.log("response OK failed: " + response.status + " " + response.statusText);
            }
        } catch (error) {
            console.log("GetData failed, error:" + error);
        }

    }
    React.useEffect(()=> {
        //if (currentUser) {            
        //    setToken(JSON.parse(currentUser!).token);
        //}
        getData();
    }, []);

    React.useEffect(()=> {
        setTotal(filteredList.length)
    }, [input]);

    let filteredList = customers.filter(Customer => {return Customer.asiakkaanNimi.toLowerCase().includes(input.toLowerCase())});
    const ClickPrev = () =>{
        if (counter>0 && counter < 10){
            setCounter(0)
        }
        else if(counter > 1){
            setCounter(counter -10)
        }
    }
    const ClickNext = () =>{
        console.log(total)
        if(counter < total && counter+20 > total && total > 10){
            setCounter(total-10)
        }
        else if(counter+20 <= total){
            setCounter(counter+10)
        }
    }

    
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinput(e.target.value);
        setCounter(0);
    }

    const showCustomers = filteredList.slice(counter, counter+10);

    return(
        <div className="customerList">
            <h3>Suodata</h3>
            <input type="text" className ="filter" value={input} onInput={inputChange}/>
            <h3>{(counter == 0) ? 0 : counter}-{(total > 10) ? counter+10 : total}/{total}</h3>
            <button className="prevButton" onClick={ClickPrev}> edelliset</button>
            {showCustomers
                .map(Customer =>(
                <CustomerDiv key={Customer._id}{...Customer}/>
            ))}
            <button className="nextButton" onClick={ClickNext}>seuraavat</button>
        </div>
    )
}

export default Customerlist
