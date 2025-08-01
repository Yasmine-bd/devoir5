
import React, { useState } from 'react';
import FruitLineChart from './components/FruitLineChart';
import FruitBarChart from './components/FruitBarChart';

const translations = {
  fr: {
    title: "Tableau de Bord - Prix des Fruits",
    selectFruit: "Sélectionnez un fruit",
    selectYear: "Sélectionnez une année",
    language: "Langue"
  },
  en: {
    title: "Dashboard - Fruit Prices",
    selectFruit: "Select a fruit",
    selectYear: "Select a year",
    language: "Language"
  }
};

function App() {
  const [lang, setLang] = useState("fr");
  const [fruit, setFruit] = useState("Pomme");
  const [year, setYear] = useState(2020);

  const t = translations[lang];

  return (
    <div className="container">
      <div className="lang-switch">
        <button onClick={() => setLang("fr")}>FR</button>
        <button onClick={() => setLang("en")}>EN</button>
      </div>
      <h1>{t.title}</h1>
      <div>
        <label>{t.selectFruit}:</label>
        <select onChange={(e) => setFruit(e.target.value)}>
          <option value="Pomme">Pomme</option>
          <option value="Banane">Banane</option>
          <option value="Orange">Orange</option>
          <option value="Fraise">Fraise</option>
        </select>
      </div>
      <div>
        <label>{t.selectYear}:</label>
        <select onChange={(e) => setYear(parseInt(e.target.value))}>
          {[2020, 2021, 2022, 2023, 2024, 2025].map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <FruitLineChart fruit={fruit} lang={lang} />
      <FruitBarChart year={year} lang={lang} />
    </div>
  );
}

export default App;
