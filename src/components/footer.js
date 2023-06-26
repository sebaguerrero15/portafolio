import Link from "next/link";
import Image from "next/image";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";

const Footer = () => {
  return (
    <footer className="flex-shrink-0 bg-[#02030c] py-8 items-center">
      <div className="container mx-auto text-center grid grid-cols-3">
        <nav className="text-[#FC7903] font-bold grid justify-center mt-5 text-sm">
          <Link
            href="/proyectos"
            className="hover:text-white"
          >
            PROYECTOS
          </Link>

          <Link
            href="/about"
            className="hover:text-white"
          >
            ACERCA DE MI
          </Link>

          <Link
            href="/skills"
            className="hover:text-white"
          >
            SKILLS
          </Link>

          <Link
            href="/contacto"
            className="hover:text-white"
          >
            CONTACTO
          </Link>
        </nav>

        <div className="grid px-11">
          <nav className="flex justify-center mt-5 text-[#FC7903]">
            <Link href="/" className="hover:text-white text-4xl">
              <FiGithub />
            </Link>

            <Link href="/" className="hover:text-white text-4xl">
              <AiOutlineLinkedin />
            </Link>

            <Link href="/" className="hover:text-white text-4xl">
              <AiOutlineInstagram />
            </Link>
          </nav>
          <p className="text-white">
            Sebastian Guerrero Ahumada © {new Date().getFullYear()} /
            Desarrollador Front-End.
          </p>
          <p className="font-bold text-white">correo@correo.cl</p>
        </div>
        <div className="ml-[100px]">
          logo
        </div>
      </div>
    </footer>
  );
};

export default Footer;
