import React from "react";
import "./AssinaturasDropdown.css";

const AssinaturasDropdown: React.FC = () => (
  <div className="assinaturas-dropdown">
    <div>
      <div className="assinaturas-col">
        <h4 className="assinaturas-titulo azul">Kits</h4>
        <ul>
          <li>Iniciante Artê</li>
          <li>Intermediário Artê</li>
          <li>Mestre Artê</li>
          <li className="ver-tudo">Ver tudo &gt;</li>
        </ul>
      </div>
    </div>
  </div>
);

export default AssinaturasDropdown; 