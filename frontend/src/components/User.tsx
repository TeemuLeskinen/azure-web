import React from "react";
import Userloginout from "./userloginout";

export function CurrentUser(){
    Object.entries(localStorage).map(([key, value]) =>{
        const data = JSON.parse(value);
        if (!data){
            return(
                <p>, kirjaudu sisään</p>
            )
        }
        else{
            return (
                <p>, {data.username}</p>
            )
        }
    }
    )
}
function User() {
    return(
        <div className="App">
            <Userloginout />
        </div>
    )
}

export default User