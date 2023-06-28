import Image from "next/image"

const Proyectos = () => {
  const trabajos = [
    {
      id: 1,
      titulo: "GuitarLA",
      description: "Frontend - Tienda de Venta de Guitarras",
      tecnologias: "NextJS, TailwindCSS",
      imagen: "/img/guitarla.png",
      link: "https://guitar-la-next-five.vercel.app/",
      linkGit: "prueba",
    },
    {
      id: 2,
      titulo: "El Perchero",
      description: "Frontend - Tienda de ropa y accesorios",
      tecnologias: "React, Vite, TailwindCSS, Hooks, Context, React Router",
      imagen: "/img/elperchero.png",
      link: "https://el-perchero.vercel.app/",
      linkGit: "prueba"
    },
    {
      id: 3,
      titulo: "Proyecto 3",
      description: "Frontend - Portafolio Personal",
      tecnologias: "React, NextJS 13, TailwindCSS, Hooks",
      imagen: "/img/webpersonal.png",
      link: "https://www.ejemplo.com/proyecto3",
      linkGit: "prueba",
    },
    {
      id: 4,
      titulo: "Portafolio",
      description: "FullStack",
      tecnologias: "React, NextJS 13, TailwindCSS, Hooks",
      imagen: "/img/guitarla.png",
      link: "https://www.ejemplo.com/proyecto4",
      linkGit: "prueba",
    },
  ];



  return (
       
  <section className="mt-[180px]">
    <h2 id="proyectos" className="text-white uppercase font-bold mb-10 text-[30px] text-center">Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Realizados</span> 📑</h2>
    <ul className="md:grid md:grid-cols-2 md:justify-items-center md:mx-11 text-white sm:grid sm:grid-cols-1 sm:justify-items-center">
      {trabajos.map((trabajo) => (
        <li key={trabajo.id} className="bg-[#1E293B] h-[560px] w-[540px] border-2 rounded-md mb-11">
          <h3 className="m-2 text-extrabold text-center font-bold text-xl">{trabajo.titulo}</h3>
          <Image src={trabajo.imagen} alt={trabajo.titulo} width={450} height={250} className="m-auto rounded-lg"/>
          <p className="mt-3 ml-5 text-xl flex justify-center">{trabajo.description}</p>

          <div className="flex flex-col justify-center items-center ml-5 mt-5">
          <p className="font-bold uppercase text-md">Tecnologias usadas: </p>
          <p className="mt-1 ml-5 text-lg">{trabajo.tecnologias}</p>
          </div>

          <div className="flex justify-center gap-3 mt-10">
          <a href={trabajo.link} target="_blank" rel="noopener noreferrer" className="bg-[#030418] shadow-md shadow-[#030418] uppercase text-lg font-extrabold ml-5 text-transparent p-1 rounded-md text-white hover:bg-[#FC7903]">
            Ver Demo
          </a>
          <a href={trabajo.linkGit} target="_blank" rel="noopener noreferrer" className="uppercase shadow-md shadow-[#030418] text-lg font-extrabold text-transparent text-white p-1 rounded-md cursor-pointer hover:duration-100 bg-[#030418] hover:bg-[#FC7903]">
            Ver Código
          </a>
          </div>
        </li>
      ))}
    </ul>
     </section>

);
};



export default Proyectos