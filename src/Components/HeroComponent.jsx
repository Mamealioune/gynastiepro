import React from "react";
import { IoLogoYoutube } from "react-icons/io";

const HeroComponent = () => {
  return (
    <div className="relative h-[986px] shadow-lg mt-24 ">
      <h1 className="text-slate-50 absolute left-4 top-32 md:left-20 md:top-96 md:text-4xl font-josefin text-justify md:w-[60%]">
        Découvrez une nouvelle façon d'explorer votre passion pour la
        gymnastique : des conseils experts, des séances d'entraînement
        personnalisées et une communauté dynamique vous attendent pour vous
        aider à repousser vos limites et atteindre de nouveaux sommets.
      </h1>
      <span className="absolute left-4 top-32 md:left-20 md:top-[550px] md:text-4xl">
        <button className="relative overflow-hidden text-white hover:text-[#020A18]  hover:bg-slate-50 bg-[#020A18] border-4 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-4 text-center me-2 mb-2 dark:bg-[#020A18] dark:focus:ring-blue-800 font-josefin transition duration-300 ease-in-out transform hover:scale-105">
          <span className="relative">
            Rejoindre la communauté
            <span className="absolute top-0 left-0 w-full h-full bg-[#020A18] transition duration-300 ease-in-out opacity-0 before:block before:absolute before:top-[-50%]  before:left-[-50%] before:w-[200%] before:h-[200%] before:rounded-full before:bg-blue-500 before:transform before:scale-0 group-hover:scale-150"></span>
            <span className="absolute top-0 left-0 w-full h-full  transition duration-300 ease-in-out text-[#61dafb] opacity-0">
              Rejoindre la communauté
            </span>
          </span>
        </button>
      </span>
      <span className="absolute left-4 top-32 md:left-80 md:top-[555px] ">
        <IoLogoYoutube className="w-14 h-14 fill-slate-50 hover:fill-red-700 hover:scale-110 cursor-pointer transition-all ease-in-out duration-300" />
      </span>
      <span className="absolute left-4 top-32 md:left-24 md:top-[650px]">
        <hr className="w-40 rounded-full  border-[4px] border-white " />
      </span>
      <img
        src="../images/background1-removebg-preview.png"
        alt="Hero Image"
        className="absolute right-4 w-[1050px] h-[1050px] top-20 md:top-0 md:right-0 opacity-50 -z-50  "
      />
      <img
        src="../images/HeroImage.png"
        alt="Hero Image"
        className="absolute right-4 top-20 md:top-0 md:right-0  "
      />

      <p className="text-slate-50 absolute left-4 top-32 md:left-20 md:top-[700px] md:text-2xl font-josefin text-justify md:w-[40%]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sed
        consectetur cum sint dolores autem sunt rem quo dolorem cumque.
      </p>
    </div>
  );
};

export default HeroComponent;
