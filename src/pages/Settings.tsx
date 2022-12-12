import { Avatar, Text } from "@mantine/core";

export const Settings = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <Text className="text-slate-800">Edit Profile</Text>
      <Avatar radius="xl" size="xl" />
    </div>
  );
};
