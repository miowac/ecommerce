import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './estaticos/Header'
import Footer from './estaticos/Footer'
import { CartContext } from '../context/CartContext'

const DetallesProductos = () => {

  const { productos } = useContext(CartContext)
  const { id } = useParams()

  const product = productos.find(producto => producto.id == id)

  if (!product) {
    return (

      <div style={{padding: '2rem', textAlign: 'center' }}>
       <Header/>
        <h1 style={{ marginTop: '150px', color: '#c00' }}>Detalle del producto: {id}</h1>
        <p style={{ fontSize: '1.2rem' }}>Producto no encontrado</p>

        <Link
          to="/productos"
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: '#787a7aff',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}
        >
          Volver a Productos
        </Link>
       <div style={{ marginBottom: '150px'}}></div>
        <Footer/>
      </div>
    )
  }

  return (
    <>
      <Header />
      <section
        style={{
          maxWidth: '600px',
          margin: '32px auto',
          padding: '2rem',
          border: '1px solid #eee',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
          background: '#fff',
        }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>
          {product.nombre}
        </h1>
        {product.imagen && (
          <img
            src={product.imagen}
            alt={product.nombre}
            className="card-img-top img-fluid"
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}
          />
        )}
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>
          {product.descripcion}
        </p>
        <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#3e3f3fff' }}>
          Precio: $ {product.precio}
        </p>
        <details style={{ marginBottom: '1.5rem' }}>
          <summary style={{ fontWeight: 'bold', color: '#333' }}>
            Detalles del producto
          </summary>
          <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
            <li>Marca: Miowac Design</li>
            <li>Categoría: {product.categoria}</li>
            <li>SKU: {product.id * 150}</li>
            <li className='text-end'>Fecha de lanzamiento: {new Date().toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            })}</li>
          </ul>
        </details>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#3e3f3fff' }}>
          Stock: {product.stock}
        </p>
        <Link
          to="/productos"
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: '#787a7aff',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}
        >
          Volver a Productos
        </Link>
      </section>
      <Footer />
    </>
  )
}

export default DetallesProductos
