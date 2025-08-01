
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2020, Pomme: 3.2, Banane: 1.8, Orange: 2.5, Fraise: 5.0 },
  { year: 2021, Pomme: 3.4, Banane: 2.0, Orange: 2.7, Fraise: 5.2 },
  { year: 2022, Pomme: 3.6, Banane: 2.2, Orange: 2.8, Fraise: 5.5 },
  { year: 2023, Pomme: 4.0, Banane: 2.5, Orange: 3.0, Fraise: 6.0 },
  { year: 2024, Pomme: 4.2, Banane: 2.6, Orange: 3.2, Fraise: 6.5 },
  { year: 2025, Pomme: 4.5, Banane: 2.8, Orange: 3.3, Fraise: 7.0 }
];

function FruitLineChart({ fruit, lang }) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h2>{lang === 'fr' ? `Évolution du prix de ${fruit}` : `Price trend of ${fruit}`}</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={fruit} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FruitLineChart;
