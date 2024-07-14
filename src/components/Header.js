// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="header">
    <main className="contenNav">
    <h1>Vikings</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#history">História</a>
        <a href="#culture">Cultura</a>
        <a href="#Religiao-vikings">Religião</a>
        <a href="#tecnologia-vikings"> Tecnologias </a>
      </nav>
    <h2>Links</h2>
      <nav>
      <a href="https://github.com/MarcosOliveira404" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/marcos-oliveira-9a409925a/" target="_blank">LinkDin</a>
      </nav>
    </main>
  </header>
);

export default Header;
