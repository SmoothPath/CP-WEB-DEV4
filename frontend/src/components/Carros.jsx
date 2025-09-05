<<<<<<< HEAD
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

              
            </div>
        </>
    )
}
export default Carros
=======
import React, { useEffect, useState } from "react";

function Carros() {
  const [imagem, setImagem] = useState({ url: "/images/carro1.jpg", legenda: "" });

  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        const r = await fetch("http://localhost:3001/carros");
        const data = await r.json();
        if (data?.url) setImagem(data);
      } catch {}
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="carros" className="py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <img
              src={imagem.url}
              alt={imagem.legenda || "Carro elétrico"}
              className="img-fluid w-100"
              style={{ objectFit: "cover", maxHeight: 480 }}
            />
          </div>
        </div>

        <h2 className="text-center mb-4">Nossos Modelos</h2>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/images/carro1.jpg" className="card-img-top img-fluid" alt="Carro elétrico 1" />
              <div className="card-body">
                <h5 className="card-title">SmoothPath X1</h5>
                <p className="card-text">Preço: R$ 220.000</p>
                <button className="btn btn-primary" type="button">Saiba Mais</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/images/carro2.jpg" className="card-img-top img-fluid" alt="Carro elétrico 2" />
              <div className="card-body">
                <h5 className="card-title">SmoothPath SUV-E</h5>
                <p className="card-text">Preço: R$ 280.000</p>
                <button className="btn btn-primary" type="button">Saiba Mais</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/public/imagens/kovaEv.avif" className="card-img-top img-fluid" alt="Carro elétrico 3" />
              <div className="card-body">
                <h5 className="card-title">SmoothPath CityGo</h5>
                <p className="card-text">Preço: R$ 150.000</p>
                <button className="btn btn-primary" type="button">Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carros;
>>>>>>> 0c0cb89 (ajuste de header e responsividade)
