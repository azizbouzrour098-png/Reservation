    ///////////////////////// 
   //                     //
  //   Virtual DOM       //
 //                     //
/////////////////////////

  //  // CRUD : ajouter
 // // Ajoupe : 
// // virtual DOM : 

// import { useState } from "react"

// export default function MyNumber({Numbres}) {
    
//     const [numbr , setNumbr] = useState('')

//     const [nvnumbr , setNvnumbr] = useState([])

//     const [valeur , setValeur] = useState(0)

//     // const [variable , setVariable] = useState([])
    
//     const azerty = () => Numbres.map((Numbres,numbersKey) => <li key={numbersKey}> {Numbres} </li>)
    
//     const changeValeur = () => {
//         const numberValue = document.querySelector('#nbr').value   // hena kane3ayeto 3ela les valeur li kaynin fi input 
//         setNumbr(numberValue)
//     }

//     const Afichage = (e) => {    // hadi kamela ila ketabeti xi haja f input o warekati 3eli button bax dire submit ghad tesayefate hadxi l console 
//         e.preventDefault();     // ila 7ayadet had e (events) ghadi ysayfetha lik f lien lfou9 maghadix y sayefateha f console 
//         const newNumber = nvnumbr
//         newNumber.push(numbr)
//     // dakhel numbr kanezido valeur jedida 
//         // setNvnumbr(newNumber)
//         // setNvnumbr([...nvnumbr , numbr])
//         console.log(newNumber)
//         document.write("<h1> غادي نصوفيو حنا و غادي نصوفيو والدينا معانا </h1>")

//     }

//     return <>
//         <form>
//             <input type="text" onChange={changeValeur} id="nbr" />
//             <input type="Submit" onClick={Afichage} value="Click Here"/>
//         </form>
//         <h2> Les Numbers en Germany :  </h2>
        
//         <button onClick={() => {
//             setValeur(
//                 prevState => {
//                     return prevState + 1
//                 }
//             )
//         }} > +1 </button>
//         <br />
//         <button onClick={() => {
//             setValeur(
//                 prevState => {
//                     return prevState - 1
//                 }
//             )
//         }} > -1 </button>
//         <br />
//         <button onClick={() => {
//             setValeur(0)
//         }}>
//             = 0
//         </button>

//         <h3> {valeur} minutes </h3>
//         <ul>
//             {azerty()}
//             <li> {numbr} </li>   
//     {/* ila ketabet xi haja f l input ghadi ye afichi lik dakxi li ketabetih fl input o ila maketabeti walo ghadi y afichi lik 1 li fi useState  */}
//         </ul>
//     </>
// }




import { useState } from "react"
export default function MyFunction({Numbres}) {

    const [input , setInput] = useState('')
    const [output , setOutput] = useState([])

    const arrayNum = () => Numbres.map(civi => <li> {civi} </li>)

    const inputMap = () => output.map((Dutsh , keyOutput) => <li key={keyOutput}> {Dutsh} </li>)

    const ChangeValeur = () => {  // hena kane3ayeto 3ela les Valeur li kaynin fi input 
        const valueChange = document.querySelector('#nbr').value
        setInput(valueChange)
    }

    const SubmitValeur = (e) => {  // hadi kamela ila ketabeti xi haja f input o warekati 3eli button bax dire submit ghad tesayefate hadxi l console
        e.preventDefault()     // ila 7ayadet had e (events) ghadi ysayfetha lik f lien lfou9 maghadix y sayefateha f console 
        setOutput([...output , input])
    }

    return <>
        <form>
            <input type="text" id="nbr" onChange={ChangeValeur} />           
 
            <input type="Submit" value="Submit la valeur in array" onClick={SubmitValeur}/>            
        </form>
        <h1> Les Numbers en Germany :  </h1>
        <ul>
            {arrayNum()}
            {inputMap()}
        </ul>
    </>
}

