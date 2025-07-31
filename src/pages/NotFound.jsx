import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const NotFound = () => {
  return (
    <div style={{padding: '2rem', textAlign: 'center' }}>
      <Header/>
      <h1 style={{ marginTop: '80px', color: '#c00', fontSize: '10rem' }}>404</h1>

      <Link
        to="/"
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
        Volver a Home
      </Link>
      
      <div style={{ marginBottom: '90px'}}></div>
        <Footer/>
    </div>
    
  )
}

export default NotFound
