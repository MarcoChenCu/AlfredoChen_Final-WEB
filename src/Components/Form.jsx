import React from 'react'
import Tarjeta from './Tarjeta'
import {useState} from 'react'
import '../CSS/Form.css'

export const Form = () => {
    let [nombre, setNombre] = useState('Nombre')
    let [profesion, setProfesion] = useState('Profesión')
    let [correo, setCorreo] = useState('Correo')
    let [telefono, setTelefono] = useState('Teléfono')
    let [direccion, setDireccion] = useState('Dirección')
    //Funciones que permiten actualizar los estados
    const SetNombre = (nombre) => {
        setNombre(nombre)
    }
    const SetProfesion = (profesion) => {
        setProfesion(profesion)
    }
    const SetCorreo = (correo) => {
        setCorreo(correo)
    }
    const SetTelefono = (telefono) => {
        setTelefono(telefono)
    }
    const SetDireccion = (direccion) => {
        setDireccion(direccion)
    }

  return (
    <form>
        <input onChange={e =>{setNombre(e.target.value)}} type="text" placeholder='Nombre' className='TextBox'/><br/>
        <input onChange={e =>{setProfesion(e.target.value)}} type="text" placeholder='Profesión' className='TextBox'/><br />
        <input onChange={e =>{setCorreo(e.target.value)}} type="email" placeholder='Email' className='TextBox'/><br />
        <input onChange={e =>{setTelefono(e.target.value)}} type="text" placeholder='Teléfono' className='TextBox'/><br />
        <input onChange={e =>{setDireccion(e.target.value)}} type="text" placeholder='Dirección' className='TextBox'/><br />
        <button onClick={
                <Tarjeta nombre={nombre} profesion={profesion} correo={correo} telefono={telefono} direccion={direccion} />
        }>Generar</button>    
    </form>
  )
}

export default Form