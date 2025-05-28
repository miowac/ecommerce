import React from 'react'
import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'


const AcercaDe = ({cart,borrarProducto}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <h2>Asi Comenzamos</h2>
      <p>Por el año 2015 nace la idea de hacer souvenirs que tengan por un lado la caracteristica de acompañar los eventos y por el otro que sea algo util para quien lo reciba.</p>
      <p>De alli surgen nuestros diseños para que los clientes puedan acompañar sus distintos eventos.</p>
      <p>Conectamos a las personas con souvenirs para que puedan regalar productos personalizados realizados con materiales de calidad.</p>
      <p>Nuestra misión: Brindar soluciones a través de productos innovadores con un servicio cálido y personalizado.</p>
      <p>Nuestra visión: Ser líderes en el rubro de souvenirs a Nivel Nacional, proveyendo productos innovadores y una excelente atención a nuestros clientes, colaborando siempre con un desarrollo sustentable del medio ambiente.</p>

      <Footer/>
    </>
  )
}

export default AcercaDe