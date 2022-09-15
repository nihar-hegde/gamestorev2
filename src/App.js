import "./App.css";
import {Routes,Route} from 'react-router-dom';
import Home from "./components/Pages/Home";
import Navbar from "./components/Layout/Navbar";
import About from "./components/Pages/About";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

function App() {
  return (
    <div className="App" >
    <Navbar></Navbar>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    
    </Routes>
    
  </div>
  );
}

export default App;
