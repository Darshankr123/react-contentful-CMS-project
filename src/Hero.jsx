import React from "react";
import img from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2>Contentfull CMS</h2>
          <p>
            3 wolf moon mukbang health goth hashtag neutral milk hotel. Cornhole
            mlkshk marfa, lyft chartreuse venmo woke hella bodega boys coloring
            book retro kogi bushwick. Master cleanse forage bitters helvetica.
            Distillery 8-bit vape, twee keytar shoreditch art party.
          </p>
        </div>
        <div className="img-container">
          <img className="img" src={img} alt="women and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
