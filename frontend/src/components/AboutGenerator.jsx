import { useState } from "react"

export default function AboutGenerator({ setCurrentPage }) {

  const [role, setRole] = useState("")
  const [skills, setSkills] = useState("")
  const [goals, setGoals] = useState("")

  const [aboutText, setAboutText] = useState("")
  const [loading, setLoading] = useState(false)

  const generateAbout = () => {

    setLoading(true)

    setTimeout(() => {

      setAboutText(
`Passionate ${role} with strong interests in ${skills}.

I enjoy building innovative projects, learning emerging technologies, and continuously improving my technical and professional skills.

Currently focused on growing in the tech industry while contributing to impactful and creative solutions. Excited to collaborate, learn, and explore opportunities in technology and AI 🚀`
      )

      setLoading(false)

    }, 2000)

  }

  const copyAbout = () => {

    navigator.clipboard.writeText(aboutText)

    alert("About section copied successfully!")

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

      <h1 className="mt-10 text-5xl font-bold text-purple-300">
        🧠 LinkedIn About Generator
      </h1>

      <p className="mt-5 text-xl text-gray-400">
        Generate professional LinkedIn About sections using AI.
      </p>

      {/* FORM */}

      <div className="mt-12 space-y-8">

        {/* ROLE */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Your Role
          </p>

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Example: Data Science Student"
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-purple-400"
          />

        </div>

        {/* SKILLS */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Skills / Interests
          </p>

          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Example: AI, React, Python"
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-purple-400"
          />

        </div>

        {/* GOALS */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Career Goals
          </p>

          <textarea
            rows="5"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            placeholder="Describe your goals..."
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-purple-400"
          ></textarea>

        </div>

        {/* BUTTON */}

        <button
          onClick={generateAbout}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 hover:scale-105 transition-all text-lg font-semibold"
        >
          Generate About Section
        </button>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="mt-14 flex flex-col items-center">

          <div className="w-20 h-20 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-6 text-purple-300 text-2xl font-semibold">
            Generating AI About Section...
          </p>

        </div>

      )}

      {/* RESULT */}

      {!loading && aboutText && (

        <div className="mt-14 rounded-3xl border border-purple-400/20 bg-white/5 p-10">

          <h2 className="text-3xl font-bold text-purple-300">
            ✨ AI Generated About Section
          </h2>

          <p className="mt-6 text-xl text-gray-200 leading-relaxed whitespace-pre-line">
            {aboutText}
          </p>

          {/* COPY BUTTON */}

          <button
            onClick={copyAbout}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all font-semibold"
          >
            Copy About Section
          </button>

        </div>

      )}

    </div>

  )

}