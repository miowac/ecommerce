import React , {useState}from 'react'
import './styleProductos.css'
const Productos = ({producto,agregarCarrito}) => {

  const [cantidad, setCantidad] = useState(1);

  const increase = () => setCantidad(prev => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <section className='card'>
      <div className='imganContainer'>
        <img src={producto.imagen}alt="" className='imagen'/>
      </div>

      <h3 className='nombre'>{producto.nombre}</h3>
      <p className='precio'>Precio ${producto.precio}</p>
      <p className='stock'>Stock Disponible {producto.stock}</p>

      <div className='cantidadContainer'>
        <button className='qtyButton' onClick={decrease}>-</button>
        <span>{cantidad}</span>
        <button className='qtyButton' onClick={increase}>+</button>
      </div>

      <button onClick={()=> agregarCarrito(producto)}>Agregar al carrito</button>

    </section>
  )
}

export default Productos
