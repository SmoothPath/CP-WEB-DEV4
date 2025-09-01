import { useEffect, useState } from "react";

function Carros() {

    //Vai pegar a imagem/legenda atual e mudá-l
    const [dados, setDados] = useState({ imagens: [], legendas: [] });

    //Valor inicial(index da img) e função que vai alterá-la, começa com 0
    const [imagemAtual, setImagemAtual] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3001/carros")
            .then((res) => res.json())
            .then((data) => setDados(data));
    }, []);

    useEffect(() => {
        if (dados.imagens.length > 0) {

            const intervalo = setInterval(() => {
                setImagemAtual((anterior) => (anterior + 1) % dados.imagens.length);
            }, 3000);

            return () => clearInterval(intervalo);
        }
    }, [dados]);





    return (
        <>
            <div>
                <header>
                    <h1><img src="./src/assets/LOGOSMOOTH.png" alt="Logo da equipe SmoothPath"></img></h1>
                    <nav>
                        <ul>
                            <li><a href="">Carros</a></li>
                            <li><a href="">Lojas</a></li>
                            <li><a href="">Sobre</a></li>
                            <li><a href="">Contato</a></li>
                        </ul>
                    </nav>
                </header>

                {/* Seção onde serão mostradas as imagens dos carros */}
                <section className="apresentacacao">
                    {dados.imagens.length > 0 && (
                    <>  <img src={dados.imagens[imagemAtual]} alt="Imagem - Carro Elétrico" />
                    <p id="legenda">{dados.legendas[imagemAtual]}</p>
                    </>    
                )}
                </section>

                <footer>
                    &copy copyright 2025 - Todos direitos reservados
                </footer>
            </div>
        </>
    )
}
export default Carros