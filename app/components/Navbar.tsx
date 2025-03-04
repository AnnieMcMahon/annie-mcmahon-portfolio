import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { FaGithub, FaLinkedin, FaEnvelope, FaSlack } from "react-icons/fa";
import navtabs from "@/app/lib/navtabs";
import Link from "next/link";

export default function Navbar() {
  return (
    <Menubar className="items-center justify-between px-2 py-5 bg-gray-100 fixed top-0 w-screen z-50 flex">
      
      {/* Logo */}
      <Link href="/#home">
        <img className="hidden w-48 sm:block" src="logo/amws-name.png" alt="AMWS" />
        <img className="sm:hidden w-6" src="logo/amws-pic.png" alt="AMWS" />
      </Link>

      <div className="flex justify-evenly w-full">
  {navtabs.map((tab) => (
    <div key={tab.id} className="flex-1 text-center">
      <Link
        href={tab.link}
        className="text-teal-700 hover:text-teal-600 transition text-[10px] sm:text-sm"
      >
        {tab.display}
      </Link>
    </div>
  ))}
</div>

      {/* Social link icons */}
      <div className="flex items-center sm:space-x-4 space-x-1">
      <Link
          href="https://linkedin.com/in/anniemcmahon20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-400 transition"
        >
          <FaLinkedin className="h-3 w-3 sm:h-6 sm:w-6" />
        </Link>

        <Link
          href="https://github.com/anniemcmahon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-400 transition"
        >
          <FaGithub className="h-3 w-3 sm:h-6 sm:w-6" />
        </Link>

        <Link
          href="https://amwebstudio.slack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-400 transition"
        >
          <FaSlack className="h-3 w-3 sm:h-6 sm:w-6" />
        </Link>

        <Link
          href="mailto:annie@amwebstudio.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-400 transition"
        >
          <FaEnvelope className="h-3 w-3 sm:h-6 sm:w-6" />
        </Link>
      </div>
    </Menubar>
  );
}
