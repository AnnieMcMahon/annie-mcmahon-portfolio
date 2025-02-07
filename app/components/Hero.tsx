import { Button } from "@/app/components/ui/button";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"; // Example icons
import { SiJavascript, SiTailwindcss, SiTypescript, SiSupabase, SiNextdotjs } from "react-icons/si";

export default function Hero() {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-4">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <img
            src="avatar1.png"
            alt="Annie McMahon"
            className="w-64 h-64 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 my-4">
            Annie McMahon
          </h1>

          <div className="max-w-4xl text-gray-700 py-5">
            <p className="text-lg leading-relaxed">
              As a software developer with a strong foundation in{" "}
              <span className="font-semibold text-green-800">JavaScript</span> and{" "}
              <span className="font-semibold text-green-800">React</span>, I am passionate about leveraging my skills to create innovative and responsive solutions.
              I also possess advanced analytical skills in{" "}
              <span className="font-semibold text-green-800">Excel</span> and{" "}
              <span className="font-semibold text-green-800">VBA</span>, enabling me to streamline processes and automate repetitive manual tasks.
              <br />
              <br />
              Whether contributing to a software development team or using my analytical skills in data-driven projects, I am committed to delivering high-quality solutions that drive business growth and user satisfaction.
              <br />
              <br />
              I am seeking a position where I can apply my technical skills and problem-solving abilities. Let&apos;s connect and explore how I can contribute to the success of your team.
            </p>
          </div>
        </div>
      </div>

      {/* Technology Logos */}
      <div className="my-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {/* Icon with Label */}
          <div className="flex flex-col items-center">
            <SiJavascript className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiSupabase className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">Supabase</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="h-12 w-12 text-gray-800" />
            <span className="mt-2 text-sm text-gray-700">Git</span>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="mt-6">
        <Button className="px-6 py-3 bg-green-800 text-white font-bold text-lg rounded-md hover:bg-green-600 transition">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
