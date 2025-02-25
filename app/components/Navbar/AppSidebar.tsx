import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import navtabs from "@/app/lib/navtabs";
 
export default function AppSidebar() {
  return (
    <Sidebar className="block md:hidden" >
      <SidebarContent aria-describedby={undefined}>
        <SidebarGroup />
          <SidebarGroupLabel className="p-1 mb-5 relatvie w-full">Menu</SidebarGroupLabel>
          <SidebarGroupContent aria-describedby={undefined}>
            <SidebarMenu>
              {navtabs.map((tab) => (
                <SidebarMenuItem key={tab.id}>
                  <SidebarMenuButton asChild>
                    <Link href={tab.link}>{tab.display}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}