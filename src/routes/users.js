const express = require('express');
const router = express.Router();

// In-memory store (in a real company this would be Postgres/Mongo via src/config/db.js)
let users = [
  { id: 1, name: 'Siddharth Bairagi', role: 'DevOps Engineer' },
  { id: 2, name: 'Test User', role: 'QA' },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

router.post('/', (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ error: 'name and role are required' });
  }
  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  res.status(201).json(newUser);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const exists = users.some((u) => u.id === id);
  if (!exists) return res.status(404).json({ error: 'User not found' });
  users = users.filter((u) => u.id !== id);
  res.status(204).send();
});

module.exports = router;
