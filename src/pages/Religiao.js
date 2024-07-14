import React from "react";
import image from '../assets/FotoReligiao.jpg';

const Religiao = () =>(
    <section id="Religiao-vikings">
    <h2>Religião e Mitologia</h2>
    <div className="image-container">
      <img src={image} alt='' className="respons-img"/>  
    </div>
    <p>
        A religião viking era politeísta e profundamente enraizada na 
        mitologia nórdica. Alguns dos deuses mais importantes incluíam:
            <h3>Odin:</h3> Odin é uma das divindades mais importantes e complexas 
        da mitologia nórdica. Ele é frequentemente descrito como o 
        deus da sabedoria, da guerra, da morte e da magia. Odin é 
        uma figura multifacetada que desempenha um papel central 
        nas histórias e crenças dos povos escandinavos antigos.

        <div className="subtext">
            <h3>Thor:</h3>
            Thor é uma das divindades mais importantes e populares da
            mitologia nórdica. Ele é o deus do trovão, das tempestades,
            da força e da proteção. Filho de Odin, o principal deus do
            panteão nórdico, e de Jörð, a personificação da Terra, Thor
            é conhecido por sua bravura, seu senso de justiça e seu
            papel como protetor dos deuses e da humanidade contra as
            forças do mal, especialmente os gigantes.

            <h3>Freyja:</h3> Freyja é uma das deusas mais importantes e veneradas
            da mitologia nórdica. Ela é a deusa do amor, da beleza, da
            fertilidade, da guerra, da seiðr (magia) e da morte. Freyja
            pertence ao grupo dos Vanir, uma das duas principais famílias
            de deuses nórdicos, a outra sendo os Æsir.

            <h3>Loki:</h3> Loki é uma das figuras mais complexas e enigmáticas da
            mitologia nórdica. Ele é frequentemente descrito como um deus
            trapaceiro ou trickster, conhecido por sua astúcia, capacidade
            de mudar de forma e comportamento imprevisível. Loki desempenha
            papéis variados nas histórias mitológicas, às vezes ajudando
            os deuses, mas frequentemente causando problemas e caos.
        </div>

        <h3>Paraiso</h3>     
        Valhalla é um conceito central na mitologia nórdica, 
        referindo-se ao majestoso salão de Odin localizado em Asgard, 
        o reino dos deuses Æsir. O nome "Valhalla" significa "Salão 
        dos Mortos" ou <span>"Salão dos Caídos"</span>. Este lugar é reservado 
        para os guerreiros que morreram bravamente em batalha e 
        foram escolhidos pelas Valquírias para se juntar a Odin.
    </p>
  </section>
);

export default Religiao;