const express = require('express');
const app = express();

app.get('/manager', (req, res) => {
  res.send('Ruta /manager funcionando correctamente');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
