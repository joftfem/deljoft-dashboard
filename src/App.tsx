import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import './App.css';

function App() {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">🦈 Joft Shark Dashboard</h1>
      <p className="mb-2">Monitor token scans, shark alerts, and trade logs here.</p>

      <div className="mt-6 bg-white shadow-lg rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-2">📈 Latest Trades</h2>
        {/* TODO: Replace with live trade table from Supabase */}
        <p>Loading trades...</p>
      </div>
    </div>
  );
}

export default App;
