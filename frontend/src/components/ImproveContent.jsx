import { useState } from "react"

export default function ImproveContent({ setCurrentPage }) {

  const [content, setContent] = useState("")
  const [improvedContent, setImprovedContent] = useState("")
  const [loading, setLoading] = useState(false)

  const improveText = () => {

    setLoading(true)

    setTimeout(() => {

      setImprovedContent(
`🚀 Passionate technology enthusiast with strong interests in innovation, problem-solving, and continuous learning.

Experienced in building impactful projects and exploring modern technologies to create meaningful solutions. Skilled at collaboration, adaptability, and applying technical knowledge to real-world challenges.

Actively seeking opportunities to grow, contribute, and make an impact in the tech industry ✨`
      )

      setLoading(false)

    }, 2000)

  }

  const copyContent = () => {

    navigator.clipboard.writeText(improvedContent)

    alert("Improved content copied successfully!")

  }

  return (

    <div className="max-w-5xl mx-auto">

      {/* BACK */}

      <button
        onClick={() => setCurrentPage("linkedin")}
        className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
      >
        ← Back
      </button>

      {/* TITLE */}

      <h1 className="mt-10 text-5xl font-bold text-orange-300">
        🔥 Improve LinkedIn Content
      </h1>

      <p className="mt-5 text-xl text-gray-400">
        Rewrite and improve your LinkedIn content using AI.
      </p>

      {/* INPUT */}

      <div className="mt-12">

        <p className="text-xl mb-4 text-gray-300">
          Paste Your Existing Content
        </p>

        <textarea
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paste your LinkedIn content here..."
          className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-orange-400"
        ></textarea>

      </div>

      {/* BUTTON */}

      <button
        onClick={improveText}
        className="mt-8 px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition-all text-lg font-semibold"
      >
        Improve Content
      </button>

      {/* LOADING */}

      {loading && (

        <div className="mt-14 flex flex-col items-center">

          <div className="w-20 h-20 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-6 text-orange-300 text-2xl font-semibold">
            Improving Content Using AI...
          </p>

        </div>

      )}

      {/* RESULT */}

      {!loading && improvedContent && (

        <div className="mt-14 rounded-3xl border border-orange-400/20 bg-white/5 p-10">

          <h2 className="text-3xl font-bold text-orange-300">
            ✨ AI Improved Content
          </h2>

          <p className="mt-6 text-xl text-gray-200 leading-relaxed whitespace-pre-line">
            {improvedContent}
          </p>

          {/* COPY BUTTON */}

          <button
            onClick={copyContent}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all font-semibold"
          >
            Copy Improved Content
          </button>

        </div>

      )}

    </div>

  )

}