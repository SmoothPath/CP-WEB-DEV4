import React, { useEffect, useState } from "react";

function Carros() {
  const [imagem, setImagem] = useState({ url: "/images/carro1.jpg", legenda: "" });

  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        const response = await fetch("http://localhost:3001/carros");
        const data = await response.json();
        if (data?.url) setImagem(data);
      } catch (error) {
        console.error("Erro ao buscar imagem:", error);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="carros" className="py-5">
      <div className="container">
        {/* Imagem dinâmica com legenda */}
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <img
              src={imagem.url}
              alt={imagem.legenda || "Carro elétrico"}
              className="img-fluid w-100"
              style={{ objectFit: "cover", maxHeight: 480 }}
            />
            {imagem.legenda && (
              <p id="legenda" className="text-center mt-2">
                {imagem.legenda}
              </p>
            )}
          </div>
        </div>

        {/* Cards dos modelos */}
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
              <img src="/images/carro3.jpg" className="card-img-top img-fluid" alt="Carro elétrico 3" />
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
