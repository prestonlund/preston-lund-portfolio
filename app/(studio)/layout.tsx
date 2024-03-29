import type { Metadata } from "next";
import "../globals.css";
import '../styles/index.scss';

export const metadata: Metadata = {
  title: "Preston Lund",
  description: "Developer and Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
    //   className="bg-white dark:bg-black text-black dark:text-white"
      lang="en"
    >
      <body>
        {children}
      </body>
    </html>
  );
}
