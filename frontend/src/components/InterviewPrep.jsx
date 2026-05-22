import { useState } from "react"

export default function InterviewPrep({ setCurrentPage }) {

  const [role, setRole] = useState("")
  const [type, setType] = useState("Technical")

  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false)

  const generateQuestions = () => {

    setLoading(true)

    setTimeout(() => {

      if (type === "Technical") {

        setQuestions([
          {
            question: "Explain the difference between React state and props.",

            structure:
              "Define state and props separately, explain their usage, then compare them clearly.",

            answer:
              "State is used to manage dynamic data inside a component, while props are used to pass data between components. State is mutable whereas props are read-only.",

            tips: [
              "Keep explanations concise",
              "Use practical examples",
              "Avoid overly complex terminology"
            ]
          },

          {
            question: "What are React Hooks?",

            structure:
              "Define hooks, explain why they are used, and mention common hooks.",

            answer:
              "React Hooks allow functional components to use state and lifecycle features. Common hooks include useState and useEffect.",

            tips: [
              "Mention real-world usage",
              "Explain confidently",
              "Focus on clarity"
            ]
          }
        ])

      }

      else if (type === "HR") {

        setQuestions([
          {
            question: "Tell me about yourself.",

            structure:
              "Start with your background, mention skills/projects, then explain your goals.",

            answer:
              "I’m a Computer Science student specializing in Data Science with strong interests in AI and frontend development. I enjoy building projects and continuously learning modern technologies.",

            tips: [
              "Keep the answer under two minutes",
              "Focus on professional strengths",
              "Maintain confident communication"
            ]
          }
        ])

      }

      else {

        setQuestions([
          {
            question: "Describe a challenge you faced.",

            structure:
              "Use the STAR method: Situation, Task, Action, and Result.",

            answer:
              "During a project deadline, our team faced integration issues. I coordinated tasks, debugged critical problems, and ensured timely project completion.",

            tips: [
              "Use authentic examples",
              "Highlight problem-solving ability",
              "Keep the response structured"
            ]
          }
        ])

      }

      setLoading(false)

    }, 2500)

  }

  return (

    <div className="max-w-6xl mx-auto">

      {/* BACK */}

      <button
        onClick={() => setCurrentPage("home")}
        className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-all"
      >
        Back
      </button>

      {/* HEADER */}

      <h1 className="mt-10 text-5xl font-bold text-fuchsia-300">
        AI Interview Coach
      </h1>

      <p className="mt-5 text-xl text-gray-400">
        Practice technical, HR, and behavioral interview questions with AI-guided preparation.
      </p>

      {/* FORM */}

      <div className="mt-12 space-y-8">

        {/* ROLE */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Target Role
          </p>

          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Example: Frontend Developer"
            className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-fuchsia-400"
          />

        </div>

        {/* TYPE */}

        <div>

          <p className="text-xl mb-4 text-gray-300">
            Interview Type
          </p>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-black text-white border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-fuchsia-400"
          >

            <option value="Technical">Technical</option>
            <option value="HR">HR</option>
            <option value="Behavioral">Behavioral</option>

          </select>

        </div>

        {/* BUTTON */}

        <button
          onClick={generateQuestions}
          className="px-10 py-5 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-rose-500 hover:scale-105 transition-all text-lg font-semibold"
        >
          Generate Interview Guidance
        </button>

      </div>

      {/* LOADING */}

      {loading && (

        <div className="mt-14 flex flex-col items-center">

          <div className="w-20 h-20 border-4 border-fuchsia-400 border-t-transparent rounded-full animate-spin"></div>

          <p className="mt-6 text-fuchsia-300 text-2xl font-semibold">
            Generating Interview Guidance
          </p>

        </div>

      )}

      {/* RESULTS */}

      {!loading && questions.length > 0 && (

        <div className="mt-16 space-y-10">

          {questions.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-10"
            >

              <h2 className="text-3xl font-bold text-fuchsia-300">
                Question {index + 1}
              </h2>

              <p className="mt-5 text-2xl text-white leading-relaxed">
                {item.question}
              </p>

              {/* STRUCTURE */}

              <div className="mt-10">

                <h3 className="text-2xl font-semibold text-cyan-300">
                  Answer Structure
                </h3>

                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  {item.structure}
                </p>

              </div>

              {/* ANSWER */}

              <div className="mt-10">

                <h3 className="text-2xl font-semibold text-green-300">
                  Sample Answer
                </h3>

                <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                  {item.answer}
                </p>

              </div>

              {/* TIPS */}

              <div className="mt-10">

                <h3 className="text-2xl font-semibold text-pink-300">
                  Interview Tips
                </h3>

                <div className="mt-5 space-y-4">

                  {item.tips.map((tip, i) => (

                    <div
                      key={i}
                      className="rounded-2xl bg-white/5 border border-white/10 p-4 text-gray-300"
                    >
                      {tip}
                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}