    ///////////////////////////
   //                       //
  //        state          //
 //                       //
///////////////////////////

//  tari9a dial function 




// tari9a dial l class 
import { Component } from "react";

export default class MySetate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nom : "Aziz" ,
            date : 0 , 
            age : 18 ,
        }
    }

    clickPlus = () => {
        console.log(this)
        this.setState(
            prevState => {
                console.log(prevState)
                return {date : prevState.date+1}
            })
    //  componentDidMount() {   // katxof wax Composant tmoneta fi virtouyile DOM  wla mazal (wax Composant 3ayatena lih wela mazal)
    //     setInterval(() => {    // had setInterval hia dial lwa9et 3ela xe7al ghai y afichi lik hadxi  
    //         this.setState(
    //             prevState => {
    //                 console.log(prevState)
    //                 return {date : prevState.date+1}
    //             })
    //     }, 5000);
    // }
}


    clickMoins = () => {
        this.setState(
            prevState => {
                return {date : prevState.date-1}
            }
        )
    }

    clickReset = () => {
        this.setState({date : 0})
    }

    // componentDidMount() {    hena katgolih 7eta ykon kolxi wajed (7eta ykon composant wajed 3ad dire li hadxi)
    //     this.setState{state : {date:1}}     hena kateghayare lik le9ima dial date xe7al ma 3etaytiha nta 
    // }
    render(){
        return <>
        <hr/><hr/> Cours3 <hr/><hr/>
        
        <button onClick={this.clickPlus}>  +1 </button> 
        <br />
        <button onClick={this.clickMoins}> -1 </button>
        <br />
        <button onClick={this.clickReset}> 0 </button>
        <h1> Hello {this.state.Nom} your date is {this.state.date} </h1>
        <h3> {this.state.age >=18 ? "Adulte" : "Mineur"} </h3>
        
        </> 
    }
}


// props : homa les valeurs li kayjiwena mn bara l dakhel dial Component   (Read only) maymkn lik tebadelo
// Children : 7eta homa kijiw mn bara (kaykon ghir afichage wla Composant ki 3ayate 3ela Composant)
// State : be7al wahade sala katkon waset mn Component kane3ameroha b les variables (kaykon l dakhel ymkn lik tbadelo)