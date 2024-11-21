import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import ChatProvider from "@/Context/Chat/chatProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ChatProvider>

    <div className="flex flex-col bg-background h-screen w-screen">
      <Navbar />
      <div className="flex flex-col h-full w-full flex-1 sm:flex-row ">
        <Sidebar />
        {children}
      </div>
    </div>
      </ChatProvider>
  );
}
