import { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {

const [datos, setDatos] = useState({
  name: '',
  correo: '',
  mensaje: '',
});

const [formErrors, setFormErrors] = useState({});

const enviarCorreo = () => {
const templateParams = {
  from_name: datos.name,
  from_email: datos.correo,
  message: datos.mensaje,
};

emailjs.send("service_5w92ee9","template_1sb9kjo", templateParams, "1f-Qg7Jrp-zrW7ra1")
.then((response) => {
  console.log('SUCCESS!', response.status, response.text);
  Swal.fire({
    icon: 'success',
    title: '¡Correo enviado exitosamente!',
    text: 'El correo se ha enviado correctamente.',
  })
  

}, (err) => {
  Swal.fire({
    icon: 'error',
    title: '¡Problemas!',
    text: 'El correo no se pudo enviar',
  })
  console.log(err)
});
}



const handleSubmit = (e) => {
  e.preventDefault();
  setDatos({
    ...datos,
    [e.target.name]: e.target.value,
  });

  const errors = {}

  if (!datos.name.trim()) {
    errors.name = 'El nombre es requerido';
  }

  // Validación del campo "email"
  if (!datos.correo.trim()) {
    errors.correo = 'El correo electrónico es requerido';
  }

  if (!datos.mensaje.trim()) {
    errors.mensaje = 'El mensaje es requerido';
  }
  setFormErrors(errors);

  // Retorna verdadero si no hay errores de validación
  return Object.keys(errors).length === 0;

};

  return (
    <section className="mt-[50px]">
    <div id="contacto">
        <h2 className="text-white text-center uppercase font-bold mb-10 text-[30px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Enviame un correo </span>✉️</h2>

      <form className="grid justify-center mb-10 text-xl" onSubmit={enviarCorreo}>
        
        <input className="p-1 rounded-xl w-[500px]" type="text" name="name" placeholder=" Ingresa tu Nombre" value={datos.name} onChange={handleSubmit} />
        {formErrors.name && <span className="text-red-800">{formErrors.name}</span>}

        <br />
        <input className="p-1 rounded-xl w-[500px]" type="text" name="correo" placeholder=" Ingresa tu Correo" value={datos.correo} onChange={handleSubmit} />
        {formErrors.correo && <span className="text-red-800">{formErrors.correo}</span>}

        <br />
        <textarea placeholder=" Hablemos" name="mensaje" className="w-[500px] h-[150px] rounded-lg" maxLength="325" value={datos.mensaje} onChange={handleSubmit} style={{ resize: 'none' }}/>
        {formErrors.mensaje && <span className="text-red-800">{formErrors.mensaje}</span>}
        <br />
        <button type="submit" className="text-white p-1 font-bold border-none rounded-lg bg-orange-600 text-lg uppercase hover:bg-orange-700">
          Enviar
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contacto;
