import { Center, Divider, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { FaFileCsv, FaPlus } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const NavControls: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <HStack gap={4}>
      {pathname.includes("/invoice") && (
        <>
          <Link
            as={RouterLink}
            to="/"
            fontSize={13}
            fontWeight="semibold"
            color="brand.500"
            display={"flex"}
            flexDirection="row"
            gap={1}
            alignItems="center"
          >
            <FaPlus /> CREATE INVOICE
          </Link>
          <Center height={"30px"}>
            <Divider orientation="vertical" color={"gray.500"} />
          </Center>
          <Link
            as={RouterLink}
            to="/"
            fontSize={13}
            fontWeight="semibold"
            color="brand.500"
            display={"flex"}
            flexDirection="row"
            gap={1}
            alignItems="center"
          >
            <FaFileCsv /> IMPORT TO CSV
          </Link>
        </>
      )}
    </HStack>
  );
};
