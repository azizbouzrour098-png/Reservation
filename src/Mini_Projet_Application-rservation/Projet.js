// import './Projet.css'

// import React, { useState } from 'react';
// import './Projet.css';
// import { Link } from "react-router-dom";

// export default function ProfilCard() {
//   const [fullName, setFullName] = useState('');
//   const [carModel, setCarModel] = useState('');
//   const [date, setDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!fullName || !carModel || !date) {
//       alert("Please fill in all fields!");
//       return;
//     }
//     alert(`Reservation confirmed!\nName: ${fullName}\nCar: ${carModel}\nDate: ${date}`);
//     setFullName('');
//     setCarModel('');
//     setDate('');
//   };

//   return (
//     <>
//       <nav>
//         <div className='titre'>
//           <h1 className='titre1'>aziZ</h1>
//           <h1><span>caRs</span></h1>
//           <img className='img1' src="Cars.jpeg" alt="Cars" />
//         </div>

//         <div className='div1'>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/list">Cars/List</Link></li>
//             <li><Link to="/details">Cars/Details</Link></li>
//             <li><Link className='bzrr' to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>

//         <div className='div2'>
//           <Link to="/login"><button>Login</button></Link>
//           <Link to="/signup"><button>Sign Up</button></Link>
//         </div>
//       </nav>

//       <div className="reservation-container">
//         <h1 className='titre2'>Car Reservation</h1>

//         <form className="reservation-form" onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//           />

//           <input 
//             type="text" 
//             placeholder="Car Model"
//             value={carModel}
//             onChange={(e) => setCarModel(e.target.value)}
//           />

//           <input 
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />

//           <button type="submit">
//             Confirm Reservation
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

//############################################################################################

import React, { useState, useEffect } from "react";
import './Projet.css';
import { Link } from "react-router-dom";

export default function ProfilCard() {

  const [showMore, setShowMore] = useState(false);
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const count = JSON.parse(localStorage.getItem("visits")) || 0;
    setVisits(count + 1);
    localStorage.setItem("visits", JSON.stringify(count + 1));
  }, []);

  return (
    <>
      

      <div className="parent fadeIn">
        <div className='parent2'>
          <img className='img2' src='/voiture.png' />
        </div>

        <div className='parent1'>
          <h1 className='titre2'>
            Welcome to aziZ<span>caRs</span> M'y platform!
          </h1>

          <p>
            We offer you a quick and easy experience to explore available cars, 
            view details, and book them anytime, anywhere.
          </p>

          {showMore && (
            <>
              <p>Our goal is to simplify the rental process and provide the best offers.</p>
              <p>Our car rental service is available 24/24.</p>
            </>
          )}

          <button 
            onClick={() => setShowMore(!showMore)}
            style={{
              padding: "10px 20px",
              marginTop: "15px",
              background: "rgb(205, 3, 121)",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            {showMore ? "Show Less" : "Read More"}
          </button>

          <p style={{ marginTop: "20px", opacity: 0.7 }}>
            👀 Visits: {visits}
          </p>
        </div>
      </div>
    </>
  );
}














//###################################################################################################


// import './Projet.css';
// import { Link } from "react-router-dom";
// export default function ProfilCard() {

//   return <>
//     <nav>
//         <div className='titre'>
//           <h1 className='titre1'>aziZ</h1>
//           <h1> <span>caRs </span> </h1>
//           <img className='img1' src="Cars.jpeg"/>
//         </div>
//         <div className='div1'>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/list">Cars/List</Link></li>
//             <li><Link to="/details">Cars/Details</Link></li>
//             <li><Link to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>
//         <div className='div2'>
//           <Link to="/login"><button>Login</button></Link>
//           <Link to="/signup"><button>Sign App</button></Link>
//         </div>
//     </nav>
//       <div className='parent'>
//         <div className='parent2'>
//           <img className='img2' src='/voiture.png' />
//         </div>
//         <div className='parent1'>
//           <h1 className='titre2'> Welcome to aziZ<span>caRs </span> my platform! </h1>
//           <p> We offer you a quick and easy experience to explore available cars, view their details,
//               and book them anytime, anywhere. </p>
//           <p> Our goal is to simplify the rental process and provide the best offers with minimal effort. </p>
//           <p> Our car rental service is available 24/24. </p>
//         </div>
//       </div>

//      </>
// }



// {/* <section class="cars-section">
//   <h2 class="cars-title">🔥 Luxury & Sport Cars 🔥</h2>
//   <div class="cars-container">

//     <div class="car-card">
//       <img src="https://images.unsplash.com/photo-1606664515524-ed2f7861c4a3?auto=format&fit=crop&w=800&q=80" alt="Lamborghini Aventador" />
//       <h3>Lamborghini Aventador</h3>
//       <p>V12 engine · 730 HP · 0–100 km/h in 2.8s</p>
//     </div>

//     <div class="car-card">
//       <img src="https://images.unsplash.com/photo-1622910206588-ec99d1e3ed8e?auto=format&fit=crop&w=800&q=80" alt="Ferrari 812 Superfast" />
//       <h3>Ferrari 812 Superfast</h3>
//       <p>V12 · 789 HP · Italian masterpiece</p>
//     </div>

//     <div class="car-card">
//       <img src="https://images.unsplash.com/photo-1606813902914-0b78e44b6b6a?auto=format&fit=crop&w=800&q=80" alt="McLaren 720S" />
//       <h3>McLaren 720S</h3>
//       <p>Twin Turbo V8 · 710 HP · Pure adrenaline</p>
//     </div>

//     <div class="car-card">
//       <img src="https://images.unsplash.com/photo-1600607687644-c941ee9b52b6?auto=format&fit=crop&w=800&q=80" alt="Bugatti Chiron" />
//       <h3>Bugatti Chiron</h3>
//       <p>W16 · 1500 HP · The ultimate hypercar</p>
//     </div>

//     <div class="car-card">
//       <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80" alt="Rolls Royce Ghost" />
//       <h3>Rolls-Royce Ghost</h3>
//       <p>Luxury & Power · V12 · Handcrafted perfection</p>
//     </div>

//   </div>
//   </section> 
//   </>*/}


    
    
    