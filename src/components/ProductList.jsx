import React, { useContext, useState } from 'react'
import Productos from './Productos'
import { CartContext } from '../context/CartContext'

const ProductList = ({ agregarCarrito }) => {

    const {productos} = useContext(CartContext)
    const [busqueda, setBusqueda] = useState('');

    // Filtrar productos según la búsqueda
    const arr_productos = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <>
            <h2 className='text-center'>Galeria de productos</h2>

            <div className='text-center my-3'>
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={busqueda}
                    onChange={e => setBusqueda(e.target.value)}
                    style={{
                        padding: '10px',
                        width: '60%',
                        borderRadius: '5px',
                        border: '1px solid #ccc'
                    }}
                />
            </div>
            
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
                {
                    arr_productos.map(producto => (
                        <Productos key={producto.id} producto={producto}/>
                    ))
                }
            </div>


        </>
    )
}

export default ProductList
