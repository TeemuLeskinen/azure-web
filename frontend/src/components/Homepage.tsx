import * as React from 'react';
import '../App.css'
import {CurrentUser} from './User'

const Homepage: React.FunctionComponent = () => {
    return(
        <div className='homepage'>
            <h1>Tervetuloa{CurrentUser}</h1>
            <h3>
            </h3>
            <a href="https://login.windows.net">Login</a>
        </div>
    )
};
export default Homepage;
