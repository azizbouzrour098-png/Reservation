import { useParams, Link } from "react-router-dom";
import './Projet.css';

const cars = [
  { id: 1, name: "Audi A6", price: "600 DH / day", img: "/car1.jpg", description: "Powerful engine, luxury interior, 2022 model." },
  { id: 2, name: "Mercedes C-Class", price: "750 DH / day", img: "/car2.jpg", description: "Comfortable and stylish for city drives." },
  { id: 3, name: "BMW Serie 3", price: "700 DH / day", img: "/car3.jpg", description: "Sporty and elegant, perfect for any journey." },
];

export default function DétailsCars() {
  const { id } = useParams();
  const car = cars.find(c => c.id === parseInt(id));

  if (!car) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Car not found!</h2>;

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
            <li><Link className='bzrr' to={`/details/${car.id}`}>Cars/Details</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
          </ul>
        </div>

        <div className='div2'>
          <button>Login</button>
          <button>Sign App</button>
        </div>
      </nav>

      <div style={{ textAlign: "center", padding: "40px" }}>
        <img src={car.img}
          style={{
            width: "70%",
            borderRadius: "20px",
            filter: "grayscale(20%)"
          }}
        />

        <h1 className='titre2' style={{ marginTop: "30px" }}>{car.name}</h1>
        <p>{car.description}</p>
        <p style={{ fontSize: "1.4rem", color: "rgb(205,3,121)" }}>{car.price}</p>

        <Link to="/reservation">
          <button style={{ marginTop: "20px", padding: "15px 30px" }}>Reserve Now</button>
        </Link>
      </div>
    </>
  );
}









// import './Projet.css';
// import { Link } from "react-router-dom";
// function DétailsCars() {

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
//             <li><Link className='bzrr' to="/details">Cars/Details</Link></li>
//             <li><Link to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>

//         <div className='div2'>
//           <button>Login</button>
//           <button>Sign App</button>
//         </div>
//       </nav>

//       <div style={{ textAlign: "center", padding: "40px" }}>
//         <img src="/car1.jpg"
//           style={{
//             width: "70%",
//             borderRadius: "20px",
//             filter: "grayscale(20%)"
//           }}
//         />

//         <h1 className='titre2' style={{ marginTop: "30px" }}>Audi A6</h1>

//         <p>Powerful engine, luxury interior, 2022 model.</p>
//         <p style={{ fontSize: "1.4rem", color: "rgb(205,3,121)" }}>600 DH / day</p>

//         <button style={{ marginTop: "20px", padding: "15px 30px" }}>
//           Reserve Now
//         </button>
//       </div>
//     </>
//   );
// }





