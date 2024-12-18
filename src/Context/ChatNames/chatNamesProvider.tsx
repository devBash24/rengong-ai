"use client";
import { ReactNode, useEffect, useState } from "react";
import { ChatNameContext } from "./chatNamesContext";
import { IGroupedChats } from "@/lib/organize_messages";
import useUpdateChatName from "@/hooks/useUpdateChatName";
import useFetchChatNames from "@/hooks/useFetchChatNames";
import { useDeleteChat } from "@/hooks/useDeleteChat";
import { useQueryClient } from "@tanstack/react-query";

export interface IChatNamesContext {
  chatNames: IGroupedChats | null;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean
  updateChatName: (data:{chatId: string, chatName: string}) => Promise<void>;
  onChatDelete: (id: string) => Promise<void>;
}



const ChatNamesProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isError,isFetching } = useFetchChatNames()
  const [chatNames, setChatNames] = useState<IGroupedChats | null>(data as IGroupedChats | null);
  const {mutateAsync:updateChatName} = useUpdateChatName();
  const {mutateAsync:deleteChat} = useDeleteChat();
  const queryClient = useQueryClient();


  useEffect(() => {
    setChatNames(data as IGroupedChats | null);
  }, [data]);

  const onChatDelete = async (id: string) => {
    try{
        await deleteChat({chatId: id});
        queryClient.invalidateQueries({ queryKey: ["chatNames"] });
        console.log("Chat deleted");
    }
    catch(e){
        console.log(e);
    }
  };
  return (
    <ChatNameContext.Provider value={{onChatDelete,updateChatName,chatNames, isLoading, isError ,isFetching}}>{children}</ChatNameContext.Provider>
  );
};


export default ChatNamesProvider;