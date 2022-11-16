import "./Header.css";

//Importerar react router NavLink samt HashLink as Link
import { NavLink, Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";


const Header = () => {
  return (
    <>
      <header>
        <div className="topbar_darkslate"></div>

        <h1>
          <NavLink style={{ textDecoration: "none", color: "#fb7d03" }} to="/">
            Hotello
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="#aboutUs"
 
              >
                Om oss
              </Link>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/all_hotels"
              >
                Våra hotell
              </NavLink>
            </li>
            <li>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="#contactInformation"
             
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
