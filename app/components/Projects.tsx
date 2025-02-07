import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/app/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  image
}`;

//To build the image's URL
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const options = { next: { revalidate: 30 } };

export default async function Projects() {
  const projects = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ul className="flex flex-col gap-y-4">
        {projects.map((project) => (
          <li className="hover:underline" key={project._id}>
            <Link href={`/${project.slug.current}`}>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              {project.image && (
              <img
                src={urlFor(project.image).width(800).url()}
                alt={project.title}
                className="w-full rounded"
              />
            )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}