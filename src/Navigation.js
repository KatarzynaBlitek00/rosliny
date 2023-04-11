import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Card1">Card1</Link>
            </li>
        </ul>
    );
}