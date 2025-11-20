import React, { useState, useEffect } from "react";
import './Projet.css';
import { Link } from "react-router-dom";

export default function Reservation() {
  const [reservations, setReservations] = useState(() => {
    return JSON.parse(localStorage.getItem("reservations")) || [];
  });

  const [form, setForm] = useState({
    name: "",
    car: "",
    date: ""
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.car || !form.date) {
      setMessage("Please Saisir tout les inputes!");
      return;
    }

    setReservations([...reservations, form]);
    setMessage("Very God set Reservation est Accées!");

    setForm({ name: "", car: "", date: "" });

    setTimeout(() => setMessage(""), 3000);
  };

  const deleteReservation = (index) => {
    const updated = reservations.filter((_, i) => i !== index);
    setReservations(updated);
  };

  return (
    <>
    

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1 className='titre2'>Car Reservation</h1>

        {message && (
          <div 
            style={{
              background: "#333",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
              width: "300px",
              margin: "20px auto"
            }}
          >
            {message}
          </div>
        )}

        <form 
          style={{ display: "flex", flexDirection: "column", gap: "20px", width: "350px", margin: "40px auto", background: "#1a1a1a", padding: "40px", borderRadius: "20px" }}
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "10px" }}
          />

          <input 
            type="text" 
            name="car"
            placeholder="Car Model"
            value={form.car}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "10px" }}
          />

          <input 
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "10px" }}
          />

          <button 
            type="submit" 
            style={{ padding: "12px", borderRadius: "10px", backgroundColor: "rgb(205, 3, 121)", color: "white", cursor: "pointer" }}>
            Confirm Reservation
          </button>
        </form>

        {reservations.length > 0 && (
          <div style={{ marginTop: "30px" }}>
            <h2>Your Reservations ({reservations.length}):</h2>
            <ul>
              {reservations.map((r, i) => (
                <li key={i} style={{ margin: "10px 0" }}>
                  {r.name} - {r.car} - {r.date}
                  <button 
                    onClick={() => deleteReservation(i)}
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                      borderRadius: "8px",
                      cursor: "pointer"
                    }}
                  >
                    Supprimé Set Reservation
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}









// import React, { useState } from "react";
// import './Projet.css';
// import { Link } from "react-router-dom";

// export default function Reservation() {
//   const [reservations, setReservations] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     car: "",
//     date: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setReservations([...reservations, form]);
//     alert("Reservation confirmed!");
//     setForm({ name: "", car: "", date: "" });
//   };

//   return (
//     <>
//       <nav>
//         <div className='titre'>
//           <h1 className='titre1'>aziZ</h1>
//           <h1><span>caRs</span></h1>
//           <img className='img1' src="Cars.jpeg" />
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
//            <Link to="/login"><button>Login</button></Link>
//           <Link to="/signup"><button>Sign App</button></Link>
//         </div>
//       </nav>

//       <div style={{ padding: "50px", textAlign: "center" }}>
//         <h1 className='titre2'>Car Reservation</h1>

//         <form 
//           style={{ display: "flex", flexDirection: "column", gap: "20px", width: "350px", margin: "40px auto", background: "#1a1a1a", padding: "40px", borderRadius: "20px" }}
//           onSubmit={handleSubmit}
//         >
//           <input 
//             type="text" 
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             style={{ padding: "12px", borderRadius: "10px" }}
//           />

//           <input 
//             type="text" 
//             name="car"
//             placeholder="Car Model"
//             value={form.car}
//             onChange={handleChange}
//             style={{ padding: "12px", borderRadius: "10px" }}
//           />

//           <input 
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleChange}
//             style={{ padding: "12px", borderRadius: "10px" }}
//           />

//           <button type="submit" style={{ padding: "12px", borderRadius: "10px", backgroundColor: "rgb(205, 3, 121)", color: "white", cursor: "pointer" }}>
//             Confirm Reservation
//           </button>
//         </form>

//         {reservations.length > 0 && (
//           <div style={{ marginTop: "30px" }}>
//             <h2>Your Reservations:</h2>
//             <ul>
//               {reservations.map((r, i) => (
//                 <li key={i}>{r.name} - {r.car} - {r.date}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
