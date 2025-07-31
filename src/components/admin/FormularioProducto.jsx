import React, { useState } from 'react';

function FormularioProducto({ onAgregar }) {
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        imagen: '',
        categoria: '',
    });
    const [errores, setErrores] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };


    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = 'El precio debe ser mayor a 0.';
        }
        if (!producto.categoria.trim() || producto.categoria.length < 5) {
            nuevosErrores.categoria = 'La categoria debe tener al menos 5 caracteres.';
        }
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            return;
        }
        onAgregar(producto); // Llamada a la función para agregar el producto
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            imagen: '',
            categoria: '',
        }); // Limpiar el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <h2 className="text-xl font-semibold mb-4 text-gray-700">Agregar Producto</h2> */}
            <div className="row">
                <div className="col-md-3 text-right">
                    <label>Nombre:</label>
                </div>
                <div className="col-md-9 text-right">
                    <input
                        className='form-control'
                        type="text" 
                        name="nombre" 
                        value={producto.nombre} 
                        onChange={handleChange} 
                        required 
                    />
                    {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-right">
                <label>Precio:</label>
                </div>
                <div className="col-md-9 text-right">
                <input 
                    className='form-control'
                    type="number" 
                    name="precio" 
                    value={producto.precio} 
                    onChange={handleChange} required
                    min="0" 
                />
                {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 text-right">
                <label>Stock:</label>
                </div>
                <div className="col-md-9 text-right">
                <input
                    className='form-control'
                    type="number"
                    name="stock"
                    value={producto.stock || ''}
                    onChange={handleChange}
                    required
                />
                {errores.stock && <p style={{ color: 'red' }}>{errores.stock}</p>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-right">
                <label>Imagen URL:</label>
                </div>
                <div className="col-md-9 text-right">
                <input
                    className='form-control'
                    type="text"
                    name="imagen"
                    value={producto.imagen || ''}
                    onChange={handleChange}
                    required
                />
                {errores.imagen && <p style={{ color: 'red' }}>{errores.imagen}</p>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-right">
                    <label>Categoría:</label>
                </div>
                <div className="col-md-9 text-right">
                    <input
                        className='form-control'
                        type="text"
                        name="categoria"
                        value={producto.categoria || ''}
                        onChange={handleChange}
                        required
                    />
                    {errores.categoria && <p style={{ color: 'red' }}>{errores.categoria}</p>}
                </div>
            </div>

            <div className="row">
                <button type="submit" className='btn btn-primary'>Agregar Producto</button>
            </div>
        </form>
    );
}

export default FormularioProducto;