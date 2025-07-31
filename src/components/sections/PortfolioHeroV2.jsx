import React from "react";
import avatar from "../../assets/notionAvatar React Shirt.webp";

const PortfolioHeroV2 = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-150px)]  bg-gradient-to-b px-4 py-10"
    >
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-10 pb-16">
        {/* Avatar */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg border border-gray-200">
          <img
            src={avatar}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Greeting */}
        <span className="mt-6 flex items-center gap-2 text-sm sm:text-base font-medium bg-semiWhite text-primary px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">
            Hey!
          </span>
          I&apos;m Ahmed Sabry
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-2xl leading-tight sm:text-5xl md:text-6xl font-extrabold text-gray-900 otherFont">
          I build&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-light otherFont2">
            Web Apps
          </span>
          &nbsp;that&nbsp;
          <br className="hidden sm:block" />
          actually work!
        </h1>

        {/* Sub-heading */}
        <p className="mt-6 text-gray-500 max-w-2xl text-base sm:text-lg">
          Crafting beautiful, responsive designs with clean code and a passion
          for user experience.
        </p>
        {/* <p className="text-gray-500 max-w-2xl text-base sm:text-md mt-4">
          I transform ideas into interactive, pixel-perfect web applications.
        </p> */}

        {/* Call-to-action */}
        <a
          href="#"
          className="mt-10 inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
        >
          Contact me
        </a>
      </div>
    </section>
  );
};

export default PortfolioHeroV2;
