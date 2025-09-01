import avatar from "@/assets/Ahmed Sabry squooshed.jpg";
import { socialLinks } from "@/utils/constants";
import { motion } from "framer-motion";

const PortfolioHeroV2 = () => {
  return (
    <section
      id="home"
      className=" min-h-screen bg-gradient-to-b px-4 py-10 snap-start flex items-center justify-center"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-10 pb-16">
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg relative ring-4 ring-primary/50 ring-offset-4 ring-offset-white">
          <img
            src={avatar}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="mt-6 flex items-center gap-2 text-sm sm:text-base font-medium bg-semiWhite text-primary px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
            Hey!
          </span>
          I&apos;m Ahmed Sabry
        </span>
        <h1 className="mt-8 text-2xl leading-tight sm:text-5xl md:text-6xl font-extrabold text-gray-900 otherFont">
          I build&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light otherFont2">
            Web Apps
          </span>
          &nbsp;that&nbsp;
          <br className="hidden sm:block" />
          actually work!
        </h1>
        <p className="mt-6 text-gray-500 max-w-2xl text-base sm:text-lg">
          Crafting beautiful, responsive designs with clean code and a passion
          for user experience.
        </p>
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
        {/* <a
          href="https://drive.google.com/file/d/1oIV3TafB7PvltBrofKdA1FFy-23s_3gf/view?usp=sharing"
          target="_blank"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          My Resume
        </a> */}
      </div>
    </section>
  );
};

export default PortfolioHeroV2;
