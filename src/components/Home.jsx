import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
          <Link className="container-home_1" to="/gallery">
          <img className="buttons" src="./../img/GALERIE.png"></img>
          </Link>
        <div className="container-home_2">
          <Link to="/submit">
          <img className="buttons" src="./../img/SUBMIT.png"></img>
          </Link>
          <div>
            <h3>Avunca, Bahar. Hammerer, Lucas.</h3>
            <p>Les images présentes sur ce site appartiennent à leurs propriétaires respectifs.</p>
          </div>
        </div>
    </div>
  );
};

export default Home;
