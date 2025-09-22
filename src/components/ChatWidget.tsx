import React, { useEffect, useRef, useState } from 'react'

type Message = {
  id: string
  from: 'user' | 'aljen'
  text: string
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }, [messages, open])

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMsg: Message = { id: Date.now().toString(), from: 'user', text: input }
    setMessages((m) => [...m, userMsg])
    setInput('')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text }),
      })

      if (!res.ok) {
        // Try to parse an error message from the server
        let errText = `Error ${res.status} ${res.statusText}.`
        try {
          const errBody = await res.json()
          if (errBody && errBody.error) errText += ' ' + String(errBody.error)
        } catch {
          // non-JSON error body
          const txt = await res.text().catch(() => '')
          if (txt) errText += ' ' + txt
        }
        console.error('Chat API returned non-OK:', res.status, res.statusText)
        const errMsg: Message = { id: 'err-' + Date.now().toString(), from: 'aljen', text: errText }
        setMessages((m) => [...m, errMsg])
        return
      }

      const data = await res.json()
      const replyText = data && data.reply ? String(data.reply) : 'Sorry, something went wrong. Please try again later.'
      const reply: Message = { id: Date.now().toString() + '-r', from: 'aljen', text: replyText }
      setMessages((m) => [...m, reply])
    } catch (error) {
      console.error('Fetch error in sendMessage:', error)
  const errMsg: Message = { id: 'err-' + Date.now().toString(), from: 'aljen', text: `Network error: ${String(error)}` }
      setMessages((m) => [...m, errMsg])
    }
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          aria-label="Open chat"
          onClick={() => setOpen((s) => !s)}
          className="bg-[#3b40d6] hover:bg-[#2b2fc4] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H7l-5 3V5z" />
          </svg>
        </button>

        {open && (
          <div className="mt-4 w-80 md:w-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
            <div className="bg-[#3b40d6] text-white px-4 py-3 flex items-center justify-between">
              <div className="font-semibold">Aljen — Chat</div>
              <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white/90">✕</button>
            </div>

            <div ref={containerRef} className="p-3 h-64 overflow-auto space-y-3 bg-white">
              {messages.length === 0 && (
                <div className="text-sm text-gray-500">Hi, I'm Aljen. I can help answer questions about our company and services. How can I help you today?</div>
              )}
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-md ${m.from === 'user' ? 'bg-[#3b40d6] text-white' : 'bg-gray-100 text-gray-800'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t bg-white">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
                />
                <button onClick={sendMessage} className="bg-[#3b40d6] text-white px-4 py-2 rounded-md">Send</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ChatWidget
