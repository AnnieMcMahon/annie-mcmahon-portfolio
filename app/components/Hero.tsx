import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center py-10" id="home">
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
          is dedicated to building custom websites, web apps, and collaborative projects that empower businesses and developers alike.
          <br />
          <br />I specialize in crafting fast, responsive, and scalable landing pages and professional websites for small businesses, nonprofits, and startups.
          <br />
          <br />
          Beyond client projects, I develop my own apps, some of which I monetize and others I offer for free. I also create collaborative web apps where new developers can gain hands-on experience by working on real-world projects.
          <br/>
          <br/>
          Need a website? Want to collaborate or beta test one of my apps? Let&#39;s connect!
          <br />
          <br />
          <a href="/about" className="text-teal-800 hover:text-teal-600">About Me</a>
        </p>
      </div>

      <div className="mt-6">
        <a href="#contact">
          <Button className="px-6 py-3 bg-teal-800 text-white font-bold text-lg rounded-md hover:bg-teal-600 transition">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
}
