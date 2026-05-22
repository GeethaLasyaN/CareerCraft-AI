import { useState } from "react"

export default function Sidebar() {

  const [open, setOpen] = useState(false)

  return (

    <>

      {/* TOP NAVBAR */}

      <div className="fixed top-0 left-0 right-0 z-50 bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between">

        {/* MENU BUTTON */}

        <button
          onClick={() => setOpen(true)}
          className="text-3xl text-white"
        >
          ☰
        </button>

        {/* LOGO */}

        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          CareerCraft AI
        </h1>

      </div>

      {/* SIDEBAR OVERLAY */}

      {open && (

        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>

      )}

      {/* SIDEBAR */}

      <div className={`
        fixed top-0 left-0 h-full w-[320px]
        bg-[#0b1020] border-r border-white/10
        backdrop-blur-2xl z-50 p-8
        transition-all duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}>

        {/* CLOSE BUTTON */}

        <div className="flex justify-end">

          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-gray-400 hover:text-white transition-all"
          >
            ×
          </button>

        </div>

        {/* LOGO */}

        <div className="mt-4">

          <h1 className="text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            CareerCraft AI
          </h1>

          <p className="mt-6 text-gray-400 leading-relaxed">
            AI-powered career growth platform for students and professionals.
          </p>

        </div>

        {/* PROFILE */}

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 p-5 flex items-center gap-4">

          {/* AVATAR */}

          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-xl font-bold">
            G
          </div>

          {/* INFO */}

          <div>

            <h2 className="text-lg font-semibold">
              Geetha Lasya
            </h2>

            <p className="text-gray-400 text-sm">
              Student Account
            </p>

          </div>

        </div>

        {/* SETTINGS */}

        <div className="mt-10 rounded-3xl bg-white/5 border border-white/10 p-5 space-y-5">

          <button className="w-full text-left text-gray-300 hover:text-white transition-all">
            Settings
          </button>

          <button className="w-full text-left text-gray-300 hover:text-white transition-all">
            Notifications
          </button>

          <button className="w-full text-left text-gray-300 hover:text-white transition-all">
            Help & Support
          </button>

        </div>

      </div>

    </>

  )

}