import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="p-10 mx-[300px] my-[90px] border-t border-gray-300"
    >
      <h2 className="text-white text-center uppercase font-bold mb-10 text-[30px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">
          Acerca
        </span>{" "}
        de Mi
      </h2>
      <span className="text-white">imagen</span>
      <article className="text-white container text-md text-xl">
        <p>
          Soy chileno , mi profesion es Ingeniero Informatico titulado el año
          2015. Doglover 🐶 fanatico de las tecnologias, las series y los juegos
          de mesa. Me apasiona el desarrollo web, especificamente el FullStack,
          y aprender siempre nuevas tecnologias.
        </p>
        <br />
        <p>
          Como candidato a un empleo como desarrollador frontend con experiencia
          en React y su ecosistema, me gustaría destacar que poseo habilidades
          técnicas sólidas en la construcción de interfaces de usuario
          utilizando React, React Router, Redux, Axios y otras bibliotecas
          relevantes. También tengo experiencia en tomar decisiones de
          arquitectura y en estructurar aplicaciones de manera efectiva.
        </p>
      </article>
      <br />

      <article className="text-white container text-xl">
        <h2 className="uppercase font-bold">Experiencia</h2>
        <p>
          Tengo experiencia trabajando con distintos frameworks como react
          nodejs
        </p>
      </article>

      <br />
      <article className="text-white">
        <p className="font-semibold text-xl">CV ADJUNTO</p>
        <Link href="/pdf/CV_SEBASTIAN_GUERRERO.pdf" target='_blank' download='CV_SEBASTIAN_GUERRERO.pdf' className="text-[#FC7903] text-lg font-bold uppercase">Descargar CV en PDF</Link>
      </article>
    </section>
  );
};

export default About;
