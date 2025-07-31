import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = ({cart,borrarProducto}) => {
  return (
    <div >
      <Header />
     
      <h2 style={{ marginTop: '30px' }} className='text-center'>Asi Comenzamos</h2>
      
      <div style={{ marginTop: '30px' }}className='container-fluid'>
      <p className='lead'>Por el año 2015 nace la idea de hacer souvenirs que tengan por un lado la caracteristica de acompañar los eventos y por el otro que sea algo util para quien lo reciba.</p>
      <p className='lead'>De alli surgen nuestros diseños para que los clientes puedan acompañar sus distintos eventos.</p>
      <p className='lead'>Conectamos a las personas con souvenirs para que puedan regalar productos personalizados realizados con materiales de calidad.</p>
      <p className='lead'><strong>Nuestra misión:</strong> Brindar soluciones a través de productos innovadores con un servicio cálido y personalizado.</p>
      <p className='lead'><strong>Nuestra visión: </strong>Ser líderes en el rubro de souvenirs a Nivel Nacional, haciendo productos innovadores y una excelente atención a nuestros clientes, colaborando con el medio ambiente.</p>
     </div>
         
      <Footer />
    </div>
  )
}

export default AcercaDe
