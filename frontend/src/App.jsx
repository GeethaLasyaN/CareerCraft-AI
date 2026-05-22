import { useState } from "react"
import { motion } from "framer-motion"

import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import ResumeAnalyzer from "./components/ResumeAnalyzer"
import ResumeDashboard from "./components/ResumeDashboard"
import LinkedinAssistant from "./components/LinkedinAssistant"
import HeadlineGenerator from "./components/HeadlineGenerator"
import AboutGenerator from "./components/AboutGenerator"
import ImproveContent from "./components/ImproveContent"
import PostGenerator from "./components/PostGenerator"
import InterviewPrep from "./components/InterviewPrep"
import FloatingChatbot from "./components/FloatingChatbot"

export default function App() {

  const [currentPage, setCurrentPage] = useState("home")

  const [targetRole, setTargetRole] = useState("AI Engineer")
  const [uploadedFileName, setUploadedFileName] = useState("")

  const handleFileUpload = (e) => {

    const file = e.target.files[0]

    if (file) {

      setUploadedFileName(file.name)

      setCurrentPage("loading")

      setTimeout(() => {

        setCurrentPage("dashboard")

      }, 2500)

    }

  }

  const pageAnimation = {

    initial: {
      opacity: 0,
      y: 20
    },

    animate: {
      opacity: 1,
      y: 0
    },

    transition: {
      duration: 0.5
    }

  }

  return (

    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* SIDEBAR */}

      {currentPage === "home" && <Sidebar />}

      {/* MAIN CONTENT */}

      <div className="relative min-h-screen overflow-y-auto">

        {/* BACKGROUND */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-pink-500/5 blur-[120px] rounded-full"></div>

        {/* PAGE CONTENT */}

        <motion.div
          key={currentPage}
          initial={pageAnimation.initial}
          animate={pageAnimation.animate}
          transition={pageAnimation.transition}
          className="relative z-10 pt-28 px-6 pb-10 md:px-10 xl:px-14"
        >

          {/* HOME */}

          {currentPage === "home" && (
            <Home setCurrentPage={setCurrentPage} />
          )}

          {/* RESUME */}

          {currentPage === "resume" && (

            <ResumeAnalyzer
              setCurrentPage={setCurrentPage}
              targetRole={targetRole}
              setTargetRole={setTargetRole}
              handleFileUpload={handleFileUpload}
            />

          )}

          {/* DASHBOARD */}

          {currentPage === "dashboard" && (

            <ResumeDashboard
              setCurrentPage={setCurrentPage}
              uploadedFileName={uploadedFileName}
              targetRole={targetRole}
            />

          )}

          {/* LINKEDIN */}

          {currentPage === "linkedin" && (
            <LinkedinAssistant setCurrentPage={setCurrentPage} />
          )}

          {/* HEADLINE */}

          {currentPage === "headlineGenerator" && (
            <HeadlineGenerator setCurrentPage={setCurrentPage} />
          )}

          {/* ABOUT */}

          {currentPage === "aboutGenerator" && (
            <AboutGenerator setCurrentPage={setCurrentPage} />
          )}

          {/* IMPROVE */}

          {currentPage === "improveContent" && (
            <ImproveContent setCurrentPage={setCurrentPage} />
          )}

          {/* POSTS */}

          {currentPage === "postGenerator" && (
            <PostGenerator setCurrentPage={setCurrentPage} />
          )}

          {/* INTERVIEW */}

          {currentPage === "interview" && (
            <InterviewPrep setCurrentPage={setCurrentPage} />
          )}

          {/* LOADING */}

          {currentPage === "loading" && (

            <div className="flex flex-col items-center justify-center min-h-[80vh]">

              <div className="w-28 h-28 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

              <h2 className="mt-10 text-5xl font-bold text-cyan-300">
                Analyzing Resume
              </h2>

              <p className="mt-6 text-gray-400 text-xl">
                Comparing your resume with target role requirements.
              </p>

              <p className="mt-3 text-cyan-300">
                {uploadedFileName}
              </p>

            </div>

          )}

        </motion.div>

        {/* FLOATING CHATBOT */}

        <FloatingChatbot />

      </div>

    </div>

  )

}