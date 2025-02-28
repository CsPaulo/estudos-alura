import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Bem vindo ao servidor');
});

export default app;
