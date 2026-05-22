import { useState } from "react"

export default function PostGenerator({ setCurrentPage }) {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [skills, setSkills] = useState("")
  const [tone, setTone] = useState("Professional")

  const [generatedPost, setGeneratedPost] = useState("")
  const [loading, setLoading] = useState(false)

  const generatePost = () => {

    setLoading(true)

    setTimeout(() => {

      setGeneratedPost(
`🚀 Excited to share my recent achievement: ${title}!

${description}

Through this experience, I strengthened my skills in ${skills} and gained valuable practical exposure.

Grateful for the opportunity to continue learning, building, and growing in tech ✨

#CareerGrowth #Technology #Learning #Success`
      )

      setLoading(false)

    }, 2000)

  }

  const copyPost = () => {

    navigator.clipboard.writeText(generatedPost)

    alert("LinkedIn post copied successfully!")

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

      <h1 className="mt-10 text-5xl font-bold text-pink-300">
        🚀 LinkedIn Post Generator
      </h1>

      <p className="mt-5 text-xl text-gray-400">
        Generate professional LinkedIn posts using AI.
      </p>

      {/* FORM */}

      <div className="mt-12 space-y-8">

        {/* TITLE */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Achievement Title
          </p>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Example: Completed Generative AI Certification"
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-pink-400"
          />

        </div>

        {/* DESCRIPTION */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Description
          </p>

          <textarea
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your achievement..."
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-pink-400"
          ></textarea>

        </div>

        {/* SKILLS */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Skills / Technologies Used
          </p>

          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Example: React, Python, AI"
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-pink-400"
          />

        </div>

        {/* TONE */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Select Tone
          </p>

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full bg-black text-white border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-pink-400"
          >

            <option>Professional</option>
            <option>Excited</option>
            <option>Casual</option>

          </select>

        </div>

        {/* BUTTON */}

        <button
          onClick={generatePost}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-all text-lg font-semibold"
        >
          Generate LinkedIn Post
        </button>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="mt-14 flex flex-col items-center">

          <div className="w-20 h-20 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-6 text-pink-300 text-2xl font-semibold">
            Generating AI LinkedIn Post...
          </p>

        </div>

      )}

      {/* RESULT */}

      {!loading && generatedPost && (

        <div className="mt-14 rounded-3xl border border-pink-400/20 bg-white/5 p-10">

          <h2 className="text-3xl font-bold text-pink-300">
            ✨ AI Generated LinkedIn Post
          </h2>

          <p className="mt-6 text-xl text-gray-200 leading-relaxed whitespace-pre-line">
            {generatedPost}
          </p>

          {/* COPY BUTTON */}

          <button
            onClick={copyPost}
            className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all font-semibold"
          >
            Copy Post
          </button>

        </div>

      )}

    </div>

  )

}