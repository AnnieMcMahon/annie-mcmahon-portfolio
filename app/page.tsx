import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Certificates from "@/app/components/Certificates";
import ContactForm from "@/app/components/ContactForm";
import Services from "@/app/components/Services";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}


