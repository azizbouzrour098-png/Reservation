import React , {useState} from 'react'
import ProfilForm from './ProfilForm.jsx'
import DisplayForm from './DisplayForm.jsx'
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
