// src/pages/History.js
import React from 'react';
import image from '../assets/FotoHistory.jpg';

const History = () => (
  <section id="history">
    <h2>Historia</h2>
    <div className="image-container">
      <img src={image} alt='' className="respons-img"/>  
    </div>
    <p>
      Os vikings foram um grupo de povos <span>escandinavos</span> que, 
      durante a chamada Era Viking (aproximadamente do final 
      do século VIII ao início do século XI), eram conhecidos 
      principalmente por suas habilidades de navegação, comércio, 
      e exploração, bem como por suas <span>incursões</span> e 
      conquistas em várias partes da Europa que atualmente compreende 
      três países: Noruega, Suécia e Dinamarca.
        <div className="subtext">
          <h3>Noruega:</h3> Os vikings noruegueses eram conhecidos por suas 
                viagens para o oeste, explorando e colonizando áreas como 
                as Ilhas Britânicas (especialmente a Escócia e a Irlanda), 
                Islândia, Groenlândia e até mesmo partes da América do Norte 
                (Vinland).
          <h3>Suécia:</h3> Os vikings suecos, frequentemente chamados de varegues, 
                dirigiram-se principalmente para o leste, navegando pelos rios 
                da Rússia e da Ucrânia até o Mar Cáspio e o Mar Negro, 
                estabelecendo rotas de comércio e cidades ao longo do 
                caminho.
          <h3>Dinamarca:</h3> Os vikings dinamarqueses eram particularmente 
                ativos no Mar do Norte e no Mar Báltico, invadindo e se 
                estabelecendo na Inglaterra, França (onde fundaram a <span>Normandia</span>), 
                e outras partes da Europa Continental.
        </div>
    </p>
  </section>
);

export default History;
