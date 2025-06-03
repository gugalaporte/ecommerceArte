import React from 'react';
import './ComoFunciona.css';
import icone1 from '../assets/icone1.png';
import icone2 from '../assets/icone2.png';
import icone3 from '../assets/icone3.png';
import icone4 from '../assets/icone4.png';
import icone5 from '../assets/icone5.png';

const ComoFunciona: React.FC = () => {
  const etapas = [
    {
      icone: icone1,
      texto: 'Escolha sua habilidade'
    },
    {
      icone: icone2,
      texto: 'Selecione o kit que você deseja'
    },
    {
      icone: icone3,
      texto: 'Finalize o processo de pagamento'
    },
    {
      icone: icone4,
      texto: 'Receba seu kit em sua residência'
    },
    {
      icone: icone5,
      texto: 'Assista um de nossos tutoriais e divirta-se!'
    }
  ];

  return (
    <section className="como-funciona">
      <h2>Como funciona?</h2>
      <div className="etapas">
        {etapas.map((etapa, index) => (
          <div key={index} className="etapa">
            <img src={etapa.icone} alt={`Etapa ${index + 1}`} className="etapa-icone" />
            <p>{etapa.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoFunciona; 