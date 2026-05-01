const express = require('express');
const app = express();

app.use(express.json());

let items = [];
let id = 1;

// CREATE
app.post('/items', (req, res) => {
  const item = { id: id++, name: req.body.name };
  items.push(item);
  res.status(201).json(item);
});

// READ
app.get('/items', (req, res) => {
  res.json(items);
});

// UPDATE
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).send('Not found hloo');

  item.name = req.body.name;
  res.json(item);
});

// DELETE
app.delete('/items/:id', (req, res) => {
  items = items.filter(i => i.id != req.params.id);
  res.send('Deleted');
});

app.listen(3000, () => console.log('Server running on port 3000'));