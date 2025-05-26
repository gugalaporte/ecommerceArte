import React from "react";
import "./EscolhaHabilidadeSection.css";
import ComoFuncionaSection from "./ComoFuncionaSection";
import assinatura1 from "../assets/assinatura1.png";
import assinatura2 from "../assets/assinatura2.png";
import assinatura3 from "../assets/assinatura3.png";

const cards = [
  {
    img: assinatura1,
    title: "Descobridor Artê",
    desc: "Kits para iniciantes",
    btn: "Encontre sua arte",
    btnClass: "azul"
  },
  {
    img: assinatura2,
    title: "Explorador Artê",
    desc: "Kits para pessoas de nível intermediário",
    btn: "Encontre sua arte",
    btnClass: "rosa"
  },
  {
    img: assinatura3,
    title: "Mestre Artê",
    desc: "Kits para nível avançado",
    btn: "Encontre sua arte",
    btnClass: "verde"
  }
];

const EscolhaHabilidadeSection: React.FC = () => (
  <section className="habilidade-section">
    <ComoFuncionaSection />
    <div className="footer-novo-pontilhado" />
    <h2 className="habilidade-titulo">Escolha sua Habilidade!</h2>
    <p className="habilidade-subtitulo">Temos diversos kits para cada um de acordo com suas habilidades! Escolha o Kit que você se enquadra e venha conhecer mais sobre as nossas assinaturas!</p>
    <div className="habilidade-cards">
      {cards.map((card, idx) => (
        <div className={`habilidade-card card-${card.btnClass}`} key={idx}>
          <div className="habilidade-card-info">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button className={`habilidade-btn ${card.btnClass}`}>{card.btn}</button>
          </div>
          <img src={card.img} alt={card.title} className="habilidade-card-img" />
        </div>
      ))}
    </div>
  </section>
);

export default EscolhaHabilidadeSection; 