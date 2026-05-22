import { useState } from "react"

export default function CareerChatbot({ setCurrentPage }) {

  const [message, setMessage] = useState("")

  const [chat, setChat] = useState([
    {
      type: "ai",
      text: "Hello! I'm your AI Career Assistant. How can I help you today?"
    }
  ])

  const sendMessage = () => {

    if (!message.trim()) return

    const userMessage = {
      type: "user",
      text: message
    }

    const aiMessage = {
      type: "ai",
      text: "This is a demo AI response. Real AI integration can be added later using Gemini or OpenAI APIs."
    }

    setChat([...chat, userMessage, aiMessage])

    setMessage("")

  }

  return (

    <div className="max-w-5xl mx-auto">

      {/* BACK BUTTON */}

      <button
        onClick={() => setCurrentPage("home")}
        className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
      >
        Back
      </button>

      {/* HEADER */}

      <div className="mt-10">

        <h1 className="text-5xl font-bold text-cyan-300">
          AI Career Assistant
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Ask career, resume, interview, and LinkedIn related questions.
        </p>

      </div>

      {/* CHAT CONTAINER */}

      <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-6 h-[550px] flex flex-col">

        {/* MESSAGES */}

        <div className="flex-1 overflow-y-auto space-y-6 pr-2">

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
                  px-6
                  py-4
                  text-lg
                  leading-relaxed
                  ${msg.type === "user"
                    ? "bg-cyan-500 text-white"
                    : "bg-white/10 border border-white/10 text-gray-200"}
                `}
              >
                {msg.text}
              </div>

            </div>

          ))}

        </div>

        {/* INPUT AREA */}

        <div className="mt-6 flex gap-4">

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything about career growth..."
            className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400"
          />

          <button
            onClick={sendMessage}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all font-semibold"
          >
            Send
          </button>

        </div>

      </div>

    </div>

  )

}