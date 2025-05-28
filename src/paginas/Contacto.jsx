import React from 'react'
import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'
import Formulario from '../componentes/dinamicos/Formulario'


const Contactos = ({ cart, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />

      <Formulario />

      <Footer />
    </>
  )
}

export default Contactos
