import { Button } from "@/components/ui/button";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiSupabase,
  SiNextdotjs,
} from "react-icons/si";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center py-10" id="about">
      <h2 className="pt-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-4">
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <img
            src="avatar1.png"
            alt="Annie McMahon"
            className="md:w-64 md:h-64 w-24 h-24 rounded-full object-cover shadow-md mt-4"
          />
        </div>

        <div className="text-center md:text-left max-w-4xl ">
          <p className="leading-relaxed text-left text-gray-700 py-5">
            I grew up in Quebec, but I spent most of my adult life in New Jersey
            before moving to Asheville, NC, in October 2023. My journey with
            technology began in college, where I studied computer science.
            However, my career initially took a different path, leading me to
            work in various administrative roles. Despite not being in a
            traditional tech position, I often found opportunities to apply my
            coding knowledge. I developed Excel VBA macros and automated
            redundant tasks, making workflows more efficient and productive.
            <br />
            <br />
            In 2022, I made a pivotal decision to return to tech. I earned my
            full-stack developer certificate through Codecademy, and ever since,
            I&apos;ve been passionate about coding and learning new technologies. My
            current focus is on building applications with React, Next.js, and
            Tailwind CSS, while also exploring backend services like Supabase.
            I am particularly interested in projects that solve real-world
            problems and create meaningful experiences for users.
            <br />
            <br />
            When I&apos;m not coding, I enjoy hiking and exploring the beautiful
            trails of Western North Carolina. Collaboration, continuous
            learning, and innovation drive my passion for software development.
          </p>
        </div>
      </div>

      <div className="text-center md:text-left max-w-4xl ">
          <h2 className="my-4">Technical Skills</h2>
          <ul className="leading-relaxed text-left text-gray-700 py-5">
            <li><span className="font-semibold text-teal-800">Languages</span>: JavaScript, TypeScript</li>
            <li><span className="font-semibold text-teal-800">Front-End</span>: React, HTML, CSS, Tailwind</li>
            <li><span className="font-semibold text-teal-800">Back-End</span>: Node.js, Supabase, PostgreSQL</li>
            <li><span className="font-semibold text-teal-800">Others</span>: RESTful APIs, Jira, Excel VBA</li>
          </ul>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
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

      <div className="mt-6">
        <Link href="/#contact">
          <Button className="px-6 py-3 bg-teal-800 text-white font-bold text-lg rounded-md hover:bg-cyan-300 transition">
            Contact Me
          </Button>
        </Link>
      </div>
    </div>
  );
}
