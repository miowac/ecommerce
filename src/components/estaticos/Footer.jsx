import React from 'react'
import './styleEstatico.css'

const Footer = () => {
  return (
    <footer>
      <div className='container-flex'>
              
        <ul>
          <li>&copy; Irene Olivera - 2025</li>
          <li>Seguinos  <i className="bi bi-instagram"> <i className="bi bi-facebook"></i></i></li>  
          <li><i className="bi bi-whatsapp"></i> +54 9 11 4075 0112</li>
          <li><i className="bi bi-geo-alt"></i>Jean Jaures 367, C.A.B.A.</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer
