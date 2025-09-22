import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '..', 'src', 'chat', 'companyData.json');
const raw = await fs.readFile(dataPath, 'utf8');
const parsed = JSON.parse(raw);

const resp = await fetch('http://localhost:5174/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: parsed.description })
});

console.log('Status:', resp.status);
const body = await resp.text();
console.log('Body:', body);
