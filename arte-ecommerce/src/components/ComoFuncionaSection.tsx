import React from "react";
import "./ComoFuncionaSection.css";

const steps = [
  {
    color: "#d9437a",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><path d="M32 38c-6 0-11-4.5-11-10s5-10 11-10 11 4.5 11 10-5 10-11 10zm0 0v4m-7 0h14" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Escolha sua habilidade"
  },
  {
    color: "#a2ad3b",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><path d="M44 40c-4 0-8-4-8-8s4-8 8-8 8 4 8 8-4 8-8 8z" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 44c0-8 8-16 16-16" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    text: "Selecione o kit que você deseja"
  },
  {
    color: "#29a3d6",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><circle cx="32" cy="32" r="14" stroke="#fff" strokeWidth="3"/><path d="M32 26v12m0 0c-2 0-4-1.5-4-4" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    text: "Finalize o processo de pagamento"
  },
  {
    color: "#a16edb",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><rect x="18" y="26" width="28" height="18" rx="4" stroke="#fff" strokeWidth="3"/><path d="M32 26v-4m0 0h8m-8 0h-8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>
    ),
    text: "Receba seu kit em sua residência"
  },
  {
    color: "#d1c93a",
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="32" fill="none"/><rect x="22" y="22" width="20" height="20" rx="4" stroke="#fff" strokeWidth="3"/><path d="M36 32l-6 4v-8l6 4z" stroke="#fff" strokeWidth="2.5" strokeLinejoin="round"/></svg>
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