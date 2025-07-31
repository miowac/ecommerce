import React, { useState, useEffect, useContext } from "react";
import FormularioProducto from "../components/admin/FormularioProducto";
import FormularioEdicion from "../components/admin/FormularioEdicion";
import { CartContext } from "../context/CartContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {

  const { setIsAuth } = useContext(CartContext)

  const {
    productos,
    loading,
    open,
    setOpen,
    openEditor,
    setOpenEditor,
    openDelete,
    setOpenDelete,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = useContext(AdminContext)

  const navigate = useNavigate()

  const handleClose = () => {
    setOpenEditor(false);
    setSeleccionado(null);
  };

  const handleCloseNew = () => {
    setOpen(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  
  return (
    <div className="container-flex">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <nav>
            <ul className="nav">
              <li className="navItem">
                <button className="navButton" onClick={() => {
                  setIsAuth(false);
                  navigate('/');
                  localStorage.removeItem('isAuth');
                }}>
                  <i className="fa-solid fa-right-from-bracket"></i>
                </button>
              </li>
              <li className="navItem">
                <a href="/admin">Admin</a>
              </li>
            </ul>
          </nav>

          <h1 className="title text-center">Panel Administrativo</h1>
          <div className="row">
            <button onClick={() => setOpen(true)} className="btn btn-success">Agregar producto nuevo</button>
          </div>
          {/* lista productos */}
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {productos.map((product) => (

              <div key={product.id} className="col">
                <div className="card">

                  <img src={product.imagen} className="card-img-top" alt={product.nombre}></img>

                  <div className="card-body" >

                    <h5 className="card-title">{product.nombre}</h5>
                    <span>Precio ${product.precio}</span>
                    <br />
                    <span>Stock {product.stock}</span>

                    <div className="d-grid gap-2 d-md-block">

                      <button className="btn btn-primary btn-sm " onClick={() => {
                        setOpenEditor(true)
                        setSeleccionado(product)
                        
                        
                      }}>Editar</button>
                      <button className="btn btn-danger btn-sm" 
                      onClick={() => { 
                        setOpenDelete(true)
                         setSeleccionado(product)
                        }}>Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* agrega productos*/}
      {open && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title">Agregar Producto</h5> */}
                <h5 className="text-xl font-semibold mb-4 text-gray-700">Agregar Producto</h5>
                <button type="button" className="btn-close" onClick={handleCloseNew}></button>
              </div>
              <div className="modal-body">
                <FormularioProducto onAgregar={agregarProducto} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseNew}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* editar */}
      {openEditor && seleccionado && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Producto</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                <FormularioEdicion productoSeleccionado={seleccionado} onActualizar={actualizarProducto} />
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* eliminar */}
      {openDelete && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="text-xl font-semibold mb-4 text-gray-700">Eliminar Producto</h5>
                <button type="button" className="btn-close" onClick={handleCloseDelete}></button>
              </div>
              <div className="modal-body">
                <p>Esta seguro de Eliminar el Producto: <strong>{seleccionado.nombre}</strong>?</p>
                 <div className="row">
                <button className="btn btn-danger" onClick={() => eliminarProducto(seleccionado.id)}>Eliminar Producto</button>
            </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseDelete}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>



  );
};

export default Admin;