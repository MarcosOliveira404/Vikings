import React from "react";
import image from '../assets/FotoTecnologia.jpeg';

const Tecnologia = () => (
    <section id="tecnologia-vikings">
    <h2>Artes e Tecnologia</h2>
    <div className="image-container">
      <img src={image} alt='' className="respons-img"/>  
    </div>
    <p>
        A arte viking era rica e detalhada, com ênfase em entalhes
        em madeira, metalurgia e tecelagem. Eles criavam joias, armas
        navios ornamentados com complexos padrões entrelaçados e figuras
        mitológicas. A literatura viking era transmitida <span>oralmente</span> através
        de sagas e poemas épicos, que narravam as aventuras de heróis,
        deuses e eventos históricos. <span>As sagas islandesas</span> são algumas
        das mais conhecidas e detalhadas fontes sobre a vida e a cultura
        viking.
    </p>

    <p>
        Os vikings eram navegadores excepcionais, construindo navios
        onhecidos como <span>longships</span>, que eram rápidos, flexíveis e capazes
        de navegar tanto em alto-mar quanto em rios rasos. Eles usavam
        uma combinação de habilidades de observação, conhecimento dos
        ventos e das correntes, e ferramentas como o "<span>sol de sombra</span>"
        para se orientar durante suas longas viagens.
    </p>

  </section>
);

export default Tecnologia;