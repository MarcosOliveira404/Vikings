// src/pages/Culture.js
import React from 'react';
import image from '../assets/FotoCultura.jpg'

const Culture = () => (
  <section id="culture">
    <h2>Cultura</h2>
    <div className="image-container">
      <img src={image} alt='' className="respons-img"/>  
    </div>
    <p>
        A arte viking era extremamente elaborada. Navegadores e guerreiros 
      ciosos, os Vikings costumavam fazer relevos com motivos vegetais e 
      de animais no casco dos seus barcos. As armas e capacetes também 
      eram ricamente esculpidos com desenhos que tanto significavam o 
      status social como proteção.
      A cultura e a sociedade dos vikings eram ricas e complexas, 
      refletindo suas origens escandinavas e seu modo de vida marítimo 
      e guerreiro. A seguir, apresento uma visão geral detalhada desses 
      aspectos:
        <div className="subtext">
          <h3>Rei (Konungr):</h3> O líder supremo de um reino ou tribo, responsável 
                pela proteção e bem-estar de seu povo.
          <h3>Jarls:</h3> Nobres que governavam grandes áreas de terra e tinham 
                poder militar e econômico significativo. Eles eram vassalos dos 
                reis e frequentemente lideravam expedições de guerra.
          <h3>Karls:</h3> Homens livres que formavam a maioria da população viking. 
                Eles eram agricultores, artesãos, comerciantes e guerreiros, 
                possuindo terras e propriedades.
          Thralls: Escravos capturados em batalhas ou comprados em mercados. 
                Eles realizavam trabalhos domésticos e manuais, mas podiam, 
                eventualmente, comprar sua liberdade.
        </div>

    </p>
  </section>
);

export default Culture;
