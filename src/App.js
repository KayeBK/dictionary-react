import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">Dictionary App</header>
      <main>
        <Dictionary defaultKeyword="forest" />
      </main>
      <footer className="App-footer">Developed by Kaye Kinser, open-sourced on <a href="https://github.com/KayeBK/dictionary-react" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://precious-alpaca-b2f149.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.</footer>
      </div>
    </div>
  );
}
