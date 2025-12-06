'use client';

import { projects } from "@/constants";
import { useTheme } from '@/contexts/ThemeContext';

export default function Projects() {
  const { theme } = useTheme();

  const getStatusColor = (status) => {
    if (theme === 'dark') {
      switch(status) {
        case "Завершен": return "#10B981"; 
        case "В процессе": return "#F59E0B"; 
        case "Планируется": return "#3B82F6"; 
        case "Приостановлен": return "#EF4444"; 
        case "Архив": return "#6B7280"; 
        default: return "#6B7280";
      }
    } else {
      switch(status) {
        case "Завершен": return "#22c55e"; 
        case "В процессе": return "#f59e0b"; 
        case "Планируется": return "#2563eb"; 
        case "Приостановлен": return "#ef4444"; 
        case "Архив": return "#9ca3af"; 
        default: return "#9ca3af";
      }
    }
  };

  return (
    <section className="projects-section text-center mb-24">
      <span
        className="uppercase font-bold text-4xl mb-12 text-center block"

      >
        projects
      </span>

      <div className="projects-list-container mt-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project w-full max-w-[390px] rounded-lg overflow-hidden flex flex-col transition duration-300 relative"
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--foreground)'
            }}
          >
            <div className="project-image w-full h-[235px] flex-shrink-0 relative">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div
                className="text-white text-xs px-2 py-1 rounded-full absolute top-3 right-3"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status}
              </div>
            </div>
            <div className="project-info p-[14px_23px] flex-grow flex items-center justify-between">
              <div className="project-info--text text-left flex-1">
                <span
                  className="project-description text-sm block mb-1"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {project.description}
                </span>
                <h2
                  className="project-title text-xl font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  {project.title}
                </h2>
                <div className="project-technologies mt-2 flex flex-wrap gap-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--secondary-foreground)'
                      }}
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
                  target="blank"
                  style={{ color: 'var(--primary)' }}
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