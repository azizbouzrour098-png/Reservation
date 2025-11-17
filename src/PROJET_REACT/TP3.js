// export default function HelloWorld({Name}) {
//     console.log(Name)
//     return <h1> Hallo {Name} </h1>
// }

// export default function HelloWorld(props) {
//     console.log(props)
//     return <h1> Hallo {props.Name} </h1>
// }




// import {Component} from "react";

// export default class HelloWorld extends Component{
//     render() {
//         return <h1>  Gutten Margen ich heisa aziz </h1>
//     }
// }



// CitationCard.js
import React from 'react';

export default class Lampe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allume: false
        };
        this.changerEtat = this.changerEtat.bind(this);
    }

    changerEtat() {
        this.setState({ allume: !this.state.allume });
    }

    render() {
        const { allume } = this.state;
        
        const style = {
            padding: '20px',
            textAlign: 'center',
            backgroundColor: allume ? 'yellow' : 'black',
            color: allume ? 'black' : 'white'
        };

        return (
            <div style={style}>
                <p>{allume ? 'Lampe allumée' : 'Lampe éteinte'}</p>
                <button onClick={this.changerEtat}>
                    {allume ? 'Éteindre' : 'Allumer'}
                </button>
            </div>
        );
    }
}
































// import { useState } from "react";

// export default function FormulaireInscription() {
//   const [Count, setCount] = useState({ nom: "", email: "", age: "" });
//   const [start, setStart] = useState(null);   // katekhazane lia les donnée mn wera user y clicki 3ela envoyer 
//   const [variable, setvariable] = useState(false);

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const valeur = e.target.value; 
//     setCount({ ...Count, [name]: valeur });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = {
//       nom: Count.nom.trim(),
//       email: Count.email.trim(),
//       age: Count.age === "" ? "" : Number(Count.age),
//     };
//     setStart(payload);
//     setvariable(true); 
//   };

//   return (
//     <div>
//       <h2>Un petite form:</h2>

//       <form onSubmit={handleSubmit}>
       
//           <label> Nom </label>
//           <input name="nom" value={Count.nom} onChange={handleChange} />
//           <br/>
//           <label> Email </label>
//           <input type="email" name="email" value={Count.email} onChange={handleChange} />
//           <br/>
//           <label>Your age : </label>
//           <input type="number" name="age" value={Count.age} onChange={handleChange} />
//           <br/>

//         <button type="submit">Envoyer</button>
//       </form>

//       <div>
//         {variable && start ? (
//           <div>
//             <h3> un nouveaux form: </h3>
//             <p>Nom : {start.nom}</p>
//             <p>Email : {start.email}</p>
//             <p>Âge : {start.age === "" ? "n est pas triuvé" : start.age}</p>
//           </div>
//         ) : (
//           <p>Aucun.</p>
//         )}
//       </div>
//     </div>
//   );
// }