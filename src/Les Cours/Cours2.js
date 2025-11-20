// import { Component } from "react";

import { Component } from "react"

// export default function MyCours({LabelName , InputName,children}) {  // descrastring
//     let age = 18
//     return <>
//         <h1> -------------------------------------- Cours2 --------------------------------------- </h1>
//         <label>  {LabelName} </label>
//         <input placeholder={InputName} type="text" />
//         <p> {children} </p>
//         <h1><i> {InputName} you are {age>=18 ? "Adult" : "Mineur"} </i></h1>
//     </>
// }


export default class MyCours extends Component {
    age = 8
    render() {
        return <>
            <h1> -------------------------------------- Cours2 --------------------------------------- </h1>
            <label>  {this.props.LabelName} </label>
            <input placeholder={this.props.InputName} type="text" />
            <p> {this.props.children} </p>
            <h1><i> {this.props.InputName} you are {this.age>=18 ? "Adult" : "Mineur"} </i></h1>
        </>
    }
}



// export default class MyFunction extends Component {
//     render() {
//         return <>
//             <label> {this.props.LabelName} </label>
//             <input type="text" placeholder={this.props.InputName} />
//             <p> {this.props.children} </p>
//         </>
//     }
// }
// import { Component } from "react";


// export default function MyCours(props) {
    //     return <>
    //         <label>  XXXX : </label>
    //         <input name={props.InputName} type="text" />
    //     </>
    // }


// export default class MyCours extends Component {
//     render() {
//         return <>
//             <label> XXX :  </label>
//             <input name={this.props.InputName}  placeholder={this.props.InputName} type="text"/>
//             <h4> {this.props.children} </h4>
//         </>
//     }
// }

//######################        [[  hadi 2 toro9e nafes l résultat   ]]     ###################
//                                                                                  ###########
// export default class MyCours extends Component {                                 ###########
//     render() {                                                                   ###########
//         let age = 21                                                             ###########
//         let isAdult = false                                                      ###########
//         if (age >=18) {                                                          ###########
//                 isAdult = true                                                   ###########
//         }                                                                        ###########
//         if(isAdult) {                                                            ###########
//             return <h1> {this.props.InputName} big boy and you are Adult </h1>   ###########
//         }else{                                                                   ###########
//             return <h1> {this.props.InputName} minour and not Adult </h1>        ###########
//         }                                                                        ###########
//     }                                                                            ###########
// }                                                                                ###########
    //                                                                              ###########
// export default function MyCours(props) {                                         ###########
//     const age = 19                                                               ###########
//     return <>                                                                   
//         <h1> {props.InputName} your are {age>=18 ? "Adult" : "Not Adult"} </h1>   
//     </>                                                                                 // ###########
// }                                                                                       // ###########
//                      [[[  Tari9a dial l class  ]]]                                         ###########
//                                                                                         // ###########
//export default class MyCours extends Component {                                           // ###########
//    age = 18    // fi class ila beghayena n décelariw xi variable makanedirox const wla let kandiro semia dial variable nixane
//    render() {                                                                             // ###########
//        return <h1> {this.props.InputName} = {this.age>=18 ? "Accepte" : "No Accepte"} </h1>    // ###########
//    }                                                                                      // ###########
//}                                                                                          // ###########
//                                                                                           ###########
//######################################################################################################


// <> </>   hado ki tesemawe fragement 
// function({descraction}) 