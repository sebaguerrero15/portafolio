import Layout from "@/components/layout";
import About from "./about";
import Skills from "./skills";
import Proyectos from "./proyectos";
import Contacto from "./contacto";
import Navbar from "@/components/navbar";
import { Link as Scroll } from "react-scroll";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Layout
        title={"Portafolio"}
        description={"Portafolio de Proyectos Personales"}
      >
        <Navbar id="inicio" />

        <main id="inicio" className="w-full md:mt-[150px] sm:mt-[130px]">
          <section>
            <h1 className="text-[80px] ml-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] sm:mx-[200px]">
              Hola!
            </h1>

            <h2 className="text-white uppercase font-extrabold text-[50px] ml-[230px] mt-8 sm:mx-[60px] sm:text-center">
              Bienvenid@ a mi{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">
                Portafolio.
              </span>
            </h2>

            <div>
              <div className="flex justify-center md:ml-[300px] gap-2">
                <Link
                  href="https://www.linkedin.com/in/sguerreroahumada/"
                  target="__blank"
                >
                  <AiFillLinkedin className="text-[#0A66C2] text-[50px] md:ml-[150px] sm:justify-center hover:hover:scale-110" />
                </Link>
                <Link href="https://github.com/sebaguerrero15" target="__blank">
                  <AiFillGithub className="text-white text-[50px] hover:hover:scale-110" />
                </Link>
                <Link
                  href="https://www.instagram.com/sebaguerreroahumada/"
                  target="__blank"
                >
                  <BsInstagram className="text-[50px] text-[#fb3699] hover:scale-110 transform" />
                </Link>
              </div>

              <div className="md:flex uppercase sm:justify-items-center">
                <h3 className="text-3xl text-white font-bold mt-8 ml-[180px]">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]">
                    Soy{" "}
                  </span>
                  Sebastián Guerrero
                </h3>
              </div>

              <h3 className="text-center text-4xl font-light text-white">
                <Typewriter
                  options={{
                    strings: ["Desarollador Web Front-End 😎"],
                    autoStart: true,
                    pauseFor: 2000,
                    loop: true,
                  }}
                />
              </h3>
            </div>
          </section>
        </main>
        <About id="about" />
        <Skills id="skills" />
        <Proyectos id="proyectos" />
        <Contacto id="contacto" />

        <Scroll
          activeClass="active"
          to="inicio"
          smooth={true}
          duration={1500}
          offset={-200}
          className="text-[#FC7903] cursor-pointer flex justify-center m-8 text-[70px] hover:text-white hover:bg-[#05071b]"
        >
          <MdOutlineKeyboardDoubleArrowUp />
        </Scroll>
      </Layout>
    </>
  );
}
