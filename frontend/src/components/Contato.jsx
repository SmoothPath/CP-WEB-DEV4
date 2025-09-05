import React, { useState } from "react";
import "../Contato.css";


function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pelo contato, ${formData.nome}!`);
    setFormData({ nome: "", email: "", mensagem: "" });
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
    </div>
  );
}

export default Contato;
