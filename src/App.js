import React from 'react';
import Exchanger from './components/Exchanger/Exchanger';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './sass/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Exchanger />
      <Footer />
    </div>
  );
}

export default App;
