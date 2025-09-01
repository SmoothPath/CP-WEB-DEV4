const express = require("express");
const app = express();
//npm install cors - permite/autoriza requisições no servidor
const cors = require("cors");
app.use(cors());


const Port = 3001;

app.get("/carros", (req, res) => {
  res.json({
    //Declarando o array de imagens
    imagens: [
        '/images/1-Tesla-Model-32.jpg',
        '/images/seres3.avif',
        '/images/konaEv.avif',
        '/images/dolphin.jpg',
        '/images/jaceJS1.avif'
    ],

    //Declarando array de legendas de cada imagem
    legendas: ['Tesla Model 3 — Foto: divulgação/Tesla ',
        'Seres 3 — Foto: divulgação/Seres',
        'Hyundai Kona EV — Foto: divulgação/Hyundai',
        'BYD Dolphin Plus — Foto: divulgação/BYD ',
        'JAC e-JS1 — Foto: divulgação/JAC'
    ]});
});

app.listen(Port, ()=>{
    console.log(`Servidor Rodando http://localhost:${Port}`)
});