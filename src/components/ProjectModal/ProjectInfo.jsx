import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectInfo({ project }) {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-2 md:mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">
          {project.title}
        </h2>
      </div>
      <p className="text-gray-600 mb-2 md:mb-6 md:text-lg leading-relaxed">
        {project.description}
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Technologies Used
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech?.map((tech) => (
            <span
              key={tech}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex  gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors shadow-lg"
        >
          <FiExternalLink className="w-5 h-5" />
          View Live Site
        </a>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg"
          >
            <FiGithub className="w-5 h-5" />
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
