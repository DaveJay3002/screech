"use client";

import { useRouter } from "next/navigation";
import { FaFeather } from "react-icons/fa";

type Props = {};

function SidebarTweetButton({}: Props) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
    >
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={28} color="white" />
      </div>
      <div className="mt-6 hidden lg:block cursor-pointer hover:bg-opacity-90 px-4 py-2 rounded-full bg-sky-500 transition">
        <p className="hidden lg:block text-center text-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
}

export default SidebarTweetButton;
