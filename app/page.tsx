import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Certificates from "@/app/components/Certificates";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Certificates />
      <ContactSection />
    </div>
  );
}


