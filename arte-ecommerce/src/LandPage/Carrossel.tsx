import React, { useState, useEffect } from "react";
import "./Carrossel.css";
import img1 from "../assets/carrossel1.png";
import img2 from "../assets/carrossel2.png";
import img3 from "../assets/carrossel3.png";
import img4 from "../assets/carrossel4.png";
import img5 from "../assets/carrossel5.png";

const imagens = [img1, img2, img3, img4, img5];

const Carrossel: React.FC = () => {
  const [atual, setAtual] = useState(0);
  const [fade, setFade] = useState(true);

  const irPara = (idx: number) => {
    setFade(false);
    setTimeout(() => {
      setAtual(idx);
      setFade(true);
    }, 400);
  };

  const proximo = () => {
    setFade(false);
    setTimeout(() => {
      setAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      proximo();
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [atual]);

  return (
    <div className="carrossel">
      <img
        src={imagens[atual]}
        alt={`Slide ${atual + 1}`}
        className={`carrossel-img${fade ? " fade-in" : " fade-out"}`}
      />
      <div className="carrossel-bolinhas">
        {imagens.map((_, idx) => (
          <span
            key={idx}
            className={"bolinha" + (idx === atual ? " ativa" : "")}
            onClick={() => irPara(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrossel; 