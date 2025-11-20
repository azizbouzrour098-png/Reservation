// export default function Fruit({fruits}) {
//     const displayFruits = () => fruits.map(fruit => <li> {fruit} </li>)
//     return <>
//         <h1> Les Fruits :  </h1>
//         <ul>
//             {displayFruits()}
//         </ul>
//     </>
// }

// 2 dail toro9e li kaynin 

// export default function Fruit({fruits}) {
//     const azerty = function () {
//         return fruits.map(function (fruit) {
//             return <li> {fruit} </li>
//         })
//     }
//     return <>
//         <h1> Les Fruits :  </h1>
//         <ul> {azerty()} </ul>
//     </>
// }

// // class fi react hia className




// import { useState } from "react";

// export default function FeuTricolore() {
//     const [couleur, setCouleur] = useState("rouge");
//     const [intervalId, setIntervalId] = useState(null);

//     const changerCouleur = () => {
//         if (couleur === "rouge") setCouleur("orange");
//         else if (couleur === "orange") setCouleur("vert");
//         else setCouleur("rouge");
//     };

//     const demarrer = () => {
//         if (!intervalId) {
//             const id = setInterval(changerCouleur, 1000);
//             setIntervalId(id);
//         }
//     };

//     const arreter = () => {
//         clearInterval(intervalId);
//         setIntervalId(null);
//     };

//     const reinitialiser = () => {
//         setCouleur("rouge");
//         arreter();
//     };

//     return (
//         <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
//             <div style={{width:50, height:50, borderRadius:"50%", backgroundColor: couleur === "rouge" ? "red" : "gray", margin:5}}></div>
//             <div style={{width:50, height:50, borderRadius:"50%", backgroundColor: couleur === "orange" ? "orange" : "gray", margin:5}}></div>
//             <div style={{width:50, height:50, borderRadius:"50%", backgroundColor: couleur === "vert" ? "green" : "gray", margin:5}}></div>
//             <button onClick={demarrer}>Démarrer</button>
//             <button onClick={arreter}>Arrêter</button>
//             <button onClick={reinitialiser}>Réinitialiser</button>
//         </div>
//     );
// }