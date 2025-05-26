import React from "react";
import "./ProdutosDropdown.css";

const ProdutosDropdown: React.FC = () => (
  <div className="produtos-dropdown">
    <div>
      <div className="produtos-col">
        <h4 className="produtos-titulo azul">Pintura e Ilustração</h4>
        <ul>
          <li>Aquarela</li>
          <li>Pintura em tela</li>
          <li>Lettering e caligrafia</li>
          <li>Desenho artístico</li>
          <li className="ver-tudo">Ver tudo &gt;</li>
        </ul>
      </div>
      <div className="produtos-col">
        <h4 className="produtos-titulo rosa">Linhas e Fios</h4>
        <ul>
          <li>Bordado</li>
          <li>Crochê</li>
          <li>Tricô</li>
          <li>Macramê</li>
          <li className="ver-tudo">Ver tudo &gt;</li>
        </ul>
      </div>
      <div className="produtos-col">
        <h4 className="produtos-titulo verde">Modelagem e Escultura</h4>
        <ul>
          <li>Argila e cerâmica fria</li>
          <li>Modelagem com biscuit</li>
          <li className="ver-tudo">Ver tudo &gt;</li>
        </ul>
      </div>
      <div className="produtos-col">
        <h4 className="produtos-titulo amarelo">Outras técnicas</h4>
        <ul>
          <li>Velas artesanais</li>
          <li>Sabonetes naturais</li>
          <li>Scrapbook</li>
          <li>Encadernação artesanal</li>
          <li className="ver-tudo">Ver tudo &gt;</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ProdutosDropdown; 