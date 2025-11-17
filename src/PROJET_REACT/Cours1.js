// import { Component } from "react";

// export default function MyFunction(props) {        
//     return <>                                      
//         <h1> Hello {props.Nom} </h1>
//     </>
// }  // function MyFunction({Nom}) {   hadi li waset mn function kaytesemaw distractring
        // return   <h1> {Nom} </h1>
//    }

// export default class MyFunction extends Component {
//     render() {
//         return <>
//             <h1> fin {this.props.Nom} </h1>

//     {/* // ##################################################################################"""""" */}
            
//             <h2> Les Fruits :  </h2>
//             <ul>
//                 <li> {this.props.frts} </li>
//                 <li> {this.props.frts} </li>
//                 <li> {this.props.frts} </li>
//                 <li> {this.props.frts} </li>
//             </ul>
//         </>
//     }
// }
  
  
  
// export default function MyFunction({frts}) {
//     const azerty = () => frts.map(frts => <li> {frts} </li>)
    
//     return <>
//         <h2> Les Fruits :  </h2>
//         <ul>
//             {azerty()}
//         </ul>
//     </>
// }
  



// export default class MyCours extends Component{
//     azerty =  () => frts.map(frts => <li> {frts} </li>
//     )
    
//     render() {
//         return <>
//             <h2> Les Fruits :  </h2>
//             <ul>
//                 {this.props.azerty()}
//             </ul>
//         </>
//     }
// }
  
  
  
    //////////////////////////////////
   //                              //
  //  trai9a dial Function()      //
 //                              //
//////////////////////////////////


export default function MyFunction({Nom,Age,Fruits}) {
        const Dutsh = Fruits
        const azerty = function () {     
            return Fruits.map(function (frts) {
                return <li> {frts} </li>
            })
        }
        Dutsh.push('Pushing')
    // const azerty = () => Fruits.map(frts => <li> {frts} </li>)        tari9a mokhetasara 
        return <>
            <h1 className="qwerty" > Hello {Nom}  </h1>
            <p> ich heise {Nom} ich bin {Age} yagh alt  </p>
            
            <h2> Les Fruites :  </h2>

            <ul>
               {azerty()}
            </ul>
            <hr />
    </>
}   //   CSS ki dare fi index.css o kate3etini className 


//import { Component } from "react"

// export default class MyFunction extends Component{
//     render() {
//         return <>
//                 <h1> Aziz Bouzrour </h1>
//         </>
//     }
// }




    //////////////////////////////////
   //                              //
  //  trai9a dial Class()         //
 //                              //
//////////////////////////////////


// import {Component} from "react";

// // import React from "react";   kayna had tari9a li bi comentaire o tari9a dial Component nixane 
// //                                      React.Component 
// export default class MyFunction extends Component{
//     render() {
//         return <>
//             <h1> Ich heisa {this.props.Nom} </h1>
//             <h1> My name is {this.props.Nom} ich bin {this.props.Age} </h1>
//             <hr />
//           </>
//     } 
// }


    ///////////////////////////
   //                       //
  //        JSX            //
 //                       //
///////////////////////////



