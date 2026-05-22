export default function LinkedinAssistant({ setCurrentPage }) {

  return (

    <div>

      {/* BACK */}

      <button
        onClick={() => setCurrentPage("home")}
        className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
      >
        Back
      </button>

      {/* HEADER */}

      <h1 className="mt-10 text-5xl font-bold text-purple-300">
        LinkedIn AI Assistant
      </h1>

      <p className="mt-5 text-xl text-gray-400">
        Create optimized LinkedIn content using AI-powered generation tools.
      </p>

      {/* FEATURE CARDS */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

        {/* HEADLINE */}

        <button
          onClick={() => setCurrentPage("headlineGenerator")}
          className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-8 hover:bg-cyan-500/20 hover:scale-105 transition-all text-left"
        >

          <h2 className="text-2xl font-bold text-cyan-300">
            Headline Generator
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Generate recruiter-focused LinkedIn headlines tailored to your skills and role.
          </p>

        </button>

        {/* ABOUT */}

        <button
          onClick={() => setCurrentPage("aboutGenerator")}
          className="rounded-3xl border border-purple-400/20 bg-purple-500/10 p-8 hover:bg-purple-500/20 hover:scale-105 transition-all text-left"
        >

          <h2 className="text-2xl font-bold text-purple-300">
            About Section Generator
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Create professional LinkedIn About sections with AI-generated content.
          </p>

        </button>

        {/* POST */}

        <button
          onClick={() => setCurrentPage("postGenerator")}
          className="rounded-3xl border border-pink-400/20 bg-pink-500/10 p-8 hover:bg-pink-500/20 hover:scale-105 transition-all text-left"
        >

          <h2 className="text-2xl font-bold text-pink-300">
            Post Generator
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Generate professional LinkedIn posts for certifications, projects, and achievements.
          </p>

        </button>

        {/* IMPROVE */}

        <button
          onClick={() => setCurrentPage("improveContent")}
          className="rounded-3xl border border-orange-400/20 bg-orange-500/10 p-8 hover:bg-orange-500/20 hover:scale-105 transition-all text-left"
        >

          <h2 className="text-2xl font-bold text-orange-300">
            Content Improvement
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed">
            Rewrite and optimize existing LinkedIn content using AI assistance.
          </p>

        </button>

      </div>

    </div>

  )

}