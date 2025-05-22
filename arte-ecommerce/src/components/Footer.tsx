import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer-novo">
      <div className="footer-novo-container">
        <div className="footer-novo-logo">
          <img src={logo} alt="Logo Artê" />
        </div>
        <div className="footer-novo-cols">
          <div className="footer-novo-col">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Descubra</a></li>
              <li><a href="#">Pacotes</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Tutoriais</a></li>
            </ul>
          </div>
          <div className="footer-novo-col">
            <h4>Contato</h4>
            <ul>
              <li><a href="tel:+5581999996999">+55 (81) 99999-6999</a></li>
              <li><a href="mailto:arte.publico@arteorg.com">arte.publico@arteorg.com</a></li>
            </ul>
          </div>
          <div className="footer-novo-col">
            <h4>Redes sociais</h4>
            <div className="footer-novo-social">
              <a href="#" aria-label="Instagram" className="footer-novo-icon instagram" />
              <a href="#" aria-label="TikTok" className="footer-novo-icon tiktok" />
              <a href="#" aria-label="YouTube" className="footer-novo-icon youtube" />
              <a href="#" aria-label="Facebook" className="footer-novo-icon facebook" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-novo-copy">
        © {new Date().getFullYear()} Artê. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer; 