import React from 'react';
import './App.css';
import { Header } from './header';
import { Footer } from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
