import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer-novo">
      <div className="footer-novo-pontilhado" />
      <div className="footer-novo-sections">
        <div className="footer-novo-section">
          <h4>KITS</h4>
          <ul>
            <li>Iniciante Artê</li>
            <li>Intermediário Artê</li>
            <li>Mestre Artê</li>
            <li className="footer-ver-tudo">Ver tudo &gt;</li>
          </ul>
        </div>
        <div className="footer-novo-section">
          <h4>PINTURA E ILUSTRAÇÃO</h4>
          <ul>
            <li>Aquarela</li>
            <li>Pintura em tela</li>
            <li>Lettering e caligrafia</li>
            <li>Desenho artístico</li>
            <li className="footer-ver-tudo">Ver tudo &gt;</li>
          </ul>
        </div>
        <div className="footer-novo-section">
          <h4>LINHAS E FIOS</h4>
          <ul>
            <li>Bordado</li>
            <li>Crochê</li>
            <li>Tricô</li>
            <li>Macramê</li>
            <li className="footer-ver-tudo">Ver tudo &gt;</li>
          </ul>
        </div>
        <div className="footer-novo-section">
          <h4>INFORMAÇÕES</h4>
          <ul>
            <li>Trocas e devoluções</li>
            <li>Frete e entregas</li>
            <li>Pagamento</li>
            <li>Termos e condições</li>
            <li className="footer-ver-tudo">Ver tudo &gt;</li>
          </ul>
        </div>
        <div className="footer-novo-section">
          <h4>OUTRAS TÉCNICAS</h4>
          <ul>
            <li>Velas artesanais</li>
            <li>Sabonetes naturais</li>
            <li>Scrapbook</li>
            <li>Encadernação artesanal</li>
            <li className="footer-ver-tudo">Ver tudo &gt;</li>
          </ul>
        </div>
        <div className="footer-novo-section">
          <h4>MODELAGEM E ESCULTURA</h4>
          <ul>
            <li>Argila e cerâmica fria</li>
            <li>Modelagem com biscuit</li>
            <li className="footer-ver-tudo">Ver tudo &gt;</li>
          </ul>
        </div>
      </div>
      <div className="footer-novo-base">
        <div className="footer-novo-contato">
          <h4>Entre em contato</h4>
          <p>+55 (81) 99999–6999</p>
          <p>arte.publico@arteorg.com</p>
        </div>
        <div className="footer-novo-logo-centro">
          <img src={logo} alt="Logo Artê" />
        </div>
        <div className="footer-novo-social">
          <h4>Conecte-se conosco</h4>
          <div className="footer-novo-social-icons">
            <a href="#" aria-label="Instagram" className="footer-novo-icon instagram" />
            <a href="#" aria-label="YouTube" className="footer-novo-icon youtube" />
            <a href="#" aria-label="TikTok" className="footer-novo-icon tiktok" />
            <a href="#" aria-label="Facebook" className="footer-novo-icon facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 