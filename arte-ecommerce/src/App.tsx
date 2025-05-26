import Header from "./components/Header";
import Carrossel from "./components/Carrossel";
import Banner from "./components/Banner";
import Comunidade from "./components/Comunidade";
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
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
