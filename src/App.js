import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import AllStarships from './pages/AllStarships/AllStarships';
import StarshipPage from './pages/StarshipsPage/StarshipPage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/"  element={<AllStarships />}/>
        <Route path="/starships"  element={<StarshipPage />}/>

      </Routes>
      
    </div>
  );
}

export default App;
