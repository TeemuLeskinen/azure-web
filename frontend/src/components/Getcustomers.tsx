import React from "react";

export default class GetCustomers extends React.Component {
    constructor(props:string) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(json =>  console.log(json))
    }

    render(){
        return(
            <div className="GetCustomers">
                <button className="GetCustomers-button" 
                    onClick={this.handleClick}>
                    Get Customers
                </button>
            </div>
        )
    }

}