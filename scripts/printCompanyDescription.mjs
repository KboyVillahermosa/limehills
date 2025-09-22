import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '..', 'src', 'chat', 'companyData.json');
const raw = await fs.readFile(dataPath, 'utf8');
const parsed = JSON.parse(raw);
console.log(parsed.description);
