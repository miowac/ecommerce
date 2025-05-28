import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '../estaticos/styleEstatico.css'
import Cart from '../dinamicos/cart'


const Header = ({cartItems,borrarProducto}) => {
const [isCartOpen, setCartOpen] = useState(false)


  return (
    <header>
      <nav>
        <ul>
            <li><Link to='/' className='link'>Inicio</Link></li>
            <li><Link to='/acercade' className='link'>Asi Comenzamos</Link></li>
            <li><Link to='/productos' className='link'>Nuestros Productos</Link></li>
            <li><Link to='/contacto' className='link'>Contactanos</Link></li>
            <li className='cartnav'>
              <button className='btnCart' onClick={()=> setCartOpen(true)}><i className="fa-solid fa-cart-shopping"></i></button>
              <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isCartOpen} onClose={()=> setCartOpen(false)}/>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header