import React , { createContext } from 'react';
import Invoice from '../models/Invoice';

type contextType = {
    defaultInvoice: Invoice,
    setDefaultInvoice: (defaultInvoice: Invoice) => void
}

const invoiceContext = createContext<contextType>({
    defaultInvoice: {
        Tilinumero: "default",
        LaskunNumero: "default",
        LaskunPvm: "default",
        Erapaiva: "default",
        Maksuehto: "default",
        Viivastyskorko: "default",
        Viitenumero: "default",
        Viesti: "default",
        Tarkistenumero: "default"
    },
    setDefaultInvoice: (defaultInvoice : Invoice) => {}
})



export default invoiceContext