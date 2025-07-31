import React, { useState, useEffect } from 'react';

function FormularioEdicion({ productoSeleccionado, onActualizar }) {
    const [producto, setProducto] = useState(productoSeleccionado);
    const [errores, setErrores] = useState({});
   
    useEffect(()=>{
        setProducto(productoSeleccionado)
    },[productoSeleccionado])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });

    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio.';
        }
         if (!producto.nombre.trim() || producto.nombre.length < 10) {
            nuevosErrores.nombre = 'El nombre debe tener al menos 10 caracteres.';
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
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
             if (!validarFormulario()) {
            return;
        }
            onActualizar(producto)
        }}>
            {/* <h2>Editar Producto</h2> */}
            <div className="row">
                <div className="col-md-3 text-right">
                    <label>ID:</label>
                </div>
                <div className="col-md-9">
                    <input
                        className='form-control'
                        type="number"
                        name="id"
                        value={producto.id || ''}
                        onChange={handleChange}
                        readOnly

                    />

                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-right">
                    <label>Nombre:</label>
                </div>
                <div className="col-md-9 text-right">
                    <input
                        className='form-control'
                        type="text"
                        name="nombre"
                        value={producto.nombre || ''}
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
                    value={producto.precio || ''}
                    onChange={handleChange}
                    required
                    min="0"
                />
                  {errores.precio && <p style={{ color: 'red' }}>{errores.precio}</p>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-right">
                <label>stock:</label>
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
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 text-right">
                <label>Categoria:</label>
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
            <div><hr /></div>
            <div className="row">
                <button type="submit" className="btn btn-primary">Actualizar Producto</button>
            </div>
        </form>
    );
}
export default FormularioEdicion;