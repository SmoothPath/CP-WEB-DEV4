<<<<<<< HEAD
function Navbar() {
    <header>
        <h1><img src="./public/images/LOGOSMOOTH.png" alt="Logo da equipe SmoothPath"></img></h1>
        <nav>
            <ul>
                <li><a href="">Carros</a></li>
                <li><a href="">Lojas</a></li>
                <li><a href="">Sobre</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>
    </header>
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"


function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fw-bold d-flex align-items-center" href="#topo">
            <img
              src="/images/LOGOSMOOTH.png"
              alt="Logo SmoothPath"
              width="40"
              height="40"
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
            aria-label="Toggle navigation"
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
>>>>>>> 0c0cb89 (ajuste de header e responsividade)
}

export default Navbar;