// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./Home";
// import ProfilCard from "./Projet"; 
// import Reservation from "./Reservation";
// import Login from "./Login";
// import ListCars from "./ListCars";
// import DetailsCars from "./DetailsCars";
// import SignApp from "./SignApp";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<ProfilCard />} />
//         <Route path="/reservation" element={<Reservation />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/list" element={<ListCars />} />
//         <Route path="/details" element={<DetailsCars />} />
//         <Route path="/signup" element={<SignApp />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }




import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
