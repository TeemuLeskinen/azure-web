import * as React from 'react';

interface Invoice{
    Tilinumero: string;
    LaskunNumero: string;
    LaskunPvm: string;
    Erapaiva: string;
    Maksuehto?: string;
    Viivastyskorko?: string;
    Viitenumero: string;
    Viesti: string;
    Tarkistenumero: string;
}

export default Invoice;