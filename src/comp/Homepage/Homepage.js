import React from 'react';
import "./Homepage.css";
import { NavLink, Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <HomeCards />
    </>
  );
};

const HomeCards = ({ categoriData }) => {
  return (




<>

</>





//     <>

//     {categoriData.map((card, index) => (
//         <div key={index} className="card">
//             <h1>{card.title}</h1>
//             <p>{card.description}</p>
//             <Link to={`/cards/${card.title}`} >View More</Link>
//         </div>
//     ))}

// </>



  );
};

export { Homepage, HomeCards };
