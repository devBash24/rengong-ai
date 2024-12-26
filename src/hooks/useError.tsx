"use client"
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export interface IError {
  message: string;
  status: string;
}

const redirectStatus = ["500", "404", "403"];

export const useError = () => {
  const router = useRouter();
  const handleError = (error: unknown) => {
    const {message,status} = parseError(error);
    if (redirectStatus.includes(status)) {
      const redirectUrl = `/error?status=${status}&message=${message}`;
      router.push(redirectUrl);
    } else {
      toast.error(message);
    }
  };
  return { handleError };
};

const parseError = (error:unknown) : IError =>{
  console.log(error)
    const message = "An unknown error occurred"
    const status =  "400"
    return {message,status}
}
