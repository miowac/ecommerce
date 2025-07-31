import React, { useContext } from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'
import portada from '../assets/MiowacDesign.png'
import { CartContext } from '../context/CartContext'

const Home = ({ agregarCarrito,  }) => {

  const {cargando} = useContext(CartContext) 

  return (
    <>
      <Header />
      <main>
        <h1 className='text-center'>Bienvenidos a mi Tienda</h1>
        <img className='img-fluid' src={portada} alt="portada" />
        
        {
          cargando ? <img src={loading} alt='loading' /> :

          <ProductList />
        }


      </main>



      <Footer />
    </>
  )
}

export default Home
