const express = require('express');
const app = express();
const PORT = 5000;

let lists = [
  { id: 1, name: 'Sample List 1' },
  { id: 2, name: 'Sample List 2' },
];

// Middleware for parsing JSON
app.use(express.json());

// Fetch all lists
app.get('/api/lists', (req, res) => {
  res.json(lists);
});

// Create a new list
app.post('/api/lists', (req, res) => {
  const newList = {
    id: lists.length + 1,
    name: req.body.name,
  };
  lists.push(newList);
  res.status(201).json(newList);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
