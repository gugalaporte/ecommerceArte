import React from "react";
import "./Banner.css";
import Mosaico from "./Mosaico";

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <h1>
        Explore diferentes <span className="azul">tecnicas e materiais</span> para aprimorar suas habilidades manuais
      </h1>
      <Mosaico />
    </section>
  );
};

export default Banner; 
