import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import {useState, useEffect} from "react"
import { CgUserlane } from "@react-icons/all-files/cg/CgUserlane";
import { BiTask } from "@react-icons/all-files/bi/BiTask";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { AiFillThunderbolt } from "@react-icons/all-files/ai/AiFillThunderbolt";


const Navbar = () => {

  const [isActive, setIsActive] = useState(false)

 
useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 70 ? setIsActive(true) : setIsActive(false)
  })
}, [])

  return (

    <header>
    <nav>
      <ul className={`${isActive ? "md:bg-black py-2 shadow-md" : "bg-none py-2"} md:flex md:justify-end px-4 fixed items-center w-full transition-all z-10 top-0 space-x-4 text-md sm:grid sm:grid-cols-1 sm:justify-start"`}>
            <li>
              <Link href="/" className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2 sm:ml-[18px]">
                INICIO <AiFillHome />
                </Link>
                </li>
                <li>
              <Scroll activeClass="active" to="about" smooth={true} duration={1500} offset={-44} className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2">
                ACERCA DE MI <CgUserlane />
              </Scroll>
              </li>
              <li>
              <Scroll activeClass="active" to="skills" smooth={true} duration={1500} offset={-70} className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2">
                SKILLS <AiFillThunderbolt />
              </Scroll>
              </li>
              <li>
              <Scroll activeClass="active" to="proyectos" smooth={true} duration={1500} offset={-70} className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2">
                PROYECTOS <BiTask />
                </Scroll>
                </li>
              <li>
              <Scroll activeClass="active" to="contacto" smooth={true} duration={1500} offset={-100} className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2">
                CONTACTO <MdEmail />
              </Scroll>
            </li>
        </ul>
    </nav>
    </header>
  );
};

export default Navbar;
