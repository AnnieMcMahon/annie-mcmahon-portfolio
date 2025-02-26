import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Annie McMahon",
  description: "Annie McMahon's software developer portfolio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="antialiased h-full flex flex-col">
        <SidebarProvider>
          <Navbar />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
