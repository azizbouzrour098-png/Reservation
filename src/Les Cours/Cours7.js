    ///////////////////////
   //                   //
  //    LifeCycle()    //
 //                   //
///////////////////////




// import { useState } from "react"



//  1:/ Mouting : fin kanesaybo li conposant 
//  2:/ Updating : Mise à jour
//  3:/ Unmouting

////////////////////////////
//  tari9a dial Class     //
////////////////////////////

// import React, { useState } from "react";
// // import MyHooks from './Cours5';

// export default class LifeCycle extends React.Component{

//     constructor(props) {
//         super(props)
//         this.state = {
    //             Number : 0 ,
    //         }
//     }

//     componentDidMount() {     // ki 3eraf wax composant tela3e lina fi la page wla la 
//         console.log("Azerty")
//     }

//    componentDidUpdate(prevProps , preveState) {
//     console.log('Component Updating')
//         console.log(preveState , this.state)
//    }

//     ClickPlus = () => {
//         this.setState(
//             preveState => {
//                 return {Number : preveState.Number + 1}
//             }
//         )
//     }

//     ClickReset = () => {
//         this.setState(
//             preveState => {
//                 return {Number : preveState.Number = 0}
//             }
//         )
//     }

//     ClickMoins = () => {
    //         this.setState(
        //             preveState => {
//                 return {Number : preveState.Number - 1}
//             }
//     )
//     }


//     render() {
//         return <>
//             <button onClick={this.ClickPlus}> +1 </button>
//             <button onClick={this.ClickReset}> =0 </button>
//             <button onClick={this.ClickMoins}> -1 </button>
//             <h1> {this.state.Number} Secondes </h1>
//         </>
//     }
// }


////////////////////////////
 //  tari9a dial Function  //
////////////////////////////


// export default function LifeCycle() {
//     const [count , setCount] = useState(0)
//     return <>
//         <h1> {count} Secondes </h1>
//         <button onClick={() => {
//             setCount(
    //                 prevState => {
        //                     return prevState + 1
        //                 }
//             )
//         }}> +1 </button>
//     </>
// }



import { useState } from "react"

export default function LifeCycle({Numbres}) {

    const [input , setInput] = useState('')
    const [output , setOutput] = useState([])

    const aziz = () => Numbres.map(cukur => <li> {cukur} </li>)

    const bzrr = () => output.map((suz , keysuz) => <li key={keysuz}> {suz} </li>)

    const ChangeValeur = () => {
        const valueInput = document.querySelector('#qwerty').value
        setInput(valueInput)
    }
    const AddValeur = (e) => {
        e.preventDefault()
        setOutput([...output , input])
    }

    return <>
        <form>
            <input type="text" id="qwerty" onChange={ChangeValeur}/>
            <input type="Submit" value="Add Number" onClick={AddValeur}/>
        </form>
        <ul>
            {aziz()}
            {bzrr()}
        </ul>
    </>
}