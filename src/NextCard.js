import { useParams } from "react-router-dom";

const NextCard = ({ data }) => {
  const { title } = useParams();
  return (
    <>
      <div>
        {data
          .filter((card) => card.title === title)
          .map((card, index) => (
            <div key={index} className="fullCard">
              <h1>{card.title}</h1>
              <p>{card.nextCardinfo}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default NextCard;
