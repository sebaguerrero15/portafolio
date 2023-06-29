import { useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Image from "next/image";

const Contacto = () => {


  return (
    <section className="mt-[110px] py-6 md:flex md:justify-center md:gap-[60px] md:items-center">
    <div id="contacto">
        <h2 className="text-white text-center uppercase font-bold mb-10 text-[30px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Enviame un correo </span>✉️</h2>

      <form className="grid justify-center mb-10 text-xl">
        
        <input className="bg-gray-50 py-3 border border-gray-300 rounded-xl w-[500px] focus:outline-[#FC7903] text-gray-900 block p-3" type="text" name="name" placeholder=" Ingresa tu Nombre"   />
        

        <br />
        <input className="bg-gray-50 py-3 border border-gray-300 rounded-xl w-[500px] focus:ring-amber-500 focus:outline-[#FC7903] text-gray-900 block p-3" type="text" name="correo" placeholder=" Ingresa tu Correo"/>
       

        <br />
        <textarea placeholder=" Hablemos" name="mensaje" className="bg-gray-50 py-3 border border-gray-300 w-[500px] h-[150px] rounded-lg focus:outline-[#FC7903] text-gray-900 block p-3" maxLength="325"  style={{ resize: 'none' }}/>
       
        <br />
        <button type="submit" className="text-white py-4 font-semibold border-none rounded-[50px] bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] text-lg uppercase">
          Enviar
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contacto;
