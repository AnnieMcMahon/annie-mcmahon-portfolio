import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectFormat } from "@/app/lib/interfaces";

interface ProjectProps {
  project: ProjectFormat;
}

export default function Project({ project }: ProjectProps) {
  return (
    <Card className="md:w-80 md:h-104 my-2">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <div className="md:w-72 md:h-40 mb-4 overflow-hidden mx-auto">
        <img
          src={project.image}
          alt="Project Image"
          className="w-full object-cover"
        />
      </div>
      <CardContent className="text-xs">
        <p className="md:h-24 overflow-auto">{project.summary}</p>
        <br />
        <p>
          <b>Technology used</b>: {project.technology}
        </p>
      </CardContent>
      <CardFooter className="justify-center gap-x-4 pt-2">
        <a href={project.webPageLink} className="text-xs text-green-800 hover:underline">
          View
        </a>
        <a href={project.gitHubLink} className="text-xs text-green-800 hover:underline">
          Source
        </a>
      </CardFooter>
    </Card>
  );
}
