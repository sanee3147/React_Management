import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MyMainContent';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;