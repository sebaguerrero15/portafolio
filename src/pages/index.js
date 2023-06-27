import Layout from "@/components/layout";
import About from "./about";
import Skills from "./skills";
import Proyectos from "./proyectos";
import Contacto from "./contacto"
import Navbar from "@/components/navbar";
import { Link as Scroll} from "react-scroll"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { motion } from "framer-motion"
import Link from "next/link";


export default function Home() {


  return (
    <>
      <Layout
        title={"Portafolio"}
        description={"Portafolio de Proyectos Personales"}
      >
        
        <Navbar id="inicio"/>

        <main id="inicio" className="w-full md:mt-[150px] sm:mt-[130px]">
          <section>
            
            <motion.h1 
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }} 
            className="text-[80px] ml-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] sm:mx-[200px]">Hola!
            </motion.h1>

            <motion.h2  
             initial={{ x: 1000 }}
             animate={{ x: 0 }}
             transition={{ duration: 1 }} 
            className="text-white uppercase font-extrabold text-[50px] ml-[230px] mt-8 sm:mx-[60px] sm:text-center">Bienvenid@ a mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Portafolio</span></motion.h2>

            <div>
            <div className="flex justify-center md:ml-[300px] gap-2">
              <Link href="https://www.linkedin.com/in/sguerreroahumada/" target="__blank">
            <AiFillLinkedin className="text-[#0A66C2] text-[50px] md:ml-[150px] sm:justify-center hover:hover:scale-110"/>
              </Link>
              <Link href="https://github.com/sebaguerrero15" target="__blank">
            <AiFillGithub className="text-white text-[50px] hover:hover:scale-110"/>
            </Link>
            <Link href="https://www.instagram.com/sebaguerreroahumada/" target="__blank">
            <BsInstagram className="text-[50px] text-[#fb3699] hover:scale-110 transform" />
            </Link>
            </div>
            <h3 className="text-4xl text-white font-bold mt-8 ml-[180px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]">Soy </span>Seba Guerrero</h3> 
            </div>

            <p className="text-2xl font-light text-white ml-[190px] mx-[120px]">Desarollador Web Front-End 😎</p>
          </section>
        </main>
        <About id="about"/>
        <Skills id="skills"/>
        <Proyectos id="proyectos"/>
        <Contacto id="contacto"/>

        <Scroll
      activeClass="active" 
      to="inicio" 
      smooth={true} 
      duration={1500} 
      offset={-200} 
      className="text-[#FC7903] cursor-pointer flex justify-center m-8 text-[70px] hover:text-white hover:bg-[#05071b]">   
      <MdOutlineKeyboardDoubleArrowUp />
      </Scroll>

      </Layout>
      
    </>
  );
}
