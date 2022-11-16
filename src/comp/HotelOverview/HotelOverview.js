import React from "react";
import { Link, NavLink, useParams } from "react-router-dom";
//Importerar komponenten Header, Footer, samt kompenteterna för ikonerna
import IconBeach from "../Icons/iconBeach";
import IconRestaurant from "../Icons/iconRestaurant";
import IconPool from "../Icons/iconPool";
import IconWifi from "../Icons/iconWifi";

//  Importera npm paketet Raing från react rating
// import Rating from "react-rating";

import "./HotelOverview.css";

const HotelOverview = ({ data }) => {
  const { title } = useParams();
  return (
    <>
      <div>
        {data
          .filter((card) => card.title === title)
          .map((card, index) => (
            <div key={index} className="fullCard">
              <div className="BookingHero">
                <img
                  className="BookingHeroImg"
                  src={card.hotel_img}
                  alt="Bild av ett hotell som ligger direkt nere vid havet"
                  style={{ height: "464.48px", objectFit: "cover" }}
                />

                <div className="HeroOverlay"></div>
              </div>

              <div
                style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}
                className="HotelOverviewMain"
              >
                <div className="OverviewBox">
                  <h2 className="OverviewHotelName">
                    {card.hotel_name}

                    {/* Här används Rating som är ett npm paket för att visualisera hur många stjärnor hotellet har. 
                  Vi har använt punkter istället eftersom det passar bättre in med designen som har en mer rundad apporach 
                  
                  antalet punkter styrs baserat på det värde som är satt i arrayen
                  */}
                    {/* <Rating
                    // fullSymbol="src/img/star-solid.svg"
                    initialRating={card.hotel_rating}
                    readonly
                  /> */}
                  </h2>
                  <div className="starsForHotel">
                    {/** Skriva ut antal stjärnor för valt hotell från array*/}

                    <div className="full-hotel-icon-wrapper">
                      {/* Här används en funktion för att checka om ikonen skall skrivas ut eller ej. Boolian true eller false som hämtas från array */}
                      {card.restaurant ? (
                        <div className="iconBoxWrapper-hotel">
                          <div className="iconImgBox-hotel">
                            <IconRestaurant />
                          </div>
                          <div className="iconTextBox-hotel">
                            <p>Restaurang</p>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {card.wifi ? (
                        <div className="iconBoxWrapper-hotel">
                          <div className="iconImgBox-hotel">
                            <IconWifi />
                          </div>
                          <div className="iconTextBox-hotel">
                            <p>Trådlöst internet</p>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {card.pool ? (
                        <div className="iconBoxWrapper-hotel">
                          <div className="iconImgBox-hotel">
                            <IconPool />
                          </div>
                          <div className="iconTextBox-hotel">
                            <p>Poolområde</p>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {card.beach ? (
                        <div className="iconBoxWrapper-hotel">
                          <div className="iconImgBox-hotel">
                            <IconBeach />
                          </div>
                          <div className="iconTextBox-hotel">
                            <p>Strand</p>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    {/**Skriva ut ikoner för valt hotell */}

                    <p>{card.hotel_description}</p>
                  </div>
                </div>

                {/* Sammanfattningen hotellvy startar här */}
                <div style={{padding: "24px"}} className="HotelInfoSummary">
                  <h3 className="HeaderSummary">Bra att veta:</h3>
                  <ul>
                    <li style={{ fontWeight: "bold" }}>Incheckning:</li>
                    <li style={{ padding: "0px" }}>{card.info_check_in}:</li>
                    <li style={{ fontWeight: "bold" }}>Utcheckning:</li>
                    <li style={{ padding: "0px" }}>{card.info_check_out}</li>
                    <li style={{ fontWeight: "bold" }}>Städning:</li>
                    <li style={{ padding: "0px" }}>{card.info_cleaning}</li>
                    <li style={{ fontWeight: "bold" }}>Frukost:</li>
                    <li style={{ padding: "0px" }}>{card.info_breakfast}</li>
                    <li style={{ fontWeight: "bold" }}>Rökning:</li>
                    <li style={{ padding: "0px" }}>{card.info_smooking}</li>
                    <li style={{ fontWeight: "bold" }}>Närmaste flygplats:</li>
                    <li style={{ padding: "0px" }}>{card.info_airport}</li>
                    <li style={{ fontWeight: "bold" }}>Transfer:</li>
                    <li style={{ padding: "0px" }}>{card.info_transfer}</li>
                    <li style={{ fontWeight: "bold" }}>Avbokning:</li>
                    <li style={{ padding: "0px" }}>{card.info_cancellation}</li>
                  </ul>
                  <div className="priceFrom">
                    <p >pris från:</p>
                    <h4 style={{ color: "black" }}>{card.hotel_price}kr</h4>

                    {/* Här används NavLink för att navigera användaren vidare till själva checkoutsteget */}
                    <div className="buttons">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/cards/nextcard/${card.title}`}
                      >
                        {" "}
                        <div>
                          <button className="defaultButton">Boka</button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Sammanfattningen hotellvy slutar här */}

                {/* Gå tillbaka till andra kategorier finns här och är kollat via NavLink router för att skicka användaren tillbaka till kategorierna */}
                <NavLink
                  to="/winterhotel"
                  style={{ textDecoration: "none" }}
                  className="winterSport"
                >
                  <div>
                    <h2 style={{ margin: "21px" }}>Vintersport</h2>
                    <img
                      style={{
                        height: "136px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "0px 24px 24px 24px",
                      }}
                      src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/austria-salzburg-young-couple-skiing-on-mountain-2022-03-08-01-22-33-utc.jpeg?v=1664265142680"
                    ></img>
                  </div>
                </NavLink>
                <NavLink
                  to="/sunhotel"
                  style={{ textDecoration: "none" }}
                  className="summerVacation"
                >
                  <div>
                    <h2 style={{ margin: "21px" }}>Solsemester</h2>
                    <img
                      style={{
                        height: "136px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "0px 24px 24px 24px",
                      }}
                      src="https://cdn.glitch.me/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/woman-in-bikini-on-beach-2022-02-02-03-49-15-utc.jpeg?v=1664268040112"
                    ></img>
                  </div>
                </NavLink>

                {/* Gå tillbaka till andra kategorier slutar här */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HotelOverview;
