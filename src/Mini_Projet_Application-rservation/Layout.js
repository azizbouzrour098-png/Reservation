import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Projet.css";

export default function Layout() {
  return (
    <>
      <nav>
        <div className='titre'>
          <h1 className='titre1'>aziZ</h1>
          <h1><span>caRs</span></h1>
          <img className='img1' src="Cars.jpeg" alt="logo" />
        </div>

        <div className='div1'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">Cars/List</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
          </ul>
        </div>

        <div className='div2'>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/sign"><button>Sign Up</button></Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
