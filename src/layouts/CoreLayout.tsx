import React from "react";
import SideDrawer from "@/components/SideDrawer";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Nav } from "@/components/Nav";
import { Outlet } from "react-router-dom";

export const CoreLayout: React.FC = () => {
  return (
    <HStack spacing={0} width="100vw">
      <SideDrawer />
      <VStack spacing={0} height="100vh" flex={1}>
        <Nav />
        <Box
          flex={1}
          width="100%"
          minHeight="calc(100vh - 70px)"
          overflow="scroll"
        >
          <Outlet />
        </Box>
      </VStack>
    </HStack>
  );
};
