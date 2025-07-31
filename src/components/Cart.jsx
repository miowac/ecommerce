import React, { useContext } from 'react'
import './styleCart.css'
import { CartContext } from '../context/CartContext'
const Cart = ({ isOpen, onClose, }) => {

  const { cart, handleDeleteFromCart, clearCart } = useContext(CartContext)

  // console.log(cart);

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className='cart-header'>
        <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
        <button style={{ color: 'blue' }} onClick={onClose} className='close-button'>X</button>
      </div>

      <div className="cart-content">
        {cart.length === 0 ? (
          <p style={{ color: 'red' }}>El carrito está vacío</p>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-striped align-middle small">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nombre}</td>
                      <td className='text-end'>${Number(item.precio).toFixed(2)}</td>
                      <td className='text-center'>{item.cantidad}</td>
                      <td className='text-end'>${(Number(item.precio) * Number(item.cantidad)).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDeleteFromCart(item)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className='text-end'><p style={{ color: 'blue', fontWeight: 'bold' }}>
                      Total: </p>
                    </td>
                    <td className='text-end'><p style={{ color: 'blue', fontWeight: 'bold' }}>
                      ${cart.reduce((total, item) => total + Number(item.precio) * Number(item.cantidad), 0).toFixed(2)}</p>
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="cart-footer d-flex justify-content-between align-items-center mt-3">
             <p></p>
              <button 
                className="btn btn-secondary btnCheckout"
                onClick={clearCart}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>



    </div>
  )
}

export default Cart
