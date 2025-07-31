import React, { useState } from 'react';
import Swal from "sweetalert2";
import '../estaticos/formulario.css'


export default function Formulario() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [celular, setCelular] = useState('');
  const [mensaje, setMensaje] = useState('');
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  function manejarEnvio(evento) {
    evento.preventDefault();
   
    const datos=`<p><strong>Nombre:</strong> ${nombre} <br/> <strong>Email:</strong> ${email} <br/> <strong>Celular:</strong> ${celular} <br/> <strong>Mensaje:</strong> ${mensaje}</p>` 
    

    Swal.fire({
           
            title: "Datos enviados correctamente!",
            html: datos,
            icon: "info"
          });
    setNombre('')
    setEmail('')
    setCelular('')
    setMensaje('')

  }

  return (
    <>

      <div className='container col-6'>
        <div className='row d-flex justify-content-center'>

          <h4 style={{ marginTop: '30px' }} className="font-weight-bold text-center">Contactanos</h4>

          <form style={{ marginLeft: '60px', marginTop: '30px', marginRight: '60px' }} onSubmit={manejarEnvio}>

            <br />

            <div className='row justify-content-center'>
              <h6>Nombre <span className="text-danger">*</span></h6>
              <input type="hidden" id="enviar_form" name="enviar_form" value="1" />

              <div className="form-group">
                <input className="form-control contact" type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Nombre y apellidos" required />

              </div>
              <h6>Email <span className="text-danger">*</span></h6>
              <div className="form-group">
                <input
                  className="form-control contact"
                  type="text"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);

                    if (!validarEmail(value)) {
                      setEmailError('El correo no es válido');
                    } else {
                      setEmailError('');
                    }
                  }}
                  placeholder="Ingresa tu e-mail" required
                />
                {emailError && <div className="text-danger mt-1">{emailError}</div>}
              </div>


              <h6>Celular</h6>
              <div className="form-group">
                <input type="number" className="form-control contact"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                  placeholder="Ingresa tu celular" />
              </div>
              <h6>Mensaje</h6>
              <div className="form-group">
                <textarea className="form-control contact" value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Preguntas/Comentarios" rows="5"></textarea>
              </div>

              <div style={{ marginTop: '20px' }} className="text-center">

                <div className="row">
                  <div className="col-md-4 offset-md-4">
                    <div >
                      <button type="submit" className="btn btn-secondary">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </form>


        </div>


        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>


    </>
  );
}