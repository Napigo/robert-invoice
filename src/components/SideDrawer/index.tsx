import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineReceiptLong } from "react-icons/md";
import {
  Box,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Logo } from "@/common/Logo";
import { upperCase } from "lodash";
import { MenuTitle } from "./MenuTitle";
import { MenuItem as Item } from "./MenuItem";
import { routerConfig } from "@/configs/router.config";
import { useSession } from "@/hooks/useSession";

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
        border="1px solid transparent"
      >
        <VStack alignItems={"center"} border="1px solid transparent">
          <Logo width={40} height={39} />
        </VStack>
        <VStack alignItems={"flex-start"} gap={0} spacing={"5px"}>
          <Text fontWeight={"bold"} fontSize={"xs"}>
            {upperCase("Robert Invoice")}
          </Text>
          <Menu>
            <MenuButton as={"button"} flex={1}>
              <Link
                fontSize={"xs"}
                borderWidth={1}
                borderColor="card-border-color"
                paddingLeft="2"
                paddingRight="2"
                borderRadius={4}
                fontWeight="bold"
                color="gray.500"
                flexDirection={"row"}
                display="flex"
                alignItems="center"
              >
                <HiMenuAlt2 size={15} />
                {"Menu"}
              </Link>
            </MenuButton>
            <MenuList borderRadius={3}>
              <MenuItem
                icon={<IoMdLogOut fill="inherit" />}
                onClick={clearSession}
              >
                <Text color={"red.500"} fontSize="sm" fontWeight="bold">
                  Logout
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </VStack>
      </HStack>

      <VStack marginTop={50}>
        <MenuTitle title="Main Menu" />
        <Item
          title={routerConfig.orders.title}
          path={routerConfig.orders.path}
          icon={<MdOutlineReceiptLong size={15} />}
        />
        <Item
          title={routerConfig.invoice.title}
          path={routerConfig.invoice.path}
          icon={<FaRegFileAlt size={15} />}
        />
      </VStack>
    </Box>
  );
};

export default SideDrawer;
