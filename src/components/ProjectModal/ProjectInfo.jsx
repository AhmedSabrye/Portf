import { FiExternalLink, FiGithub } from "react-icons/fi";

// Category color mapping (same as ProjectCard)
const categoryColors = {
  Fullstack: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/40",
  Frontend: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/40",
  "Chrome Extension": "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40",
  "Design to Code": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/40",
};

const defaultCategoryClass = "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-slate-600";

function getCategoryClass(category) {
  return categoryColors[category] || defaultCategoryClass;
}

export default function ProjectInfo({ project }) {
  return (
    <div className="flex flex-col justify-between h-full p-5 md:p-8 text-gray-900 dark:text-slate-100">
      {/* Top content */}
      <div className="flex-1 min-h-0">
        {/* Category + Year badges */}
        <div className="flex items-center gap-2.5 mb-4">
          {project.category && (
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryClass(project.category)}`}
            >
              {project.category}
            </span>
          )}
          {project.year && (
            <span className="text-xs font-semibold bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-3 py-1 rounded-full border border-gray-200 dark:border-slate-600">
              {project.year}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-3 otherFont leading-tight">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags — no heading, self-explanatory */}
        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action buttons — anchored to bottom */}
      <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-slate-700 shrink-0">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-xl font-semibold hover:bg-secondary transition-colors shadow-lg text-sm"
          >
            <FiExternalLink className="w-4 h-4" />
            Live Site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-slate-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-slate-500 transition-colors shadow-lg text-sm"
          >
            <FiGithub className="w-4 h-4" />
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
