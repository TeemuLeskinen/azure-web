import * as React from 'react';

interface Customer{
    _id?: string;
    YTunnus: string;
    asiakkaanNimi: string;
    Postitusosoite: string;
    Postinumero: string; 
    Toimipaikka: string;
    YTunnusError?: string;
    NimiError?: string;
}

export default Customer;