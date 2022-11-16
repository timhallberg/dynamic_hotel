import React from 'react';
import "./Footer.css"
import { NavLink, Link } from "react-router-dom";


const Footer = () => {
    return ( <>
       {/* Nedan används NavLink för att navigera användaren till lite olika delar 
  på webbplatsen. HashLink as Link används på Logotypen/Varumärket för att 
  skicka användaren högst upp på sidan */}
      <footer>
        <ul className="column1">
          <li style={{ textDecoration: "none" }}>
            <h2>
              <Link className="h2Hotello" to="/">
                Hotello
              </Link>
            </h2>
          </li>
          <p id="aboutUs">
            Boka din semester på ett av våra underbara hotel. Vi har olika typer
            av rum för par, barnfamiljen och festmänniskorna
          </p>
        </ul>


        <ul className="column2">
          <li style={{ textDecoration: "none" }}>
            <h3>Länkar</h3>
          </li>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/all_hotels"
          >
            <li>Alla hotell</li>
          </NavLink>
        </ul>
        <ul className="column3">
          <li style={{ textDecoration: "none" }}>
            <h3>Resemål</h3>
          </li>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/adultsonly"
          >
            <li>Endast vuxna</li>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/familyhotel"
          >
            <li>Familjehotell</li>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/sunhotel"
          >
            <li>Solsemester</li>
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/winterhotel"
          >
            <li>Vintersport</li>
          </NavLink>
        </ul>
        <ul style={{ textDecoration: "none" }} className="column4">
          <li style={{ textDecoration: "none" }}>
            <h3>Kontakt</h3>
          </li>
          <li style={{ textDecoration: "none" }}>
            <p className="address">
              Sverige <br></br>
              Högskolan i Borås <br></br>
              Allegatan 1, 50332 Borås
            </p>
          </li>
        </ul>
        <div className="copyright">
          <p className="copyrightText">© 2022 HOTELLO All rights reserver</p>
        </div>
      </footer>
    
    </> );
}
 
export default Footer;