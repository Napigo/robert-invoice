import { Box, Flex, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

export const TableLoader: React.FC = () => {
  return (
    <VStack
      flex={1}
      width="100%"
      height="100%"
      alignItems={"center"}
      justifyContent="center"
      position={"absolute"}
      zIndex={10}
    >
      <Spinner
        color="brand.500"
        size="xl"
        thickness="4px"
        emptyColor="brandAlpha.300"
      />
      <Box
        background="black"
        opacity={0.2}
        width={"inherit"}
        height="inherit"
        position={"absolute"}
      />
    </VStack>
  );
};
