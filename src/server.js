const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Simple env info for the frontend
app.get('/api/env', (req, res) => {
  res.json({ env: process.env.NODE_ENV || 'development' });
});

// Health check route - used by Docker, load balancers, monitoring tools
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Feature routes
app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Only start the server if this file is run directly (not when imported for tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
