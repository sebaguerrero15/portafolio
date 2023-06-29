import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { CgUserlane } from "@react-icons/all-files/cg/CgUserlane";
import { BiTask } from "@react-icons/all-files/bi/BiTask";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { AiFillThunderbolt } from "@react-icons/all-files/ai/AiFillThunderbolt";
import { BiMenu } from "@react-icons/all-files/bi/BiMenu";
import { GiCrossedSwords } from "@react-icons//all-files/gi/GiCrossedSwords";

const Navbar = () => {
  
  const [open, setOpen] = useState(false);



  return (
    <header className="w-full fixed top-0 right-0">
      <nav
        className="bg-[#02030c] shadow-md lg:flex justify-end lg:py-2 sm:py-8 lg:px-10 px-7"
      >
      <div className='font-bold text-2xl cursor-pointer sm:flex items-center gap-2 lg:absolute lg:left-8 text-gray-800 m-0'>
        <Link href="/" className='text-2xl text-white'>
        S.Guerrero 
        </Link>
        <span><GiCrossedSwords className="text-white"/></span>
        
      </div>

        <div
          onClick={()=>setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <BiMenu
            className="text-[#FC7903] text-[60px]"
          />
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-3 lg:justify-end absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "bg-[#02030c] top-[90px]" : "top-[-490px]"
          }`}
        >
          <li>
            <Link
              href="/"
              className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2"
            >
              INICIO <AiFillHome />
            </Link>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="about"
              smooth={true}
              duration={1500}
              offset={-130}
              className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2"
            >
              ACERCA DE MI <CgUserlane />
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="skills"
              smooth={true}
              duration={1500}
              offset={-130}
              className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2"
            >
              SKILLS <AiFillThunderbolt />
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="proyectos"
              smooth={true}
              duration={1500}
              offset={-130}
              className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2"
            >
              PROYECTOS <BiTask />
            </Scroll>
          </li>
          <li>
            <Scroll
              activeClass="active"
              to="contacto"
              smooth={true}
              offset={-130}
              duration={1500}
              className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] cursor-pointer hover:rounded-md p-2"
            >
              CONTACTO <MdEmail />
            </Scroll>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
