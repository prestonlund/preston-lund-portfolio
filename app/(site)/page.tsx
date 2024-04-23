import { getProjects } from "@/sanity/sanity-utils";
import HeroSection from "./components/HeroSection";
import { ThreeDCard } from "./components/ThreeDCard";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <HeroSection />
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
            <ThreeDCard projectName={project.name} imageSrc={project.image} key={project._id} projectHref={project.slug} isLoading={false} />
        ))}
      </div>
    </div>
  )
}
