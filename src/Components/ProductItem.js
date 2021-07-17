import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

export default function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if(!shoe)
        return <h2>Product Not Found!</h2>
    console.log(shoe)
    return (
        <div>
            
            <h1>Welcome to Product Items Page</h1>
            <div className='link'>
                        <h4>{shoe.name}</h4>
                        <img src={shoe.img} height={500} alt={shoe.name} />
                    </div>
        </div>
    )
}
