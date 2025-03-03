import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const LivroShema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    nome: {
      type: String,
      required: true,
    },
    editora: {
      type: String,
    },
    preco: {
      type: Number,
    },
    paginas: {
      type: Number,
    },
    autor: autorSchema,
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", LivroShema);

export default livro;
