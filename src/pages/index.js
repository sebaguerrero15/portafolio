import Layout from "@/components/layout";
import About from "./about";
import Skills from "./skills";
import Proyectos from "./proyectos";
import Contacto from "./contacto"
import Navbar from "@/components/navbar";
import 'animate.css';


export default function Home() {


  return (
    <>
      <Layout
        title={"Portafolio"}
        description={"Portafolio de Proyectos Personales"}
      >
        
        <Navbar />

        <main id="inicio" className="h-screen w-full mt-[150px]">
          <section>
            <h1 className="animate__bounce text-[80px] ml-[200px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]">Hola!</h1>

            <h2 className="text-white uppercase font-extrabold text-[50px] ml-[230px] animate__backInRight" mt-8>Bienvenid@ a mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F] font-extrabold">Portafolio</span></h2>

            <h3 className="text-4xl text-white font-bold mt-8 ml-[180px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FF512F]">Soy </span>Seba Guerrero</h3>
            <p className="text-2xl font-light text-white ml-[190px]">Desarollador Web Front-End 😎</p>
          </section>
        </main>
        <About id="about"/>
        <Skills id="skills"/>
        <Proyectos id="proyectos"/>
        <Contacto id="contacto"/>

      </Layout>
    </>
  );
}
