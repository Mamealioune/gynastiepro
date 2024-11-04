import React from 'react';
import Card from '../Components/Card';
import CardList from '../Components/CardList';
import HeroComponent from '../Components/HeroComponent';
import Intervalle from '../Components/Intervalle';
import Navbar from '../Components/Navbar';

const Accueil = () => {
    return (
        <div>
           <Navbar />
           <HeroComponent />
           <Intervalle number='1'>
    <div className="uppercase">
        Pourquoi avoir un bon plan de travail
    </div>
</Intervalle>


           <CardList />
           <Intervalle number='2'>
    <div className="uppercase">
        Hisser vous au sommet
    </div>
</Intervalle>
        
        </div>
    );
};

export default Accueil;