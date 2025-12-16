import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//@ts-ignore
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToDo List",
  description: "A pink, minimalist to-do list built by Hsh",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "To-Do List App",
    description: "Plan your day with this clean to-do app",
    url: "https://todobyh.vercel.app",
    siteName: "To-Do App",
    images: [
      {
        url: "/prev.png",
        width: 1200,
        height: 630,
        alt: "To-Do App Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
