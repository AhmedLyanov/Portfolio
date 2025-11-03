import { projects } from "@/constants";

const statusProject = {
  "Завершен": "bg-green-500",
  "В процессе": "bg-yellow-500", 
  "Планируется": "bg-blue-500",
  "Приостановлен": "bg-red-500",
  "Архив": "bg-gray-500"
};

export default function Projects() {
  return (
    <section className="projects-section text-center mb-24">
      <span className="uppercase font-bold text-4xl bg-gradient-to-b from-[#FF8660] to-[#D54910] bg-clip-text text-transparent">
        projects
      </span>

      <div className="projects-list-container mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project bg-[#2A2A2A] w-full max-w-[390px] rounded-lg overflow-hidden flex flex-col transition duration-300 relative"
          >
            <div className="project-image w-full h-[235px] flex-shrink-0 relative">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div
                className={`absolute top-3 right-3 ${
                  statusProject[project.status] || "bg-gray-500"
                } text-white text-xs px-2 py-1 rounded-full`}
              >
                {project.status}
              </div>
            </div>
            <div className="project-info p-[14px_23px] flex-grow flex items-center justify-between">
              <div className="project-info--text text-left flex-1">
                <span className="project-description text-sm text-gray-400 block mb-1">
                  {project.description}
                </span>
                <h2 className="project-title text-white text-xl font-bold">
                  {project.title}
                </h2>
                <div className="project-technologies mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-info--link ml-4">
                <a
                  href={project.link}
                  className="block hover:scale-110 transition-transform"
                >
                  <img
                    src="/link-arrow.svg"
                    width={15}
                    height={14}
                    alt="Visit project"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}