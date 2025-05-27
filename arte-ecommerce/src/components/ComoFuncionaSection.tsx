import React from "react";
import "./ComoFuncionaSection.css";

const steps = [
  {
    color: "#d9437a",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="26" r="10" stroke="#fff" strokeWidth="3" />
        <path d="M16 52c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="#fff" strokeWidth="3" fill="none" />
      </svg>
    ),
    text: "Escolha sua habilidade"
  },
  {
    color: "#a2ad3b",
    icon: (
      <svg width="90" height="90" viewBox="0 0 256 256" fill="none" aria-label="Paleta de pintura com pincel" xmlns="http://www.w3.org/2000/svg">
  <path d="M128 224c-53 0-96-36.5-96-88s43-88 96-88 96 36.5 96 88c0 32-24 40-32 40-8 0-16 8-16 16 0 8 8 16 8 24 0 8-8 16-24 16z" stroke="#fff" strokeWidth="12" fill="none"/>
  <circle cx="92" cy="116" r="10" fill="#fff"/>
  <circle cx="164" cy="116" r="10" fill="#fff"/>
  <circle cx="128" cy="156" r="10" fill="#fff"/>
  <path d="M180 80l24-24" stroke="#fff" strokeWidth="12" strokeLinecap="round"/>
  <path d="M204 56c0-8-8-16-16-16" stroke="#fff" strokeWidth="12" strokeLinecap="round"/>
</svg>
    ),
    text: "Selecione o kit que você deseja"
  },
  {
    color: "#29a3d6",
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" aria-label="Cifrão" xmlns="http://www.w3.org/2000/svg">
        <circle cx="45" cy="45" r="36" stroke="#fff" strokeWidth="4" fill="none"/>
        <text x="45" y="62" textAnchor="middle" fontSize="44" fill="#fff" fontFamily="Arial, sans-serif" fontWeight="bold">$</text>
      </svg>
    ),
    text: "Finalize o processo de pagamento"
  },
  {
    color: "#a16edb",
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" aria-label="Presente" xmlns="http://www.w3.org/2000/svg">
        {/* Tampa, mais larga que a caixa */}
        <rect x="18" y="28" width="54" height="12" stroke="#fff" strokeWidth="4" fill="none"/>
        {/* Caixa */}
        <rect x="22" y="40" width="46" height="28" stroke="#fff" strokeWidth="4" fill="none"/>
        {/* Fita central (da tampa até a base) */}
        <rect x="41" y="28" width="8" height="40" stroke="#fff" strokeWidth="4" fill="none"/>
        {/* Laço esquerdo */}
        <path d="M45 28 Q30 8 28 28" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round"/>
        {/* Laço direito */}
        <path d="M45 28 Q60 8 62 28" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    text: "Receba seu kit em sua residência"
  },
  {
    color: "#d1c93a",
    icon: (
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none" aria-label="Play" xmlns="http://www.w3.org/2000/svg">
        {/* Quadrado ainda maior */}
        <rect x="15" y="15" width="60" height="60" rx="5" stroke="#fff" strokeWidth="4" fill="none"/>
        {/* Play grande e centralizado visualmente */}
        <polygon points="33,28 63,45 33,62" stroke="#fff" strokeWidth="4" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Assista um de nossos tutoriais e divirta-se!"
  }
];

const ComoFuncionaSection: React.FC = () => (
  <section className="como-funciona-section">
    <h2 className="como-funciona-titulo">Como funciona?</h2>
    <div className="como-funciona-steps">
      {steps.map((step, idx) => (
        <div className="como-funciona-step" key={idx}>
          <div className="como-funciona-icone" style={{ background: step.color }}>
            {step.icon}
          </div>
          <div className="como-funciona-texto">{step.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ComoFuncionaSection; 