import Header from "./components/Header";
import Carrossel from "./components/Carrossel";
import Banner from "./components/Banner";
import Comunidade from "./components/Comunidade";
import FaixaFundoBranco from "./components/FaixaFundoBranco";
import FaixaTudoParaCriar from "./components/FaixaTudoParaCriar";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Carrossel />
        <Banner />
        <Comunidade />
        <div style={{ position: 'relative', width: '100vw' }}>
          <FaixaFundoBranco />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 2 }}>
            <FaixaTudoParaCriar />
          </div>
        </div>
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
