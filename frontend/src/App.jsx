import Navbar from "./components/Navbar";
import Carros from "./components/Carros";
import Lojas from "./components/Lojas";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";

function App() {
  return (
    <>
      {/* navbar sempre no topo */}
      <Navbar />

      {/* conteúdo da página */}
      <main>
        <section id="contato"><Contato /></section>
        <section id="sobre"><Sobre /></section>
        <section id="carros"><Carros /></section>
        <section id="lojas"><Lojas /></section>
      </main>
    </>
  );
}

export default App;
