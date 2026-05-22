export default function ResumeDashboard({
  setCurrentPage,
  uploadedFileName,
  targetRole
}) {

  return (

    <div>

      {/* BACK */}

      <button
        onClick={() => setCurrentPage("resume")}
        className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
      >
        ← Back
      </button>

      {/* SUCCESS */}

      <div className="mt-8 rounded-3xl border border-green-400/20 bg-green-500/5 p-8">

        <h2 className="text-3xl font-bold text-green-400">
          ✅ Resume Uploaded Successfully
        </h2>

        <p className="mt-4 text-gray-300 text-lg">
          {uploadedFileName}
        </p>

        <p className="mt-2 text-cyan-300 text-lg">
          Analyzed for: {targetRole}
        </p>

      </div>

      {/* TITLE */}

      <h1 className="mt-12 text-5xl font-bold">
        ✨ AI Resume Analysis
      </h1>

      {/* ANALYTICS */}

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        {/* ATS */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-3xl font-bold text-cyan-300">
            ATS Score
          </h2>

          <div className="mt-10 flex justify-center">

            <div className="w-40 h-40 rounded-full border-[12px] border-green-400 flex items-center justify-center text-5xl font-bold text-green-400">
              87%
            </div>

          </div>

        </div>

        {/* MATCH */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-3xl font-bold text-cyan-300">
            Resume Match
          </h2>

          <div className="mt-14 text-7xl font-bold text-blue-400">
            78%
          </div>

          <p className="mt-5 text-green-400 text-2xl">
            Good Match
          </p>

        </div>

        {/* STRENGTH */}

        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">

          <h2 className="text-3xl font-bold text-cyan-300">
            Resume Strength
          </h2>

          <div className="mt-14">

            <div className="w-full h-5 bg-gray-700 rounded-full">

              <div className="h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 w-[87%]"></div>

            </div>

            <p className="mt-6 text-green-400 text-2xl font-semibold">
              Strong Resume
            </p>

          </div>

        </div>

      </div>

    </div>

  )

}