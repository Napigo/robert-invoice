import React from "react";
import { HStack } from "@chakra-ui/react";
import { BreadCrumb } from "../Breadcrumb";
import { NavControls } from "./NavControls";

export const Navbar: React.FC = () => {
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
      <NavControls />
    </HStack>
  );
};
