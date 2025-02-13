import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <Menubar className="flex items-center justify-between px-4 py-5 bg-gray-100 fixed top-0 w-full z-10">
      <div className="flex items-center">
      <a href="#about">
        <Button variant="ghost" className="relative h-8 w-8 rounded-full" >
          <Avatar className="h-8 w-8">
            <AvatarImage src="avatar1.png" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </Button>
        </a>
        <p className="ml-3 hidden md:block">Annie McMahon</p>
      </div>

      <div className="flex items-center space-x-4">
        <MenubarMenu>
          <a
            href="#about"
            className="text-green-800 hover:text-green-500 transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-green-800 hover:text-green-500 transition"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="text-green-800 hover:text-green-500 transition"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="text-green-800 hover:text-green-500 transition"
          >
            Contact
          </a>
        </MenubarMenu>
      </div>

      <div className="flex items-center space-x-4">
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
