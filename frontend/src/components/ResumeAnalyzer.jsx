export default function ResumeAnalyzer({
  setCurrentPage,
  targetRole,
  setTargetRole,
  handleFileUpload
}) {

  return (

    <div className="max-w-4xl mx-auto">

      {/* BACK BUTTON */}

      <button
        onClick={() => setCurrentPage("home")}
        className="mb-10 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
      >
        ← Back
      </button>

      {/* HEADING */}

      <h1 className="text-5xl font-bold text-cyan-300">
        Resume Analyzer
      </h1>

      {/* ROLE INPUT */}

      <div className="mt-10">

        <p className="text-xl text-gray-300 mb-4">
          Enter Your Target Role
        </p>

        <input
          type="text"
          value={targetRole}
          onChange={(e) => setTargetRole(e.target.value)}
          placeholder="Example: AI Engineer"
          className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-cyan-400"
        />

      </div>

      {/* UPLOAD SECTION */}

      <div className="mt-12 border-2 border-dashed border-cyan-400/30 rounded-3xl p-14 bg-white/5">

        <h2 className="text-3xl font-bold text-cyan-300">
          Upload Your Resume
        </h2>

        <p className="mt-4 text-gray-400 text-lg">
          Drag & drop your PDF resume here
        </p>

        <label className="mt-8 inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold cursor-pointer hover:scale-105 transition-all">

          Choose File

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileUpload}
          />

        </label>

      </div>

    </div>

  )

}