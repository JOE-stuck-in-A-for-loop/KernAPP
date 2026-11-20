import './App.css';
import LeftSide from './components/SideBars/LeftSide';'./components/Sidebars/LeftSide.jsx';
import TaskComoser from './components/TaskComposer/TaskComposer.jsx';

function App() {
  return (
    <div style={{display: 'flex', height:'100vh',}}>
        <LeftSide />
        <TaskComoser />
    </div>
  );
}

export default App;