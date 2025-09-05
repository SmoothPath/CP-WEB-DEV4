import { useEffect, useState } from "react";

function Carros() {

    //Vai pegar a imagem/legenda atual e mudá-l
    const [dados, setDados] = useState({ url: "", legenda: ""});

    useEffect(() => {
        const intervalo = setInterval(() => {
        fetch("http://localhost:3001/carros")
            .then((res) => res.json())
            .then((data) => setDados(data));
    }, 3000);

            return () => clearInterval(intervalo);
        }, []);

    return (
        <>
            <div>
                

                {/* Seção onde serão mostradas as imagens dos carros */}
                <section className="apresentacacao">
                    {dados.url && (
                    <>  <img src={dados.url} alt="Imagem - Carro Elétrico" />
                    <p id="legenda">{dados.legendas}</p>
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
