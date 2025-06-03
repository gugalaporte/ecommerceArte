import React from "react";
import "./FaixaTudoParaCriar.css";
import produto1 from "../assets/produto1.png";
import produto2 from "../assets/produto2.png";
import produto3 from "../assets/produto3.png";
import produto4 from "../assets/produto4.png";
import produto5 from "../assets/produto5.png";

const FaixaTudoParaCriar: React.FC = () => {
  const getCategoriaClassName = (categoria: string) => {
    switch (categoria) {
      case "Linhas e fios":
        return "categoria-linhas-fios";
      case "Modelagem e Escultura":
        return "categoria-modelagem-escultura";
      case "Pintura e Ilustração":
        return "categoria-pintura-ilustracao";
      default:
        return "";
    }
  };

  const produtos = [
    {
      imagem: produto1,
      nome: "Super Merino (100g)",
      preco: "R$ 12,00",
      categoria: "Linhas e fios",
      descricao: "Ideal para crochê, toque macio e confortável."
    },
    {
      imagem: produto2,
      nome: "Agulha de Crochê em Bambu - Nº 4",
      preco: "R$ 12,00",
      categoria: "Linhas e fios",
      descricao: "Leve, resistente e sustentável."
    },
    {
      imagem: produto3,
      nome: "Argila de Secagem ao Ar - 500g",
      preco: "R$ 18,90",
      categoria: "Modelagem e Escultura",
      descricao: "Ideal para modelar sem necessidade de forno, perfeita para esculturas e peças decorativas."
    },
    {
      imagem: produto4,
      nome: "Pincel para Detalhes Finos",
      preco: "R$ 9,90",
      categoria: "Pintura e Ilustração",
      descricao: "Ideal para aquarela, tinta acrílica, guache, ilustração com tinta."
    },
    {
      imagem: produto5,
      nome: "Meada de Barbante Cru (500g)",
      preco: "R$ 29,90",
      categoria: "Linhas e fios",
      descricao: "Ideal para macramê e peças decorativas."
    }
  ];

  return (
    <>
      <section className="faixa-titulo">
        <div className="faixa-onda faixa-onda-top">
          <svg viewBox="0 0 1440 24" width="100%" height="24" preserveAspectRatio="none">
            <path d="M0,12 Q10,0 20,12 T40,12 T60,12 T80,12 T100,12 T120,12 T140,12 T160,12 T180,12 T200,12 T220,12 T240,12 T260,12 T280,12 T300,12 T320,12 T340,12 T360,12 T380,12 T400,12 T420,12 T440,12 T460,12 T480,12 T500,12 T520,12 T540,12 T560,12 T580,12 T600,12 T620,12 T640,12 T660,12 T680,12 T700,12 T720,12 T740,12 T760,12 T780,12 T800,12 T820,12 T840,12 T860,12 T880,12 T900,12 T920,12 T940,12 T960,12 T980,12 T1000,12 T1020,12 T1040,12 T1060,12 T1080,12 T1100,12 T1120,12 T1140,12 T1160,12 T1180,12 T1200,12 T1220,12 T1240,12 T1260,12 T1280,12 T1300,12 T1320,12 T1340,12 T1360,12 T1380,12 T1400,12 T1420,12 T1440,12 V24H0Z" fill="#f3f0a1" />
          </svg>
        </div>
        <div className="faixa-titulo-content">
          <h2>Tudo o que você precisa para Criar</h2>
        </div>
        <div className="faixa-onda faixa-onda-bottom">
          <svg viewBox="0 0 1440 24" width="100%" height="24" preserveAspectRatio="none">
            <path d="M0,12 Q10,24 20,12 T40,12 T60,12 T80,12 T100,12 T120,12 T140,12 T160,12 T180,12 T200,12 T220,12 T240,12 T260,12 T280,12 T300,12 T320,12 T340,12 T360,12 T380,12 T400,12 T420,12 T440,12 T460,12 T480,12 T500,12 T520,12 T540,12 T560,12 T580,12 T600,12 T620,12 T640,12 T660,12 T680,12 T700,12 T720,12 T740,12 T760,12 T780,12 T800,12 T820,12 T840,12 T860,12 T880,12 T900,12 T920,12 T940,12 T960,12 T980,12 T1000,12 T1020,12 T1040,12 T1060,12 T1080,12 T1100,12 T1120,12 T1140,12 T1160,12 T1180,12 T1200,12 T1220,12 T1240,12 T1260,12 T1280,12 T1300,12 T1320,12 T1340,12 T1360,12 T1380,12 T1400,12 T1420,12 T1440,12 V0H0Z" fill="#f3f0a1" />
          </svg>
        </div>
      </section>

      <section className="faixa-produtos">
        <div className="produtos-container">
          {produtos.map((produto, index) => (
            <div key={index} className="produto-card">
              <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
              <h3>{produto.nome}</h3>
              <span className="produto-preco">{produto.preco}</span>
              <span className={`produto-categoria ${getCategoriaClassName(produto.categoria)}`}>
                {produto.categoria}
              </span>
              <p className="produto-descricao">{produto.descricao}</p>
              <div className="produto-botoes">
                <button className="btn-comprar">Comprar</button>
                <button className="btn-adicionar">Adicionar ao carrinho</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaixaTudoParaCriar; 