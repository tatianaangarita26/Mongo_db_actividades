import React from 'react'
import { useState } from 'react'

function ShowHide() {
    const [Show, setShow] = useState(true);

    const handleClick = (event) => {
        setShow(!Show);
    };

  return (
    <div>
      <div className='btn'>
        <button onClick={handleClick}>{Show ? "Ocultar" : "Mostrar"} Texto</button>
      </div>
      {Show && <h2>Escondeme !</h2>}
    </div>
  )
}

export default ShowHide
