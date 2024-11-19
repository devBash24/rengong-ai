"use client";
export default function Home() {
  return (
     <div className="flex flex-col items-center justify-center h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"   onClick={() => {window.location.href = "/chat"}}>Chat</button>
     </div>
  );
}
