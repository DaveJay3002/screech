"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { BiArrowBack } from "react-icons/bi";

type Props = { label: String; showBackArrow?: boolean };

function Header({ label, showBackArrow }: Props) {
  const router = useRouter();
  const handleBack = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
        <BiArrowBack
          onClick={handleBack}
          size={20}
          color="white"
          className="cursor-pointer hover:bg-opacity-80 transition"
        />
        )}
        <h1 className="text-white text-semibold text-xl">{label}</h1>
      </div>
    </div>
  );
}

export default Header;
