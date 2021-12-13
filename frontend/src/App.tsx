import React, { useContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import './App.css';
//Components
import Customer from './models/customer';
import Homepage from './components/Homepage';
import Customerlist from './components/Customerlist';
import Invoice from './components/Invoice';
import Addcustomer from './components/Addcustomer';
import Editcustomer from './components/Editcustomer';
import Navbar from './components/Navbar/Navbar';
import TestiContext from './components/customerContext';
import invoiceContext from './components/invoiceContext';
import lineInfoContext from './components/LineInfoContext';
import User from './components/User';
import RegisterUser from './components/userregister';

function App() {
  const [defaultCustomer, setDefaultCustomer] = useState({
    YTunnus : "",
    asiakkaanNimi: "",
    Postitusosoite: "",
    Postinumero: "",
    Toimipaikka: ""
  },);

  const [defaultInvoice, setDefaultInvoice] = useState({    
        Tilinumero: "",
        LaskunNumero: "",
        LaskunPvm: "",
        Erapaiva: "",
        Viitenumero: "",
        Viesti: "",
        Tarkistenumero: ""
    },);

  const [defaultLineInfo, setDefaultLineInfo] = useState([{
        selite: "",
        kpl: 0,
        hinta: 0,
        alv: 24,
        price: 0,
        total: 0,
    }],);

  const taxChecked = false

  const value = {defaultCustomer, setDefaultCustomer};
  const invoiceInfo = {defaultInvoice, setDefaultInvoice};
  const lineInfo = {defaultLineInfo, setDefaultLineInfo};
  return(
    <TestiContext.Provider value={value}>
      <Router>
          <Navbar />
        <div className="App">
          {/*<Navigation/>*/}
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/addcustomer" component={Addcustomer} />
            <Route path="/editcustomer" component={Editcustomer} />
            <Route path="/customers" component={Customerlist} />
            <invoiceContext.Provider value={invoiceInfo}>
            <lineInfoContext.Provider value={lineInfo}>
            <Route path="/invoice" component={Invoice} />
            <Route path="/userloginout" component={User} />
            <Route path="/register" component={RegisterUser} />
            </lineInfoContext.Provider>
            </invoiceContext.Provider>
          </Switch>
      </div>
      </Router>
    
    </TestiContext.Provider>
  );
}

export default App;
