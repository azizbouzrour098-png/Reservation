import React , {useState} from 'react'
import ProfilForm from './Components/ProfilForm.js'
import DisplayForm from './Components/DisplayForm.js'
export default function App() {
  const [profil,setProfil] = useState({
       nom:"",
       bio:"",
       metier:""
  })

  const handlForm=(data)=>{
    setProfil(data);
    console.log(data)
  }

  return (
    <div>
       <ProfilForm onSubmitForm={handlForm}/>
       <DisplayForm info={profil}/>
    </div>
  )
}






import React from 'react'

export default function DisplayForm({info}) {
  return (
    <div>
       <h3>Votre profil</h3>
       <p><b>Nom: </b>{info.nom}</p>
       <p><b>bio: </b>{info.bio}</p>
       <p><b>metier: </b>{info.metier}</p>
    </div>
  )
}