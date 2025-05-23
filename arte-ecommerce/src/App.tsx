import Header from "./components/Header";
import Carrossel from "./components/Carrossel";
import Banner from "./components/Banner";
import Comunidade from "./components/Comunidade";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Carrossel />
        <Banner />
        <Comunidade />
        <div style={{height: '60vh'}}></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
