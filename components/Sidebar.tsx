import { BsBellFill, BsHouseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

type Props = {};

function Sidebar({}: Props) {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
      onClick: () => {},
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      onClick: () => {},
    },
    {
      label: "Profile",
      href: "/user/123",
      icon: FaUser,
      onClick: () => {},
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              onClick={item.onClick}
            />
          ))}
          <SidebarItem label="Logout" icon={BiLogOut} onClick={() => {}} />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
