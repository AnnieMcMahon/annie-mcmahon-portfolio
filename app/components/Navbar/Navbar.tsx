import { Menubar } from "@/components/ui/menubar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AppSidebar from "@/app/components/Navbar/AppSidebar";
import AppMenubar from "@/app/components/Navbar/AppMenubar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Navbar() {
  return (
    <Menubar className="items-center justify-between md:px-4 px-2 py-5 bg-gray-100 fixed top-0 w-full z-10 flex">
      
      {/* Logo */}
      <a href="/#home">
        <img className="w-24 md:w-48" src="logo/amws-name.png" alt="AMWS" />
      </a>

      {/* AppMenubar for larger devices, AppSidebar for smaller devices */}
      <div className="flex items-center mx-auto">
        <AppMenubar />
        <AppSidebar/>
        <SidebarTrigger className="block sm:hidden"/>
      </div>

      {/* Social link icons */}
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
