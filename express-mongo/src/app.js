import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error(`Erro ao conectar no banco de dados: ${erro}`);
});

conexao.once("open", () => {
  console.log("Conectado no banco de dados");
});
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Bem vindo ao servidor");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});
app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro adicionado com sucesso");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].nome = req.body.nome;
  res.status(200).send("Livro atualizado com sucesso");
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro deletado com sucesso");
});

export default app;
