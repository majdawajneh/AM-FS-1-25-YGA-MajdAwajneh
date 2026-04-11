import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Majd | Full-Stack Developer & UI/UX Designer",
  description: "Professional portfolio of Majd - Full-Stack Developer and UI/UX Designer based in Amman",
  keywords: ["portfolio", "full-stack developer", "UI/UX designer", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

