const initialeState = {todus : [] , };
export default todoRedux(state=initialeState , action){
    switch (action.type) {
        case 'ADD_TODO':
            
            return
    
        default:
            return
    }
}








// // import './Exercice 1.css'
// import { useState } from 'react' ;

// function Board() {
//     const [value , setValue] = useState(undefined)

    
    
//     function MyClick() {
//         setValue("X")
        
//     }
//     return (
//         <button onClick={MyClick} className='Board'> {value} </button>
//     );
// }

// export default function Squide() {

//     const [name , setName] = useState("")
//     const [age , setAge] = useState("")

//     const ChangeValeur = () => {
//         const name = document.querySelector('#name').value
//         setName(name)
//         const age = document.querySelector('#age').value
//         setAge(age)
//     }
//     const handelSubmit = (e) => {
//         e.preventDefault()    // ki be9a fl page dialo o les donnée ma ki sayfthomx ki be9aw   
//         console.log({
//             name , age
//         })
//     }
//     return (
//         <div className='Parent'>
//             <div className='azerty'>
//                 <Board />
//                 <Board />
//                 <Board />
//             </div>
//             <div className='azerty'>
//                 <Board />
//                 <Board />
//                 <Board />
//             </div>
//             <div className='azerty'>
//                 <Board />
//                 <Board />
//                 <Board />
//             </div>
//             <br/><br/>

//             <hr/> <hr style={{height:"20px" , backgroundColor:"gray"}} /> <hr/>

//             <form>
//                 <input type='text' id='name' onChange={ChangeValeur} placeholder='Name'/>
//                 <input type='number' id='age' onChange={ChangeValeur} placeholder='Age'/>
//                 <input type='submit' onClick={handelSubmit} value='Submit' />
//             </form>
//         </div>
//     )
// }