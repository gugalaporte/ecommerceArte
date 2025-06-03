import React from "react";
import "./Comunidade.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

const Comunidade: React.FC = () => {
  return (
    <section className="comunidade">
      <h2 className="comunidade-titulo">
        Na comunidade Artê, você encontra motivação<br />
        para <span className="rosa">criar mais!</span>
      </h2>

      <div className="comunidade-mosaico-container">
        <div className="comunidade-mosaico">
          <img src={banner1} alt="Mosaico parte 1" />
          <img src={banner2} alt="Mosaico parte 2" />
        </div>
      </div>

      <div className="comunidade-inferior">
        <h3>Resultados reais e comentários verdadeiros...</h3>
        <button className="comunidade-botao">Conheça a nossa comunidade</button>
      </div>

      <div className="comunidade-onda">
        <svg viewBox="0 0 1440 80" width="100%" height="80" preserveAspectRatio="none">
          <path d="M0,40 Q50,80 100,40 T200,40 T300,40 T400,40 T500,40 T600,40 T700,40 T800,40 T900,40 T1000,40 T1100,40 T1200,40 T1300,40 T1400,40 T1440,40 V80H0Z" fill="#fff" />
        </svg>
      </div>
      <div className="comunidade-espaco-branco"></div>
    </section>
  );
};

export default Comunidade; 