import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../components/estaticos/Footer'
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
const Login = () => {

  
  const {email, setEmail,password, setPassword, handleSubmit,errors} = useAuth()
  


  return (
    <div>
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginTop: '70px' }} className='text-center'>
        <i className="fa fa-sign-in fa-5x" aria-hidden="true"></i>
      </div>
        <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Correo Electronico 
        </label>
        <input
          id="formBasicEmail"
          type="email"
          placeholder="Ingrese su correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.5rem',
            border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
            borderRadius: '0.25rem',
          }}
        />
        {errors.email && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.email}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Contraseña
        </label>
        <input
          id="formBasicPassword"
          type="password"
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '0.5rem',
            border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
            borderRadius: '0.25rem',
          }}
        />
        {errors.password && (
          <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {errors.password}
          </div>
        )}
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.75rem',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Login
      </button>

      <Link
        to="/"
        style={{
          backgroundColor: '#4aa521ff',
          display: 'inline-block',
          padding: '0.75rem',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1rem',
          marginBottom: '70px',
          textAlign: 'center'
        }}
      >
        Volver a Home
      </Link>


    </form>
    
       <Footer/>
    </div>
     
  );
};

export default Login;
