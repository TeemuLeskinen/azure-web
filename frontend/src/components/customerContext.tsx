import * as React from 'react';
import Customer from '../models/customer';

type contextType = {
    defaultCustomer: Customer,
    setDefaultCustomer: (defaultCustomer : Customer) => void
}

const customerContext = React.createContext<contextType>({
    defaultCustomer: {
        _id : "",
        YTunnus : "default",
        asiakkaanNimi: "default",
        Postitusosoite: "default",
        Postinumero: "default",
        Toimipaikka: "default"
    },
    setDefaultCustomer: (defaultCustomer : Customer) => {}
});

export default customerContext