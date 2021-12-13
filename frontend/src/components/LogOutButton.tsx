import React from 'react';
import './LogOutButton.css';
import { Link } from 'react-router-dom';

export function LogOutButton() {
    return (
        <Link to='/userloginout'>
            <button className='btn'>
            <i className="fas fa-sign-in-alt" />
            </button>
        </Link>
    );
}