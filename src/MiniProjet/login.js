import './Projet.css';
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <nav>
        <div className='titre'>
          <h1 className='titre1'>aziZ</h1>
          <h1><span>caRs</span></h1>
          <img className='img1' src="Cars.jpeg" />
        </div>

        <div className='div1'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">Cars/List</Link></li>
            <li><Link to="/details">Cars/Details</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
          </ul>
        </div>

        <div className='div2'>
            <Link to="/login"><button>Login</button></Link>
            <button className='bzrr'>Sign Up</button>
        </div>
      </nav>

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1 className='titre2'>Sign Up</h1>

        <form style={{
          background: "#1a1a1a",
          width: "350px",
          margin: "40px auto",
          padding: "35px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <input type="text" placeholder="Full Name"
            style={{ padding: "12px", borderRadius: "10px" }} />

          <input type="email" placeholder="Email"
            style={{ padding: "12px", borderRadius: "10px" }} />

          <input type="password" placeholder="Password"
            style={{ padding: "12px", borderRadius: "10px" }} />

          <input type="password" placeholder="Confirm Password"
            style={{ padding: "12px", borderRadius: "10px" }} />

          <button style={{ padding: "12px" }}>Sign Up</button>
        </form>
      </div>
    </>
  );
}









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
