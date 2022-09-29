const app = express();
const express = require('express');
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/pokedex'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/pokedex/index.html');
});

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta ' + PORT);
});
