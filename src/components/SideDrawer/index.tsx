import React from "react";
import { CgUser } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Logo } from "@/common/Logo";
import { upperCase } from "lodash";
import { MenuTitle } from "./MenuTitle";
import { MenuItem } from "./MenuItem";
import { routerConfig } from "@/configs/router.config";

const SideDrawer: React.FC = () => {
  return (
    <Box
      width={240}
      height="100vh"
      background="white"
      borderRightWidth={1}
      paddingLeft={"20px"}
      paddingRight={"20px"}
      flexDirection="column"
      borderColor="card-border-color"
    >
      <HStack
        flex={1}
        height={70}
        alignItems="center"
        border="1px solid transparent"
      >
        <VStack alignItems={"center"} border="1px solid transparent">
          <Logo width={40} height={39} />
        </VStack>
        <VStack alignItems={"flex-start"} spacing={0}>
          <Text fontWeight={"bold"} fontSize={"xs"}>
            {upperCase("Robert Invoice")}
          </Text>
          <Link
            fontSize={"xs"}
            fontWeight="semibold"
            color="gray.500"
            flexDirection={"row"}
            display="flex"
            alignItems="center"
          >
            <CgUser size={15} />
            {upperCase("ACCOUNT")}
          </Link>
        </VStack>
      </HStack>

      <VStack marginTop={50}>
        <MenuTitle title="Main Menu" />
        <MenuItem
          title={routerConfig.orders.title}
          path={routerConfig.orders.path}
          icon={<MdOutlineReceiptLong size={15} />}
        />
        <MenuItem
          title={routerConfig.invoice.title}
          path={routerConfig.invoice.path}
          icon={<FaRegFileAlt size={15} />}
        />
      </VStack>
    </Box>
  );
};

export default SideDrawer;
