import { ContactForm } from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="w-96 mx-auto mb-4 px-4 py-10" id="contact">
      <h2>Contact Me</h2>
      <ContactForm/>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/anniemcmahon20/" className="text-teal-800 hover:underline" target="_blank">www.linkedin.com/in/anniemcmahon20</a></p>
      <p>GitHub: <a href="https://github.com/AnnieMcMahon" className="text-teal-800 hover:underline" target="_blank">github.com/AnnieMcMahon</a></p>
    </div>
  )}