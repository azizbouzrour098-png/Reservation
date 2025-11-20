import React from "react";
import { Link } from "react-router-dom";
import './Projet.css';

const cars = [
  { id: 1, name: "Audi A6", price: "600 DH / day", img: "./Audi.png" },
  { id: 2, name: "Mercedes C-Class", price: "750 DH / day", img: "./Mercides.png" },
  { id: 3, name: "BMW Serie 3", price: "700 DH / day", img: "./BMW.png" },
];

export default function CarList() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Available Cars</h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        marginTop: "40px"
      }}>
        {cars.map(car => (
          <div key={car.id} style={{
            background: "#222",
            padding: "20px",
            borderRadius: "15px",
            width: "280px",
            color: "white"
          }}>
            <img 
              src={car.img} 
              alt={car.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h2>{car.name}</h2>
            <h3 style={{ color: "rgb(205, 3, 121)" }}>{car.price}</h3>

            <Link to={`/details/${car.id}`}>
              <button style={{
                marginTop: "15px",
                padding: "10px 20px"
              }}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


//#########################################################################


// import { useParams, Link } from "react-router-dom";
// import './Projet.css';

// const cars = [
//   { id: 1, name: "Audi A6", price: "600 DH / day", img: "/car1.jpg", description: "A luxury sedan with premium features." },
//   { id: 2, name: "Mercedes C-Class", price: "750 DH / day", img: "/car2.jpg", description: "Comfortable and stylish for city drives." },
//   { id: 3, name: "BMW Serie 3", price: "700 DH / day", img: "/car3.jpg", description: "Sporty and elegant, perfect for any journey." },
// ];

// export default function CarDetails() {
//   const { id } = useParams();
//   const car = cars.find(c => c.id === parseInt(id));

//   if (!car) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Car not found!</h2>;

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
//             <li><Link className='bzrr' to={`/details/${car.id}`}>Car Details</Link></li>
//             <li><Link to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>

//         <div className='div2'>
//           <button>Login</button>
//           <button>Sign App</button>
//         </div>
//       </nav>

//       <div style={{
//         padding: "50px",
//         display: "flex",
//         justifyContent: "center",
//         gap: "50px",
//         flexWrap: "wrap"
//       }}>
//         <div>
//           <img src={car.img} alt={car.name} style={{
//             width: "400px",
//             borderRadius: "15px",
//             objectFit: "cover"
//           }} />
//         </div>
//         <div style={{ maxWidth: "400px", color: "white" }}>
//           <h1>{car.name}</h1>
//           <h3 style={{ color: "rgb(205, 3, 121)" }}>{car.price}</h3>
//           <p style={{ marginTop: "20px", lineHeight: "1.6" }}>{car.description}</p>
//           <Link to="/reservation">
//             <button style={{ padding: "12px 25px", marginTop: "20px" }}>Reserve Now</button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }









// import './Projet.css';
// import { Link } from "react-router-dom";
// export default function ListCars() {

//   const cars = [
//     { id: 1, name: "Audi A6", price: "600 DH / day", img: "/car1.jpg" },
//     { id: 2, name: "Mercedes C-Class", price: "750 DH / day", img: "/car2.jpg" },
//     { id: 3, name: "BMW Serie 3", price: "700 DH / day", img: "/car3.jpg" },
//   ];

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
//             <li><Link className='bzrr' to="/list">Cars/List</Link></li>
//             <li><Link to="/details">Cars/Details</Link></li>
//             <li><Link to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>

//         <div className='div2'>
//           <button>Login</button>
//           <button>Sign App</button>
//         </div>
//       </nav>

//       <div style={{ padding: "50px", textAlign: "center" }}>
//         <h1 className='titre2'>Available Cars</h1>

//         <div style={{
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           marginTop: "40px",
//           gap: "40px"
//         }}>

//           {cars.map(car => (
//             <div key={car.id} style={{
//               background: "#1a1a1a",
//               padding: "20px",
//               borderRadius: "15px",
//               width: "280px",
//               boxShadow: "0 0 10px #000"
//             }}>
//               <img src={car.img} style={{
//                 width: "100%",
//                 height: "170px",
//                 borderRadius: "10px",
//                 objectFit: "cover"
//               }} />

//               <h2 style={{ marginTop: "20px" }}>{car.name}</h2>
//               <p style={{ color: "rgb(205, 3, 121)", fontWeight: "bold" }}>{car.price}</p>

//               <button style={{
//                 marginTop: "15px",
//                 padding: "10px 20px"
//               }}>
//                 Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
