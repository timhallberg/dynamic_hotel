import React from "react";

// import { useParams } from 'react-router-dom';

import "./App.css";
import Hero from "./Hero";

import { Route, Routes } from "react-router-dom";
import FullCard from "./FullCard";
import NextCard from "./NextCard";
import Header from "./comp/Header/Header";
import Footer from "./comp/Footer/Footer";
import { Homepage } from "./comp/Homepage/Homepage";
import CategoriCards from "./comp/CategoriCards/CategoriCards";
import HotelOverview from "./comp/HotelOverview/HotelOverview";
import Booking from "./comp/Booking/Booking";

function App() {
  const categoriData = [
    {
      categoritype: "Endast Vuxna",
      categoriImg:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/colosseum-in-rome-italy-2021-08-26-16-34-15-utc.jpeg?v=1664265152632",
    },
    {
      categoritype: "Familjehotell",
      categoriImg:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/kids-playing-on-the-edge-of-the-pool-2022-05-03-05-17-48-utc.jpeg?v=1664265142892",
    },
    {
      categoritype: "Vintersport",
      categoriImg:
        "https://cdn.glitch.me/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/woman-in-bikini-on-beach-2022-02-02-03-49-15-utc.jpeg?v=1664268040112",
    },
    {
      categoritype: "Solsemester",
      categoriImg:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/austria-salzburg-young-couple-skiing-on-mountain-2022-03-08-01-22-33-utc.jpeg?v=1664265142680",
    },
  ];

  const data = [
    {
      title: "HTML",
      description: "This is HTML",
      nextCardinfo: "only on next card 1",
      hotel_id: "1",
      hotel_name: "Grand Hotell - Italiensk lyx",
      hotel_description:
        "Grand Hotell erbjuds ett utmärkt läge, bara fem minuters promenad från Canal Grande och Rialto-bron. Vill du äta gott får du inte missa Le Maschere, där man serverar frukost, lunch och middag. Gäster på detta hotell i lyxstil får dessutom tillgång till en bar/lounge och en terrass. De sköna sängarna och läget brukar uppskattas av våra resenärer",
      country: "Italien",
      county_flag:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/Flag_of_Italy.svg.png?v=1665736532494",
      country_flag_alttex: "Italiens flagga",
      hotel_city: "Ancona",
      adress: "Via Marsala",
      hotel_phonenumber: "+39 0123 456 789",
      hotel_img:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/luxury-hotel-2021-08-26-16-16-13-utc.jpeg?v=1664359471636",
      hotel_img_alttext: "Bild på ett lyxhotell",
      hotel_price: "1295",
      cancellation_price: "99",
      hotel_rating: "4",
      number_of_rooms: "1 rum för 2 personer",
      pool: true,
      beach: true,
      cleaning: true,
      wifi: true,
      restaurant: true,
      family_hotel: false,
      info_check_in: "14:00 - 19:00",
      info_check_out: "13:00",
      info_cancellation: "Gratis avbokning 7 dagar innan",
      info_smooking: "Ej tillåtet",
      info_transfer: "Ingår inte",
      info_airport: "Pinelasa - PSN",
      info_cleaning: "Ingår",
      info_breakfast: "Frukosten ingår och är öppen mellan 07:00 och 09:30",
    },
    {
      title: "CSS",
      description: "This is CSS",
      nextCardinfo: "only on next card 2",
      hotel_id: "2",
      hotel_name: "Sals ski resort - Skidåkning i Alperna",
      hotel_description:
        "Alldeles intill Alpentherme Spa, bara några minuters promenad från Bad Hofgasteins centrum ligger mysiga familjehotellet Sals ski resort och liften kan hittas inom en 5 minuters promenad. Alla rum är välinredda och utrustade med modernt badrum och en balkong med utsikt över Alperna. Det omfattande spaet kan du få upp temperaturen igen efter en lång dags skidåkning. Hotell Sals ski resort har också en uppvärmd inomhuspool där man kan ta några avkopplande varv.",
      country: "Österrike",
      county_flag:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/nedladdning.png?v=1665736508230",
      country_flag_alttex: "Österikes flagga",
      hotel_city: "Hallstatt",
      adress: "Greenstraat 12",
      hotel_phonenumber: "+4390 876 543 321",
      hotel_img:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/austria-salzburg-young-couple-skiing-on-mountain-2022-03-08-01-22-33-utc.jpeg?v=1664265142680",
      hotel_img_alttext: "Bild på ett skidåkande par",
      hotel_price: "1790",
      cancellation_price: "99",
      hotel_rating: "4",
      number_of_rooms: "1 rum för 2 personer",
      pool: true,
      beach: false,
      cleaning: true,
      wifi: true,
      restaurant: true,
      family_hotel: false,
      info_check_in: "15.00",
      info_check_out: "11:00",
      info_cancellation: "Gratis avbokning 48 timmar innan",
      info_smooking: "Ej tillåtet",
      info_transfer: "Ingår",
      info_airport: "Artica - ATN",
      info_cleaning: "Ingår",
      info_breakfast: "Frukosten ingår och är öppen mellan 07:00 och 09:30",
    },
    {
      title: "JS",
      description: "This is JS",
      nextCardinfo: "only on next card 3",
      hotel_id: "3",
      hotel_name: "Sunset hotel - Kurreklubben",
      hotel_description:
        "Sunset hotel är ett modernt och barnvänligt hotell direkt vid havet , ett par kilometer utanför centrum. Hotellet är vackert inbäddat i tropisk grönska och består av nio rumsbyggnader och flera villor som är byggda runt en konstgjord damm. Vid de två härliga poolområdena trivs hela familjen och i den ena poolen finns en liten vattenrutschbana för de allra minsta barnen.",
      country: "Spanien",
      county_flag:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/14b2d4d75b676cb53cf4950895de6726_swe-SE_90765.gif?v=1664460107687",
      country_flag_alttex: "Spaniens flagga",
      hotel_city: "Cala Figuera",
      adress: "Carrer Tomarinar 12",
      hotel_phonenumber: "+34 9087654321",
      hotel_img:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/kids-playing-on-the-edge-of-the-pool-2022-05-03-05-17-48-utc.jpeg?v=1664265142892",
      hotel_img_alttext: "Bild på barn vid en pool",
      hotel_price: "1299",
      cancellation_price: "99",
      hotel_rating: "5",
      number_of_rooms: "1 rum för 2 personer",
      pool: true,
      beach: true,
      cleaning: true,
      wifi: true,
      restaurant: true,
      family_hotel: false,
      info_check_in: "13.00",
      info_check_out: "12:00",
      info_cancellation: "Gratis avbokning 24 timmar innan",
      info_smooking: "Ej tillåtet",
      info_transfer: "Ingår",
      info_airport: "Macha spain - MCA",
      info_cleaning: "Ingår",
      info_breakfast: "Frukosten ingår och är öppen mellan 07:00 och 09:30",
    },
    {
      title: "REACT",
      description: "This is REACT",
      nextCardinfo: "only on next card 4",
      hotel_id: "4",
      hotel_name: "Blue Hotels - Charmigt badparadis",
      hotel_description:
        "Njut av hav, himmel och harmoni. Här ges möjlighet till rofyllt familjeliv med tid att umgås. Här bor du i vackra omgivningar på en sluttning ner mot havet, en bit utanför Makrigialos, på den sydöstra delen av ön.",
      country: "Grekland",
      county_flag:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/gr.png?v=1665736743694",
      country_flag_alttex: "Greklands flagga",
      hotel_city: "Oía",
      adress: "Nik. Nomikou 22",
      hotel_phonenumber: "+30 0123 456 789",
      hotel_img:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/famous-greek-tourist-destination-oia-greece-2021-08-28-12-04-19-utc.jpg?v=1665743546570",
      hotel_img_alttext:
        "Bild på Grekisk stad med vita byggnader, hav och strand",
      hotel_price: "1195",
      cancellation_price: "99",
      hotel_rating: "3",
      number_of_rooms: "1 rum för 2 personer",
      pool: true,
      beach: true,
      cleaning: true,
      wifi: true,
      restaurant: true,
      family_hotel: false,
      info_check_in: "14.00",
      info_check_out: "12:00",
      info_cancellation: "Gratis avbokning 24 timmar innan",
      info_smooking: "Ej tillåtet",
      info_transfer: "Ingår i priset",
      info_airport: "Trankolo - TRK",
      info_cleaning: "Ingår",
      info_breakfast: "Frukosten ingår och är öppen mellan 07:00 och 09:30",
    },
    {
      title: "C#",
      description: "This is C#",
      nextCardinfo: "only on next card 5",
      hotel_id: "5",
      hotel_name: "Högvallen fjällhotell",
      hotel_description:
        "Hotellet med toppläge vid barnområdet i Hemsedal Skisenter. Här är det enkelt och avslappnande att semestra för hela familjen. Lägenheterna har all utrustning som behövs för att semestern ska bli så bekväm som möjligt, uppbäddade sängar och avresestädning ingår i priset.",
      country: "Sverige",
      county_flag:
        "https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/11a9a0b9370c8aafe215161a1c4d5f0b_swe-SE_90589.gif?v=1665736515916",
      country_flag_alttex: "Sveriges flagga",
      hotel_city: "Sälen",
      adress: "Storgatan 50",
      hotel_phonenumber: "+46 0123 456 789",
      hotel_img:
        "https://cdn.glitch.me/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/traditional-ski-resort-chalets-in-the-snow-2021-08-26-15-45-49-utc.jpeg?v=1665743318195",
      hotel_img_alttext: "Bild på en stuga i Sälenfjällen",
      hotel_price: "1995",
      cancellation_price: "99",
      hotel_rating: "5",
      number_of_rooms: "1 rum för 2 personer",
      pool: true,
      beach: true,
      cleaning: true,
      wifi: true,
      restaurant: true,
      family_hotel: false,
      info_check_in: "14.00",
      info_check_out: "12:00",
      info_cancellation: "Gratis avbokning 24 timmar innan",
      info_smooking: "Ej tillåtet",
      info_transfer: "Ingår i priset",
      info_airport: "Östersund centrala flygplats - OCF",
      info_cleaning: "Ingår",
      info_breakfast: "Frukosten ingår och är öppen mellan 07:00 och 09:30",
    },
  ];

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Hero data={data} />}></Route>
        <Route path="/cards/:title" element={<HotelOverview data={data} />}></Route>
        <Route
          path="/cards/nextcard/:title"
          element={<Booking data={data} />
         }
        ></Route>
        <Route
          path="/homepage"
          element={<Homepage categoriData={categoriData} />}
        ></Route>
        <Route path="/category" element={<CategoriCards data={data} />}></Route>
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
