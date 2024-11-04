import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-10">
      <div className="flex max-w-full h-24 bg-slate-50 items-center ">
        <div className="w-48 h-48 mt-24">
          <img src="../images/logo.png" alt="Logo" />
        </div>
        <div className="">
          <ul className="flex gap-4">
            <a href="#" className="text-xl font-josefin text-[#020A18] hover:text-[#8b96a0]">
              {" "}
              <li>Accueil</li>
            </a>
            <a href="#" className="text-xl font-josefin text-[#020A18] hover:text-[#010A12]">
              {" "}
              <li>Vidéos</li>
            </a>
            <a href="#" className="text-xl font-josefin text-[#020A18] hover:text-[#010A12]">
              <li>Communauté</li>
            </a>
            <a href="#" className="text-xl font-josefin text-[#020A18] hover:text-[#010A12]">
              <li>Ressources</li>
            </a>
            <a href="#" className="text-xl font-josefin text-[#020A18]">
              <li>À propos</li>
            </a>
          </ul>
        </div>
        <div className="absolute space-x-1 right-6">
          <button className="text-white bg-[#020A18] hover:bg-[#020A18] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center me-2 mb-2 dark:bg-[#020A18] dark:hover:bg-[#061a3b] dark:focus:ring-blue-800 font-josefin">
            Obtenir un plan de travail
          </button>
          <button className="text-white bg-[#020A18] hover:bg-[#020A18] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center me-2 mb-2 dark:bg-[#020A18] dark:hover:bg-[#061a3b] dark:focus:ring-blue-800 font-josefin">
            Rejoindre la communauté
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
