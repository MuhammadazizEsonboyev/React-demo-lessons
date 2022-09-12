import { BrowserRouter as Router, Routes,  Route, BrowserRouter   } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';
import Section from './components/Section/Section';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router>
          <Navbar />
          <Routes>

            <Route path='/' element={Header} />
            <Route path='/section' element={Section} />

          </Routes>
        </Router>
      </BrowserRouter>
    </>
  );
}
export default App;
