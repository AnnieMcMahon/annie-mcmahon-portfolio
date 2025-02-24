import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Certificates from "@/app/components/Certificates";
import { ContactForm } from "@/app/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Certificates />
      <ContactForm />
    </div>
  );
}


