import React from "react";
import "../Sobre.css";

function Sobre() {
  return (
    <section id="sobre" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="sobre-container">
              <h1 className="sobre-titulo">Sobre a SmoothPath Electric Cars</h1>
              <p className="sobre-texto">
                A <strong>SmoothPath Electric Cars</strong> nasceu com o propósito de transformar a
                mobilidade urbana, oferecendo veículos elétricos de alta performance, design
                inovador e tecnologia de ponta.
              </p>

              <p className="sobre-texto">
                Nosso compromisso vai além de vender carros: queremos criar um futuro mais limpo,
                silencioso e sustentável. Cada modelo é projetado para entregar eficiência energética,
                conforto e segurança, sem abrir mão da emoção de dirigir.
              </p>

              <h2 className="sobre-subtitulo">Nossa Missão</h2>
              <p className="sobre-texto">
                Tornar a mobilidade elétrica acessível e inspiradora, conectando pessoas a um estilo
                de vida mais consciente e tecnológico.
              </p>

              <h2 className="sobre-subtitulo">Nossa Visão</h2>
              <p className="sobre-texto">
                Ser referência global em inovação automotiva sustentável, liderando a transição para
                um mundo movido a energia limpa.
              </p>

              <h2 className="sobre-subtitulo">Nossos Valores</h2>
              <ul className="list-group">
                <li className="list-group-item bg-dark text-white border-success">Sustentabilidade</li>
                <li className="list-group-item bg-dark text-white border-success">Inovação</li>
                <li className="list-group-item bg-dark text-white border-success">Transparência</li>
                <li className="list-group-item bg-dark text-white border-success">Paixão pela mobilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
