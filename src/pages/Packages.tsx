import { Text } from "@mantine/core";

export const Packages = () => {
  return (
    <div className="flex">
      {/* Package 1 */}
      <div className="flex flex-col">
        {/* Header */}
        <div></div>
        {/* Feauters */}
        <div></div>
        {/* Includes */}
        <div>
          <Text>Includes</Text>
        </div>
      </div>

      {/* Package 2 */}
      <div className="flex flex-col"></div>

      {/* Package 3 */}
      <div className="flex flex-col"></div>

      {/* Package 4 */}
      <div className="flex flex-col"></div>
    </div>
  );
};
