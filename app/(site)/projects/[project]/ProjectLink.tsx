import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@sanity/icons"; // Import these if needed
import { Project } from "@/types/Project";

type ProjectLinkProps = {
  project: Project;
  direction: "next" | "prev";
};

const ProjectLink = ({ project, direction }: ProjectLinkProps) => {
  return (
    <div className={`${direction}-post flex-grow `}>
      <Link
        href={`/projects/${project.slug}`}
        className={`${direction === "prev" ? "flex-row" : "flex-row-reverse"} group relative flex items-center justify-between overflow-hidden rounded-xl bg-gray-100 no-underline transition-colors hover:bg-gray-200 py-2 `}>

        <div className="relative z-10 flex flex-grow justify-center">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm opacity-50">
              {direction === "prev" ? "Previous Project" : "Next Project"}
            </span>
            <span className="text-lg">{project.name}</span>
          </div>
        </div>
        <div className="justify-self-end text-[4rem]">
          {direction === "prev" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </div>

      </Link>
    </div>
  );
};

export default ProjectLink;