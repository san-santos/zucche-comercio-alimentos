import express from "express";

const app = express();
app.use(express.json());

let items = []; 

app.post("/products", async (req, res) => {
  const newItems = req.body; 

  if (!Array.isArray(newItems)) {
    return res.status(400).json({ error: "O payload deve ser um array de produtos." });
  }

  items.push(...newItems);
  res.status(201).json({ message: "Produtos adicionados com sucesso!", products: newItems });
});

app.get("/products", async (req, res) => {
  res.status(200).json(items);
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});
