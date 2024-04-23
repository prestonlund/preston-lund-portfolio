'use client'

import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@sanity/icons"; // Import these if needed
import { Project } from "@/types/Project";
import { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

type ProjectLinkProps = {
  project: Project;
  direction: "next" | "prev";
  isLoading: boolean;
};

const ProjectLink = ({ project, direction, isLoading }: ProjectLinkProps) => {
    const [interanlLoading, setInternalLoading] = useState(false)

    function handleLoading() {
        setInternalLoading(true);
        setTimeout(() => {
            setInternalLoading(false);
        }, 4500);
    }
    
  return (
    <div className={`${direction}-post flex-grow `}>
      <Link
        href={`/projects/${project.slug}`}
        onClick={() => handleLoading()}
        className={`${direction === "prev" ? "flex-row" : "flex-row-reverse"} group relative flex items-center justify-between overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-300 no-underline transition-colors hover:bg-gray-200 py-2 px-2 dark:text-gray-800 `}>

        <div className={`${interanlLoading ? '' : "hidden"} absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-gray-800 opacity-75 z-10`}>
            <LoadingSpinner />
        </div>
        <div className="relative z-10 flex flex-grow justify-center">
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm opacity-50">
              {direction === "prev" ? "Previous Project" : "Next Project"}
            </span>
            <span className="text-md lg:text-lg">{project.name}</span>
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