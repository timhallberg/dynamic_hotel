import React from 'react';
import { Link } from 'react-router-dom';



const Card = ({data}) => {
    return ( 
        <>

            {data.map((card, index) => (
                <div key={index} className="card">
                    <h1>{card.title}</h1>
                    <p>{card.hotel_name}</p>
                    <Link to={`/cards/${card.title}`} >View More</Link>
                </div>
            ))}

        </>
     );
}
 
export default Card;