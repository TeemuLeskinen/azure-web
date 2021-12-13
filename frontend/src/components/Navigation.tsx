import * as React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
    display: flex;
    width: 80%;
    margin: 24px auto 16px;
    justify-content: space-between;
`

function Navigation() {
    return(
        <div>
            <NavigationWrapper>
                <Link to="/" className="NavigationBar-link">
                    Etusivulle
                </Link>
                <Link to="/customers" className="NavigationBar-link">
                    Näytä asiakkaat
                </Link>
                <Link to="/addcustomer" className="NavigationBar-link">
                    Lisää asiakas
                </Link>
                <Link to="/editcustomer" className="NavigationBar-link">
                    Muokkaa asiakasta
                </Link>
                <Link to="/invoice" className="NavigationBar-link">
                    Lasku
                </Link>
            </NavigationWrapper>
        </div>
    )
}

export default Navigation