import Quiz from './Quiz';
import Randing from './Randing';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
      <main>
        <Routes>
          <Route path='/' element={<Randing />} />
          <Route path='quiz' element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
