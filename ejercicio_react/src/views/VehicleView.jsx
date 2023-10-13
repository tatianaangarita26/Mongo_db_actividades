import React from 'react'
import "./vehicle.css"

function VehicleView({vehicle}) {
  return <div className='container2'>
    <div>
      <h1>{vehicle.name}</h1>
      <h2>{vehicle.description}</h2>
      <img src={vehicle.image} alt={vehicle.name + "imagen"} />
    </div>
    <div className='boton'>
    <a href='/' >Regresar</a>
    </div>
  </div>
  
}


export default VehicleView
