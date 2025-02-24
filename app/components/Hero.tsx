import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center py-10" id="about">
      <img
        src="logo/amws-logo.png"
        alt="AMWS"
        className="object-cover mt-4 w-72"
      />
      <div>
        <p className="w-3/4 leading-relaxed text-left mx-auto text-gray-800 py-5">
          <span className="font-semibold text-teal-800">
            Annie McMahon Web Studio
          </span>{" "}
          is dedicated to crafting custom websites and web apps for small
          businesses, nonprofits, and startups.
          <br />
          <br />I specialize in building fast, responsive, and scalable digital
          experiences that help businesses grow. Whether you need a{" "}
          <span className="font-semibold text-teal-800">
            high-converting landing page
          </span>{" "}
          or a{" "}
          <span className="font-semibold text-teal-800">
            fully interactive web application
          </span>
          , I deliver user-friendly websites and web apps tailored to your
          needs.
          <br />
          <br />
          Let me help you bring your vision to life.
        </p>
      </div>

      <div className="mt-6">
        <a href="#contact">
          <Button className="px-6 py-3 bg-teal-800 text-white font-bold text-lg rounded-md hover:bg-cyan-300 transition">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
}
