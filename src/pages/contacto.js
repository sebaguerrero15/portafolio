const Contacto = () => {
  return (
    <section id="contacto">
        <h2 className="text-white text-center uppercase font-bold mb-10 text-[30px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Contacto</span></h2>
      <form className="grid justify-center mb-10">
        <input className="p-1 rounded-xl w-[300px]" type="text" placeholder="Nombre" />
        <br />
        <input className="p-1 rounded-xl w-[300px]" type="text" placeholder="Correo" />
        <br />
        <textarea  placeholder="Hablemos" className="w-[300px] h-[100px] rounded-lg" maxLength="202"  style={{ resize: 'none' }}/>
        <br />
        <button className="text-white p-1 border-2 rounded-lg bg-orange-600 text-lg uppercase hover:bg-orange-700">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;
