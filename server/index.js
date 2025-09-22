import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(express.json())

// Small CORS helper to allow the front-end (vite dev/proxy or direct requests)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

const PORT = process.env.PORT || 5174

function loadCompanyData() {
  try {
    const file = path.resolve(process.cwd(), 'src', 'chat', 'companyData.json')
    const raw = fs.readFileSync(file, 'utf-8')
    return JSON.parse(raw)
  } catch (e) {
    console.warn('Could not load company data:', e.message)
    return { name: 'Our Company', description: '' }
  }
}

app.post('/api/chat', (req, res) => {
  try {
    console.log('/api/chat called with body:', req.body)
    const { message } = req.body || {}
    const company = loadCompanyData()

      // Minimal mock responder. Replace with real AI integration later.
      // Simple rule: if user asks about office hours, return the hours from company data.
      const normalized = String(message || '').toLowerCase()
      let reply
      if (/(office|opening|open|hours|when).*hour|what.*hour|when.*open|when.*close|business hours?/i.test(normalized) || /what time|office hours|working hours/.test(normalized)) {
        // prefer nested officeHours data if present
        if (company.officeHours) {
          const oh = company.officeHours
          const days = Array.isArray(oh.days) ? oh.days.join(', ') : (oh.days || '')
          reply = `Our office hours are ${oh.open} - ${oh.close} (${days}). Note: ${oh.note || ''}`
        } else if (company.hours) {
          reply = `Our office hours are: ${company.hours}`
        } else {
          reply = `Our office hours are not listed. Please contact us at ${company.contactEmail || 'the contact email on our site'}.`
        }
      } else {
        reply = `Hi, I'm Aljen — your virtual assistant for ${company.name}. You asked: "${String(message)}". ${company.description ? 'A bit about us: ' + company.description : ''}`
      }

  console.log('Responding with reply (length):', reply ? String(reply).length : 0)
  console.log('Responding with reply (preview):', reply ? String(reply).slice(0, 400) : '')
  res.json({ reply })
  } catch (err) {
    console.error('Error in /api/chat:', err)
    res.status(500).json({ error: String(err && err.message ? err.message : 'internal server error') })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
