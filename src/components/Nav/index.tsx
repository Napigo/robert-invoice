import { Center, Divider, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { FaFileCsv, FaPlus } from "react-icons/fa";
import { BreadCrumb } from "../Breadcrumb";

export const Nav: React.FC = () => {
  return (
    <HStack
      as="nav"
      background="card-body-bg"
      width="100%"
      height="70px"
      borderBottomWidth={1}
      borderBottomColor="card-border-color"
      paddingLeft={"20px"}
      paddingRight={"20px"}
      justifyContent="space-between"
    >
      <BreadCrumb />
      <HStack gap={4}>
        <Link
          fontSize={13}
          fontWeight="semibold"
          color="brand.500"
          display={"flex"}
          flexDirection="row"
          gap={1}
          alignItems="center"
        >
          <FaPlus /> CREATE ORDERS
        </Link>
        <Center height={"30px"}>
          <Divider orientation="vertical" color={"gray.500"} />
        </Center>
        <Link
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
      </HStack>
    </HStack>
  );
};
