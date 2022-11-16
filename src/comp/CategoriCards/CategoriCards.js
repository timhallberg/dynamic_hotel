import { Link } from 'react-router-dom';


const CategoriCards = ({data}) => {
    return ( <>
    
    
    <>
      <div className="MainHome">
        <div
          style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}
          className="MainHomeGridItems"
        >
          <div>
            <h2>Familjehotell</h2>
            <p style={{ width: "70%", paddingBottom: "16px" }}>
              Hotell för barnfamiljen. Alla hotell har fina poolområden och
              passar barn i alla åldrar.
            </p>
          </div>

          

          {data.map((card, index) => (
                <div key={index} className="card">
                    <h1>{card.title}</h1>
                    <p>{card.description}</p>
                    <Link to={`/cards/${card.title}`} >View More</Link>
                </div>
            ))}






        </div>
      </div>


    </>
    
    
    
    </> );
}
 
export default CategoriCards;