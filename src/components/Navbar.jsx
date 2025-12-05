import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="z-40 rounded-2xl shadow-lg mb-12 max-w-7xl mx-auto fixed top-8 right-0 left-0 bg-white  flex items-center justify-between px-6 lg:px-10 py-6">
      <Link
        to="home"
        smooth={true}
        duration={800}
        className="text-xs sm:text-sm font-extrabold uppercase bg-primary cursor-pointer text-white px-4 py-2 rounded-full shadow-lg"
      >
        Sabry
      </Link>
      <ul className="hidden md:flex gap-8 font-medium text-gray-600">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={800}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="bio"
            smooth={true}
            duration={800}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Bio
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={800}
            className="hover:text-gray-900 transition-colors cursor-pointer"
          >
            Skills
          </Link>
        </li>
      </ul>
      <a
        href="https://drive.google.com/file/d/1RdiZs1Ujl_4wql2rNQj3ZLnxnsjVZr6n/view?usp=sharing"
        target="_blank"
        className="text-xs sm:text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
      >
        My resume
      </a>
    </nav>
  );
}
