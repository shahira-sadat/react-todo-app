import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './functionBased/components/Navbar';
import TodoContainer from './functionBased/components/TodoContainer';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
