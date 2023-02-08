import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';

function App() {
  return (
    <div className="App bg-yellow-50 w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
