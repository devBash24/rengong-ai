import NavigationProvider from "@/Context/Navigation/navigatorProvider";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import ChatNamesProvider from "@/Context/ChatNames/chatNamesProvider";
import ActiveChatProvider from "@/Context/ActiveChat/activeChatProvider";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <NavigationProvider>
      <ChatNamesProvider>
        <ActiveChatProvider>
          <div className="flex flex-col bg-background h-screen max-h-screen w-screen">
            <Navbar />
            <div className="flex flex-col h-full max-h-sidebar w-full flex-1 sm:flex-row ">
              <Sidebar />
              {children}
            </div>
          </div>
        </ActiveChatProvider>
      </ChatNamesProvider>
    </NavigationProvider>
  );
}
