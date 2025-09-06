import React from "react";

function Lojas() {
  return (
    <>
      {/* Hero / SlideShow */}
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/carro1.jpg" className="d-block w-100" alt="Carro elétrico 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>SmoothPath X1</h5>
              <p>Velocidade e sustentabilidade em um só carro.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/carro2.jpg" className="d-block w-100" alt="Carro elétrico 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>SmoothPath SUV-E</h5>
              <p>Espaço, conforto e energia limpa para toda família.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/carro3.jpg" className="d-block w-100" alt="Carro elétrico 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>SmoothPath CityGo</h5>
              <p>Compacto, ágil e perfeito para o dia a dia.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Lojas físicas */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Nossas Lojas</h2>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">São Paulo</h5>
                <p className="card-text">Av. Principal, 123 – Centro</p>
                <button className="btn btn-outline-primary" type="button">Ver no mapa</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Rio de Janeiro</h5>
                <p className="card-text">Rua das Laranjeiras, 45 – Zona Sul</p>
                <button className="btn btn-outline-primary" type="button">Ver no mapa</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Curitiba</h5>
                <p className="card-text">Alameda Verde, 500 – Batel</p>
                <button className="btn btn-outline-primary" type="button">Ver no mapa</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-4 mt-5">
        <p className="mb-0">© 2025 SmoothPath Electric Cars - Energia limpa para um futuro melhor</p>
      </footer>
    </>
  );
}

export default Lojas;
