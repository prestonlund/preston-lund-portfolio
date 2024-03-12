import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import LinkTarget from "../../components/LinkTarget";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="pt-1 pb-2 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-4xl md:text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>

      <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-7 border-2 border-gray-700 object-cover rounded-xl" />
      
      <div className="text-lg text-gray-700 dark:text-white mt-5">
        <PortableText value={project.content} components={LinkTarget} />
      </div>

    </div>
  );
}
