import express from "express";

const app = express();
app.use(express.json());

const livros = [
  {
    id: 1,
    nome: "Senhor dos Anéis",
  },
  {
    id: 2,
    nome: "Harry Potter",
  },
];

function buscaLivro(id) {
  return livros.findIndex((livro) => livro.id === Number(id));
}
app.get("/", (req, res) => {
  res.status(200).send("Bem vindo ao servidor");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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
