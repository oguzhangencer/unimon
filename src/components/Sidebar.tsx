import { Avatar, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const pages = [
    {
      title: "Dashboard",
      // icon: {<MdOutlineSpaceDashboard />},
      path: "/",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-start fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto bg-white rounded-r-3xl">
      {/* UniMon Header */}
      <div className="flex p-4">
        {/* TODO: Add Icon or Png for UniMon Logo */}
        <Text>UniMon</Text>
      </div>
      {/* User Avatar & User Name */}
      <div className="flex flex-col items-center p-4">
        <Avatar radius="xl" size="xl" />
        <Text>Oguz</Text>
      </div>
      {/* Rotation Links */}
      <div className="flex flex-col items-start p-4 gap-y-2">
        <Link to="/">Dashboard</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};
