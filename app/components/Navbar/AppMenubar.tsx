import Link from "next/link";
import navtabs from "@/app/lib/navtabs";
import { MenubarMenu } from "@/components/ui/menubar";

export default function AppMenubar() {
  return (
    <div className="hidden sm:flex items-center md:space-x-4 space-x-2">
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
  );
}
