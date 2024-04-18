"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll(props: any) {
    const { imageSrc, imageAlt, projectName } = props;
  return (
    <div className="flex flex-col overflow-hidden relative">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {/* Unleash the power of <br /> */}
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {projectName}
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
        {/* <div className="absolute bottom-0 p-10">InMoment is a dynamic and innovative company that's all about elevating customer experiences. They specialize in creating solutions that help businesses understand, improve, and connect with their customers on a deeper level. InMoment's worldwide website, utilized by hundreds of editors in eight regions and four languages, is a mammoth filled with challenges, but I've been able to build, maintain and optimize it in so many ways!

            A few cool things I've done with InMoment:

            Led the creation of the header navigation for inmoment.com
            using technologies to enhance user navigation.
            Developed dynamic animations using GreenSock (GSAP) library for our Experience Icons page inmoment.com/experience-icons
            Ongoing development and maintenance of InMoment's marketing website.
            Oversee page and content creation in all eight regions.
        </div> */}
    </div>
  );
}
