
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2020, Pomme: 3.2, Banane: 1.8, Orange: 2.5, Fraise: 5.0 },
  { year: 2021, Pomme: 3.4, Banane: 2.0, Orange: 2.7, Fraise: 5.2 },
  { year: 2022, Pomme: 3.6, Banane: 2.2, Orange: 2.8, Fraise: 5.5 },
  { year: 2023, Pomme: 4.0, Banane: 2.5, Orange: 3.0, Fraise: 6.0 },
  { year: 2024, Pomme: 4.2, Banane: 2.6, Orange: 3.2, Fraise: 6.5 },
  { year: 2025, Pomme: 4.5, Banane: 2.8, Orange: 3.3, Fraise: 7.0 }
];

function FruitBarChart({ year, lang }) {
  const current = data.find(d => d.year === year);
  const chartData = [
    { name: 'Pomme', value: current.Pomme },
    { name: 'Banane', value: current.Banane },
    { name: 'Orange', value: current.Orange },
    { name: 'Fraise', value: current.Fraise },
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>{lang === 'fr' ? `Comparaison des prix en ${year}` : `Price comparison in ${year}`}</h2>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FruitBarChart;
