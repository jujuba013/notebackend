import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Chat fake (simula banco de dados)
let chatData = [
  { user: "Alice", message: "Oi!" },
  { user: "Bob", message: "Olá!" }
];

// GET chat
app.get('/chat/getchat', (req, res) => {
  res.json({ chat: chatData });
});

// POST chat (opcional, pra adicionar mensagem)
app.post('/chat/addchat', (req, res) => {
  const { user, message } = req.body;
  chatData.push({ user, message });
  res.json({ success: true, chat: chatData });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));