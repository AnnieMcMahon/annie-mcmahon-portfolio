import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { CardFormat } from "@/app/lib/interfaces";

interface ProjectProps {
  project: CardFormat;
}

export default function Project({ project }: ProjectProps) {
  return (
    <Card className="w-64 h-104 my-2">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <div className="w-56 h-40 mb-4 overflow-hidden mx-auto">
        <img
          src={project.image}
          alt="Project Image"
          className="w-full object-cover"
        />
      </div>
      <CardContent className="text-xs">
        <p className="h-24 overflow-auto">{project.summary}</p>
        <br />
        <p>
          <b>Technology used</b>: {project.technology}
        </p>
      </CardContent>
      <CardFooter className="justify-center gap-x-4 pt-2">
        <a href={project.webPageLink} className="text-blue-500 hover:underline">
          View
        </a>
        <a href={project.gitHubLink} className="text-blue-500 hover:underline">
          Source
        </a>
      </CardFooter>
    </Card>
  );
}
