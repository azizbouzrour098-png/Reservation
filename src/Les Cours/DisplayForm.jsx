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