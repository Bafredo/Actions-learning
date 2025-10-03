import { useEffect, useState } from 'react'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const apiHost = import.meta.env.VITE_API_HOST
    

  fetch(`${apiHost}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects")
        return res.json()
      })
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-[#0d0d10] text-gray-200 flex flex-col md:flex-row px-8 py-10 gap-8">
      {/* Left Section */}
      <div className="md:w-1/3 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-100">Fredrick Muyoma</h1>
          <p className="text-lg mt-2 text-gray-400">Software Engineer</p>
          <p className="text-sm mt-4 text-gray-500 leading-relaxed">
            Building scalable and industrial-level digital solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-blue-400">X</a>
            <a href="#" className="hover:text-blue-400">in</a>
            <a href="#" className="hover:text-blue-400">gh</a>
            <a href="#" className="hover:text-blue-400">ig</a>
            <a href="#" className="hover:text-blue-400">dc</a>
          </div>

          <button className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm">
            Hire me
          </button>
        </div>

        <div className="mt-10 text-xs text-gray-500">
          <p>Phone: +254790780704</p>
          <p>Email: muyomafredrick@gmail.com</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-2/3 bg-[#0a0a16] rounded-2xl p-8 shadow-lg">
        {/* About */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-100 mb-2">About</h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            My software development stems from its blend of creativity, problem-solving and
            potential for positive impact. It's more than just writing code; it's about crafting
            solutions that empower communities.
          </p>
          <a href="#" className="text-blue-400 hover:underline text-sm block mt-2">
            Read CV
          </a>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-bold text-gray-100 mb-4">Projects</h2>

          {loading && <p className="text-gray-400">Loading projects...</p>}
          {error && <p className="text-red-400">{error}</p>}

          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#111122] rounded-xl p-6 border border-gray-800"
              >
                <p className="text-sm text-gray-500">{project.date}</p>
                <h3 className="text-lg font-semibold mt-1">
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-400 hover:underline"
                    >
                      ↗
                    </a>
                  )}
                </h3>

                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-36 rounded-lg border border-gray-700"
                    />
                  )}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
