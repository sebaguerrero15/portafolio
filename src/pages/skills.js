import Image from "next/image";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress";
import logoNext from "../../public/img/logonext.png"

const Skills = () => {

  return (
    <section id="skills">
      <div className="text-white">
        <h3 className="font-bold mt-[50px] text-center mb-5 uppercase text-[30px]">
          Habilidades<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold"> Técnicas</span> 🚀
        </h3>
        <div className="grid grid-cols-4 gap-2 text-[50px] bg-[#1E293B] rounded-lg mx-[280px] p-4 place-items-center">
          <span className="text-[#F16524]">
            <AiFillHtml5 />
          </span>
          <span className="text-[#01B5F2]">
            <DiCss3 />
          </span>
          <span className="text-[#F7E018]">
            <SiJavascript />
          </span>
          <span className="text-black">
            <FaReact />
          </span>
          <span className="text-[#38BDF8]">
            <SiTailwindcss />
          </span>
          <span className="text-[#2D79C7]">
            <SiTypescript />
          </span>
          <span className="text-[#F05033]">
            <FaGitAlt />
          </span>
          <span className="text-[#6DA75D]">
            <FaNodeJs />
          </span>
          <span className="text-[#00EA63]">
            <SiMongodb />
          </span>
          <span className="text-[#6DA75D]">
            <Image src={logoNext} alt="logo-nextjs" width={50} height={50} />
          </span>
          <span className="text-[#007298]">
            <FaWordpress />
          </span>
          <span className="text-black">
            <AiFillGithub />
          </span>
          
        </div>

        <div className="grid grid-cols-3 mx-[420px]">
          <div className="mt-5">
            <p className="text-2xl font-extrabold">Lenguajes</p>
            <ol className="font-light p-3 text-xl">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>TypeScript</li>
            </ol>
          </div>

          <div className="mt-5">
            <p className="text-2xl font-extrabold">Frameworks</p>
            <ol className="font-light p-3 text-xl">
              <li>React</li>
              <li>NodeJS</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
            </ol>
          </div>

          <div className="mt-5">
            <p className="text-2xl font-extrabold">Otros</p>
            <ol className="font-light p-3 text-xl">
              <li>Git / Github</li>
              <li>WordPress</li>
            </ol>
          </div>

        </div>
      </div>

      <h3 className="text-white text-center font-bold mt-[50px] mb-5 uppercase text-[30px]">
          Habilidades<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold"> Blandas</span>
        </h3>
      <div className="text-white m-10 mx-[180px] text-md bg-[#1E293B] rounded-lg p-7 mb-[100px] text-xl">
        <p>
          <span className="font-bold text-md">Comunicacion efectiva:</span> Tengo la capacidad
          de comunicarme de manera efectiva con compañeros de trabajo, clientes
          y otros miembros del equipo es esencial en cualquier entorno de TI.
        </p>
        <br />

        <p>
          <span className="font-bold text-md">Gestion de tiempo:</span> Tengo habilidades de gestión del tiempo para
          priorizar y completar tareas de manera efectiva y eficiente.
        </p>
        <br />

        <p>
          <span className="font-bold text-md">Autodidacta:</span> Soy una persona que constantamente me
          encuentro actualizando a las últimas tecnologias del mercado.
        </p>
        <br />

        <p>
          <span className="font-bold text-md">Adaptabilidad:</span> Me adapto a los cambios en el 
          entorno de trabajo, tengo la disposición de aprender de forma rápida y efectiva.
        </p>
      </div>

  </section>
  );
};

export default Skills;
