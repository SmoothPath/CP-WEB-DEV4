import React from "react";

function Lojas() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        SmoothPath Electric Cars
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Início</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Modelos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Sobre</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Contato</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

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

            {/* Catálogo de Carros */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">Nossos Modelos</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="/images/carro1.jpg" className="card-img-top" alt="Carro elétrico 1" />
                            <div className="card-body">
                                <h5 className="card-title">SmoothPath X1</h5>
                                <p className="card-text">Preço: R$ 220.000</p>
                                <a href="#" className="btn btn-primary">Saiba Mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="/images/carro2.jpg" className="card-img-top" alt="Carro elétrico 2" />
                            <div className="card-body">
                                <h5 className="card-title">SmoothPath SUV-E</h5>
                                <p className="card-text">Preço: R$ 280.000</p>
                                <a href="#" className="btn btn-primary">Saiba Mais</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img src="/images/carro3.jpg" className="card-img-top" alt="Carro elétrico 3" />
                            <div className="card-body">
                                <h5 className="card-title">SmoothPath CityGo</h5>
                                <p className="card-text">Preço: R$ 150.000</p>
                                <a href="#" className="btn btn-primary">Saiba Mais</a>
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