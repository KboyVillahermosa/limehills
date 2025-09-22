async function main() {
  try {
  const res = await fetch('http://localhost:5174/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hello from test script' }),
    })
    const text = await res.text()
    console.log('status', res.status)
    console.log('body:', text)
  } catch (e) {
    console.error('request error', e)
  }
}

main()
