import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Category color mapping
const categoryColors = {
    Fullstack: {
        bg: "bg-orange-100 dark:bg-orange-900/30",
        text: "text-orange-700 dark:text-orange-300",
        border: "border-orange-200 dark:border-orange-800/40",
        dot: "bg-orange-500",
    },
    Frontend: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-700 dark:text-blue-300",
        border: "border-blue-200 dark:border-blue-800/40",
        dot: "bg-blue-500",
    },
    "Chrome Extension": {
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        text: "text-emerald-700 dark:text-emerald-300",
        border: "border-emerald-200 dark:border-emerald-800/40",
        dot: "bg-emerald-500",
    },
    "Design to Code": {
        bg: "bg-purple-100 dark:bg-purple-900/30",
        text: "text-purple-700 dark:text-purple-300",
        border: "border-purple-200 dark:border-purple-800/40",
        dot: "bg-purple-500",
    },
};

const defaultCategoryColor = {
    bg: "bg-gray-100 dark:bg-slate-700",
    text: "text-gray-700 dark:text-slate-300",
    border: "border-gray-200 dark:border-slate-600",
    dot: "bg-gray-500",
};

function getCategoryColor(category) {
    return categoryColors[category] || defaultCategoryColor;
}

function truncateUrl(url) {
    if (!url) return "";
    try {
        const u = new URL(url);
        return u.hostname + (u.pathname !== "/" ? u.pathname : "");
    } catch {
        return url;
    }
}

const ProjectCard = ({ project, onClick, motionProps = {} }) => {
    const catColor = getCategoryColor(project.category);
    const MotionOrDiv = motionProps.as || "article";

    return (
        <MotionOrDiv
            {...(motionProps.rest || {})}
            className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-primary/30 cursor-pointer hover:-translate-y-1.5"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    onClick();
                }
            }}
        >
            {/* Browser Chrome Header */}
            <div className="flex items-center gap-2 px-3.5 py-2 bg-gray-100 dark:bg-slate-700 border-b border-gray-200 dark:border-slate-600">
                {/* Traffic light dots */}
                <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                {/* Address bar */}
                <div className="flex-1 bg-white dark:bg-slate-600 rounded-md px-3 py-1 min-w-0">
                    <p className="text-[11px] text-gray-400 dark:text-slate-300 truncate font-mono">
                        {truncateUrl(project.link)}
                    </p>
                </div>
            </div>

            {/* Image Area — taller (h-52) */}
            <div className="relative h-52 overflow-hidden bg-gray-50 dark:bg-slate-700/50">
                <motion.div
                    layoutId={`project-img-${project.id}`}
                    className="w-full h-full object-cover"
                    transition={{ type: "spring", stiffness: 280, damping: 28 }}
                >
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges: Featured + Category */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {project.featured && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-light text-white px-2.5 py-1 rounded-full shadow-sm">
                            Featured
                        </span>
                    )}
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5">
                {/* Title row with action icons */}
                <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 group-hover:text-primary transition-colors otherFont leading-snug">
                        {project.title}
                    </h3>
                    {/* Persistent action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                                title="Live Site"
                            >
                                <FiExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-gray-500 dark:text-slate-300 hover:bg-gray-900 dark:hover:bg-slate-500 hover:text-white transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                                title="Source Code"
                            >
                                <FiGithub className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                </p>

                {/* Category badge + Year */}
                <div className="flex items-center gap-2 mb-3">
                    {project.category && (
                        <span
                            className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${catColor.bg} ${catColor.text} ${catColor.border}`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full ${catColor.dot}`} />
                            {project.category}
                        </span>
                    )}
                    {project.year && (
                        <span className="text-[11px] font-medium text-gray-400 dark:text-slate-400">
                            {project.year}
                        </span>
                    )}
                </div>

                {/* Tech Tags — dot-prefixed style */}
                {project.tech?.length > 0 && (
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        {project.tech.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-slate-400 font-medium"
                            >
                                <span className="w-1 h-1 rounded-full bg-primary/60" />
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 4 && (
                            <span className="text-xs text-gray-400 dark:text-slate-500 font-medium">
                                +{project.tech.length - 4}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </MotionOrDiv>
    );
};

export default ProjectCard;
