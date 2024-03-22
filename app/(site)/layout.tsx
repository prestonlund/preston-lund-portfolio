import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import '../styles/index.scss';
import type { Metadata } from "next";
import Link from "next/link";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-urbanist'
})

export const metadata: Metadata = {
  title: "Preston Lund",
  description: "Developer and Designer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all my pages
  const pages = await getPages();

  return (
    <html
      className="bg-white dark:bg-black text-black dark:text-white"
      lang="en"
    >
      <body className={`${urbanist.variable} font-sans max-w-6xl mx-auto py-10 px-10 lg:px-0`}>
        <header className="flex items-center justify-between">
          <Link href='/' className="preston-header bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Preston Lund</Link>

          <div className="flex items-center gap-5 text-sm text-gray-600 dark:text-white">
            {pages.map((page) => (
              <Link className="hover:underline" key={page._id} href={`/${page.slug}`}>{page.title}</Link>
            ))}
          </div>
        </header>
        <main className=' pt-14 pb-20 sm:py-20'>{children}</main>
        <footer>Made by <span><Link className="hover:underline" href={`/about`}>Preston Lund</Link></span></footer>
      </body>
    </html>
  );
}
