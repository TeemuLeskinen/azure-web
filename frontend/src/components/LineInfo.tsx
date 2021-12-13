import React, { useState, useContext, } from "react";
import lineInfoContext from "./LineInfoContext";

const LineInfo = () => {
    const { defaultLineInfo, setDefaultLineInfo } = useContext(lineInfoContext);

    const [taxChecked, setTaxChecked] = useState<boolean>(false);
    const toggleTaxChecked = () => setTaxChecked(value => !value);

    const [inputList, setInputList] = useState([{
        selite: "",
        kpl: 0,
        hinta: 0,
        alv: 24.0,
        price: 0,
        total: 0,
    }])

    const handleInputChange = (e:any, index:number) => {
        const { name, value } = e.target;
        const list:any = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleRemoveClick = (index: number) => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAddClick = () => {
        setInputList([...inputList, {
            selite: "",
            kpl: 0,
            hinta: 0,
            alv: 24.0,
            price: 0,
            total: 0,
        }])
    }

    const addToInvoice = () => {
        const list = [...inputList];
        if (taxChecked) {
            for (let i=0; i<list.length; i++) {
                list[i].price = list[i].hinta
                list[i].total = list[i].price * list[i].kpl
                list[i].price = list[i].price * (100-list[i].alv)/100
            }
        }
        else {
            for (let i=0; i<list.length; i++) {
                list[i].price = list[i].hinta
                list[i].total = (+list[i].price + +list[i].price * list[i].alv/100) * list[i].kpl
            }
        }
        setDefaultLineInfo(list);
    }

    return (
        <div className="Invoice">
            <h3>Rivitiedot</h3>

            {inputList.map((x, i) => {
                return (
                    <div>
                        <input 
                            type="text"
                            placeholder="Selite"
                            className="lineInfo-input"
                            onChange={e => handleInputChange(e, i)}
                            name="selite"
                            value={x.selite}
                        />
                        <input 
                            type="number"
                            placeholder="Kpl"
                            className="lineInfo-price"
                            onChange={e => handleInputChange(e, i)}
                            name="kpl"
                            value={x.kpl}
                        /><label className="lineInfo-label">Kpl</label>
                        <input 
                            type="number"
                            placeholder="Hinta"
                            className="lineInfo-price"
                            onChange={e => handleInputChange(e, i)}
                            name="hinta"
                            value={x.hinta}
                        /><label className="lineInfo-label">Hinta</label>
                        <select 
                            className="Invoice-select"
                            name="alv"
                            onChange={e => handleInputChange(e, i)}>
                            <option value="24">24%</option>
                            <option value="14">14%</option>
                            <option value="10">10%</option>
                            <option value="0">0%</option>
                        </select><label className="lineInfo-label">ALV</label>
                        <div>
                            {inputList.length - 1 === i &&
                                <button
                                    className="AddCustomer-btn"
                                    onClick={handleAddClick}>
                                    Lisää rivi
                                </button>
                            }
                            {inputList.length !== 1 && 
                                <button
                                    className="AddCustomer-btn"
                                    onClick={() => handleRemoveClick(i)}>
                                    Poista
                                </button>
                            }
                        </div>
                    </div>
                )
            })}
            <button
                className="AddCustomer-btn"
                onClick={ addToInvoice }>
                Lisää laskulle
            </button>
            <input
                id="VerollinenHinta" 
                type="checkbox"
                className="Invoice-checkbox"
                name="Verollinen hinta"
                onChange={toggleTaxChecked}
                />
            <label htmlFor="Viesti">Verollinen Hinta</label>
        </div>
    )
}

export default LineInfo