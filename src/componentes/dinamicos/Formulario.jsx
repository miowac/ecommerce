import React, { useState } from 'react';

import '../dinamicos/formulario.css'


export default function Formulario() {


    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [mensaje, setMensaje] = useState('');


    function manejarEnvio(evento) {
        evento.preventDefault();
        alert(`Datos enviados: \n Nombre: ${nombre}  \n Email: ${email} \n Celular: ${celular} \n Mensaje: ${mensaje}`);
        setNombre('')
        setEmail('')
        setCelular('')
        setMensaje('')
    }


    return (

        <form style={{ marginLeft: '60px' }} onSubmit={manejarEnvio}>
            <h2>Contactanos</h2>
            <ul className='formu'><label htmlFor="">Nombre </label>
                <input


                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingresa tu nombre"
                /></ul>
            <ul className='formu'><label htmlFor="">Email </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu email"
                /></ul>

            <ul className='formu'> <label htmlFor="">Celular </label>
                <input
                    type="text"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                    placeholder="Ingresa tu celular"
                /></ul>
            <ul className='formu'><label htmlFor="">Mensaje </label>
                <input
                    type="text"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Ingresa tu mensaje"
                /></ul>


            <button type="submit">Enviar</button>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, pariatur accusantium sunt ipsam at cupiditate? Totam, mollitia ipsam quibusdam animi est illum excepturi asperiores quod omnis voluptates quam eveniet voluptatem.</p>
        </form>
    );
}