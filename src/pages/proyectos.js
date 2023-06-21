import Layout from "@/components/layout"
import Image from "next/image"

const Proyectos = () => {
  const trabajos = [
    {
      id: 1,
      titulo: "GuitarLA",
      description: "Trabajo realizado con Nextjs version 12, utilizando Tailwindcss",
      imagen: "/img/guitarla.png",
      link: "https://guitar-la-next-five.vercel.app/",
    },
    {
      id: 2,
      titulo: "El Perchero",
      description: "Tienda de ropa y accesorios para Hombres y Mujeres",
      tecnologias: "Vite",
      imagen: "/img/elperchero.png",
      link: "https://el-perchero.vercel.app/",
    },
    {
      id: 3,
      titulo: "Proyecto 3",
      description: "Descripción del proyecto 3.",
      imagen: "/proyecto3.jpg",
      link: "https://www.ejemplo.com/proyecto3",
    },
    {
      id: 4,
      titulo: "Proyecto 4",
      description: "Descripción del proyecto 4.",
      imagen: "/proyecto4.jpg",
      link: "https://www.ejemplo.com/proyecto4",
    },
  ];

  return (
       
  <section className="container m-auto mt-10">
    <h2 id="proyectos" className="text-white uppercase font-bold mb-10 text-[30px] text-center">Mis proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Realizados</span></h2>
    <ul className="grid grid-cols-2 text-white">
      {trabajos.map((trabajo) => (
        <li key={trabajo.id} className="bg-[#1E293B] m-auto h-[580px] w-[600px] rounded-md mb-11">
          <h3 className="m-5 text-extrabold text-center font-bold text-lg">{trabajo.titulo}</h3>
          <Image src={trabajo.imagen} alt={trabajo.titulo} width={570} height={370} className="m-auto rounded-lg"/>
          <p className="mt-3 ml-5 text-lg">{trabajo.description}</p>
          <a href={trabajo.link} target="_blank" rel="noopener noreferrer" className="uppercase text-lg font-extrabold ml-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]">
            Ver Demo
          </a>
          <br />
          <a href={trabajo.link} target="_blank" rel="noopener noreferrer" className="uppercase text-lg font-extrabold text-transparent text-white p-1 border-2 rounded-md">
            Ver Código
          </a>
        </li>
      ))}
    </ul>
     </section>

);
};



export default Proyectos