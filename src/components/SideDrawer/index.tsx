import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Logo } from "@/common/Logo";
import { upperCase } from "lodash";
import { MenuTitle } from "./MenuTitle";
import { MenuItem as Item } from "./MenuItem";
import { routerConfig } from "@/configs/router.config";
import { useSession } from "@/hooks/useSession";
import { MdLogout } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const SideDrawer: React.FC = () => {
  const { clearSession } = useSession();
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
        // borderBottomColor="gray.200"
        // borderBottomWidth="1px"
        // border="1px solid black"
        paddingTop={"10px"}
      >
        <VStack alignItems={"center"} border="1px solid transparent">
          <Logo width={40} height={39} />
        </VStack>
        <VStack
          alignItems={"flex-start"}
          gap={0}
          spacing={"5px"}
          bg="pinks"
          flex={1}
        >
          <Text fontWeight={"bold"} fontSize={"xs"}>
            {upperCase("Robert Invoice")}
          </Text>
        </VStack>
      </HStack>

      <VStack marginTop={50} bg="s" flex={1}>
        <MenuTitle title="Main Menu" />
        <Item
          title={routerConfig.invoice.title}
          path={routerConfig.invoice.path}
          icon={<FaRegFileAlt size={15} />}
        />
        <Item
          title={routerConfig.products.title}
          path={routerConfig.products.path}
          icon={<FiShoppingCart size={15} />}
        />

        <MenuTitle title="Options" />
        <Item
          onClick={clearSession}
          title="Logout"
          icon={<MdLogout size={15} />}
        />
      </VStack>
    </Box>
  );
};

export default SideDrawer;
