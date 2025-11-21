//###############################################################################################3
import React, { useState } from "react";
import './Projet.css';
import { Link } from "react-router-dom";

export default function Signup() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill all fields!");
      setSuccess("");
      return;
    }

    if (form.password.length < 6) {
      setError("⚠️ Password must be at least 6 characters!");
      setSuccess("");
      return;
    }

    if (form.password !== form.confirm) {
      setError("⚠️ Passwords do not match!");
      setSuccess("");
      return;
    }

    // Success
    setError("");
    setSuccess("✔ Account created successfully!");

    // Save locally (optional)
    localStorage.setItem("user", JSON.stringify(form));

    // Reset form
    setForm({
      name: "",
      email: "",
      password: "",
      confirm: ""
    });
  };

  return (
    <>
      

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1 className='titre2'>Sign Up</h1>

        {/* Error message */}
        {error && (
          <div style={{
            background: "#ff2e2e",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "320px",
            margin: "10px auto"
          }}>
            {error}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div style={{
            background: "green",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            width: "320px",
            margin: "10px auto"
          }}>
            {success}
          </div>
        )}

        <form 
          onSubmit={handleSubmit}
          style={{
            background: "#1a1a1a",
            width: "350px",
            margin: "40px auto",
            padding: "35px",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
        >
          <input 
            type="text" 
            name="name"
            placeholder="Entrez your Name"
            value={form.name}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "10px" }} 
          />

          <input 
            type="email" 
            name="email"
            placeholder="Saisir Email..."
            value={form.email}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "10px" }} 
          />

          <input 
            type="password" 
            name="password"
            placeholder="Entrez your Password..."
            value={form.password}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "10px" }} 
          />

          <input 
            type="password" 
            name="confirm"
            placeholder="Confirm your Password"
            value={form.confirm}
            onChange={handleChange}
            style={{ padding: "12px", borderRadius: "10px" }} 
          />

          <button 
            type="submit"
            style={{
              padding: "12px",
              background: "rgb(205, 3, 121)",
              color: "white",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

//##############################################################################################333





// import './Projet.css';
// import { Link } from "react-router-dom";

// export default function Signup() {
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
//             <li><Link to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>

//         <div className='div2'>
//             <Link to="/login"><button>Login</button></Link>
//             <button className='bzrr'>Sign Up</button>
//         </div>
//       </nav>

//       <div style={{ padding: "50px", textAlign: "center" }}>
//         <h1 className='titre2'>Sign Up</h1>

//         <form style={{
//           background: "#1a1a1a",
//           width: "350px",
//           margin: "40px auto",
//           padding: "35px",
//           borderRadius: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px"
//         }}>
//           <input type="text" placeholder="Full Name"
//             style={{ padding: "12px", borderRadius: "10px" }} />

//           <input type="email" placeholder="Email"
//             style={{ padding: "12px", borderRadius: "10px" }} />

//           <input type="password" placeholder="Password"
//             style={{ padding: "12px", borderRadius: "10px" }} />

//           <input type="password" placeholder="Confirm Password"
//             style={{ padding: "12px", borderRadius: "10px" }} />

//           <button style={{ padding: "12px" }}>Sign Up</button>
//         </form>
//       </div>
//     </>
//   );
// }









// import './Projet.css';
// import { Link } from "react-router-dom";

// export default function Login() {

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
//             <li><Link to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>

//         <div className='div2'>
//             <button className='bzrr'>Login</button>
//             <Link to="/signup"><button>Sign App</button></Link>
//         </div>
//       </nav>

//       <div style={{ padding: "50px", textAlign: "center" }}>
//         <h1 className='titre2'>Login</h1>

//         <form style={{
//           background: "#1a1a1a",
//           width: "350px",
//           margin: "40px auto",
//           padding: "35px",
//           borderRadius: "20px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px"
//         }}>
//           <input type="email" placeholder="Email"
//             style={{ padding: "12px", borderRadius: "10px" }} />

//           <input type="password" placeholder="Password"
//             style={{ padding: "12px", borderRadius: "10px" }} />

//           <button style={{ padding: "12px" }}>Login</button>
//         </form>
//       </div>
//     </>
//   );
// }
