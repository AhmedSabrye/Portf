import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiCalendar } from "react-icons/fi";
import { slides } from "@/utils/slidesData";

const SlidesSection = () => {
    const openSlide = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section id="slides" className="px-4 sm:px-6 pt-24 pb-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.33 }}
                transition={{ duration: 0.7 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-10">
                    <span className="inline-block text-xs font-medium bg-white dark:bg-slate-800 text-primary px-3 py-1.5 rounded-full shadow-sm mb-4">
                        Presentations
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-slate-100 otherFont mb-4">
                        Slides &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light otherFont2">
                            Talks
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
                        Interactive presentations and workshop materials I've created for
                        various events and communities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {slides.map((slide) => (
                        <article
                            key={slide.id}
                            className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 hover:border-primary/30 cursor-pointer hover:-translate-y-1.5"
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
                                    <span className="flex items-center gap-2 bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                                        <FiExternalLink className="w-3 h-3" />
                                        Open Slides
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 group-hover:text-primary transition-colors otherFont">
                                        {slide.title}
                                    </h3>
                                    {slide.date && (
                                        <span className="flex items-center gap-1 text-xs font-semibold text-gray-400 dark:text-slate-400">
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
                                    <span className="text-primary">Explore →</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default SlidesSection;
