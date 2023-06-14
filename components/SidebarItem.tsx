import React from "react";
import { IconType } from "react-icons";

type Props = {
  label: String;
  href?: String;
  icon: IconType;
  onClick: () => void;
};

function SidebarItem({ label, href, icon:Icon, onClick }: Props) {
  return (
    <div className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden ">
        <Icon size={28}  color="white"/>
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
}

export default SidebarItem;
