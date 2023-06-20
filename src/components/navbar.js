import Link from "next/link";
import Image from "next/image";
import {useState, useEffect, useRef} from "react"
import { CgUserlane } from "@react-icons/all-files/cg/CgUserlane";
import { BiTask } from "@react-icons/all-files/bi/BiTask";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { AiFillThunderbolt } from "@react-icons/all-files/ai/AiFillThunderbolt";





const Navbar = () => {

  const etiquetaRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

const scrollToEtiqueta = () => {
  etiquetaRef.current.scrollIntoView({ behavior: 'smooth' });
};


useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
  })
}, [])

  return (

    <header>
    <nav>
      <div className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"} flex justify-between px-4 fixed items-center w-full transition-all z-10 top-0`}>
        <div>
        <Link href="/">
            <Image src="/img/logo.png" 
            width={80} 
            height={80} 
            alt='logotipo-personal-header'
            />
            </Link>
            </div>
            <div className="flex space-x-8 text-md">

              <Link href="/"  className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2">
                INICIO <AiFillHome />
                </Link>

              <button onClick={scrollToEtiqueta} className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2">
                PROYECTOS <BiTask />
                </button>
              
              <Link 
               href="/about"
                className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2">
                ACERCA DE MI <CgUserlane />
              </Link>
              <Link href="/skills" className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2">
                SKILLS <AiFillThunderbolt />
              </Link>
              <Link href="/contacto" className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2">
                CONTACTO <MdEmail />
              </Link>
            </div>
        </div>
    </nav>
    </header>
  );
};

export default Navbar;
