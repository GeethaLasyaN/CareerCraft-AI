import { useState } from "react"

export default function FloatingChatbot() {

  const [open, setOpen] = useState(false)

  const [message, setMessage] = useState("")

  const [loading, setLoading] = useState(false)

  const [chat, setChat] = useState([
    {
      type: "ai",
      text: "Hi! I'm CC, your AI career assistant. Ask me anything."
    }
  ])

  const sendMessage = async () => {

    if (!message.trim()) return

    const userMessage = {
      type: "user",
      text: message
    }

    setChat((prev) => [...prev, userMessage])

    setMessage("")

    setLoading(true)

    setTimeout(() => {

      const aiMessage = {
        type: "ai",
        text: "AI features are currently unavailable."
      }

      setChat((prev) => [...prev, aiMessage])

      setLoading(false)

    }, 1000)

  }

  return (

    <>

      {/* FLOATING CHATBOT */}

      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center">

        <div className="mb-4 px-5 py-3 rounded-2xl bg-[#111827]/95 backdrop-blur-xl border border-white/10 text-white text-lg shadow-xl relative">

          Chat with CC

          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[#111827] border-r border-b border-white/10"></div>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative group"
        >

          <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 group-hover:opacity-50 transition-all duration-300"></div>

          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#172554] via-[#0f172a] to-[#020617] border border-cyan-400/20 shadow-[0_0_50px_rgba(34,211,238,0.35)] flex items-center justify-center">

            <div className="text-6xl">
              🤖
            </div>

          </div>

        </button>

      </div>

      {/* CHAT WINDOW */}

      {open && (

        <div className="fixed bottom-44 right-8 z-50 w-[390px] h-[620px] rounded-[36px] overflow-hidden border border-white/10 bg-[#0b1020]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.75)] flex flex-col">

          {/* HEADER */}

          <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/5">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-3xl">

                🤖

              </div>

              <div>

                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">
                  CC Assistant
                </h2>

                <p className="text-sm text-gray-400">
                  AI Career Companion
                </p>

              </div>

            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-3xl text-gray-500 hover:text-white transition-all"
            >
              ×
            </button>

          </div>

          {/* CHAT BODY */}

          <div className="flex-1 overflow-y-auto p-6 space-y-5">

            {chat.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`
                    max-w-[80%]
                    rounded-3xl
                    px-5
                    py-4
                    text-base
                    leading-relaxed
                    whitespace-pre-wrap
                    ${msg.type === "user"
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 border border-white/10 text-gray-200"}
                  `}
                >
                  {msg.text}
                </div>

              </div>

            ))}

            {loading && (

              <div className="flex justify-start">

                <div className="bg-white/10 border border-white/10 text-gray-300 rounded-3xl px-5 py-4">

                  CC is typing...

                </div>

              </div>

            )}

          </div>

          {/* INPUT */}

          <div className="p-5 border-t border-white/10 flex gap-3">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask CC anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 text-white"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage()
                }
              }}
            />

            <button
              onClick={sendMessage}
              className="px-7 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all font-semibold shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>

  )

}