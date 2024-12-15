"use client";
import { ReactNode, useEffect, useState } from "react";
import { ChatNameContext } from "./chatNamesContext";
import { IGroupedChats } from "@/lib/organize_messages";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useUpdateChatName from "@/hooks/useUpdateChatName";
import useFetchChatNames from "@/hooks/useFetchChatNames";

export interface IChatNamesContext {
  chatNames: IGroupedChats | null;
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean
  updateChatName: (data:{chatId: string, chatName: string}) => Promise<void>;
}



const ChatNamesProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, isError,isFetching } = useFetchChatNames()
  const [chatNames, setChatNames] = useState<IGroupedChats | null>(data as IGroupedChats | null);
  const {mutateAsync:updateChatName,status,isError:isChatNameError} = useUpdateChatName();


  useEffect(() => {
    setChatNames(data as IGroupedChats | null);
  }, [data]);


  // useEffect(() => {
  //   if(isStale){
  //     refetch();
  //   }
  // }, [isStale]);


  return (
    <ChatNameContext.Provider value={{updateChatName,chatNames, isLoading, isError ,isFetching}}>{children}</ChatNameContext.Provider>
  );
};


export default ChatNamesProvider;