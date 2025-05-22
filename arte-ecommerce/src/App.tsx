import Header from "./components/Header";
import Carrossel from "./components/Carrossel";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Carrossel />
        <Banner />
        <div style={{height: '60vh'}}></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
