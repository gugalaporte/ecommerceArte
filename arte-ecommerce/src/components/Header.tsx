import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import ProdutosDropdown from "./ProdutosDropdown";
import AssinaturasDropdown from "./AssinaturasDropdown";

// SVG de carrinho simples e confiável
const CartIcon = () => (
  <svg className="cart-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
  </svg>
);

// SVG de lupa
const SearchIcon = () => (
  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// Componente Header
const Header: React.FC = () => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [showAssinaturas, setShowAssinaturas] = React.useState(false);

  return (
    <header className="header">
      <div className="header__left">
        {/* Logo */}
        <div className="header__logo">
          <img src={logo} alt="Logo Artê" />
        </div>
        {/* Barra de busca */}
        <div className="header__search">
          <span className="search-icon-container">
            <SearchIcon />
          </span>
          <input type="text" />
        </div>
        {/* Menu de navegação */}
        <nav className="header__nav">
          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            style={{ display: 'inline-block', position: 'relative' }}
          >
            <a href="#" className="menu-link">Produtos</a>
            {showDropdown && <ProdutosDropdown />}
          </div>
          <div
            onMouseEnter={() => setShowAssinaturas(true)}
            onMouseLeave={() => setShowAssinaturas(false)}
            style={{ display: 'inline-block', position: 'relative' }}
          >
            <a href="#" className="menu-link">Assinaturas</a>
            {showAssinaturas && <AssinaturasDropdown />}
          </div>
          <a href="#" className="menu-link">Comunidade</a>
          <a href="#" className="menu-link">Tutoriais</a>
          <a href="#" className="menu-link">Fazer login</a>
          <CartIcon />
        </nav>
      </div>
      {/* Carrinho */}
      <div className="header__cart" title="Carrinho">
        <CartIcon />
      </div>
    </header>
  );
};

export default Header; 