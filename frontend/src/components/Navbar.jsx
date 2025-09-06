import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#topo">
            <img
              src="/images/LOGOSMOOTH.png"
              alt="Logo da equipe SmoothPath"
              width="100"   // aumentei de 40 para 100
              height="100"  // aumentei de 40 para 100
              className="me-2"
            />
            SmoothPath
          </a>

          {/* Botão toggle no mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Alternar navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#carros">Carros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#lojas">Lojas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sobre">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
