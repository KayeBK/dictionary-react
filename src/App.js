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
      <footer className="App-footer">Developed by Kaye Kinser, open-sourced on GitHub and hosted on Netlify.</footer>
      </div>
    </div>
  );
}
