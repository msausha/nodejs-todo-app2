const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let todos = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js ToDo App!');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  todos.push(req.body.task);
  res.json({ message: 'Task added.' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
