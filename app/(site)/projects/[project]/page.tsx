import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import LinkTarget from "../../components/LinkTarget";
import { HeroScroll } from "../../components/HeroScroll";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-none sm:rounded-2xl -mx-10 md:mx-0">
      {/* <header className="flex justify-between items-center">
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
      </header> */}

      {/* <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-7 border-2 border-gray-700 object-cover rounded-xl" /> */}

      <HeroScroll projectName={project.name} imageSrc={project.image} imageAlt={project.name} />
      
      <div className={`text-lg text-gray-700 dark:text-white md:-mt-52 ${project.name === "Talk with Everyone translator app" ? "pt-0 md:pt-16" : "pt-0 md:pt-5"} px-14 pb-14 relative`}>
        <PortableText value={project.content} components={LinkTarget} />
        <div className="flex justify-start pt-5">
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="  bg-gray-300 rounded-xl text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-purple-700 hover:text-purple-100 transition"
          >
            View Project
          </a>
        </div>
      </div>

    </div>
  );
}
