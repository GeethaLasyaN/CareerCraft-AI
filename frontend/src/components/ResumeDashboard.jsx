export default function ResumeDashboard({
  setCurrentPage,
  uploadedFileName,
  targetRole
}) {

  return (

    <div className="max-w-7xl mx-auto">

      {/* BACK BUTTON */}

      <button
        onClick={() => setCurrentPage("resume")}
        className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
      >
        Back
      </button>

      {/* HEADER */}

      <div className="mt-10">

        <h1 className="text-5xl font-bold text-white">
          Resume Analysis
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          AI-powered resume insights and ATS analysis.
        </p>

      </div>

      {/* FILE INFO */}

      <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-8">

        <h2 className="text-2xl font-semibold text-cyan-300">
          Uploaded Resume
        </h2>

        <p className="mt-4 text-gray-300">
          {uploadedFileName}
        </p>

        <p className="mt-2 text-purple-300">
          Target Role: {targetRole}
        </p>

      </div>

      {/* ANALYTICS */}

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        {/* ATS */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-2xl font-semibold text-cyan-300">
            ATS Score
          </h2>

          <p className="mt-10 text-6xl font-bold text-green-400">
            87%
          </p>

        </div>

        {/* MATCH */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-2xl font-semibold text-purple-300">
            Role Match
          </h2>

          <p className="mt-10 text-6xl font-bold text-blue-400">
            78%
          </p>

        </div>

        {/* STRENGTH */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-2xl font-semibold text-pink-300">
            Resume Strength
          </h2>

          <p className="mt-10 text-6xl font-bold text-pink-400">
            Strong
          </p>

        </div>

      </div>

      {/* SKILLS */}

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* FOUND */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-2xl font-semibold text-green-300">
            Detected Skills
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">

            {[
              "React",
              "Python",
              "Machine Learning",
              "GitHub",
              "SQL"
            ].map((skill) => (

              <span
                key={skill}
                className="px-4 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

        {/* REQUIRED */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-2xl font-semibold text-orange-300">
            Recommended Skills
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">

            {[
              "Docker",
              "Cloud",
              "Communication",
              "Problem Solving"
            ].map((skill) => (

              <span
                key={skill}
                className="px-4 py-2 rounded-2xl bg-orange-500/10 border border-orange-400/20 text-orange-300"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>
{/* AI SUGGESTIONS */}

<div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-8">

  <h2 className="text-4xl font-bold text-cyan-300">
    AI Suggestions
  </h2>

  <p className="mt-4 text-gray-400 text-lg">
    Personalized recommendations to improve your resume performance.
  </p>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

    {/* CARD 1 */}

    <div className="rounded-3xl bg-cyan-500/10 border border-cyan-400/20 p-6">

      <h3 className="text-2xl font-semibold text-cyan-300">
        Add More Metrics
      </h3>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Include measurable achievements and project outcomes to improve recruiter impact.
      </p>

    </div>

    {/* CARD 2 */}

    <div className="rounded-3xl bg-purple-500/10 border border-purple-400/20 p-6">

      <h3 className="text-2xl font-semibold text-purple-300">
        Improve ATS Keywords
      </h3>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Add role-specific keywords to increase compatibility with ATS systems.
      </p>

    </div>

    {/* CARD 3 */}

    <div className="rounded-3xl bg-pink-500/10 border border-pink-400/20 p-6">

      <h3 className="text-2xl font-semibold text-pink-300">
        Strengthen Projects
      </h3>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Explain technologies used, challenges solved, and business impact clearly.
      </p>

    </div>

    {/* CARD 4 */}

    <div className="rounded-3xl bg-orange-500/10 border border-orange-400/20 p-6">

      <h3 className="text-2xl font-semibold text-orange-300">
        Add Portfolio Links
      </h3>

      <p className="mt-4 text-gray-300 leading-relaxed">
        Include GitHub, LinkedIn, and deployed project links for stronger credibility.
      </p>

    </div>

  </div>

</div>
    </div>

  )

}