import logo from './logo.svg';
import { Route,Router,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    // <div className="App">
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    {/* <Home></Home> */}
    {/* <NavBar></NavBar> */}
    {/* <MobileNavbar></MobileNavbar> */}
    </>
  );
}

export default App;
