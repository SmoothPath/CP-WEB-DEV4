import React, { useState } from "react";
import "../Contato.css";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [resposta, setResposta] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch("http://localhost:3001/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await resp.json();
      setResposta(data.mensagem || "Mensagem enviada!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      setResposta("Erro ao enviar. Tente novamente.");
    }
  };

  return (
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
  );
}

export default Contato;
