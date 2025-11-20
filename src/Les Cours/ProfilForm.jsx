// import React, { useState } from 'react'

// export default function ProfilForm({onSubmitForm}) {
//     const [nom,setNom] = useState("");
//     const [bio,setBio] = useState("");
//     const [metier,setMetier] = useState("");
// const handleSubmit = (e) =>{
//     e.preventDefault();
//     onSubmitForm({nom,bio,metier});//Communication enfant --> parent
//     alert("Donnees recuperees et envoyees au parent")
// }
//   return (
//     <div style={{textAlign:'center'}}>
//        <form onSubmit={handleSubmit}>
//               <h2>Creez votre profil</h2>
//               <label>Nom: </label><br></br>
//               <input placeholder='Ex: Ali' onChange={(e)=>setNom(e.target.value)}/><br></br>
//               <label>Biographie</label><br></br>
//               <textarea cols={40} rows={10} onChange={(e)=>setBio(e.target.value)}></textarea><br></br>
//               <label>Metier: </label><br></br>
//               <select onChange={(e)=>setMetier(e.target.value)}>
//                      <option value="" >-- Choisissez votre metier--</option>
//                      <option value="Developper">Developper</option>
//                      <option value="Minuiserie">Minuiserie</option>
//                      <option value="Designer">Designer</option>
//               </select><br></br>
//               <button type='submit'>Afficher Profil</button>
       
       
//        </form>
//     </div>
//   )
// }

// export default function DisplayForm({info}) {
//   return (
//     <div>
//        <h3>Votre profil</h3>
//        <p><b>Nom: </b>{info.nom}</p>
//        <p><b>bio: </b>{info.bio}</p>
//        <p><b>metier: </b>{info.metier}</p>
//     </div>
//   )
// }

// import React , {useState} from 'react'
// import ProfilForm from './ProfilForm.jsx'
// import DisplayForm from './DisplayForm.jsx'
// export default function App() {
//   const [profil,setProfil] = useState({
//        nom:"",
//        bio:"",
//        metier:""
//   })

//   const handlForm=(data)=>{
//     setProfil(data);
//     console.log(data)
//   }

//   return (
//     <div>
//        <ProfilForm onSubmitForm={handlForm}/>
//        <DisplayForm info={profil}/>
//     </div>
//   )
// }



