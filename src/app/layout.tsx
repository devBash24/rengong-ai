import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/Context/TanStack Query/queryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rengong Ai",
  description: "AI Chatbot",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen max-h-screen overflow-hidden`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
