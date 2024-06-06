import { useState } from 'react';
import axios from 'axios';
import '../estilos/conponentes/paginas/ContactoPage.css';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value /* FORMA DINÁMICA */
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }

    }

    return (
        <main className='contacto-main'>
            <h1>Contacto</h1>
            <div className='flex-contacto'>
            <form className='formulario' onSubmit={handleSubmit} action='/contacto' method='post'>
                <h3>Contacto Rápido</h3>
                <p className='p-form'>
                    <label>Nombre</label>
                    <input type='text' name='nombre' value={formData.nombre} onChange={handleChange} />
                </p>
                <p className='p-form'>
                    <label>Email</label>
                    <input type='text' name='email' value={formData.email} onChange={handleChange} />
                </p>
                <p className='p-form'> 
                    <label>Teléfono</label>
                    <input type='text' name='telefono' value={formData.telefono} onChange={handleChange} />

                </p>
                <p className='p-form'>
                    <label>Mensaje</label>
                    <textarea name='mensaje' value={formData.mensaje} onChange={handleChange} />
                </p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

                <p>
                    <input className='enviar' type='submit' value="Enviar" /> 
                </p>
            </form>

            < div className='otros' >
                <h3>Otras vias de comunicación</h3>
                <p className='p-contacto'>Puede comunicarse con nosotros por los siguientes medios</p>
                <ul>
                    <li>Teléfono: 1125213004 </li>
                    <li>Email: contacto@disneylatino.com</li>
                    <li>Facebook: disneylatino </li>
                    <li>Twitter: @disneylatino </li>

                </ul>
            </div >
        </div>
</main >

       



)



}

export default ContactoPage; 