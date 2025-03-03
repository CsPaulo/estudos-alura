import mongoose from "mongoose";

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
      required: true,
    },
    preco: {
      type: Number,
      required: true,
    },
    paginas: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const livro = mongoose.model("livros", LivroShema);

export default livro;
