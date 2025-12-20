// server-proxy.js
// Simple proxy to avoid CORS issues when calling Google Apps Script from local dev
// Usage:
// 1) npm install express node-fetch cors
// 2) node server-proxy.js

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;
const TARGET = 'https://script.google.com/macros/s/AKfycbx8H5q7iKupVm2vP5GiytkoWRYzVyPE0Y3Yd9f9A2yzNjm5x5JTlDLCqokUj-GjF_lgpg/exec';

app.use(cors());
app.use(express.json());

app.post('/quote', async (req, res) => {
  try {
    const response = await fetch(TARGET, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    // forward status and body
    res.status(response.status).send(text);
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'proxy error' });
  }
});

app.listen(PORT, () => console.log(`Proxy listening on http://localhost:${PORT}`));
