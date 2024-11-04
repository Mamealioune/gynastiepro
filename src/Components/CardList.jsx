import React from 'react';
import { AiOutlineLineChart } from "react-icons/ai"; // Importez vos icônes nécessaires
import { RiFileList3Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import Card from './Card';


const cardData = [
    {
      title: "Optimisation des Résultats",
      description:
        "Un plan de travail bien établi peut améliorer vos performances, vous aidant à atteindre vos objectifs plus rapidement et efficacement.",
      icon: "lineChart",
    },
    {
      title: "Clarté dans l'Organisation",
      description:
        "Avoir un plan de travail structuré permet une meilleure organisation de vos tâches et priorités, réduisant ainsi le stress et la confusion.",
      icon: "fileList",
    },

    {
        title: "Augmentation de la Productivité",
        description:
          "Un bon plan de travail favorise une gestion du temps plus efficace, maximisant votre productivité pour des résultats de qualité.",
        icon: "fileList",
      },
      {
        title: "Évitement des Dérives",
        description:
          "En suivant un plan, vous réduisez les risques de dérapages ou de retards dans vos projets, vous permettant de rester sur la bonne voie.",
        icon: "fileList",
      },
      {
        title: "Adaptation aux Changements",
        description:
          "Un bon plan de travail offre la flexibilité nécessaire pour ajuster vos stratégies en fonction des changements ou des imprévus.",
        icon: "fileList",
      },
      {
        title: "Maintien de la Motivation",
        description:
          "Avoir un plan clair vous motive en vous montrant votre progression et vous encourage à rester concentré sur vos objectifs.",
        icon: "fileList",
      },
  ];
  
const CardList = () => {
    return (
        <div>
            <Card data={cardData} />

        </div>
    );
};

export default CardList;