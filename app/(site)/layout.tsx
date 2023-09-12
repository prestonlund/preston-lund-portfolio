import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Noto_Sans } from "next/font/google";

const noto = Noto_Sans({
  weight: ['400', '900'],
  subsets: ['latin'],
  variable: '--font-noto'
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
      <body className={`${noto.variable} font-sans max-w-3xl mx-auto py-10`}>
        <header className="flex items-center justify-between">
          <Link href='/' className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Preston Lund</Link>

          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link className="hover:underline" key={page._id} href={`/${page.slug}`}>{page.title}</Link>
            ))}
          </div>
        </header>
        <main className='py-20'>{children}</main>
        <footer>Made by <span><Link className="hover:underline" href={`/about`}>Preston Lund</Link></span></footer>
      </body>
    </html>
  );
}
