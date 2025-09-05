const express = require("express");
const app = express();
//npm install cors - permite/autoriza requisições no servidor
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const Port = 3001;
app.use(bodyParser.json());


const imagens = [
  { url: '/images/1-Tesla-Model-32.jpg', legenda: 'Tesla Model 3 — Foto: divulgação/Tesla ' },
  { url: '/images/seres3.avif', legenda: 'Seres 3 — Foto: divulgação/Seres' },
  { url: '/images/konaEv.avif', legenda: 'Hyundai Kona EV — Foto: divulgação/Hyundai' },
  { url: '/images/dolphin.jpg', legenda: 'BYD Dolphin Plus — Foto: divulgação/BYD ' },
  { url: '/images/jaceJS1.avif', legenda: 'JAC e-JS1 — Foto: divulgação/JAC' }
];

let imagemAtual = 0;

app.get("/carros", (req, res) => {
  res.json({
    url: imagens[imagemAtual].url,
    legenda: imagens[imagemAtual].legenda
  });

  imagemAtual = (imagemAtual + 1) % imagens.length;
});

app.post("/api/contato", (req, res) => {
  const { nome, email, mensagem } = req.body;

  console.log("Novo contato recebido:", { nome, email, mensagem });

  res.json({ sucesso: true, mensagem: "Contato recebido com sucesso!" });
});

app.listen(Port, () => {
  console.log(`Servidor rodando em http://localhost:${Port}`);
});
