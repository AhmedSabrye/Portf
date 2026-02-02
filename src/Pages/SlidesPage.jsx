import React from "react";
import { motion } from "framer-motion";
import { slides } from "../utils/slidesData";
import { FiExternalLink, FiCalendar, FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const SlidesPage = () => {
    const openSlide = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        hover: {
            y: -6,
            transition: { duration: 0.25 },
        },
    };

    return (
        <div className="min-h-screen bg-semiWhite dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.header
                    className="pt-10 pb-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-between mb-8"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-600 dark:text-slate-300 hover:text-primary transition-colors"
                        >
                            <FiArrowLeft className="w-4 h-4" />
                            <span className="text-sm font-medium">Back to Home</span>
                        </Link>
                        <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-primary bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full shadow-sm">
                            Presentations
                        </span>
                    </motion.div>

                    <motion.div variants={itemVariants} className="text-center">
                        <span className="inline-block text-xs font-medium bg-white dark:bg-slate-800 text-primary px-3 py-1.5 rounded-full shadow-sm mb-4">
                            Presentations
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-slate-100 otherFont mb-4">
                            Slides & Talks with a Focus on&nbsp;
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light otherFont2">
                                Knowledge Sharing
                            </span>
                        </h1>
                        <p className="text-gray-600 dark:text-slate-300 max-w-3xl mx-auto text-sm sm:text-base">
                            Interactive presentations and workshop materials I've created for
                            various events, meetups, and communities. Click any card to open
                            the full presentation.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-wide text-gray-400 dark:text-slate-400"
                    >
                        <span className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                            {slides.length} Presentation{slides.length !== 1 ? "s" : ""}
                        </span>
                        <span className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                            Interactive Slides
                        </span>
                        <span className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm">
                            Community Events
                        </span>
                    </motion.div>
                </motion.header>

                <motion.div
                    layout
                    className="pb-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {slides.map((slide) => (
                            <motion.article
                                layoutId={`slide-${slide.id}`}
                                key={slide.id}
                                variants={cardVariants}
                                whileHover="hover"
                                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-primary/30 cursor-pointer"
                                onClick={() => openSlide(slide.url)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        openSlide(slide.url);
                                    }
                                }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={slide.thumbnail}
                                        alt={slide.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {slide.event && (
                                            <span className="text-xs font-semibold bg-gradient-to-r from-primary to-light text-white px-2.5 py-1 rounded-full">
                                                {slide.event}
                                            </span>
                                        )}
                                    </div>

                                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <motion.span
                                            className="flex items-center gap-2 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiExternalLink className="w-3 h-3" />
                                            Open Slides
                                        </motion.span>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 group-hover:text-primary transition-colors otherFont">
                                            {slide.title}
                                        </h3>
                                        {slide.date && (
                                            <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 dark:text-slate-400 whitespace-nowrap">
                                                <FiCalendar className="w-3 h-3" />
                                                {slide.date}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                                        {slide.description}
                                    </p>

                                    {slide.tags?.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {slide.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-2 py-1 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-slate-400">
                                        <span>Click to view</span>
                                        <span className="text-primary">Open Presentation →</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </motion.div>

                <motion.footer
                    className="text-center pb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-slate-100">
                        Want me to speak at your event?
                    </h2>
                    <p className="text-gray-500 dark:text-slate-300 mb-6 max-w-2xl mx-auto text-sm">
                        I'm always excited to share knowledge at meetups, conferences, and
                        workshops. Let's connect!
                    </p>
                    <motion.a
                        href="mailto:ahmedsabry.fr@gmail.com"
                        className="inline-flex items-center justify-center bg-gray-900 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.footer>
            </div>
        </div>
    );
};

export default SlidesPage;
