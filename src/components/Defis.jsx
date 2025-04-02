import React, { useState } from 'react'
import "../App.css"

function Defis() {
  const [nom, setNom] = useState(``)
  const [style, setStyle] = useState(``);

  function submit (e){
    e.preventDefault()
    console.log(e.target.name.value);
    setNom(e.target.name.value);

    if(!e.target.name.value){
     setNom(`Attention le champs requis est vide, veillez le remplir !!!`);
     setStyle({color:`red`})
   } else
   {
    setNom(`Bienvenu ${e.target.name.value}`)
   }

  }
  return (
    <> 
    <div>Defis</div>
    <form onSubmit={submit}>
      <label htmlFor="name"> Nom </label> <br />
      <input type="text" placeholder='Nom' id='name' name='name'/><br /> <br />
      <span id='message' style={style}>{nom}</span>

      <button type='submit'>Envoyer</button> <br /> <br />
    </form>
    <p>Bienvenu {nom}</p>
    </>
  )
}

export default Defis
