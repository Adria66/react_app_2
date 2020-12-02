import React from 'react'


const Pets = (props)=>{

  const renderPets = () => {
    return props.pets.map((pet, index) => {
      return (
        <div key={index}>
          <li>{pet.name} -- {pet.animal}</li>
          <button onClick={()=>props.deletePet(pet.name)}>Delete</button>          
        </div>
      )
    })
  }

  const onInputChange = (_event)=>{
    props.updateAnimals(_event.target.name, _event.target.value)
  }


  return(
    <div>
      <h2>Pets component</h2>

      {/* <label htmlFor="addAnimal">Pet's name: </label>
      <input type="text" id="addAnimal" name="addAnimal"/>
      <button onClick={
        () => props.addPet(document.getElementById('addAnimal').value)
      }>
        Add
      </button> */}

    <form onSubmit={props.addPet}>

        <label htmlFor="name">Name: </label>
        <input 
        type="text" 
        name="name" 
        value={props.temporalNewAnimal.name} 
        onChange={(event)=>onInputChange(event)} 
        placeholder="Introduce un animal"
        />

        <label htmlFor="animal">Animal: </label>
        <input 
        type="text" 
        name="animal" 
        value={props.temporalNewAnimal.animal} 
        onChange={(event)=>onInputChange(event)} 
        placeholder="Introduce un nombre"
        />

        <button type="submit">Crear animal</button>
    </form>

      <ul>
        {renderPets()}
      </ul>
    </div>
  )
}

export default Pets