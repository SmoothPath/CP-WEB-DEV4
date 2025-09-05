import React, { useState } from "react";
import "../Contato.css";

function Contato() {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

=======
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
>>>>>>> 0c0cb89 (ajuste de header e responsividade)
  const [resposta, setResposta] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD

=======
>>>>>>> 0c0cb89 (ajuste de header e responsividade)
    try {
      const resp = await fetch("http://localhost:3001/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
<<<<<<< HEAD
        body: JSON.stringify(formData)
      });

      const data = await resp.json();
      setResposta(data.mensagem || "Mensagem enviada!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
=======
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      setResposta(data.mensagem || "Mensagem enviada!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (err) {
      console.error("Erro ao enviar contato:", err);
>>>>>>> 0c0cb89 (ajuste de header e responsividade)
      setResposta("Erro ao enviar. Tente novamente.");
    }
  };

  return (
<<<<<<< HEAD
    <div className="contato-container">
      <h1 className="titulo">Entre em Contato</h1>
      <p className="descricao">
        Tem dúvidas sobre nossos carros ou quer agendar um test drive?  
        Preencha o formulário abaixo e retornaremos o mais rápido possível.
      </p>

      <form onSubmit={handleSubmit} className="form">
        <label className="label">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="input"
          required
        />

        <label className="label">E-mail:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />

        <label className="label">Mensagem:</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          className="textarea"
          required
        />

        <button type="submit" className="botao">Enviar</button>
      </form>

      {resposta && <p className="resposta">{resposta}</p>}
    </div>
=======
    <section id="contato" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          {/* largura controlada no desktop, 100% no mobile */}
          <div className="col-12 col-lg-8">
            <div className="contato-container">
              <h1 className="titulo">Entre em Contato</h1>
              <p className="descricao">
                Tem dúvidas sobre nossos carros ou quer agendar um test drive? Preencha o
                formulário abaixo e retornaremos o mais rápido possível.
              </p>

              <form onSubmit={handleSubmit} className="form">
                <label className="label" htmlFor="nome">Nome:</label>
                <input
                  id="nome"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="input"
                  autoComplete="name"
                  required
                />

                <label className="label" htmlFor="email">E-mail:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  autoComplete="email"
                  required
                />

                <label className="label" htmlFor="mensagem">Mensagem:</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="textarea"
                  required
                />

                <button type="submit" className="botao">Enviar</button>
              </form>

              {resposta && <p className="resposta">{resposta}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> 0c0cb89 (ajuste de header e responsividade)
  );
}

export default Contato;
