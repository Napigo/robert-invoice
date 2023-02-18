import React, { useCallback } from "react";
import { BoxProps, HStack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

interface Props extends BoxProps {
  icon: React.ReactElement;
  title: string;
  path?: string;
  onClick?: () => void;
}

export const MenuItem: React.FC<Props> = ({
  icon,
  title,
  path,
  onClick,
  ...boxProps
}) => {
  const location = useLocation();
  const isActive = React.useMemo(() => {
    if (path === undefined) {
      return false;
    }
    return location.pathname.includes(path);
  }, [path, location.pathname]);

  const generateProps = useCallback(() => {
    if (path) {
      return {
        as: Link,
        to: path,
      };
    }
    return {
      as: "button",
      onClick:
        onClick ??
        (() => {
          /** */
        }),
    };
  }, [path, onClick]);

  return (
    <HStack
      {...(generateProps() as any)}
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
      {...boxProps}
    >
      {icon}
      <Text color="gray.600" fontWeight={"normal"}>
        {title}
      </Text>
    </HStack>
  );
};
