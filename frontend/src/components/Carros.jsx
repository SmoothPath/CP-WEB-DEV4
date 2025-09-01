import { useEffect, useState } from "react";

function Carros() {
    //Declarando o array de imagens
    let imagens = [
        'src/assets/1-Tesla-Model-32.jpg',
        'src/assets/seres3.avif',
        'src/assets/konaEv.avif',
        'src/assets/dolphin.jpg',
        'src/assets/jaceJS1.avif'
    ];

    //Declarando array de legendas de cada imagem
    let legendas = ['Tesla Model 3 — Foto: divulgação/Tesla ',
        'Seres 3 — Foto: divulgação/Seres',
        'Hyundai Kona EV — Foto: divulgação/Hyundai',
        'BYD Dolphin Plus — Foto: divulgação/BYD ',
        'JAC e-JS1 — Foto: divulgação/JAC'
    ];

    //Valor inicial(index da img) e função que vai alterá-la, começa com 0
    const [imagemAtual, setImagemAtual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setImagemAtual((anterior) => (anterior + 1) % imagens.length);
        }, 3000);

        return () => clearInterval(intervalo);
    }, []);


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
                    <img src={imagens[imagemAtual]} alt="Imagem - Carro Elétrico" />
                    <p id="legenda"></p>
                </section>

                <footer>
                    &copy copyright 2025 - Todos direitos reservados
                </footer>
            </div>
        </>
    )
}
export default Carros