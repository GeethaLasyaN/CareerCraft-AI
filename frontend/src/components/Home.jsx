export default function Home({ setCurrentPage }) {

  return (

    <div className="max-w-7xl mx-auto">

      {/* HERO SECTION */}

      <div className="text-center pt-10">

        <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">

          <span className="text-white">
            Hello,
          </span>

          <span className="ml-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
            Lasya!
          </span>

        </h1>

        <p className="mt-8 text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Your AI-powered career growth companion.
        </p>

      </div>

      {/* MAIN ACTION BUTTONS */}

      <div className="flex flex-wrap justify-center gap-8 mt-16">

        <button
          onClick={() => setCurrentPage("resume")}
          className="px-12 py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 text-xl font-semibold shadow-[0_0_40px_rgba(34,211,238,0.25)]"
        >
          Resume Analyzer
        </button>

        <button
          onClick={() => setCurrentPage("linkedin")}
          className="px-12 py-5 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 hover:scale-105 transition-all duration-300 text-xl font-semibold shadow-[0_0_40px_rgba(168,85,247,0.25)]"
        >
          LinkedIn Assistant
        </button>

        <button
          onClick={() => setCurrentPage("interview")}
          className="px-12 py-5 rounded-3xl bg-gradient-to-r from-fuchsia-500 to-rose-600 hover:scale-105 transition-all duration-300 text-xl font-semibold shadow-[0_0_40px_rgba(217,70,239,0.25)]"
        >
          Interview Coach
        </button>

      </div>

      {/* FEATURE CARDS */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-24">

        {/* CARD 1 */}

        <div className="rounded-[32px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-10 hover:scale-[1.03] hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.18)] transition-all duration-300">

          <div className="w-20 h-20 rounded-3xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-5xl">

            📄

          </div>

          <h2 className="mt-8 text-4xl font-bold text-cyan-300">
            Resume Analysis
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            ATS scoring, role matching, skill analysis, and AI-powered resume optimization insights.
          </p>

        </div>

        {/* CARD 2 */}

        <div className="rounded-[32px] border border-purple-400/20 bg-white/5 backdrop-blur-2xl p-10 hover:scale-[1.03] hover:border-purple-400/40 hover:shadow-[0_0_50px_rgba(168,85,247,0.18)] transition-all duration-300">

          <div className="w-20 h-20 rounded-3xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-5xl">

            💼

          </div>

          <h2 className="mt-8 text-4xl font-bold text-purple-300">
            LinkedIn Optimization
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            Generate headlines, About sections, posts, and improve professional branding instantly.
          </p>

        </div>

        {/* CARD 3 */}

        <div className="rounded-[32px] border border-pink-400/20 bg-white/5 backdrop-blur-2xl p-10 hover:scale-[1.03] hover:border-pink-400/40 hover:shadow-[0_0_50px_rgba(236,72,153,0.18)] transition-all duration-300">

          <div className="w-20 h-20 rounded-3xl bg-pink-500/10 border border-pink-400/20 flex items-center justify-center text-5xl">

            🎤

          </div>

          <h2 className="mt-8 text-4xl font-bold text-pink-300">
            Interview Preparation
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            Practice interview questions, communication strategies, and AI-guided answer framing.
          </p>

        </div>

      </div>

      {/* AI INSIGHTS SECTION */}

      <div className="mt-28 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-12">

        <div className="flex flex-col xl:flex-row items-center justify-between gap-16">

          {/* LEFT */}

          <div className="flex-1">

            <h2 className="text-5xl font-bold leading-tight">

              <span className="text-white">
                Build Your
              </span>

              <span className="ml-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                Dream Career
              </span>

            </h2>

            <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-2xl">
              Leverage AI-powered insights to improve your resume, optimize LinkedIn presence, and prepare confidently for interviews.
            </p>

            <button
              onClick={() => setCurrentPage("resume")}
              className="mt-10 px-10 py-5 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all duration-300 text-lg font-semibold shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              Get Started
            </button>

          </div>

          {/* RIGHT */}

          <div className="flex items-center justify-center">

            <div className="relative">

              {/* GLOW */}

              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20"></div>

              {/* ROBOT */}

              <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-[#172554] via-[#0f172a] to-[#020617] border border-cyan-400/20 flex items-center justify-center shadow-[0_0_70px_rgba(34,211,238,0.25)]">

                <div className="text-9xl drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                  🤖
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}