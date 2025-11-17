

// const App = () => {
//   const produit = [
//     { id: 1, title: "Hp eletbook i5 11éme ", price: 3999, inStock: true },
//     { id: 2, title: "Lenovo", price: 200, inStock: false },
//     { id: 3, title: "Samsung", price: 1000, inStock: true },
//   ];
    
//     function ProductCard(produit) {
//       const prixStyle = { color: produit.prix < 2000 ? "rouge" : "red" };

//       return (

//         <div style={{border: "1px solid black", padding: "10px", marginBottom: "10px"}}>
//           <h1 style={{fontWeight: "bold"}}> id : {produit.id}</h1>
//           <h2 style={{fontWeight: "bold"}}>Le Titre : {produit.titre}</h2>
//           <p style={{}}> Le Prix: {produit.prix} DH</p>
//           <p> instock : {produit.inStock ? "Disponible" : "No Disponible"}</p>
//         </div>

//       );
//     }
//     const root = ReactDOM.createRoot(document.getElementById("root")) ; 
//     root.render(<ProductCard id={1} titre="PC" prix={3500} inStock={true} />)
//     export default ProductCard; 
// // ayi haja nta baghi t afichiha ghadu dire liha export default o 3etiha semiya dial function 


// export default function Formulaire(props) {
//   return (   // ymkn lik te3ayet lihom bi props li had tari9a awe b tari9a le3adiya
//     <div>
//       <label> {props.inputlabel} </label>
//       <input type="text" value={props.prenom}/>
//       <p> {props.children}  </p>
//     </div>
//   )
// }  // // children ayi haja ketabtiha f index.js kate3ayate 3eliha bi props

    ///////////////////////////////
   //                           //
  // tari9a dial les classes : //
 //                           //
///////////////////////////////
import { Component } from "react" 

export default class Formulaire extends Component{
  render() {
    return <>
        <label> {this.props.inputlabel} </label>
        <input type="text" value={this.props.prenom}/>
        <p> {this.props.children}  </p>
      </>
  }
}

// export default function User(props) {  // tari9a okhera ghadi te7ayed propos o console 7eta howa o ghadi dir fbelaseteha semia li 3etaytiha f  index li hia Name
//   console.log(props)
//   return <h1> Hi {props.Name} ! </h1>  // hena had {props.Name} ghadi ymxi l page dial index.js o ghadi ye9aleb 3ela Name xno fih o ghadi y aficher Dakxi li kayn tema
// }

// import React from "react";
// // tari9a dial l class :
// export default class Hello extends React.Component{
//   render() {
//     // return <h1> Hello {this.props.Name} </h1>
//     return <div>
//         <label> {this.props.inputlabel} </label>
//         <input type="text" name={this.props.prenom}/>
//         <p> {this.props.children}  </p>
//       </div>
//   }
// }





// import './TP1.css';   // dossier dans CSS 
// export default function Portable(){
//     const products = [
//         { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', image: 'image.jpg' } ,
//         { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', image: 'image.jpg' },
//         { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', image: 'image.jpg' },
//         { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH', image: 'image.jpg' },
// ];

// return (
//     <div>
//       <h1> Les Produits :  </h1>
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="card">
//             <img src={product.image} />
//             <h3>{product.title}</h3>
//             <h4>{product.price}</h4>
//             <button className="btn"> Ajouter au panier </button>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







// import { useState } from "react";


// function MyJeux() {
    // const [variable1 , setVariable2] = useState(0)
    // const [face, setFace] = useState(null)
    
    //  const Increment = () => {
        //     const numero = Math.floor(Math.random() * 6+1); // nombre aléatoire entre 1 et 6
        //     setFace(numero); // mettre à jour la face
        //     setVariable2(variable1 + 1);
        //     } 
        
        
        // return <>
        //     <h1> Jeux de Dé... </h1>
        //     <h3> face :{face !== null ? face : " "}   </h3>
        //     <h3> nombre d'essais: {variable1} </h3>
        //     <button onClick={Increment}> Joui </button>
        
        // </>
        
        // }