import './App.css';
import { useState } from 'react';
import { useRef } from 'react';
import {Routes,Route } from 'react-router'
import LeftSide from './components/SideBars/LeftSide';'./components/Sidebars/LeftSide.jsx';
import TaskComposer from './components/TaskComposer/TaskComposer.jsx';
import Settings from './pages/Settings.jsx';

function App() {
    const settingsRef = useRef(null);

  return (
    <div style={{display: 'flex', height:'100vh',}}>
        <LeftSide onOpenSettings={() => settingsRef.current.showModal()} />
        <Settings dialogRef={settingsRef} />
        <TaskComposer />
    </div>
  );
}

export default App;