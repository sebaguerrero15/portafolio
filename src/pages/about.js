import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="p-2 mt-[350px] xl:mx-[200px] sm:mx-[30px]">
      <h2 className="text-white text-center uppercase font-bold mb-6 text-[30px] sm:mx-[50px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">
          Acerca
        </span>{" "}
        de Mi
      </h2>
      
      <article className="text-[#A3B3BC] text-xl text-justify p-4 rounded-[30px] hover:bg-[#1E293B]">
        <p>
          De profesión Ingeniero <span className="font-bold">Informático,</span> chileno titulado el año
          2015. Tengo un perro llamado Luke 🐶 fanático de la tecnología, las series y los juegos
          de mesa. Me apasiona el <span className="font-bold">desarrollo web,</span> específicamente el <span className="font-bold">FullStack,</span> y aprender siempre nuevas tecnologías y habilidades en general.
        </p>
        <br />
        <p>
          Como desarrollador cuento con experiencia
          en <span className="font-bold">React,</span> y su ecosistema, me gustaría destacar que poseo conocimientos en bases de datos relacionales y no relacionales. He trabajado con frameworks como <span className="font-bold">NextJS, node</span> y otras bibliotecas
          relevantes. También tengo experiencia en <span className="font-bold">docker, webscraping y testing.</span> 
        </p>
      </article>
      <br />

      <article className="text-[#A3B3BC] text-xl text-justify p-4 rounded-[30px] hover:bg-[#1E293B]">
        <h2 className="uppercase font-extrabold text-white">Experiencia</h2>
        <div className="mt-4">
          <h3 className="font-bold text-white">Desarrollador Frontend:</h3>
          <p>
            Tengo experiencia trabajando con distintos frameworks como NextJS
            13, nodejs y biblioteca React
          </p>
        </div>
        

        <div className="mt-4">
          <h3 className="font-bold text-white">Administrador Informático:</h3>
          <p>
            Encargado de Redes, Mantención y Creación de sitios webs
            realizadas con Wordpress y php para Escuelas Municipales.
            Administrador de Aplicaciones Escolares.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-bold text-white">Analista QA:</h3>
          <p>
            Responsable de revisar código de acuerdo con las buenas prácticas de
            desarrollo de los proyectos en base a las políticas de desarrollo
            definidas por el área de Arquitectura del cliente LATAM Airlines.
          </p>
        </div>
      </article>

      <br />
      <article className="text-white text-center mt-5 flex items-center justify-center gap-2">
        <Link
          href="/CV_SEBASTIAN_GUERRERO.pdf"
          target="_blank"
          download="CV_SEBASTIAN_GUERRERO.pdf"
          className="text-white p-4 font-semibold border-none rounded-[50px] bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] text-lg text-center uppercase">
          Descargar CV en PDF
        </Link>
        <div>
          <FaFilePdf  className="text-white text-4xl"/>
        </div>
      </article>

    </section>
  );
};

export default About;
