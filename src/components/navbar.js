import Link from "next/link";
import Image from "next/image";
import { CgUserlane } from "@react-icons/all-files/cg/CgUserlane";
import { BiTask } from "@react-icons/all-files/bi/BiTask";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { AiFillThunderbolt } from "@react-icons/all-files/ai/AiFillThunderbolt";



const Navbar = () => {
 
  

  return (

    <header>
    <nav>
      <div className="flex justify-between px-4 sm:px-6 lg:px-8 mt-5">
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

              <Link href="/" className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2">
                INICIO <AiFillHome />
                </Link>

              <Link href="/proyectos" className="text-[#FC7903] font-bold flex gap-2 items-center hover:bg-[#292929] hover:rounded-md p-2">
                PROYECTOS <BiTask />
                </Link>
              
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
