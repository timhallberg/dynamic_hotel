import { Link, NavLink } from "react-router-dom";
import IconBeach from "../Icons/iconBeach";
import IconPool from "../Icons/iconPool";
import IconRestaurant from "../Icons/iconRestaurant";
import IconWifi from "../Icons/iconWifi";
import "./CategoriCards.css";

const CategoriCards = ({ data }) => {
  return (
    <>
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
              <div  style={{
                backgroundColor: "var(--whitesmoke)",
                height: "568.43px",
                borderRadius: "24px 24px 24px 24px",
                marginBottom: "16px",
              }} key={index} className="card">
                <div className="insideCardsGrid">
                  <div className="insideImgCard">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "0px 24px 24px 24px",
                       
                      }}
                      src={card.hotel_img}
                      alt={card.hotel_img_alttext}
                    />
                  </div>

                  <div className="insideTextCard">
                    <h2>{card.hotel_name} </h2>
                    <p>{card.hotel_description}</p>

                    {card.restaurant ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox">

                          <IconRestaurant/>
                 
                        </div>
                        <div className="iconTextBox">
                          <p>Restaurang</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {card.wifi ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox">
                          
                          <IconWifi/>
                          </div>
                        <div className="iconTextBox">
                          <p>Trådlöst internet</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {card.pool ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox">
                          <IconPool/>
                       </div>
                        <div className="iconTextBox">
                          <p>Poolområde</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {card.beach ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox"> <IconBeach/> </div>
                        <div className="iconTextBox">
                          <p>Strand</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className="hotelListPriceButtonWrapper">
                    <div className="hotelListPrice">
                      <p style={{ textAlign: "end" }}>Pris från</p>
                      <h2 style={{ textAlign: "end" }}>
                        {card.hotel_price} SEK
                      </h2>
                    </div>
                    <div>

                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/cards/${card.title}`}
                      >
                        <button className="defaultButton">Välj hotell</button>
                      </Link>
                    </div>
                  </div>

                  <div className="hotelListFlag">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                      }}
                      src={card.county_flag}
                      alt={card.country_flag_alttex}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default CategoriCards;
