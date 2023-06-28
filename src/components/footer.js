import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

const Footer = () => {
  return (
    <footer className="flex-shrink-0 bg-[#02030c] py-8 items-center">
      <div className="mx-auto text-center grid grid-cols-3">
        <nav className="text-[#FC7903] font-bold grid justify-center mt-5 text-sm">
          <Scroll
             activeClass="active"
             to="about"
             smooth={true}
             duration={1500}
             offset={-130}
            className="hover:text-white cursor-pointer"
          >
            ACERCA DE MI
          </Scroll>

          <Scroll
            className="hover:text-white cursor-pointer"
              activeClass="active"
              to="skills"
              smooth={true}
              duration={1500}
              offset={-130}
          >
            SKILLS
          </Scroll>

          <Scroll
            activeClass="active"
            to="proyectos"
            smooth={true}
            duration={1500}
            offset={-130}
            className="hover:text-white cursor-pointer"
          >
            PROYECTOS
          </Scroll>

          <Scroll
            activeClass="active"
            to="contacto"
            smooth={true}
            offset={-130}
            duration={1500}
            className="hover:text-white cursor-pointer"
          >
            CONTACTO
          </Scroll>
        </nav>

        <div className="grid px-11">
          <nav className="flex justify-center mt-5 text-[#FC7903]">
            <Link href="https://github.com/sebaguerrero15" 
            target="__blank" 
            className="hover:text-white text-4xl">
              <FiGithub />
            </Link>

            <Link href="https://www.linkedin.com/in/sguerreroahumada/" 
            target="__blank" 
            className="hover:text-white text-4xl">
              <AiOutlineLinkedin />
            </Link>

            <Link href="https://www.instagram.com/sebaguerreroahumada/" 
            target="__blank" 
            className="hover:text-white text-4xl">
              <AiOutlineInstagram />
            </Link>
          </nav>
          <div className="text-white text-center">
          <p className="text-white text-center">
            Sebastian Guerrero Ahumada © {new Date().getFullYear()}
          </p>
          <p className="text-center">Desarrollador Front-End.</p>
          </div>
          <p className="font-bold text-white">correo@correo.cl</p>
        </div>
        <div className="ml-[100px]">
          <Image src="/img/r2d2.png" alt="logo web" width={100} height={100}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
