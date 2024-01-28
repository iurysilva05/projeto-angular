const express = require('express');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});