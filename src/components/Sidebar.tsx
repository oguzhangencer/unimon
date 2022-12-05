import { Avatar, Text } from "@mantine/core";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
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
    <div className="flex flex-col items-center justify-start fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto bg-white rounded-r-3xl">
      {/* UniMon Header */}
      <div className="flex p-4">
        {/* TODO: Add Icon or Png for UniMon Logo */}
        <Text className=" font-semibold text-4xl">UniMon</Text>
      </div>
      {/* User Avatar & User Name */}
      <div className="flex flex-col items-center p-4 my-6 gap-y-2">
        <Avatar
          radius="xl"
          size="xl"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
        <Text className="font-bold text-xl">Oguz</Text>
      </div>
      {/* Rotation Links */}
      <div className="flex flex-col items-start p-4 gap-y-4">
        {pages.map((page) => (
          <NavLink to={page.path} className="link">
            <div className="flex gap-x-2 items-center hover:bg-zinc-200 text-2xl text-zinc-900 p-2 rounded-xl">
              {page.icon}
              {page.title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
