import { Avatar, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";

export const Sidebar = () => {
  const pages = [
    {
      path: "/",
      title: "Dashboard",
      icon: <MdSpaceDashboard />,
    },
    {
      path: "/customers",
      title: "Customers",
      icon: <FaUserFriends />,
    },
    {
      path: "/packages",
      title: "Packages",
      icon: <GiBoxUnpacking />,
    },
    {
      path: "/settings",
      title: "Settings",
      icon: <IoSettingsSharp />,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-start fixed top-0 bottom-0 p-2 w-[250px] overflow-y-auto bg-slate-800">
      {/* UniMon Header */}
      <div className="flex p-4">
        {/* TODO: Add Icon or Png for UniMon Logo */}
        <Text className=" font-semibold text-4xl text-white">UniMon</Text>
      </div>
      {/* User Avatar & User Name */}
      <div className="flex flex-col items-center p-4 my-6 gap-y-2">
        <Avatar radius="xl" size="xl" />
        <Text className="font-bold text-xl text-white">Oguz</Text>
      </div>
      {/* Rotation Links */}
      <div className="flex flex-col items-stretch gap-y-4">
        {pages.map((page, index) => (
          <NavLink key={index} to={page.path}>
            <div className="flex gap-x-2 gap-y-4 p-2 items-center justify-stretch hover:bg-zinc-200 hover:bg-opacity-30 text-2xl text-gray-400 focus:text-white rounded-xl">
              {page.icon}
              {page.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
