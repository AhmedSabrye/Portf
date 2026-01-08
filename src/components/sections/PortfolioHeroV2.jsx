import avatar from "@/assets/Ahmed Sabry squooshed.jpg";
import { socialLinks } from "@/utils/constants";
import { motion } from "framer-motion";
import RotatingText from "../rotating-text/RotatingText";

const PortfolioHeroV2 = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-semiWhite to-white dark:from-slate-900 dark:to-slate-800 px-4 py-10 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.33 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center px-6 lg:px-10 pb-16"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg relative ring-4 ring-primary/50 ring-offset-4 ring-offset-white dark:ring-offset-slate-800">
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="mt-6 flex items-center gap-2 text-sm sm:text-base font-medium bg-semiWhite dark:bg-slate-700 text-primary px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
              Hey!
            </span>
            I&apos;m Ahmed Sabry
          </span>
        </div>

        <div className="w-full max-w-4xl mt-8 text-center">
          <h1 className="text-2xl leading-tight sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-slate-100 handFont">
            I build frontend that{" "}
            <span className="text-primary inline-block sm:whitespace-nowrap min-w-[32ch]">
              <RotatingText
                texts={[
                  "feels fast, polished, and reliable.",
                  "is responsive, and production-ready.",
                  "scales cleanly and stays fast over time.",
                ]}
                rotationInterval={4000}
                splitBy="words"
              />
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mt-6 text-gray-500 dark:text-slate-300 max-w-2xl text-base sm:text-lg">
            Crafting beautiful, responsive designs with clean code and a passion
            for user experience.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-500 bg-primary text-white"
            >
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1la7Q1R9ogRweawib7L-CV2N1m94-SMKl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-500 ring-1 ring-gray-200 dark:ring-slate-600 text-gray-700 dark:text-slate-200 hover:ring-primary hover:text-primary"
            >
              Resume
            </a>
          </div>
          <div className="social flex items-center gap-4 mt-12">
            {socialLinks.map((link) => (
              <motion.a
                whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
                whileTap={{ scale: 0.9, color: "var(--color-primary)" }}
                key={link.name}
                className="text-2xl "
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        {/* <a
          href="https://drive.google.com/file/d/1oIV3TafB7PvltBrofKdA1FFy-23s_3gf/view?usp=sharing"
          target="_blank"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          My Resume
        </a> */}
      </motion.div>
    </section>
  );
};

export default PortfolioHeroV2;
