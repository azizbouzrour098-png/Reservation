import { Routes, Route } from 'react-router-dom';
import ProfilCard from './Projet';
import CarDetails from './ListCars';
import DétailsCars from './DétailsCars';
import Reservation from './Reservation';
import Signup from './login';
import SignApp from './Sign';
import Layout from "./Layout";



export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<ProfilCard />} />
      <Route path="/list" element={<CarDetails />} />
      <Route path="/details/:id" element={<DétailsCars />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/login" element={<Signup />} />
      <Route path="/Sign" element={<SignApp />} />
      </Route>
      
    </Routes>
  );
}


