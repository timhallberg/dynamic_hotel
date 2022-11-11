import React from "react";
import { Link, useParams } from "react-router-dom";

const FullCard = ({ data }) => {
  const { title } = useParams();

  return (
    <>
      <div>
        {data
          .filter((card) => card.title === title)
          .map((card, index) => (
            <div key={index} className="fullCard">
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <Link to={`/cards/nextcard/${card.title}`} >Till nästa</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default FullCard;
