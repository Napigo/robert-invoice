import { background, HStack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

type Props = {
  icon: React.ReactElement;
  title: string;
  path: string;
};
export const MenuItem: React.FC<Props> = ({ icon, title, path }) => {
  const location = useLocation();
  const isActive = React.useMemo(() => {
    return location.pathname.includes(path);
  }, [path, location.pathname]);

  return (
    <HStack
      as={Link}
      replace
      to={path}
      borderRadius="md"
      paddingTop="5px"
      paddingBottom="5px"
      paddingLeft="5px"
      _hover={{
        background: "gray.100",
      }}
      background={isActive ? "gray.100" : "transparent"}
      width="100%"
      marginLeft={"-10px"}
      marginRight={"-10px"}
      color={isActive ? "brand.500" : "gray.500"}
    >
      {icon}
      <Text color="gray.600" fontWeight={"semibold"}>
        {title}
      </Text>
    </HStack>
  );
};
