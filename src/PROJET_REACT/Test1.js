// import React from "react";
// // tari9a dial l class :
// export default class Hello extends React.Component{
//   render() {
//     return <h1> Hello {this.props.Name} </h1>
//   }
// }



// import { useState } from "react";

// function MyClick() {
//     const [variable1 , variable2] = useState(0) ;

//     function MyButton() {
//         variable2(variable1 + 1)
//     }
//     return (
//         <>
//             <button onClick={MyButton}> أستغفر الله {variable1}  </button>
//         </>
//     );
// }
// export default function MyCount() {
//     return (
//         <>
//             <MyClick />
//         </>
//     )
// }

    ///////////////
   //           //
  //    jsx    //
 //           //
///////////////

// export default function MyAge() {
    
//     let age = 19     
//     return <h1> Aziz Bouzrour you are {age>18 ? "Adult" : "minor" } </h1>
// }

import { Component } from "react";  

export default class MyAge extends Component {
    age = 18
    render() {
        return <>
                    <h1> You are {this.age >= 18 ? "Adult" : "Minor"} </h1>
               </>
    }
}
