// src/App.js
import React from 'react';
import './css/App.css';
import './css/img.css';

{/* Importações de Paginas*/}
import Header from './components/Header';
import Home from './pages/Home';
import History from './pages/History';
import Culture from './pages/Culture';
import Religiao from './pages/Religiao';
import Tecnologia from './pages/Tecnologia';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <main className='bodyApp'>
      <Home />
      <History />
      <Culture />
      <Religiao />
      <Tecnologia/>
      <Footer/>
    </main>
  </div>
);

export default App;
