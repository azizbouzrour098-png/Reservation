import { useState } from "react";

function MyButton() {
    return <button onClick={MyClick}> I am a button </button>
}

function MyClick() {
    return alert("you are the best today!")
}


const user = {name: "Welcome to my portfolio" , imageUrl: "image.jpg" , imageSize: 150}


let isUser = true ; 
// let azerty ;   hadi ila daret tari9a l mokhetasara makanbe9ax me7etajeha

// if(isUser) {  // ila kan isUser = true ghadi dire dakxi li kayen fi function dial SignAPP 
//     azerty = <SignApp />
// }
// else {   // ila makanx isUser ki sawi true ghadi dire lih dakxi li fi Login
//     azerty = <Login/>
// }


/////////////////////////////////////////////////////
// function Changer() {                           hadi ikhetisare dialeha 
//     setPersonne("Aziz")                      () => setPersonne("Aziz") kadireha waset mn l button 
// }

function SignApp () {
    const [count , setCount] = useState(0)
    setCount (count + 1)
    return <button onClick={SignApp}> {count} أستغفر الله </button>
}
function Login() {
    return <button> Login </button>
}

const Products = [
            { id: 1, title: 'Hp i5 11éme ', price: 4599, inStock: true },
            { id: 2, title: 'Lenovo', price: 50, inStock: false },
            { id: 3, title: 'Redmi', price: 99 , inStock: true }
] ;

export default function MyApp() {
    const listItems = Products.map(Products => 
        <h2 key={Products.id} style={{color:Products.inStock ? "red" : "Green"}} > {Products.title} </h2>)
        // fi style katgolih ghtmxi l products fi instock ila kant true ghadi dire red o ila kant false ghadi dire green 
    return (
        <>
            <img src={user.imageUrl} alt="photo is note trouve" style={{ width : user.imageSize , height : user.imageSize , borderRadius : user.imageSize}} />
            <p style={{marginLeft : 60}}> {listItems} </p>
            
            <h1> {user.name} </h1>
            <img src={user.imageUrl} alt="photo is note trouve" style={{ width : user.imageSize , height : user.imageSize , borderRadius : user.imageSize}} />
            <br/>
            <MyButton/>
            <br/>
            {isUser ? <SignApp /> : <Login />} 
             {/*hadi tari9a mokhetasara dial if o else   */}
        </>
    )
}