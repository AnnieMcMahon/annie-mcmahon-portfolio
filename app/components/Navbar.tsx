import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const navtabs = [
    {
      id: 1, 
      link: "/about",
      display: "About"
    },
    {
      id: 2, 
      link: "/#projects",
      display: "Projects"
    },
    {
      id: 3, 
      link: "/#certificates",
      display: "Certificates"
    },
    {
      id: 4, 
      link: "/#contact",
      display: "Contact"
    },
    {
      id: 5, 
      link: "/services",
      display: "Services"
    },
  ]

  return (
    <Menubar className="flex items-center justify-between md:px-4 px-2 py-5 bg-gray-100 fixed top-0 w-full z-10">
      <a href="#about">
        <img className="w-36" src="logo/name.png" alt="AMWS" />
      </a>

      <div className="flex items-center md:space-x-4 space-x-2">
        <MenubarMenu>
          {navtabs.map((tab) => (
          <Link 
          key={tab.id} 
          href={tab.link}
          className="text-teal-700 hover:text-cyan-300 transition"
        >
          {tab.display}
        </Link>
          ))}
        </MenubarMenu>
      </div>

      <div className="flex items-center md:space-x-4 space-x-2">
        <a
          href="https://github.com/anniemcmahon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-400 transition"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://linkedin.com/in/anniemcmahon20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-400 transition"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
      </div>
    </Menubar>
  );
}
