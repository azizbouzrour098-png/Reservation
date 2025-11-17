import React, { useState } from 'react'

export default function UnJeux() {
    const [variable , setVariable] = useState(0)
    const [face , setFace] = useState(null)
    const [end , setEnd] = useState(false)

     const jouer = () =>{
       const f = Math.floor(Math.random()*6+1);
       setFace(f)
       setVariable(variable + 1)
       if(f==6){
         setEnd(true)
       }
    }

    const init = ()=>{
        setFace(null)
        setVariable(0)
        setEnd(false)
    }
    return (
      <div style={{textAlign:'center'}}>
        <img src= {face==null?"./init.PNG":`./face${face}.PNG`} />
        <h2>jeu de Dé</h2>
        <p>face:{face} </p>
        <p>Nombre d'essais:{variable} </p>
        {
            end?(
            <>
            <p>Bravo</p><button onClick={init}>Rejouer</button>
            </>)
            :(<button onClick={jouer}>Jouer</button>)
        }
        
      </div>
    )
  }



        
// import { useState } from "react";

// export default function UnJeux() {
//     const [variable , setVariable] = useState(0)
//     const [face , setFace] = useState(null)

//     const jour = () => {
//     const numero = Math.floor(Math.random() * 6+1); 
//     setFace(numero); 
//     setVariable(variable + 1)
//     }
//     return (
//         <>
//             <img src="init.png"/>
//             <h1> Jeux de Dé... </h1>
//             <h3> face : {face ? face : "-"} </h3>
//             <h3> nombre d'essaie : {variable} </h3>
//             <button onClick={jour} > jouer </button>
//         </>
//     )
    
// }