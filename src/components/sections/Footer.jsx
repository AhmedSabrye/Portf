import React from "react";

function Footer() {
  return (
    <footer className="text-center p-4 bg-primary/60 dark:bg-slate-800 dark:text-slate-200">
      <p>
        © 2025 Ahmed Sabry | Email: ahmedsabry.fr@gmail.com |{" "}
        <a
          href="https://github.com/AhmedSabrye"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
