import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <h1>Welcome to Navbar</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/product/:id">ProductItem</Link>
        </div>
    )
}
