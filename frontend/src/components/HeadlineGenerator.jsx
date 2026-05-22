import { useState } from "react"

export default function HeadlineGenerator({ setCurrentPage }) {

  const [role, setRole] = useState("")
  const [skills, setSkills] = useState("")

  const [headline, setHeadline] = useState("")
  const [loading, setLoading] = useState(false)

  const generateHeadline = () => {

    setLoading(true)

    setTimeout(() => {

      setHeadline(
        `${role} | Passionate About ${skills} | Building Innovative Tech Solutions`
      )

      setLoading(false)

    }, 2000)

  }

  const copyHeadline = () => {

    navigator.clipboard.writeText(headline)

    alert("Headline copied successfully!")

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

      <h1 className="mt-10 text-5xl font-bold text-cyan-300">
        ✨ LinkedIn Headline Generator
      </h1>

      <p className="mt-5 text-xl text-gray-400">
        Generate recruiter-friendly LinkedIn headlines using AI.
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
            placeholder="Example: AI Engineer"
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-cyan-400"
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
            placeholder="Example: GenAI, React, Data Science"
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-cyan-400"
          />

        </div>

        {/* BUTTON */}

        <button
          onClick={generateHeadline}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all text-lg font-semibold"
        >
          Generate Headline
        </button>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="mt-14 flex flex-col items-center">

          <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-6 text-cyan-300 text-2xl font-semibold">
            Generating AI Headline...
          </p>

        </div>

      )}

      {/* RESULT */}

      {!loading && headline && (

        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-white/5 p-10">

          <h2 className="text-3xl font-bold text-cyan-300">
            ✨ AI Generated Headline
          </h2>

          <p className="mt-6 text-2xl text-gray-200 leading-relaxed">
            {headline}
          </p>

          {/* COPY BUTTON */}

          <button
            onClick={copyHeadline}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all font-semibold"
          >
            Copy Headline
          </button>

        </div>

      )}

    </div>

  )

}