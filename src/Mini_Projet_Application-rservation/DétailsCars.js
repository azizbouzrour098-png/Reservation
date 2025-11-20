//##########################################################################################33
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Projet.css";

const cars = [
  { id: 1, name: "Audi A6", price: "600 DH / day", img: "/Audi.png", description: "Powerful engine, luxury interior, 2022 model." },
  { id: 2, name: "Mercedes C-Class", price: "750 DH / day", img: "/Mercides.png", description: "Comfortable and stylish for city drives." },
  { id: 3, name: "BMW Serie 3", price: "700 DH / day", img: "/BMW.png", description: "Sporty and elegant, perfect for any journey." },
];

export default function DétailsCars() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(false);
  const [favMessage, setFavMessage] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const found = cars.find(c => c.id === parseInt(id));
    setCar(found);

    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favs.some(f => f.id === found?.id));

    setTimeout(() => setLoading(false), 700);
  }, [id]);

  const addToFavorites = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favs.some(f => f.id === car.id)) {
      favs.push(car);
      localStorage.setItem("favorites", JSON.stringify(favs));
      setIsFavorite(true);
      setFavMessage("✔ Added to favorites!");
    } else {
      setFavMessage("ℹ Already added!");
    }

    setTimeout(() => setFavMessage(""), 3000);
  };

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Loading details...
      </h2>
    );
  }

  if (!car) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Car not found!
      </h2>
    );
  }

  return (
    <>
    

      <div className="fadeIn" style={{ textAlign: "center", padding: "40px" }}>

        {/* ZOOMABLE IMAGE */}
      <img
  src={car.img}
  onClick={() => setZoom(!zoom)}
  style={{
    width: zoom ? "80%" : "40%",     // تغيير الحجم
    transform: zoom ? "scale(1.1)" : "scale(1)", // زووم سلس
    borderRadius: "20px",
    filter: "grayscale(10%)",
    transition: "0.4s ease",
    cursor: "pointer"
  }}
/>


        <h1 className="titre2" style={{ marginTop: "30px" }}>{car.name}</h1>
        <p>{car.description}</p>
        <p style={{ fontSize: "1.4rem", color: "rgb(205,3,121)" }}>{car.price}</p>

        {/* Favorite Message */}
        {favMessage && (
          <div style={{
            background: "#333",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            margin: "15px auto",
            width: "300px"
          }}>
            {favMessage}
          </div>
        )}

        {/* Add to Favorites */}
        <button
          onClick={addToFavorites}
          disabled={isFavorite}
          style={{
            padding: "12px 25px",
            marginTop: "20px",
            background: isFavorite ? "gray" : "rgb(205,3,121)",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer"
          }}
        >
          {isFavorite ? "❤️ Added to Favorites" : "Add to Favorites"}
        </button>

        <br />

        <Link to="/reservation">
          <button style={{ marginTop: "20px", padding: "15px 30px" }}>
            Reserve Now
          </button>
        </Link>
      </div>
    </>
  );
}

//3#############################################################################################


// import { useParams, Link } from "react-router-dom";
// import './Projet.css';

// const cars = [
//   { id: 1, name: "Audi A6", price: "600 DH / day", img: "/car1.jpg", description: "Powerful engine, luxury interior, 2022 model." },
//   { id: 2, name: "Mercedes C-Class", price: "750 DH / day", img: "/car2.jpg", description: "Comfortable and stylish for city drives." },
//   { id: 3, name: "BMW Serie 3", price: "700 DH / day", img: "/car3.jpg", description: "Sporty and elegant, perfect for any journey." },
// ];

// export default function DétailsCars() {
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
//             <li><Link className='bzrr' to={`/details/${car.id}`}>Cars/Details</Link></li>
//             <li><Link to="/reservation">Reservation</Link></li>
//           </ul>
//         </div>

//         <div className='div2'>
//           <button>Login</button>
//           <button>Sign App</button>
//         </div>
//       </nav>

//       <div style={{ textAlign: "center", padding: "40px" }}>
//         <img src={car.img}
//           style={{
//             width: "70%",
//             borderRadius: "20px",
//             filter: "grayscale(20%)"
//           }}
//         />

//         <h1 className='titre2' style={{ marginTop: "30px" }}>{car.name}</h1>
//         <p>{car.description}</p>
//         <p style={{ fontSize: "1.4rem", color: "rgb(205,3,121)" }}>{car.price}</p>

//         <Link to="/reservation">
//           <button style={{ marginTop: "20px", padding: "15px 30px" }}>Reserve Now</button>
//         </Link>
//       </div>
//     </>
//   );
// }









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





