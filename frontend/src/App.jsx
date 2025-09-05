import Navbar from "./components/Navbar";
import Carros from "./components/Carros";
import Lojas from "./components/Lojas";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <main>
      <Contato></Contato>
      <Sobre></Sobre>
      <Carros></Carros>
      <Lojas></Lojas>
    </main>
    </>
  );
}

export default App;
