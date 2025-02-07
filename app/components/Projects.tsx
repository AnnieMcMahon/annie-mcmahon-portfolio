import Project from "@/app/components/Project";
import projects from "@/app/lib/projects";

export default function Projects() {
  
  return (
    <div className="mx-auto px-4 py-10">
      <h2>Projects</h2>
      <div className="w-full gap-x-4 mx-auto inline-flex flex-wrap justify-center mb-4">
        {projects.map((card) => (
          <Project key={card.id} project={card} />
        ))}
      </div>
    </div>
  );
}

