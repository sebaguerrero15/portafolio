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
        
        <input className="p-1 rounded-xl w-[500px]" type="text" name="name" placeholder=" Ingresa tu Nombre"   />
        

        <br />
        <input className="p-1 rounded-xl w-[500px]" type="text" name="correo" placeholder=" Ingresa tu Correo"/>
       

        <br />
        <textarea placeholder=" Hablemos" name="mensaje" className="w-[500px] h-[150px] rounded-lg" maxLength="325"  style={{ resize: 'none' }}/>
       
        <br />
        <button type="submit" className="text-white p-1 font-bold border-none rounded-lg bg-orange-600 text-lg uppercase hover:bg-orange-700">
          Enviar
        </button>
      </form>
    </div>
    {/* <div className="sm:flex justify-center">
    <Image src={r2d2Gift} alt="r2d2" width={450} height={450} />
    </div> */}
    </section>
  );
};

export default Contacto;
