import React from 'react'
import Pic from '../Images/pic.jpg'
import '../CSS/Tarjeta.css'
export const Tarjeta = (props) => {

    const {nombre,profesion,correo,telefono,direccion} = props
  return (
    <div>
        <div className='inline'>
            <img src={Pic} alt="" className='ProfilePic'/>
            <div>
                <h1>{nombre}</h1>
                <h2>{profesion}</h2>
                <h3>{correo}</h3>
                <h3>{telefono}</h3>
                <h3>{direccion}</h3>
            </div>
         
        </div>
    </div>
  )
}

export default Tarjeta
