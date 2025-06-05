import React, { useState } from "react";
import "./FaqSection.css";

const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg 
    width="14" 
    height="10" 
    viewBox="0 0 14 10" 
    fill="none" 
    className={`faq-arrow ${isOpen ? 'open' : ''}`}
  >
    <path 
      d="M1 2L7 8L13 2" 
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const faqs = [
  {
    question: "A Artê é só para quem já tem experiência com atividades manuais?",
    answer: "Não! A Artê foi pensada para todos os níveis de habilidade — do iniciante curioso ao criativo mais experiente. Nossos kits vêm com instruções passo a passo, além de dicas e inspirações para que qualquer pessoa possa se sentir confortável explorando o fazer manual no seu próprio ritmo."
  },
  {
    question: "Como escolho um kit ideal para o meu nível de habilidade?",
    answer: "Na nossa plataforma, os kits são organizados por nível: iniciante, intermediário e avançado. Além disso, você pode verificar nosso guia \"Como descobrir meu nível\" para decidir qual kit combina mais com você — levando em conta seu tempo disponível, interesse e experiência prévia."
  },
  {
    question: "O que vem nos kits da Artê?",
    answer: "Cada kit da Artê é completo: você recebe todos os materiais necessários para realizar a atividade criativa proposta, além de um guia com instruções ilustradas, acesso a conteúdos digitais complementares e um mimo surpresa para tornar sua experiência ainda mais especial."
  },
  {
    question: "A Artê oferece suporte caso eu tenha dúvidas durante a atividade?",
    answer: "Sim! Estamos aqui para te acompanhar. Você pode acessar nosso canal de suporte direto pela plataforma, mandar mensagens pelo WhatsApp ou até conversar com outras pessoas da comunidade que já fizeram o mesmo kit. A ideia é que você nunca se sinta sozinho no processo criativo."
  },
  {
    question: "Posso trocar ou devolver um kit?",
    answer: "Sim! Consulte nossa política de trocas e devoluções para saber como proceder. Queremos que você fique satisfeito com sua experiência Artê."
  },
  {
    question: "Como funciona a assinatura de kits?",
    answer: "Você recebe um kit novo todo mês, com benefícios exclusivos para assinantes, acesso antecipado a lançamentos e descontos especiais. É só escolher o plano que mais combina com você!"
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="faq-col faq-title-col">
        <h2>Perguntas<br />Frequentes</h2>
      </div>
      <div className="faq-col faq-list-col">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button className="faq-question" onClick={() => toggle(idx)}>
              <ArrowIcon isOpen={openIndex === idx} />
              {faq.question}
            </button>
            {openIndex === idx && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection; 