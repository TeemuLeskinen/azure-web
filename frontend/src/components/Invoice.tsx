import React from "react";
import Customerlist from "./Customerlist";
import Invoiceinfo from "./Invoiceinfo";
import LineInfo from "./LineInfo";
import InvoicePDF from "./InvoicePDF/InvoicePDF";

function Invoice() {
    return(
        <div className="App">
            <Customerlist />
            <Invoiceinfo />
            <LineInfo />
            <InvoicePDF />
        </div>
    )
}

export default Invoice