    ////////////////////
   //                //
  //     Events     //
 //                //
////////////////////



// tari9a dial function 

// export default function Events() {        // const Azerty = () => {
//     function Azerty() {              //     alert('Arrow function.')
//         alert("Gutan Morgen Aziz")       //                   }
//     }

//     return <div> 
//         <button type="text" onChange={Azerty}> Click Here Please !  </button>
//         {/* <button onClick={Azerty}> Click here </button> */}
//     </div>
// } 
// onChange => mli katbeghi tkteb f input ki be9a y tala3e lik hadik alert f kola 7aref katebeghi tketebo 7ite kadire liha onChange kateghayare fl kateba 
// onWheel => ila beghayt nhebate l te7et wla netela3e lfou9 kitela3e lia had alert 
// onKeyDown =>  kola 7aref ghadu nekatebo ghadi y tala3e lia had alert fkola mara 
// onKeyUp  =>  ila be9ayt mewarek fl input 3ela xi 7aref maki tela3e walo ila 7ayadeto wla ketabet ghir 7aref wahed ki tela3e lia dak lmissage dial alert





// tari9a dial class 

import { Component } from "react"

export default class Events extends Component {
    // Azerty = function(){             il khedamti b had tari9a darori ma khaseek dire onClick mli declaré l smya dial class mn weraha khasek dire .bind(this)
    //     alert("Bonjour Aziz !  ")
    // }
    // ila khedameti b had tari9a darori mn wera onClick mli tketabe semya dial l class khasek dire mn weraha .bind(this)

    Azerty = () => {
        console.log(this)
        document.write(`<h1> This is Arrow function()  </h1>`)
    }

    render() {
        return <>
            <hr/><hr/> Cours4 <hr/><hr/>
            
            <button onClick={this.Azerty}> Click me </button>
            {/* <button onClick={this.Azerty.bind(this)}> Click me </button>
                ila beghayti bind tkhedame khasek tkhedame bi function 3adia maxi arrow function */}


        </>
    }
}
// export default class Events extends Component {

//     Azerty = () => {
//         console.log(this)
//         alert('Arrow function.')     
//       }
      
//       render(){
//           return <div>
//                 <button onClick={this.Azerty.bind(this)} > Click Here </button>
//         </div>
//     }
// }

