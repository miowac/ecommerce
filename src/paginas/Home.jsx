import React from 'react'

import Header from '../componentes/estaticos/Header'
import Footer from '../componentes/estaticos/Footer'
import ProductList from '../componentes/dinamicos/ProductList'
import loading from '../assets/loading.gif'
import portada from '../assets/MiowacDesign.png'

const Home = ({ cart ,productos, cargando, agregarCarrito, borrarProducto }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart}/>
      <main>
        
        
         <img src={portada} alt="portada"/>
        
       
        {
          cargando ? <img src={loading} alt='loading' /> :

          <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
        }


      </main>



      <Footer />
    </>
  )
}

export default Home