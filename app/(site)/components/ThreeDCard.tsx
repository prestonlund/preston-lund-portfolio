"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCard(props: any) {
    const { imageSrc, projectKey, projectHref, projectName } = props;
  return (
    <CardContainer key={projectKey} className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto lg:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {projectName}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Link className="" href={`/projects/${projectHref}`}>
            <Image
              src={imageSrc}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </Link>
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <Link className="" href={`/projects/${projectHref}`}>
            <CardItem
              translateZ={20}
              as="button"
              className="hover:bg-purple-700 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Check it out
            </CardItem>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}
