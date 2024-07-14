// src/pages/Home.js
import React from 'react';
import image from '../assets/FotoHome.jpg';

const Home = () => (
  <section id="home">
    <h2>Os Vikings</h2>
    <div className="image-container">
      <img src={image} alt='' className="respons-img"/>  
    </div>
    <p>
      Os vikings têm uma presença marcante e diversificada na 
      cultura popular moderna. Sua imagem é moldada por uma 
      mistura de fatos históricos, mitologia nórdica e 
      interpretações contemporâneas. A seguir, destacam-se 
      as principais formas como os vikings são vistos na 
      cultura popular:
      <div className="subtext">
        <h3>Séries de TV:</h3>
        "Vikings" (2013-2020): Esta série popular do History 
        Channel retrata a vida de Ragnar Lothbrok e seus filhos, 
        misturando eventos históricos com lendas. A série ajudou 
        a popularizar os vikings, apresentando-os como guerreiros 
        destemidos e exploradores intrépidos.

        <h3>Filmes:</h3>
        "How to Train Your Dragon" (2010): Esta animação populariza 
        uma versão mais fantasiosa e amigável dos vikings, mostrando-os 
        em uma sociedade que convive com dragões.

        <h3>Jogos:</h3>
        "Assassin's Creed Valhalla" (2020): Este jogo popular permite 
        aos jogadores explorar a vida viking na Inglaterra, misturando 
        fatos históricos com elementos fictícios.
      </div>
    </p>
  </section>
);

export default Home;
