import Layout from "@/components/layout";
import About from "./about";
import Skills from "./skills";
import Proyectos from "./proyectos";
import Contacto from "./contacto"
import Navbar from "@/components/navbar";
import { Link as Scroll} from "react-scroll"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import 'animate.css';


export default function Home() {


  return (
    <>
      <Layout
        title={"Portafolio"}
        description={"Portafolio de Proyectos Personales"}
      >
        
        <Navbar id="inicio"/>

        <main id="inicio" className="h-screen w-full md:mt-[150px] sm:mt-[250px]">
          <section>
            <h1 className="text-[80px] ml-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] sm:mx-[200px] animate__bounceInLeft animate__delay-2s">Hola!</h1>

            <h2 className="text-white uppercase font-extrabold text-[50px] ml-[230px] mt-8 sm:mx-[60px] sm:text-center">Bienvenid@ a mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Portafolio</span></h2>

            <h3 className="text-4xl text-white font-bold mt-8 ml-[180px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]">Soy </span>Seba Guerrero</h3>
            <p className="text-2xl font-light text-white ml-[190px] sm:mx-[200px]">Desarollador Web Front-End 😎</p>
          </section>
        </main>
        <About id="about"/>
        <Skills id="skills"/>
        <Proyectos id="proyectos"/>
        <Contacto id="contacto"/>

        <Scroll
      activeClass="active" 
      to="inicio" smooth={true} 
      duration={1500} 
      offset={-150} 
      className="text-[#FC7903] cursor-pointer flex justify-center m-8 text-[70px] hover:text-white hover:bg-[#05071b]">
      <MdOutlineKeyboardDoubleArrowUp />
      </Scroll>

      </Layout>
      
    </>
  );
}
