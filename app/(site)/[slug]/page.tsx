import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import LinkTarget from "../components/LinkTarget";
import Image from "next/image";

type Props = {
    params: { slug: string };
}

export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);
    
    return (
        <>
            {page.title !== 'About' ? (
                <>
                    <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl drop-shadow font-extrabold">{page.title}</h1>
                    <div className="text-lg text-gray-700 dark:text-white mt-10"><PortableText value={page.content} components={LinkTarget} /></div>
                </>
            ) : (
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3 md:pr-20">
                        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-7xl drop-shadow font-extrabold">{page.title} Preston</h1>
                        <div className="text-lg text-gray-700 dark:text-white mt-10"><PortableText value={page.content} components={LinkTarget} /></div>
                    </div>
                    <div className="md:w-1/3 pt-20 md:pt-0"> 
                        <Image 
                            src="/../public/images/preston-profile-pic.jpg" 
                            height={400}
                            width={400}
                            className=" rounded-3xl"
                            priority={true}
                            alt="Preston Profile pic"
                        />
                    </div>
                </div>
            )}
        </>
    )
}